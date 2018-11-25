import { Component, OnInit } from '@angular/core';
import {ItemModel } from '../item.model';
import {ItemServiceService} from '../item-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css'],
  providers: [ItemServiceService]
})
export class CreateItemComponent implements OnInit {

  itemForm: FormGroup;
  item: ItemModel = new ItemModel();
  submitted = false;

  constructor(private itemService: ItemServiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initialize();
  }
  populateItem() {
    this.item.avalibility = true;
    this.item.imageName = this.itemForm.get('imageName').value;
    this.item.itemName = this.itemForm.get('itemName').value;
    this.item.price = this.itemForm.get('price').value;
   }
  initialize() {
    this.itemForm = this.formBuilder.group({
      itemName: ['', Validators.required],
      price: ['', Validators.required],
      imageName: ['', [Validators.required]]
  });
  }
   // convenience getter for easy access to form fields
   get f() { return this.itemForm.controls; }

   onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.itemForm.invalid) {
        return;
    }
    this.populateItem();
    this.itemService.createItem(this.item).subscribe(
      data => {
       // console.log(data);
        this.submitted = false;
        this.itemForm.reset();
      },
       error => {
       /// console.log(error);
        this.itemForm.reset(this.itemForm.value);
       }
    );

}

}
