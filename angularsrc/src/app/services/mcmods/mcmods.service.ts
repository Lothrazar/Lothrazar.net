import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class McmodsService {

  constructor() { }

  getMods(): IModPage[] {
    const mods: IModPage[] = [
    {
      id: 239286,
      name: 'Cyclic',
      crafttweaker: true,
      curse: 'https://minecraft.curseforge.com/projects/cyclic',
      tracker: 'https://github.com/Lothrazar/Cyclic/issues'
    },
    {
      id: 268495,
      name: 'Simple Storage Network',
      curse: 'https://minecraft.curseforge.com/projects/simple-storage-network',
      tracker: 'https://github.com/Lothrazar/Storage-Network/issues'
    },
    {
      id: 233659,
      name: 'Similsax Transtructors',
      curse: 'https://minecraft.curseforge.com/projects/similsax-transtructors',
      tracker: 'https://github.com/PrinceOfAmber/Similsax-Transtructors/issues'
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
      name: 'Giant Player Boss',
      curse: 'https://minecraft.curseforge.com/projects/giant-player-boss' 
    },
    {
      id: 313919,
      name: 'SSN Addon',
      curse: 'https://minecraft.curseforge.com/projects/simple-cables-storage-network-addon'
    },
    { 
      id: 273711,
      name: 'EmberRoot Zoo',
      curse: 'https://minecraft.curseforge.com/projects/emberroot-zoo',
      tracker: 'https://github.com/PrinceOfAmber/ERZ/issues'
    },
    {
      id: 320757,
      name: 'Anti Bonemeal',
      curse: 'https://minecraft.curseforge.com/projects/anti-bonemeal',
      tracker: 'https://github.com/Lothrazar/AntiBonemeal/issues'
    },
    {
      id: 232166,
      name: 'Biome Growth Control',
      curse: 'https://minecraft.curseforge.com/projects/restricted-saplings',
      tracker: 'https://github.com/LothrazarMinecraftMods/SaplingGrowthControl/issues'
    },
    {
      id: 320706,
      name: 'Arrow Harvest',
      curse: 'https://minecraft.curseforge.com/projects/arrow-harvest',
      tracker: 'https://github.com/Lothrazar/ChorusArrow/issues'
    },
    {
      id: 324307,
      name: 'Tamed Respawn',
      curse: 'https://minecraft.curseforge.com/projects/tamedrespawn',
      tracker: 'https://github.com/Lothrazar/TamedRespawn/issues'
    }
    ];
    return mods;
  }
}
