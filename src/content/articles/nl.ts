import type { ArticleCopy } from "@/lib/articles";
import { spotFakesNl } from "./spot-fakes/nl";

export function dutchArticles(): ArticleCopy[] {
  return [
    {
      slug: "collecting-binders",
      title: "Pokémonkaarten verzamelen in een binder",
      description: "Hoe ik Pokémonkaarten in een setbinder en een Pokédex-binder verzamel, en waar de checklists staan.",
      h1: "Pokémonkaarten in een binder: setbinder en Pokédex",
      lede: "Een stapel op de plank is bij mij geen verzameling. De kaarten zitten in een binder, en die binder heeft één taak. De ene volgt een set. De andere volgt de Pokédex. Deze bladzijde is de plattegrond. De kortere notities beantwoorden elk één vraag, in de volgorde waarin ik aan tafel werk: eerst de taak kiezen, dan de bulk sorteren, en het kaartnummer opzoeken zodra een kaart in geen enkele stapel past. Eén vraag mag meteen naar de bijbehorende notitie. Het hele verband staat hier.",
      diagram: {
        kind: "binders",
        title: "Twee binders, twee rasters",
        description: "Een setbinder volgt de kaartnummers. Een generatiebinder houdt één kaart per soort, in Pokédex-volgorde.",
        caption: "Links één set, op nummer. Rechts één soort per vak, in Pokédex-volgorde.",
      },
      sections: [
        {
          id: "two-binders",
          heading: "Twee binders, twee taken",
          paragraphs: [
            "Een setbinder en een generatiebinder stellen een andere vraag. De setbinder vraagt of elke kaart van die set erin zit, op volgorde van kaartnummer, ook de gewone kaart die niemand als eerste pakt. De generatiebinder vraagt of er van elke soort in dat Pokédex-stuk één kaart ligt. Elke druk telt daar, en elke taal telt. Toen ik beide taken in één band stopte, raakte ik een ontbrekende common kwijt tussen twee kaarten die harder opvielen. De checklist bleef dicht tot ik weken later weer bladerde.",
            "De lange versie van het sorteren aan tafel staat in [[hoe ik een binder orden|/guides/organize-binder]]. De korte versie had ik eerder op een briefje moeten zetten: kies de taak voordat de pagina's in huis komen. Een pagina met negen vakken is een raster. Het verhaal op de kaart laat dat raster koud. Mij niet, dus leg ik de volgorde vast zolang de binder nog leeg is. Een volle pagina later omzetten is een middag die ik één keer heb uitgegeven. Een tweede keer plan ik niet.",
          ],
        },
        {
          id: "set-binder",
          heading: "Een setbinder volgt de kaartenlijst",
          paragraphs: [
            "[[Base|/collections/set/base1]] is het voorbeeld dat ik nog steeds opensla. De openbare lijst heeft 102 kaarten, verschenen op 9 januari 1999, met de aanduiding base1. De pagina in de binder volgt die lijst: nummer 1, dan 2, dan 3, trainers en energie meegerekend. Staat een kaart op de lijst, dan heeft de binder een vak. Een gat omdat de kaart gewoon is, laat ik niet zitten. Een holo haal ik niet naar voren om de eerste pagina mooier te maken. De mooie pagina is precies de plek waar een ontbrekend nummer zich verstopt.",
            "De volledige volgorde van series en sets staat in [[Pokémonsets op volgorde|/guides/sets-in-order]]. Die tijdlijn gebruik ik als een bulkdoos meer dan één tijdperk mengt. Een kaart uit Jungle hoort niet in de Base-binder, ook al voelt de tekening als hetzelfde jaar. De setpagina is tegelijk kaartenlijst en checklist. Een regel vink ik pas af als de kaart in het vak zit. Een stapel op tafel is een voornemen, geen vermelding.",
            "Een derde binder volgt een thema, niet een set en niet een vak voor één soort. [[Thematische binders|/collections/themes]] verzamelen elke Engelse druk van een soort, een tekenaar of een soort kaart. [[Alle Pikachu-kaarten|/collections/themes/pikachu]] is de lijst die ik opensla als de stapel vol van dat gezicht zit.",
          ],
        },
        {
          id: "dex-binder",
          heading: "Een generatiebinder volgt de Pokédex",
          paragraphs: [
            "Een generatiebinder houdt één kaart per soort. [[Generatie 1|/collections/generation/1]] is de oorspronkelijke 151. Generatie 1 tot en met 9 zijn {species} soorten. [[Hoe ik een Pokédex-binder afmaak|/guides/pokedex-binder]] is de lange notitie over die klus, zonder er een jacht op zeldzame drukken van te maken. [[De checklist van de eerste 151|/guides/gen-1-checklist]] blijft bij die 151, want dat is de binder die mensen meestal bedoelen als ze over de oorspronkelijke wezens praten. 151 past in het hoofd. De latere tellingen laat ik op de pagina staan.",
            "[[Pikachu|/pokedex/25]] laat zien waarom de regel werkt. De soortpagina noemt elke druk uit de openbare gegevens, verspreid over veel sets. De generatiebinder heeft er één van nodig. Een Pikachu uit de bulk vult het vak. Een latere zeldzame illustratie vult hetzelfde vak. Elke druk bewaren doe ik in die binder niet. Dat is het werk van de setbinder, en alleen voor de set die ik op dat moment bouw. Twee Pikachu's met een ander nummer zijn twee regels op twee lijsten, niet een dubbel vak in de generatie.",
          ],
        },
        {
          id: "bulk",
          heading: "Bulk vult de vakken",
          paragraphs: [
            "De kaarten die een regel sluiten, komen meestal uit de bulk. Dat zeg ik met genegenheid. Bulk is de gewone stapel: gewone kaarten, iets zeldzamere kaarten, dubbelen en de Magikarp die steeds weer opduikt. Die stapel maakt de binder af. [[Wat ik met bulk doe|/guides/bulk-cards]] is de sorteerwijze. [[Kaartnummer en symbool lezen|/guides/read-a-card]] is de greep waarmee ik nummer en symbool vind als de stapel gemengd is. Vaak begint het in een blik uit de supermarkt. Ik kiep dat blik leeg als materiaal voor open regels, niet als een voorraad zeldzaamheden.",
            "Eerst sorteer ik op set, daarna pas op wezen. Een kaart die een open regel in een setbinder vult, gaat daarheen. Een extra kaart die een lege soortregel vult, mag naar de generatiebinder. De rest blijft in de bulkdoos tot een checklist ernaar vraagt, of tot een afgewerkte binder het huis mag verlaten. Bewonderen komt na het opbergen. Eerder is bewonderen de manier waarop een half gesorteerde doos een maand blijft staan. Glanzende kaarten mogen in hun hoes wachten. De open regel wacht niet op hen.",
          ],
        },
        {
          id: "tracker",
          heading: "De openbare lijst is de checklist",
          paragraphs: [
            "De [[startpagina|/]] is de openbare telling: hoeveel verschillende kaarten zijn vastgelegd, en welke binders zijn verschoven. [[De verzamelingen|/collections]] zijn de werklijst. Sets staan er per serie, elke generatiebinder heeft een pagina, en elke soort heeft een eigen pagina. Een gevulde balk betekent dat ik de kaart heb vastgelegd. Hij zegt niets over een verkoopprijs. Openbare pagina's tonen er geen. Naast de checklist, op een briefje of op de doos schrijf ik er ook geen.",
            "Als een regel op het scherm en de kaart in de binder elkaar tegenspreken, heeft de binder gelijk. Af noem ik een binder pas nadat ik de pagina's heb omgeslagen. Het scherm is er zodat ik het gat zie voordat ik het vergeet. Meer hoeft de lijst niet te doen. Hij hoort bij de plank te passen. Een kaart die ik me alleen herinner, telt niet. Een kaart die ik heb vastgelegd en daarna in een schoenendoos heb gelaten, zit ook niet in de binder.",
          ],
        },
        {
          id: "care-and-kids",
          heading: "Hoezen, een kind en een binder die vertrekt",
          paragraphs: [
            "Een kaart die in de binder gaat wonen, krijgt eerst een hoes. [[Kaarten beschermen|/guides/protect-cards]] gaat over hoezen, pagina's met negen vakken, pagina's met vier vakken en de plekken waar ik een binder niet zet. Ik ben met een blik uit de supermarkt begonnen en heb de vochtige plank op de harde manier leren kennen. Vocht zie ik de eerste avond niet. Ik zie het als de pagina een zomer later vlekken heeft. De hoes sla ik niet over, ook niet bij een gewone kaart die in elke bulkdoos ligt.",
            "[[Verzamelen met een kind|/guides/collecting-with-a-child]] is de notitie die ik opensla als er een kind aan tafel zit. Eén binder, één taak, en toestemming om te stoppen. [[Een afgewerkte binder weggeven|/guides/donating-cards]] beschrijft wat er gebeurt als een binder compleet is en ik hem doorgeef. Ik geef een afgewerkte binder weg, geen handvol losse restkaarten. De openbare lijst noteert de ontvanger en de datum. Losse rest blijft hier en sluit de volgende regel. Zo is het cadeau compleet en blijft de checklist eerlijk.",
            "Mocht ik één aanwijzing op een briefje zetten, dan is het deze. Kies de taak van de binder. Sla de bijpassende checklist open. Doe de kaart die een gat sluit in een hoes. Vink de regel pas af als de kaart in het vak zit. Stop als de tafel onrustig wordt, en begin de volgende keer bij hetzelfde gat. De rest van deze notities is die aanwijzing, uitgeschreven voor de vraag die echt komt: paginaformaat, bulk, de 151, de hele Pokédex, het nummer op de kaart, de opslag, een kind aan tafel, of een binder die het huis verlaat.",
          ],
        },
      ],
      faqs: [
        {
          q: "Heb ik zowel een setbinder als een generatiebinder nodig?",
          a: "Nee. Ik gebruik beide omdat ze een andere vraag stellen. Eén setbinder is een compleet begin. Een generatiebinder is het andere complete begin. Het misgaat als één binder beide taken tegelijk moet doen. Dan verdwijnt de ontbrekende gewone kaart achter een pagina die alleen mooi wilde zijn.",
        },
        {
          q: "Waar staan de checklists?",
          a: "Elke set heeft een kaartenlijst, elke generatie een checklist, en elke Pokémon een pagina met zijn drukken. De verzamelingen koppelen alle drie. Ik vink een regel pas af als de kaart in de hoes in het vak zit, en ik blader de binder door voordat ik hem af noem.",
        },
      ],
    },
    {
      slug: "organize-binder",
      title: "Een setbinder ordenen op kaartnummer",
      description: "Pagina's met negen of vier vakken, setvolgorde en Pokédex-volgorde, zoals ik een binder echt sorteer.",
      h1: "Hoe ik een setbinder orden",
      lede: "Ik orden de binder voordat ik de kaarten orden. Het paginaformaat en de volgorde zijn het hele systeem. Al het andere is een kaart die het vak zoekt dat ik al heb gemaakt. Zolang die keuze open ligt, wordt elke avond een nieuw begin en blijft de doos even gemengd als daarvoor.",
      diagram: {
        kind: "pockets",
        title: "Negen vakken en vier vakken",
        description: "Een pagina met negen vakken houdt negen kaarten in drie bij drie. Een pagina met vier vakken houdt vier grotere kaarten.",
        caption: "Negen vakken houden een set compact. Vier vakken maken elke kaart groter, en de binder wordt sneller dik.",
      },
      sections: [
        {
          id: "nine-or-four",
          heading: "Negen vakken of vier vakken",
          paragraphs: [
            "Een pagina met negen vakken is drie kolommen van drie. Een kaart in een hoes past erin. Een set van ongeveer honderd kaarten wordt zo een dozijn pagina's, een binder die ik met één hand open kan houden. Dat formaat gebruik ik voor setbinders. [[Paldean Fates|/collections/set/sv4pt5]] telt in de openbare lijst 245 kaarten, aanduiding sv4pt5. De binder met negen vakken is dan al een dikke band. Dezelfde lijst op pagina's met vier vakken zou een binder worden die ik niet wil dragen. Het formaat kies ik voordat de eerste kaart erin gaat.",
            "Een pagina met vier vakken is twee kolommen van twee, en elke kaart zit groter. Die gebruik ik als het om kijken gaat, niet om een lange lijst af te vinken. Een generatiebinder kan allebei. Negen vakken krijgen {species} soorten in minder binders af. Vier vakken maken de lievelingspagina van een kind makkelijker te vinden en de plank zwaarder. Een afgezette set van het ene formaat naar het andere verhuizen is een middag die ik al eens heb besteed. Nog eens plan ik dat niet. [[De lange gids|/guides/collecting-binders]] is de reden dat de twee bindertaken gescheiden blijven. In één band meng ik de formaten niet.",
          ],
        },
        {
          id: "set-order",
          heading: "Volgorde op kaartnummer",
          paragraphs: [
            "Setvolgorde is het kaartnummer op de kaart, gelegd langs de kaartenlijst. Nummer 1 is het eerste vak, ook als het niet het wezen is dat ik het liefst zie. Trainers en energie blijven waar de set ze heeft gezet. Vooraan bouw ik geen mooie pagina met holo's. Die pagina verbergt de ontbrekende gewone kaart, en juist die houdt de binder open. Een gat is een ontbrekend nummer, geen versiering.",
            "[[De sets op volgorde|/guides/sets-in-order]] zeggen me bij welke lijst een kaart hoort. Het symbool helpt om dat te bevestigen. Sorteren doe ik op het nummer. Delen twee kaarten een naam terwijl de nummers verschillen, dan zijn het verschillende regels. Dat heb ik van promo's geleerd. Die zitten vaak naast een hoofdset en hebben een eigen telling. Ik duw ze niet in de nummers van de buurset alleen omdat de naam bekend is.",
          ],
        },
        {
          id: "dex-order",
          heading: "Volgorde op Pokédex-nummer",
          paragraphs: [
            "Pokédex-volgorde is de volgorde van de soorten. [[Generatie 1|/collections/generation/1]] loopt van Bulbasaur tot Mew, #001 tot #151. Het vak vraagt niet uit welke set de kaart komt. Een gewone kaart in een hoes uit een recente set vult #001 even geldig als een oude druk. [[De notitie over de Pokédex-binder|/guides/pokedex-binder]] legt uit waarom ik bij één kaart per soort stop. [[De checklist van de eerste 151|/guides/gen-1-checklist]] is hetzelfde idee, beperkt tot die 151. Vak #050 schuift niet naar voren omdat ik de kaart op een dinsdag vond.",
            "Het Pokédex-nummer schrijf ik alleen klein in de hoek van de pagina als die pagina een nieuw honderdtal begint. Elk vak een etiket geven doe ik niet. De checklist op de verzamelpagina is de index. De binder is het bewijs. Wie een soort zoekt, kent het nummer of slaat het na. Een binder vol briefjes op elk vak wordt stijf en zegt nog steeds niet welke regel leeg is.",
          ],
        },
        {
          id: "by-type",
          heading: "Op type sorteren, als de binder geen checklist is",
          paragraphs: [
            "Het type is het teken rechtsboven op een Pokémon-kaart. [[De hulp bij de kaartdatabase|https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database]] beschrijft het zo: het energie-icoon voor Gras, Vuur, Water en de rest. Een kind dat elke waterkaart op één pagina wil, sorteert op type. Dat gebruik ik voor een speelstapel op tafel. Voor een setbinder gebruik ik het niet. De lijst is genummerd, en een pagina van één type verbergt het ontbrekende nummer.",
            "Trainers dragen dat type-icoon niet, en basis-Energie blijft een eigen stapel. Op zo'n middag krijgen die kaarten een eigen hoop, in plaats van onder een wezen te worden geduwd. Generatie is de andere volgorde, een stuk van de Pokédex, en dat is al wat [[generatie 1|/collections/generation/1]] doet. Set, nummer, type en generatie zijn vier vragen. Per binder neem ik er één. [[Hoe ik het teken lees|/guides/read-a-card]] laat zien waar het icoon zit, voordat ik de stapel vertrouw.",
          ],
        },
        {
          id: "marking-a-line",
          heading: "Wanneer ik een regel afvink",
          paragraphs: [
            "[[De verzamelingen|/collections]] tonen een regel als gevuld wanneer ik de kaart heb vastgelegd. Vastleggen is iets anders dan naar een stapel kijken. De kaart gaat in de hoes, de hoes in het vak, en dan vink ik de regel af. Vink ik eerst, dan liegt de lijst en heeft de binder een gat. Dat gat valt pas op als ik echt blader, vaak op een andere avond, als de doos alweer dicht is.",
            "[[Hoezen en pagina's|/guides/protect-cards]] komen vóór het afvinken, niet erna. Een kaart die in het vak kaal schuurt, moet ik daarna vervangen, en de regel was nooit echt af. Spreken scherm en binder elkaar tegen, dan blader ik. De binder heeft gelijk. De lijst breng ik naar de stand van de vakken, niet omgekeerd. Een balk op het scherm is een geheugensteuntje. Het vak is het feit.",
            "Een bruikbare avond ziet er zo uit. Ik neem één binder voor me en laat de andere dicht. De bijpassende stapel leg ik op nummer op tafel, negen kaarten in een rij als ik pagina's met negen vakken gebruik. Elke kaart gaat in de hoes, dan in het vak, en pas daarna kijk ik naar de checklist. Kaarten die vanavond niet in deze binder horen, gaan terug naar hun doos voordat ik begin. Anders worden ze halverwege de pagina een tweede karwei. Eén afgewerkte, opgeborgen pagina is een betere avond dan drie stapels die ik heb bewonderd.",
          ],
        },
      ],
      faqs: [
        {
          q: "Hoort een generatiebinder pagina's met negen vakken te hebben?",
          a: "Ik gebruik negen vakken als het stuk af moet. Ik gebruik vier vakken als minder kaarten groter bekeken moeten worden. Beide zijn echte binders. In één band meng ik de twee pagina's niet, want de telling en de plank raken dan in de war.",
        },
        {
          q: "Sorteer ik een set op type of op zeldzaamheid?",
          a: "Nee. Een set sorteer ik op kaartnummer. Type en zeldzaamheid veranderen hoe een pagina oogt en verstoppen de ontbrekende nummers. Trainers en energie blijven op de plek die de set hun heeft gegeven.",
        },
      ],
    },
    {
      slug: "bulk-cards",
      title: "Wat ik met bulk doe",
      description: "Bulk vult de binders. Ik sorteer op set, daarna op de lege soortregel, en de rest houd ik.",
      h1: "Bulk is de stapel die de binder afmaakt",
      lede: "Bulk behandel ik met genegenheid. Bedoeld is de gewone stapel: gewone kaarten, dubbelen en de kaart die in elk blik zit. Die stapel maakt een binder af. Vaak begint hij als een blik uit de supermarkt. Ik sorteer op set, laat extra kaarten lege soortregels sluiten en houd wat overblijft, in plaats van het rommel te noemen.",
      sections: [
        {
          id: "why-bulk",
          heading: "Waarom bulk voor mij de verzameling is",
          paragraphs: [
            "Een holo is een mooie pagina. Een systeem is het niet. Het systeem is de lege regel, en lege regels zijn meestal gewone kaarten. [[De bindergids|/guides/collecting-binders]] zegt dat in de lange vorm. Aan tafel geldt de korte vorm: vult de kaart een gat, dan is het de kaart die ik wilde, ook als de tekening dezelfde Magikarp is die ik al uit het hoofd ken. De herhaling stoort me niet. Die herhaling is de voorraad.",
            "Met verontschuldigen voor bulk ben ik gestopt toen een generatiebinder uit een gemengde doos sneller opschoot dan uit alles wat ik als bijzonder apart had gelegd. Bijzondere kaarten mogen in een hoes wachten. De checklist wacht niet op hen. [[Verzamelen met een kind|/guides/collecting-with-a-child]] gebruikt dezelfde stapel. Een kind kan een gewone kaart vasthouden, een vak kiezen en de regel zien sluiten. Daarvoor hoeft er geen zeldzame kaart op tafel te liggen, en ik houd de gewone kaart ook niet achter alsof ze te gewoon is om aan te raken.",
            "Sommige themalijsten bestaan bijna alleen uit deze stapel. [[Klei-kaarten van Yuka Morii|/collections/themes/yuka-morii]] zijn gewone kaarten, en daar is bulk goud. [[Thematische binders|/collections/themes]] is de plek waar die checklists liggen.",
          ],
        },
        {
          id: "sort-by-set",
          heading: "Eerst op set sorteren",
          paragraphs: [
            "Ik kiep de doos alleen leeg zover de tafel vriendelijk blijft. Daarna sorteer ik op set, niet op wezen en niet op glans. [[Nummer en symbool lezen|/guides/read-a-card]] is het deel dat ik in de handen doe: het kaartnummer vinden, de set bevestigen, een stapel maken. Een stapel voor Base, een stapel voor een nieuwere set, een stapel die ik nog niet kan plaatsen. Die derde stapel mag. Hij is beter dan een kaart die ik uit ongeduld in de verkeerde binder duw.",
            "Elke stapel gaat naar de setpagina in [[de verzamelingen|/collections]]. Die pagina is de kaartenlijst. Is de regel open, dan gaat de kaart die binder in. Is de regel gevuld, dan is de kaart een dubbele en blijft ze bulk. Dubbelen haal ik niet tevoorschijn om te bewonderen zolang er in die stapel nog open regels zijn. Bewondering is hoe een half gesorteerde doos een maand overleeft. Eerst de open nummers, dan de rest. De doos mag mooi zijn als ze leeg is aan open regels.",
          ],
        },
        {
          id: "species-lines",
          heading: "Dan de lege soortregel",
          paragraphs: [
            "Een dubbele voor een set kan toch de eerste kaart van die soort in een generatiebinder zijn. [[De Pokédex-binder|/guides/pokedex-binder]] heeft er maar één nodig. [[Magikarp|/pokedex/129]] is het voorbeeld dat ik vertrouw, omdat de bulk steeds weer een volgende aanbiedt. Is #129 leeg, dan verlaat de volgende Magikarp de doos en vult het vak. Is #129 gevuld, dan gaat de kaart terug. De oudste druk zoek ik daarvoor niet, en de nieuwste ook niet. Ik neem de kaart die er al is.",
            "Voor een soortregel telt elke taal. Een kaart met een andere gedrukte naam toont op de soortpagina dezelfde soort, omdat de pagina het nationale Pokédex-nummer volgt. Ik controleer het nummer als de naam op de kaart niet de Engelse naam is die ik uit het hoofd ken. De soortpagina houdt de Engelse naam aan, ook als de kaart zelf een andere taal draagt. Het nummer beslist, niet mijn geheugen voor de naam. Zo belandt een anderstalige kaart in het juiste vak zonder dat ik er een tweede binder voor open.",
          ],
        },
        {
          id: "extras",
          heading: "Wat er met de rest gebeurt",
          paragraphs: [
            "De rest blijft in een doos met de setnaam, of in één gemengde doos als de stapel klein is. Dat is geen afval. De volgende binder heeft vaak net de kaart nodig die ik bijna had weggelegd. Ik houd ze droog, doe ze in een hoes als de hoek al zacht is, en laat ze niet op de vloer liggen. Een zachte hoek wordt in een open doos alleen zachter. De hoes is ook hier de kleinere handeling.",
            "Is een binder af, dan verandert het verhaal. [[Een afgewerkte binder mag weg|/guides/donating-cards]], naar een kind. Losse rest gaat niet mee. Die blijft en vult de volgende binder. Die scheiding houdt het cadeau compleet en de checklist eerlijk. Een handvol losse kaarten oogt gul en komt aan als huiswerk. Een dichte binder kan iemand openslaan zonder mijn gaten te erven.",
            "De doos zelf krijgt een saai etiket: de setnaam, of gemengd als ik haar nog niet heb gesplitst. Op het etiket schrijf ik geen gok over wat de kaarten in de handel zouden doen. Ik heb geen aparte doos voor mooie kaarten en geen bak voor rest. Die scheiding is hoe gewone kaarten verdwijnen en gaten open blijven. Eens per maand neem ik de gemengde doos, sorteer weer op set en maak haar kleiner. Het doel is een kleinere twijfelstapel, geen mooiere uitstalling. Een kaart die ik niet vertrouw, vult geen regel. [[Een vervalsing herkennen|/guides/spot-fakes]] is een aparte notitie. In de bulkdoos liggen de gewone echte kaarten, en die wil ik.",
          ],
        },
      ],
      faqs: [
        {
          q: "Moet ik dubbele gewone kaarten weggooien?",
          a: "Dat doe ik niet. Een dubbele in de ene set is vaak de ontbrekende soort in een andere binder. Ik doe ze per set in dozen tot een checklist ernaar vraagt. De volgende binder is meestal dichterbij dan een nieuwe stapel packs. Magikarp #129 is daarvoor mijn toetssteen.",
        },
        {
          q: "Sorteer ik bulk eerst op zeldzaamheid?",
          a: "Nee. De tekens daarvoor zijn in de loop der jaren veranderd, en ze zeggen me niet welke regel leeg is. Het kaartnummer zegt het wel. Een hele doos kan ik sorteren zonder te beslissen of een cirkel, een ruit of een ster vandaag nog hetzelfde betekent.",
        },
      ],
    },
    {
      slug: "pokedex-binder",
      title: "Een Pokédex-binder afmaken",
      description: "Eén kaart per soort, van #001 tot het eind van generatie 9, gevuld uit bulk.",
      h1: "Hoe ik een Pokédex-binder vul",
      lede: "Een Pokédex-binder is één kaart per soort. Generatie 1 tot en met 9 zijn {species} soorten. Ik vul hem uit bulk, in Pokédex-volgorde, en ik jaag geen druk na waar de checklist niet om vraagt. Wat ik ervoor nodig heb, ligt meestal al in de stapel, plus een hoes en een vak voor elke kaart die een gat sluit.",
      sections: [
        {
          id: "one-card",
          heading: "Eén kaart per soort",
          paragraphs: [
            "De regel is klein, en hij houdt me tegen. Eén kaart. Elke set. Elke taal. Elke zeldzaamheid. [[De lange bindergids|/guides/collecting-binders]] scheidt deze taak van de setbinder, waar elke kaart op de lijst een vak heeft. Hier is het wezen het vak. Een tweede Pikachu is een dubbele, ook als de tekening nieuw is. De nieuwe tekening mag me blij maken. Ze maakt van een gevuld vak geen tweede plicht.",
            "De gewoonte ben ik begonnen met [[Bulbasaur|/pokedex/1]]. De soortpagina noemt de drukken. De binder heeft er één van nodig. De eerste Bulbasaur in een hoes die ik al had, heb ik in #001 gestopt en daarna opgehouden een betere #001 te zoeken. Beter is een andere hobby. Deze hobby is het bereik. Wie #001 open laat omdat er ergens nog een oudere Bulbasaur zou kunnen liggen, verzamelt wachten. Ik verzamel de reeks.",
            "Een soortpagina noemt elke druk, en de Pokédex-binder heeft nog steeds maar één kaart nodig. [[Alle Pikachu-kaarten|/collections/themes/pikachu]] houdt elke Pikachu-druk als eigen checklist. [[Thematische binders|/collections/themes]] ligt naast de generaties wanneer ik de hele reeks van één gezicht wil zien.",
          ],
        },
        {
          id: "the-range",
          heading: "De {species}, generatie na generatie",
          paragraphs: [
            "Ik sla niet één reuzenbinder open en noem dat af. Ik bouw per generatie, omdat [[de verzamelingen|/collections]] al zo zijn gesplitst en omdat een generatie een schrift is dat ik uit kan krijgen. Generatie 1 is 151. Generatie 2 is de volgende 100. De latere generaties staan op dezelfde plek, elk met een eigen checklist en een eigen telling. Die telling lees ik daar. Ik leer haar niet uit het hoofd om ermee te kunnen zwaaien.",
            "[[Generatie 1|/collections/generation/1]] is het stuk dat ik mensen als eerste noem, en [[de notitie over de 151|/guides/gen-1-checklist]] ligt ernaast. De wezens zijn vertrouwd, de bulkdozen zitten er vol mee, en 151 is een getal dat in het hoofd past. Daarna is generatie 5 het lange stuk en generatie 6 het korte. Dat mag de checklist zeggen. De tellingen onthoud ik niet. Een leeg vak midden in de Pokédex sla ik niet over om ergens een liever wezen voor te trekken. De reeks blijft de reeks.",
          ],
        },
        {
          id: "from-bulk",
          heading: "Vullen uit de bulk",
          paragraphs: [
            "[[Bulk|/guides/bulk-cards]] is de voorraad. Daar ben ik bewust in. Een zeldzame illustratie is welkom als het de kaart is die ik al heb. Een eis is ze niet. Wachten op een lievelingsdruk is hoe een Pokédex-binder een jaar lang op dezelfde twintig gaten blijft staan. Twintig gaten kan ik onthouden. Toch zijn ze geen reden om de kaart te laten liggen die het vak vandaag zou sluiten.",
            "De praktische ronde is saai, en ze werkt. Ik neem één generatiechecklist. Ik loop de bulkdoos door met de gaten in het hoofd. De kaart die een gat sluit, gaat in de hoes, dan in het vak, dan vink ik de regel af. Daarna stop ik, ook als de doos er nog interessant uitziet. [[Hoe ik de pagina's orden|/guides/organize-binder]] is de keuze van het formaat. Negen vakken gebruik ik als ik het bereik af wil zien. Vier vakken zouden kijken zijn. Deze ronde is afvinken.",
          ],
        },
        {
          id: "when-it-is-done",
          heading: "Wanneer ik een stuk af noem",
          paragraphs: [
            "Een generatie is af als elke soortregel een kaart in de binder heeft en ik de pagina's heb omgeslagen om het te bewijzen. Het scherm kan zeggen dat de regels gevuld zijn. Ik blader toch. Een vastgelegde kaart die in een schoenendoos ligt, zit niet in de binder. De schoenendoos is een wachtruimte. Het vak is de plek. Voordat ik een stuk af noem, wil ik het wezen onder het nummer zien, niet alleen de balk.",
            "Een afgewerkte generatie vervang ik niet voor de sport. Brengt een latere kaart me aan het lachen, dan mag ze de kaart in het vak vervangen, en de oude gaat terug naar de bulk. De regel blijft hoe dan ook gevuld. Het punt was nooit het indrukwekkendste exemplaar. Het punt was het wezen, aanwezig, op volgorde, zodat iemand ernaartoe kan bladeren. Het lachen mag. Het is geen tweede checklist.",
            "Voor deze binder betekent moeite dat ik aandacht uitgeef in plaats van een bepaald exemplaar te zoeken. De meeste nodige kaarten heb ik al in ongesorteerde bulk. Wat ik erbij haal, zijn hoezen en pagina's, in gewone verpakkingen, en ik bewaar ze niet voor holo's. Een potloodlijst van de gaten houd ik alleen bij als ik weg ben van het scherm. Thuis is de generatiepagina de lijst. Is een gat al maanden leeg, dan is die soort schaars in mijn dozen, niet omdat ik wacht op een zeldzamer plaatje van een soort die ik allang had kunnen opbergen.",
          ],
        },
      ],
      faqs: [
        {
          q: "Heeft de Pokédex-binder elke druk van een Pokémon nodig?",
          a: "Nee. Eén kaart per soort is de hele regel. Elke druk hoort op de soortpagina, niet in deze binder. Een tweede Pikachu met een nieuwe tekening blijft een dubbele zolang het vak al bezet is.",
        },
        {
          q: "Welke generatie maak ik het eerst af?",
          a: "Ik begin met generatie 1, de oorspronkelijke 151. De kaarten liggen vaak in de bulk, en de checklist is kort genoeg om af te ronden. Daarna neem ik de volgende generatie op de verzamelpagina, niet een willekeurig gat uit het midden van de Pokédex.",
        },
      ],
    },
    {
      slug: "gen-1-checklist",
      title: "Checklist van de eerste 151 Pokémon",
      description: "Hoe ik de oorspronkelijke 151 Pokémon in één binder verzamel, met de generatiechecklist en de lijst van Base.",
      h1: "Checklist generatie 1: alle 151 oorspronkelijke Pokémon",
      lede: "Generatie 1 is 151 soorten, van #001 Bulbasaur tot #151 Mew. Ik verzamel ze als één binder: één kaart per soort, uit elke set. De checklist is de generatiepagina, en Base is waar veel bekende namen beginnen. Die twee lijsten hebben niet dezelfde telling. Ze uit elkaar houden is de hele truc.",
      sections: [
        {
          id: "the-151",
          heading: "Wat de 151 betekent",
          paragraphs: [
            "De 151 zijn een Pokédex-bereik, geen enkel product. [[Generatie 1|/collections/generation/1]] noemt elke soort in dat bereik, met een paar van de sets waarin ze voorkomt. Die pagina is de checklist die ik gebruik. Ze is niet hetzelfde als Base, dat 102 kaarten heeft en trainers plus energie bevat. Mensen mengen die twee tellingen. Ik houd ze uit elkaar zodat de binder het juiste aantal vakken heeft. 151 vakken voor wezens, 102 regels voor één set. Beide kunnen kloppen, alleen niet tegelijk voor dezelfde binder.",
            "[[De notitie over de Pokédex-binder|/guides/pokedex-binder]] is dezelfde methode voor alle {species} soorten. Deze notitie blijft bij het eerste schrift, omdat naar de oorspronkelijke 151 het vaakst wordt gevraagd. [[De lange gids|/guides/collecting-binders]] legt uit waarom dit een generatiebinder is en geen setbinder. In de setbinder heeft elke kaart op de lijst een vak, trainers inbegrepen. In de generatiebinder is Bulbasaur een vak en een trainer geen. Die scheiding voorkomt dat ik uiteindelijk 102 kaarten heb zitten en denk dat de 151 af zijn. Zoek je de set uit 2023 die [[151|/collections/set/sv3pt5]] heet? Dat is een andere lijst.",
          ],
        },
        {
          id: "where-they-appear",
          heading: "Waar de oorspronkelijke 151 opduiken",
          paragraphs: [
            "Een soort uit Kanto kan in het Base-tijdperk opduiken en opnieuw in een set die decennia later is verschenen. [[Pikachu|/pokedex/25]] is het duidelijke geval. [[Charizard|/pokedex/6]] is het andere. De soortpagina noemt de drukken. Elk daarvan vult het vak. De oudste druk heb ik niet nodig, en de nieuwste ook niet. Een gewone Pikachu uit een nieuwere doos sluit de regel evenzeer als een kaart die mensen als eerste noemen als ze aan de oude jaren denken.",
            "[[Sets op volgorde|/guides/sets-in-order]] helpen als ik de oude drukken met opzet wil. [[De Base-serie|/collections/series/base]] is Base, Jungle en Fossil, plus de sets eromheen. Bouw ik een setbinder van Base, dan is dat een ander karwei met 102 vakken. Kaarten uit dat karwei kunnen ook een generatieregel vullen, één keer, als de soortregel leeg is. Een setbinder plunder ik niet om de generatiebinder op te tuigen. Dat doet het extra exemplaar. Ontbreekt dat exemplaar, dan blijft de generatieregel leeg tot de bulk er een brengt.",
          ],
        },
        {
          id: "base-set",
          heading: "Base is een lijst, niet de hele 151",
          paragraphs: [
            "[[Base|/collections/set/base1]] heeft 102 kaarten, aanduiding base1, verschenen op 9 januari 1999. Een deel van de oorspronkelijke 151 staat niet op die lijst. Latere sets uit het Base-tijdperk voegen er meer van toe. Een generatiebinder wacht niet op die oudere sets. Een hedendaagse gewone kaart van een ontbrekende soort is een gesloten regel. Bulbasaur kan uit Base komen. Het hoeft niet. Het vak vraagt naar de soort, niet naar het jaar op de druk.",
            "Toch sla ik de Base-lijst graag open, want aan die kaartnummers heb ik leren lezen. Eerst het nummer, dan de naam, dan het symbool als controle. Beweert een bulkdoos dat alle originelen erin zitten, dan geloof ik de bewering niet. Ik geloof de generatiepagina en de kaarten in de hand. Een doos kan naar de oude jaren ruiken en toch drie soorten schuldig blijven. De pagina merkt dat. Het etiket op het deksel merkt het niet.",
          ],
        },
        {
          id: "one-line",
          heading: "Eén regel tegelijk",
          paragraphs: [
            "De checklist van #001 naar beneden werk ik alleen af als ik geduldig ben. Vaker neem ik de volgende lege regel die de doos kan vullen. De volgorde in de binder blijft numeriek, ook als de volgorde waarin ik de kaarten vind dat niet is. Vak #050 schuift niet naar voren omdat ik het op een dinsdag vond. De reeks van Bulbasaur tot Mew is de belofte dat ik de kaart terugvind. De vondstdag is geen nieuwe sortering.",
            "Een regel is af als de kaart in de hoes in het vak zit en is vastgelegd. Dan kijk ik naar het volgende gat. 151 zijn veel middagen en toch geen raadsel. Bulk uit bijna elk tijdperk heeft Kanto-wezens erin. Het werk is passen, niet wensen. Wensen houdt #001 open terwijl de Bulbasaur al zonder hoes in een blik ligt. Passen pakt het blik, doet de kaart in een hoes en sluit de regel.",
            "De generatiepagina houd ik naast de doos open en ik vink niets alleen in mijn hoofd af. De wezens die ik denk te hebben, zijn niet altijd de wezens in de binder. Mew en de starters zijn de soorten waarvan mensen aannemen dat ze klaar zijn. Ik controleer ze toch. Een binder waarin #001 ontbreekt omdat de Bulbasaur nog zonder hoes in een blik ligt, is geen afgeronde 151, ook als de rest van de pagina's vol oogt. De laatste tien gaten duren meestal langer dan de eerste vijftig, en dat is normaal. Dat zijn de soorten die mijn dozen toevallig niet geven. Ik laat ze leeg in plaats van een vervangende kaart te verzinnen.",
          ],
        },
      ],
      faqs: [
        {
          q: "Is Base hetzelfde als alle 151?",
          a: "Nee. Base is één set met 102 kaarten op de openbare lijst, verschenen op 9 januari 1999. De 151 zijn elke soort van Bulbasaur tot Mew, uit elke set. Ik heb beide pagina's bewaard zodat de tellingen niet in elkaar overlopen. Trainers en energie horen bij de 102, niet bij de 151.",
        },
        {
          q: "Heb ik een first edition nodig voor de binder van generatie 1?",
          a: "Nee. Elke druk van die soort vult het vak. Een first edition hoort in een setbinder als de lijst van die set haar noemt. Voor Bulbasaur #001 volstaat de kaart in een hoes die ik al heb.",
        },
      ],
    },
    {
      slug: "read-a-card",
      title: "Kaartnummer en symbool lezen",
      description: "Hoe ik het kaartnummer, het symbool en het zeldzaamheidsteken vind, zodat een bulkstapel sorteerbaar wordt.",
      h1: "Hoe ik het kaartnummer en het symbool op een Pokémonkaart lees",
      lede: "Ik lees een kaart elke keer in dezelfde volgorde: naam, kaartnummer, symbool, en het zeldzaamheidsteken alleen als ik het nog nodig heb. Die volgorde maakt van een gemengde bulkstapel stapels die ik kan opbergen. Het nummer past bij de setlijst. Het symbool houdt twee tijdperken uit één stapel.",
      diagram: {
        kind: "card",
        title: "Waar ik op de kaart kijk",
        description: "Een eenvoudige kaartomtrek met de naam, het kaartnummer, het symbool en het zeldzaamheidsteken. Geen officiële kaartafbeelding.",
        caption: "Het kaartnummer leg ik langs de setlijst. Symbool en zeldzaamheidsteken helpen alleen om de set te bevestigen.",
      },
      sections: [
        {
          id: "the-number",
          heading: "Het kaartnummer is de sorteersleutel",
          paragraphs: [
            "Het kaartnummer is de breuk of het paar op de kaart, bijvoorbeeld 4/102. Het eerste getal is de plek van de kaart in die set. Het tweede getal is hoeveel kaarten de set in die telling heeft geteld. [[Base|/collections/set/base1]] is de set waarmee ik dit laat zien, want 102 is de telling op de lijst die ik uit de openbare gegevens publiceer. De aanduiding van de lijst is base1, verschenen op 9 januari 1999. Zegt de kaart 4 en heet kaart 4 op de lijst hetzelfde, dan heb ik een treffer. De naam alleen zou me bij Pikachu op het verkeerde been zetten. Het nummer niet.",
            "Promo's en bijzondere sets gebruiken soms een letter, een ander totaal of een nummer dat niet op de hoofdset ernaast lijkt. Ik dwing ze niet in de volgorde van de hoofdset. Ik zoek de lijst die die telling gebruikt. [[De tijdlijn van de sets|/guides/sets-in-order]] herinnert me eraan dat promo's naast een tijdperk zitten zonder de hoofdlijst van dat tijdperk te zijn. Een letter vóór het getal is een sein om de buurlijst te openen, geen reden om de kaart tussen 4 en 5 van Base te schuiven.",
          ],
        },
        {
          id: "the-symbol",
          heading: "Het symbool bevestigt de stapel",
          paragraphs: [
            "Het symbool is het kleine teken, afhankelijk van het tijdperk meestal langs de rechterkant van de afbeelding of er net onder. Het wisselt met elke set. De hele geschiedenis van de tekens leer ik niet uit het hoofd. Ik gebruik het symbool zodat twee stapels niet in elkaar vloeien als de nummers bij meer dan één lijst kunnen horen. Een gelijke naam en een vergelijkbaar getal zijn nog geen gelijke set. Het teken ernaast bepaalt de stapel, voordat ik de kaart de binder in schuif.",
            "Spreken symbool en nummer de naam tegen die ik verwachtte, dan heeft de kaart gelijk en mijn geheugen niet. Het nummer zoek ik op de setpagina op. [[Pikachu|/pokedex/25]] herinnert eraan dat één naam in veel sets kan leven, elk met een eigen nummer. De naam alleen is geen sorteersleutel. Op de soortpagina zie ik de drukken naast elkaar. In de hand sorteer ik toch op symbool en getal, anders bouw ik een stapel die alleen uit herinnering bestaat.",
          ],
        },
        {
          id: "rarity",
          heading: "Zeldzaamheidstekens sorteren zwak",
          paragraphs: [
            "Cirkel, ruit en ster zijn allemaal op kaarten gedrukt, en de betekenis is verschoven toen het spel meer zeldzaamheden kreeg. Ik houd geen eigen tabel bij van wat elk teken in elk jaar betekende. De tabel zou langer zijn dan het sorteren en me nog steeds niet zeggen welke checklistregel leeg is. Daarvoor volstaat een blik op het kaartnummer. Het teken laat ik teken zijn tot de stapel al bij de juiste set ligt.",
            "Naar het teken kijk ik alleen om een stapel grof te scheiden in kaarten die makkelijk in een hoes gaan en kaarten waarbij ik twee keer kijk. Dat is gemak, geen cataloguswerk. [[Bulk sorteren|/guides/bulk-cards]] blijft bij het nummer. Zeldzaamheid is hoe een pagina oogt. Het nummer is hoe een binder afkomt. Een ster op een kaart verandert het vak niet dat de lijst voor dat nummer voorziet. Hij verandert hooguit hoe rustig ik de kaart in de hoes schuif.",
          ],
        },
        {
          id: "regulation",
          heading: "Het regulation-teken is een formatletter",
          paragraphs: [
            "Op kaarten vanaf 2020 zet Play! Pokémon een regulation-teken: een letter linksonder. De [[regels van Play! Pokémon|https://play.pokemon.com/en-us/resources/rules/]] zeggen dat Standard roteert op die letter. Oudere kaarten hebben geen letter. Een kaart met een oudere letter, of zonder letter, kan toch legaal zijn als dezelfde kaart met een huidige letter is herdrukt. De toegestane letters wisselen. De lijst van nu leer ik niet uit het hoofd in een binder, en op de letter sorteer ik niet.",
            "De letter is niet het verzamelnummer en niet het zeldzaamheidsteken. [[De hulp bij de kaartdatabase|https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database]] zet het zeldzaamheidsteken in de rechteronderhoek, bij het uitbreidingsicoon. Naar de letter kijk ik alleen als iemand vraagt of een kaart in een huidig evenement gespeeld mag worden. Voor de binder beslist het nummer nog steeds over het vak. Een kaart die ik niet vertrouw, bereikt dat vak niet. Daarover gaat [[hoe ik een vervalsing herken|/guides/spot-fakes]].",
          ],
        },
        {
          id: "in-practice",
          heading: "Een ronde door een gemengde stapel",
          paragraphs: [
            "Ik pak een kaart op. De naam lees ik hardop als de stapel wild is, want mijn ogen springen zodra ik te snel ga. Ik vind het kaartnummer. Ik controleer het symbool tegen de stapel waar ik haar toe reken. Dan laat ik haar op die stapel vallen. Kan ik haar in een paar seconden niet plaatsen, dan gaat ze naar een twijfelstapel, niet terug in de mengeling. Terug in de mengeling is hoe dezelfde kaart vier keer op een avond weer opduikt.",
            "De twijfelstapel krijgt een rustigere ronde, met de [[verzamelingen|/collections]] open. [[De bindergids|/guides/collecting-binders]] is wat ik daarbij voed: eerst setregels, dan soortregels. Een kaart die ik niet herken, krijgt toch een hoes als de hoek zacht is. Het herkennen kan een uur wachten. Een geknikte hoek wordt slechter terwijl ik aarzel. De hoes is de stap die niet van mijn zekerheid afhangt.",
            "De taal op de kaart kan de ronde vertragen, en dat is prima. De Engelse naam in de gegevens is de naam die de setlijst gebruikt. Deze site toont voor het Nederlands ook die Engelse soortnamen. Een kaart in een andere taal heeft toch een kaartnummer en een symbool. Die leg ik langs de lijst, en de soortpagina lees ik als ik de naam daar wil zien. Een eigen binder per taal bouw ik niet. Eén setlijst, één nummervolgorde. De naam op de kaart mag afwijken van de naam op het scherm. Het nummer maakt er dan dezelfde regel van.",
          ],
        },
      ],
      faqs: [
        {
          q: "Wat als de kaart geen breuk toont?",
          a: "Dan behandel ik haar als promo of als bijzondere druk en zoek ik een lijst met dat soort nummer. Een plek in de hoofdset verzin ik niet. Op de twijfelstapel wacht ze tot de juiste lijst open ligt. Een letter vóór het getal is daarvoor de gewone aanwijzing.",
        },
        {
          q: "Moet ik op het zeldzaamheidssymbool sorteren?",
          a: "Dat doe ik niet. Het symbool is met de tijd veranderd. Het kaartnummer past bij de kaartenlijst. Glans op de kaart kan wachten tot de stapel al in de juiste set ligt. Cirkel, ruit en ster zeggen me niet welke regel leeg is.",
        },
      ],
    },
    {
      slug: "protect-cards",
      title: "Hoezen voor Pokémonkaarten in de binder",
      description: "Hoezen, binderpagina's en gewone opslag voor een verzameling die wordt opengeslagen, ook die van een kind.",
      h1: "Pokémonkaarten beschermen: eerst de hoezen",
      lede: "Ik bescherm kaarten op de eenvoudigste manier waarbij ik de binder nog opensla. Een zachte hoes, een pagina met vakken en een plank die droog blijft. Dat is het hele plan. Ik gebruik het voor gewone kaarten, want vaak sluit juist die een regel. Een binder die ik niet open, is geen verzameling die ik bijhoud.",
      sections: [
        {
          id: "sleeve-first",
          heading: "Eerst de hoes, dan het vak",
          paragraphs: [
            "De hoes is een dun doorzichtig zakje voor één kaart. Ik doe hem erom voordat de kaart een binderpagina ziet. Binderpagina's schuren. De hoes vangt die schuurplek op. De gewone hoezen koop ik in een stapel en ik bewaar ze niet voor holo's. Een gewone kaart met een wit geworden hoek is toch een gat in een checklist, en haar vervangen is een slechtere middag dan haar nu in een hoes doen. De hoes is de kleinere handeling.",
            "Ik strijk de hoes glad zodat de kaart plat zit. Ik lik haar niet, plak haar niet en doe een gewone kaart uit de bulk niet uit ritueel in een tweede hoes. Twee hoezen zijn voor een kaart die op reis gaat. De kaart voor elke dag krijgt er één. [[De bindergids|/guides/collecting-binders]] gaat ervan uit dat deze stap al is gebeurd. Een vastgelegde kaart met een kale bovenkant is een kaart die ik te vroeg heb vastgelegd. Het afvinken komt na de hoes en na het vak, niet ervoor.",
          ],
        },
        {
          id: "pages",
          heading: "Binderpagina's waar een kaart in een hoes in past",
          paragraphs: [
            "[[Pagina's met negen en met vier vakken|/guides/organize-binder]] zijn de keuze. Het vak moet een hoes aankunnen zonder de kaart te laten bollen. Moet ik duwen, dan is de pagina verkeerd. Een gescheurd vak vervang ik, in plaats van te hopen dat de scheur blijft waar hij zit. Een gescheurd vak beschadigt de hoeken. Dat merk ik niet bij het insteken, maar als de kaart er weer uit komt en de witte plek nieuw is.",
            "Ringbanden zijn prima als de ringen niet op de kaarten drukken. Ik houd de ringen van de pagina af door de binder niet te vol te stoppen. Een D-ring die schoon sluit, is vriendelijker dan een binder die zo vol zit dat de kaften trekken. Liever begin ik een tweede binder dan de laatste pagina van de eerste te buigen. Op die laatste pagina zitten vaak energie en trainers, en juist die ontbreken later in de telling als ze krom in de kaft klemmen.",
          ],
        },
        {
          id: "storage",
          heading: "Waar de binders staan",
          paragraphs: [
            "Rechtop op een plank, of plat als de binder dun is, weg van een raam en weg van een vochtige buitenmuur. In een kelderdoos, op een hete zolder of in de kofferbak zet ik binders niet. Warmte bolt een hoes. Vocht vlekt een pagina. Zon bleekt inkt. Daar merk ik op de dag zelf niets van. Ik merk het als ik de binder een zomer later opensla. De vochtige plank heb ik met een blik uit de supermarkt geleerd. Eén keer was genoeg.",
            "Bulk die niet in een binder zit, leeft in een droge doos, zo gestapeld dat geen zwaarder voorwerp de kaarten buigt. Eten en drinken blijven van die tafel af. Dat klinkt zeurderig, tot er sinaasappelsap in een hoes staat. [[De verzamelingen|/collections]] kan ik uit de kaarten opnieuw opbouwen. Een aan elkaar geplakte stapel kan ik niet. De doos gaat na de avond dicht, ook als er nog een kleine stapel blijft liggen. De hele nacht open is een uitnodiging voor het glas dat iemand neerzet.",
          ],
        },
        {
          id: "toploader",
          heading: "Een toploader is voor de reis",
          paragraphs: [
            "Een toploader is een stijve plastic hoes. Ik gebruik er een als een kaart het huis verlaat: een binder op weg naar een kind, of een losse kaart in een pakket. Hij is dikker dan een binderpagina wil, dus hij blijft uit de negenvakspagina. Thuis leeft de kaart in een zachte hoes, in het vak. Een harde houder op elke gewone kaart zou een binder maken die ik niet opensla, en openslaan is het punt.",
            "Ik plak een kaart niet in een toploader. Heb ik er geen, dan winnen de zachte hoes en een platte doos het nog van een gevouwen hoek. [[De lange notitie|/guides/collecting-binders]] rekent al op de zachte hoes. De stijve is de uitzondering, voor onderweg, niet voor de dagelijkse pagina.",
          ],
        },
        {
          id: "kids",
          heading: "De verzameling van een kind",
          paragraphs: [
            "[[Een binder met een kind|/guides/collecting-with-a-child]] begint met hoezen en een binder die het kind kan openslaan, niet met een stijve houder voor elke gewone kaart. Ik wil dat het kind de pagina omslaat. Een kaart die nooit opengaat, blijft misschien gaaf en houdt tegelijk op deel van de middag te zijn. Hoezen zijn het compromis dat ik vertrouw. Ze vangen het dagelijks gebruik op en laten de pagina beweeglijk.",
            "Als een afgewerkte binder [[naar een kind gaat|/guides/donating-cards]], gaat hij in hoezen, in pagina's, met ringen die werken. Losse kaarten geef ik niet door en noem dat hetzelfde cadeau. De hoes hoort bij de binder. Zij is ook het deel dat het uithoudt een beetje ruw gebruikt te worden. Daar is een goede binder voor. Vóór de overdracht vervang ik een vermoeide pagina. Een scheur hoort niet het eerste te zijn wat bij het openslaan opvalt.",
            "Pagina's vervang ik als het plastic dof wordt of de naad van het vak openspringt. Een naad plak ik niet met tape aan de kaartkant. Tape is hoe een kaart een plakkerige rand krijgt. Een verse pagina is de reparatie. De oude pagina mag, als de rest nog heel is, briefjes of checklists houden, geen kaarten. Eens per jaar sla ik elke binder ver genoeg open om de achterste pagina's te zien, want achterin verstopt zich een getrokken vak. Die ronde heeft meer kaarten gespaard dan elke bijzondere houder die ik heb overwogen en niet gekocht.",
          ],
        },
      ],
      faqs: [
        {
          q: "Hebben gewone kaarten een hoes nodig?",
          a: "In mijn binders wel. Vaak is juist de gewone kaart degene die de regel vult. Ik doe haar in een hoes voordat ze in een vak gaat. Een wit geworden hoek is lastiger te herstellen dan een hoes om te doen. De hoezen bewaar ik niet voor holo's.",
        },
        {
          q: "Is een toploader de gewone hoes?",
          a: "Nee. Een harde houder gebruik ik als een kaart op reis gaat. De binder thuis krijgt een zachte hoes en een pagina met vakken. Een harde houder voor elke gewone kaart zou de binder tot iets maken dat ik niet meer opensla.",
        },
      ],
    },
    {
      slug: "donating-cards",
      title: "Een afgewerkte Pokémonbinder weggeven",
      description: "Ik geef een afgewerkte binder aan een kind, via een afdeling, een opvang of een naschoolse club, en ik noteer de dag.",
      h1: "Een binder weggeven aan een kind",
      lede: "Ik geef Pokémonkaarten weg door een afgewerkte binder te overhandigen. Een kinderafdeling, een opvang of een naschoolse club kan de plek zijn. Losse bulk blijft hier en vult de volgende binder. Ik vraag de plek eerst, noteer de dag waarop de binder vertrekt, en publiceer geen verkoopprijs. Is het antwoord nog niet, dan blijft de binder op mijn plank en blijft de openbare lijst zoals hij is. Een plan is geen overdracht. Liever wacht ik dan een cadeau vast te leggen dat mijn handen niet heeft verlaten.",
      sections: [
        {
          id: "finished",
          heading: "Alleen een binder die ik af heb",
          paragraphs: [
            "Een half gevulde binder is een karwei. Een afgewerkte binder is iets wat ik iemand anders in handen kan geven zonder me te verontschuldigen. Ik sla de pagina's om voordat hij gaat. Elk vak waar de checklist om vroeg, heeft een kaart. [[De lange gids|/guides/collecting-binders]] is de reden voor die maatstaf. Een kind hoort mijn gaten niet te erven. Een gat dat ik ken, is voor mij een taak. Voor iemand anders is het een gat op pagina drie.",
            "De binder zit in hoezen, omdat [[de bescherming|/guides/protect-cards]] deel is van het cadeau en geen persoonlijke voorkeur. De ringen sluiten. De pagina's zijn niet gescheurd. Is een vak moe, dan vervang ik de pagina vóór de overdracht. Dat is gewone zorg, geen plechtigheid. Twee hoezen heb ik daarvoor niet nodig. Eén hoes, één gave pagina, een ring die niet op de kaarten drukt. Daarmee kan iemand de binder openslaan zonder eerst mijn reparaties te erven.",
          ],
        },
        {
          id: "where",
          heading: "Afdeling, opvang en naschoolse club",
          paragraphs: [
            "Ik vraag de plek wat daar echt gebruikt kan worden. Een kinderafdeling, een speelkamer van een opvang en een naschoolse club willen niet allemaal hetzelfde, en sommige kunnen kaarten helemaal niet aannemen. Liever hoor ik een nee dan een binder achter te laten bij een balie die er niet om heeft gevraagd. De persoon die daar werkt, kent de kamer. Ik ken de binder. Dat nee is een bruikbaar antwoord. De binder blijft dan op de plank, compleet, tot een plek ja zegt.",
            "Van de overdracht maak ik geen toespraak over verzamelen. De binder is de hele introductie. Wil een kind de volgorde weten, dan zit de volgorde in de pagina's: een set op nummer, of een generatie in Pokédex-volgorde. [[Verzamelen met een kind|/guides/collecting-with-a-child]] is hoe ik me gedraag als ik de volwassene aan tafel ben. Dezelfde manieren gelden als ik alleen degene ben die de binder heeft gebracht. Ik verbeter geen smaak en houd geen praatje over zeldzaamheid.",
          ],
        },
        {
          id: "public-list",
          heading: "Wat de openbare lijst toont",
          paragraphs: [
            "De [[lijst van weggegeven binders|/donations]] noteert de ontvanger en de datum. Een verkoopprijs noteert hij niet, en ook niet wat een kaart in de handel zou doen. Een binder die het huis verlaat, is een feit over het karwei. Meer publiceer ik daarover niet. De ontvanger mag de naam van een afdeling of een club zijn als de naam van een kind niet van mij is om te publiceren. De datum is de dag waarop de binder mijn handen heeft verlaten.",
            "[[De verzamelingen|/collections]] blijven de checklist tonen waar die kaarten vandaan kwamen. Zodra ik de binder als weggegeven markeer, behandel ik die regels niet meer als gaten die ik opnieuw moet vullen, tenzij ik heb gekozen die binder een tweede keer te bouwen. Het scherm hoort bij de plank te passen. Een afwezige binder hoort er niet uit te zien als een binder die ik vergeten ben te beginnen. De regels blijven zichtbaar als afgesloten verhaal, niet als open werk.",
          ],
        },
        {
          id: "spares",
          heading: "Extra kaarten blijven in de rij",
          paragraphs: [
            "[[Bulk|/guides/bulk-cards]] is hoe de volgende binder afkomt. Rest gaat niet als een losse handvol mee met het cadeau. Een losse handvol oogt gul en komt aan als huiswerk. Ik houd de rest, sorteer hem en laat hem echte regels sluiten. De weggegeven binder is compleet. De doos thuis wordt daar niet armer van aan materiaal, ze wordt alleen eerlijker: wat er nog ligt, heeft nog een open regel voor zich.",
            "Wie kaarten voor dat sorteren over heeft, schrijft naar [[magnus@linksforcards.com|mailto:magnus@linksforcards.com]]. Schrijf in gewone taal wat er in de doos zit: sets die je herkent, of alleen bulk. Het sorteren doe ik. Winkels die kaarten sturen, worden op de bedankpagina bij naam genoemd. Dat is de hele afspraak. Een doos heeft geen toespraak nodig en geen schatting van wat de kaarten in de handel zouden doen. Ze heeft een deksel dat sluit, en een paar zinnen in de post.",
            "De overdracht schrijf ik op de dag dat ze gebeurt, niet aan het eind van de maand. De ontvanger mag de naam van een afdeling of een club zijn als de naam van een kind niet van mij is om te publiceren. De datum is de dag waarop de binder mijn handen heeft verlaten. Vraagt een plek me te wachten, dan blijft de binder op mijn plank en blijft de lijst ongewijzigd. Liever ben ik langzaam dan een cadeau te verzinnen dat niet heeft plaatsgevonden. Een binder die nog in huis staat, is geen weggegeven binder, hoe zeker ik ook ben van het plan.",
          ],
        },
      ],
      faqs: [
        {
          q: "Neem je losse bulk aan?",
          a: "Ja. Losse bulk is welkom. Ik sorteer hem in binders. Als cadeau geef ik losse bulk niet door. Een afgewerkte binder is wat vertrekt, en de extra kaarten blijven om de volgende te vullen. Schrijven kan naar magnus@linksforcards.com, in gewone taal, over wat er in de doos zit.",
        },
        {
          q: "Tonen de openbare pagina's een verkoopprijs?",
          a: "Nee. De openbare lijst toont een ontvanger en een datum. Een verkoopprijs toont hij nooit, en ook niet wat een kaart in de handel zou doen. De binder is een afgewerkte checklist die het huis verlaat, en dat is het enige feit dat ik erover publiceer.",
        },
      ],
    },
    {
      slug: "sets-in-order",
      title: "Pokémonsets op volgorde",
      description: "De series en sets van de openbare kaartenlijst, van Base in 1999 tot de nieuwste serie, met een pagina per set.",
      h1: "Pokémonsets op volgorde in de checklist",
      lede: "Ik houd de sets aan in de volgorde die de openbare kaartenlijst gebruikt. Het zijn {sets} sets in {seriesCount} series, en achter die namen staan {cards} kaarten. De lijst onder deze notitie is die volgorde, gebouwd uit dezelfde gegevens als de checklists. Elke regel wijst naar de setpagina waarop ik afvink. De datum op de regel is de verschijningsdatum uit die gegevens.",
      sections: [
        {
          id: "series-and-set",
          heading: "Een serie is een plank, een set is een binder",
          paragraphs: [
            "Een serie is een reeks sets die een tijdperk delen. Base, Jungle en Fossil liggen in de Base-serie. Een set is één kaartenlijst met eigen kaartnummers. Binders bouw ik op setniveau, en ik blader op serieniveau. Wie die twee woorden mengt, zet op een doos Base terwijl de helft Jungle is. De pagina toont de naam uit de gegevens. Op die naam leg ik de stapel weg, anders vind ik hem de volgende keer niet terug.",
            "[[De bindergids|/guides/collecting-binders]] gebruikt deze tijdlijn als ik beslis bij welke lijst een kaart hoort. [[De pagina's ordenen|/guides/organize-binder]] gaat ervan uit dat de lijst al gekozen is. De tijdlijn zegt me niet welke kaart mooi is. Ze zegt me welke checklist open is. Mooi kan ik daarna nog vinden. Eerst moet de kaart in de stapel liggen die bij haar nummer past, anders sluit ze een regel op de verkeerde lijst en opent ze een gat in de juiste.",
          ],
        },
        {
          id: "how-to-read",
          heading: "Hoe ik de lijst lees",
          paragraphs: [
            "Elk blok hieronder is een serie. Daarin lopen de sets op verschijningsdatum uit de openbare gegevens. De datum is de verschijningsdatum in die gegevens, uitgeschreven in de taal van deze pagina. De telling is het aantal kaarten op de lijst die ik publiceer, dus namen en kaartnummers, verder niets. Voor een kaart die de gegevens niet hebben, vul ik geen gok in. Een gat in de gegevens blijft een gat. Ik vul het niet met een herinnering aan een pack dat ik ooit in de hand had.",
            "Promo's, de POP-serie en de kleine lijsten onder Other staan in de gegevens omdat ook zij kaartnummers hebben. Ik verstop ze niet om de geschiedenis netjes te laten ogen. Een promo is toch een lijst. Sorteer ik bulk en past het nummer bij een promolijst, dan is dat de stapel waar ze bij komt. Een letter in het nummer is vaak de aanwijzing. De hoofdlijst ernaast houdt haar eigen telling, ook als de naam van de kaart daar eveneens voorkomt.",
          ],
        },
        {
          id: "early",
          heading: "Waar ik mensen naartoe stuur om te kijken",
          paragraphs: [
            "De [[Base-serie|/collections/series/base]] is het begin van de gepubliceerde lijst. [[Base|/collections/set/base1]] zelf is 9 januari 1999, 102 kaarten, aanduiding base1. [[De checklist van de eerste 151|/guides/gen-1-checklist]] legt uit waarom die 102 kaarten niet hetzelfde zijn als de oorspronkelijke 151 soorten. Naar beide pagina's stuur ik met opzet. De verwarring komt vaak voor, en de correctie is alleen de twee tellingen naast elkaar. Trainers en energie zitten in de 102. In de 151 zitten wezens, van Bulbasaur tot Mew, uit elke set.",
            "Het andere eind van de lijst beweegt als de gegevens bewegen. [[Mega Evolution|/collections/set/me1]] staat in de huidige gegevens als eigen serie, aanduiding me1. Ik verwijs ernaar zodat de tijdlijn een recente deur heeft, niet omdat een nieuwe set belangrijker zou zijn dan een oude gewone kaart. [[De verzamelingen|/collections]] zijn dezelfde lijst met de balken. Deze notitie is de lijst met de datums. Een balk zegt wat ik heb vastgelegd. Een datum zegt wanneer de set in de gegevens staat. Samen is dat de oriëntatie in een doos die meerdere jaren mengt. [[Mega Evolution—Delta Reign|/collections/set/delta-reign]] staat nog niet in deze lijst. Ik heb een pagina voor de binder geschreven voordat de kaartnummers bestaan, en hier zet ik geen geraden telling neer.",
          ],
        },
        {
          id: "using-it",
          heading: "De tijdlijn tijdens het sorteren",
          paragraphs: [
            "Deze pagina houd ik open als een doos meer dan één tijdperk beslaat. Verschijningsjaren leer ik niet uit het hoofd. Ik open de serie, dan de set, dan leg ik het kaartnummer ernaast. Past de naam, dan verlaat de kaart de doos. Past de naam niet, dan heb ik de verkeerde lijst, en haar forceren zou in twee binders tegelijk een gat maken. Liever ligt de kaart een minuut langer op de twijfelstapel dan een avond lang in het verkeerde vak.",
            "De gegevens zijn gebouwd op {built}. Ontbreekt hier een gloednieuwe set, dan ontbreekt hij in die bouw, hij verstopt zich niet in een menu. Liever toon ik een gedateerde lijst dan een vage belofte dat alles tot vandaag erin zit. De setpagina's die hieronder worden genoemd, zijn de checklists waarop ik echt afvink. Een set die de gegevens nog niet voeren, krijgt van mij ook geen lege binder met een verzonnen telling.",
            "De telling op elke regel gebruik ik tijdens het sorteren als controle. Denk ik dat een set af is en heeft de binder minder kaarten dan de telling, dan heb ik een nummer overgeslagen, meestal een trainer of een energiekaart tegen het eind. Heb ik meer kaarten dan de telling, dan is er een promo of de volgende set mee naar binnen geglipt. Hoe dan ook is de lijst de correctie. Een set rond ik niet af op een gevoel van ongeveer honderd. Het getal is het aantal vakken. Bij Base zijn het er 102, niet ongeveer honderd, en bij een dikkere set is het verschil nog duidelijker.",
          ],
        },
      ],
      faqs: [
        {
          q: "Staan de sets binnen een serie op verschijningsdatum?",
          a: "Ja. Elk serieblok noemt zijn sets op de verschijningsdatum in de openbare kaartgegevens. De series zelf volgen de volgorde van die gegevens. Een doos sorteer ik in diezelfde volgorde, zodat de stapels bij de pagina's passen. Base, verschenen op 9 januari 1999, staat aan het begin van deze lijst.",
        },
        {
          q: "Bevat deze lijst verkoopprijzen?",
          a: "Nee. Hij bevat de setnaam, de verschijningsdatum en het aantal kaarten uit de openbare lijst. Niets op deze pagina is een verkoopprijs. De telling is het aantal vakken in die binder, verder niets.",
        },
      ],
    },
    {
      slug: "collecting-with-a-child",
      title: "Met een kind een binder beginnen",
      description: "Hoe ik met een kind één binder begin: één taak, bulk, hoezen en toestemming om te stoppen.",
      h1: "Eén binder beginnen met een kind",
      lede: "Ik ben een vader die van de checklist houdt, en ik heb aan tafel gezeten met een kind dat van de plaatjes houdt. Het begin is kleiner dan mijn eigen plank. Eén binder. Eén taak. Bulk. Ik stop de zit zolang het nog leuk is. Het kind kiest de kaart. Ik sta alleen op de hoes en het genummerde vak.",
      sections: [
        {
          id: "one-binder",
          heading: "Eén binder, met opzet",
          paragraphs: [
            "Ik begin niet met de hele geschiedenis van het kaartspel. [[De lange gids|/guides/collecting-binders]] is voor mij, later, als het kind vraagt waar de andere binders vandaan komen. Bij de eerste zit bied ik één keuze: een setbinder voor een korte lijst, of [[de binder van generatie 1|/collections/generation/1]] met één kaart per oorspronkelijke soort. [[De notitie over de 151|/guides/gen-1-checklist]] is de versie van die keuze die ik in een minuut kan uitleggen. 151 wezens, één kaart per wezen, elke druk. Base met zijn 102 kaarten leg ik pas uit als de vraag komt. Anders lopen de tellingen door elkaar voordat de eerste pagina vol is.",
            "Twee karweien tegelijk zijn hoe een kind een schoot vol stapels krijgt en geen afgewerkte pagina. Dat heb ik gedaan. De tweede zit is slechter, omdat de tafel op een opdracht lijkt. Eén binder betekent: de volgende kaart heeft een vanzelfsprekend vak. Vanzelfsprekend is vriendelijk. Vriendelijk is ook de andere binder dicht te laten, ook als ik zelf net aan een andere lijst moet denken. Die andere lijst heeft een andere avond.",
          ],
        },
        {
          id: "their-choice",
          heading: "Het kind kiest de eerste kaart",
          paragraphs: [
            "Ik schud een kleine stapel bulk in hoezen en laat het kind de eerste kaart kiezen die erin gaat. Staat de binder in Pokédex-volgorde, dan gaat de kaart toch in haar genummerde vak, niet vooraan. Dat leg ik één keer uit, zonder toespraak. Het vak is de plek van het wezen. De kaart kiezen is het leuke deel. Het nummer is de belofte dat de kaart terug te vinden is. Vak #025 blijft vak #025, ook als Pikachu de eerste kaart van de middag was.",
            "Smaak verbeter ik niet. Een Pikachu is een prima eerste kaart. Een wezen dat ik gewoon vind, ook. [[Bulk|/guides/bulk-cards]] is de juiste stapel hiervoor, want er zijn genoeg exemplaren dat een keuze niet kostbaar is. Een kostbare stapel laat me erboven hangen. Erboven hangen is het tegendeel van een zaterdag aan de keukentafel. Ligt er van een soort maar één kaart in de doos en is de regel in de setbinder nog open, dan bied ik een andere kaart aan. De keuze blijft een keuze uit kaarten die de middag kan hebben.",
          ],
        },
        {
          id: "sleeves",
          heading: "Hoezen, dan de pagina",
          paragraphs: [
            "[[Hoezen|/guides/protect-cards]] gaan erom voordat kleine handen de kaart mogen. Ik laat het als een beweging zien, niet als een les: kaart erin, hoes glad, vak open, kaart erin. Kinderen kunnen bewegingen. In mijn meningen over opslag hebben ze minder interesse. Drinken blijft van de tafel, en de reden vertel ik alleen als iemand ernaar vraagt. Sinaasappelsap in een hoes is uitleg genoeg als de vraag komt. Daarvóór is het gewoon de beweging.",
            "Buigt een kaart, dan maak ik er geen moreel moment van. Ik doe een vervanger uit de bulk in een hoes als ik er een heb, of ik laat de regel leeg tot ik er een heb. Een lege regel mag. [[Een binder die ik weggeef|/guides/donating-cards]] is een afgewerkte, en de zaterdagbinder van een kind hoeft dat niet te worden. Hij mag een zaterdagbinder blijven. Een geknikte kaart gaat uit het vak, de regel wacht, en de middag gaat door. De checklist overleeft een gat beter dan een kind een toespraak.",
          ],
        },
        {
          id: "stop",
          heading: "Stoppen zolang het nog leuk is",
          paragraphs: [
            "Ik eindig de zit als het kind nog wil, niet als ik een rond getal heb gehaald. Twintig minuten die eindigen met een dichte binder, komen terug. Een uur dat eindigt met een zucht, misschien niet. [[De verzamelingen|/collections]] onthouden de regels die ik heb vastgelegd. Niets op het scherm is belangrijker dan de zin om de binder de volgende keer weer open te slaan. De balk kan ik later zetten. De zin niet.",
            "De binder van een kind houd ik niet bij als een wedstrijd tegen de mijne. De openbare pagina's van dit karwei zijn mijn checklists. De pagina van een kind mag voor altijd onaf blijven. Groeit daar de langere hobby uit, dan liggen de setlijsten en de soortpagina's klaar. Groeit het niet, dan heeft de binder zijn werk gedaan: kaarten op volgorde, hoezen erom, een middag die van het kind was. Mijn plank is daarbij geen meetlat.",
            "De vragen die ik echt beantwoord, zijn klein. In welk vak gaat deze. Kan deze dubbele een gat sluiten. Mag er gestopt worden. Ja, het genummerde vak. Ja, als de regel leeg is. Ja, stoppen. De grotere meningen houd ik voor me zolang het kind niet vraagt. Een verzameling die zo begint, mag klein blijven en is toch een echte verzameling. Ze heeft een volgorde, een hoes en een volgende lege regel, wanneer iemand haar wil openslaan. Meer vraag ik van een zaterdag niet. Een kaart die er verkeerd uitziet, gaat er niet in zolang ik twijfel. [[Hoe ik een vervalsing herken|/guides/spot-fakes]] is die controle, stil gedaan, met een andere bulkkaart aangeboden op die plek.",
          ],
        },
      ],
      faqs: [
        {
          q: "Met welke binder begint een kind?",
          a: "Ik bied er één aan: ofwel een korte setlijst, ofwel generatie 1 met één kaart per soort, van Bulbasaur tot Mew. Met elke set tegelijk begin ik niet. Eén binder heeft een vanzelfsprekend volgend vak. Twee binders hebben een schoot vol stapels.",
        },
        {
          q: "Heb je zeldzame kaarten nodig voor de binder van een kind?",
          a: "Nee. Gewone kaarten uit de bulk vullen de regels. Een zeldzame kaart mag en is niet het punt van de eerste middag. De hoes en het genummerde vak zijn het punt waarop ik sta.",
        },
      ],
    },
    spotFakesNl,
  ];
}
