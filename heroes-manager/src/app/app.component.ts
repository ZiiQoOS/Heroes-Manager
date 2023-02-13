import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'heroes-manager';
  itWorksMsg: Object = {};
  constructor(private httpClient: HttpClient) {

  }
  ngOnInit() {
    this.httpClient.get('http://localhost:3000').subscribe((value) => {
      this.itWorksMsg = value;
    })

  }

}
