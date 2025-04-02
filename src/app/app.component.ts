import {Component} from '@angular/core';
import { ToolOptionsComponent } from './components/tool-options/tool-options.component';
import { ToolPaletteComponent } from './components/tool-palette/tool-palette.component';
import { StageComponent } from './components/stage/stage.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [FlexLayoutModule, ToolPaletteComponent, ToolOptionsComponent, StageComponent]
})
export class AppComponent { 
}
