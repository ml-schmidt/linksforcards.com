import type { ArticleCopy } from "@/lib/articles";
import { spotFakesSv } from "./spot-fakes/sv";

export function swedishArticles(): ArticleCopy[] {
  return [
    {
      slug: "collecting-binders",
      title: "Att samla Pokémon-kort i pärmar",
      description: "Hur jag samlar Pokémon-kort i en setpärm och en Pokédex-pärm, och var kortlistorna finns.",
      h1: "Så samlar jag Pokémon-kort i pärmar",
      lede: "Korten hos mig bor i pärmar. Hyllan får bara det som redan har en plats. En pärm följer ett set från första numret till sista. En annan följer Pokédex, art för art. Den här texten är kartan över hur jag håller isär de två. De kortare texterna tar en fråga i taget, i den ordning händerna faktiskt jobbar: först vilken pärm, sedan bulken på bordet, och sist numret på kortet när en trave vägrar att bli en rad.",
      diagram: {
        kind: "binders",
        title: "Två sätt att fylla en pärm",
        description: "En setpärm följer samlarnumren. En generationspärm har ett kort av varje art i Pokédexordning.",
        caption: "Vänster: ett set, i nummerordning. Höger: en art per ficka, i Pokédexordning.",
      },
      sections: [
        {
          id: "two-binders",
          heading: "Två pärmar, två uppdrag",
          paragraphs: [
            "En setpärm och en generationspärm svarar på olika frågor, och jag blandar dem inte längre. Setpärmen frågar om varje kort i det setet finns, i samlarnummerordning, också när kortet är alldagligt. Generationspärmen frågar om jag har ett kort av varje art i det Pokédexintervallet. Vilket tryck som helst duger där, och vilket språk som helst duger. När jag lät en och samma pärm göra båda jobben tappade jag bort en saknad common, för holo-raden såg färdig ut och hålet syntes inte.",
            "Den långa versionen av sorteringen från kväll till kväll ligger i [[hur jag ordnar en pärm|/guides/organize-binder]]. Den korta versionen är den jag önskar att jag hade skrivit upp tidigare: välj uppdraget innan sidorna köps. En sida med nio fickor är ett rutnät. Den bryr sig inte om historien på kortet. Det gör jag, så ordningen bestäms först och korten får anpassa sig efter den.",
          ],
        },
        {
          id: "set-binder",
          heading: "En setpärm följer kortlistan",
          paragraphs: [
            "[[Base|/collections/set/base1]] är exemplet jag fortfarande öppnar när någon frågar hur en setpärm fungerar. Setet kom 9 januari 1999 och den offentliga kortlistan har 102 kort. Sidan i pärmen följer den listan: nummer 1, sedan 2, sedan 3, tränare och energi inräknade. Finns kortet på listan finns det en ficka. Jag lämnar inget hål för att kortet är en common, och jag drar inte fram en holo till första sidan för att den glänser.",
            "Hela ordningen på serier och set finns i [[Pokémon-set i ordning|/guides/sets-in-order]]. Den tidslinjen tar jag fram när en bulklåda blandar årtal. Ett kort från Jungle hör inte hemma i Base-pärmen, även om illustrationen känns som samma år. Setsidan är kortlistan och checklistan på en gång. Jag markerar en rad först när just det kortet sitter i pärmen, inte när jag har sett det i en trave på bordet.",
            "En tredje pärm följer ett tema, inte ett set och inte en lucka för en enda art. [[Temapärmar|/collections/themes]] samlar varje engelskt tryck av en art, en konstnär eller ett slags kort. [[Alla Pikachu-kort|/collections/themes/pikachu]] är listan jag öppnar när högen är full av det ansiktet.",
          ],
        },
        {
          id: "dex-binder",
          heading: "En generationspärm följer Pokédex",
          paragraphs: [
            "En generationspärm rymmer ett kort av varje art. [[Generation 1|/collections/generation/1]] är de ursprungliga 151. Generation 1 till 9 är {species} arter. [[Hur jag fyller en Pokédex-pärm|/guides/pokedex-binder]] är den långa anteckningen om att göra det utan att jaga sällsynta tryck. [[Checklistan för generation 1|/guides/gen-1-checklist]] stannar vid de första 151, för det är den pärmen folk menar när de säger de ursprungliga varelserna.",
            "[[Pikachu|/pokedex/25]] visar varför regeln behövs. Artsidan listar varje tryck i det offentliga datat, över många set. Generationspärmen behöver ett av dem. En Pikachu ur bulken fyller fickan. En senare illustration rare fyller samma ficka. Jag sparar inte varje tryck i den pärmen. Det jobbet tillhör setpärmen, och bara för det set jag faktiskt bygger.",
          ],
        },
        {
          id: "bulk",
          heading: "Bulk är det som fyller fickorna",
          paragraphs: [
            "De flesta kort som stänger en rad kommer ur bulk. Jag säger det med värme. Bulk är den vanliga högen: commons, uncommons, dubbletter och den där Magikarp som dyker upp igen. [[Vad jag gör med bulk|/guides/bulk-cards]] är sorteringen. [[Hur jag läser ett kort|/guides/read-a-card]] är hur jag hittar samlarnumret och setsymbolen när högen är blandad och namnet inte räcker.",
            "Jag sorterar på set innan jag sorterar på varelse. Ett kort som passar en öppen rad i en setpärm hamnar där. En extra kopia som passar en tom artsrad kan flytta till generationspärmen. Allt som blir kvar ligger i bulklådan tills en checklista ber om det, eller tills en färdig pärm är redo att lämna huset. Bulken är alltså inte resten efter samlingen. Bulken är högen som gör pärmen färdig.",
          ],
        },
        {
          id: "tracker",
          heading: "Den offentliga förteckningen är en checklista, inte en butik",
          paragraphs: [
            "[[Startsidan|/]] är den offentliga räkningen: hur många olika kort som är noterade, och vilka pärmar som har rört sig. [[Samlingarna|/collections]] är arbetslistan. Där ligger seten grupperade efter serie, varje generationspärm har en länk, och varje art har en egen sida. En fylld stapel betyder att jag har noterat kortet. Den säger ingenting om ett försäljningspris. De offentliga sidorna visar aldrig ett sådant.",
            "När en rad på skärmen och kortet i pärmen inte stämmer vinner pärmen. Jag kallar en pärm färdig först efter att jag har bläddrat igenom sidorna. Skärmen finns så att jag ser hålet innan jag glömmer det. Det är hela förteckningen. Ingen ruta där är en prislista, och ingen stapel betyder att kortet är till salu. Jag skriver en bock först när jag har bläddrat till fickan. En bock utan bläddring är en minneslapp, inte en färdig pärm, och nästa sittning börjar där bocken saknas.",
          ],
        },
        {
          id: "care-and-kids",
          heading: "Sleeves, barn och en pärm som lämnar",
          paragraphs: [
            "Ett kort som ska bo i en pärm får en sleeve först. [[Att skydda korten|/guides/protect-cards]] är anteckningen om sleeves, sidor med nio fickor, sidor med fyra fickor och var jag inte ställer en pärm. Jag började med en burk från mataffären och lärde mig den fuktiga hyllan den hårda vägen. Sleeven är steget jag inte hoppar över, inte ens för en common som finns i varenda bulklåda.",
            "[[Att samla med ett barn|/guides/collecting-with-a-child]] är anteckningen jag använder när ett barn sätter sig vid bordet. En pärm, ett uppdrag och lov att sluta. [[Att ge bort en färdig pärm|/guides/donating-cards]] är det som händer när en pärm är klar och jag lämnar över den. Jag lämnar över en färdig pärm, inte en näve lösa extra. Den offentliga listan noterar mottagaren och datumet.",
            "Om jag skulle lämna en enda instruktion på en lapp skulle den lyda så här. Välj pärmens uppdrag. Öppna rätt checklista. Sätt en sleeve på kortet som fyller ett hål. Markera raden först när kortet sitter i fickan. Sluta när bordet blir rörigt, och börja nästa sittning vid samma hål. Resten av de här anteckningarna är den instruktionen, utskriven för frågan jag faktiskt får: sidstorlek, bulk, de 151, hela Pokédex, numret på kortet, förvaring, ett barn vid bordet, eller en pärm som lämnar huset.",
          ],
        },
      ],
      faqs: [
        {
          q: "Behöver jag både en setpärm och en generationspärm?",
          a: "Nej. Jag använder båda för att de svarar på olika frågor. En enda setpärm är ett fullständigt sätt att börja. En generationspärm är det andra fullständiga sättet. Misstaget är att be en pärm göra båda jobben.",
        },
        {
          q: "Var finns checklistorna?",
          a: "Varje set har en kortlista, varje generation har en checklista och varje Pokémon har en sida med sina tryck. Samlingssidan länkar alla tre.",
        },
      ],
    },
    {
      slug: "organize-binder",
      title: "Hur jag ordnar en Pokémon-pärm",
      description: "Sidor med nio fickor och fyra fickor, setnummer och Pokédexordning, så som jag faktiskt sorterar en pärm.",
      h1: "Hur jag ordnar en Pokémon-pärm",
      lede: "Jag ordnar pärmen innan jag ordnar korten. Sidstorleken och ordningen är hela systemet. Allt annat är ett kort som hittar fickan jag redan har gjort i ordning. När de två besluten sitter kan en rörig kväll ändå sluta med en sida som är färdig, i stället för med tre högar som bara har blivit beundrade.",
      diagram: {
        kind: "pockets",
        title: "Nio fickor och fyra fickor",
        description: "En sida med nio fickor rymmer nio kort i ett rutnät om tre gånger tre. En sida med fyra fickor rymmer fyra större kort.",
        caption: "Nio fickor håller ett set kompakt. Fyra fickor gör varje kort lättare att se, och pärmen blir tjock fortare.",
      },
      sections: [
        {
          id: "nine-or-four",
          heading: "Nio fickor eller fyra fickor",
          paragraphs: [
            "En sida med nio fickor är tre kolumner om tre. Ett kort i sleeve får plats. Ett set på ungefär hundra kort blir ett dussin sidor, en pärm jag kan hålla öppen med en hand. Det är sidan jag använder till setpärmar. [[Paldean Fates|/collections/set/sv4pt5]] är 245 kort i den offentliga listan, så pärmen med nio fickor är redan en tjock en. En sida med fyra fickor skulle göra samma set till en pärm jag inte vill bära.",
            "En sida med fyra fickor är två kolumner om två, och varje kort sitter större. Den använder jag när poängen är att titta, inte att bocka av en lång lista. En generationspärm kan gå åt båda hållen. Nio fickor får in {species} arter i färre pärmar. Fyra fickor gör ett barns favoritsida lättare att hitta, och de gör hyllan tyngre. Jag bestämmer innan första kortet åker in. Att flytta ett färdigt set från en sidstorlek till en annan är en eftermiddag jag redan har lagt en gång, och jag tänker inte lägga den igen. [[Den långa guiden|/guides/collecting-binders]] är skälet till att de två pärmuppdragen hålls isär.",
          ],
        },
        {
          id: "set-order",
          heading: "Ordning efter setnummer",
          paragraphs: [
            "Setordning är samlarnumret på kortet, matchat mot kortlistan. Nummer 1 är första fickan, även när det inte är varelsen jag tycker bäst om. Tränare och energi stannar där setet lade dem. Jag gör ingen snygg sida med holo längst fram. Den snygga sidan gömmer den saknade common.",
            "[[Seten i ordning|/guides/sets-in-order]] talar om vilken lista ett kort hör till. Setsymbolen hjälper mig att bekräfta det. Numret är det jag sorterar på. Om två kort delar namn och numren skiljer sig åt är de olika rader. Det lärde jag mig av promo, som ofta ligger bredvid ett huvudset och har en egen räkning. De får inte smygas in i huvudlistan bara för att namnet känns bekant.",
          ],
        },
        {
          id: "dex-order",
          heading: "Ordning efter Pokédexnummer",
          paragraphs: [
            "Pokédexordning är artordning. [[Generation 1|/collections/generation/1]] går från Bulbasaur till Mew, #001 till #151. Fickan bryr sig inte om vilket set kortet kom från. En common i sleeve från ett nytt set fyller #001 lika ärligt som ett gammalt tryck. [[Anteckningen om Pokédex-pärmen|/guides/pokedex-binder]] förklarar varför jag stannar vid ett kort per art. [[Checklistan för generation 1|/guides/gen-1-checklist]] är samma idé, avgränsad till de första 151.",
            "Jag skriver Pokédexnumret på en liten lapp i hörnet av sidan bara när sidan börjar ett nytt hundratal. Jag märker inte varje ficka. Checklistan på samlingssidan är registret. Pärmen är beviset. Bläddrar jag till #050 ska den fickan vara #050, även om jag hittade kortet en tisdag och blev glad.",
          ],
        },
        {
          id: "by-type",
          heading: "Sortera efter typ, när pärmen inte är en checklista",
          paragraphs: [
            "Typen är symbolen uppe till höger på ett Pokémon-kort. [[Hjälpen till kortdatabasen|https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database]] beskriver den så: energiikonen för Gräs, Eld, Vatten och resten. Ett barn som vill ha varje vattenkort på en sida sorterar efter typ. Det använder jag till en spelhog på bordet. Till en setpärm använder jag det inte. Listan är numrerad, och en sida med en enda typ gömmer det nummer som saknas.",
            "Tränare bär inte den typikonen, och bas-Energy är en egen hög. En sådan eftermiddag får de korten en egen trave, i stället för att tvingas in under en varelse. Generation är den andra ordningen, ett spann i Pokédex, och det är redan det [[generation 1|/collections/generation/1]] är. Set, nummer, typ och generation är fyra frågor. Jag tar en per pärm. [[Hur jag läser symbolen|/guides/read-a-card]] är hur jag hittar ikonen innan jag litar på traven.",
          ],
        },
        {
          id: "marking-a-line",
          heading: "Hur jag markerar en rad",
          paragraphs: [
            "[[Samlingarna|/collections]] visar en rad som fylld när jag har noterat kortet. Att notera är inte samma sak som att kasta en blick på en trave. Jag lägger kortet i sleeven, sleeven i fickan, och sedan markerar jag raden. Markerar jag först ljuger förteckningen och pärmen har ett hål.",
            "[[Sleeves och sidor|/guides/protect-cards]] kommer före markeringen, inte efter. Ett kort som nöts blankt i en ficka är ett kort jag sedan måste byta ut, och raden var egentligen aldrig klar. När skärmen och pärmen inte är överens bläddrar jag. Pärmen vinner.",
            "En praktisk kväll ser ut så här. Jag väljer en pärm och låter den andra vara stängd. Jag lägger den matchande traven i nummerordning på bordet, nio kort per rad om jag använder sidor med nio fickor. Jag sleevar varje kort, skjuter in det, och tittar på checklistan först därefter. Kort som inte hör hemma i kvällens pärm åker tillbaka till sin låda innan jag börjar, så att de inte blir ett andra projekt mitt på sidan. En sida färdig och instoppad är en bättre kväll än tre högar som bara blev beundrade. Jag tänder inte en andra lampa och öppnar nästa pärm bara för att den första sidan gick fort. Fort är ett skäl att stanna, inte att dra igång ett till projekt.",
          ],
        },
      ],
      faqs: [
        {
          q: "Ska en generationspärm ha sidor med nio fickor?",
          a: "Jag använder nio fickor när målet är att bli klar med intervallet. Jag använder fyra fickor när målet är att titta på färre kort, större. Båda är riktiga pärmar. De ska inte blandas i samma volym.",
        },
        {
          q: "Sorterar jag ett set efter typ eller sällsynthet?",
          a: "Nej. Jag sorterar ett set efter samlarnummer. Typ och sällsynthet ändrar hur en sida ser ut och gömmer korten som saknas.",
        },
      ],
    },
    {
      slug: "bulk-cards",
      title: "Vad jag gör med bulk av Pokémon-kort",
      description: "Bulk fyller pärmarna. Jag sorterar på set, sedan på den tomma artsraden, och behåller resten.",
      h1: "Vad jag gör med bulk av Pokémon-kort",
      lede: "Bulk är guld. Jag menar den vanliga högen: commons, dubbletter och kortet som finns i varenda burk. Den högen är det som gör en pärm färdig. Ofta börjar det i en burk från mataffären. Jag sorterar på set, låter extrakorten fylla tomma artsrader och behåller det som blir över i stället för att kalla det skräp.",
      sections: [
        {
          id: "why-bulk",
          heading: "Varför jag räknar bulk som samlingen",
          paragraphs: [
            "En holo är en trevlig sida. Den är inget system. Systemet är den tomma raden, och tomma rader är mest commons. [[Pärmguiden|/guides/collecting-binders]] säger det i lång form. Här är den korta formen jag använder vid bordet: fyller kortet ett hål är det kortet jag ville ha, även när illustrationen är samma Magikarp jag redan kan utantill.",
            "Jag slutade ursäkta bulk den dagen en generationspärm rörde sig snabbare ur en blandad låda än ur något jag hade lagt undan som speciellt. Speciella kort kan vänta i en sleeve. Checklistan väntar inte på dem. [[Att samla med ett barn|/guides/collecting-with-a-child]] använder samma hög, för ett barn kan hålla en common, välja en ficka och se raden stängas. Det är ett riktigt framsteg, inte en tröstpris.",
            "Vissa temalistor är nästan bara den här högen. [[Yuka Moriis lerkort|/collections/themes/yuka-morii]] är vanliga kort, och där är bulk guld. [[Temapärmar|/collections/themes]] är platsen där de checklistorna finns.",
          ],
        },
        {
          id: "sort-by-set",
          heading: "Sortera på set först",
          paragraphs: [
            "Jag häller ut lådan bara så långt att bordet fortfarande är snällt. Sedan sorterar jag på set, inte på varelse och inte på glans. [[Hur jag läser numret och symbolen|/guides/read-a-card]] är delen jag gör i händerna: hitta samlarnumret, bekräfta setet, gör en trave. En trave för Base, en trave för ett modernt set, en trave jag inte kan placera ännu.",
            "Varje trave går till setsidan på [[samlingarna|/collections]]. Sidan är kortlistan. Är raden öppen åker kortet in i den pärmen. Är raden fylld är kortet en dubblett och stannar i bulk. Jag plockar inte fram dubbletter för att beundra dem förrän de öppna raderna i den traven är klara. Beundran är så en halvsorterad låda varar en månad. En trave jag inte kan placera får ligga för sig tills symbolen och numret har fått en lugn titt. Den traven är inte ett misslyckande. Den står i kö till nästa sittning, och den får inte hällas tillbaka i lådan bara för att kvällen blev sen.",
          ],
        },
        {
          id: "species-lines",
          heading: "Sedan den tomma artsraden",
          paragraphs: [
            "En dubblett för ett set kan fortfarande vara första exemplaret av den arten i en generationspärm. [[Pokédex-pärmen|/guides/pokedex-binder]] behöver bara ett. [[Magikarp|/pokedex/129]] är exemplet jag litar på, för bulk fortsätter att erbjuda en till. Är #129 tom lämnar nästa Magikarp lådan och fyller fickan. Är #129 fylld åker kortet tillbaka.",
            "Vilket språk som helst räknas på en artsrad. Ett kort tryckt med ett annat namn visar ändå samma art på artsidan, för sidan följer det nationella Pokédexnumret. Jag kontrollerar numret när namnet på kortet inte är det engelska namn jag har memorerat. Namnet får skilja sig. Numret får inte gissas. Jag skriver inte artens namn på lådan som en genväg. Numret på kortet och numret i Pokédex ska vara samma siffra innan kortet lämnar bulk.",
          ],
        },
        {
          id: "extras",
          heading: "Vad som händer med extrakorten",
          paragraphs: [
            "Extrakort stannar i en låda märkt med setet, eller i en blandad låda när traven är liten. De är inte sopor. Nästa pärm behöver ofta kortet jag nästan gav upp. Jag håller dem torra, i en sleeve om hörnet redan är mjukt, och inte på golvet. Ett mjukt hörn som får ligga löst en vecka till är ett hörn jag sedan får leta ersättare till, så sleeven åker på samma kväll som jag märker det.",
            "När en pärm är färdig ändras historien. [[En färdig pärm kan lämna huset|/guides/donating-cards]] och gå till ett barn. Lösa extrakort följer inte med. De stannar och fyller nästa pärm. Den delningen gör gåvan hel och håller checklistan ärlig.",
            "Själva lådan får en tråkig etikett: setets namn, eller «blandat» om jag inte har delat den ännu. Jag märker inte en låda med en gissning om vad korten skulle kunna säljas för. Jag har ingen separat låda för «bra» kort och en tunna för «skräp». Den delningen är så commons försvinner och hål står öppna. En gång i månaden tar jag den blandade lådan, kör setsorteringen igen och krymper den. Målet är en mindre frågetrave, inte en snyggare uppvisning. Ett kort jag inte litar på fyller ingen rad. [[Att känna igen en förfalskning|/guides/spot-fakes]] är en egen not. Bulklådan är platsen för de vanliga riktiga korten, och det är de jag vill ha.",
          ],
        },
      ],
      faqs: [
        {
          q: "Ska jag slänga dubbletter av commons?",
          a: "Det gör jag inte. En dubblett i ett set är ofta den saknade arten i en annan pärm. Jag lägger dem i lådor efter set tills en checklista ber om dem. Nästa pärm brukar vara närmare än en ny hög med påsar.",
        },
        {
          q: "Sorterar jag bulk efter sällsynthet först?",
          a: "Nej. Sällsynthetsmärken har ändrats genom åren, och de talar inte om vilken rad som är tom. Samlarnumret gör det. Jag kan sortera en hel låda utan att avgöra om ett märke betyder något.",
        },
      ],
    },
    {
      slug: "pokedex-binder",
      title: "Hur jag fyller en Pokédex-pärm",
      description: "Ett kort av varje art, från #001 till slutet av generation 9, fyllt ur bulk.",
      h1: "Hur jag fyller en Pokédex-pärm",
      lede: "En Pokédex-pärm är ett kort av varje art. Generation 1 till 9 är {species} arter. Jag fyller den ur bulk, i Pokédexordning, och jagar inte ett tryck som checklistan inte ber om. Budgeten är bulken jag redan har, plus en sleeve och en ficka för varje kort som stänger ett hål.",
      sections: [
        {
          id: "one-card",
          heading: "Ett kort av varje art",
          paragraphs: [
            "Regeln är liten och den räddar mig. Ett kort. Vilket set som helst. Vilket språk som helst. Vilken sällsynthet som helst. [[Den långa pärmguiden|/guides/collecting-binders]] skiljer det här jobbet från setpärmen, där varje kort på listan har en ficka. Här är varelsen fickan. En andra Pikachu är en dubblett även när illustrationen är ny.",
            "Jag började vanan med [[Bulbasaur|/pokedex/1]]. Artsidan listar trycken. Pärmen behöver ett av dem. Jag lade den första Bulbasaur i sleeve som jag redan ägde i #001 och slutade leta efter en bättre #001. Bättre är en annan hobby. Den här hobbyn är intervallet, från första numret till sista, med en varelse på varje rad.",
            "En artsida listar varje tryck, och Pokédex-pärmen behöver fortfarande bara ett av dem. [[Alla Pikachu-kort|/collections/themes/pikachu]] håller varje Pikachu-tryck som en egen checklista. [[Temapärmar|/collections/themes]] ligger bredvid generationerna när jag vill se hela raden av ett ansikte.",
          ],
        },
        {
          id: "the-range",
          heading: "De {species}, generation för generation",
          paragraphs: [
            "Jag öppnar inte en jättepärm och kallar den klar. Jag bygger generation för generation, för [[samlingarna|/collections]] redan är delade så och för att en generation är en bok jag kan bli färdig med. Generation 1 är 151. Generation 2 är de följande 100. De senare generationerna ligger på samma nav, var och en med egen checklista och egen räkning.",
            "[[Generation 1|/collections/generation/1]] är den jag säger åt folk att bli klara med först, och [[anteckningen om generation 1|/guides/gen-1-checklist]] ligger bredvid. Varelserna är bekanta, bulklådorna är fulla av dem, och 151 är ett tal jag kan hålla i huvudet. Därefter är generation 5 den långa och generation 6 den korta. Jag låter checklistan säga det. Jag memorerar inte räkningarna.",
          ],
        },
        {
          id: "from-bulk",
          heading: "Fyll den ur bulk",
          paragraphs: [
            "[[Bulk|/guides/bulk-cards]] är förrådet. Jag är medveten om det valet. En sällsynt illustration är välkommen när det är kortet jag redan har. Den är inget krav. Att vänta på ett favorittryck är så en Pokédex-pärm fastnar på samma tjugo hål i ett år.",
            "Den praktiska genomgången är tråkig och den fungerar. Jag tar en generationschecklista. Jag går igenom bulklådan med hålen i huvudet. Jag sleevar kortet som fyller ett hål. Jag stoppar det i fickan. Jag markerar raden. Sedan slutar jag, även om lådan fortfarande ser intressant ut. Jag tar inte med mig hela lådan till soffan. Checklistan ligger på bordet, hålen är få nog att hålla i minnet under en genomgång, och kort som inte fyller något av dem åker tillbaka innan jag hinner bli förtjust. [[Hur jag ordnar sidorna|/guides/organize-binder]] är valet av sidstorlek. Nio fickor är det jag använder när målet är att se intervallet bli klart.",
          ],
        },
        {
          id: "when-it-is-done",
          heading: "När jag kallar den klar",
          paragraphs: [
            "En generation är klar när varje artsrad har ett kort i pärmen och jag har bläddrat igenom sidorna för att bevisa det. Skärmen kan säga att raderna är fyllda. Jag bläddrar ändå. Ett kort som är noterat och sedan lämnat i en skokartong ligger inte i pärmen.",
            "Jag uppgraderar inte en färdig generation för sportens skull. Om ett senare kort får mig att le kan det byta ut det som sitter i fickan, och det gamla återvänder till bulk. Raden förblir fylld oavsett. Poängen var aldrig den mest imponerande kopian. Poängen var varelsen, på plats, i ordning, där en person kan bläddra fram till den.",
            "En budget, för den här pärmen, betyder att jag lägger uppmärksamhet i stället för att jaga en viss kopia. De flesta korten som behövs äger jag redan inne i osorterad bulk. Kostnaden som spelar roll är sleeven och sidan, som jag köper i vanliga förpackningar och använder på commons utan att spara dem. Jag har en blyertslista över hålen bara när jag är borta från skärmen. Hemma är generationssidan listan. Har ett hål varit tomt i månader beror det på att den arten är knapp i mina lådor, inte på att jag väntar på en sällsyntare bild av en art jag redan kunde ha arkiverat. Byter jag ut ett kort skriver jag inte en ny historia om raden. Den var fylld, den är fylld, och det gamla kortet är bulk igen med samma jobb som förut: vänta på ett annat hål.",
          ],
        },
      ],
      faqs: [
        {
          q: "Behöver Pokédex-pärmen varje tryck av en Pokémon?",
          a: "Nej. Ett kort av varje art är hela regeln. Varje tryck hör hemma på artsidan, inte i den här pärmen.",
        },
        {
          q: "Vilken generation ska jag bli klar med först?",
          a: "Jag börjar med generation 1, de ursprungliga 151. Korten är vanliga i bulk, och checklistan är kort nog att bli färdig med. Därefter tar jag nästa generation på navet, inte ett slumpmässigt hål mitt i Pokédex.",
        },
      ],
    },
    {
      slug: "gen-1-checklist",
      title: "Checklista för generation 1: alla 151",
      description: "Hur jag samlar de ursprungliga 151 Pokémon i en pärm, med generationschecklistan och kortlistan för Base.",
      h1: "Checklista för generation 1: alla 151 ursprungliga Pokémon",
      lede: "Generation 1 är 151 arter, #001 Bulbasaur till #151 Mew. Jag samlar dem som en pärm: ett kort av varje, från vilket set som helst. Checklistan är generationssidan, och Base är där många av de bekanta namnen börjar. De två listorna har inte samma antal, och att hålla isär dem är hela knepet.",
      sections: [
        {
          id: "the-151",
          heading: "Vad de 151 betyder",
          paragraphs: [
            "De 151 är ett Pokédexintervall, inte en enda produkt. [[Generation 1|/collections/generation/1]] listar varje art i det intervallet, med några av seten där var och en förekommer. Den sidan är checklistan jag använder. Den är inte samma sak som Base, som är 102 kort och innehåller tränare och energi. Folk blandar ihop de två antalen. Jag håller isär dem så att pärmen får rätt antal fickor. Söker du 2023 års set som heter [[151|/collections/set/sv3pt5]]? Det är en annan lista.",
            "[[Anteckningen om Pokédex-pärmen|/guides/pokedex-binder]] är samma metod för alla {species} arter. Den här anteckningen stannar vid den första boken, för de ursprungliga 151 är pärmen jag oftast får frågor om. [[Den långa guiden|/guides/collecting-binders]] förklarar varför det här är en generationspärm och inte en setpärm. En produktförpackning med «151» på locket är inte automatiskt den här checklistan.",
          ],
        },
        {
          id: "where-they-appear",
          heading: "Var de ursprungliga 151 dyker upp",
          paragraphs: [
            "En art från Kanto kan finnas i Base-eran och igen i ett set som kom decennier senare. [[Pikachu|/pokedex/25]] är den uppenbara. [[Charizard|/pokedex/6]] är den andra. Artsidan listar trycken. Vilket som helst av dem fyller fickan. Jag behöver inte den äldsta kopian, och jag behöver inte den nyaste.",
            "[[Set i ordning|/guides/sets-in-order]] hjälper när jag med flit vill ha de gamla. [[Base-serien|/collections/series/base]] är Base, Jungle, Fossil och seten runt dem. Bygger jag en setpärm av Base är det ett annat projekt med 102 fickor. Kort från det projektet kan också fylla en generationsficka, en gång, om artsraden är tom. Jag plockar inte sönder en setpärm för att pryda generationspärmen. Extrakopian gör det jobbet. Charizard är lätt att behandla som ett undantag. Det är den inte. Fickan vill ha arten, och en common från ett senare set stänger #006 lika ärligt som ett kort jag har tittat på i tjugo år.",
          ],
        },
        {
          id: "base-set",
          heading: "Base är en lista, inte hela de 151",
          paragraphs: [
            "[[Base|/collections/set/base1]] har 102 kort. En del av de ursprungliga 151 finns inte på den listan. Senare set från Base-eran lägger till fler av dem. En generationspärm väntar inte på de äldre seten. En modern common av en saknad art är en färdig rad.",
            "Jag öppnar ändå gärna Base-listan, för samlarnumren är så jag lärde mig läsa ett kort. Nummerordning, sedan namnet, sedan setsymbolen som kontroll. När en bulklåda påstår sig vara «alla originalen» litar jag inte på påståendet. Jag litar på generationssidan och på korten i handen. Saknas en art i handen är raden tom, oavsett vad locket lovade. Tränare och energi i Base räknas i de 102 och räknas inte i de 151. Den skillnaden är hela anledningen till att jag har två bokmärken och inte ett.",
          ],
        },
        {
          id: "one-line",
          heading: "En rad i taget",
          paragraphs: [
            "Jag jobbar checklistan från #001 och nedåt bara när jag är på tålmodigt humör. Oftare tar jag nästa tomma rad som lådan kan fylla. Ordningen i pärmen förblir numerisk även när ordningen jag hittar korten i inte är det. Ficka #050 flyttar inte längst fram för att jag hittade den en tisdag.",
            "En rad är klar när kortet har en sleeve, sitter i fickan och är noterat. Sedan tittar jag på nästa hål. Etthundrafemtioett är många eftermiddagar och samtidigt ingen gåta. Bulk från nästan vilken era som helst har Kanto-varelser i sig. Arbetet är att matcha, inte att önska.",
            "Jag har generationssidan öppen bredvid lådan och bockar ingenting i huvudet. Varelserna jag tror att jag äger är inte alltid de som sitter i pärmen. Mew och startraderna är de folk utgår från är klara. Jag kontrollerar dem ändå. En pärm som saknar #001 för att Bulbasaur fortfarande ligger utan sleeve i en burk är inte färdiga 151, även om resten av sidorna ser fulla ut. De sista tio hålen tar oftast längre tid än de första femtio, och det är normalt. Det är arter mina lådor råkar sakna, så jag lämnar dem tomma i stället för att hitta på ett ersättningskort. Jag låter inte en full sida längre fram lura mig att hoppa över ett hål jag redan har passerat. Bläddringen går bakåt lika gärna som framåt.",
          ],
        },
      ],
      faqs: [
        {
          q: "Är Base samma sak som alla 151?",
          a: "Nej. Base är ett set, med 102 kort i den offentliga listan. De 151 är varje art från Bulbasaur till Mew, från vilket set som helst. Jag har båda sidorna bokmärkta så att antalen inte blandas ihop.",
        },
        {
          q: "Behöver jag ett first edition-kort till generation 1-pärmen?",
          a: "Nej. Vilket tryck som helst av den arten fyller fickan. Ett first edition hör hemma i en setpärm om det setets lista innehåller det.",
        },
      ],
    },
    {
      slug: "read-a-card",
      title: "Hur jag läser nummer och setsymbol",
      description: "Hur jag hittar samlarnumret, setsymbolen och sällsynthetsmärket så att en bulkhög kan sorteras.",
      h1: "Hur jag läser ett Pokémon-kort",
      lede: "Jag läser ett kort i samma ordning varje gång: namn, samlarnummer, setsymbol, och sedan sällsynthetsmärket om jag fortfarande behöver det. Den ordningen gör en blandad bulkhög till travar jag kan arkivera. Numret matchar setets kortlista. Symbolen hindrar två eror från att hamna i samma trave.",
      diagram: {
        kind: "card",
        title: "Var jag tittar på ett kort",
        description: "En enkel kontur av ett kort med namnet, samlarnumret, setsymbolen och sällsynthetsmärket. Ingen officiell kortbild.",
        caption: "Jag matchar samlarnumret mot kortlistan. Symbolen och sällsynthetsmärket hjälper mig bara att bekräfta setet.",
      },
      sections: [
        {
          id: "the-number",
          heading: "Samlarnumret är sorteringsnyckeln",
          paragraphs: [
            "Samlarnumret är bråket eller paret som är tryckt på kortet, till exempel 4/102. Första talet är kortets plats i det setet. Andra talet är hur många kort setet räknade i den numreringen. [[Base|/collections/set/base1]] är setet jag använder för att lära ut det här, för 102 är antalet på listan jag publicerar från det offentliga datat. Står det 4 på kortet och listans kort 4 har samma namn har jag en träff.",
            "Promo och specialset använder ibland en bokstav, en annan totalsumma eller ett nummer som inte liknar huvudsetet bredvid. Jag tvingar inte in dem i huvudsetets ordning. Jag hittar listan som använder just den numreringen. [[Tidslinjen över set|/guides/sets-in-order]] är hur jag minns att promo ligger intill en era utan att vara erans huvudlista. Fel lista ger ett hål i två pärmar på en gång. Andra talet i bråket är en ledtråd, inte ett löfte om att jag kan gissa setet från det ensamt. Flera set har räknat ungefär lika många kort. Symbolen får avgöra vilken lista som är öppen.",
          ],
        },
        {
          id: "the-symbol",
          heading: "Setsymbolen bekräftar traven",
          paragraphs: [
            "Setsymbolen är det lilla märket, oftast längs bildens högra kant eller strax under den, beroende på eran. Den byts med varje set. Jag försöker inte memorera hela historien av märken. Jag använder symbolen för att hindra två travar från att smälta ihop när numren kunde höra till mer än en lista.",
            "När symbolen och numret inte stämmer med namnet jag väntade mig säger kortet sanningen och minnet gör det inte. Jag slår upp numret på setsidan. [[Pikachu|/pokedex/25]] är en bra påminnelse om att ett namn kan bo i många set, vart och ett med eget nummer. Namnet ensamt är ingen sorteringsnyckel. Två Pikachu med olika nummer är två rader, även om båda ler likadant.",
          ],
        },
        {
          id: "rarity",
          heading: "Sällsynthetsmärken är en svag sortering",
          paragraphs: [
            "En cirkel, en diamant och en stjärna har alla tryckts på kort, och betydelsen försköts när spelet lade till sällsyntheter. Jag håller ingen privat tabell över vad varje märke betydde varje år. Tabellen skulle bli längre än sorteringen, och den skulle ändå inte tala om vilken checklistarad som är tom.",
            "Jag kastar en blick på märket bara för att dela en trave i «lätt att sleeva» och «jag tittar två gånger innan det åker i en ficka». Det är trygghet, inte katalogisering. [[Att sortera bulk|/guides/bulk-cards]] håller sig till numret. Sällsynthet är hur en sida ser ut. Numret är hur en pärm blir färdig. Ett blankt märke och ett glansigt kort kan sitta i samma set. Jag låter inte glansen starta en egen trave innan numret är läst.",
          ],
        },
        {
          id: "regulation",
          heading: "Regleringsmärket är en formatbokstav",
          paragraphs: [
            "På kort tryckta från 2020 använder Play! Pokémon ett regleringsmärke: en bokstav nere till vänster. [[Reglerna för Play! Pokémon|https://play.pokemon.com/en-us/resources/rules/]] säger att Standard roterar efter den bokstaven. Äldre kort har ingen bokstav. Ett kort med en äldre bokstav, eller utan bokstav, kan ändå vara lagligt om samma kort tryckts om med en aktuell bokstav. De tillåtna bokstäverna byts. Jag lär inte in dagens lista i en pärm, och jag sorterar inte efter bokstaven.",
            "Bokstaven är inte samlarnumret, och den är inte sällsynthetstecknet. [[Hjälpen till kortdatabasen|https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database]] lägger sällsynthetstecknet i nedre högra hörnet, vid expansionssymbolen. Jag tittar på bokstaven bara när någon frågar om ett kort får spelas i ett aktuellt event. För pärmen avgör numret fortfarande fickan. Ett kort jag inte litar på når aldrig den fickan. Det är [[hur jag känner igen en förfalskning|/guides/spot-fakes]].",
          ],
        },
        {
          id: "in-practice",
          heading: "En genomgång av en blandad hög",
          paragraphs: [
            "Jag tar upp ett kort. Jag läser namnet högt om högen är rörig, för ögonen hoppar när jag går för fort. Jag hittar samlarnumret. Jag kontrollerar symbolen mot traven jag tror att det hör till. Jag släpper det på den traven. Kan jag inte placera det på några sekunder åker det till en frågetrave, inte tillbaka i blandningen.",
            "Frågetraven får en lugnare genomgång med [[samlingarna|/collections]] öppna. [[Pärmguiden|/guides/collecting-binders]] är det jag matar: setrader först, artsrader sedan. Ett kort jag inte kan identifiera får ändå en sleeve om hörnet är mjukt. Identifieringen kan vänta en timme. Ett böjt hörn blir värre medan jag tvekar. Frågetraven får ett namn på en lapp, och den ställs inte under en tyngre låda. Nästa lugna genomgång ska kunna hitta den utan att börja om från hela högen.",
            "Språket på kortet kan sakta ner genomgången, och det är okej. Det engelska namnet i datat är det kortlistan använder. Ett kort tryckt på ett annat språk har fortfarande ett samlarnummer och en setsymbol. Jag matchar dem, och läser sedan artsidan om jag vill ha det lokala namnet. Jag bygger inte en separat pärm per språk. En kortlista, en nummerordning. Namnet på kortet får skilja sig från namnet på skärmen.",
          ],
        },
      ],
      faqs: [
        {
          q: "Vad gör jag om kortet saknar ett bråk?",
          a: "Jag behandlar det som en promo eller ett specialtryck och letar efter en lista med den sortens nummer. Jag hittar inte på en plats åt det i huvudsetet. Frågetraven är där det väntar.",
        },
        {
          q: "Ska jag sortera efter sällsynthetssymbolen?",
          a: "Det gör jag inte. Symbolen har ändrats över tid. Samlarnumret matchar kortlistan. En glans på kortet kan vänta tills traven redan ligger i rätt set.",
        },
      ],
    },
    {
      slug: "protect-cards",
      title: "Att skydda Pokémon-kort utan krångel",
      description: "Sleeves, pärmsidor och vanlig förvaring för en samling som öppnas, också ett barns pärm.",
      h1: "Att skydda Pokémon-kort utan krångel",
      lede: "Jag skyddar kort på det billigaste sättet som fortfarande låter mig öppna pärmen. En mjuk sleeve, en sida med fickor och en hylla som hålls torr. Det är hela planen. Jag använder den på commons, för common är ofta kortet som stänger en rad. En pärm jag inte öppnar är inte en samling jag håller vid liv.",
      sections: [
        {
          id: "sleeve-first",
          heading: "En sleeve före en ficka",
          paragraphs: [
            "Sleeven är en tunn klar ficka för ett kort. Jag sätter på den innan kortet någonsin ser en pärmsida. Pärmsidor nöter. Sleeves tar det nötandet i stället. Jag köper de enkla i en bunt och sparar dem inte till holo. En common med ett vitnat hörn är fortfarande ett hål i en checklista, och att ersätta den är en sämre eftermiddag än att sleeva den nu. Jag köper sleeves i den storlek som faktiskt passar ett Pokémon-kort, inte en påse som är nästan rätt. Nästan rätt böjer hörnet den skulle skydda.",
            "Jag trycker till sleeven så att kortet ligger plant, och jag slickar den inte, tejpar den inte och dubbelsleevar inte en bulk-common som en ritual. Dubbla sleeves är till ett kort som reser. Vardagskortet får en sleeve. [[Pärmguiden|/guides/collecting-binders]] utgår från att det steget redan är gjort. Ett noterat kort med bar yta är ett kort jag noterade för tidigt.",
          ],
        },
        {
          id: "pages",
          heading: "Pärmsidor som rymmer ett kort i sleeve",
          paragraphs: [
            "[[Sidor med nio fickor och fyra fickor|/guides/organize-binder]] är valet. Fickan måste ta emot en sleeve utan att böja kortet. Måste jag tvinga är sidan fel. Jag byter en trasig ficka i stället för att hoppas att revan stannar. En trasig ficka äter hörn.",
            "Ringpärmar duger när ringarna inte trycker på korten. Jag hindrar ringarna från att ligga på en sida genom att inte överfylla pärmen. En D-ring som stänger rent är snällare än en pärm som är proppad tills pärmarna slår sig. Jag startar hellre en andra pärm än böjer sista sidan i den första.",
          ],
        },
        {
          id: "storage",
          heading: "Var pärmarna bor",
          paragraphs: [
            "Stående på en hylla, eller liggande om pärmen är tunn, borta från ett fönster och borta från en fuktig yttervägg. Jag förvarar inte pärmar i en källarlåda, en het vind eller bagageutrymmet i en bil. Värme böjer en sleeve. Fukt fläckar en sida. Sol bleker tryck. Inget av det syns samma dag. Det syns när jag öppnar pärmen en sommar senare. En pärm som lutar mot en varm radiator får samma behandling som vinden: den flyttas. Torr och sval räcker, och jag känner på hyllan med handen om jag är osäker en kall morgon.",
            "Bulk som inte sitter i en pärm bor i en torr låda, staplad så att korten inte böjs av något tyngre. Jag håller mat och dryck borta från det bordet. Det låter petigt tills apelsinjuice är inne i en sleeve. [[Samlingarna|/collections]] kan byggas upp igen från korten. En hopklibbad trave kan det inte.",
          ],
        },
        {
          id: "toploader",
          heading: "En toploader är till resan",
          paragraphs: [
            "En toploader är ett styvt plastfodral. Jag tar ett när ett kort lämnar huset: en pärm på väg till ett barn, eller ett enstaka kort i ett paket. Den är tjockare än en pärmsida vill, så den stannar utanför nisidan. Hemma bor kortet i en mjuk sleeve, i fickan. Ett hårt fodral på varje common skulle ge en pärm jag inte öppnar, och att öppna den är poängen.",
            "Jag tejpar inte fast ett kort i en toploader. Har jag ingen, slår den mjuka sleeven och en platt ask fortfarande ett böjt hörn. [[Pärmguiden|/guides/collecting-binders]] räknar redan med den mjuka sleeven. Den styva är undantaget, för resan, inte för vardagssidan.",
          ],
        },
        {
          id: "kids",
          heading: "Ett barns samling",
          paragraphs: [
            "[[En pärm med ett barn|/guides/collecting-with-a-child]] börjar med sleeves och en pärm barnet kan öppna, inte med ett styvt fodral för varje common. Jag vill att barnet vänder blad. Ett kort som aldrig öppnas kan förbli perfekt och samtidigt sluta vara en del av eftermiddagen. Sleeves är kompromissen jag litar på. Barnet får öppna pärmen själv. Jag står inte och håller i den som om sidorna vore en utställning. Sleeven är redan på. Resten är bläddring.",
            "När en färdig pärm [[lämnar huset till ett barn|/guides/donating-cards]] lämnar den med sleeves på, i sidor, med ringar som fungerar. Jag lämnar inte över lösa kort och kallar det samma gåva. Sleeven är en del av pärmen. Den är också delen som överlever att bli lite hårdhänt älskad, vilket är vad en bra pärm är till för.",
            "Jag byter sidor när plasten grumlar sig eller sömmen i fickan spricker. Jag lagar inte en söm med tejp på kortsidan. Tejp är så ett kort får en kladdig kant. En ny sida är lagningen. Den gamla sidan, om resten är hel, kan hålla lappar eller checklistor, inte kort. En gång om året öppnar jag varje pärm tillräckligt för att se de bakre sidorna, för det är där en skev ficka gömmer sig. Den genomgången har räddat fler kort än något specialfodral jag har funderat på och inte köpt.",
          ],
        },
      ],
      faqs: [
        {
          q: "Behöver commons sleeves?",
          a: "I mina pärmar, ja. Common är ofta kortet som fyller raden. Jag sleevar det innan det åker i en ficka. Ett vitnat hörn är svårare att laga än en sleeve är att sätta på.",
        },
        {
          q: "Är en toploader standarden?",
          a: "Nej. En hård sleeve är det jag använder när ett kort reser. Pärmen hemma använder en mjuk sleeve och en sida med fickor. Ett hårt fodral för varje common skulle göra pärmen till något jag inte öppnar.",
        },
      ],
    },
    {
      slug: "donating-cards",
      title: "Att ge bort Pokémon-kort till barn",
      description: "Jag lämnar över en färdig pärm till ett barn, via en avdelning, ett boende eller en fritidsklubb, och skriver upp dagen.",
      h1: "Att ge bort Pokémon-kort till barn",
      lede: "Jag ger bort Pokémon-kort genom att lämna över en färdig pärm. En sjukhusavdelning, ett boende eller en fritidsklubb kan vara platsen den hamnar på. Lös bulk stannar här och fyller nästa pärm. Jag frågar platsen först, skriver upp dagen pärmen lämnar och publicerar inget försäljningspris. Är svaret inte ännu stannar pärmen på hyllan och den offentliga listan förblir oförändrad. En plan är ingen överlämning. Jag väntar hellre än noterar en gåva som inte har lämnat mina händer.",
      sections: [
        {
          id: "finished",
          heading: "Bara en pärm jag har gjort färdig",
          paragraphs: [
            "En halvfylld pärm är ett projekt. En färdig pärm är något jag kan lägga i någon annans händer utan en ursäkt. Jag bläddrar igenom sidorna innan den lämnar. Varje ficka checklistan bad om har ett kort. [[Den långa guiden|/guides/collecting-binders]] är skälet till att den ribban finns. Jag vill inte att ett barn ärver mina hål.",
            "Pärmen har sleeves, för [[skyddet|/guides/protect-cards]] är en del av gåvan och inte en privat smak. Jag räknar fickorna mot checklistan en sista gång vid bordet, inte i dörren. Saknas ett kort åker pärmen tillbaka till hyllan samma kväll. En ursäkt i receptionen gör inte hålet mindre. Ringarna stänger. Sidorna är inte trasiga. Är en ficka trött byter jag sidan före överlämningen. Det är vanlig omsorg, inte en ceremoni.",
          ],
        },
        {
          id: "where",
          heading: "Avdelningar, boenden och fritidsklubbar",
          paragraphs: [
            "Jag frågar platsen vad de faktiskt kan använda. En barnavdelning, ett lekrum på ett boende och en fritidsklubb vill inte alla samma sak, och en del kan inte ta emot kort alls. Jag hör hellre nej än lämnar en pärm i en reception som inte har bett om den. Personen som arbetar där känner rummet. Jag känner pärmen. Jag frågar också hur de vill ta emot den: om någon möter mig, om pärmen ska vara märkt, och om kort alls är välkomna den här månaden. Rummet bestämmer. Jag anpassar pärmen efter det, inte tvärtom.",
            "Jag gör inte överlämningen till ett tal om att samla. Pärmen är hela presentationen. Vill ett barn veta ordningen finns ordningen i sidorna: ett set i nummerordning, eller en generation i Pokédexordning. [[Att samla med ett barn|/guides/collecting-with-a-child]] är hur jag beter mig när jag är den vuxna vid bordet. Samma uppförande gäller när jag bara är personen som kom med pärmen.",
          ],
        },
        {
          id: "public-list",
          heading: "Vad den offentliga listan visar",
          paragraphs: [
            "[[Listan över det som getts bort|/donations]] noterar mottagaren och datumet. Den noterar inget försäljningspris, och den noterar inte vad ett kort skulle säljas för. En pärm som lämnar huset är ett faktum om projektet. Det är ingen värdering.",
            "[[Samlingarna|/collections]] visar fortfarande checklistan de korten kom från. När jag har markerat pärmen som bortgiven slutar jag behandla de raderna som hål jag behöver fylla igen, om jag inte har valt att bygga den pärmen en andra gång. Skärmen ska stämma med hyllan. En frånvarande pärm ska inte se ut som en pärm jag glömde att börja.",
          ],
        },
        {
          id: "spares",
          heading: "Extrakort stannar i ledet",
          paragraphs: [
            "[[Bulk|/guides/bulk-cards]] är hur nästa pärm blir färdig. Extrakort går inte ut som en lös näve bredvid gåvan. En lös näve ser generös ut och anländer som läxa. Jag behåller extrakorten, sorterar dem och låter dem stänga riktiga rader.",
            "Har du extrakort till den sorteringen, skriv till [[magnus@linksforcards.com|mailto:magnus@linksforcards.com]]. Berätta vad som finns i lådan på vanlig svenska: set du känner igen, eller bara bulk. Jag gör sorteringen. Butiker som skickar kort tackas med namn på tacksidan. Det är hela upplägget. En låda som kommer in får samma setsortering som min egen bulk. Jag lovar inte en färdig pärm en viss vecka. Jag lovar att korten hamnar i fickor när en rad faktiskt är tom.",
            "Jag skriver upp överlämningen samma dag den sker, inte i slutet av månaden. Mottagaren kan vara namnet på en avdelning eller en klubb om ett barns namn inte är mitt att publicera. Datumet är dagen pärmen lämnade mina händer. Ber en plats mig vänta stannar pärmen på hyllan och listan förblir oförändrad. Jag är hellre långsam än hittar på en gåva som inte har hänt. En pärm som fortfarande står i mitt hus är inte en pärm jag har gett bort, hur säker jag än är på planen.",
          ],
        },
      ],
      faqs: [
        {
          q: "Tar du emot lös bulk?",
          a: "Ja. Lös bulk är välkommen. Jag sorterar den till pärmar. Jag lämnar inte vidare lös bulk som gåvan. En färdig pärm är det som lämnar, och extrakorten stannar för att fylla nästa.",
        },
        {
          q: "Visar de offentliga sidorna ett försäljningspris?",
          a: "Nej. Den offentliga listan visar en mottagare och ett datum. Den visar aldrig ett försäljningspris. Pärmen är en färdig checklista som lämnar huset, och det är det enda faktum jag publicerar om den.",
        },
      ],
    },
    {
      slug: "sets-in-order",
      title: "Pokémon-set i ordning",
      description: "Serierna och seten i den offentliga kortlistan, från Base 1999 till den nyaste serien, med en länk till varje setsida.",
      h1: "Pokémon-set i ordning",
      lede: "Jag håller seten i den ordning den offentliga kortlistan använder. Det finns {sets} set i {seriesCount} serier, och {cards} kort bakom de namnen. Listan under den här anteckningen är den ordningen, byggd från samma data som checklistorna. Varje rad länkar till setsidan jag markerar mot. Datumet på raden är releasedatumet från det datat.",
      sections: [
        {
          id: "series-and-set",
          heading: "En serie är en hylla, ett set är en pärm",
          paragraphs: [
            "En serie är en följd av set som delar en era. Base, Jungle och Fossil sitter i Base-serien. Ett set är en kortlista med egna samlarnummer. Jag bygger pärmar på setnivå och bläddrar på serienivå. Att blanda de två orden är så en låda blir märkt «Base» när hälften är Jungle. När jag är osäker läser jag setsymbolen innan jag läser lådans etikett. Etiketten skrev jag själv, ibland för fort. Symbolen trycktes med kortet och har inte ändrat sig sedan dess.",
            "[[Pärmguiden|/guides/collecting-binders]] använder den här tidslinjen när jag avgör vilken lista ett kort hör till. [[Att ordna sidorna|/guides/organize-binder]] utgår från att listan redan är vald. Tidslinjen talar inte om vilket kort som är snyggt. Den talar om vilken checklista som är öppen.",
          ],
        },
        {
          id: "how-to-read",
          heading: "Hur jag läser listan",
          paragraphs: [
            "Varje block nedan är en serie. Inuti det löper seten efter releasedatum från det offentliga datat. Datumet är releasedatumet i det datat, utskrivet på sidans språk. Antalet är hur många kort som finns i listan jag publicerar, vilket är namn och samlarnummer och inget mer. Jag lägger inte till en gissning för ett kort datat inte har.",
            "Promo, POP-serien och de små listorna som samlas under Other finns i datat för att de också har samlarnummer. Jag gömmer dem inte för att historien ska se prydlig ut. En promo är fortfarande en lista. Sorterar jag bulk och numret matchar en promolista är det den traven kortet hamnar i. Ett set utan datum i datat får ändå stå där datat placerade det. Jag hittar inte på en månad för att raden ska se jämn ut. Ett tomt datum är ärligare än ett jag har gissat.",
          ],
        },
        {
          id: "early",
          heading: "Var jag ber folk börja titta",
          paragraphs: [
            "[[Base-serien|/collections/series/base]] är början på den publicerade listan. [[Base|/collections/set/base1]] själv är 9 januari 1999, 102 kort. [[Checklistan för generation 1|/guides/gen-1-checklist]] förklarar varför de 102 korten inte är samma sak som de ursprungliga 151 arterna. Jag skickar folk till båda sidorna med flit. Förväxlingen är vanlig och lösningen är bara de två antalen, sida vid sida. 102 och 151 får stå kvar som två tal på en lapp om jag märker att jag börjar säga dem som om de vore samma sak. De är inte samma sak. Lappen är billigare än en felsorterad pärm.",
            "Andra änden av listan rör sig när datat rör sig. [[Mega Evolution|/collections/set/me1]] finns i det nuvarande datat som en egen serie. Jag länkar dit så att tidslinjen har en ny dörr, inte för att ett nytt set är viktigare än en gammal common. [[Samlingarna|/collections]] är samma lista med staplarna. Den här anteckningen är listan med datumen. [[Mega Evolution—Delta Reign|/collections/set/delta-reign]] finns inte i den listan än. Jag har skrivit en sida till pärmen innan samlarnumren finns, och jag sätter inte in en gissad räkning här.",
          ],
        },
        {
          id: "using-it",
          heading: "Att använda tidslinjen medan jag sorterar",
          paragraphs: [
            "Jag har den här sidan öppen när en låda spänner över mer än en era. Jag memorerar inte utgivningsår. Jag klickar serien, sedan setet, sedan matchar jag samlarnumret. Stämmer namnet lämnar kortet lådan. Stämmer namnet inte har jag fel lista, och att tvinga in det skulle göra ett hål i två pärmar samtidigt. Jag sorterar lådan i seriens ordning uppifrån och ner, en serie klar innan nästa börjar. Då blandas inte Base med en modern hög bara för att båda har en Pikachu på toppen.",
            "Datat byggdes {built}. Saknas ett splitternytt set här saknas det i det bygget, det gömmer sig inte i en meny. Jag visar hellre en daterad lista än ett vagt löfte om att allt fram till i dag är med. Setsidorna som länkas nedan är checklistorna jag faktiskt markerar.",
            "Jag använder antalet på varje rad som en verklighetskontroll medan jag sorterar. Tror jag att jag är klar med ett set och pärmen har färre kort än antalet har jag missat ett nummer, oftast en tränare eller en energi nära slutet. Har jag fler kort än antalet har jag blandat in en promo eller nästa set. Oavsett vilket är listan rättelsen. Jag avrundar inte ett set till en känsla av «ungefär hundra». Numret är antalet fickor.",
          ],
        },
      ],
      faqs: [
        {
          q: "Ligger seten i utgivningsordning inom varje serie?",
          a: "Ja. Varje serieblock listar sina set efter releasedatumet i det offentliga kortdatat. Serierna själva följer det datats ordning. Jag sorterar en låda i samma ordning så att travarna matchar sidorna.",
        },
        {
          q: "Ingår priser i den här listan?",
          a: "Nej. Den innehåller setnamnet, releasedatumet och kortantalet från den offentliga listan. Ingenting på den här sidan är ett försäljningspris. Antalet är antalet fickor i den pärmen, inget annat.",
        },
      ],
    },
    {
      slug: "collecting-with-a-child",
      title: "Att börja samla Pokémon-kort med ett barn",
      description: "Hur jag börjar en pärm med ett barn: ett uppdrag, bulk, sleeves och lov att sluta.",
      h1: "Att börja en Pokémon-samling med ett barn",
      lede: "Jag är en pappa som gillar checklistan, och jag har suttit vid bordet med ett barn som gillar bilderna. Sättet jag börjar på är mindre än min egen hylla. En pärm. Ett uppdrag. Bulk. Jag avslutar sittningen medan den fortfarande är rolig. Barnet väljer kortet. Jag insisterar bara på sleeven och den numrerade fickan.",
      sections: [
        {
          id: "one-binder",
          heading: "En pärm, med flit",
          paragraphs: [
            "Jag öppnar inte med hela historien om kortspelet. [[Den långa guiden|/guides/collecting-binders]] är till mig, senare, om barnet frågar var de andra pärmarna kom från. Vid första sittningen erbjuder jag ett val: en setpärm för en kort lista, eller [[generationspärmen för generation 1|/collections/generation/1]] med ett kort av varje ursprunglig art. [[Anteckningen om generation 1|/guides/gen-1-checklist]] är versionen av det valet jag kan förklara på en minut. Etthundrafemtioett varelser, ett kort var, vilket tryck som helst. Jag lägger undan min egen öppna pärm innan barnet sätter sig. Två öppna pärmar på samma bord blir snabbt en gemensam hög, och den högen har inget uppdrag.",
            "Två projekt på en gång är så ett barn får ett knä fullt av travar och ingen färdig sida. Jag har gjort det. Andra sittningen blir värre, för bordet ser ut som en syssla. En pärm betyder att nästa kort har en uppenbar ficka. Uppenbart är snällt.",
          ],
        },
        {
          id: "their-choice",
          heading: "Låt barnet välja första sidan",
          paragraphs: [
            "Jag blandar en liten trave bulk i sleeves och låter barnet välja det första kortet som åker in. Är pärmen i Pokédexordning hamnar kortet ändå i sin numrerade ficka, inte längst fram. Jag förklarar det en gång, utan tal. Fickan är varelsens plats. Att välja kortet är det roliga. Numret är löftet om att kortet går att hitta igen. Ligger den valda varelsen redan i pärmen får barnet välja en gång till ur samma trave. Dubbletten åker tillbaka till bulk utan ett tal om att valet var fel.",
            "Jag rättar inte smak. En Pikachu är ett bra första kort. Det är en varelse jag tycker är alldaglig också. [[Bulk|/guides/bulk-cards]] är rätt hög till det här, för det finns tillräckligt med kopior för att ett val inte ska vara dyrbart. En dyrbar trave får mig att hovra. Att hovra är motsatsen till en lördag vid köksbordet.",
          ],
        },
        {
          id: "sleeves",
          heading: "Sleeves, sedan sidan",
          paragraphs: [
            "[[Sleeves|/guides/protect-cards]] åker på innan kortet blir älskat av små händer. Jag visar det som en rörelse, inte en föreläsning: kortet in, sleeven plan, fickan öppen, kortet in. Barn är bra på rörelser. De är mindre intresserade av mina åsikter om förvaring. Jag håller dryck borta från bordet och berättar inte skälet om jag inte blir tillfrågad.",
            "Böjs ett kort gör jag det inte till en moralisk händelse. Jag sleevar en ersättare ur bulken om jag har en, eller lämnar raden tom tills jag har det. En tom rad är tillåten. [[En pärm jag ger bort|/guides/donating-cards]] är en färdig pärm, och ett barns lördagspärm måste inte bli det. Den kan förbli en lördagspärm.",
          ],
        },
        {
          id: "stop",
          heading: "Sluta medan det fortfarande är roligt",
          paragraphs: [
            "Jag avslutar sittningen när barnet fortfarande är villigt, inte när jag har nått ett jämnt tal. Tjugo minuter som slutar med en stängd pärm händer igen. En timme som slutar med en suck kanske inte gör det. [[Samlingarna|/collections]] kommer ihåg raderna jag har noterat. Ingenting på skärmen är viktigare än att barnet vill öppna pärmen nästa gång. Jag ställer inte ett mål om tio kort eller en full sida. Målet är att pärmen stängs medan någon fortfarande vill öppna den igen.",
            "Jag följer inte ett barns pärm som en tävling mot min. De offentliga sidorna i det här projektet är mina checklistor. Ett barns sida får vara ofärdig för alltid. Växer de in i den längre hobbyn finns setlistorna och artsidorna där. Gör de inte det har pärmen ändå gjort sitt jobb: kort i ordning, sleeves på, en eftermiddag som tillhörde dem.",
            "Frågorna jag faktiskt svarar på är små. Vilken ficka det här kortet ska ligga i. Om den här dubbletten kan fylla ett hål. Om det är okej att sluta. Ja, den numrerade fickan. Ja, om raden är tom. Ja, sluta. De större åsikterna behåller jag för mig själv om barnet inte frågar. En samling som börjar så här kan förbli liten och ändå vara en riktig samling. Den har en ordning, en sleeve och en nästa tom rad när någon känner för att öppna den. Ett kort som ser fel ut kommer inte in medan jag är osäker. [[Hur jag känner igen en förfalskning|/guides/spot-fakes]] är den kontrollen, tyst, med ett annat bulk-kort erbjudet i stället.",
          ],
        },
      ],
      faqs: [
        {
          q: "Vilken pärm ska ett barn börja med?",
          a: "Jag erbjuder en: antingen en kort setlista, eller generation 1 med ett kort av varje art. Jag sätter inte igång ett barn med varje set på en gång.",
        },
        {
          q: "Behövs sällsynta kort till ett barns pärm?",
          a: "Nej. Commons ur bulk fyller raderna. Ett sällsynt kort är valfritt, och det är inte poängen med den första eftermiddagen.",
        },
      ],
    },
    spotFakesSv,
  ];
}
