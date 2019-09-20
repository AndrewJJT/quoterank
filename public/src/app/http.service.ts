import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  getallauthors(){
    return this._http.get('/authors')
  }

  getauthor(id:String){
    return this._http.get('/authors/'+ id)
  }

  addnewauthor(newauthor){
    return this._http.post('/authors', newauthor);  
  }

  editauthor(id:String, updatedAuthor){
    return this._http.put('/authors/' + id, updatedAuthor);
  }



  ///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //Add quote to author
  addquote(id:String,newquote){
    return this._http.put('/authorsquotes/'+id, newquote)
  }

  //Update Vote for quotes
  updatevote(id:String, qid:String, updatedVote){
    return this._http.put('/authorsquotes/' + id +'/'+ qid, updatedVote)
  }

  //Delete quotes
  deletequote(id:String,qid:String){
    return this._http.delete('/authorsquotes/' + id +'/'+ qid)
  }
}
