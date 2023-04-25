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
  quervActiv: {
    imgPath: quervActiv,
    productName: "QUERV'ACTIV",
    littleDescription:
      'Maintient et soulage le pouce en activité en cas de tendinite de De Quervain',
    description: [
      "EPITACT® a créé l'orthèse souple d’activité QUERV’ACTIV™ pour accompagner et préserver le poignet durant vos activités. Ce dispositif médical est spécialement conçu pour soulager les personnes atteintes d’une tendinite de De Quervain.",
      'Développée sur le concept de la proprioception, cette orthèse vous aide à limiter et corriger par vous-même les gestes inadaptés. À porter le jour ou lors d’activités, sa présence discrète limite les micromouvements traumatisants du pouce et du poignet. En maintenant le pouce dans une position adaptée, ce dispositif apaise vos douleurs sans gêner la mobilité des articulations !',
    ],
    price: '29,90€',
  },
  quervImmo: {
    imgPath: quervImmo,
    productName:
      "QUERV'IMMO™ ORTHÈSE POIGNET / POUCE RIGIDE TENDINITE DE QUERVAIN",
    littleDescription:
      'Immobilise le pouce pour soulager les douleurs au repos liées à la tendinite de De Quervain',
    description: [
      'QUERV’IMMO™ est une orthèse de poignet/pouce pour la tendinite de De Quervain, pour les entorses ou les troubles musculosquelettiques du pouce et du poignet. Le port de cette orthèse est préconisé en période de repos ou la nuit pour immobiliser le pouce. Ainsi, elle prévient les micromouvements traumatiques du pouce et du poignet pour soulager et limiter l’évolution des douleurs. ',
    ],
    price: '29,90€',
  },
};

// GONARTHROSE
import physioStrap from '../assets/img/genou/products/physio-strap.png';
export const productsGonarthrose = {
  physioStrap: {
    imgPath: physioStrap,
    productName: 'GENOUILLÈRE ARTHROSE PHYSIOSTRAP® MÉDICAL',
    littleDescription:
      'Prévient et/ou soulage l’arthrose du genou ou le syndrome rotulien sans entraver le mouvement',
    description: [
      "Le port de la grenouillère arthrose PHYSIOstrap® à l’EPITHELIUM FLEX® contre l'arthrose aide à soulager et à sécuriser votre genou fragile ou douloureux (arthrose, pathologies rotuliennes, etc.)",
      "L'arthrose du genou touche 2,5 millions de personnes en France avec 160 000 nouveaux cas chaque année ! Cette pathologie chronique nécessite une prise en charge au quotidien et une solution adaptée au mode de vie du patient. Ainsi, les genouillères tricotées, volumineuses et compressives, conçues pour des pathologies aiguës et ponctuelles, ne peuvent constituer une réponse satisfaisante à une maladie au long cours. Aujourd’hui, nous proposons une solution pertinente : la genouillère pour arthrose PHYSIOstrap® Médical, développée pour être portée quotidiennement et sur une longue durée.",
    ],
    price: '29,90€',
  },
};

