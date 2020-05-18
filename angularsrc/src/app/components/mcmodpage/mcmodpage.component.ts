import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { McmodsService } from 'src/app/services/mcmods/mcmods.service';
import { IModPage } from 'src/app/data/IModPage';

@Component({
  selector: 'app-mcmodpage',
  templateUrl: './mcmodpage.component.html',
  styleUrls: ['./mcmodpage.component.css']
})
export class McmodpageComponent implements OnInit {
  
  public mod: IModPage;

  constructor(private route: ActivatedRoute, public modService: McmodsService) { 
    route.params.subscribe(params => {
      console.log(params);
      this.mod = this.modService.getMod(params.slug);
      console.log(this.mod);
    });
  }

  ngOnInit() {
  }

}
