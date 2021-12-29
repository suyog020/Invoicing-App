import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddItemComponent>,
    private itemService:ItemService) { }

  ngOnInit(): void {
  }
  item = {
    name:"",
    quantity:0,
    price:0,
    amount:0
  }
  onSubmit(){
    this.item.amount = this.item.quantity * this.item.price;
    this.itemService.add(this.item);
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
