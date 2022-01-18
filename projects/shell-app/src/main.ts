import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { externalsLoader } from './app/shared/utils/externals-loader.util';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

externalsLoader(environment.production);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
