import { Component } from "@angular/core";
var cl = console.log;

@Component({
    selector : "app-student",
    templateUrl : "./student.component.html",
    styleUrls : ["./student.component.scss"]
})
export class StudentComponent {
    sName !: string
    sCourse !: string 

    constructor(){
    }

    onNewStudentAdd(studentName : HTMLInputElement, course : HTMLInputElement){
        let sName : string = studentName.value
        let sCourse : string = course.value
        this.sName = sName
        this.sCourse = sCourse
        cl(`Student ${studentName.value} has joined the course ${course.value} !!!`)
    }
}



