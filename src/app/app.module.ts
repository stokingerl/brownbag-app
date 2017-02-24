import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BlueComponent } from './blue';
import { RedComponent } from './red';

const appRoutes: Routes = [
  { path: 'blue', component: BlueComponent },
  { path: 'red', component: RedComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BlueComponent,
    RedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
