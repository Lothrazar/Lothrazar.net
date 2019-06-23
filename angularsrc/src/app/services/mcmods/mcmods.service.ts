import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class McmodsService {

  constructor() { }

  getMods(): IModPage[] {
    const mods: IModPage[] = [
    {
      curseId: 239286,
      name: 'Cyclic',
      crafttweaker: true,
      curseTag: 'cyclic',
      githubId: 'Cyclic'
    },
    {
      curseId: 268495,
      name: 'Simple Storage Network',
      curseTag: 'simple-storage-network',
      githubId: 'Storage-Network'
    },
    {
      curseId: 233659,
      name: 'Similsax Transtructors',
      curseTag: 'similsax-transtructors',
      githubId: 'Similsax-Transtructors'
    },
    {
      curseId: 231837,
      name: 'Ocean Floor Control',
      curseTag: 'ocean-floor-clay-sand-and-dirt',
      githubId: 'OceanFloorControl'
    },
    {
      curseId: 295780,
      crafttweaker: true,
      name: 'Roots Classic',
      curseTag: 'roots-classic',
      githubId: 'RootsClassic'
    },
    {
      curseId: 305561,
      name: 'Block Layers',
      curseTag: 'block-layers',
      githubId: 'DecoLayers'
    },
    {
      curseId: 305840,
      name: 'Absent by Design',
      curseTag: 'absent-by-design',
      githubId: 'AbsentByDesign'
    },
    {
      curseId: 275086,
      name: 'Ore Prospectors',
      curseTag: 'ore-prospectors',
      githubId: 'Prospectors'
    },
    {
      curseId: 305211,
      name: 'Anger Management',
      curseTag: 'anger-management',
      githubId: 'HostileOres'
    },
    {
      curseId: 246973,
      name: 'Creeper Heal',
      curseTag: 'forge-creeper-heal-unofficial',
      githubId: 'ForgeCreeperHeal'
    },
    {
      curseId: 307605,
      name: 'Giant Player Boss',
      curseTag: 'giant-player-boss',
      githubId: 'giant-player-boss'
    },
    {
      curseId: 313919,
      name: 'SSN Addon',
      curseTag: 'simple-cables-storage-network-addon',
      githubId: ''
    },
    { 
      curseId: 273711,
      name: 'EmberRoot Zoo',
      curseTag: 'emberroot-zoo',
      githubId: 'ERZ'
    },
    {
      curseId: 320757,
      name: 'Anti Bonemeal',
      curseTag: 'anti-bonemeal',
      githubId: 'AntiBonemeal'
    },
    {
      curseId: 232166,
      name: 'Biome Growth Control',
      curseTag: 'restricted-saplings',
      githubId: 'SaplingGrowthControl'
    },
    {
      curseId: 320706,
      name: 'Arrow Harvest',
      curseTag: 'arrow-harvest',
      githubId: 'ChorusArrow'
    },
    {
      curseId: 324307,
      name: 'Tamed Respawn',
      curseTag: 'tamedrespawn',
      githubId: 'TamedRespawn'
    }
    ];
    return mods;
  }

}
