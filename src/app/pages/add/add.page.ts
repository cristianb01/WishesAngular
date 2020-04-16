import { Component, OnInit } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { ActivatedRoute } from '@angular/router';
import { List } from '../../models/list.model';
import { ListItem } from 'src/app/models/list-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  itemName = '';

  constructor( private wishesService: WishesService,
               private route: ActivatedRoute) { 

      const listId = this.route.snapshot.paramMap.get('listId');

      this.list = this.wishesService.getList(listId);

  }

  ngOnInit() {
  }


  addItem() {
    if(this.itemName.length === 0){
      return;
    }

    const newItem = new ListItem(this.itemName);
    this.list.items.push(newItem);

    this.itemName = '';
    this.wishesService.saveStorage();
  }

  changeCheck(item: ListItem) {

    const pending = this.list.items.filter( item => {
      return !item.completed;
    }).length;

    if( pending === 0){
      this.list.finishedIn = new Date();
      this.list.finish = true;
    }
    else{
      this.list.finishedIn = null;
      this.list.finish = false;
    }

    console.log(this.wishesService.lists); 

    this.wishesService.saveStorage();

  }

  deleteItem( index: number ) {
    this.list.items.splice(index,1);
    this.wishesService.saveStorage();
    console.log(this.wishesService.lists); 
    
  }
}
