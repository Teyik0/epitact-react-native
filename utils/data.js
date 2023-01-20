import douleursPieds from '../assets/img/pieds/douleurs-pieds.png';
import ampoulesPieds from '../assets/img/pieds/ampoules.png';
import corsPieds from '../assets/img/pieds/cors.png';
import corsDorsauxPieds from '../assets/img/pieds/cors-dorsaux.png';
import crevassesTalonnieresPieds from '../assets/img/pieds/crevasses-talonnieres.png';
import douleursPlantairesDurillonsPieds from '../assets/img/pieds/douleurs-plantaires-durillons.png';
import epineCalcaneennePieds from '../assets/img/pieds/epine-calcaneenne.png';
import halluxValgusPieds from '../assets/img/pieds/hallux-valgus.png';
import onglesIncarnesPieds from '../assets/img/pieds/ongles-incarnes.png';
import jambesFatiguesPieds from '../assets/img/pieds/pieds-et-jambes-fatigues.png';
import verruesPieds from '../assets/img/pieds/verrues.png';

import douleursCheville from '../assets/img/cheville/douleurs-cheville.png';
import entorseCheville from '../assets/img/cheville/entorse-cheville.png';

import douleursGenou from '../assets/img/genou/douleurs-genou.png';
import gonarthroseGenou from '../assets/img/genou/gonarthrose.png';
import syndromeRotulienGenou from '../assets/img/genou/syndrome-rotulien.png';

import douleursDos from '../assets/img/dos/douleurs-dos.png';
import lombalgieDos from '../assets/img/dos/lombalgie.png';

import douleursMainPoignet from '../assets/img/main-poignet/douleurs-main-poignet.png';
import canalCarpienMainPoignet from '../assets/img/main-poignet/canal-carpien.png';
import rhizarthroseMainPoignet from '../assets/img/main-poignet/rhizarthrose.png';
import tendiniteMainPoignet from '../assets/img/main-poignet/tendinite-de-quervain.png';

export const data = [
  {
    img: douleursMainPoignet,
    symptomes: [
      { img: canalCarpienMainPoignet, screen: 'CanalCarpien' },
      { img: rhizarthroseMainPoignet, screen: 'Rhizarthrose' },
      { img: tendiniteMainPoignet, screen: 'TendiniteDeQuervain' },
    ],
  },
  {
    img: douleursPieds,
    symptomes: [
      // { img: ampoulesPieds },
      { img: corsPieds, screen: 'Cors' },
      // { img: corsDorsauxPieds },
      { img: crevassesTalonnieresPieds, screen: 'CrevassesTalonnieres' },
      // { img: douleursPlantairesDurillonsPieds },
      // { img: epineCalcaneennePieds },
      { img: halluxValgusPieds, screen: 'HalluxValgusPieds' },
      // { img: onglesIncarnesPieds },
      // { img: jambesFatiguesPieds },
      // { img: verruesPieds },
    ],
  },
  {
    img: douleursGenou,
    symptomes: [
      { img: gonarthroseGenou, screen: 'Gonarthrose' },
      { img: syndromeRotulienGenou, screen: 'SyndromeRotulien' },
    ],
  },
  {
    img: douleursCheville,
    symptomes: [{ img: entorseCheville, screen: 'EntorseCheville' }],
  },
  {
    img: douleursDos,
    symptomes: [{ img: lombalgieDos, screen: 'Lombalgie' }],
  },
];

// TENDINITE DE QUERVAIN
import quervActiv from '../assets/img/main-poignet/products/querv-activ.png';
import quervImmo from '../assets/img/main-poignet/products/querv-immo.png';

export const productsTendiniteDeQuervain = {
  quervActiv: quervActiv,
  quervImmo: quervImmo,
};

// GONARTHROSE
import physioStrap from '../assets/img/genou/products/physio-strap.png';

export const productsGonarthrose = {
  physioStrap: physioStrap,
};

// RHIZARTHROSE
import rigideDeRepos from '../assets/img/main-poignet/products/rigide-de-repos.png';
import thermoformable from '../assets/img/main-poignet/products/thermoformable.png';
import soupleActivite from '../assets/img/main-poignet/products/souple-activite.png';

export const productsRhizarthrose = {
  rigideDeRepos: rigideDeRepos,
  thermoformable: thermoformable,
  soupleActivite: soupleActivite,
};

//CANAL CARPIEN
import carpActiv from '../assets/img/main-poignet/products/carp-activ.png';
import carpImmo from '../assets/img/main-poignet/products/carp-immo.png';

export const productsCanalCarpien = {
  carpActiv: carpActiv,
  carpImmo: carpImmo,
};

//HALLUX VALGUS
import productCremeConfortArticulaire from '../assets/img/pieds/products/creme-conf-arti-HV_398x604.png';
import productEcarteurs from '../assets/img/pieds/products/ecarteurs-HV_398x604.png';
import productOrtheseCorrectiveNuit from '../assets/img/pieds/products/orthese-corrective-nuit-hallux-valgus_398x604.png';
import productOrtheseCorrectiveSport from '../assets/img/pieds/products/orthese-corrective-hallux-valgus-sport_398x604.png';
import productOrtheseCorrectiveDouble from '../assets/img/pieds/products/orthese-corrective-double-hallux-valgus_398x604.png';
import productOrtheseCorrectiveJour from '../assets/img/pieds/products/orthese-corrective-jour-hallux-valgus_398x604.png';
import productKitHV from '../assets/img/pieds/products/kit-HV_287x604.png';
import productCoussinetDouble from '../assets/img/pieds/products/coussinets-double-HV_398x604.png';
import productProtector from '../assets/img/pieds/products/protection-hallux-valgus_398x604.png';

export const productsHalgusValgus = {
  productCremeConfortArticulaire: productCremeConfortArticulaire,
  productEcarteurs: productEcarteurs,
  productOrtheseCorrectiveNuit: productOrtheseCorrectiveNuit,
  productOrtheseCorrectiveSport: productOrtheseCorrectiveSport,
  productOrtheseCorrectiveDouble: productOrtheseCorrectiveDouble,
  productOrtheseCorrectiveJour: productOrtheseCorrectiveJour,
  productKitHV: productKitHV,
  productCoussinetDouble: productCoussinetDouble,
  productProtector: productProtector,
};

// Cors

import barrettesSousDiaphysaires from '../assets/img/pieds/products/barrettes_sous_diaphysaires-398x604.png';
import protegePointesOrteils from '../assets/img/pieds/products/protege-pointes_orteils_398x604.png';
import digitubes from '../assets/img/pieds/products/digitubes_398x604.png';
import separateurs from '../assets/img/pieds/products/separateurs_398x604.png';
import doigtiers from '../assets/img/pieds/products/doigtiers_398x604.png';
import protectionsOnglesBleusSport from '../assets/img/pieds/products/protections-ongles-bleus_sport_398x604.png';

export const productsCors = {
  barrettesSousDiaphysaires: barrettesSousDiaphysaires,
  protegePointesOrteils: protegePointesOrteils,
  digitubes: digitubes,
  separateurs: separateurs,
  doigtiers: doigtiers,
  protectionsOnglesBleusSport: protectionsOnglesBleusSport,
};
