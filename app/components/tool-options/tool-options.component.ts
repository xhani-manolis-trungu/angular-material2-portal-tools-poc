import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

import { ToolOptionsService } from '../../services/tool-options.service';
import { CdkPortal, Portal } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import {PortalModule} from '@angular/cdk/portal';

@Component({
  selector: 'app-tool-options',
  templateUrl: 'tool-options.component.html',
  styleUrls: ['./tool-options.component.scss'],
  imports: [CommonModule, PortalModule],
  providers: [ToolOptionsService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToolOptionsComponent implements AfterViewInit { 
  selectedPortal: Portal<any>;
  constructor(public readonly toolOptionsService: ToolOptionsService) {
    
  }

  ngAfterViewInit() {
    this.toolOptionsService.toolOptionsPortal$.subscribe(portal => {
      console.log(portal)
      this.selectedPortal = portal
    })
  }
}
