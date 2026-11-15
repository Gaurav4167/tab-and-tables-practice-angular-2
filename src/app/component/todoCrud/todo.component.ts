import { Component } from "@angular/core";
import { ItodosArray } from "src/app/const/todoCrud_i";
import { todosArray } from "src/app/models/todoCrudData";

@Component({
    selector : "app-crud",
    templateUrl : "./todo.component.html",
    styleUrls : ["./todo.component.scss"]
})
export class TodoCrudComponent {
    todosArr : ItodosArray[] = todosArray

    onAddNewTodo(todoInputRef : HTMLInputElement){
        let newTodo : ItodosArray = {
            todoItem : todoInputRef.value,
            id : crypto.randomUUID()
        }

        this.todosArr.push(newTodo)    
    }
}
















