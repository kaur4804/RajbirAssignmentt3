import { Component, OnInit } from '@angular/core';
import { rajbir } from '../rajbir';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  thisStudent: rajbir = {
    mid: 991504434, mname: "rajbir",
    mcampus: "davis campus", mlogin: "kaur4804",
    mtitle: "Angular Assignment"
  }

  constructor() { }

  ngOnInit() {
  }

}
