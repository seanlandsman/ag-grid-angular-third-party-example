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
import {MdEditorComponent} from "./md-editor-component-example/md-editor.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AgGridModule.withComponents(
            [
                BootstrapDatePickerComponent,
                BootstrapDropdownComponent,
                BootstrapRadioComponent
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
        MdEditorComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
