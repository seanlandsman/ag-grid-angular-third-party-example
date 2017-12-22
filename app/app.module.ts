import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
// ag-grid
import {AgGridModule} from "ag-grid-angular/main";
// application
import {AppComponent} from "./app.component";
// ng2 bootstrap
import {BsDropdownModule, ButtonsModule, DatepickerModule} from "ngx-bootstrap";
import {BootstrapDatePickerComponent} from "./bs-editor-component-example/date-picker.component";
import {BootstrapDropdownComponent} from "./bs-editor-component-example/dropdown.component";
import {BootstrapEditorComponent} from "./bs-editor-component-example/bootstrap-editor.component";
import {BootstrapRadioComponent} from "./bs-editor-component-example/radio-buttons.component";
// material design
import {
    MatButtonToggleModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule
} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatEditorComponentOne} from "./mat-editor-component-example/mat-editor-one.component";
import {MatCheckboxComponent} from "./mat-editor-component-example/mat-checkbox.component";
import {MatInputComponent} from "./mat-editor-component-example/mat-input.component";
import {MatRadioComponent} from "./mat-editor-component-example/mat-radio.component";
import {MatSelectComponent} from "./mat-editor-component-example/mat-select.component";
import {MatEditorComponentTwo} from "./mat-editor-component-example/mat-editor-two.component";
import {MatSliderComponent} from "./mat-editor-component-example/mat-slider.component";
import {MatButtonToggleHeaderComponent} from "./mat-editor-component-example/mat-button-toggle.component";
import {MatProgressSpinnerComponent} from "./mat-editor-component-example/mat-progress-spinner.component";
import {ColumnAlignmentService} from "./services/columnAlignmentService";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AgGridModule.withComponents(
            [
                BootstrapDatePickerComponent,
                BootstrapDropdownComponent,
                BootstrapRadioComponent,
                MatCheckboxComponent,
                MatInputComponent,
                MatRadioComponent,
                MatSelectComponent,
                MatSliderComponent,
                MatButtonToggleHeaderComponent,
                MatProgressSpinnerComponent
            ]),
        DatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
        ButtonsModule.forRoot(),
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatButtonToggleModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSliderModule
    ],
    declarations: [
        AppComponent,
        BootstrapEditorComponent,
        BootstrapDatePickerComponent,
        BootstrapDropdownComponent,
        BootstrapRadioComponent,
        MatEditorComponentOne,
        MatCheckboxComponent,
        MatInputComponent,
        MatRadioComponent,
        MatSelectComponent,
        MatEditorComponentTwo,
        MatSliderComponent,
        MatButtonToggleHeaderComponent,
        MatProgressSpinnerComponent
    ],
    providers: [ColumnAlignmentService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
