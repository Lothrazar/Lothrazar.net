import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mods by Lothrazar';

  mods: IModPage[] = [
    {
      id: 233659,
      name: 'Similsax Transtructors',
      curse: 'https://minecraft.curseforge.com/projects/similsax-transtructors',
      tracker: 'https://github.com/PrinceOfAmber/Similsax-Transtructors/issues'
    },
    {
      id: 305561,
      name: 'Block Layers',
      curse: 'https://minecraft.curseforge.com/projects/block-layers',
      tracker: 'https://github.com/PrinceOfAmber/DecoLayers/issues'
    },
    {
      id: 305840,
      name: 'Absent by Design',
      curse: 'https://minecraft.curseforge.com/projects/absent-by-design',
      tracker: 'https://github.com/Lothrazar/AbsentByDesign/issues'
    },
    {
      id: 275086,
      name: 'Ore Prospectors',
      curse: 'https://minecraft.curseforge.com/projects/ore-prospectors',
      tracker: 'https://github.com/PrinceOfAmber/Prospectors/issues'
    },
    {
      id: 305211,
      name: 'Anger Management',
      curse: 'https://minecraft.curseforge.com/projects/anger-management',
      tracker: 'https://github.com/PrinceOfAmber/HostileOres/issues'
    },
    {
      id: 246973,
      name: 'Creeper Heal',
      curse: 'https://minecraft.curseforge.com/projects/forge-creeper-heal-unofficial',
      tracker: 'https://github.com/PrinceOfAmber/ForgeCreeperHeal'
    },
    {
      id: 307605,
      hidden: true,
      name: 'Giant Player Boss',
      curse: 'https://minecraft.curseforge.com/projects/giant-player-boss' 
    },
    {
      id: 231837,
      name: 'Ocean Floor Control',
      curse: 'https://minecraft.curseforge.com/projects/ocean-floor-clay-sand-and-dirt',
      tracker: 'https://github.com/PrinceOfAmber/OceanFloorControl/issues'
    },
    {
      id: 295780,
      crafttweaker: true,
      name: 'Roots Classic',
      curse: 'https://minecraft.curseforge.com/projects/roots-classic',
      tracker: 'https://github.com/PrinceOfAmber/RootsClassic/issues'
    },
    {
      id: 268495,
      name: 'Simple Storage Network',
      curse: 'https://minecraft.curseforge.com/projects/simple-storage-network',
      tracker: 'https://github.com/Lothrazar/Storage-Network/issues'
    },
    {
      id: 313919,
      hidden: true,
      name: 'SSN Addon',
      curse: 'https://minecraft.curseforge.com/projects/simple-cables-storage-network-addon'
    },
    {
      id: 239286,
      name: 'Cyclic',
      crafttweaker: true,
      curse: 'https://minecraft.curseforge.com/projects/cyclic',
      tracker: 'https://github.com/Lothrazar/Cyclic/issues'
    },
    { 
      id: 273711,
      name: 'EmberRoot Zoo',
      curse: 'https://minecraft.curseforge.com/projects/emberroot-zoo',
      tracker: 'https://github.com/PrinceOfAmber/ERZ/issues'
    }
  ];
}
