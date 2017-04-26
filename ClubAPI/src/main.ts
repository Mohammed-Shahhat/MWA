import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import './polyfills.ts';

// enable working environment mode to production mode
if (environment.production) {
  enableProdMode();
}
//bootstrapping the app
platformBrowserDynamic().bootstrapModule(AppModule);
