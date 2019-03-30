import { Component, OnInit } from '@angular/core';
import{MYSONGS} from '../mySongs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  mysongs = MYSONGS;


  constructor() { }
  changePara(index) {
    var a1 = document.getElementById("listArea");
    var a2 = document.getElementById("imgArea");
    a2.innerHTML = "<img src= '" + this.mysongs[index].picture + "'width='120px' height='100px'>";
    a1.innerHTML = "<li>" + this.mysongs[index].songname + "</li>";
    a1.innerHTML += "<li>" + this.mysongs[index].artist + "</li>";
    a1.innerHTML += "<li>" + this.mysongs[index].genre + "</li>";
    a1.innerHTML += "<li>" + this.mysongs[index].yearReleased + "</li>";


    
  }

  ngOnInit() {
    var a1 = document.getElementById("listArea");
    var a2 = document.getElementById("imgArea");

    a2.innerHTML = "<img src= '" + this.mysongs[0].picture +  "'width='120px' height='100px'>";
    a1.innerHTML = "<li>" + this.mysongs[0].songname + "</li>";
    a1.innerHTML += "<li>" + this.mysongs[0].artist + "</li>";
    a1.innerHTML += "<li>" + this.mysongs[0].genre + "</li>";
    a1.innerHTML += "<li>" + this.mysongs[0].yearReleased + "</li>";


  }

}
