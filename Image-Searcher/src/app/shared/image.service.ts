import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private _http:Http) {}

  
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + '&q=';

  getImage(query){
    return this._http.get(this.URL + query ).map(res=>res.json())
  }
}
