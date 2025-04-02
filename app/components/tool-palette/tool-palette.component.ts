import { Component } from '@angular/core';
import { DrawToolComponent } from './tools/draw-tool/draw-tool.component';
import { TextToolComponent } from './tools/text-tool/text-tool.component';
import { CropToolComponent } from './tools/crop-tool/crop-tool.component';


@Component({
  selector: 'app-tool-palette',
  templateUrl: 'tool-palette.component.html',
  styleUrls: ['./tool-palette.component.scss'],
  imports: [DrawToolComponent, TextToolComponent, CropToolComponent]
})
export class ToolPaletteComponent { 

  constructor() {

  }
}
