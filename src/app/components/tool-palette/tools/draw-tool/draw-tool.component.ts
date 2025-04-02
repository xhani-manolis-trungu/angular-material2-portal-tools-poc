import { Component, ViewChild, TemplateRef, Inject, ViewContainerRef, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';

import { ToolOptionsService } from '../../../../services/tool-options.service';
import { Platform } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-draw-tool',
  templateUrl: 'draw-tool.component.html',
  styleUrls: ['./draw-tool.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatSliderModule],
  providers: [ToolOptionsService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DrawToolComponent {
  @ViewChild('optionsTmpl') optionsTmpl: TemplateRef<any>;
  
  private _viewContainerRef = inject(ViewContainerRef);

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
      new TemplatePortal(this.optionsTmpl, this._viewContainerRef)
    );
  }
}
