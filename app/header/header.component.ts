import { Component, OnInit } from '@angular/core';
import { rajbir } from '../rajbir';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
thisStudent: rajbir = {
mid: 991504434, mname: "Rajbir",
mcampus: "davis" , mlogin: "rajbir",
mtitle: "Anguar Assignment"
}

  constructor() { }

  ngOnInit() {
  }

}
