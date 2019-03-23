import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lothrazarpages';

  mods: IModPage[] = [
    {
      name: 'Similsax Transtructors',
      curse: 'https://minecraft.curseforge.com/projects/similsax-transtructors',
      tracker: 'https://github.com/PrinceOfAmber/Similsax-Transtructors/issues'
    },
    {
      name: 'Block Layers',
      curse: 'https://minecraft.curseforge.com/projects/block-layers',
      tracker: 'https://github.com/PrinceOfAmber/DecoLayers/issues'
    },
    {
      name: 'Absent by Design',
      curse: 'https://minecraft.curseforge.com/projects/absent-by-design',
      tracker: 'https://github.com/Lothrazar/AbsentByDesign/issues'
    },
    {
      name: 'Ore Prospectors',
      curse: 'https://minecraft.curseforge.com/projects/ore-prospectors',
      tracker: 'https://github.com/PrinceOfAmber/Prospectors/issues'
    },
    {
      name: 'Anger Management',
      curse: 'https://minecraft.curseforge.com/projects/anger-management',
      tracker: 'https://github.com/PrinceOfAmber/HostileOres/issues'
    },
    {
      name: 'Creeper Heal - Unofficial',
      curse: 'https://minecraft.curseforge.com/projects/forge-creeper-heal-unofficial',
      tracker: 'https://github.com/PrinceOfAmber/ForgeCreeperHeal'
    },
    {
      hidden: true,
      name: 'Giant Player Boss',
      curse: 'https://minecraft.curseforge.com/projects/giant-player-boss' 
    },
    {
      name: 'Ocean Floor Control',
      curse: 'https://minecraft.curseforge.com/projects/ocean-floor-clay-sand-and-dirt',
      tracker: 'https://github.com/PrinceOfAmber/OceanFloorControl/issues'
    },
    {
      name: 'Roots Classic',
      curse: 'https://minecraft.curseforge.com/projects/roots-classic',
      tracker: 'https://github.com/PrinceOfAmber/RootsClassic/issues'
    },
    {
      name: 'Simple Storage Network',
      curse: 'https://minecraft.curseforge.com/projects/simple-storage-network',
      tracker: 'https://github.com/Lothrazar/Storage-Network/issues'
    },
    {
      hidden: true,
      name: 'SSN Addon',
      curse: 'https://minecraft.curseforge.com/projects/simple-cables-storage-network-addon'
    },
    {
      name: 'Cyclic',
      curse: 'https://minecraft.curseforge.com/projects/cyclic',
      tracker: 'https://github.com/Lothrazar/Cyclic/issues'
    },
    { 
      name: 'EmberRoot Zoo',
      curse: 'https://minecraft.curseforge.com/projects/emberroot-zoo',
      tracker: 'https://github.com/PrinceOfAmber/ERZ/issues'
    }
  ];
}
