import {Component} from "@angular/core";
import {IDateParams} from "ag-grid/main";
import {IDateAngularComp} from "ag-grid-angular/main";

@Component({
    selector: 'date-editor-cell',
    template: `
        <datepicker (selectionDone)="onClick($event)" [showWeeks]="false"></datepicker>
    `
})
export class BootstrapDatePickerDateComponent implements IDateAngularComp {
    private params: any;

    public selectedDate: Date = new Date();

    agInit(params: IDateParams): void {
        this.params = params;
    }

    getDate(): Date {
        return this.selectedDate;
    }

    setDate(date: Date): void {
        this.selectedDate = date;
    }


    onClick(date:Date) {
        this.selectedDate = date;
        this.params.onDateChanged();
    }
}