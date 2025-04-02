import {Component} from '@angular/core';
import { ToolOptionsComponent } from './components/tool-options/tool-options.component';
import { ToolPaletteComponent } from './components/tool-palette/tool-palette.component';
import { StageComponent } from './components/stage/stage.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [ToolOptionsComponent, ToolPaletteComponent, StageComponent]
})
export class AppComponent { 
}
