import {Component} from "@angular/core";

import {GridOptions} from "ag-grid/main";
import {BootstrapDatePickerDateComponent} from "./date-picker.date.component";
import {BootstrapRadioComponent} from "./radio-buttons.component";
import {BootstrapDropdownComponent} from "./dropdown.component";
import {BootstrapDatePickerComponent} from "./date-picker.component";

@Component({
    moduleId: module.id,
    selector: 'ag-bs-editor-component',
    templateUrl: 'bootstrap-editor.component.html',
})
export class BootstrapEditorComponent {
    public gridOptions: GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{
            rowData: this.createRowData(),
            columnDefs: this.createColumnDefs(),
            enableFilter: true,
            onGridReady: () => {
                this.gridOptions.api.sizeColumnsToFit();
            },
            dateComponentFramework: BootstrapDatePickerDateComponent
        }
    }

    private createColumnDefs() {
        return [
            {
                headerName: "Date Picker",
                field: "date",
                cellEditorFramework: BootstrapDatePickerComponent,
                editable: true
            },
            {
                headerName: "Dropdown",
                field: "fruit_vegetables",
                cellEditorFramework: BootstrapDropdownComponent,
                cellEditorParams: {
                    fruits: ['Apple', 'Orange', 'Banana'],
                    vegetables: ['Carrot', 'Pea', 'Broccoli']
                },
                editable: true
            },
            {
                headerName: "Radio (inline editing)",
                field: "on_off",
                cellRendererFramework: BootstrapRadioComponent
            },
            {
                headerName: "Date Picker DateComponent",
                field: "date",
                filter: 'date',
                filterParams: {
                    comparator: function (filterLocalDateAtMidnight, cellValue) {
                        var dateAsString = cellValue;
                        var dateParts = dateAsString.split("/");
                        var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));

                        if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
                            return 0
                        }

                        if (cellDate < filterLocalDateAtMidnight) {
                            return -1;
                        }

                        if (cellDate > filterLocalDateAtMidnight) {
                            return 1;
                        }
                    }
                }
            }
        ];
    }

    private createRowData() {
        return [
            {date: "11/07/2017", fruit_vegetables: 'Apple', on_off: 'On'},
            {date: "20/02/2015", fruit_vegetables: 'Broccoli', on_off: 'On'},
            {date: "05/05/1969", fruit_vegetables: 'Carrot', on_off: 'Off'},
            {date: "10/01/1980", fruit_vegetables: 'Banana', on_off: 'On'}
        ];
    }
}