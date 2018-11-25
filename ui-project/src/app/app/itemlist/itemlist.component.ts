import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import {ItemServiceService} from '../item-service.service';


@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css'],
  providers: [NgbCarouselConfig, ItemServiceService]
})

export class ItemlistComponent implements OnInit {
  totalPrice = 0;
  showNavigationArrows = true;
  showNavigationIndicators = false;

  imageBundel: any[];
  constructor(config: NgbCarouselConfig, private _http: HttpClient, private itemservice: ItemServiceService) {
    // customize default values of carousels used by this component tree
      config.showNavigationArrows = true;
      config.showNavigationIndicators = true;
  }

  ngOnInit() {
    this.itemservice.getItemList().subscribe(
    data => {
      this.imageBundel = data['items'].filter(image => image);
    });
     }
  addPrice(price: number)
  {
    this.totalPrice = this.totalPrice + price;
    alert(this.totalPrice);
  }
}
