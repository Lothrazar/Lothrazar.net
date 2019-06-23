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
      curseTag: 'https://minecraft.curseforge.com/projects/simple-storage-network',
      githubId: 'https://github.com/Lothrazar/Storage-Network/issues'
    },
    {
      curseId: 233659,
      name: 'Similsax Transtructors',
      curseTag: 'https://minecraft.curseforge.com/projects/similsax-transtructors',
      githubId: 'https://github.com/PrinceOfAmber/Similsax-Transtructors/issues'
    },
    {
      curseId: 231837,
      name: 'Ocean Floor Control',
      curseTag: 'https://minecraft.curseforge.com/projects/ocean-floor-clay-sand-and-dirt',
      githubId: 'https://github.com/PrinceOfAmber/OceanFloorControl/issues'
    },
    {
      curseId: 295780,
      crafttweaker: true,
      name: 'Roots Classic',
      curseTag: 'https://minecraft.curseforge.com/projects/roots-classic',
      githubId: 'https://github.com/PrinceOfAmber/RootsClassic/issues'
    },
    {
      curseId: 305561,
      name: 'Block Layers',
      curseTag: 'https://minecraft.curseforge.com/projects/block-layers',
      githubId: 'https://github.com/PrinceOfAmber/DecoLayers/issues'
    },
    {
      curseId: 305840,
      name: 'Absent by Design',
      curseTag: 'https://minecraft.curseforge.com/projects/absent-by-design',
      githubId: 'https://github.com/Lothrazar/AbsentByDesign/issues'
    },
    {
      curseId: 275086,
      name: 'Ore Prospectors',
      curseTag: 'https://minecraft.curseforge.com/projects/ore-prospectors',
      githubId: 'https://github.com/PrinceOfAmber/Prospectors/issues'
    },
    {
      curseId: 305211,
      name: 'Anger Management',
      curseTag: 'https://minecraft.curseforge.com/projects/anger-management',
      githubId: 'https://github.com/PrinceOfAmber/HostileOres/issues'
    },
    {
      curseId: 246973,
      name: 'Creeper Heal',
      curseTag: 'https://minecraft.curseforge.com/projects/forge-creeper-heal-unofficial',
      githubId: 'https://github.com/PrinceOfAmber/ForgeCreeperHeal'
    },
    {
      curseId: 307605,
      name: 'Giant Player Boss',
      curseTag: 'https://minecraft.curseforge.com/projects/giant-player-boss',
      githubId: ''
    },
    {
      curseId: 313919,
      name: 'SSN Addon',
      curseTag: 'https://minecraft.curseforge.com/projects/simple-cables-storage-network-addon',
      githubId: ''
    },
    { 
      curseId: 273711,
      name: 'EmberRoot Zoo',
      curseTag: 'https://minecraft.curseforge.com/projects/emberroot-zoo',
      githubId: 'https://github.com/PrinceOfAmber/ERZ/issues'
    },
    {
      curseId: 320757,
      name: 'Anti Bonemeal',
      curseTag: 'https://minecraft.curseforge.com/projects/anti-bonemeal',
      githubId: 'https://github.com/Lothrazar/AntiBonemeal/issues'
    },
    {
      curseId: 232166,
      name: 'Biome Growth Control',
      curseTag: 'https://minecraft.curseforge.com/projects/restricted-saplings',
      githubId: 'https://github.com/LothrazarMinecraftMods/SaplingGrowthControl/issues'
    },
    {
      curseId: 320706,
      name: 'Arrow Harvest',
      curseTag: 'https://minecraft.curseforge.com/projects/arrow-harvest',
      githubId: 'https://github.com/Lothrazar/ChorusArrow/issues'
    },
    {
      curseId: 324307,
      name: 'Tamed Respawn',
      curseTag: 'https://minecraft.curseforge.com/projects/tamedrespawn',
      githubId: 'https://github.com/Lothrazar/TamedRespawn/issues'
    }
    ];
    return mods;
  }
}
