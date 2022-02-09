import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule} from '@angular/material/sidenav'
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router'
import { JoyrideModule } from 'ngx-joyride'
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';




@NgModule({
  imports:      [ BrowserModule, FormsModule, MatToolbarModule,MatButtonModule, MatIconModule, JoyrideModule.forRoot(),RouterModule.forRoot([]),MatSidenavModule,BrowserAnimationsModule,MatListModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
