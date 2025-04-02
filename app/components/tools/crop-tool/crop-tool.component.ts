import { Component, TemplateRef, ViewChild } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';

import { ToolOptionsService } from '../../../services/tool-options.service';

@Component({
  selector: 'app-crop-tool',
  templateUrl: 'crop-tool.component.html',
  styleUrls: ['./crop-tool.component.scss']
})
export class CropToolComponent { 
  @ViewChild('optionsTmpl') optionsTmpl: TemplateRef<any>;

  constructor(private toolOptionsService: ToolOptionsService) {
  }

  setTool() {
    this.toolOptionsService.setPortal(new TemplatePortal(this.optionsTmpl, undefined, {}));
  }
}
