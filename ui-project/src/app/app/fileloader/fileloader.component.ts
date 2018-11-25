import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload';
import {environment } from '../../../environments/environment';
import { inherits } from 'util';
const URL = 'http://localhost:5000/api/uploaddb';
@Component({
  selector: 'app-fileloader',
  templateUrl: './fileloader.component.html',
  styleUrls: ['./fileloader.component.css']
})
export class FileloaderComponent implements OnInit {
  public uploader: FileUploader ;

  ngOnInit() {
    this.uploader = new FileUploader({url: environment.imageuploadUrl, itemAlias: 'photo'});
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
        // alert('File uploaded successfully');
     };
 }
}
