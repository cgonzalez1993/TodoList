import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService implements OnInit {
  private value: string[] = this.getFromLocalStorage('todo') ? this.getFromLocalStorage('todo') : [];
  private completedValue: string[] = this.getFromLocalStorage('done') ? this.getFromLocalStorage('done') : [];

  constructor() { }

  ngOnInit(): void {

  }

  GetValue(): string[] {
    return this.value;
  }

  GetCompletedValue(): string[] {
    return this.completedValue;
  }

  AddtoLS(entry: string): void {
    this.value.push(entry);
    this.saveToLocalStorage('todo', this.value);
  }

  Remove(index: number): void {
    this.completedValue.push(this.value.splice(index, 1)[0]);
    this.saveToLocalStorage('todo', this.value);
    this.saveToLocalStorage('done', this.completedValue);
  }

  Unremove(index: number): void {
    this.value.push(this.completedValue.splice(index, 1)[0]);
    this.saveToLocalStorage('todo', this.value);
    this.saveToLocalStorage('done', this.completedValue);
  }

  emptyCompleted(): void {
    this.completedValue.splice(0, this.completedValue.length);
    this.saveToLocalStorage('done', this.completedValue);
  }

  saveToLocalStorage(key: string, value): void {
    console.log('saving to local storage...' + value)
    localStorage.setItem(key, JSON.stringify(value));
  }

  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

}
