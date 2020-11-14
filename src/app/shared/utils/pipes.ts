import { Pipe, PipeTransform } from '@angular/core';
import { Util } from './util';
import { StorageService } from '../service/storage.service';

@Pipe({ name: 'percentage' })
export class PercentagePipe implements PipeTransform {
    transform(value: any, args: any) {
        if (!value) {
            value = '0.0';
        }
        var sign = '\u0025';
        if (args && args[0]) {
            sign = args[0];
        }
        var p = Number(value).toFixed(2).split('.');

        return (
            p[0]
                .split('')
                .reverse()
                .reduce(function (acc: any, num: any, i: any, orig: any) {
                    return num + (i && !(i % 3) ? ',' : '') + acc;
                }, '') +
            '.' +
            p[1] +
            ' ' +
            sign
        );
    }
}

@Pipe({ name: 'currency' })
export class CurrencyPipe implements PipeTransform {
    transform(value: any, args: any) {
        if (!value) {
            value = 0.0;
        }
        var sign = '';
        if (args && args[0]) {
            sign = args[0];
        } else {
            sign = sessionStorage.getItem('CurrencySign');
            if (!sign) {
                sign = '\u20b9';
            }
        }
        var p = Number(value).toFixed(2).split('.');

        return (
            sign +
            ' ' +
            p[0]
                .split('')
                .reverse()
                .reduce(function (acc: any, num: any, i: any, orig: any) {
                    return num + (i && !(i % 3) ? ',' : '') + acc;
                }, '') +
            '.' +
            p[1]
        );
    }
}
@Pipe({ name: 'decodeURI' })
export class DecodeURIPipe implements PipeTransform {
    transform(value: any, args: any) {
        if (!value || value == '') {
            value = '';
        } else {
            value = decodeURIComponent(value.replace(/\+/g, ' '));
        }
        return value;
    }
}
@Pipe({ name: 'date' })
export class DatePipe implements PipeTransform {
    transform(value: any, args: any) {
        return Util.DateFormate(value);
    }
}
@Pipe({ name: 'datetime' })
export class DateTimePipe implements PipeTransform {
    transform(value: any, args: any) {
        return Util.DateTimeFormate(value);
    }
}
@Pipe({ name: 'datetimeISO' })
export class DateTimeISOPipe implements PipeTransform {
    transform(value: any, args: any) {
        return Util.ISODate(value);
    }
}
@Pipe({ name: 'flag' })
export class FlagPipe implements PipeTransform {
    transform(value: any, args: any) {
        return value ? 'Active' : 'De-active';
    }
}

@Pipe({ name: 'decode' })
export class DecodePipe implements PipeTransform {
    transform(value: any, args: any) {
        if (value) {
            return atob(value);
        }
        return '';
    }
}

@Pipe({ name: 'age' })
export class AgePipe implements PipeTransform {
    transform(value: any, args: any) {
        if (value) {
            var timeDiff = Math.abs(Date.now() - new Date(value).getTime());
            let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
            return age;
        } else {
            return 0;
        }
    }
}

@Pipe({ name: 'lang' })
export class LangPipe implements PipeTransform {
    constructor(private storage: StorageService) {}
    transform(value: any, args: any) {
        let langData = this.storage.getI18N();
        if (value) {
            if (langData[value]) {
                if (this.storage.getLang() == 'en') {
                    return langData[value].en;
                } else {
                    return langData[value].ar;
                }
            } else {
                return value;
            }
        } else {
            return 'NA';
        }
    }
}
