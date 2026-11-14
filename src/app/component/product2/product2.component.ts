import { Component, ElementRef } from "@angular/core";


@Component({
    selector : "app-electronicProduct",
    templateUrl : "./product2.component.html",
    styleUrls : ["./product2.component.scss"]
})
export class ElectronicProduct{
    pName !: string
    pPrice !: string

    onAddNewProduct(eve: Event, productName : HTMLInputElement, price : HTMLInputElement, formReference : HTMLFormElement){
        
        eve.preventDefault()
        this.pName = productName.value
        this.pPrice = price.value

        formReference.reset()

        
    }
}

























