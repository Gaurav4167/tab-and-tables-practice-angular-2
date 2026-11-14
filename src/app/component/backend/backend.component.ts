import { Component } from "@angular/core";
import { Iskills } from "src/app/const/backend_i";
import { skills } from "src/app/models/backend";


@Component({
    selector : "app-backend",
    templateUrl : "./backend.component.html",
    styleUrls : ["./backend.component.scss"],
})
export class BackEndComponent {
    skills : Iskills[] = skills
    selectedSkill = 'java'
    onSelectSkill(skill : string){
        this.selectedSkill = skill
    }
}












