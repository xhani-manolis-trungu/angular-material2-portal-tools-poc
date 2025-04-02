import { Component, ViewChild, TemplateRef, Inject } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';

import { ToolOptionsService } from '../../../services/tool-options.service';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-draw-tool',
  templateUrl: 'draw-tool.component.html',
  styleUrls: ['./draw-tool.component.scss'],
})
export class DrawToolComponent {
  @ViewChild('optionsTmpl') optionsTmpl: TemplateRef<any>;

  constructor(
    private toolOptionsService: ToolOptionsService,
    @Inject(Platform) public readonly platform: Platform
  ) {
    console.log('constructed Draw tool');
    console.log(
      this.platform.isBrowser,
      this.platform.ANDROID,
      this.platform.IOS
    );
  }

  setTool() {
    this.toolOptionsService.setPortal(
      new TemplatePortal(this.optionsTmpl, undefined, {})
    );
  }
}
