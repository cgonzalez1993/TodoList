import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  valueInMain: string[] = [];

  constructor(private dService: DataService) { }

  ngOnInit(): void {
    this.valueInMain = this.dService.GetValue();
  }

  remove(index: number): void {
    console.log(index);
    this.dService.Remove(index);
  }

}
