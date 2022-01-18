declare const require: any;

export function externalsLoader(production: boolean) {
  (window as any).ng = {} as any;
  (window as any).ng.core = require('@angular/core');
  (window as any).ng.forms = require('@angular/forms');
  (window as any).ng.common = require('@angular/common');
  (window as any).ng.common.http = require('@angular/common/http');
  (window as any).ng.router = require('@angular/router');
  (window as any).ng.platformBrowser = require('@angular/platform-browser');
  (window as any).ng.animations = require('@angular/animations');
  (window as any).ng.cdk = require('@angular/cdk');
  (window as any).ng.fire = require('@angular/fire');
  (window as any).ng.fire.firestore = require('@angular/fire/firestore');
  (window as any)['@angular/flex-layout'] = require('@angular/flex-layout');
  (window as any).ng.material = require('@angular/material');
  (window as any).ng.material.toolbar = require('@angular/material/toolbar');
  (window as any).ng.material.icon = require('@angular/material/icon');
  (window as any).ng.material.button = require('@angular/material/button');
  (window as any).ng.material.list = require('@angular/material/list');
  (window as any).ng.material.card = require('@angular/material/card');
  (window as any).ng.material.divider = require('@angular/material/divider');
  (window as any).ng.material.core = require('@angular/material/core');
  (window as any).ng.material.menu = require('@angular/material/menu');
  (window as any).ng.cdk = require('@angular/cdk');
  (window as any).ng.flexLayout = require('@angular/flex-layout');
  (window as any).ng.flexLayout.flex = require('@angular/flex-layout/flex');
  (window as any).rxjs = require('rxjs');
  (window as any).rxjs.operators = require('rxjs/operators');

  if (!production) {
    (window as any).ng.platformBrowserDynamic = require('@angular/platform-browser-dynamic');
    (window as any).ng.compiler = require('@angular/compiler');
  }
}
