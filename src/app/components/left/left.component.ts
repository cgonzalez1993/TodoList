import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  taskValue: string[] = [];

  constructor(private dService: DataService) { }

  ngOnInit(): void {
    this.taskValue = this.dService.GetValue();
  }

  remove(index: number): void {
    console.log(index);
    this.dService.Remove(index);
  }
}
