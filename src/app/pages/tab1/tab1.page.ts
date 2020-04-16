import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public wishesService: WishesService,
               private router: Router,
               private alertCtrlr: AlertController ) {}

  
               
  async addList() {
    // this.router.navigateByUrl('/tabs/tab1/add');

    const alert = await this.alertCtrlr.create({
      header: 'New list',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'List name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("cancelar");
          }
        },
        {
          text: 'Create',
          handler: ( data ) => {
            console.log(data);
            if(data.title.length === 0){
              return;
            }

            const listId = this.wishesService.createList(data.title);

            this.router.navigateByUrl(`tabs/tab1/add/${listId}`);



          }
        }
      ]
    });

    alert.present();
  }


}
