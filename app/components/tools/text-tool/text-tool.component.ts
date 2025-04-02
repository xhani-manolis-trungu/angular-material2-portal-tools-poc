import { Component, ViewChild, TemplateRef } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';

import { ToolOptionsService } from '../../../services/tool-options.service';

@Component({
  selector: 'app-text-tool',
  templateUrl: 'text-tool.component.html',
  styleUrls: ['./text-tool.component.scss']
})
export class TextToolComponent { 
  @ViewChild('optionsTmpl') optionsTmpl: TemplateRef<any>;

  constructor(private toolOptionsService: ToolOptionsService) {
  }
  
  setTool() {
    this.toolOptionsService.setPortal(new TemplatePortal(this.optionsTmpl, undefined, {}));
  }
}
