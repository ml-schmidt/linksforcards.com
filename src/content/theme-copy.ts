import { THEME_COPY_BATCH } from "@/content/theme-copy-batch";
import { THEME_COPY_ROUND2 } from "@/content/theme-copy-round2";
import type { Locale } from "@/lib/locales";
import { firstSentence } from "@/lib/snippets";

export type ThemeCopy = { title: string; h1: string; description: string; lede: string };

const STATS: Record<Locale, string> = {
  us: "{total} English printings across {sets} sets, from {first} to {last}.",
  uk: "{total} English printings across {sets} sets, from {first} to {last}.",
  de: "{total} englische Drucke in {sets} Sets, vom {first} bis zum {last}.",
  fr: "{total} tirages anglais dans {sets} extensions, du {first} au {last}.",
  es: "{total} impresiones inglesas en {sets} expansiones, del {first} al {last}.",
  it: "{total} stampe inglesi in {sets} set, dal {first} al {last}.",
  nl: "{total} Engelse drukken in {sets} sets, van {first} tot {last}.",
  sv: "{total} engelska tryck i {sets} set, från {first} till {last}.",
  no: "{total} engelske trykk i {sets} sett, fra {first} til {last}.",
  fi: "{total} englanninkielistä painosta {sets} setissä, ajalta {first}–{last}.",
  pl: "{total} angielskich druków w {sets} setach, od {first} do {last}.",
};

type Bits = { title: string; h1: string; lede: string };

