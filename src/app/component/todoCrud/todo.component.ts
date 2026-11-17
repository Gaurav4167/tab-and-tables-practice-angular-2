import { Component, ElementRef, ViewChild } from "@angular/core";
import { ItodosArray } from "src/app/const/todoCrud_i";
import { todosArray } from "src/app/models/todoCrudData";

@Component({
    selector: "app-crud",
    templateUrl: "./todo.component.html",
    styleUrls: ["./todo.component.scss"]
})
export class TodoCrudComponent {
    todosArr: ItodosArray[] = todosArray
    edit_id !: string
    isInEditMode: boolean = false
    @ViewChild('todoInputReference') todoInputRef !: ElementRef<HTMLInputElement>

    onAddNewTodo(todoInputRef: HTMLInputElement) {
        let newTodo: ItodosArray = {
            todoItem: todoInputRef.value,
            id: crypto.randomUUID()

        }

        this.todosArr.push(newTodo)
        todoInputRef.value = ''

    }

    onEditTodo(todoObject: ItodosArray) {
        this.isInEditMode = true
        this.edit_id = todoObject.id
        this.todoInputRef.nativeElement.value = todoObject.todoItem
    }

    onUpdateTodo() {
        let updatedTodoObj: ItodosArray = {
            todoItem: this.todoInputRef.nativeElement.value,
            id: this.edit_id
        }
        let getIndex = this.todosArr.findIndex(ele => ele.id === this.edit_id)
        this.todosArr[getIndex] = updatedTodoObj

        this.edit_id = ''
        this.todoInputRef.nativeElement.value = ''

        this.isInEditMode = false
    }

    onRemoveTodo(removeId: string) {
        let getIndex = this.todosArr.findIndex(ele => ele.id === removeId)
        this.todosArr.splice(getIndex, 1)
    }
}

















