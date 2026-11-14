import { Component } from "@angular/core";


@Component({
    selector : "app-lab",
    templateUrl : "./lab.component.html",
    styleUrls : ["./lab.component.scss"]
})

export class LabComponent {
    labSkills : string = "angular"

    onSelectSkill(skill : string){
        this.labSkills = skill
    }
}























