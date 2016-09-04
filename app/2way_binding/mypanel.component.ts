import {Component, Input, ElementRef, Renderer} from "@angular/core";
/**
 * Created by pramoth on 9/4/2016 AD.
 */
@Component({
    moduleId: module.id,
    selector: "my-panel",
    templateUrl: 'mypanel.html'
})
export class MyPanelComponent {
    private _name: string[] ;
    private title1:string="";
    private title2:string="";
    private title3:string="";
    private render;
    constructor(render:Renderer,private value:ElementRef){
    }

    @Input("my-name")
    set name(value: string[]) {
        this._name = value;
    }

    get name(): string[] {
        return this._name;
    }
    call(value:ElementRef){

    }
}