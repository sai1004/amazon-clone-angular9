import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppService } from './app.service';

@Injectable()
export class HttpService {
    private host = 'localhost';

    constructor(private http: HttpClient) {}

    get(url: string, data: any, loader?: boolean) {
        url = this.host + url;
        return this.http.get(url);
    }

    post(url: string, data: any, loader?: boolean) {
        url = this.host + url;
        return this.http.post(url, data);
    }

    put(url: string, data: any, loader?: boolean) {
        url = this.host + url;
        return this.http.put(url, data);
    }

    delete(url: string, data: any, loader?: boolean) {
        url = this.host + url;
        return this.http.delete(url + data);
    }

    getById(url: string, Id: any, loader?: boolean) {
        url = this.host + url;
        return this.http.get(url + Id);
    }

    getJsonData(url: string) {
        return this.http.get(url);
    }
}