// RHIZARTHROSE
import rigideDeRepos from '../assets/img/main-poignet/products/rigide-de-repos.png';
import thermoformable from '../assets/img/main-poignet/products/thermoformable.png';
import soupleActivite from '../assets/img/main-poignet/products/souple-activite.png';
export const productsRhizarthrose = {
  rigideDeRepos: {
    imgPath: rigideDeRepos,
    productName: 'Rigide de repos',
    littleDescription:
      "Maintient le pouce pour prévenir et soulager les douleurs d'arthrose",
    description: [
      'La nuit ou au repos, optez pour l’orthèse rigide de repos qui vise à maintenir le pouce en position neutre, soulager et prévenir l’évolution de la rhizarthrose.',
      "L'orthèse pouce de repos rigide doit être portée la nuit ou dans toutes les situations où la main n'est pas utilisée. Vous pourrez aisément vous endormir ou profiter d’un moment de détente pendant que votre pouce est immobilisé en position de repos, en ouvrant la commissure entre l’index et le pouce. Elle a été développée pour vous soulager les douleurs articulaires et limiter l'évolution de la rhizarthrose.",
    ],
    price: '29,90€',
  },
  thermoformable: {
    imgPath: thermoformable,
    productName: 'Thermoformable',
    littleDescription:
      "Immobilise l'articulation et soulage les douleurs, à mouler (thermoformable).",
    description: [
      'En s’adaptant parfaitement à votre morphologie, l’orthèse thermoformable EPITACT® à mouler soi-même facilement, vise à calmer la douleur et à prévenir les déformations (pousse en Z).',
      "Conseillée pour soulager les douleurs articulaires à la base du pouce déformé, elle est conçue pour limiter l'évolution de la rhizarthrose. Cette orthèse est thermoformable : elle devient souple lorsqu’elle est immergée dans l'eau chaude. Dès qu'elle est enfilée, elle prend la forme de votre main en positionnant naturellement le pouce au repos. Elle durcit et devient à nouveau rigide en quelques minutes. Une fois thermoformée, l’orthèse de pouce est ainsi parfaitement adaptée à votre morphologie.",
    ],
    price: '29,90€',
  },
  soupleActivite: {
    imgPath: soupleActivite,
    productName: 'Souple d’activité',
    littleDescription:
      'Maintient et soulage le pouce en cas de rhizarthrose (arthrose du pouce), sans entraver la mobilité',
    description: [
      "EPITACT® a créé l'orthèse souple d’activité, une orthèse de pouce pour la rhizarthrose qui a pour but de soulager les douleurs articulaires liées à l’arthrose à la base du pouce tout en conservant l’entière fonctionnalité de la main !",
      'Le port pendant la journée de l’orthèse proprioceptive est recommandé pour soulager les douleurs articulaires liées à de la rhizarthrose. Cette orthèse de pouce souple limite les micromouvements traumatisants. Il maintient le pouce en position de repos et préserve la chaleur locale au niveau de l’articulation. Souple, fine et discrète, elle vise à conserver l’entière fonctionnalité de votre main !',
    ],
    price: '29,90€',
  },
};

