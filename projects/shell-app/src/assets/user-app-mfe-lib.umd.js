(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/flex-layout'), require('@angular/material/button'), require('@angular/material/card'), require('@angular/material/divider'), require('@angular/material/icon'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/toolbar'), require('@ngrx/store'), require('@angular/router'), require('@angular/material/core'), require('auth-app-lib')) :
    typeof define === 'function' && define.amd ? define('user-app-mfe-lib', ['exports', '@angular/common', '@angular/core', '@angular/flex-layout', '@angular/material/button', '@angular/material/card', '@angular/material/divider', '@angular/material/icon', '@angular/material/list', '@angular/material/menu', '@angular/material/toolbar', '@ngrx/store', '@angular/router', '@angular/material/core', 'auth-app-lib'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["user-app-mfe-lib"] = {}, global.ng.common, global.ng.core, global.ng.flexLayout, global.ng.material.button, global.ng.material.card, global.ng.material.divider, global.ng.material.icon, global.ng.material.list, global.ng.material.menu, global.ng.material.toolbar, global["@ngrx/store"], global.ng.router, global.ng.material.core, global.authAppLib));
})(this, (function (exports, i7, i0, i6$1, i4, i6, i4$1, i5, i3$1, i5$1, i3, i1, i2, i10, authAppLib) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i6__namespace$1 = /*#__PURE__*/_interopNamespace(i6$1);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i4__namespace$1 = /*#__PURE__*/_interopNamespace(i4$1);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i5__namespace$1 = /*#__PURE__*/_interopNamespace(i5$1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i10__namespace = /*#__PURE__*/_interopNamespace(i10);

    var UserService = /** @class */ (function () {
        function UserService() {
        }
        Object.defineProperty(UserService.prototype, "userList", {
            get: function () {
                return [
                    {
                        id: 0,
                        email: 'melissa.fleming@example.com',
                        gender: 'female',
                        phoneNumber: '0740-304-475',
                        birthdate: 469521368,
                        name: 'melissa fleming',
                        picture: 'women/0.jpg',
                    },
                    {
                        id: 1,
                        email: 'christoffer.christiansen@example.com',
                        gender: 'male',
                        phoneNumber: '05761325',
                        birthdate: 244475798,
                        name: 'christoffer christiansen',
                        picture: 'men/1.jpg',
                    },
                    {
                        id: 2,
                        email: 'delphine.taylor@example.com',
                        gender: 'female',
                        phoneNumber: '602-884-3078',
                        birthdate: 1193621288,
                        name: 'delphine taylor',
                        picture: 'women/2.jpg',
                    },
                    {
                        id: 3,
                        email: 'todd.beck@example.com',
                        gender: 'male',
                        phoneNumber: '0768-374-878',
                        birthdate: 216450355,
                        name: 'todd beck',
                        picture: 'men/3.jpg',
                    },
                    {
                        id: 4,
                        email: 'kayla.hall@example.com',
                        gender: 'female',
                        phoneNumber: '(932)-142-5202',
                        birthdate: 450297969,
                        name: 'kayla hall',
                        picture: 'women/4.jpg',
                    },
                    {
                        id: 5,
                        email: 'jimmie.simmons@example.com',
                        gender: 'male',
                        phoneNumber: '0702-239-646',
                        birthdate: 691663054,
                        name: 'jimmie simmons',
                        picture: 'men/5.jpg',
                    },
                    {
                        id: 6,
                        email: 'judith.schmitz@example.com',
                        gender: 'female',
                        phoneNumber: '0171-7824648',
                        birthdate: 1348121292,
                        name: 'judith schmitz',
                        picture: 'women/6.jpg',
                    },
                    {
                        id: 7,
                        email: 'aloïs.moulin@example.com',
                        gender: 'male',
                        phoneNumber: '(334)-138-2260',
                        birthdate: 787209800,
                        name: 'aloïs moulin',
                        picture: 'men/7.jpg',
                    },
                    {
                        id: 8,
                        email: 'tammy.bowman@example.com',
                        gender: 'female',
                        phoneNumber: '081-064-2923',
                        birthdate: 833377307,
                        name: 'tammy bowman',
                        picture: 'women/8.jpg',
                    },
                    {
                        id: 9,
                        email: 'noah.dupont@example.com',
                        gender: 'male',
                        phoneNumber: '(280)-900-0140',
                        birthdate: 857793035,
                        name: 'noah dupont',
                        picture: 'men/9.jpg',
                    },
                ];
            },
            enumerable: false,
            configurable: true
        });
        return UserService;
    }());
    UserService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    UserService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], ctorParameters: function () { return []; } });

    var UserDetailComponent = /** @class */ (function () {
        function UserDetailComponent(userService, activatedRoute) {
            this.userService = userService;
            this.activatedRoute = activatedRoute;
        }
        UserDetailComponent.prototype.ngOnInit = function () {
            this.getSelectedUser();
        };
        UserDetailComponent.prototype.getSelectedUser = function () {
            var userId = this.activatedRoute.snapshot.params.id;
            this.user = this.userService.userList.filter(function (e) { return e.id == userId; })[0];
        };
        return UserDetailComponent;
    }());
    UserDetailComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserDetailComponent, deps: [{ token: UserService }, { token: i2__namespace.ActivatedRoute }], target: i0__namespace.ɵɵFactoryTarget.Component });
    UserDetailComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: UserDetailComponent, selector: "app-user-detail", ngImport: i0__namespace, template: "<mat-toolbar>\n  <mat-toolbar-row>\n    <a mat-icon-button [routerLink]=\"['../']\" routerLinkActive=\"router-link-active\">\n      <mat-icon>arrow_back</mat-icon>\n    </a>\n  </mat-toolbar-row>\n</mat-toolbar>\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <div fxFlex fxFlex.gt-sm=\"50%\">\n    <div fxLayout=\"column\" fxLayoutGap=\"24px\">\n      <mat-card class=\"user-card\" *ngIf=\"user\">\n        <mat-card-header>\n          <div\n            mat-card-avatar\n            class=\"example-header-image\"\n            [style]=\"{\n              'background-image': 'url(/assets/pictures/' + user.picture + ')',\n              'background-size': 'cover'\n            }\"\n          >\n          </div>\n          <mat-card-title>{{ user.name | uppercase  }}</mat-card-title>\n          <mat-card-subtitle>{{ user.email }}</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <mat-list dense>\n            <mat-list-item>\n              <h3 matLine>Name</h3>\n              <p matLine>{{ user.name | uppercase }}</p>\n            </mat-list-item>\n            <mat-list-item>\n              <h3 matLine>Gender</h3>\n              <p matLine>{{ user.gender | uppercase }}</p>\n            </mat-list-item>\n            <mat-list-item>\n              <h3 matLine>E-mail</h3>\n              <p matLine>{{ user.email }}</p>\n            </mat-list-item>\n            <mat-list-item>\n              <h3 matLine>Birth date</h3>\n              <p matLine>{{ user.birthdate | date: 'dd MMM yyyy' }}</p>\n            </mat-list-item>\n          </mat-list>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>\n", styles: [":host .user-card{margin-top:24px}\n"], components: [{ type: i3__namespace.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { type: i4__namespace.MatAnchor, selector: "a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matButton", "matAnchor"] }, { type: i5__namespace.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i6__namespace.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i6__namespace.MatCardHeader, selector: "mat-card-header" }, { type: i3__namespace$1.MatList, selector: "mat-list, mat-action-list", inputs: ["disableRipple", "disabled"], exportAs: ["matList"] }, { type: i3__namespace$1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["disableRipple", "disabled"], exportAs: ["matListItem"] }], directives: [{ type: i3__namespace.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }, { type: i2__namespace.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i2__namespace.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "routerLinkActive"], exportAs: ["routerLinkActive"] }, { type: i6__namespace$1.DefaultLayoutDirective, selector: "  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],  [fxLayout.gt-md], [fxLayout.gt-lg]", inputs: ["fxLayout", "fxLayout.xs", "fxLayout.sm", "fxLayout.md", "fxLayout.lg", "fxLayout.xl", "fxLayout.lt-sm", "fxLayout.lt-md", "fxLayout.lt-lg", "fxLayout.lt-xl", "fxLayout.gt-xs", "fxLayout.gt-sm", "fxLayout.gt-md", "fxLayout.gt-lg"] }, { type: i6__namespace$1.DefaultLayoutAlignDirective, selector: "  [fxLayoutAlign], [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md],  [fxLayoutAlign.lg], [fxLayoutAlign.xl], [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md],  [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl], [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm],  [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]", inputs: ["fxLayoutAlign", "fxLayoutAlign.xs", "fxLayoutAlign.sm", "fxLayoutAlign.md", "fxLayoutAlign.lg", "fxLayoutAlign.xl", "fxLayoutAlign.lt-sm", "fxLayoutAlign.lt-md", "fxLayoutAlign.lt-lg", "fxLayoutAlign.lt-xl", "fxLayoutAlign.gt-xs", "fxLayoutAlign.gt-sm", "fxLayoutAlign.gt-md", "fxLayoutAlign.gt-lg"] }, { type: i6__namespace$1.DefaultFlexDirective, selector: "  [fxFlex], [fxFlex.xs], [fxFlex.sm], [fxFlex.md],  [fxFlex.lg], [fxFlex.xl], [fxFlex.lt-sm], [fxFlex.lt-md],  [fxFlex.lt-lg], [fxFlex.lt-xl], [fxFlex.gt-xs], [fxFlex.gt-sm],  [fxFlex.gt-md], [fxFlex.gt-lg]", inputs: ["fxFlex", "fxFlex.xs", "fxFlex.sm", "fxFlex.md", "fxFlex.lg", "fxFlex.xl", "fxFlex.lt-sm", "fxFlex.lt-md", "fxFlex.lt-lg", "fxFlex.lt-xl", "fxFlex.gt-xs", "fxFlex.gt-sm", "fxFlex.gt-md", "fxFlex.gt-lg"] }, { type: i6__namespace$1.DefaultLayoutGapDirective, selector: "  [fxLayoutGap], [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md],  [fxLayoutGap.lg], [fxLayoutGap.xl], [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md],  [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl], [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm],  [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]", inputs: ["fxLayoutGap", "fxLayoutGap.xs", "fxLayoutGap.sm", "fxLayoutGap.md", "fxLayoutGap.lg", "fxLayoutGap.xl", "fxLayoutGap.lt-sm", "fxLayoutGap.lt-md", "fxLayoutGap.lt-lg", "fxLayoutGap.lt-xl", "fxLayoutGap.gt-xs", "fxLayoutGap.gt-sm", "fxLayoutGap.gt-md", "fxLayoutGap.gt-lg"] }, { type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6__namespace.MatCardAvatar, selector: "[mat-card-avatar], [matCardAvatar]" }, { type: i6__namespace.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i6__namespace.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { type: i6__namespace.MatCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }, { type: i10__namespace.MatLine, selector: "[mat-line], [matLine]" }], pipes: { "uppercase": i7__namespace.UpperCasePipe, "date": i7__namespace.DatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserDetailComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-user-detail',
                        templateUrl: './user-detail.component.html',
                        styleUrls: ['./user-detail.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: UserService }, { type: i2__namespace.ActivatedRoute }]; } });

    var UserListComponent = /** @class */ (function () {
        function UserListComponent(userService) {
            this.userService = userService;
        }
        UserListComponent.prototype.ngOnInit = function () {
            this.userList = this.userService.userList;
        };
        return UserListComponent;
    }());
    UserListComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserListComponent, deps: [{ token: UserService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    UserListComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: UserListComponent, selector: "ng-component", ngImport: i0__namespace, template: "<div class=\"main-container\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <div fxFlex fxFlex.gt-sm=\"50%\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>Users</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <mat-list>\n          <mat-list-item\n            class=\"user-list-item\"\n            [routerLink]=\"['./' + user.id]\"\n            routerLinkActive=\"router-link-active\"\n            *ngFor=\"let user of userList\"\n          >\n            <img matListAvatar [src]=\"'assets/pictures/' + user.picture\" [alt]=\"user.name\" />\n            <h3 matLine>{{ user.name | uppercase }}</h3>\n            <p matLine>{{ user.email }}</p>\n\n            <mat-divider></mat-divider>\n            <mat-icon class=\"mat-18\">chevron_right</mat-icon>\n          </mat-list-item>\n        </mat-list>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n", styles: [":host .main-container{margin-top:36px}:host .user-list-item{cursor:pointer;outline:none}:host .user-list-item:hover{background-color:#f0f8ff}\n"], components: [{ type: i6__namespace.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i6__namespace.MatCardHeader, selector: "mat-card-header" }, { type: i3__namespace$1.MatList, selector: "mat-list, mat-action-list", inputs: ["disableRipple", "disabled"], exportAs: ["matList"] }, { type: i3__namespace$1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["disableRipple", "disabled"], exportAs: ["matListItem"] }, { type: i4__namespace$1.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { type: i5__namespace.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i6__namespace$1.DefaultLayoutDirective, selector: "  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],  [fxLayout.gt-md], [fxLayout.gt-lg]", inputs: ["fxLayout", "fxLayout.xs", "fxLayout.sm", "fxLayout.md", "fxLayout.lg", "fxLayout.xl", "fxLayout.lt-sm", "fxLayout.lt-md", "fxLayout.lt-lg", "fxLayout.lt-xl", "fxLayout.gt-xs", "fxLayout.gt-sm", "fxLayout.gt-md", "fxLayout.gt-lg"] }, { type: i6__namespace$1.DefaultLayoutAlignDirective, selector: "  [fxLayoutAlign], [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md],  [fxLayoutAlign.lg], [fxLayoutAlign.xl], [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md],  [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl], [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm],  [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]", inputs: ["fxLayoutAlign", "fxLayoutAlign.xs", "fxLayoutAlign.sm", "fxLayoutAlign.md", "fxLayoutAlign.lg", "fxLayoutAlign.xl", "fxLayoutAlign.lt-sm", "fxLayoutAlign.lt-md", "fxLayoutAlign.lt-lg", "fxLayoutAlign.lt-xl", "fxLayoutAlign.gt-xs", "fxLayoutAlign.gt-sm", "fxLayoutAlign.gt-md", "fxLayoutAlign.gt-lg"] }, { type: i6__namespace$1.DefaultFlexDirective, selector: "  [fxFlex], [fxFlex.xs], [fxFlex.sm], [fxFlex.md],  [fxFlex.lg], [fxFlex.xl], [fxFlex.lt-sm], [fxFlex.lt-md],  [fxFlex.lt-lg], [fxFlex.lt-xl], [fxFlex.gt-xs], [fxFlex.gt-sm],  [fxFlex.gt-md], [fxFlex.gt-lg]", inputs: ["fxFlex", "fxFlex.xs", "fxFlex.sm", "fxFlex.md", "fxFlex.lg", "fxFlex.xl", "fxFlex.lt-sm", "fxFlex.lt-md", "fxFlex.lt-lg", "fxFlex.lt-xl", "fxFlex.gt-xs", "fxFlex.gt-sm", "fxFlex.gt-md", "fxFlex.gt-lg"] }, { type: i6__namespace.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i6__namespace.MatCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }, { type: i7__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2__namespace.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "routerLinkActive"], exportAs: ["routerLinkActive"] }, { type: i2__namespace.RouterLink, selector: ":not(a):not(area)[routerLink]", inputs: ["routerLink", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i3__namespace$1.MatListAvatarCssMatStyler, selector: "[mat-list-avatar], [matListAvatar]" }, { type: i10__namespace.MatLine, selector: "[mat-line], [matLine]" }], pipes: { "uppercase": i7__namespace.UpperCasePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserListComponent, decorators: [{
                type: i0.Component,
                args: [{
                        templateUrl: './user-list.component.html',
                        styleUrls: ['./user-list.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: UserService }]; } });

    var UserComponent = /** @class */ (function () {
        function UserComponent(store) {
            this.store = store;
        }
        UserComponent.prototype.ngOnInit = function () {
            this.getLoggedUser();
        };
        UserComponent.prototype.logout = function () {
            this.store.dispatch(authAppLib.authLogout());
        };
        UserComponent.prototype.getLoggedUser = function () {
            this.user$ = this.store.select(authAppLib.selectAuthUser);
        };
        return UserComponent;
    }());
    UserComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserComponent, deps: [{ token: i1__namespace.Store }], target: i0__namespace.ɵɵFactoryTarget.Component });
    UserComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.15", type: UserComponent, selector: "app-user", ngImport: i0__namespace, template: "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"gappx\">\n      <span fxFlex> User-App Micro Frontend</span>\n\n      <button mat-button [matMenuTriggerFor]=\"menuRef\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\">\n          <mat-icon class=\"mat-18\">person_outline</mat-icon>\n          <div *ngIf=\"this.user$ | async as user\">\n            <span class=\"mat-body-1\">{{ user.displayName }} </span>\n          </div>\n        </div>\n      </button>\n\n      <mat-menu #menuRef=\"matMenu\">\n        <button mat-menu-item (click)=\"logout()\">\n          <mat-icon class=\"mat-18\">logout</mat-icon>\n          Logout\n        </button>\n      </mat-menu>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n<router-outlet></router-outlet>\n", styles: [""], components: [{ type: i3__namespace.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { type: i4__namespace.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i5__namespace.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i5__namespace$1.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { type: i5__namespace$1.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }], directives: [{ type: i3__namespace.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }, { type: i6__namespace$1.DefaultFlexDirective, selector: "  [fxFlex], [fxFlex.xs], [fxFlex.sm], [fxFlex.md],  [fxFlex.lg], [fxFlex.xl], [fxFlex.lt-sm], [fxFlex.lt-md],  [fxFlex.lt-lg], [fxFlex.lt-xl], [fxFlex.gt-xs], [fxFlex.gt-sm],  [fxFlex.gt-md], [fxFlex.gt-lg]", inputs: ["fxFlex", "fxFlex.xs", "fxFlex.sm", "fxFlex.md", "fxFlex.lg", "fxFlex.xl", "fxFlex.lt-sm", "fxFlex.lt-md", "fxFlex.lt-lg", "fxFlex.lt-xl", "fxFlex.gt-xs", "fxFlex.gt-sm", "fxFlex.gt-md", "fxFlex.gt-lg"] }, { type: i6__namespace$1.DefaultLayoutDirective, selector: "  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],  [fxLayout.gt-md], [fxLayout.gt-lg]", inputs: ["fxLayout", "fxLayout.xs", "fxLayout.sm", "fxLayout.md", "fxLayout.lg", "fxLayout.xl", "fxLayout.lt-sm", "fxLayout.lt-md", "fxLayout.lt-lg", "fxLayout.lt-xl", "fxLayout.gt-xs", "fxLayout.gt-sm", "fxLayout.gt-md", "fxLayout.gt-lg"] }, { type: i6__namespace$1.DefaultLayoutAlignDirective, selector: "  [fxLayoutAlign], [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md],  [fxLayoutAlign.lg], [fxLayoutAlign.xl], [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md],  [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl], [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm],  [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]", inputs: ["fxLayoutAlign", "fxLayoutAlign.xs", "fxLayoutAlign.sm", "fxLayoutAlign.md", "fxLayoutAlign.lg", "fxLayoutAlign.xl", "fxLayoutAlign.lt-sm", "fxLayoutAlign.lt-md", "fxLayoutAlign.lt-lg", "fxLayoutAlign.lt-xl", "fxLayoutAlign.gt-xs", "fxLayoutAlign.gt-sm", "fxLayoutAlign.gt-md", "fxLayoutAlign.gt-lg"] }, { type: i6__namespace$1.DefaultLayoutGapDirective, selector: "  [fxLayoutGap], [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md],  [fxLayoutGap.lg], [fxLayoutGap.xl], [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md],  [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl], [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm],  [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]", inputs: ["fxLayoutGap", "fxLayoutGap.xs", "fxLayoutGap.sm", "fxLayoutGap.md", "fxLayoutGap.lg", "fxLayoutGap.xl", "fxLayoutGap.lt-sm", "fxLayoutGap.lt-md", "fxLayoutGap.lt-lg", "fxLayoutGap.lt-xl", "fxLayoutGap.gt-xs", "fxLayoutGap.gt-sm", "fxLayoutGap.gt-md", "fxLayoutGap.gt-lg"] }, { type: i5__namespace$1.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { type: i7__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2__namespace.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }], pipes: { "async": i7__namespace.AsyncPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-user',
                        templateUrl: './user.component.html',
                        styleUrls: ['./user.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.Store }]; } });

    var routes = [
        {
            path: '', component: UserComponent,
            children: [
                {
                    path: '',
                    component: UserListComponent
                },
                {
                    path: ':id',
                    component: UserDetailComponent
                }
            ]
        }
    ];
    var UserRoutingModule = /** @class */ (function () {
        function UserRoutingModule() {
        }
        return UserRoutingModule;
    }());
    UserRoutingModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserRoutingModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    UserRoutingModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserRoutingModule, imports: [i2__namespace.RouterModule], exports: [i2.RouterModule] });
    UserRoutingModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserRoutingModule, imports: [[i2.RouterModule.forChild(routes)], i2.RouterModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserRoutingModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i2.RouterModule.forChild(routes)],
                        exports: [i2.RouterModule]
                    }]
            }] });

    var UserModule = /** @class */ (function () {
        function UserModule() {
        }
        return UserModule;
    }());
    UserModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    UserModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserModule, declarations: [UserComponent,
            UserListComponent,
            UserDetailComponent], imports: [i7.CommonModule,
            UserRoutingModule,
            i6$1.FlexModule,
            i6$1.FlexLayoutModule,
            i3$1.MatListModule,
            i4$1.MatDividerModule,
            i6.MatCardModule,
            i3.MatToolbarModule,
            i5.MatIconModule,
            i5$1.MatMenuModule,
            i4.MatButtonModule, i1__namespace.StoreFeatureModule] });
    UserModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserModule, imports: [[
                i7.CommonModule,
                UserRoutingModule,
                i6$1.FlexModule,
                i6$1.FlexLayoutModule,
                i3$1.MatListModule,
                i4$1.MatDividerModule,
                i6.MatCardModule,
                i3.MatToolbarModule,
                i5.MatIconModule,
                i5$1.MatMenuModule,
                i4.MatButtonModule,
                i1.StoreModule.forFeature('', [], {})
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.15", ngImport: i0__namespace, type: UserModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            UserComponent,
                            UserListComponent,
                            UserDetailComponent
                        ],
                        imports: [
                            i7.CommonModule,
                            UserRoutingModule,
                            i6$1.FlexModule,
                            i6$1.FlexLayoutModule,
                            i3$1.MatListModule,
                            i4$1.MatDividerModule,
                            i6.MatCardModule,
                            i3.MatToolbarModule,
                            i5.MatIconModule,
                            i5$1.MatMenuModule,
                            i4.MatButtonModule,
                            i1.StoreModule.forFeature('', [], {})
                        ]
                    }]
            }] });

    /*
     * Public API Surface of user-app-mfe-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.UserModule = UserModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=user-app-mfe-lib.umd.js.map
