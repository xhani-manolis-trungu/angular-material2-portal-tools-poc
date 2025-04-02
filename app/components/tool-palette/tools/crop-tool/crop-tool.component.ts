import { CUSTOM_ELEMENTS_SCHEMA, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';

import { ToolOptionsService } from '../../../../services/tool-options.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-crop-tool',
  templateUrl: 'crop-tool.component.html',
  styleUrls: ['./crop-tool.component.scss'],
  imports: [CommonModule, MatIconModule],
  providers: [ToolOptionsService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CropToolComponent { 
  @ViewChild('optionsTmpl') optionsTmpl: TemplateRef<any>;

  constructor(private toolOptionsService: ToolOptionsService) {
  }

  setTool() {
    this.toolOptionsService.setPortal(new TemplatePortal(this.optionsTmpl, undefined as unknown as ViewContainerRef, {}));
  }
}
