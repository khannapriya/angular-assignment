import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receivable-master',
  templateUrl: './receivable-master.component.html',
  styleUrls: ['./receivable-master.component.scss']
})
export class ReceivableMasterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.cardData);
  }

  rNumber:9;
  rating:number;
  cardData = [
    {
      imageUrl:'../../../assets/images/real-estate/bungalow-house-exterior.jpg',
      title:'Smith Office Project',
      location:'Dubai,UAE',
      starValue:'3'
  },
  {
    imageUrl:'../../../assets/images/real-estate/classic-red-brick-home.jpg',
    title:'Palomar Hospitala',
    location:'Dubai,UAE' ,
    starValue:'3'
},
{
  imageUrl:'../../../assets/images/real-estate/modern-city-architecture.jpg',
  title:'Jones Highschool Estimate',
  location:'Ajman,UAE',
  starValue:'3'
},
{
  imageUrl:'../../../assets/images/real-estate/modern-house.jpg',
  title:'Jones Highschool Estimate',
  location:'Ajman,UAE',
  starValue:'3'
},
{
  imageUrl:'../../../assets/images/real-estate/one-storey-home-exterior.jpg',
  title:'Jones Highschool Estimate',
  location:'Ajman,UAE',
  starValue:'3'
},
{
  imageUrl:'../../../assets/images/real-estate/suburban-house.jpg',
  title:'Jones Highschool Estimate',
  location:'Ajman,UAE',
  starValue:'3'
}

  ]
}
