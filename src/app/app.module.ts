import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ACompComponent } from './a-comp/a-comp.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BCompComponent } from './b-comp/b-comp.component';
import { FlagComponent } from './flag/flag.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ACompComponent,
    BCompComponent,
    NotFoundComponent,
    FlagComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'country/:country', component: FlagComponent },
      { path: 'a', component: ACompComponent },
      { path: 'b/:name', component: BCompComponent },
      { path: 'b', component: BCompComponent },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
