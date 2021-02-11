import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesModule } from './pipes/pipes.module';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { EmailComposer } from '@ionic-native/email-composer/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),HttpClientModule, AppRoutingModule, PipesModule,ChartsModule,FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    DatePipe,
=======
    EmailComposer,
>>>>>>> f9aebc26608a2f5691ac958b1a3227b034b0cb2e
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
