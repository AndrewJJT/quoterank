import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['../bootstrap.css']
})
export class QuotesComponent implements OnInit {

  constructor(    
    private _http:HttpService, 
    private _route: ActivatedRoute,
    private _router: Router) { }

  theauthor:any;
  updatedvote:any;



  ngOnInit() {
    this.theauthor ={}
    this.updatedvote = {votes:0}
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

  Upvote(quote){
    this.updatedvote.votes = quote.votes
    this.updatedvote.votes ++; 
    let selectedQuoteobv = this._http.updatevote(this.theauthor._id,quote._id,this.updatedvote)
    selectedQuoteobv.subscribe(data =>{
      this.ngOnInit()
    })
  }

  Downvote(quote){
    this.updatedvote.votes = quote.votes
    this.updatedvote.votes --; 
    let selectedQuoteobv = this._http.updatevote(this.theauthor._id,quote._id,this.updatedvote)
    selectedQuoteobv.subscribe(data =>{
      this.ngOnInit()
    })
  }

  DeleteQuote(quote){
    let selectedQuoteobv = this._http.deletequote(this.theauthor._id, quote._id)
    selectedQuoteobv.subscribe(data => {
      this.ngOnInit()
    })
  }
}
