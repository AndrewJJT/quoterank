import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['../bootstrap.css']
})
export class EditComponent implements OnInit {

  constructor(    
    private _http:HttpService, 
    private _route: ActivatedRoute,
    private _router: Router) { }

  selectedAuthor:any;
  errors:any;
  
  ngOnInit() {    
    this.errors = []
    this._route.params.subscribe((params:Params) => {
    this.getAuthor(params['id']);
  });
  }

  getAuthor(id:String){
    let selectedauthorobv = this._http.getauthor(id);
    selectedauthorobv.subscribe (data => {
      this.selectedAuthor = data['author'][0];
    })
  }

  UpdateAuthor(){
    let updatedaAuthor = {name:this.selectedAuthor.name}
    console.log(updatedaAuthor);
    let selectedAuthorobv = this._http.editauthor(this.selectedAuthor._id,updatedaAuthor);
    selectedAuthorobv.subscribe(data =>{
      if (data['message'] == 'failed'){
        this.errors = data['errors']
      }
      else{
        this._router.navigate(['/home'])
      }
    })
  }

}
