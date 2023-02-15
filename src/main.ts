import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CommonModule } from '@angular/common';
import { AppModule } from './app/app.module';
import {bootstrapApplication} from "@angular/platform-browser";
import {FirstComponent} from "./app/first/first.component";


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// bootstrapApplication(FirstComponent)
