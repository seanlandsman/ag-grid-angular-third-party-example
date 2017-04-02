import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
// ag-grid
import {AgGridModule} from "ag-grid-angular/main";
// application
import {AppComponent} from "./app.component";
// ng2 bootstrap
import {ButtonsModule, DatepickerModule, DropdownModule} from "ng2-bootstrap";
import {BootstrapDatePickerComponent} from "./bs-editor-component-example/date-picker.component";
import {BootstrapDropdownComponent} from "./bs-editor-component-example/dropdown.component";
import {BootstrapEditorComponent} from "./bs-editor-component-example/bootstrap-editor.component";
import {BootstrapRadioComponent} from "./bs-editor-component-example/radio-buttons.component";
// material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {MdEditorComponentOne} from "./md-editor-component-example/md-editor-one.component";
import {MdCheckboxComponent} from "./md-editor-component-example/md-checkbox.component";
import {MdInputComponent} from "./md-editor-component-example/md-input.component";
import {MdRadioComponent} from "./md-editor-component-example/md-radio.component";
import {MdSelectComponent} from "./md-editor-component-example/md-select.component";

import {MdEditorComponentTwo} from "./md-editor-component-example/md-editor-two.component";
import {MdSliderComponent} from "./md-editor-component-example/md-slider.component";
import {MdButtonToggleHeaderComponent} from "./md-editor-component-example/md-button-toggle.component";
import {ColumnAlignmentService} from "./services/columnAlignmentService";
import {MdProgressSpinnerComponent} from "./md-editor-component-example/md-progress-spinner.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AgGridModule.withComponents(
            [
                BootstrapDatePickerComponent,
                BootstrapDropdownComponent,
                BootstrapRadioComponent,
                MdCheckboxComponent,
                MdInputComponent,
                MdRadioComponent,
                MdSelectComponent,
                MdSliderComponent,
                MdButtonToggleHeaderComponent,
                MdProgressSpinnerComponent
            ]),
        DatepickerModule.forRoot(),
        DropdownModule.forRoot(),
        ButtonsModule.forRoot(),
        BrowserAnimationsModule,
        MaterialModule
    ],
    declarations: [
        AppComponent,
        BootstrapEditorComponent,
        BootstrapDatePickerComponent,
        BootstrapDropdownComponent,
        BootstrapRadioComponent,
        MdEditorComponentOne,
        MdCheckboxComponent,
        MdInputComponent,
        MdRadioComponent,
        MdSelectComponent,
        MdEditorComponentTwo,
        MdSliderComponent,
        MdButtonToggleHeaderComponent,
        MdProgressSpinnerComponent
    ],
    providers: [ColumnAlignmentService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
