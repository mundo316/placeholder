import { Component } from '@angular/core';
import { PlaceHolderService } from './services/place-holder.service';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private placeholderservice: PlaceHolderService) {}  
  title = 'placeHolder';
  displayedColumns: string[] = ['userID', 'id', 'title', 'completed'];
  dataSource;

  async ngOnInit() {
    this.dataSource= await this.placeholderservice.get();
  }
}
