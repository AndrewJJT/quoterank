import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['../bootstrap.css']
})
export class WriteComponent implements OnInit {

  constructor(
    private _http:HttpService, 
    private _route: ActivatedRoute,
    private _router: Router) { }

  theauthor:any;
  newquote:any;

  ngOnInit() {
    this.theauthor = {}
    this.newquote = {quote:''}
    this._route.params.subscribe((params: Params) =>{
      this.getauthor(params['id'])
    })
  }

  getauthor(id:String){
    let selectedAuthorobv = this._http.getauthor(id)
    selectedAuthorobv.subscribe(data =>{
      console.log(data)
      this.theauthor = data['author'][0]
    })
  }

  addquote(){
    let selectedAuthorobv = this._http.addquote(this.theauthor._id,this.newquote)
    selectedAuthorobv.subscribe(data =>{
      console.log(data);
      if(data['message']=="success"){
        this._router.navigate(['/quotes', this.theauthor._id]);
      }
      
    })
  }
}
