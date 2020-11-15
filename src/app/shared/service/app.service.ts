import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApexService } from './apex.service';

@Injectable()
export class AppService {
    constructor(private router: Router, private route: ActivatedRoute, private apexService: ApexService) {}
}
