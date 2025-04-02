import { Component } from '@angular/core';

import { ToolOptionsService } from '../../services/tool-options.service';

@Component({
  selector: 'app-tool-options',
  templateUrl: 'tool-options.component.html',
  styleUrls: ['./tool-options.component.scss']
})
export class ToolOptionsComponent { 

  constructor(private toolOptionsService: ToolOptionsService) {

  }
}
