import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert.service';
import { IAlert } from 'src/app/shared/models/alert';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
    private subscription: Subscription;
    public message: IAlert;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.subscription = this.alertService.getAlert()
            .subscribe(res => {
                switch (res && res.type) {
                    case 'success':
                        res.cssClass = 'alert alert-success';
                        break;
                    case 'error':
                        res.cssClass = 'alert alert-danger';
                        break;
                }
                this.message = res;
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
