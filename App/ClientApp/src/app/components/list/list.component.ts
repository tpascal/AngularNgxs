import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() listItems: string[];
  @Output() deleteItemEmt: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  deleteItem(item: string) {
    this.deleteItemEmt.emit(item);
  }

  back() {
    this.router.navigate(['/item']);
  }
}
