import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, Form, NgForm} from '@angular/forms'
import { formatDate } from '@angular/common';

interface Item{
  itemId: number,
  itemName: string,
  itemImage: string,
  itemPrice: number,
  itemInfo: string,
  itemSize: number

}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  constructor(private route: ActivatedRoute ) { }

  item: Item = {itemId: 0, itemName: "", itemImage: "", itemPrice: 0, itemInfo: "", itemSize: 0}
  itemId: number = 0;
  checkout: boolean = false;
  ngOnInit(): void {

    this.itemId = this.route.snapshot.params.id;

   
     if(this.itemId == 1){
      console.log("here")
      this.item.itemId = this.itemId
      this.item.itemName = "Nike Air Max"
      this.item.itemImage = "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/421771d1-9ef0-421d-890a-c57e9b24ce41/air-max-95-mens-shoes-4Nzc1w.png"
      this.item.itemPrice = 100
      this.item.itemInfo = " Nike Air Max White/Black Grey/Cool Grey/Orange Taking inspiration from the human body and '90s track aesthetics, it mixes unbelievable comfort with head-turning style"
     }
     if(this.itemId == 2){
      
      this.item.itemId = this.itemId
      this.item.itemName = "NMD_R1"
      this.item.itemImage = "https://assets.adidas.com/images/w_600,f_auto,q_auto/82b9b2a940004241a7c7ad2f00dbeb44_9366/NMD_R1_Shoes_White_GZ7947_01_standard.jpg"
      this.item.itemPrice = 95.99
      this.item.itemInfo = "Balck & White NMD_R1 An update to an acclaimed '80s runner from the adidas archive, these modern sneakers have a soft, stretchy knit upper and energy-returning Boost cushioning for all-day comfort"
       
    }
    if(this.itemId == 3){
      
        this.item.itemId = this.itemId
        this.item.itemName = "Nike Air Force 1"
        this.item.itemImage = "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ylzjsomnnwbiqj8ssv7v/air-force-1-sage-low-womens-shoes-CprflJ.png"
        this.item.itemPrice = 140
        this.item.itemInfo = "All White NIKE AIR FORCE 1, most popular shoe on the planet right now. Perforation, & the most comfortable. Wear to Show off "
       
    }
    if(this.itemId == 4){
      
        this.item.itemId = this.itemId
        this.item.itemName = "Adidas Yeezy 350"
        this.item.itemImage = "https://cdn.sanity.io/images/c1chvb1i/production/1b91a780b266d141a3ad16b54f43002541776fc6-1100x745.jpg"
        this.item.itemPrice = 350
        this.item.itemInfo = "Latest Yeezy 350 V2, Ultra Comfy sneaker, Light as feather"
       
    }
       
    
  }

  onSubmit(form: NgForm){
    this.item.itemSize = form.value.size;

    this.checkout = true;
  }



}


//******* CREDIT copy from these sites  */
// https://www.adidas.com/us/nmd_r1-primeblue-shoes/GZ9261.html
//https://www.nike.com/t/kim-jones-air-max-95-shoe-Pnm3zx/DD1871-00