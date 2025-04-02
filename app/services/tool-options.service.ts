
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Portal } from '@angular/cdk/portal';

@Injectable()
export class ToolOptionsService {

  get toolOptionsPortal$() {
    return this.toolOptionsPortalSubject.asObservable();
  }

  private toolOptionsPortalSubject: BehaviorSubject<Portal<any>>;

  setPortal(portal: Portal<any>) {
    this.toolOptionsPortalSubject.next(portal);
  }

  constructor() {
    this.toolOptionsPortalSubject = new BehaviorSubject(undefined);
  }
}