const COPY: Record<Locale, Record<string, Bits>> = {
  us: {
    pikachu: {
      title: "All Pikachu cards: master set list and checklist",
      h1: "All Pikachu cards",
      lede: "Pikachu is the face that shows up in every pile I sort. This binder is every English printing in the open list, in the order the sets came out.",
    },
    eeveelutions: {
      title: "All Eevee and Eeveelution cards: master set list and checklist",
      h1: "Eevee and the Eeveelutions",
      lede: "Eevee and the eight evolutions share this binder. The shorter Eevee-only list sits beside it for the afternoon when I only want that one face.",
    },
    eevee: {
      title: "All Eevee cards: master set list and checklist",
      h1: "All Eevee cards",
      lede: "This is the short binder: Eevee alone, without the evolutions. I use it when the full Eeveelution list is more than the afternoon can hold.",
    },
    "gastly-line": {
      title: "All Gengar cards: Gastly line master set list and checklist",
      h1: "Gengar and the Gastly line",
      lede: "Gengar is the card I flip to, and Gastly and Haunter belong in the same binder. A line is easier to finish than one stage pulled out of context.",
    },
    snorlax: {
      title: "All Snorlax cards: master set list and checklist",
      h1: "Snorlax and Munchlax",
      lede: "Snorlax and Munchlax share this checklist. The smaller card belongs with the big one.",
    },
    charizard: {
      title: "All Charizard cards: master set list and checklist",
      h1: "All Charizard cards",
      lede: "Charizard is the rare-heavy binder. I say that plainly: a common is the exception here, so this is not the pile I finish from a grocery tin.",
    },
    "yuka-morii": {
      title: "Yuka Morii clay cards checklist",
      h1: "Yuka Morii clay cards",
      lede: "Yuka Morii's clay Pokémon are the cards I can spot across a shop table. Almost all of them are commons and uncommons. Bulk is gold, and this list is full of it.",
    },
    "mitsuhiro-arita": {
      title: "Mitsuhiro Arita cards, split by series",
      h1: "Mitsuhiro Arita cards",
      lede: "Mitsuhiro Arita has drawn cards since the first English set. The list is long, so I keep one binder and jump by series.",
    },
    "trainers-pokemon": {
      title: "Trainer's Pokémon cards checklist",
      h1: "Trainer's Pokémon",
      lede: "These are the Pokémon that carry someone else's name on the English card. If the name has an apostrophe-s and the card is a Pokémon, it has a slot here.",
    },
    "team-rocket": {
      title: "Team Rocket cards checklist",
      h1: "Team Rocket cards",
      lede: "A Team Rocket name on the card, or a Dark Pokémon from that era, lands in this binder. The owner's Pokémon keep a list of their own.",
    },
    "delta-species": {
      title: "Delta Species cards checklist",
      h1: "Delta Species cards",
      lede: "Delta Species cards carry a δ in the name. The stretch of sets is short, and I like it as one binder.",
    },
    "baby-pokemon": {
      title: "Baby Pokémon cards checklist",
      h1: "Baby Pokémon",
      lede: "Baby Pokémon are the small pre-evolutions, from Pichu through the later babies. Munchlax is here and also in the Snorlax binder, because one card can fill two themed lists.",
    },
  },
  uk: {
    pikachu: {
      title: "All Pikachu cards: master set list and checklist",
      h1: "All Pikachu cards",
      lede: "Pikachu is the face that shows up in every pile I sort. This binder is every English printing in the open list, in the order the sets came out.",
    },
    eeveelutions: {
      title: "All Eevee and Eeveelution cards: master set list and checklist",
      h1: "Eevee and the Eeveelutions",
      lede: "Eevee and the eight evolutions share this binder. The shorter Eevee-only list sits beside it for the afternoon when I only want that one face.",
    },
    eevee: {
      title: "All Eevee cards: master set list and checklist",
      h1: "All Eevee cards",
      lede: "This is the short binder: Eevee alone, without the evolutions. I use it when the full Eeveelution list is more than the afternoon can hold.",
    },
    "gastly-line": {
      title: "All Gengar cards: Gastly line master set list and checklist",
      h1: "Gengar and the Gastly line",
      lede: "Gengar is the card I flip to, and Gastly and Haunter belong in the same binder. A line is easier to finish than one stage pulled out of context.",
    },
    snorlax: {
      title: "All Snorlax cards: master set list and checklist",
      h1: "Snorlax and Munchlax",
      lede: "Snorlax and Munchlax share this checklist. The smaller card belongs with the big one.",
    },
    charizard: {
      title: "All Charizard cards: master set list and checklist",
      h1: "All Charizard cards",
      lede: "Charizard is the rare-heavy binder. I say that plainly: a common is the exception here, so this is not the pile I finish from a grocery tin.",
    },
    "yuka-morii": {
      title: "Yuka Morii clay cards checklist",
      h1: "Yuka Morii clay cards",
      lede: "Yuka Morii's clay Pokémon are the cards I can spot across a shop table. Almost all of them are commons and uncommons. Bulk is gold, and this list is full of it.",
    },
    "mitsuhiro-arita": {
      title: "Mitsuhiro Arita cards, split by series",
      h1: "Mitsuhiro Arita cards",
      lede: "Mitsuhiro Arita has drawn cards since the first English set. The list is long, so I keep one binder and jump by series.",
    },
    "trainers-pokemon": {
      title: "Trainer's Pokémon cards checklist",
      h1: "Trainer's Pokémon",
      lede: "These are the Pokémon that carry someone else's name on the English card. If the name has an apostrophe-s and the card is a Pokémon, it has a slot here.",
    },
    "team-rocket": {
      title: "Team Rocket cards checklist",
      h1: "Team Rocket cards",
      lede: "A Team Rocket name on the card, or a Dark Pokémon from that era, lands in this binder. The owner's Pokémon keep a list of their own.",
    },
    "delta-species": {
      title: "Delta Species cards checklist",
      h1: "Delta Species cards",
      lede: "Delta Species cards carry a δ in the name. The stretch of sets is short, and I like it as one binder.",
    },
    "baby-pokemon": {
      title: "Baby Pokémon cards checklist",
      h1: "Baby Pokémon",
      lede: "Baby Pokémon are the small pre-evolutions, from Pichu through the later babies. Munchlax is here and also in the Snorlax binder, because one card can fill two themed lists.",
    },
  },
  de: {
    pikachu: {
      title: "Alle Pikachu Karten Liste und Checkliste",
      h1: "Alle Pikachu-Karten",
      lede: "Pikachu ist das Gesicht, das in jedem Stapel auftaucht, den ich sortiere. Diese Liste ist jeder englische Druck im offenen Datensatz, in der Reihenfolge der Sets.",
    },
    eeveelutions: {
      title: "Alle Evoli Karten Liste mit den Entwicklungen",
      h1: "Evoli und die Entwicklungen",
      lede: "Evoli und die Entwicklungen teilen sich diesen Binder. Die kürzere Evoli-Liste liegt daneben, für den Nachmittag, an dem nur das eine Gesicht zählt.",
    },
    eevee: {
      title: "Alle Evoli Karten Liste",
      h1: "Alle Evoli-Karten",
      lede: "Das ist der kurze Binder: nur Evoli, ohne die Entwicklungen.",
    },
    "gastly-line": {
      title: "Alle Gengar-Karten: Nebulak, Alpollo und Gengar",
      h1: "Gengar und die Nebulak-Linie",
      lede: "Gengar ist die Karte, zu der ich blättere, und Nebulak und Alpollo gehören in denselben Binder.",
    },
    snorlax: {
      title: "Alle Relaxo-Karten und Mampfaxo",
      h1: "Relaxo und Mampfaxo",
      lede: "Relaxo und Mampfaxo teilen sich diese Liste. Die kleine Karte gehört zur großen.",
    },
    charizard: {
      title: "Alle Glurak Karten Übersicht",
      h1: "Alle Glurak-Karten",
      lede: "Glurak ist der seltene Binder. Die meisten Fächer hier sind keine häufigen Karten, und das sage ich offen.",
    },
    "yuka-morii": {
      title: "Yuka Morii Tonkarten: Checkliste",
      h1: "Yuka Morii Tonkarten",
      lede: "Die Tonfiguren von Yuka Morii erkenne ich über einen Ladentisch hinweg. Fast alles davon ist Bulk, und Bulk ist Gold.",
    },
    "mitsuhiro-arita": {
      title: "Mitsuhiro Arita Karten nach Serie",
      h1: "Mitsuhiro Arita Karten",
      lede: "Mitsuhiro Arita zeichnet englische Karten seit dem ersten Set. Die Liste ist lang, deshalb springe ich nach Serie, und der Binder bleibt einer.",
    },
    "trainers-pokemon": {
      title: "Trainer-Pokémon Kartenliste",
      h1: "Trainer-Pokémon",
      lede: "Das sind Pokémon, die auf der englischen Karte den Namen einer anderen Person tragen.",
    },
    "team-rocket": {
      title: "Team Rocket Kartenliste",
      h1: "Team Rocket Karten",
      lede: "Steht Team Rocket auf der Karte, oder ist es ein Dark-Pokémon aus dieser Zeit, gehört die Karte in diese Liste.",
    },
    "delta-species": {
      title: "Delta-Spezies Kartenliste",
      h1: "Delta-Spezies",
      lede: "Delta-Spezies tragen ein δ im Namen. Der Abschnitt ist kurz, und ich mag ihn als einen Binder.",
    },
    "baby-pokemon": {
      title: "Baby-Pokémon Kartenliste",
      h1: "Baby-Pokémon",
      lede: "Baby-Pokémon sind die kleinen Vorentwicklungen, von Pichu bis zu den späteren. Mampfaxo steht hier und auch im Relaxo-Binder.",
    },
  },
  fr: {
    pikachu: {
      title: "Toutes les cartes Pikachu : liste maître et checklist",
      h1: "Toutes les cartes Pikachu",
      lede: "Pikachu est le visage qui revient dans chaque pile que je trie. Cette liste est chaque tirage anglais du jeu de données ouvert.",
    },
    eeveelutions: {
      title: "Toutes les cartes Évoli et évolutions : liste maître",
      h1: "Évoli et les évolutions",
      lede: "Évoli et les évolutions partagent ce classeur. La liste courte d'Évoli reste à côté, pour l'après-midi où je ne veux que ce visage.",
    },
    eevee: {
      title: "Toutes les cartes Évoli : liste",
      h1: "Toutes les cartes Évoli",
      lede: "C'est le classeur court : Évoli seul, sans les évolutions.",
    },
    "gastly-line": {
      title: "Toutes les cartes Ectoplasma : ligne Fantominus",
      h1: "Ectoplasma et la ligne Fantominus",
      lede: "Ectoplasma est la carte que je cherche, et Fantominus et Spectrum appartiennent au même classeur.",
    },
    snorlax: {
      title: "Toutes les cartes Ronflex et Goinfrex",
      h1: "Ronflex et Goinfrex",
      lede: "Ronflex et Goinfrex partagent cette liste.",
    },
    charizard: {
      title: "Toutes les cartes Dracaufeu : liste maître",
      h1: "Toutes les cartes Dracaufeu",
      lede: "Dracaufeu est le classeur lourd en cartes rares. Je le dis clairement : une commune y est l'exception.",
    },
    "yuka-morii": {
      title: "Cartes en argile de Yuka Morii",
      h1: "Cartes en argile de Yuka Morii",
      lede: "Les Pokémon en argile de Yuka Morii se repèrent de l'autre bout d'une table de boutique. Presque tout est du vrac, et le vrac est de l'or.",
    },
    "mitsuhiro-arita": {
      title: "Cartes de Mitsuhiro Arita par série",
      h1: "Cartes de Mitsuhiro Arita",
      lede: "Mitsuhiro Arita dessine des cartes depuis le premier set anglais. La liste est longue, alors je saute de série en série dans un seul classeur.",
    },
    "trainers-pokemon": {
      title: "Pokémon d'un dresseur : liste",
      h1: "Pokémon d'un dresseur",
      lede: "Ce sont les Pokémon qui portent le nom de quelqu'un d'autre sur la carte anglaise.",
    },
    "team-rocket": {
      title: "Liste des cartes Team Rocket",
      h1: "Cartes Team Rocket",
      lede: "Le nom Team Rocket sur la carte, ou un Pokémon Dark de cette époque, entre dans cette liste.",
    },
    "delta-species": {
      title: "Liste des cartes Delta Species",
      h1: "Cartes Delta Species",
      lede: "Les cartes Delta Species portent un δ dans le nom. La période est courte, et je la range dans un seul classeur.",
    },
    "baby-pokemon": {
      title: "Liste des bébés Pokémon",
      h1: "Bébés Pokémon",
      lede: "Les bébés Pokémon sont les petites pré-évolutions, de Pichu aux plus récents. Goinfrex est ici et aussi dans le classeur Ronflex.",
    },
  },
  es: {
    pikachu: {
      title: "Todas las cartas de Pikachu: lista maestra y checklist",
      h1: "Todas las cartas de Pikachu",
      lede: "Pikachu es la cara que aparece en cada montón que ordeno. Esta lista es cada impresión inglesa del conjunto de datos abierto.",
    },
    eeveelutions: {
      title: "Todas las cartas de Eevee y evoluciones",
      h1: "Eevee y las evoluciones",
      lede: "Eevee y las evoluciones comparten esta carpeta. La lista corta de Eevee queda al lado.",
    },
    eevee: {
      title: "Todas las cartas de Eevee: lista",
      h1: "Todas las cartas de Eevee",
      lede: "Esta es la carpeta corta: solo Eevee, sin las evoluciones.",
    },
    "gastly-line": {
      title: "Todas las cartas de Gengar: línea Gastly",
      h1: "Gengar y la línea Gastly",
      lede: "Gengar es la carta a la que voy, y Gastly y Haunter pertenecen a la misma carpeta.",
    },
    snorlax: {
      title: "Todas las cartas de Snorlax y Munchlax",
      h1: "Snorlax y Munchlax",
      lede: "Snorlax y Munchlax comparten esta lista.",
    },
    charizard: {
      title: "Todas las cartas de Charizard: lista maestra",
      h1: "Todas las cartas de Charizard",
      lede: "Charizard es la carpeta cargada de cartas raras. Una común es la excepción aquí.",
    },
    "yuka-morii": {
      title: "Cartas de arcilla de Yuka Morii",
      h1: "Cartas de arcilla de Yuka Morii",
      lede: "Los Pokémon de arcilla de Yuka Morii se ven al otro lado de una mesa de tienda. Casi todo es bulk, y el bulk es oro.",
    },
    "mitsuhiro-arita": {
      title: "Cartas de Mitsuhiro Arita por serie",
      h1: "Cartas de Mitsuhiro Arita",
      lede: "Mitsuhiro Arita dibuja cartas desde la primera expansión inglesa. La lista es larga, así que salto de serie en serie dentro de una sola carpeta.",
    },
    "trainers-pokemon": {
      title: "Lista de Pokémon de entrenador",
      h1: "Pokémon de entrenador",
      lede: "Son Pokémon que llevan el nombre de otra persona en la carta inglesa.",
    },
    "team-rocket": {
      title: "Lista de cartas del Team Rocket",
      h1: "Cartas del Team Rocket",
      lede: "Si Team Rocket está en la carta, o si es un Pokémon Dark de esa época, entra en esta lista.",
    },
    "delta-species": {
      title: "Lista de cartas Delta Species",
      h1: "Cartas Delta Species",
      lede: "Las cartas Delta Species llevan una δ en el nombre. El tramo es corto, y lo guardo en una carpeta.",
    },
    "baby-pokemon": {
      title: "Lista de Pokémon bebé",
      h1: "Pokémon bebé",
      lede: "Los Pokémon bebé son las preevoluciones pequeñas, de Pichu a las posteriores. Munchlax está aquí y también en la carpeta de Snorlax.",
    },
  },
  it: {
    pikachu: {
      title: "Tutte le carte Pikachu: lista e checklist",
      h1: "Tutte le carte Pikachu",
      lede: "Pikachu è la faccia che torna in ogni mucchio che smisto. Questa lista è ogni stampa inglese del dataset aperto.",
    },
    eeveelutions: {
      title: "Tutte le carte Eevee e evoluzioni",
      h1: "Eevee e le evoluzioni",
      lede: "Eevee e le evoluzioni condividono questo raccoglitore. La lista corta di Eevee resta accanto.",
    },
    eevee: {
      title: "Tutte le carte Eevee: lista",
      h1: "Tutte le carte Eevee",
      lede: "Questo è il raccoglitore corto: solo Eevee, senza le evoluzioni.",
    },
    "gastly-line": {
      title: "Tutte le carte Gengar: linea Gastly",
      h1: "Gengar e la linea Gastly",
      lede: "Gengar è la carta a cui vado, e Gastly e Haunter stanno nello stesso raccoglitore.",
    },
    snorlax: {
      title: "Tutte le carte Snorlax e Munchlax",
      h1: "Snorlax e Munchlax",
      lede: "Snorlax e Munchlax condividono questa lista.",
    },
    charizard: {
      title: "Tutte le carte Charizard: lista",
      h1: "Tutte le carte Charizard",
      lede: "Charizard è il raccoglitore pieno di carte rare. Una comune è l'eccezione.",
    },
    "yuka-morii": {
      title: "Carte di creta di Yuka Morii",
      h1: "Carte di creta di Yuka Morii",
      lede: "I Pokémon di creta di Yuka Morii si vedono dall'altra parte di un tavolo in negozio. Quasi tutto è bulk, e il bulk è oro.",
    },
    "mitsuhiro-arita": {
      title: "Carte di Mitsuhiro Arita per serie",
      h1: "Carte di Mitsuhiro Arita",
      lede: "Mitsuhiro Arita disegna carte dal primo set inglese. La lista è lunga, quindi salto di serie in serie in un solo raccoglitore.",
    },
    "trainers-pokemon": {
      title: "Lista dei Pokémon di allenatore",
      h1: "Pokémon di allenatore",
      lede: "Sono Pokémon che portano il nome di un'altra persona sulla carta inglese.",
    },
    "team-rocket": {
      title: "Lista carte Team Rocket",
      h1: "Carte Team Rocket",
      lede: "Se sulla carta c'è Team Rocket, o se è un Pokémon Dark di quell'epoca, entra in questa lista.",
    },
    "delta-species": {
      title: "Lista carte Delta Species",
      h1: "Carte Delta Species",
      lede: "Le carte Delta Species portano una δ nel nome. Il tratto è breve, e lo tengo in un solo raccoglitore.",
    },
    "baby-pokemon": {
      title: "Lista dei Pokémon baby",
      h1: "Pokémon baby",
      lede: "I Pokémon baby sono le piccole pre-evoluzioni, da Pichu a quelle successive. Munchlax è qui e anche nel raccoglitore di Snorlax.",
    },
  },
  nl: {
    pikachu: {
      title: "Alle Pikachu-kaarten: master set lijst en checklist",
      h1: "Alle Pikachu-kaarten",
      lede: "Pikachu is het gezicht dat in elke stapel opduikt die ik sorteer. Deze lijst is elke Engelse druk in de open dataset.",
    },
    eeveelutions: {
      title: "Alle Eevee-kaarten en evoluties: checklist",
      h1: "Eevee en de evoluties",
      lede: "Eevee en de evoluties delen deze binder. De korte Eevee-lijst ligt ernaast.",
    },
    eevee: {
      title: "Alle Eevee-kaarten: lijst en checklist",
      h1: "Alle Eevee-kaarten",
      lede: "Dit is de korte binder: alleen Eevee, zonder de evoluties.",
    },
    "gastly-line": {
      title: "Alle Gengar-kaarten: Gastly-lijn",
      h1: "Gengar en de Gastly-lijn",
      lede: "Gengar is de kaart waar ik naartoe blader, en Gastly en Haunter horen in dezelfde binder.",
    },
    snorlax: {
      title: "Alle Snorlax-kaarten en Munchlax",
      h1: "Snorlax en Munchlax",
      lede: "Snorlax en Munchlax delen deze lijst.",
    },
    charizard: {
      title: "Alle Charizard-kaarten: master set lijst",
      h1: "Alle Charizard-kaarten",
      lede: "Charizard is de binder met veel zeldzame kaarten. Een gewone kaart is hier de uitzondering.",
    },
    "yuka-morii": {
      title: "Yuka Morii kleikaarten",
      h1: "Yuka Morii kleikaarten",
      lede: "De klei-Pokémon van Yuka Morii herken ik aan de andere kant van een winkeltafel. Bijna alles is bulk, en bulk is goud.",
    },
    "mitsuhiro-arita": {
      title: "Mitsuhiro Arita-kaarten per serie",
      h1: "Mitsuhiro Arita-kaarten",
      lede: "Mitsuhiro Arita tekent kaarten sinds de eerste Engelse set. De lijst is lang, dus ik spring per serie in één binder.",
    },
    "trainers-pokemon": {
      title: "Trainer's Pokémon kaartenlijst",
      h1: "Trainer's Pokémon",
      lede: "Dit zijn Pokémon die de naam van iemand anders op de Engelse kaart dragen.",
    },
    "team-rocket": {
      title: "Team Rocket kaartenlijst",
      h1: "Team Rocket kaarten",
      lede: "Staat Team Rocket op de kaart, of is het een Dark-Pokémon uit die tijd, dan hoort de kaart in deze lijst.",
    },
    "delta-species": {
      title: "Delta Species kaartenlijst",
      h1: "Delta Species kaarten",
      lede: "Delta Species-kaarten dragen een δ in de naam. De periode is kort, en ik houd ze in één binder.",
    },
    "baby-pokemon": {
      title: "Baby-Pokémon kaartenlijst",
      h1: "Baby-Pokémon",
      lede: "Baby-Pokémon zijn de kleine voorvormen, van Pichu tot de latere. Munchlax staat hier en ook in de Snorlax-binder.",
    },
  },
  sv: {
    pikachu: {
      title: "Alla Pikachu-kort: master set-lista och checklista",
      h1: "Alla Pikachu-kort",
      lede: "Pikachu är ansiktet som dyker upp i varje hög jag sorterar. Den här listan är varje engelskt tryck i det öppna datat.",
    },
    eeveelutions: {
      title: "Alla Eevee-kort och utvecklingar",
      h1: "Eevee och utvecklingarna",
      lede: "Eevee och utvecklingarna delar den här pärmen. Den korta Eevee-listan ligger bredvid.",
    },
    eevee: {
      title: "Alla Eevee-kort: lista och checklista",
      h1: "Alla Eevee-kort",
      lede: "Det här är den korta pärmen: bara Eevee, utan utvecklingarna.",
    },
    "gastly-line": {
      title: "Alla Gengar-kort: Gastly-linjen",
      h1: "Gengar och Gastly-linjen",
      lede: "Gengar är kortet jag bläddrar till, och Gastly och Haunter hör hemma i samma pärm.",
    },
    snorlax: {
      title: "Alla Snorlax-kort och Munchlax",
      h1: "Snorlax och Munchlax",
      lede: "Snorlax och Munchlax delar den här listan.",
    },
    charizard: {
      title: "Alla Charizard-kort: master set-lista",
      h1: "Alla Charizard-kort",
      lede: "Charizard är pärmen med många sällsynta kort. Ett vanligt kort är undantaget här.",
    },
    "yuka-morii": {
      title: "Yuka Moriis lerkort",
      h1: "Yuka Moriis lerkort",
      lede: "Yuka Moriis ler-Pokémon syns tvärs över ett butiksbord. Nästan allt är bulk, och bulk är guld.",
    },
    "mitsuhiro-arita": {
      title: "Mitsuhiro Arita-kort per serie",
      h1: "Mitsuhiro Arita-kort",
      lede: "Mitsuhiro Arita har ritat kort sedan det första engelska setet. Listan är lång, så jag hoppar per serie i en och samma pärm.",
    },
    "trainers-pokemon": {
      title: "Trainer's Pokémon-kortlista",
      h1: "Trainer's Pokémon",
      lede: "Det här är Pokémon som bär någon annans namn på det engelska kortet.",
    },
    "team-rocket": {
      title: "Team Rocket-kortlista",
      h1: "Team Rocket-kort",
      lede: "Står Team Rocket på kortet, eller är det ett Dark-Pokémon från den tiden, hamnar kortet här.",
    },
    "delta-species": {
      title: "Delta Species-kortlista",
      h1: "Delta Species-kort",
      lede: "Delta Species-kort bär ett δ i namnet. Perioden är kort, och jag samlar den i en pärm.",
    },
    "baby-pokemon": {
      title: "Bebis-Pokémon: kortlista",
      h1: "Bebis-Pokémon",
      lede: "Bebis-Pokémon är de små förstadierna, från Pichu till de senare. Munchlax finns här och också i Snorlax-pärmen.",
    },
  },
  no: {
    pikachu: {
      title: "Alle Pikachu-kort: master set-liste og sjekkliste",
      h1: "Alle Pikachu-kort",
      lede: "Pikachu er ansiktet som dukker opp i hver haug jeg sorterer. Denne listen er hvert engelske trykk i det åpne datasettet.",
    },
    eeveelutions: {
      title: "Alle Eevee-kort og utviklinger",
      h1: "Eevee og utviklingene",
      lede: "Eevee og utviklingene deler denne permen. Den korte Eevee-listen ligger ved siden av.",
    },
    eevee: {
      title: "Alle Eevee-kort: liste og sjekkliste",
      h1: "Alle Eevee-kort",
      lede: "Dette er den korte permen: bare Eevee, uten utviklingene.",
    },
    "gastly-line": {
      title: "Alle Gengar-kort: Gastly-linjen",
      h1: "Gengar og Gastly-linjen",
      lede: "Gengar er kortet jeg blar til, og Gastly og Haunter hører hjemme i samme perm.",
    },
    snorlax: {
      title: "Alle Snorlax-kort og Munchlax",
      h1: "Snorlax og Munchlax",
      lede: "Snorlax og Munchlax deler denne listen.",
    },
    charizard: {
      title: "Alle Charizard-kort: master set-liste",
      h1: "Alle Charizard-kort",
      lede: "Charizard er permen med mange sjeldne kort. Et vanlig kort er unntaket her.",
    },
    "yuka-morii": {
      title: "Yuka Moriis leirekort",
      h1: "Yuka Moriis leirekort",
      lede: "Yuka Moriis leire-Pokémon synes tvers over et butikkbord. Nesten alt er bulk, og bulk er gull.",
    },
    "mitsuhiro-arita": {
      title: "Mitsuhiro Arita-kort per serie",
      h1: "Mitsuhiro Arita-kort",
      lede: "Mitsuhiro Arita har tegnet kort siden det første engelske settet. Listen er lang, så jeg hopper per serie i én perm.",
    },
    "trainers-pokemon": {
      title: "Trainer's Pokémon-kortliste",
      h1: "Trainer's Pokémon",
      lede: "Dette er Pokémon som bærer noen andres navn på det engelske kortet.",
    },
    "team-rocket": {
      title: "Team Rocket-kortliste",
      h1: "Team Rocket-kort",
      lede: "Står Team Rocket på kortet, eller er det et Dark-Pokémon fra den tiden, hører kortet hjemme her.",
    },
    "delta-species": {
      title: "Delta Species-kortliste",
      h1: "Delta Species-kort",
      lede: "Delta Species-kort har en δ i navnet. Perioden er kort, og jeg samler den i én perm.",
    },
    "baby-pokemon": {
      title: "Baby-Pokémon: kortliste",
      h1: "Baby-Pokémon",
      lede: "Baby-Pokémon er de små forstadiene, fra Pichu til de senere. Munchlax er her og også i Snorlax-permen.",
    },
  },
  fi: {
    pikachu: {
      title: "Kaikki Pikachu-kortit: master set -lista",
      h1: "Kaikki Pikachu-kortit",
      lede: "Pikachu on kasvo, joka ilmestyy jokaiseen pinoon jota lajittelen. Tämä lista on jokainen englanninkielinen painos avoimessa aineistossa.",
    },
    eeveelutions: {
      title: "Kaikki Eevee-kortit ja evoluutiota",
      h1: "Eevee ja evoluutiot",
      lede: "Eevee ja evoluutiot jakavat tämän kansion. Lyhyt Eevee-lista on sen vieressä.",
    },
    eevee: {
      title: "Kaikki Eevee-kortit: lista",
      h1: "Kaikki Eevee-kortit",
      lede: "Tämä on lyhyt kansio: vain Eevee, ilman evoluutioita.",
    },
    "gastly-line": {
      title: "Kaikki Gengar-kortit: Gastly-linja",
      h1: "Gengar ja Gastly-linja",
      lede: "Gengar on kortti, jonka luo selailen, ja Gastly sekä Haunter kuuluvat samaan kansioon.",
    },
    snorlax: {
      title: "Kaikki Snorlax-kortit ja Munchlax",
      h1: "Snorlax ja Munchlax",
      lede: "Snorlax ja Munchlax jakavat tämän listan.",
    },
    charizard: {
      title: "Kaikki Charizard-kortit: master set -lista",
      h1: "Kaikki Charizard-kortit",
      lede: "Charizard on kansio, jossa harvinaiset kortit ovat enemmistönä. Tavallinen kortti on täällä poikkeus.",
    },
    "yuka-morii": {
      title: "Yuka Moriin savikortit",
      h1: "Yuka Moriin savikortit",
      lede: "Yuka Moriin savi-Pokémonit erottaa pöydän toiselta puolelta. Lähes kaikki on bulkia, ja bulk on kultaa.",
    },
    "mitsuhiro-arita": {
      title: "Mitsuhiro Aritan kortit sarjoittain",
      h1: "Mitsuhiro Aritan kortit",
      lede: "Mitsuhiro Arita on piirtänyt kortteja ensimmäisestä englanninkielisestä setistä asti. Lista on pitkä, joten hyppään sarjoittain yhdessä kansiossa.",
    },
    "trainers-pokemon": {
      title: "Trainer's Pokémon -korttilista",
      h1: "Trainer's Pokémon",
      lede: "Nämä ovat Pokémon-kortteja, joiden englanninkielisessä nimessä on jonkun toisen nimi.",
    },
    "team-rocket": {
      title: "Team Rocket -korttilista",
      h1: "Team Rocket -kortit",
      lede: "Jos kortissa lukee Team Rocket, tai jos se on sen ajan Dark-Pokémon, kortti kuuluu tähän listaan.",
    },
    "delta-species": {
      title: "Delta Species -korttilista",
      h1: "Delta Species -kortit",
      lede: "Delta Species -korteissa on δ nimessä. Jakso on lyhyt, ja pidän sen yhdessä kansiossa.",
    },
    "baby-pokemon": {
      title: "Vauva-Pokémonien korttilista",
      h1: "Vauva-Pokémonit",
      lede: "Vauva-Pokémonit ovat pieniä esikehityksiä, Pichusta myöhempiin. Munchlax on täällä ja myös Snorlax-kansiossa.",
    },
  },
  pl: {
    pikachu: {
      title: "Wszystkie karty Pikachu: lista master set",
      h1: "Wszystkie karty Pikachu",
      lede: "Pikachu to twarz, która wraca w każdym stosie, który sortuję. Ta lista to każdy angielski druk w otwartym zbiorze.",
    },
    eeveelutions: {
      title: "Wszystkie karty Eevee i ewolucje",
      h1: "Eevee i ewolucje",
      lede: "Eevee i ewolucje dzielą ten segregator. Krótka lista Eevee leży obok.",
    },
    eevee: {
      title: "Wszystkie karty Eevee: lista",
      h1: "Wszystkie karty Eevee",
      lede: "To krótki segregator: samo Eevee, bez ewolucji.",
    },
    "gastly-line": {
      title: "Wszystkie karty Gengara: linia Gastly",
      h1: "Gengar i linia Gastly",
      lede: "Gengar to karta, którą odszukuję, a Gastly i Haunter należą do tego samego segregatora.",
    },
    snorlax: {
      title: "Wszystkie karty Snorlaxa i Munchlax",
      h1: "Snorlax i Munchlax",
      lede: "Snorlax i Munchlax dzielą tę listę.",
    },
    charizard: {
      title: "Wszystkie karty Charizarda: lista",
      h1: "Wszystkie karty Charizarda",
      lede: "Charizard to segregator pełen rzadkich kart. Zwykła karta jest tu wyjątkiem.",
    },
    "yuka-morii": {
      title: "Gliniane karty Yuki Morii",
      h1: "Gliniane karty Yuki Morii",
      lede: "Gliniane Pokémony Yuki Morii widać z drugiego końca stołu w sklepie. Prawie wszystko to bulk, a bulk jest złotem.",
    },
    "mitsuhiro-arita": {
      title: "Karty Mitsuhiro Arity według serii",
      h1: "Karty Mitsuhiro Arity",
      lede: "Mitsuhiro Arita rysuje karty od pierwszego angielskiego setu. Lista jest długa, więc skaczę po seriach w jednym segregatorze.",
    },
    "trainers-pokemon": {
      title: "Lista Pokémonów trenera",
      h1: "Pokémony trenera",
      lede: "To Pokémony, które noszą na angielskiej karcie imię innej osoby.",
    },
    "team-rocket": {
      title: "Lista kart Team Rocket",
      h1: "Karty Team Rocket",
      lede: "Jeśli na karcie jest Team Rocket albo jest to Dark Pokémon z tamtego czasu, karta trafia na tę listę.",
    },
    "delta-species": {
      title: "Lista kart Delta Species",
      h1: "Karty Delta Species",
      lede: "Karty Delta Species mają δ w nazwie. Odcinek jest krótki i trzymam go w jednym segregatorze.",
    },
    "baby-pokemon": {
      title: "Lista baby Pokémon",
      h1: "Baby Pokémon",
      lede: "Baby Pokémon to małe pre-ewolucje, od Pichu po późniejsze. Munchlax jest tutaj i też w segregatorze Snorlaxa.",
    },
  },
};

/** Stats sentence, preceded by the lede's first sentence when that sentence is not the title. */
export function themeDescriptionTemplate(title: string, lede: string, stats: string): string {
  const sentence = firstSentence(lede);
  const lead = sentence && !sentence.includes(title) ? sentence : "";
  return lead ? `${lead} ${stats}` : stats;
}

export function themeCopy(locale: Locale, slug: string): ThemeCopy | null {
  const bits = COPY[locale]?.[slug] ?? THEME_COPY_BATCH[locale]?.[slug] ?? THEME_COPY_ROUND2[locale]?.[slug];
  if (!bits) return null;
  return {
    title: bits.title,
    h1: bits.h1,
    lede: bits.lede,
    description: themeDescriptionTemplate(bits.title, bits.lede, STATS[locale]),
  };
}

export function themeCopyLocales(): Locale[] {
  return Object.keys(COPY) as Locale[];
}
