import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _httpService: HttpService){}
  people: any= []
  ngOnInit() {
    this.getInfoFromService();
  }
  getInfoFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.people = data
    })
  }
}
