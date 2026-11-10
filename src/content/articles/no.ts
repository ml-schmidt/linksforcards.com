import type { ArticleCopy } from "@/lib/articles";
import { spotFakesNo } from "./spot-fakes/no";

export function norwegianArticles(): ArticleCopy[] {
  return [
    {
      slug: "collecting-binders",
      title: "Å samle Pokémon-kort i permer",
      description: "Hvordan jeg samler Pokémon-kort i en settperm og en Pokédex-perm, og hvor kortlistene ligger.",
      h1: "Slik samler jeg Pokémon-kort i permer",
      lede: "Hylla mi har permer, ikke stabler. Ett sett får sin perm, med samlenummer fra første til siste, trenere og energi med. Pokédex får en annen perm, og der spør jeg bare om arten finnes. Denne teksten er kartet over skillet. De korte notatene tar ett spørsmål hver, i den rekkefølgen en kveld hos meg faktisk går: først hvilket oppdrag permen har, så bulken på bordet, og til slutt tallet på kortet når en stabel nekter å bli en rad.",
      diagram: {
        kind: "binders",
        title: "To måter å fylle en perm på",
        description: "En settperm følger samlenumrene. En generasjonsperm har ett kort av hver art i Pokédex-rekkefølge.",
        caption: "Venstre: ett sett, i nummerrekkefølge. Høyre: én art per lomme, i Pokédex-rekkefølge.",
      },
      sections: [
        {
          id: "two-binders",
          heading: "To permer, to oppdrag",
          paragraphs: [
            "En settperm og en generasjonsperm svarer på ulike spørsmål, og jeg blander dem ikke lenger. Settpermen spør om hvert kort i det settet ligger der, i samlenummerrekkefølge, også når kortet er helt vanlig. Generasjonspermen spør om jeg har ett kort av hver art i det Pokédex-intervallet. Et hvilket som helst trykk duger der, og et hvilket som helst språk duger. Da jeg lot én perm gjøre begge jobbene, mistet jeg en manglende common av syne, fordi holoraden så ferdig ut og hullet ble borte i glansen.",
            "Den lange versjonen av sorteringen fra kveld til kveld ligger i [[hvordan jeg ordner en perm|/guides/organize-binder]]. Den korte versjonen skulle jeg ha skrevet ned tidligere: velg oppdraget før sidene blir kjøpt. En side med ni lommer er et rutenett. Den bryr seg ikke om historien på kortet. Det gjør jeg, så rekkefølgen blir bestemt først, og kortene får innordne seg etter den.",
          ],
        },
        {
          id: "set-binder",
          heading: "En settperm følger kortlisten",
          paragraphs: [
            "[[Base|/collections/set/base1]] er eksemplet jeg fortsatt åpner når noen spør hvordan en settperm virker. Settet kom 9. januar 1999, og den offentlige kortlisten har 102 kort. Siden i permen følger den listen: nummer 1, så 2, så 3, med trenere og energi der listen har dem. Finnes kortet på listen, finnes lommen. Jeg lar ikke et hull stå fordi kortet er en common, og jeg flytter ikke en holo fremst bare fordi den glinser.",
            "Hele rekkefølgen på serier og sett ligger i [[Pokémon-sett i rekkefølge|/guides/sets-in-order]]. Den tidslinjen tar jeg frem når en bulkboks blander årstall. Et Jungle-kort hører ikke hjemme i Base-permen, selv om tegningen kjennes som samme år. Settsiden er kortlisten og sjekklisten på én gang. Jeg krysser av en rad først når akkurat det kortet sitter i permen, ikke når jeg har sett det i en stabel på bordet.",
            "En tredje perm følger et tema, ikke et sett og ikke en luke for én art. [[Temapermer|/collections/themes]] samler hvert engelske trykk av en art, en kunstner eller en type kort. [[Alle Pikachu-kort|/collections/themes/pikachu]] er listen jeg åpner når haugen er full av det ansiktet.",
          ],
        },
        {
          id: "dex-binder",
          heading: "En generasjonsperm følger Pokédex",
          paragraphs: [
            "En generasjonsperm rommer ett kort av hver art. [[Generasjon 1|/collections/generation/1]] er de opprinnelige 151. Generasjon 1 til 9 er {species} arter. [[Hvordan jeg fyller en Pokédex-perm|/guides/pokedex-binder]] er det lange notatet om å gjøre det uten å jakte på sjeldne trykk. [[Sjekklisten for generasjon 1|/guides/gen-1-checklist]] blir ved de første 151, for det er den permen folk mener når de sier de opprinnelige skapningene.",
            "[[Pikachu|/pokedex/25]] viser hvorfor regelen trengs. Artsiden lister hvert trykk i det offentlige datagrunnlaget, på tvers av mange sett. Generasjonspermen trenger ett av dem. En Pikachu fra bulken fyller lommen. En senere illustration rare fyller samme lomme. Jeg samler ikke hvert trykk i den permen. Den jobben tilhører settpermen, og bare for det settet jeg faktisk bygger.",
          ],
        },
        {
          id: "bulk",
          heading: "Bulk er det som fyller lommene",
          paragraphs: [
            "De fleste kortene som lukker en rad, kommer fra bulk. Jeg sier det med varme. Bulk er den vanlige haugen: commons, uncommons, dubletter og den Magikarp som dukker opp igjen. [[Hva jeg gjør med bulk|/guides/bulk-cards]] er sorteringen. [[Hvordan jeg leser et kort|/guides/read-a-card]] er hvordan jeg finner samlenummeret og settsymbolet når haugen er blandet og navnet ikke strekker til.",
            "Jeg sorterer på sett før jeg sorterer på skapning. Et kort som passer en åpen rad i en settperm, havner der. En ekstra kopi som passer en tom artsrad, kan flytte til generasjonspermen. Resten blir i bulkboksen til en sjekkliste ber om den, eller til en ferdig perm er klar til å forlate huset. Bulk er altså ikke det som blir igjen etter samlingen. Bulk er haugen som gjør permen ferdig.",
          ],
        },
        {
          id: "tracker",
          heading: "Den offentlige oversikten er en sjekkliste, ikke en butikk",
          paragraphs: [
            "[[Forsiden|/]] er den offentlige tellingen: hvor mange ulike kort som er notert, og hvilke permer som har flyttet seg. [[Samlingene|/collections]] er arbeidslisten. Der ligger settene gruppert etter serie, hver generasjonsperm har en lenke, og hver art har sin egen side. En fylt stolpe betyr at jeg har notert kortet. Den sier ingenting om en salgspris. De offentlige sidene viser aldri en slik.",
            "Når en rad på skjermen og kortet i permen ikke stemmer, vinner permen. Jeg kaller en perm ferdig først etter at jeg har bladd gjennom sidene. Skjermen finnes så jeg ser hullet før jeg glemmer det. Det er hele oversikten. Ingen rute der er en prisliste, og ingen stolpe betyr at kortet er til salgs. Jeg setter et kryss først når jeg har bladd frem til lommen. Et kryss uten blading er en huskelapp, ikke en ferdig perm, og neste økt begynner der krysset mangler.",
          ],
        },
        {
          id: "care-and-kids",
          heading: "Sleeves, barn og en perm som drar",
          paragraphs: [
            "Et kort som skal bo i en perm, får en sleeve først. [[Å beskytte kortene|/guides/protect-cards]] er notatet om sleeves, sider med ni lommer, sider med fire lommer, og hvor jeg ikke setter en perm. Jeg begynte med en boks fra matbutikken og lærte den fuktige hylla den harde veien. Sleeven er steget jeg ikke hopper over, ikke engang for en common som finnes i hver eneste bulkboks.",
            "[[Å samle med et barn|/guides/collecting-with-a-child]] er notatet jeg bruker når et barn setter seg ved bordet. Én perm, ett oppdrag, og lov til å stoppe. [[Å gi bort en ferdig perm|/guides/donating-cards]] er det som skjer når en perm er ferdig og jeg leverer den fra meg. Jeg leverer en ferdig perm, ikke en neve løse ekstra. Den offentlige listen noterer mottaker og dato.",
            "Skulle jeg legge igjen én instruks på en lapp, ville den lyde slik. Velg permen sitt oppdrag. Åpne riktig sjekkliste. Sett en sleeve på kortet som fyller et hull. Kryss av raden først når kortet sitter i lommen. Stopp når bordet blir rotete, og begynn neste økt ved samme hull. Resten av disse notatene er den instruksen, skrevet ut for spørsmålet jeg faktisk får: sidestørrelse, bulk, de 151, hele Pokédex, tallet på kortet, oppbevaring, et barn ved bordet, eller en perm som forlater huset.",
          ],
        },
      ],
      faqs: [
        {
          q: "Trenger jeg både en settperm og en generasjonsperm?",
          a: "Nei. Jeg bruker begge fordi de svarer på ulike spørsmål. Én settperm er en fullstendig måte å begynne på. En generasjonsperm er den andre fullstendige måten. Feilen er å be én perm gjøre begge jobbene.",
        },
        {
          q: "Hvor ligger sjekklistene?",
          a: "Hvert sett har en kortliste, hver generasjon har en sjekkliste, og hver Pokémon har en side med trykkene sine. Samlingssiden lenker til alle tre.",
        },
      ],
    },
    {
      slug: "organize-binder",
      title: "Hvordan jeg ordner en Pokémon-perm",
      description: "Sider med ni lommer og fire lommer, settnummer og Pokédex-rekkefølge, slik jeg faktisk sorterer en perm.",
      h1: "Hvordan jeg ordner en Pokémon-perm",
      lede: "Jeg ordner permen før jeg ordner kortene. Sidestørrelsen og rekkefølgen er hele systemet. Alt annet er et kort som finner lommen jeg allerede har gjort klar. Når de to valgene sitter, kan en rotete kveld likevel slutte med én ferdig side, i stedet for tre stabler som bare ble beundret.",
      diagram: {
        kind: "pockets",
        title: "Ni lommer og fire lommer",
        description: "En side med ni lommer rommer ni kort i et rutenett på tre ganger tre. En side med fire lommer rommer fire større kort.",
        caption: "Ni lommer holder et sett kompakt. Fire lommer gjør hvert kort lettere å se, og permen blir tykk fortere.",
      },
      sections: [
        {
          id: "nine-or-four",
          heading: "Ni lommer eller fire lommer",
          paragraphs: [
            "En side med ni lommer er tre kolonner à tre. Et kort i sleeve får plass. Et sett på omtrent hundre kort blir et dusin sider, en perm jeg kan holde åpen med én hånd. Det er siden jeg bruker til settpermer. [[Paldean Fates|/collections/set/sv4pt5]] er 245 kort i den offentlige listen, så permen med ni lommer er allerede en tykk en. En side med fire lommer ville gjort samme sett til en perm jeg ikke vil bære.",
            "En side med fire lommer er to kolonner à to, og hvert kort sitter større. Den bruker jeg når poenget er å se, ikke å krysse av en lang liste. En generasjonsperm kan gå begge veier. Ni lommer får plass til {species} arter i færre permer. Fire lommer gjør et barns favorittside lettere å finne, og de gjør hylla tyngre. Jeg bestemmer meg før det første kortet går inn. Å flytte et ferdig sett fra én sidestørrelse til en annen er en ettermiddag jeg allerede har brukt én gang, og jeg har ikke tenkt å bruke den igjen. [[Den lange guiden|/guides/collecting-binders]] er grunnen til at de to permoppdragene holdes fra hverandre.",
          ],
        },
        {
          id: "set-order",
          heading: "Rekkefølge etter settnummer",
          paragraphs: [
            "Settrekkefølge er samlenummeret på kortet, matchet mot kortlisten. Nummer 1 er første lomme, også når det ikke er skapningen jeg liker best. Trenere og energi blir der settet la dem. Jeg lager ingen pen side med holo fremst. Den pene siden gjemmer den manglende common.",
            "[[Settene i rekkefølge|/guides/sets-in-order]] forteller hvilken liste et kort hører til. Settsymbolet hjelper meg å bekrefte det. Nummeret er det jeg sorterer på. Deler to kort navn og numrene er ulike, er de ulike rader. Det lærte jeg av promo, som ofte ligger ved siden av et hovedsett og har sin egen telling. De får ikke snike seg inn i hovedlisten bare fordi navnet kjennes kjent.",
          ],
        },
        {
          id: "dex-order",
          heading: "Rekkefølge etter Pokédex-nummer",
          paragraphs: [
            "Pokédex-rekkefølge er artsrekkefølge. [[Generasjon 1|/collections/generation/1]] går fra Bulbasaur til Mew, #001 til #151. Lommen bryr seg ikke om hvilket sett kortet kom fra. En common i sleeve fra et nytt sett fyller #001 like ærlig som et gammelt trykk. [[Notatet om Pokédex-permen|/guides/pokedex-binder]] forklarer hvorfor jeg stopper ved ett kort per art. [[Sjekklisten for generasjon 1|/guides/gen-1-checklist]] er samme idé, avgrenset til de første 151.",
            "Jeg skriver Pokédex-nummeret på en liten lapp i hjørnet av siden bare når siden begynner et nytt hundretall. Jeg merker ikke hver lomme. Sjekklisten på samlingssiden er registeret. Permen er beviset. Blar jeg til #050, skal den lommen være #050, selv om jeg fant kortet en tirsdag og ble glad.",
          ],
        },
        {
          id: "by-type",
          heading: "Sortere etter type, når permen ikke er en sjekkliste",
          paragraphs: [
            "Typen er symbolet oppe til høyre på et Pokémon-kort. [[Hjelpen til kortdatabasen|https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database]] beskriver det slik: energiikonet for Gress, Ild, Vann og resten. Et barn som vil ha hvert vannkort på én side, sorterer etter type. Det bruker jeg til en spillhaug på bordet. Til en settperm bruker jeg det ikke. Listen er nummerert, og en side med én type skjuler nummeret som mangler.",
            "Trenere bærer ikke det typeikonet, og basis-Energy er en egen haug. En slik ettermiddag får de kortene en egen stabel, i stedet for å bli tvunget inn under en skapning. Generasjon er den andre rekkefølgen, et spenn i Pokédex, og det er allerede det [[generasjon 1|/collections/generation/1]] er. Sett, nummer, type og generasjon er fire spørsmål. Jeg tar ett per perm. [[Hvordan jeg leser symbolet|/guides/read-a-card]] er hvordan jeg finner ikonet før jeg stoler på stabelen.",
          ],
        },
        {
          id: "marking-a-line",
          heading: "Hvordan jeg krysser av en rad",
          paragraphs: [
            "[[Samlingene|/collections]] viser en rad som fylt når jeg har notert kortet. Å notere er ikke det samme som å kaste et blikk på en stabel. Jeg legger kortet i sleeven, sleeven i lommen, og så krysser jeg av raden. Krysser jeg av først, lyver oversikten, og permen har et hull.",
            "[[Sleeves og sider|/guides/protect-cards]] kommer før avkrysningen, ikke etter. Et kort som slites blankt i en lomme, er et kort jeg siden må bytte ut, og raden var egentlig aldri ferdig. Når skjermen og permen er uenige, blar jeg. Permen vinner.",
            "En praktisk kveld ser slik ut. Jeg velger én perm og lar den andre være lukket. Jeg legger den matchende stabelen i nummerrekkefølge på bordet, ni kort per rad hvis jeg bruker sider med ni lommer. Jeg sleever hvert kort, skyver det inn, og ser på sjekklisten først etterpå. Kort som ikke hører hjemme i kveldens perm, går tilbake i boksen sin før jeg begynner, så de ikke blir et nytt prosjekt midt på siden. Én side ferdig og satt inn er en bedre kveld enn tre stabler som bare ble beundret. Jeg tenner ikke en lampe til og åpner neste perm bare fordi den første siden gikk fort. Fort er en grunn til å stoppe, ikke til å dra i gang ett prosjekt til.",
          ],
        },
      ],
      faqs: [
        {
          q: "Skal en generasjonsperm ha sider med ni lommer?",
          a: "Jeg bruker ni lommer når målet er å bli ferdig med intervallet. Jeg bruker fire lommer når målet er å se på færre kort, større. Begge er ekte permer. De skal ikke blandes i samme volum.",
        },
        {
          q: "Sorterer jeg et sett etter type eller sjeldenhet?",
          a: "Nei. Jeg sorterer et sett etter samlenummer. Type og sjeldenhet endrer hvordan en side ser ut, og gjemmer kortene som mangler.",
        },
      ],
    },
    {
      slug: "bulk-cards",
      title: "Hva jeg gjør med bulk av Pokémon-kort",
      description: "Bulk fyller permene. Jeg sorterer på sett, deretter på den tomme artsraden, og beholder resten.",
      h1: "Hva jeg gjør med bulk av Pokémon-kort",
      lede: "Bulk er gull. Jeg mener den vanlige haugen: commons, dubletter og kortet som ligger i hver eneste boks. Den haugen er det som gjør en perm ferdig. Ofte begynner det i en boks fra matbutikken. Jeg sorterer på sett, lar ekstrakortene fylle tomme artsrader, og beholder det som blir til overs i stedet for å kalle det søppel.",
      sections: [
        {
          id: "why-bulk",
          heading: "Hvorfor jeg regner bulk som samlingen",
          paragraphs: [
            "En holo er en hyggelig side. Den er ikke et system. Systemet er den tomme raden, og tomme rader er stort sett commons. [[Permguiden|/guides/collecting-binders]] sier det i lang form. Her er den korte formen jeg bruker ved bordet: fyller kortet et hull, er det kortet jeg ville ha, også når tegningen er den samme Magikarp jeg allerede kan utenat.",
            "Jeg sluttet å unnskylde bulk den dagen en generasjonsperm beveget seg raskere ut av en blandet boks enn ut av noe jeg hadde lagt til side som spesielt. Spesielle kort kan vente i en sleeve. Sjekklisten venter ikke på dem. [[Å samle med et barn|/guides/collecting-with-a-child]] bruker samme haug, for et barn kan holde en common, velge en lomme og se raden lukke seg. Det er et ekte fremskritt, ikke en trøstepremie.",
            "Noen temalister er nesten bare denne haugen. [[Yuka Moriis leirekort|/collections/themes/yuka-morii]] er vanlige kort, og der er bulk gull. [[Temapermer|/collections/themes]] er stedet der de sjekklistene ligger.",
          ],
        },
        {
          id: "sort-by-set",
          heading: "Sorter på sett først",
          paragraphs: [
            "Jeg heller ut boksen bare så langt at bordet fortsatt er greit. Så sorterer jeg på sett, ikke på skapning og ikke på glans. [[Hvordan jeg leser nummeret og symbolet|/guides/read-a-card]] er delen jeg gjør med hendene: finn samlenummeret, bekreft settet, lag en stabel. En stabel for Base, en stabel for et moderne sett, en stabel jeg ikke kan plassere ennå.",
            "Hver stabel går til settsiden på [[samlingene|/collections]]. Siden er kortlisten. Er raden åpen, går kortet inn i den permen. Er raden fylt, er kortet en dublett og blir i bulk. Jeg tar ikke frem dubletter for å beundre dem før de åpne radene i den stabelen er ferdige. Beundring er slik en halvsortert boks varer en måned. En stabel jeg ikke kan plassere, får ligge for seg selv til symbolet og nummeret har fått en rolig titt. Den stabelen er ikke et nederlag. Den venter på neste økt, og den skal ikke helles tilbake i boksen bare fordi kvelden ble sen.",
          ],
        },
        {
          id: "species-lines",
          heading: "Så den tomme artsraden",
          paragraphs: [
            "En dublett for et sett kan fortsatt være første eksemplar av den arten i en generasjonsperm. [[Pokédex-permen|/guides/pokedex-binder]] trenger bare ett. [[Magikarp|/pokedex/129]] er eksemplet jeg stoler på, for bulk fortsetter å tilby en til. Er #129 tom, forlater neste Magikarp boksen og fyller lommen. Er #129 fylt, går kortet tilbake.",
            "Et hvilket som helst språk teller på en artsrad. Et kort trykt med et annet navn viser likevel samme art på artsiden, for siden følger det nasjonale Pokédex-nummeret. Jeg sjekker nummeret når navnet på kortet ikke er det engelske navnet jeg har lært meg. Navnet får være ulikt. Nummeret får ikke gjettes. Jeg skriver ikke artens navn på boksen som en snarvei. Nummeret på kortet og nummeret i Pokédex skal være samme tall før kortet forlater bulk.",
          ],
        },
        {
          id: "extras",
          heading: "Hva som skjer med ekstrakortene",
          paragraphs: [
            "Ekstrakort blir i en boks merket med settet, eller i én blandet boks når stabelen er liten. De er ikke søppel. Neste perm trenger ofte kortet jeg nesten ga opp. Jeg holder dem tørre, i en sleeve hvis hjørnet allerede er mykt, og ikke på gulvet. Et mykt hjørne som får ligge løst en uke til, er et hjørne jeg siden må finne en erstatning for, så sleeven går på samme kveld som jeg oppdager det.",
            "Når en perm er ferdig, endrer historien seg. [[En ferdig perm kan forlate huset|/guides/donating-cards]] og gå til et barn. Løse ekstrakort følger ikke med. De blir og fyller neste perm. Det skillet gjør gaven hel og holder sjekklisten ærlig.",
            "Selve boksen får en kjedelig etikett: settets navn, eller «blandet» hvis jeg ikke har delt den ennå. Jeg merker ikke en boks med et gjett om hva kortene kunne bli solgt for. Jeg har ingen egen boks for «bra» kort og en dunk for «søppel». Det skillet er slik commons forsvinner og hull står åpne. Én gang i måneden tar jeg den blandede boksen, kjører settsorteringen igjen og krymper den. Målet er en mindre spørsmålsstabel, ikke en penere utstilling. Et kort jeg ikke stoler på, fyller ingen rad. [[Å kjenne igjen en forfalskning|/guides/spot-fakes]] er et eget notat. Bulkesken er stedet for de vanlige ekte kortene, og det er de jeg vil ha.",
          ],
        },
      ],
      faqs: [
        {
          q: "Skal jeg kaste dubletter av commons?",
          a: "Det gjør jeg ikke. En dublett i ett sett er ofte den manglende arten i en annen perm. Jeg legger dem i bokser etter sett til en sjekkliste ber om dem. Neste perm pleier å være nærmere enn en ny haug med poser.",
        },
        {
          q: "Sorterer jeg bulk etter sjeldenhet først?",
          a: "Nei. Sjeldenhetsmerker har endret seg gjennom årene, og de forteller ikke hvilken rad som er tom. Samlenummeret gjør det. Jeg kan sortere en hel boks uten å avgjøre om et merke betyr noe.",
        },
      ],
    },
    {
      slug: "pokedex-binder",
      title: "Hvordan jeg fyller en Pokédex-perm",
      description: "Ett kort av hver art, fra #001 til slutten av generasjon 9, fylt fra bulk.",
      h1: "Hvordan jeg fyller en Pokédex-perm",
      lede: "En Pokédex-perm er ett kort av hver art. Generasjon 1 til 9 er {species} arter. Jeg fyller den fra bulk, i Pokédex-rekkefølge, og jakter ikke på et trykk sjekklisten ikke ber om. Budsjettet er bulken jeg allerede har, pluss en sleeve og en lomme for hvert kort som lukker et hull.",
      sections: [
        {
          id: "one-card",
          heading: "Ett kort av hver art",
          paragraphs: [
            "Regelen er liten, og den redder meg. Ett kort. Et hvilket som helst sett. Et hvilket som helst språk. En hvilken som helst sjeldenhet. [[Den lange permguiden|/guides/collecting-binders]] skiller denne jobben fra settpermen, der hvert kort på listen har en lomme. Her er skapningen lommen. En andre Pikachu er en dublett selv når tegningen er ny.",
            "Jeg begynte vanen med [[Bulbasaur|/pokedex/1]]. Artsiden lister trykkene. Permen trenger ett av dem. Jeg la den første Bulbasaur i sleeve som jeg allerede eide, i #001, og sluttet å lete etter en bedre #001. Bedre er en annen hobby. Denne hobbyen er intervallet, fra første nummer til siste, med én skapning på hver rad.",
            "En artsside lister hvert trykk, og Pokédex-permen trenger fortsatt bare ett av dem. [[Alle Pikachu-kort|/collections/themes/pikachu]] holder hvert Pikachu-trykk som en egen sjekkliste. [[Temapermer|/collections/themes]] ligger ved siden av generasjonene når jeg vil se hele rekken av ett ansikt.",
          ],
        },
        {
          id: "the-range",
          heading: "De {species}, generasjon for generasjon",
          paragraphs: [
            "Jeg åpner ikke én kjempeperm og kaller den ferdig. Jeg bygger generasjon for generasjon, fordi [[samlingene|/collections]] allerede er delt slik, og fordi en generasjon er en bok jeg kan bli ferdig med. Generasjon 1 er 151. Generasjon 2 er de neste 100. De senere generasjonene ligger på samme nav, hver med egen sjekkliste og egen telling.",
            "[[Generasjon 1|/collections/generation/1]] er den jeg sier at folk skal bli ferdige med først, og [[notatet om generasjon 1|/guides/gen-1-checklist]] ligger ved siden av. Skapningene er kjente, bulkboksene er fulle av dem, og 151 er et tall jeg kan holde i hodet. Etter det er generasjon 5 den lange og generasjon 6 den korte. Jeg lar sjekklisten si det. Jeg pugger ikke tellingene.",
          ],
        },
        {
          id: "from-bulk",
          heading: "Fyll den fra bulk",
          paragraphs: [
            "[[Bulk|/guides/bulk-cards]] er lageret. Jeg er bevisst på det valget. En sjelden illustrasjon er velkommen når det er kortet jeg allerede har. Den er ikke et krav. Å vente på et favoritttrykk er slik en Pokédex-perm blir stående på de samme tjue hullene i et år.",
            "Den praktiske gjennomgangen er kjedelig, og den virker. Jeg tar én generasjonssjekkliste. Jeg går gjennom bulkboksen med hullene i hodet. Jeg sleever kortet som fyller et hull. Jeg putter det i lommen. Jeg krysser av raden. Så stopper jeg, selv om boksen fortsatt ser interessant ut. Jeg tar ikke med meg hele boksen til sofaen. Sjekklisten ligger på bordet, hullene er få nok til å huske under en gjennomgang, og kort som ikke fyller noen av dem, går tilbake før jeg rekker å bli begeistret. [[Hvordan jeg ordner sidene|/guides/organize-binder]] er valget av sidestørrelse. Ni lommer er det jeg bruker når målet er å se intervallet bli ferdig.",
          ],
        },
        {
          id: "when-it-is-done",
          heading: "Når jeg kaller den ferdig",
          paragraphs: [
            "En generasjon er ferdig når hver artsrad har et kort i permen og jeg har bladd gjennom sidene for å bevise det. Skjermen kan si at radene er fylt. Jeg blar likevel. Et kort som er notert og deretter lagt i en skoeske, ligger ikke i permen.",
            "Jeg oppgraderer ikke en ferdig generasjon for sportens skyld. Hvis et senere kort får meg til å smile, kan det bytte ut det som sitter i lommen, og det gamle vender tilbake til bulk. Raden forblir fylt uansett. Poenget var aldri den mest imponerende kopien. Poenget var skapningen, på plass, i rekkefølge, der en person kan bla frem til den.",
            "Et budsjett, for denne permen, betyr at jeg bruker oppmerksomhet i stedet for å jakte på en bestemt kopi. De fleste kortene som trengs, eier jeg allerede inne i usortert bulk. Kostnaden som betyr noe, er sleeven og siden, som jeg kjøper i vanlige pakker og bruker på commons uten å spare dem. Jeg har en blyantliste over hullene bare når jeg er borte fra skjermen. Hjemme er generasjonssiden listen. Har et hull stått tomt i måneder, er det fordi den arten er sjelden i boksene mine, ikke fordi jeg venter på et sjeldnere bilde av en art jeg allerede kunne ha arkivert. Byttet jeg ut et kort, skriver jeg ikke en ny historie om raden. Den var fylt, den er fylt, og det gamle kortet er bulk igjen med samme jobb som før: å vente på et annet hull.",
          ],
        },
      ],
      faqs: [
        {
          q: "Trenger Pokédex-permen hvert trykk av en Pokémon?",
          a: "Nei. Ett kort av hver art er hele regelen. Hvert trykk hører hjemme på artsiden, ikke i denne permen.",
        },
        {
          q: "Hvilken generasjon skal jeg bli ferdig med først?",
          a: "Jeg begynner med generasjon 1, de opprinnelige 151. Kortene er vanlige i bulk, og sjekklisten er kort nok til å bli ferdig med. Deretter tar jeg neste generasjon på navet, ikke et tilfeldig hull midt i Pokédex.",
        },
      ],
    },
    {
      slug: "gen-1-checklist",
      title: "Sjekkliste for generasjon 1: alle 151",
      description: "Hvordan jeg samler de opprinnelige 151 Pokémon i én perm, med generasjonssjekklisten og kortlisten for Base.",
      h1: "Sjekkliste for generasjon 1: alle 151 opprinnelige Pokémon",
      lede: "Generasjon 1 er 151 arter, #001 Bulbasaur til #151 Mew. Jeg samler dem som én perm: ett kort av hver, fra et hvilket som helst sett. Sjekklisten er generasjonssiden, og Base er der mange av de kjente navnene begynner. De to listene har ikke samme antall, og å holde dem fra hverandre er hele knepet.",
      sections: [
        {
          id: "the-151",
          heading: "Hva de 151 betyr",
          paragraphs: [
            "De 151 er et Pokédex-intervall, ikke ett enkelt produkt. [[Generasjon 1|/collections/generation/1]] lister hver art i det intervallet, med noen av settene der hver av dem forekommer. Den siden er sjekklisten jeg bruker. Den er ikke det samme som Base, som er 102 kort og inneholder trenere og energi. Folk blander de to tallene. Jeg holder dem fra hverandre så permen får riktig antall lommer. Leter du etter 2023-settet som heter [[151|/collections/set/sv3pt5]]? Det er en annen liste.",
            "[[Notatet om Pokédex-permen|/guides/pokedex-binder]] er samme metode for alle {species} arter. Dette notatet blir ved den første boken, for de opprinnelige 151 er permen jeg oftest får spørsmål om. [[Den lange guiden|/guides/collecting-binders]] forklarer hvorfor dette er en generasjonsperm og ikke en settperm. En produktboks med «151» på lokket er ikke automatisk denne sjekklisten.",
          ],
        },
        {
          id: "where-they-appear",
          heading: "Hvor de opprinnelige 151 dukker opp",
          paragraphs: [
            "En art fra Kanto kan finnes i Base-tiden og igjen i et sett som kom tiår senere. [[Pikachu|/pokedex/25]] er den åpenbare. [[Charizard|/pokedex/6]] er den andre. Artsiden lister trykkene. Et hvilket som helst av dem fyller lommen. Jeg trenger ikke den eldste kopien, og jeg trenger ikke den nyeste.",
            "[[Sett i rekkefølge|/guides/sets-in-order]] hjelper når jeg med vilje vil ha de gamle. [[Base-serien|/collections/series/base]] er Base, Jungle, Fossil og settene rundt dem. Bygger jeg en settperm av Base, er det et annet prosjekt med 102 lommer. Kort fra det prosjektet kan også fylle en generasjonslomme, én gang, hvis artsraden er tom. Jeg plukker ikke fra hverandre en settperm for å pynte generasjonspermen. Ekstrakopien gjør den jobben. Charizard er lett å behandle som et unntak. Det er den ikke. Lommen vil ha arten, og en common fra et senere sett lukker #006 like ærlig som et kort jeg har sett på i tjue år.",
          ],
        },
        {
          id: "base-set",
          heading: "Base er en liste, ikke hele de 151",
          paragraphs: [
            "[[Base|/collections/set/base1]] har 102 kort. En del av de opprinnelige 151 står ikke på den listen. Senere sett fra Base-tiden legger til flere av dem. En generasjonsperm venter ikke på de eldre settene. En moderne common av en manglende art er en ferdig rad.",
            "Jeg åpner likevel gjerne Base-listen, for samlenumrene er slik jeg lærte å lese et kort. Nummerrekkefølge, så navnet, så settsymbolet som kontroll. Når en bulkboks påstår å være «alle originalene», stoler jeg ikke på påstanden. Jeg stoler på generasjonssiden og på kortene i hånden. Mangler en art i hånden, er raden tom, uansett hva lokket lovet. Trenere og energi i Base teller med i de 102 og teller ikke med i de 151. Den forskjellen er hele grunnen til at jeg har to bokmerker og ikke ett.",
          ],
        },
        {
          id: "one-line",
          heading: "Én rad om gangen",
          paragraphs: [
            "Jeg jobber sjekklisten fra #001 og nedover bare når jeg er i tålmodig humør. Oftere tar jeg neste tomme rad boksen kan fylle. Rekkefølgen i permen forblir numerisk selv når rekkefølgen jeg finner kortene i, ikke er det. Lomme #050 flytter ikke fremst fordi jeg fant den en tirsdag.",
            "En rad er ferdig når kortet har en sleeve, sitter i lommen og er notert. Så ser jeg på neste hull. Ett hundre og femtién er mange ettermiddager og samtidig ingen gåte. Bulk fra nesten en hvilken som helst tid har Kanto-skapninger i seg. Arbeidet er å matche, ikke å ønske.",
            "Jeg har generasjonssiden åpen ved siden av boksen og krysser ingenting av i hodet. Skapningene jeg tror jeg eier, er ikke alltid de som sitter i permen. Mew og starterradene er de folk antar er ferdige. Jeg sjekker dem likevel. En perm som mangler #001 fordi Bulbasaur fortsatt ligger uten sleeve i en boks, er ikke ferdige 151, selv om resten av sidene ser fulle ut. De siste ti hullene tar som regel lenger tid enn de første femti, og det er normalt. Det er arter boksene mine tilfeldigvis mangler, så jeg lar dem stå tomme i stedet for å finne på et erstatningskort. Jeg lar ikke en full side lenger frem lure meg til å hoppe over et hull jeg allerede har passert. Bladingen går bakover like gjerne som fremover.",
          ],
        },
      ],
      faqs: [
        {
          q: "Er Base det samme som alle 151?",
          a: "Nei. Base er ett sett, med 102 kort i den offentlige listen. De 151 er hver art fra Bulbasaur til Mew, fra et hvilket som helst sett. Jeg har begge sidene bokmerket så tallene ikke blir blandet.",
        },
        {
          q: "Trenger jeg et first edition-kort til generasjon 1-permen?",
          a: "Nei. Et hvilket som helst trykk av den arten fyller lommen. Et first edition hører hjemme i en settperm hvis det settets liste inneholder det.",
        },
      ],
    },
    {
      slug: "read-a-card",
      title: "Hvordan jeg leser nummer og settsymbol",
      description: "Hvordan jeg finner samlenummeret, settsymbolet og sjeldenhetsmerket så en bulkhaug kan sorteres.",
      h1: "Hvordan jeg leser et Pokémon-kort",
      lede: "Jeg leser et kort i samme rekkefølge hver gang: navn, samlenummer, settsymbol, og så sjeldenhetsmerket hvis jeg fortsatt trenger det. Den rekkefølgen gjør en blandet bulkhaug til stabler jeg kan arkivere. Nummeret matcher settets kortliste. Symbolet hindrer to tider i å havne i samme stabel.",
      diagram: {
        kind: "card",
        title: "Hvor jeg ser på et kort",
        description: "En enkel omriss av et kort med navnet, samlenummeret, settsymbolet og sjeldenhetsmerket. Ingen offisiell kortillustrasjon.",
        caption: "Jeg matcher samlenummeret mot kortlisten. Symbolet og sjeldenhetsmerket hjelper meg bare å bekrefte settet.",
      },
      sections: [
        {
          id: "the-number",
          heading: "Samlenummeret er sorteringsnøkkelen",
          paragraphs: [
            "Samlenummeret er brøken eller paret som er trykt på kortet, for eksempel 4/102. Første tallet er kortets plass i det settet. Andre tallet er hvor mange kort settet telte i den nummereringen. [[Base|/collections/set/base1]] er settet jeg bruker for å lære bort dette, for 102 er antallet på listen jeg publiserer fra det offentlige datagrunnlaget. Står det 4 på kortet og listens kort 4 har samme navn, har jeg et treff.",
            "Promo og spesialsett bruker noen ganger en bokstav, en annen totalsum eller et nummer som ikke ligner hovedsettet ved siden av. Jeg tvinger dem ikke inn i hovedsettets rekkefølge. Jeg finner listen som bruker akkurat den nummereringen. [[Tidslinjen over sett|/guides/sets-in-order]] er slik jeg husker at promo ligger inntil en tid uten å være tidens hovedliste. Feil liste gir et hull i to permer på én gang. Andre tallet i brøken er et spor, ikke et løfte om at jeg kan gjette settet ut fra det alene. Flere sett har telt omtrent like mange kort. Symbolet får avgjøre hvilken liste som er åpen.",
          ],
        },
        {
          id: "the-symbol",
          heading: "Settsymbolet bekrefter stabelen",
          paragraphs: [
            "Settsymbolet er det lille merket, som regel langs bildets høyre kant eller like under det, avhengig av tiden. Det skifter med hvert sett. Jeg prøver ikke å pugge hele historien av merker. Jeg bruker symbolet for å hindre to stabler i å smelte sammen når numrene kunne høre til mer enn én liste.",
            "Når symbolet og nummeret ikke stemmer med navnet jeg ventet, sier kortet sannheten og hukommelsen gjør det ikke. Jeg slår opp nummeret på settsiden. [[Pikachu|/pokedex/25]] er en god påminnelse om at ett navn kan bo i mange sett, hvert med eget nummer. Navnet alene er ingen sorteringsnøkkel. To Pikachu med ulike nummer er to rader, selv om begge smiler likt.",
          ],
        },
        {
          id: "rarity",
          heading: "Sjeldenhetsmerker er en svak sortering",
          paragraphs: [
            "En sirkel, en diamant og en stjerne har alle vært trykt på kort, og betydningen forskjøv seg da spillet la til sjeldenheter. Jeg holder ingen privat tabell over hva hvert merke betydde hvert år. Tabellen ville blitt lenger enn sorteringen, og den ville likevel ikke fortalt hvilken sjekklisterad som er tom.",
            "Jeg kaster et blikk på merket bare for å dele en stabel i «lett å sleeve» og «jeg ser to ganger før det går i en lomme». Det er trygghet, ikke katalogisering. [[Å sortere bulk|/guides/bulk-cards]] holder seg til nummeret. Sjeldenhet er hvordan en side ser ut. Nummeret er hvordan en perm blir ferdig. Et matt merke og et glinsende kort kan sitte i samme sett. Jeg lar ikke glansen starte en egen stabel før nummeret er lest.",
          ],
        },
        {
          id: "regulation",
          heading: "Reguleringsmerket er en formatbokstav",
          paragraphs: [
            "På kort trykt fra 2020 bruker Play! Pokémon et reguleringsmerke: en bokstav nede til venstre. [[Reglene for Play! Pokémon|https://play.pokemon.com/en-us/resources/rules/]] sier at Standard roterer etter den bokstaven. Eldre kort har ingen bokstav. Et kort med en eldre bokstav, eller uten bokstav, kan likevel være lovlig hvis det samme kortet er trykt på nytt med en aktuell bokstav. De tillatte bokstavene skifter. Jeg pugger ikke dagens liste i en perm, og jeg sorterer ikke etter bokstaven.",
            "Bokstaven er ikke samlenummeret, og den er ikke sjeldenhetstegnet. [[Hjelpen til kortdatabasen|https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database]] legger sjeldenhetstegnet i nedre høyre hjørne, ved utvidelsessymbolet. Jeg ser på bokstaven bare når noen spør om et kort kan spilles i et aktuelt arrangement. For permen avgjør nummeret fortsatt lommen. Et kort jeg ikke stoler på, når aldri den lommen. Det er [[hvordan jeg kjenner igjen en forfalskning|/guides/spot-fakes]].",
          ],
        },
        {
          id: "in-practice",
          heading: "En gjennomgang av en blandet haug",
          paragraphs: [
            "Jeg plukker opp et kort. Jeg leser navnet høyt hvis haugen er rotete, for øynene hopper når jeg går for fort. Jeg finner samlenummeret. Jeg sjekker symbolet mot stabelen jeg tror det hører til. Jeg slipper det på den stabelen. Kan jeg ikke plassere det på noen sekunder, går det til en spørsmålsstabel, ikke tilbake i blandingen.",
            "Spørsmålsstabelen får en roligere gjennomgang med [[samlingene|/collections]] åpne. [[Permguiden|/guides/collecting-binders]] er det jeg mater: settrader først, artsrader etterpå. Et kort jeg ikke kan identifisere, får likevel en sleeve hvis hjørnet er mykt. Identifiseringen kan vente en time. Et bøyd hjørne blir verre mens jeg nøler. Spørsmålsstabelen får et navn på en lapp, og den settes ikke under en tyngre boks. Neste rolige gjennomgang skal kunne finne den uten å begynne på nytt fra hele haugen.",
            "Språket på kortet kan sinke gjennomgangen, og det er greit. Det engelske navnet i datagrunnlaget er det kortlisten bruker. Et kort trykt på et annet språk har fortsatt et samlenummer og et settsymbol. Jeg matcher dem, og leser deretter artsiden hvis jeg vil ha det lokale navnet. Jeg bygger ikke en egen perm per språk. Én kortliste, én nummerrekkefølge. Navnet på kortet får skille seg fra navnet på skjermen.",
          ],
        },
      ],
      faqs: [
        {
          q: "Hva gjør jeg hvis kortet mangler en brøk?",
          a: "Jeg behandler det som en promo eller et spesialtrykk og leter etter en liste med den typen nummer. Jeg finner ikke på en plass til det i hovedsettet. Spørsmålsstabelen er der det venter.",
        },
        {
          q: "Skal jeg sortere etter sjeldenhetssymbolet?",
          a: "Det gjør jeg ikke. Symbolet har endret seg over tid. Samlenummeret matcher kortlisten. En glans på kortet kan vente til stabelen allerede ligger i riktig sett.",
        },
      ],
    },
    {
      slug: "protect-cards",
      title: "Å beskytte Pokémon-kort uten styr",
      description: "Sleeves, permsider og vanlig oppbevaring for en samling som blir åpnet, også et barns perm.",
      h1: "Å beskytte Pokémon-kort uten styr",
      lede: "Jeg beskytter kort på den billigste måten som fortsatt lar meg åpne permen. En myk sleeve, en side med lommer og en hylle som holdes tørr. Det er hele planen. Jeg bruker den på commons, for en common er ofte kortet som lukker en rad. En perm jeg ikke åpner, er ikke en samling jeg holder i live.",
      sections: [
        {
          id: "sleeve-first",
          heading: "En sleeve før en lomme",
          paragraphs: [
            "Sleeven er en tynn klar lomme for ett kort. Jeg setter den på før kortet noensinne ser en permside. Permsider sliter. Sleeves tar den slitasjen i stedet. Jeg kjøper de enkle i en bunke og sparer dem ikke til holo. En common med et hvitnet hjørne er fortsatt et hull i en sjekkliste, og å erstatte den er en dårligere ettermiddag enn å sleeve den nå. Jeg kjøper sleeves i den størrelsen som faktisk passer et Pokémon-kort, ikke en pose som er nesten riktig. Nesten riktig bøyer hjørnet den skulle beskytte.",
            "Jeg presser sleeven så kortet ligger flatt, og jeg slikker den ikke, teiper den ikke og dobbeltsleever ikke en bulk-common som et ritual. Doble sleeves er til et kort som reiser. Hverdagskortet får én sleeve. [[Permguiden|/guides/collecting-binders]] regner med at det steget allerede er gjort. Et notert kort med bar overflate er et kort jeg noterte for tidlig.",
          ],
        },
        {
          id: "pages",
          heading: "Permsider som rommer et kort i sleeve",
          paragraphs: [
            "[[Sider med ni lommer og fire lommer|/guides/organize-binder]] er valget. Lommen må ta imot en sleeve uten å bøye kortet. Må jeg tvinge, er siden feil. Jeg bytter en ødelagt lomme i stedet for å håpe at riften blir der den er. En ødelagt lomme spiser hjørner.",
            "Ringpermer duger når ringene ikke trykker på kortene. Jeg hindrer ringene i å ligge på en side ved å ikke overfylle permen. En D-ring som lukker rent, er snillere enn en perm som er stappet til permene slår seg. Jeg starter heller en andre perm enn å bøye siste side i den første.",
          ],
        },
        {
          id: "storage",
          heading: "Hvor permene bor",
          paragraphs: [
            "Stående på en hylle, eller liggende hvis permen er tynn, borte fra et vindu og borte fra en fuktig yttervegg. Jeg oppbevarer ikke permer i en kjellerboks, et varmt loft eller bagasjerommet i en bil. Varme bøyer en sleeve. Fukt flekker en side. Sol bleker trykk. Ingenting av det synes samme dag. Det synes når jeg åpner permen en sommer senere. En perm som lener seg mot en varm radiator, får samme behandling som loftet: den flyttes. Tørt og svalt holder, og jeg kjenner på hylla med hånden hvis jeg er usikker en kald morgen.",
            "Bulk som ikke sitter i en perm, bor i en tørr boks, stablet så kortene ikke bøyes av noe tyngre. Jeg holder mat og drikke borte fra det bordet. Det høres pirkete ut til appelsinjuice er inne i en sleeve. [[Samlingene|/collections]] kan bygges opp igjen fra kortene. En sammenklebet stabel kan det ikke.",
          ],
        },
        {
          id: "toploader",
          heading: "En toploader er til reisen",
          paragraphs: [
            "En toploader er et stivt plastfutteral. Jeg tar et når et kort forlater huset: en perm på vei til et barn, eller ett enkelt kort i en pakke. Den er tykkere enn en permside vil, så den blir utenfor nisiden. Hjemme bor kortet i en myk sleeve, i lommen. Et hardt futteral på hver common ville gitt en perm jeg ikke åpner, og å åpne den er poenget.",
            "Jeg teiper ikke et kort fast i en toploader. Har jeg ingen, slår den myke sleeven og en flat eske fortsatt et bøyd hjørne. [[Permguiden|/guides/collecting-binders]] regner allerede med den myke sleeven. Den stive er unntaket, til reisen, ikke til hverdagssiden.",
          ],
        },
        {
          id: "kids",
          heading: "Et barns samling",
          paragraphs: [
            "[[En perm med et barn|/guides/collecting-with-a-child]] begynner med sleeves og en perm barnet kan åpne, ikke med et stivt futteral for hver common. Jeg vil at barnet blar. Et kort som aldri åpnes, kan forbli perfekt og samtidig slutte å være en del av ettermiddagen. Sleeves er kompromisset jeg stoler på. Barnet får åpne permen selv. Jeg står ikke og holder i den som om sidene var en utstilling. Sleeven er allerede på. Resten er blading.",
            "Når en ferdig perm [[forlater huset til et barn|/guides/donating-cards]], drar den med sleeves på, i sider, med ringer som virker. Jeg leverer ikke løse kort og kaller det samme gave. Sleeven er en del av permen. Den er også delen som tåler å bli litt hardhendt behandlet, og det er det en god perm er til.",
            "Jeg bytter sider når plasten blir uklar eller sømmen i lommen sprekker. Jeg reparerer ikke en søm med teip på kortsiden. Teip er slik et kort får en klissete kant. En ny side er reparasjonen. Den gamle siden, hvis resten er hel, kan holde lapper eller sjekklister, ikke kort. Én gang i året åpner jeg hver perm langt nok til å se de bakerste sidene, for det er der en skjev lomme gjemmer seg. Den gjennomgangen har reddet flere kort enn noe spesialfutteral jeg har vurdert og ikke kjøpt.",
          ],
        },
      ],
      faqs: [
        {
          q: "Trenger commons sleeves?",
          a: "I permene mine, ja. En common er ofte kortet som fyller raden. Jeg sleever det før det går i en lomme. Et hvitnet hjørne er vanskeligere å reparere enn en sleeve er å sette på.",
        },
        {
          q: "Er en toploader standarden?",
          a: "Nei. En hard sleeve er det jeg bruker når et kort reiser. Permen hjemme bruker en myk sleeve og en side med lommer. Et hardt futteral for hver common ville gjort permen til noe jeg ikke åpner.",
        },
      ],
    },
    {
      slug: "donating-cards",
      title: "Å gi bort Pokémon-kort til barn",
      description: "Jeg leverer en ferdig perm til et barn, via en avdeling, et botilbud eller en fritidsklubb, og skriver opp dagen.",
      h1: "Å gi bort Pokémon-kort til barn",
      lede: "Jeg gir bort Pokémon-kort ved å levere fra meg en ferdig perm. En sykehusavdeling, et botilbud eller en fritidsklubb kan være stedet den havner. Løs bulk blir her og fyller neste perm. Jeg spør stedet først, skriver opp dagen permen drar, og publiserer ingen salgspris. Er svaret ikke ennå, blir permen på hylla og den offentlige listen forblir uendret. En plan er ingen overlevering. Jeg venter heller enn å notere en gave som ikke har forlatt hendene mine.",
      sections: [
        {
          id: "finished",
          heading: "Bare en perm jeg har gjort ferdig",
          paragraphs: [
            "En halvfull perm er et prosjekt. En ferdig perm er noe jeg kan legge i andres hender uten en unnskyldning. Jeg blar gjennom sidene før den drar. Hver lomme sjekklisten ba om, har et kort. [[Den lange guiden|/guides/collecting-binders]] er grunnen til at den listen finnes. Jeg vil ikke at et barn arver hullene mine.",
            "Permen har sleeves, for [[beskyttelsen|/guides/protect-cards]] er en del av gaven og ikke en privat smak. Ringene lukker. Sidene er ikke ødelagte. Er en lomme sliten, bytter jeg siden før overleveringen. Det er vanlig omsorg, ikke en seremoni. Jeg teller lommene mot sjekklisten en siste gang ved bordet, ikke i døra. Mangler et kort, går permen tilbake på hylla samme kveld. En unnskyldning i resepsjonen gjør ikke hullet mindre.",
          ],
        },
        {
          id: "where",
          heading: "Avdelinger, botilbud og fritidsklubber",
          paragraphs: [
            "Jeg spør stedet hva de faktisk kan bruke. En barneavdeling, et lekerom på et botilbud og en fritidsklubb vil ikke alle det samme, og noen kan ikke ta imot kort i det hele tatt. Jeg hører heller nei enn å legge igjen en perm i en resepsjon som ikke har bedt om den. Personen som jobber der, kjenner rommet. Jeg kjenner permen. Jeg spør også hvordan de vil ta imot den: om noen møter meg, om permen skal være merket, og om kort i det hele tatt er velkomne denne måneden. Rommet bestemmer. Jeg tilpasser permen etter det, ikke omvendt.",
            "Jeg gjør ikke overleveringen til en tale om å samle. Permen er hele presentasjonen. Vil et barn vite rekkefølgen, finnes rekkefølgen i sidene: et sett i nummerrekkefølge, eller en generasjon i Pokédex-rekkefølge. [[Å samle med et barn|/guides/collecting-with-a-child]] er hvordan jeg oppfører meg når jeg er den voksne ved bordet. Samme oppførsel gjelder når jeg bare er personen som kom med permen.",
          ],
        },
        {
          id: "public-list",
          heading: "Hva den offentlige listen viser",
          paragraphs: [
            "[[Listen over det som er gitt bort|/donations]] noterer mottaker og dato. Den noterer ingen salgspris, og den noterer ikke hva et kort ville blitt solgt for. En perm som forlater huset, er et faktum om prosjektet. Det er ingen verdivurdering.",
            "[[Samlingene|/collections]] viser fortsatt sjekklisten de kortene kom fra. Når jeg har merket permen som gitt bort, slutter jeg å behandle de radene som hull jeg må fylle igjen, med mindre jeg har valgt å bygge den permen en gang til. Skjermen skal stemme med hylla. En fraværende perm skal ikke se ut som en perm jeg glemte å begynne på.",
          ],
        },
        {
          id: "spares",
          heading: "Ekstrakort blir i rekken",
          paragraphs: [
            "[[Bulk|/guides/bulk-cards]] er hvordan neste perm blir ferdig. Ekstrakort går ikke ut som en løs neve ved siden av gaven. En løs neve ser raus ut og kommer frem som lekser. Jeg beholder ekstrakortene, sorterer dem og lar dem lukke ekte rader.",
            "Har du ekstrakort til den sorteringen, skriv til [[magnus@linksforcards.com|mailto:magnus@linksforcards.com]]. Fortell hva som ligger i boksen på vanlig norsk: sett du kjenner igjen, eller bare bulk. Jeg gjør sorteringen. Butikker som sender kort, takkes med navn på takkesiden. Det er hele opplegget. En boks som kommer inn, får samme settsortering som min egen bulk. Jeg lover ikke en ferdig perm en bestemt uke. Jeg lover at kortene havner i lommer når en rad faktisk er tom.",
            "Jeg skriver opp overleveringen samme dag den skjer, ikke i slutten av måneden. Mottakeren kan være navnet på en avdeling eller en klubb hvis et barns navn ikke er mitt å publisere. Datoen er dagen permen forlot hendene mine. Ber et sted meg vente, blir permen på hylla og listen forblir uendret. Jeg er heller treg enn å finne på en gave som ikke har skjedd. En perm som fortsatt står i huset mitt, er ikke en perm jeg har gitt bort, hvor sikker jeg enn er på planen.",
          ],
        },
      ],
      faqs: [
        {
          q: "Tar du imot løs bulk?",
          a: "Ja. Løs bulk er velkommen. Jeg sorterer den inn i permer. Jeg gir ikke videre løs bulk som gaven. En ferdig perm er det som drar, og ekstrakortene blir for å fylle den neste.",
        },
        {
          q: "Viser de offentlige sidene en salgspris?",
          a: "Nei. Den offentlige listen viser en mottaker og en dato. Den viser aldri en salgspris. Permen er en ferdig sjekkliste som forlater huset, og det er det eneste faktumet jeg publiserer om den.",
        },
      ],
    },
    {
      slug: "sets-in-order",
      title: "Pokémon-sett i rekkefølge",
      description: "Seriene og settene i den offentlige kortlisten, fra Base i 1999 til den nyeste serien, med en lenke til hver settside.",
      h1: "Pokémon-sett i rekkefølge",
      lede: "Jeg holder settene i den rekkefølgen den offentlige kortlisten bruker. Det finnes {sets} sett i {seriesCount} serier, og {cards} kort bak de navnene. Listen under dette notatet er den rekkefølgen, bygd fra samme data som sjekklistene. Hver rad lenker til settsiden jeg krysser av mot. Datoen på raden er utgivelsesdatoen fra de dataene.",
      sections: [
        {
          id: "series-and-set",
          heading: "En serie er en hylle, et sett er en perm",
          paragraphs: [
            "En serie er en rekke sett som deler en tid. Base, Jungle og Fossil sitter i Base-serien. Et sett er en kortliste med egne samlenumre. Jeg bygger permer på settnivå og blar på serienivå. Å blande de to ordene er slik en boks blir merket «Base» når halvparten er Jungle. Når jeg er usikker, leser jeg settsymbolet før jeg leser etiketten på boksen. Etiketten skrev jeg selv, noen ganger for fort. Symbolet ble trykt med kortet og har ikke endret seg siden.",
            "[[Permguiden|/guides/collecting-binders]] bruker denne tidslinjen når jeg avgjør hvilken liste et kort hører til. [[Å ordne sidene|/guides/organize-binder]] regner med at listen allerede er valgt. Tidslinjen sier ikke hvilket kort som er pent. Den sier hvilken sjekkliste som er åpen.",
          ],
        },
        {
          id: "how-to-read",
          heading: "Hvordan jeg leser listen",
          paragraphs: [
            "Hvert avsnitt nedenfor er en serie. Inni det løper settene etter utgivelsesdato fra det offentlige datagrunnlaget. Datoen er utgivelsesdatoen i de dataene, skrevet ut på sidens språk. Antallet er hvor mange kort som finnes i listen jeg publiserer, altså navn og samlenumre og ingenting mer. Jeg legger ikke til et gjett for et kort dataene ikke har.",
            "Promo, POP-serien og de små listene som samles under Other, finnes i dataene fordi de også har samlenumre. Jeg gjemmer dem ikke for at historien skal se ryddig ut. En promo er fortsatt en liste. Sorterer jeg bulk og nummeret matcher en promoliste, er det den stabelen kortet havner i. Et sett uten dato i dataene får likevel stå der dataene plasserte det. Jeg finner ikke på en måned for at raden skal se jevn ut. En tom dato er ærligere enn en jeg har gjettet.",
          ],
        },
        {
          id: "early",
          heading: "Hvor jeg ber folk begynne å se",
          paragraphs: [
            "[[Base-serien|/collections/series/base]] er starten på den publiserte listen. [[Base|/collections/set/base1]] selv er 9. januar 1999, 102 kort. [[Sjekklisten for generasjon 1|/guides/gen-1-checklist]] forklarer hvorfor de 102 kortene ikke er det samme som de opprinnelige 151 artene. Jeg sender folk til begge sidene med vilje. Forvekslingen er vanlig, og løsningen er bare de to tallene, side om side. 102 og 151 får stå igjen som to tall på en lapp hvis jeg merker at jeg begynner å si dem som om de var samme ting. Det er de ikke. Lappen er billigere enn en feilsortert perm.",
            "Den andre enden av listen flytter seg når dataene flytter seg. [[Mega Evolution|/collections/set/me1]] finnes i de nåværende dataene som en egen serie. Jeg lenker dit så tidslinjen har en ny dør, ikke fordi et nytt sett er viktigere enn en gammel common. [[Samlingene|/collections]] er samme liste med stolpene. Dette notatet er listen med datoene. [[Mega Evolution—Delta Reign|/collections/set/delta-reign]] står ikke i den listen ennå. Jeg har skrevet en side til permen før samlenumrene finnes, og jeg setter ikke inn en gjettet telling her.",
          ],
        },
        {
          id: "using-it",
          heading: "Å bruke tidslinjen mens jeg sorterer",
          paragraphs: [
            "Jeg har denne siden åpen når en boks spenner over mer enn én tid. Jeg pugger ikke utgivelsesår. Jeg klikker serien, så settet, så matcher jeg samlenummeret. Stemmer navnet, forlater kortet boksen. Stemmer navnet ikke, har jeg feil liste, og å tvinge det inn ville laget et hull i to permer samtidig. Jeg sorterer boksen i seriens rekkefølge ovenfra og ned, én serie ferdig før den neste begynner. Da blandes ikke Base med en moderne haug bare fordi begge har en Pikachu på toppen.",
            "Dataene ble bygd {built}. Mangler et splitter nytt sett her, mangler det i det bygget. Det gjemmer seg ikke i en meny. Jeg viser heller en datert liste enn et vagt løfte om at alt frem til i dag er med. Settsidene som lenkes nedenfor, er sjekklistene jeg faktisk krysser av.",
            "Jeg bruker antallet på hver rad som en realitetssjekk mens jeg sorterer. Tror jeg at jeg er ferdig med et sett og permen har færre kort enn antallet, har jeg gått glipp av et nummer, som regel en trener eller en energi nær slutten. Har jeg flere kort enn antallet, har jeg blandet inn en promo eller neste sett. Uansett er listen rettelsen. Jeg runder ikke av et sett til en følelse av «omtrent hundre». Nummeret er antallet lommer.",
          ],
        },
      ],
      faqs: [
        {
          q: "Ligger settene i utgivelsesrekkefølge innenfor hver serie?",
          a: "Ja. Hvert serieavsnitt lister settene sine etter utgivelsesdatoen i det offentlige kortdatagrunnlaget. Seriene selv følger det datagrunnlagets rekkefølge. Jeg sorterer en boks i samme rekkefølge så stablene matcher sidene.",
        },
        {
          q: "Inneholder denne listen priser?",
          a: "Nei. Den inneholder settnavnet, utgivelsesdatoen og kortantallet fra den offentlige listen. Ingenting på denne siden er en salgspris. Antallet er antallet lommer i den permen, ingenting annet.",
        },
      ],
    },
    {
      slug: "collecting-with-a-child",
      title: "Å begynne å samle Pokémon-kort med et barn",
      description: "Hvordan jeg begynner én perm med et barn: ett oppdrag, bulk, sleeves og lov til å stoppe.",
      h1: "Å begynne en Pokémon-samling med et barn",
      lede: "Jeg er en pappa som liker sjekklisten, og jeg har sittet ved bordet med et barn som liker bildene. Måten jeg begynner på, er mindre enn min egen hylle. Én perm. Ett oppdrag. Bulk. Jeg avslutter økten mens den fortsatt er gøy. Barnet velger kortet. Jeg insisterer bare på sleeven og den nummererte lommen.",
      sections: [
        {
          id: "one-binder",
          heading: "Én perm, med vilje",
          paragraphs: [
            "Jeg åpner ikke med hele historien om kortspillet. [[Den lange guiden|/guides/collecting-binders]] er til meg, senere, hvis barnet spør hvor de andre permene kom fra. Ved første økt tilbyr jeg ett valg: en settperm for en kort liste, eller [[generasjonspermen for generasjon 1|/collections/generation/1]] med ett kort av hver opprinnelig art. [[Notatet om generasjon 1|/guides/gen-1-checklist]] er versjonen av det valget jeg kan forklare på ett minutt. Ett hundre og femtién skapninger, ett kort hver, et hvilket som helst trykk. Jeg legger bort min egen åpne perm før barnet setter seg. To åpne permer på samme bord blir fort én felles haug, og den haugen har ikke noe oppdrag.",
            "To prosjekter på én gang er slik et barn får et fang fullt av stabler og ingen ferdig side. Jeg har gjort det. Andre økt blir verre, for bordet ser ut som en plikt. Én perm betyr at neste kort har en åpenbar lomme. Åpenbart er vennlig.",
          ],
        },
        {
          id: "their-choice",
          heading: "La barnet velge den første siden",
          paragraphs: [
            "Jeg stokker en liten stabel bulk i sleeves og lar barnet velge det første kortet som går inn. Er permen i Pokédex-rekkefølge, havner kortet likevel i sin nummererte lomme, ikke fremst. Jeg forklarer det én gang, uten tale. Lommen er skapningens plass. Å velge kortet er det gøye. Nummeret er løftet om at kortet kan finnes igjen. Ligger den valgte skapningen allerede i permen, får barnet velge én gang til fra samme stabel. Dubletten går tilbake til bulk uten en tale om at valget var feil.",
            "Jeg retter ikke smak. En Pikachu er et godt første kort. Det er en skapning jeg synes er hverdagslig, også. [[Bulk|/guides/bulk-cards]] er riktig haug til dette, for det finnes nok kopier til at et valg ikke skal være dyrebart. En dyrebar stabel får meg til å sveve over bordet. Å sveve er det motsatte av en lørdag ved kjøkkenbordet.",
          ],
        },
        {
          id: "sleeves",
          heading: "Sleeves, så siden",
          paragraphs: [
            "[[Sleeves|/guides/protect-cards]] går på før kortet blir tatt av små hender. Jeg viser det som en bevegelse, ikke en forelesning: kortet inn, sleeven flat, lommen åpen, kortet inn. Barn er gode på bevegelser. De er mindre interessert i meningene mine om oppbevaring. Jeg holder drikke borte fra bordet og forteller ikke grunnen hvis jeg ikke blir spurt.",
            "Bøyes et kort, gjør jeg det ikke til en moralsk hendelse. Jeg sleever en erstatning fra bulken hvis jeg har en, eller lar raden stå tom til jeg har det. En tom rad er lov. [[En perm jeg gir bort|/guides/donating-cards]] er en ferdig perm, og et barns lørdagsperm må ikke bli det. Den kan forbli en lørdagsperm.",
          ],
        },
        {
          id: "stop",
          heading: "Stopp mens det fortsatt er gøy",
          paragraphs: [
            "Jeg avslutter økten når barnet fortsatt er villig, ikke når jeg har nådd et rundt tall. Tjue minutter som slutter med en lukket perm, skjer igjen. En time som slutter med et sukk, gjør det kanskje ikke. [[Samlingene|/collections]] husker radene jeg har notert. Ingenting på skjermen er viktigere enn at barnet vil åpne permen neste gang. Jeg setter ikke et mål om ti kort eller en full side. Målet er at permen lukkes mens noen fortsatt vil åpne den igjen.",
            "Jeg følger ikke et barns perm som en konkurranse mot min. De offentlige sidene i dette prosjektet er mine sjekklister. Et barns side får være uferdig for alltid. Vokser de inn i den lengre hobbyen, finnes settlistene og artsidene der. Gjør de ikke det, har permen likevel gjort jobben sin: kort i rekkefølge, sleeves på, en ettermiddag som tilhørte dem.",
            "Spørsmålene jeg faktisk svarer på, er små. Hvilken lomme dette kortet skal ligge i. Om denne dubletten kan fylle et hull. Om det er greit å stoppe. Ja, den nummererte lommen. Ja, hvis raden er tom. Ja, stopp. De større meningene beholder jeg for meg selv hvis barnet ikke spør. En samling som begynner slik, kan forbli liten og likevel være en ekte samling. Den har en rekkefølge, en sleeve og en neste tom rad når noen har lyst til å åpne den. Et kort som ser galt ut, kommer ikke inn mens jeg er usikker. [[Hvordan jeg kjenner igjen en forfalskning|/guides/spot-fakes]] er den kontrollen, stille, med et annet bulkkort tilbudt i stedet.",
          ],
        },
      ],
      faqs: [
        {
          q: "Hvilken perm skal et barn begynne med?",
          a: "Jeg tilbyr én: enten en kort settliste, eller generasjon 1 med ett kort av hver art. Jeg setter ikke i gang et barn med hvert sett på én gang.",
        },
        {
          q: "Trengs sjeldne kort til et barns perm?",
          a: "Nei. Commons fra bulk fyller radene. Et sjeldent kort er valgfritt, og det er ikke poenget med den første ettermiddagen.",
        },
      ],
    },
    spotFakesNo,
  ];
}
