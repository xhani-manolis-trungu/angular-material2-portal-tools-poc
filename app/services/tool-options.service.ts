
import { Injectable } from '@angular/core';
import { Portal } from '@angular/cdk/portal';
import { BehaviorSubject } from 'rxjs';

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
    this.toolOptionsPortalSubject = new BehaviorSubject(undefined as any);
  }
}