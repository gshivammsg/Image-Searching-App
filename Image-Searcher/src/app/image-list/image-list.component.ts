import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
   images: any[];
   errorResult:string = "An error occuered";
   show: boolean=true;

  constructor( private _imageService: ImageService) { }

  handleSuccess(data){
    console.log(data);
    this.images=data.hits;
  }

  handleError(error){
    this.show=false;
  }
   
  searchImages(query:string){

    return this._imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error =>this.handleError(error),
      () => console.log("Request Completed")    
      )
  }

  ngOnInit() {
  }

}
