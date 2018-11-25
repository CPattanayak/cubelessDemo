import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {ItemModel } from '../item.model';
import {ItemServiceService} from '../item-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-items',
  templateUrl: './update-items.component.html',
  styleUrls: ['./update-items.component.css']
})
export class UpdateItemsComponent implements OnInit {
  itemForm: FormGroup;
  item: ItemModel = new ItemModel();
  submitted = false;
  @Input() data: any;
  constructor(private itemService: ItemServiceService, public activeModal: NgbActiveModal, private formBuilder: FormBuilder) { }


  closeModal() {
    this.activeModal.close('Modal Closed');
  }

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
      itemName: [this.data.itemName, Validators.required],
      price: [this.data.price, Validators.required],
      imageName: [this.data.imageName, [Validators.required]]
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
    this.itemService.updateItem(this.item).subscribe(
      data => {
       // console.log(data);
        this.submitted = false;
        this.itemForm.reset();
        this. closeModal();
      },
       error => {
       /// console.log(error);
        this.itemForm.reset(this.itemForm.value);
       }
    );

}
}
