import { Component, OnInit, Input } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-tabellone',
  templateUrl: './tabellone.component.html',
  styleUrls: ['./tabellone.component.css']
})
export class TabelloneComponent implements OnInit {
 @Input() tabellone: TreeNode;
  constructor() { }

  ngOnInit(): void {
  }

}
