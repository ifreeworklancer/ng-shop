import { Component, OnInit, Input } from '@angular/core';
import { IPageHeader } from 'src/app/shared/models/page-header';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  public env = environment;
  @Input() page: IPageHeader;

  constructor() { }

  ngOnInit(): void {
  }

}
