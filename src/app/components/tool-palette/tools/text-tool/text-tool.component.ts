import { Component, ViewChild, TemplateRef, ViewContainerRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';

import { ToolOptionsService } from '../../../../services/tool-options.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-text-tool',
  templateUrl: 'text-tool.component.html',
  styleUrls: ['./text-tool.component.scss'],
  imports: [CommonModule, MatIconModule],
  providers: [ToolOptionsService],
})
export class TextToolComponent { 
  @ViewChild('optionsTmpl') optionsTmpl: TemplateRef<any>;

  constructor(private toolOptionsService: ToolOptionsService) {
  }
  
  setTool() {
    this.toolOptionsService.setPortal(new TemplatePortal(this.optionsTmpl, undefined as unknown as ViewContainerRef, {}));
  }
}
