import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { all } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../bootstrap.css']
})
export class HomeComponent implements OnInit {

  constructor(private _http:HttpService) { }

  allauthors:any;

  ngOnInit() {
    this.getallauthors()
  }

  getallauthors(){
    let allauthorsobv = this._http.getallauthors();
    allauthorsobv.subscribe(data =>{
      console.log(data)
      this.allauthors = data['allauthors']
    })
  }
}
