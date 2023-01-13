import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AddListItem } from 'src/app/store/list.actions';

@Component({
  selector: 'app-list-item-input',
  templateUrl: './list-item-input.component.html',
  styleUrls: ['./list-item-input.component.css']
})
export class ListItemInputComponent implements OnInit {
  form: any;
  showItemAdded = false;

  constructor(private store: Store, private router: Router) { 
    this.form = new FormGroup({
      listItem: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  submitItem() {
    this.showItemAdded = true;

    const item = this.form.get('listItem').value;

    console.log(item);

    this.store.dispatch(new AddListItem(item));
    //console.log('dispatched');

    this.form.reset();

    setTimeout(() => {
      this.showItemAdded = false;
    }, 2000);
  }

  viewList() {
    this.router.navigate(['list']);
  }

}
