/* tslint:disable:no-unused-variable */
import { inject, TestBed } from '@angular/core/testing';

import { NavMenuService } from './nav-menu.service';


describe('Service: NavMenu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavMenuService]
    });
  });

  it('should ...', inject([NavMenuService], (service: NavMenuService) => {
    expect(service).toBeTruthy();
  }));
});
