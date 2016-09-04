import {NgModule} from "@angular/core";
import {MyappComponent} from "./myapp.component";
import {BrowserModule} from "@angular/platform-browser";
import {MyPanelComponent} from "./2way_binding/mypanel.component";
import {FormsModule} from "@angular/forms";
/**
 * Created by pramoth on 9/4/2016 AD.
 */

@NgModule({
    declarations:[MyappComponent,MyPanelComponent],
    imports:[BrowserModule,FormsModule],
    bootstrap:[MyappComponent]
})
export class AppModule{

}