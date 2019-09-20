import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['../bootstrap.css']
})
export class NewComponent implements OnInit {

  constructor(
    private _http:HttpService, 
    private _route: ActivatedRoute,
    private _router: Router) { }

  newauthor:any

  errors:any

  ngOnInit() {
    this.newauthor = {name:""}
  }

  addnewauthor(){
    let newauthorobv = this._http.addnewauthor(this.newauthor);
    newauthorobv.subscribe(data =>{
      if (data['message'] == "failed"){
        console.log(data)
        this.errors = data['errors']
      }
      else{
        this.gohome();
      }
    })
  }

  gohome(){
    this._router.navigate(['/home'])
  }
}
