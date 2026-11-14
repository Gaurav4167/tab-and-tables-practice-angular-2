import { Component } from "@angular/core";


@Component({
    selector : "app-htmltab",
    templateUrl : "./htmltab.component.html",
    styleUrls : ["./htmltab.component.scss"]
})
export class HtmlTabComponent {
    skills : string  = "html"
    onSelectSkill(skill : string){
        this.skills = skill
    }
}

























