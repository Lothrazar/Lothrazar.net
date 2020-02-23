import { Component, OnInit } from '@angular/core';
import { McmodsService } from '../../services/mcmods/mcmods.service';

@Component({
  selector: 'app-minecraft',
  templateUrl: './minecraft.component.html',
  styleUrls: ['./minecraft.component.css']
})
export class MinecraftComponent implements OnInit {

  constructor(public modService: McmodsService) {
  }

  ngOnInit() {
  }

}
