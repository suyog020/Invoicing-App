import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ItemModel } from '../model/itemModel';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

    //A subject that you can subscribe on
    itemSubject = new Subject<ItemModel[]>();

    items : any[] = new Array<ItemModel>();
    item1:ItemModel = {
        name:"Milk",
        quantity:3,
        price:70,
        amount:189
    };
    
    constructor(private http:HttpClient) {
        this.itemSubject = new BehaviorSubject<ItemModel[]>(new Array<ItemModel>())
        this.add(this.item1);
    }

    add(item: ItemModel){
        this.items.push(item);
        this.itemSubject.next(this.items);
    }

    getItems(): Subject<ItemModel[]> {
        return this.itemSubject;
    }

    deleteItem(item:ItemModel){
        let index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }    
        this.itemSubject.next(this.items);
    }

    getTotalAmount(){
    let amount = 0;    
    this.items.forEach(item => {
        amount += item.amount;
        });
    return amount;
    }
}
