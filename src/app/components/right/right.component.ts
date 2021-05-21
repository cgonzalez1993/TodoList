import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  completedList: string[] = [];
  constructor(private dService: DataService) { }

  ngOnInit(): void {
    this.completedList = this.dService.GetCompletedValue();
  }

  remove(index: number): void {
    this.dService.Unremove(index);
  }

  removeAll(): void {
    this.dService.emptyCompleted();
  }

}
