import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  @ViewChild('text') inputText;

  constructor(private dService: DataService) { }

  ngOnInit(): void {

  }

  AddtoLS(value: string): void {
    if(this.inputText.nativeElement.value) {
      this.dService.AddtoLS(value);
      this.handleClear();
    }
    else {
      alert("Please enter a task!!");
    }
  }

  handleClear() {
    this.inputText.nativeElement.value = '';
  }

}
