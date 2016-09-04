import {Component, Input} from "@angular/core";
/**
 * Created by pramoth on 9/4/2016 AD.
 */
@Component({
    moduleId:module.id,
    selector:'myapp',
    templateUrl:'myapp.html'
})
export class MyappComponent{
    private myDisable:boolean=true;
    private myName:string[] = ["Pramoth"," Suwanpech"];

    getDisabled():boolean{
        return this.myDisable;
    }
}