//CANAL CARPIEN
import carpActiv from '../assets/img/main-poignet/products/carp-activ.png';
import carpImmo from '../assets/img/main-poignet/products/carp-immo.png';
export const productsCanalCarpien = {
  carpActiv: {
    imgPath: carpActiv,
    productName: 'Carpien Immobilisateur',
    littleDescription:
      'Pour soulager les douleurs et fourmillements liés au syndrome du canal carpien',
    description: [
      'Durant la nuit ou dans toutes les situations où vous n’utilisez pas votre main, le port régulier de l’orthèse de repos CARP’IMMO™ est préconisé en cas de syndrome du canal carpien, de troubles musculosquelettiques, d’inflammations ou de tendinites du poignet.',
      'Contrairement à ce que l’on peut imaginer, le poignet n’est pas mis au repos durant la nuit car nous avons naturellement tendance à le plier et à placer la main sous l’oreiller. La pression est ainsi augmentée dans le canal carpien et des douleurs apparaissent. L’orthèse de poignet pour canal carpien CARP’IMMO™ a pour objectif de maintenir le poignet en position neutre pour favoriser des nuits paisibles et un sommeil réparateur.',
    ],
    price: '29,90€',
  },
  carpImmo: {
    imgPath: carpImmo,
    productName: 'Carpien Actif',
    littleDescription:
      'Apaise les fourmillements et douleurs au poignet liés au syndrome du canal carpien',
    description: [
      'L’orthèse EPITACT® pour le canal carpien est une orthèse souple d’activité conçue pour accompagner le poignet durant vos activités. Idéale si vous souffrez du syndrome du canal carpien.',
      'En limitant l’amplitude des mouvements du poignet et les arrêts brusques dans vos gestes qui favorisent le syndrome du canal carpien, CARP’ACTIV™ vous aide à retrouver plaisir et sérénité dans vos activités quotidiennes. Souple, fine et discrète, cette orthèse pour le canal carpien d’EPITACT® est conçue pour accompagner les mouvements de votre poignet tout en conservant l’usage de vos doigts.',
    ],
    price: '29,90€',
  },
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
  productCremeConfortArticulaire: {
    imgPath: productCremeConfortArticulaire,
    productName: 'Crème de confort articulaire',
    littleDescription:
      'Développée pour dynamiser les pieds gonflés et apaiser les sensations de jambes lourdes.',
    description: [
      'Douleurs articulaires intenses, hallux valgus. Pour soulager les douleurs articulaires du pied, cette crème apaisante est 100% d’origine naturelle et sans paraben L’huile essentielle de Gaulthérie est réputée pour ses propriétés calmantes.',
      'L’huile essentielle de Genévrier est reconnue pour son effet relaxant. Enfin, l’huile essentielle de Pin a été choisie pour son action positive sur la douleur. Ces huiles essentielles (Gaulthérie, Genévrier et Pin) agissent en synergie pour une plus grande efficacité. Appliquée sur les pieds en massage régulièrement, elle apporte soulagement et détente aux articulations fatiguées, sollicitées et douloureuses.',
    ],
    price: '29,90€',
  },
  productEcarteurs: {
    imgPath: productEcarteurs,
    productName: 'Ecarteurs',
    littleDescription:
      'Pour séparer les orteils en cas d’hallux valgus (« oignon »).',
    description: [
      'Votre gros orteil et le deuxième se chevauchent ? Les écarteurs EPITACT® ont pour but de limiter la déviation du gros orteil en évitant le chevauchement et ainsi l’apparition de cors interdigitaux.',
      'Si la déformation liée à l’hallux valgus est importante, il arrive que le gros orteil ait une fâcheuse tendance à venir se coller contre son voisin. Outre le caractère difficile du chaussage, un autre problème peut se greffer sur cette pathologie : la formation de callosités, de cors ou d’œil-de-perdrix entre les deux doigts de pied. Il est alors essentiel de les séparer grâce à un ou plusieurs écarteurs.',
    ],
    price: '29,90€',
  },
  productOrtheseCorrectiveNuit: {
    imgPath: productOrtheseCorrectiveNuit,
    productName: 'ORTHÈSE CORRECTIVE NUIT HALLUX VALGUS « OIGNON »',
    littleDescription:
      "Conçue pour limiter l'évolution et apaiser les douleurs la nuit.",
    description: [
      'Vous avez des douleurs la nuit sur votre « oignon » ? L’orthèse corrective de nuit EPITACT® pour hallux valgus a été conçue pour soulager les douleurs articulaires nocturnes et supprimer les douleurs de contact tout en se faisant oublier pendant le sommeil.',
      "L'orthèse corrective hallux valgus nuit EPITACT® a pour objectif de corriger la déformation causée par un hallux valgus et de limiter son évolution. Elle est recommandée pour soulager les douleurs nocturnes et les douleurs de contacts avec les draps, le matelas, etc.",
    ],
    price: '29,90€',
  },
  productOrtheseCorrectiveSport: {
    imgPath: productOrtheseCorrectiveSport,
    productName: 'Orthèse Corrective Hallux Valgus Sport',
    littleDescription:
      "Développée pour réaxer l'orteil durant la pratique sportive",
    description: [
      "Durant l'activité physique, l’orthèse de sport pour l’hallux valgus EPITACT® a pour but de réaxer le gros orteil, de limiter la pronation et d’optimiser la propulsion.",
      'Attelle, redresseur, correcteur, orthèse corrective pour l’hallux valgus… Voici la panoplie des solutions disponibles qui visent à corriger et soulager un hallux valgus douloureux. Pourtant, rares sont celles qui peuvent se porter durant la pratique sportive. Développée pour s’insérer dans vos chaussures de sport, l’orthèse corrective hallux valgus EPITACT® limite la douleur et corrige la déformation de votre hallux valgus débutant tout en améliorant vos performances.',
    ],
    price: '29,90€',
  },
  productOrtheseCorrectiveDouble: {
    imgPath: productOrtheseCorrectiveDouble,
    productName: 'ORTHÈSE CORRECTIVE DOUBLE HALLUX VALGUS',
    littleDescription:
      'Conçue pour corriger la déviation et soulager les douleurs plantaires.',
    description: [
      'L’orthèse corrective double a été développée pour limiter l’évolution de l’hallux valgus (grâce à une correction de l’axe du gros orteil) tout en protégeant l’avant-pied.',
      'Un « oignon » est souvent associé à des douleurs en zone plantaire. Le gros orteil ne jouant plus son rôle de support, la charge qu’il supportait se répartit naturellement sur le 2e et le 3e métatarsien. De ce fait, des zones de corne, de callosités parfois douloureuses apparaissent sous le pied.',
    ],
    price: '29,90€',
  },
  productOrtheseCorrectiveJour: {
    imgPath: productOrtheseCorrectiveJour,
    productName: 'ORTHÈSE CORRECTIVE HALLUX VALGUS « OIGNON » JOUR',
    littleDescription:
      'Correcteur de l’hallux valgus qui réaxe le gros orteil et soulage les douleurs à la marche.',
    description: [
      'L’orthèse corrective double a été développée pour limiter l’évolution de l’hallux valgus (grâce à une correction de l’axe du gros orteil) tout en protégeant l’avant-pied.',
      'Un « oignon » est souvent associé à des douleurs en zone plantaire. Le gros orteil ne jouant plus son rôle de support, la charge qu’il supportait se répartit naturellement sur le 2e et le 3e métatarsien. De ce fait, des zones de corne, de callosités parfois douloureuses apparaissent sous le pied.',
    ],
    price: '29,90€',
  },
  productKitHV: {
    imgPath: productKitHV,
    productName: 'Kit Sérum Epithelium',
    littleDescription:
      "Inconfort au niveau de l'oignon lié à une douleur articulaire et/ou des frottements excessifs.",
    description: [
      'Le kit hallux valgus est dédié aux personnes qui ressentent de l’inconfort au niveau d’un hallux valgus (« oignon »), inconfort lié à une douleur articulaire et/ou des frottements excessifs. Constitué d’un sérum apaisant à base d’huiles essentielles et de protections anti-frottements, le kit est efficace toute la journée.',
    ],
    price: '29,90€',
  },
  productCoussinetDouble: {
    imgPath: productCoussinetDouble,
    productName: 'Coussinet double protection',
    littleDescription:
      "Développés pour soulager les douleurs sur l' « oignon » (hallux valgus) et l'avant-pied (durillons).",
    description: [
      'Vous avez aussi des douleurs plantaires ? Les coussinets double protection EPITACT® ont été développés pour soulager les deux zones, l’hallux valgus (« oignon ») et sous l’avant-pied !',
    ],
    price: '29,90€',
  },
  productProtector: {
    imgPath: productProtector,
    productName: 'PROTECTION HALLUX VALGUS',
    littleDescription:
      "Destinée à soulager les douleurs sur l' « oignon » de l'hallux valgus au quotidien.",
    description: [
      "Pour un usage quotidien, adoptez la protection hallux valgus EPITACT® ! Fine et discrète, elle a pour objectif de limiter les frottements et d'apaiser les douleurs conflictuelles avec la chaussure.",
      "Vous souffrez d’un « oignon » au pied ? Même si la déformation n’est pas très marquée, le chaussage est très vite douloureux. Le conflit avec la chaussure crée des douleurs sur l’excroissance osseuse et de la corne liée à des pressions et frottements excessifs. Il faut donc interposer entre la chaussure et l’ « oignon » une interface qui permette de répartir les charges et de soulager la douleur. C’est le rôle remplit par le gel silicone EPITHELIUM 26® intégré à la protection hallux valgus EPITACT®. Une pastille d'1 mm de ce gel positionnée sur l' « oignon » permet d'apaiser les douleurs.",
    ],
    price: '29,90€',
  },
};

