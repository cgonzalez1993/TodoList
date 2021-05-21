import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor(private dService: DataService) { }

  ngOnInit(): void {

  }

  AddValue(value: string): void {
    //we will call the data service
    this.dService.AddValue(value);
  }
}
