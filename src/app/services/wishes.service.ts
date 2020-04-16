import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

    lists: List[] = [];

  constructor() {

    this.loadStorage();

    // const list1 = new List('Recolect stones from infinite');
    // const list2 = new List('Comidas del dia');

    // this.lists.push(list1, list2);

  }

  createList( title: string ) {
    const newList = new List(title);
    this.lists.push( newList );
    this.saveStorage();

    return newList.id;
  }


  getList( id: number | string ){
    id = Number(id);

    return this.lists.find( listData => {
      return listData.id === id;
    })
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  loadStorage() {
    if(localStorage.getItem('data')){
      this.lists = JSON.parse(localStorage.getItem('data'));
    }
    else{
      this.lists = [];
    }
  }

  
}