// Cors
import barrettesSousDiaphysaires from '../assets/img/pieds/products/barrettes_sous_diaphysaires-398x604.png';
import protegePointesOrteils from '../assets/img/pieds/products/protege-pointes_orteils_398x604.png';
import digitubes from '../assets/img/pieds/products/digitubes_398x604.png';
import separateurs from '../assets/img/pieds/products/separateurs_398x604.png';
import doigtiers from '../assets/img/pieds/products/doigtiers_398x604.png';
import protectionsOnglesBleusSport from '../assets/img/pieds/products/protections-ongles-bleus_sport_398x604.png';
export const productsCors = {
  barrettesSousDiaphysaires: {
    imgPath: barrettesSousDiaphysaires,
    productName: 'Barrette sous-diaphysaire',
    littleDescription: 'Pour les orteils en griffe ou en marteau',
    description: [
      'Se chausser lorsque l’on a un orteil en marteau ou en griffe peut être très douloureux. En protégeant l’orteil sans le redresser, le risque est qu’il finisse par se fixer dans cette position et qu’il soit plus difficile ensuite de le redresser. Et si la solution était de positionner une barrette sous diaphysaire sous les orteils afin de les allonger ? On conserve ainsi une certaine souplesse des orteils en évitant les conflits avec la chaussure.',
      "Les barrettes sous-diaphysaires en silicone EPITACT® pour les orteils en marteau ou en griffe s’adaptent parfaitement à l'espace situé sous les doigts de pieds. Le gel EPITHELIUM 26® qui les constitue vise à modifier confortablement les appuis pour limiter la formation des cors pulpaires et dorsaux.",
      "De plus, le dispositif a une excellente tenue grâce à son élastique souple à passer autour du 3e orteil. Le confort est encore amélioré par le choix d'un tissu doux favorisant l'évacuation de la sueur.",
    ],
    price: '29,90€',
  },
  protegePointesOrteils: {
    imgPath: protegePointesOrteils,
    productName: 'PROTÈGE-POINTES ORTEILS EN MARTEAU',
    littleDescription:
      'Vise à protéger et soulager le dessus des orteils en marteau, en griffe ou cors dorsaux',
    description: [
      'Vous avez un ou plusieurs cors sur le dessus des orteils, ou des orteils en marteau ou en griffe ? Ces protège-pointes s’enfilent comme des chaussettes pour protéger le dessus de tous vos orteils.',
      'Un orteil en marteau ou en griffe est assez facile à protéger mais la tâche se complique lorsque plusieurs doigts de pieds sont concernés. Il faut alors opter pour une solution globale car la mise en place de protections individuelles sur chaque orteil peut augmenter considérablement l’encombrement dans la chaussure et créer alors davantage de pressions.',
      "Ce dispositif protège l'ensemble des orteils avec un encombrement réduit. Les protège-pointes EPITACT® réchauffent aussi les extrémités souvent mal irriguées.",
    ],
    price: '29,90€',
  },
  digitubes: {
    imgPath: digitubes,
    productName: 'DIGITUBES®',
    littleDescription:
      'Protègent les orteils et soulagent la douleur liée aux cors et œils-de-perdrix',
    description: [
      'Les DIGITUBES® EPITACT®  soulagent et éliminent naturellement les cors dorsaux (au-dessus des orteils) et les œils-de-perdrix (entre les orteils). Ils peuvent aussi s’utiliser en prévention pour éviter la formation d’un cor ou bien d’une ampoule sur les orteils.',
    ],
    price: '29,90€',
  },
  separateurs: {
    imgPath: separateurs,
    productName: 'SÉPARATEURS',
    littleDescription:
      'Protègent les orteils et soulagent la douleur des cors interdigitaux et œils-de-perdrix',
    description: [
      "Optez pour les séparateurs d’orteils en silicone, conçus pour soulager les cors en séparant les orteils de quelques millimètres. Ils ont pour but d'éviter le chevauchement de deux orteils en cas de déformation.",
      'Vous avez deux orteils qui ont tendance à se chevaucher ou à se toucher ? Ceci est fréquent et provoque souvent la formation de corne dans l’espace interdigital. C’est ce que l’on appelle communément un œil-de-perdrix. Pour éviter la formation de ce cor, l’idée est de séparer les deux orteils grâce au séparateur pour doigts de pieds EPITACT® constitué d’un matériau répartiteur de pressions très confortable et à la forme parfaitement ergonomique.',
      "Leur forme et le gel EPITHELIUM™ permettent aux séparateurs d’orteils en silicone EPITACT® de s'adapter parfaitement à la forme du pied et favorisent leur maintien tout au long de la journée.",
    ],
    price: '29,90€',
  },
  doigtiers: {
    imgPath: doigtiers,
    productName: 'Doigtiers',
    littleDescription:
      'Pour protéger les orteils et soulager la douleur des cors pulpaires et ongles incarnés ou bleus',
    description: [
      'Les doigtiers en silicone EPITACT® sont recommandés pour protéger l’extrémité des orteils des cors pulpaires, des ongles incarnés et des ongles bleus. Portés quotidiennement, ces protège-orteils peuvent s’utiliser pour soulager les douleurs ou bien en prévention. En effet, une fois le cor supprimé par un podologue, ils éviteront l’apparition ou la réapparition du cor.',
    ],
    price: '29,90€',
  },
  protectionsOnglesBleusSport: {
    imgPath: protectionsOnglesBleusSport,
    productName: 'DOIGTIERS PROTECTION ONGLES BLEUS SPORT',
    littleDescription:
      'Doigtiers de protection ongles bleus durant la pratique du sport',
    description: [
      'Ces protections ont été spécialement conçues pour les sports où les orteils sont soumis à des impacts répétés contre la chaussure en supprimant les pressions et les micro-chocs sur l’ongle.',
      'Que l’ongle bleu soit susceptible d’apparaître à cause de chocs répétitifs contre la chaussure (rando, trail, course à pied) ou suite à un traumatisme provoqué par un autre joueur (football, rugby), les doigtiers de protection ongles bleus EPITACT® SPORT joueront efficacement leur rôle. Ils sont aussi indiqués en prévention et lorsque l’ongle bleu est déjà formé.',
    ],
    price: '29,90€',
  },
};
