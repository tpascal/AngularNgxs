import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DeleteListItem } from 'src/app/store/list.actions';
import { ListState } from 'src/app/store/list.state';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {
  @Select(ListState.SelectAllItems) listItems1: Observable<string[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  deleteItem1(evt: string){
    console.log(evt);
    this.store.dispatch(new DeleteListItem(evt));
  }
}
