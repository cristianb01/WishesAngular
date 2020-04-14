import { ListItem } from './list-item.model';

export class List{
    id: number;
    title: string;
    createdIn: Date;
    finishedIn: Date;
    finish: boolean;
    items: ListItem[];

    constructor( title: string){
        this.title = title;
        this.createdIn = new Date();
        this.finish = false;
        this.items = [];
        this.id = new Date().getTime(); 
    }

}