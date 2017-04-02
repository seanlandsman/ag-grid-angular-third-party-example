import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular/dist/interfaces";

@Component({
    selector: 'progress-component',
    template: `
        <md-progress-circle *ngIf="!value"
                [color]="color"
                [mode]="mode">
        </md-progress-circle>
        <span *ngIf="value">{{value}}</span>
    `,
    styles: [`
        /deep/
        .mat-progress-circle {
            height: 48px !important;
            width: 48px !important;
        }
    `]
})
export class MdProgressSpinnerComponent implements ICellRendererAngularComp {
    params: any;
    value: any = null;

    color = 'primary';
    mode = 'indeterminate';

    agInit(params: any): void {
        this.params = params;
        this.value = this.params.value;
    }

    refresh(params: any) {
        this.params = params;
        this.value = this.params.value;
    }
}

