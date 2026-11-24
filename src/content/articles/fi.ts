import type { ArticleCopy } from "@/lib/articles";
import { spotFakesFi } from "./spot-fakes/fi";

export function finnishArticles(): ArticleCopy[] {
  return [
    {
      slug: "collecting-binders",
      title: "Pokémon-korttien kerääminen kansioihin",
      description: "Miten minä kerään Pokémon-kortteja settikansioon ja Pokédex-kansioon, ja missä korttilistat ovat.",
      h1: "Näin minä kerään Pokémon-kortteja kansioihin",
      lede: "Kortit eivät jää kasaksi hyllylle. Minä pidän niitä kansioissa. Yksi kansio seuraa setin keräilynumeroita, ensimmäisestä viimeiseen, valmentajat ja energiat mukana. Toinen kansio seuraa Pokédexiä ja kysyy vain, onko laji paikalla. Tämä teksti on kartta siihen eroon. Lyhyemmät tekstit ottavat yhden kysymyksen kerrallaan, siinä järjestyksessä kuin ilta pöydän ääressä oikeasti etenee: ensin kansion tehtävä, sitten bulk pöydällä, ja lopuksi numero kortissa, kun pino ei suostu riviksi.",
      diagram: {
        kind: "binders",
        title: "Kaksi tapaa täyttää kansio",
        description: "Settikansio seuraa keräilynumeroita. Sukupolvikansio pitää yhden kortin jokaisesta lajista Pokédex-järjestyksessä.",
        caption: "Vasemmalla: yksi setti, numerojärjestyksessä. Oikealla: yksi laji taskua kohti, Pokédex-järjestyksessä.",
      },
      sections: [
        {
          id: "two-binders",
          heading: "Kaksi kansiota, kaksi tehtävää",
          paragraphs: [
            "Settikansio ja sukupolvikansio vastaavat eri kysymyksiin, enkä minä sekoita niitä enää. Settikansio kysyy, onko setin jokainen kortti paikalla keräilynumerojärjestyksessä, myös silloin kun kortti on aivan tavallinen. Sukupolvikansio kysyy, onko minulla yksi kortti jokaisesta lajista sillä Pokédex-välillä. Mikä tahansa painos kelpaa siihen, ja mikä tahansa kieli kelpaa. Kun annoin yhden kansion tehdä molemmat työt, tavallinen puuttuva kortti katosi näkyvistä, koska holo-rivi näytti valmiilta ja reikä hukkui kiiltoon.",
            "Illasta iltaan tehtävän lajittelun pitkä versio on [[miten minä järjestän kansion|/guides/organize-binder]]. Lyhyt versio on se, jonka olisin halunnut kirjoittaa aiemmin: valitse tehtävä ennen kuin sivut ostetaan. Sivu, jossa on yhdeksän taskua, on ruudukko. Se ei välitä kortin tarinasta. Minä välitän, joten järjestys päätetään ensin ja kortit saavat asettua sen mukaan. Kirjoitan tehtävän kansion selkämykseen lyijykynällä, yhden sanan: setti tai sukupolvi. Jos selkämyksessä lukee molemmat, kansio on sekaisin jo ennen ensimmäistä korttia. Se sana on lupaus sivuille, ja minä pidän sen, kun uusi pino houkuttelee toiseen suuntaan.",
          ],
        },
        {
          id: "set-binder",
          heading: "Settikansio seuraa korttilistaa",
          paragraphs: [
            "[[Base|/collections/set/base1]] on esimerkki, jonka minä yhä avaan, kun joku kysyy miten settikansio toimii. Setti ilmestyi 9. tammikuuta 1999, ja julkisessa korttilistassa on 102 korttia. Kansion sivu seuraa sitä listaa: numero 1, sitten 2, sitten 3, valmentajat ja energiat siinä missä listakin. Jos kortti on listalla, sille on tasku. Minä en jätä reikää siksi, että kortti on tavallinen, enkä vedä holoa etusivulle siksi, että se kiiltää.",
            "Koko sarjojen ja settien järjestys on [[Pokémon-setit järjestyksessä|/guides/sets-in-order]]. Sen aikajanan minä otan esiin, kun bulkkilaatikko sekoittaa vuosia. Jungle-kortti ei kuulu Base-kansioon, vaikka kuva tuntuisi samalta vuodelta. Setin sivu on korttilista ja tarkistuslista yhtä aikaa. Minä merkitsen rivin vasta, kun juuri se kortti on kansiossa, en silloin kun olen nähnyt sen pinossa pöydällä. 102 taskua tarkoittaa, että lopun energia on yhtä pakollinen kuin ensimmäinen Pokémon. Ohitan sen vain, jos korttilista ohittaa sen. Base ei ohita, ja tyhjä tasku lopussa on yhtä todellinen kuin tyhjä tasku alussa.",
            "Kolmas kansio seuraa teemaa, ei yhtä settiä eikä yhtä lajipaikkaa. [[Teemakansiot|/collections/themes]] kokoavat jokaisen englanninkielisen painoksen yhdestä lajista, yhdestä taiteilijasta tai yhdestä korttityypistä. [[Kaikki Pikachu-kortit|/collections/themes/pikachu]] on lista, jonka avaan kun pino on täynnä sitä naamaa.",
          ],
        },
        {
          id: "dex-binder",
          heading: "Sukupolvikansio seuraa Pokédexiä",
          paragraphs: [
            "Sukupolvikansioon mahtuu yksi kortti jokaisesta lajista. [[Sukupolvi 1|/collections/generation/1]] on alkuperäiset 151. Sukupolvet 1–9 ovat {species} lajia. [[Miten minä täytän Pokédex-kansion|/guides/pokedex-binder]] on pitkä muistiinpano siitä, miten sen tekee jahtaamatta harvinaista painosta. [[Sukupolven 1 tarkistuslista|/guides/gen-1-checklist]] pysyy ensimmäisissä 151 lajissa, sillä sitä kansiota ihmiset tarkoittavat, kun he puhuvat alkuperäisistä olennoista.",
            "[[Pikachu|/pokedex/25]] näyttää, miksi sääntö tarvitaan. Lajin sivu luettelee jokaisen painoksen julkisessa aineistossa, monessa setissä. Sukupolvikansio tarvitsee niistä yhden. Bulkista otettu Pikachu täyttää taskun. Myöhempi kuvitettu harvinaisuus täyttää saman taskun. Minä en säilytä jokaista painosta siinä kansiossa. Se työ kuuluu settikansiolle, ja vain sille setille, jota minä oikeasti rakennan. Jos saman lajin toinen kortti on kauniimpi, se odottaa bulkkilaatikossa. Tasku ei kasva toista paikkaa varten. Kauneus saa vuoroaan vasta, kun vaihdan kortin ja vanha palaa kasaan.",
          ],
        },
        {
          id: "bulk",
          heading: "Bulk on se kasa, joka täyttää taskut",
          paragraphs: [
            "Useimmat kortit, jotka sulkevat rivin, tulevat bulkista. Sanon sen lämmöllä. Bulk on tavallinen kasa: tavalliset kortit, hieman harvinaisemmat, kaksoiskappaleet ja se Magikarp, joka ilmestyy taas. [[Mitä minä teen bulkille|/guides/bulk-cards]] on lajittelu. [[Miten minä luen kortin|/guides/read-a-card]] on se, miten löydän keräilynumeron ja setin merkin, kun kasa on sekaisin eikä nimi riitä.",
            "Minä lajittelen setin mukaan ennen kuin lajittelen olennon mukaan. Kortti, joka sopii settikansion avoimeen riviin, menee sinne. Ylimääräinen kappale, joka sopii tyhjään lajiriviin, voi siirtyä sukupolvikansioon. Kaikki muu jää bulkkilaatikkoon, kunnes tarkistuslista pyytää sitä tai valmis kansio on valmis lähtemään talosta. Bulk ei siis ole se, mikä jää jäljelle kokoelmasta. Bulk on kasa, joka tekee kansion valmiiksi. Illan lopussa lasken avoimet rivit, en kiiltäviä kortteja. Luku joka pienenee, on ilta joka onnistui. Kiiltävä pino, jonka rivejä en ole tarkistanut, saa odottaa seuraavaan kertaan.",
          ],
        },
        {
          id: "tracker",
          heading: "Julkinen luettelo on tarkistuslista, ei kauppa",
          paragraphs: [
            "[[Etusivu|/]] on julkinen laskenta: kuinka monta eri korttia on kirjattu, ja mitkä kansiot ovat liikahtaneet. [[Kokoelmat|/collections]] on työlista. Siellä setit on ryhmitelty sarjoittain, jokaisella sukupolvikansiolla on linkki, ja jokaisella lajilla on oma sivu. Täysi palkki tarkoittaa, että minä olen kirjannut kortin. Se ei sano mitään myyntihinnasta. Julkiset sivut eivät koskaan näytä sellaista.",
            "Kun ruudun rivi ja kansion kortti eivät täsmää, kansio voittaa. Minä kutsun kansion valmiiksi vasta, kun olen selannut sivut läpi. Ruutu on sitä varten, että näen reiän ennen kuin unohdan sen. Siinä on koko luettelo. Yksikään ruutu siellä ei ole hinnasto, eikä yksikään palkki tarkoita, että kortti olisi myynnissä. Minä teen merkinnän vasta, kun olen selannut taskun kohdalle. Merkintä ilman selausta on muistilappu, ei valmis kansio, ja seuraava istunto alkaa siitä, mistä merkintä puuttuu. Jos ruutu näyttää täyttä palkkia ja tasku on tyhjä, pyyhin merkinnän. En selitä tyhjää taskua ruudulle. Ruutu seuraa kansiota, ei toisinpäin, ja sen takia minä selailen sivut ennen kuin kutsun mitään valmiiksi.",
          ],
        },
        {
          id: "care-and-kids",
          heading: "Suojat, lapsi ja kansio joka lähtee",
          paragraphs: [
            "Kortti, joka asuu kansiossa, saa suojan ensin. [[Korttien suojaaminen|/guides/protect-cards]] on muistiinpano suojista, yhdeksän taskun sivuista, neljän taskun sivuista ja siitä, minne minä en pane kansiota. Aloitin ruokakaupan peltirasiasta ja opin kostean hyllyn kantapään kautta. Suoja on askel, jota minä en ohita, en edes tavalliselta kortilta, jota on joka bulkkilaatikossa.",
            "[[Kerääminen lapsen kanssa|/guides/collecting-with-a-child]] on muistiinpano, jota käytän, kun lapsi istuutuu pöytään. Yksi kansio, yksi tehtävä ja lupa lopettaa. [[Valmiin kansion antaminen eteenpäin|/guides/donating-cards]] on se, mitä tapahtuu, kun kansio on valmis ja minä luovutan sen. Minä luovutan valmiin kansion, en kourallista irtokortteja. Julkinen lista kirjaa vastaanottajan ja päivämäärän.",
            "Jos jättäisin yhden ohjeen lapulle, se kuuluisi näin. Valitse kansion tehtävä. Avaa oikea tarkistuslista. Pane suoja korttiin, joka täyttää reiän. Merkitse rivi vasta, kun kortti on taskussa. Lopeta, kun pöytä menee sekaisin, ja aloita seuraava kerta samasta reiästä. Loput näistä muistiinpanoista ovat se ohje kirjoitettuna kysymykseen, jonka minä oikeasti saan: sivun koko, bulk, ne 151, koko Pokédex, numero kortissa, säilytys, lapsi pöydän ääressä tai kansio, joka lähtee talosta. Lappu jää pöydälle seuraavaan kertaan. En aloita uutta settiä samana iltana vain siksi, että kädet ovat vielä lämpimät. Lämmin käsi on huono syy avata toinen kansio, kun ensimmäisessä on yhä reikä.",
          ],
        },
      ],
      faqs: [
        {
          q: "Tarvitsenko sekä settikansion että sukupolvikansion?",
          a: "Et. Minä käytän molempia, koska ne vastaavat eri kysymyksiin. Yksi settikansio on täysi tapa aloittaa. Sukupolvikansio on toinen täysi tapa. Virhe on pyytää yhtä kansiota tekemään molemmat työt.",
        },
        {
          q: "Missä tarkistuslistat ovat?",
          a: "Jokaisella setillä on korttilista, jokaisella sukupolvella tarkistuslista, ja jokaisella Pokémonilla sivu painoksistaan. Kokoelmasivu linkittää kaikki kolme.",
        },
      ],
    },
    {
      slug: "organize-binder",
      title: "Miten minä järjestän Pokémon-kansion",
      description: "Yhdeksän ja neljän taskun sivut, setin numerojärjestys ja Pokédex-järjestys, niin kuin minä oikeasti lajittelen kansion.",
      h1: "Miten minä järjestän Pokémon-kansion",
      lede: "Minä järjestän kansion ennen kuin järjestän kortit. Sivun koko ja järjestys ovat koko järjestelmä. Kaikki muu on kortti, joka löytää taskun, jonka minä olen jo tehnyt. Kun ne kaksi päätöstä ovat paikallaan, sekava ilta voi silti päättyä yhteen valmiiseen sivuun, ei kolmeen pinoon, joita vain ihailtiin.",
      diagram: {
        kind: "pockets",
        title: "Yhdeksän taskua ja neljä taskua",
        description: "Yhdeksän taskun sivulle mahtuu yhdeksän korttia kolme kertaa kolme -ruudukkoon. Neljän taskun sivulle mahtuu neljä isompaa korttia.",
        caption: "Yhdeksän taskua pitää setin tiiviinä. Neljä taskua tekee jokaisesta kortista helpomman nähdä, ja kansio paksunee nopeammin.",
      },
      sections: [
        {
          id: "nine-or-four",
          heading: "Yhdeksän taskua vai neljä taskua",
          paragraphs: [
            "Yhdeksän taskun sivu on kolme saraketta, kolme korttia kussakin. Suojassa oleva kortti mahtuu. Noin sadan kortin setti on tusina sivuja, kansio jonka minä voin pitää auki yhdellä kädellä. Sitä sivua minä käytän settikansioihin. [[Paldean Fates|/collections/set/sv4pt5]] on 245 korttia julkisessa listassa, joten yhdeksän taskun kansio on jo paksu. Neljän taskun sivu tekisi samasta setistä kansion, jota minä en halua kantaa.",
            "Neljän taskun sivu on kaksi saraketta, kaksi korttia kussakin, ja jokainen kortti istuu isompana. Sitä minä käytän, kun tarkoitus on katsoa, ei rastittaa pitkää listaa. Sukupolvikansio voi mennä kumpaan suuntaan tahansa. Yhdeksän taskua mahduttaa {species} lajia harvempiin kansioihin. Neljä taskua tekee lapsen lempisivun helpommaksi löytää, ja ne tekevät hyllystä painavamman. Minä päätän ennen kuin ensimmäinen kortti menee sisään. Valmiin setin siirtäminen sivukoolta toiselle on iltapäivä, jonka minä olen jo käyttänyt kerran, enkä aio käyttää sitä uudestaan. Uusi sivu odottaa tyhjänä, kunnes koko setin sivukoko on päätetty. Yksittäinen kortti ei saa valita kokoa lennosta. Päätös tehdään kerran, ja sen jälkeen taskut vain täyttyvät. [[Pitkä opas|/guides/collecting-binders]] on syy siihen, että kaksi kansion tehtävää pidetään erillään.",
          ],
        },
        {
          id: "set-order",
          heading: "Järjestys setin numeron mukaan",
          paragraphs: [
            "Setin järjestys on kortin keräilynumero, sovitettuna korttilistaan. Numero 1 on ensimmäinen tasku, silloinkin kun se ei ole olento, josta minä pidän eniten. Valmentajat ja energiat jäävät sinne, minne setti ne pani. Minä en tee sievää holo-sivua eteen. Sievä sivu piilottaa puuttuvan tavallisen kortin.",
            "[[Setit järjestyksessä|/guides/sets-in-order]] kertovat, mille listalle kortti kuuluu. Setin merkki auttaa minua varmistamaan sen. Numero on se, minkä mukaan minä lajittelen. Jos kahdella kortilla on sama nimi ja numerot eroavat, ne ovat eri rivejä. Sen minä opin promoista, jotka usein istuvat pääsetin vieressä ja käyttävät omaa laskentaansa. Niitä ei saa sujauttaa päälistaan vain siksi, että nimi tuntuu tutulta. Promo saa oman pinon ja oman lapun. Sekoitan sen pääsettiin vasta, jos korttilista itse niin sanoo, eikä se sano. Oma laskenta on oma lista, vaikka kuva näyttäisi samalta vuodelta.",
          ],
        },
        {
          id: "dex-order",
          heading: "Järjestys Pokédex-numeron mukaan",
          paragraphs: [
            "Pokédex-järjestys on lajien järjestys. [[Sukupolvi 1|/collections/generation/1]] kulkee Bulbasaurista Mewhun, numerosta #001 numeroon #151. Tasku ei välitä, mistä setistä kortti tuli. Suojassa oleva tavallinen kortti uudesta setistä täyttää numeron #001 yhtä rehellisesti kuin vanha painos. [[Muistiinpano Pokédex-kansiosta|/guides/pokedex-binder]] selittää, miksi minä pysähdyn yhteen korttiin lajia kohti. [[Sukupolven 1 tarkistuslista|/guides/gen-1-checklist]] on sama ajatus, rajattuna ensimmäisiin 151 lajiin.",
            "Minä kirjoitan Pokédex-numeron pieneen lappuun sivun kulmaan vain silloin, kun sivu aloittaa uuden sataluvun. Minä en merkitse jokaista taskua. Kokoelmasivun tarkistuslista on hakemisto. Kansio on todiste. Jos minä selaan numeroon #050, sen taskun pitää olla #050, vaikka olisin löytänyt kortin tiistaina ja ilahtunut. Ilo ei siirrä taskua. Numero pysyy, ja kortti etsii sen, ei toisinpäin. Tiistain löytö on silti vasta #050, jos numero niin sanoo.",
          ],
        },
        {
          id: "by-type",
          heading: "Lajittelu tyypin mukaan, kun kansio ei ole tarkistuslista",
          paragraphs: [
            "Tyyppi on symboli Pokémon-kortin oikeassa yläkulmassa. [[Korttitietokannan ohje|https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database]] kuvaa sen näin: energiaikoni Ruoholle, Tulelle, Vedelle ja muille. Lapsi, joka tahtoo jokaisen vesikortin yhdelle sivulle, lajittelee tyypin mukaan. Sitä käytän pelipinoon pöydällä. Settikansion järjestykseen sitä en käytä. Lista on numeroitu, ja yhden tyypin sivu piilottaa puuttuvan numeron.",
            "Trainerit eivät kanna sitä tyyppi-ikonia, ja perus-Energy on oma pino. Sellaisena iltapäivänä ne kortit saavat oman kasan, sen sijaan että ne tungettaisiin olennon alle. Sukupolvi on toinen järjestys, Pokédexin väli, ja juuri sitä [[sukupolvi 1|/collections/generation/1]] jo on. Setti, numero, tyyppi ja sukupolvi ovat neljä kysymystä. Otan yhden kansiota kohti. [[Miten luen symbolin|/guides/read-a-card]] näyttää, mistä ikonin löydän ennen kuin luotan pinoon.",
          ],
        },
        {
          id: "marking-a-line",
          heading: "Miten minä merkitsen rivin",
          paragraphs: [
            "[[Kokoelmat|/collections]] näyttää rivin täytenä, kun minä olen kirjannut kortin. Kirjaaminen ei ole sama asia kuin vilkaisu pinoon. Minä panen kortin suojaan, suojan taskuun, ja vasta sitten merkitsen rivin. Jos merkitsen ensin, luettelo valehtelee ja kansiossa on reikä.",
            "[[Suojat ja sivut|/guides/protect-cards]] tulevat ennen merkintää, eivät sen jälkeen. Kortti, joka hankautuu tyhjäksi taskussa, on kortti jonka minä joudun myöhemmin vaihtamaan, eikä rivi ollut oikeasti valmis. Kun ruutu ja kansio ovat eri mieltä, minä selaan. Kansio voittaa.",
            "Käytännön ilta näyttää tältä. Minä valitsen yhden kansion ja jätän toisen kiinni. Minä asettelen sopivan pinon numerojärjestykseen pöydälle, yhdeksän korttia riviin, jos käytän yhdeksän taskun sivuja. Minä sujautan jokaiseen suojan, työnnän sen sisään ja katson tarkistuslistaa vasta sen jälkeen. Kortit, jotka eivät kuulu illan kansioon, palaavat laatikkoonsa ennen kuin aloitan, jotta niistä ei tule toista hanketta kesken sivun. Yksi valmis ja paikalleen pantu sivu on parempi ilta kuin kolme ihailtua pinoa. Minä en sytytä toista lamppua enkä avaa seuraavaa kansiota vain siksi, että ensimmäinen sivu sujui nopeasti. Nopeus on syy pysähtyä, ei syy aloittaa vielä yhtä hanketta. Huomenna sama kansio aukeaa samasta sivusta. En palkitse nopeutta uudella kasalla. Kasa, joka jäi kesken, on huomenna helpompi kuin kaksi kasaa, jotka molemmat jäivät kesken.",
          ],
        },
      ],
      faqs: [
        {
          q: "Pitäisikö sukupolvikansiossa olla yhdeksän taskun sivut?",
          a: "Minä käytän yhdeksää taskua, kun tavoite on saada väli valmiiksi. Minä käytän neljää taskua, kun tavoite on katsoa harvempia kortteja isompina. Molemmat ovat oikeita kansioita. Niitä ei pidä sekoittaa samaan niteeseen.",
        },
        {
          q: "Lajittelenko setin tyypin vai harvinaisuuden mukaan?",
          a: "En. Minä lajittelen setin keräilynumeron mukaan. Tyyppi ja harvinaisuus muuttavat sivun ulkonäköä ja piilottavat puuttuvat kortit.",
        },
      ],
    },
    {
      slug: "bulk-cards",
      title: "Mitä minä teen Pokémon-korttien bulkille",
      description: "Bulk täyttää kansiot. Minä lajittelen setin mukaan, sitten tyhjän lajirivin mukaan, ja pidän loput.",
      h1: "Mitä minä teen Pokémon-korttien bulkille",
      lede: "Bulk on kultaa. Tarkoitan tavallista kasaa: tavallisia kortteja, kaksoiskappaleita ja korttia, joka on joka rasiassa. Se kasa tekee kansion valmiiksi. Usein se alkaa ruokakaupan peltirasiasta. Minä lajittelen setin mukaan, annan ylimääräisten täyttää tyhjät lajirivit ja pidän sen, mikä jää, sen sijaan että kutsuisin sitä roskaksi.",
      sections: [
        {
          id: "why-bulk",
          heading: "Miksi minä pidän bulkia kokoelmana",
          paragraphs: [
            "Holo on mukava sivu. Se ei ole järjestelmä. Järjestelmä on tyhjä rivi, ja tyhjät rivit ovat enimmäkseen tavallisia kortteja. [[Kansio-opas|/guides/collecting-binders]] sanoo sen pitkässä muodossa. Tässä on lyhyt muoto, jota minä käytän pöydän ääressä: jos kortti täyttää reiän, se on kortti jonka minä halusin, silloinkin kun kuva on se sama Magikarp, jonka minä jo osaan ulkoa.",
            "Minä lopetin bulkin puolustelun sinä päivänä, kun sukupolvikansio eteni nopeammin sekalaatikosta kuin mistään, minkä olin pannut syrjään erityisenä. Erityiset kortit saavat odottaa suojassa. Tarkistuslista ei odota niitä. [[Kerääminen lapsen kanssa|/guides/collecting-with-a-child]] käyttää samaa kasaa, koska lapsi voi pidellä tavallista korttia, valita taskun ja nähdä rivin sulkeutuvan. Se on oikea edistys, ei lohdutuspalkinto. Lapsen käsi ja minun tarkistuslistani käyttävät samaa tavallista korttia. Se riittää molemmille. Harvinainen kortti saa odottaa, kunnes rivi on jo sulkeutunut ilman sitä.",
            "Jotkin teemalistat ovat melkein tätä kasaa. [[Yuka Moriin savikortit|/collections/themes/yuka-morii]] ovat tavallisia kortteja, ja siellä bulk on kultaa. [[Teemakansiot|/collections/themes]] on paikka, jossa ne tarkistuslistat ovat.",
          ],
        },
        {
          id: "sort-by-set",
          heading: "Lajittele ensin setin mukaan",
          paragraphs: [
            "Minä kaadan laatikkoa vain sen verran, että pöytä pysyy ystävällisenä. Sitten lajittelen setin mukaan, en olennon enkä kiillon mukaan. [[Miten minä luen numeron ja merkin|/guides/read-a-card]] on se osa, jonka teen käsilläni: etsi keräilynumero, varmista setti, tee pino. Pino Baselle, pino uudelle setille, pino jota en vielä osaa sijoittaa.",
            "Jokainen pino menee setin sivulle [[kokoelmissa|/collections]]. Sivu on korttilista. Jos rivi on auki, kortti menee siihen kansioon. Jos rivi on täynnä, kortti on kaksoiskappale ja jää bulkiin. Minä en ota kaksoiskappaleita esiin ihaillakseni niitä, ennen kuin sen pinon avoimet rivit on tehty. Ihailu on se tapa, jolla puoliksi lajiteltu laatikko kestää kuukauden. Pino, jota en osaa sijoittaa, saa olla omassa kasassaan, kunnes merkki ja numero saavat rauhallisen katsomisen. Se pino ei ole epäonnistuminen. Se odottaa seuraavaa kertaa, eikä sitä saa kaataa takaisin laatikkoon vain siksi, että illasta tuli myöhä. Kirjoitan lapulle setin nimen, jos tunnistan sen, ja sanan kysymys, jos en. Aamu ei ala arvauksesta. Arvaus eilen illalla on reikä kahdessa kansiossa aamulla.",
          ],
        },
        {
          id: "species-lines",
          heading: "Sitten tyhjä lajirivi",
          paragraphs: [
            "Setin kaksoiskappale voi silti olla sen lajin ensimmäinen kappale sukupolvikansiossa. [[Pokédex-kansio|/guides/pokedex-binder]] tarvitsee vain yhden. [[Magikarp|/pokedex/129]] on esimerkki, johon minä luotan, koska bulk tarjoaa yhä uuden. Jos #129 on tyhjä, seuraava Magikarp lähtee laatikosta ja täyttää taskun. Jos #129 on täynnä, kortti palaa.",
            "Mikä tahansa kieli kelpaa lajiriville. Kortti, jossa on eri nimi, näyttää silti saman lajin lajin sivulla, koska sivu seuraa kansallista Pokédex-numeroa. Minä tarkistan numeron, kun kortin nimi ei ole se englanninkielinen nimi, jonka olen opetellut. Nimi saa erota. Numeroa ei saa arvata. Minä en kirjoita lajin nimeä laatikkoon oikotienä. Kortin numeron ja Pokédexin numeron pitää olla sama luku, ennen kuin kortti lähtee bulkista. Jos numerot eroavat, kortti jää laatikkoon. Arvaus täyttäisi väärän taskun ja jättäisi oikean tyhjäksi. Tyhjä oikea tasku on rehellisempi kuin väärä kortti sievässä paikassa.",
          ],
        },
        {
          id: "extras",
          heading: "Mitä ylimääräisille tapahtuu",
          paragraphs: [
            "Ylimääräiset jäävät laatikkoon, jossa on setin nimi, tai yhteen sekalaatikkoon, kun pino on pieni. Ne eivät ole roskaa. Seuraava kansio tarvitsee usein sen kortin, josta minä melkein luovuin. Pidän ne kuivina, suojassa jos kulma on jo pehmeä, enkä lattialla. Pehmeä kulma, joka saa lojua irtonaisena vielä viikon, on kulma jolle joudun myöhemmin etsimään korvaajan, joten suoja menee päälle samana iltana kun huomaan sen.",
            "Kun kansio on valmis, tarina muuttuu. [[Valmis kansio voi lähteä talosta|/guides/donating-cards]] ja mennä lapselle. Irralliset ylimääräiset eivät lähde mukaan. Ne jäävät ja täyttävät seuraavan kansion. Se jako tekee lahjasta kokonaisen ja pitää tarkistuslistan rehellisenä.",
            "Itse laatikko saa tylsän lapun: setin nimen, tai sanan «sekalainen», jos en ole vielä jakanut sitä. Minä en merkitse laatikkoa arvauksella siitä, mistä korteista saisi rahaa. Minulla ei ole erillistä laatikkoa «hyville» korteille enkä saavia «roskille». Se jako on tapa, jolla tavalliset kortit katoavat ja reiät jäävät auki. Kerran kuussa otan sekalaatikon, teen settilajittelun uudestaan ja pienennän sitä. Tavoite on pienempi kysymyspino, ei sievempi näyte. Pienempi kysymyspino on kuukauden ainoa tavoite. Sievä pino, jota en ole tarkistanut, ei ole edistystä. Tarkistus on se hetki, jolloin kortti joko täyttää rivin tai palaa laatikkoon. Kortti, johon en luota, ei sulje riviä. [[Väärennöksen tunnistaminen|/guides/spot-fakes]] on oma muistiinpano. Bulkkilaatikossa ovat tavalliset oikeat kortit, ja niitä tahdon.",
          ],
        },
      ],
      faqs: [
        {
          q: "Pitäisikö tavallisten korttien kaksoiskappaleet heittää pois?",
          a: "Minä en heitä. Kaksoiskappale yhdessä setissä on usein puuttuva laji toisessa kansiossa. Panen ne laatikoihin setin mukaan, kunnes tarkistuslista pyytää niitä. Seuraava kansio on yleensä lähempänä kuin uusi pino pusseja.",
        },
        {
          q: "Lajittelenko bulkin ensin harvinaisuuden mukaan?",
          a: "En. Harvinaisuusmerkit ovat muuttuneet vuosien varrella, eivätkä ne kerro, mikä rivi on tyhjä. Keräilynumero kertoo. Minä voin lajitella koko laatikon päättämättä, merkitseekö merkki mitään.",
        },
      ],
    },
    {
      slug: "pokedex-binder",
      title: "Miten minä täytän Pokédex-kansion",
      description: "Yksi kortti jokaisesta lajista, numerosta #001 sukupolven 9 loppuun, täytettynä bulkista.",
      h1: "Miten minä täytän Pokédex-kansion",
      lede: "Pokédex-kansio on yksi kortti jokaisesta lajista. Sukupolvet 1–9 ovat {species} lajia. Minä täytän sen bulkista, Pokédex-järjestyksessä, enkä jahtaa painosta, jota tarkistuslista ei pyydä. Budjetti on bulk, joka minulla jo on, sekä suoja ja tasku jokaiselle kortille, joka sulkee reiän.",
      sections: [
        {
          id: "one-card",
          heading: "Yksi kortti jokaisesta lajista",
          paragraphs: [
            "Sääntö on pieni, ja se pelastaa minut. Yksi kortti. Mikä tahansa setti. Mikä tahansa kieli. Mikä tahansa harvinaisuus. [[Pitkä kansio-opas|/guides/collecting-binders]] erottaa tämän työn settikansiosta, jossa jokaisella listan kortilla on tasku. Tässä olento on tasku. Toinen Pikachu on kaksoiskappale, vaikka kuva olisi uusi.",
            "Minä aloitin tavan [[Bulbasaurista|/pokedex/1]]. Lajin sivu luettelee painokset. Kansio tarvitsee niistä yhden. Panin ensimmäisen suojassa olleen Bulbasaurin, jonka jo omistin, numeroon #001 ja lopetin paremman #001:n etsimisen. Parempi on toinen harrastus. Tämä harrastus on väli, ensimmäisestä numerosta viimeiseen, yksi olento kullakin rivillä. Toinen Bulbasaur, olkoon miten vanha, on bulkia heti kun #001 on täynnä. En pidä sille vara-taskua. Vara-tasku olisi jo toinen harrastus saman kannen sisällä.",
            "Lajisivu listaa jokaisen painoksen, ja Pokédex-kansio tarvitsee yhä vain yhden niistä. [[Kaikki Pikachu-kortit|/collections/themes/pikachu]] pitää jokaisen Pikachu-painoksen omana tarkistuslistanaan. [[Teemakansiot|/collections/themes]] on sukupolvisivujen vieressä, kun haluan nähdä yhden naaman koko rivin.",
          ],
        },
        {
          id: "the-range",
          heading: "{species} lajia, sukupolvi kerrallaan",
          paragraphs: [
            "Minä en avaa yhtä jättikansiota ja kutsu sitä valmiiksi. Minä rakennan sukupolvi kerrallaan, koska [[kokoelmat|/collections]] on jo jaettu niin ja koska sukupolvi on kirja, jonka voin saada valmiiksi. Sukupolvi 1 on 151. Sukupolvi 2 on seuraavat 100. Myöhemmät sukupolvet ovat samassa paikassa, kullakin oma tarkistuslista ja oma luku.",
            "[[Sukupolvi 1|/collections/generation/1]] on se, jonka sanon ihmisille tehtäväksi ensin, ja [[sukupolven 1 muistiinpano|/guides/gen-1-checklist]] on sen vieressä. Olennot ovat tuttuja, bulkkilaatikot ovat täynnä niitä, ja 151 on luku jonka minä pidän päässäni. Sen jälkeen sukupolvi 5 on pitkä ja sukupolvi 6 on lyhyt. Annan tarkistuslistan sanoa sen. Minä en opettele lukuja ulkoa. Sukupolven sivu sanoo pituuden. Uskon sivua enemmän kuin muistikuvaa siitä, mikä sukupolvi oli pitkä. Muistikuva on pyöristys, ja taskut eivät ole pyöristyksiä.",
          ],
        },
        {
          id: "from-bulk",
          heading: "Täytä se bulkista",
          paragraphs: [
            "[[Bulk|/guides/bulk-cards]] on varasto. Olen tietoinen siitä valinnasta. Harvinainen kuvitus on tervetullut, kun se on kortti joka minulla jo on. Se ei ole vaatimus. Lemppipainoksen odottaminen on tapa, jolla Pokédex-kansio jumittuu samoihin kahteenkymmeneen reikään vuodeksi.",
            "Käytännön kierros on tylsä, ja se toimii. Minä otan yhden sukupolven tarkistuslistan. Käyn bulkkilaatikon läpi reiät mielessä. Panen suojan korttiin, joka täyttää reiän. Panen sen taskuun. Merkitsen rivin. Sitten lopetan, vaikka laatikko näyttäisi yhä kiinnostavalta. Minä en kanna koko laatikkoa sohvalle. Tarkistuslista on pöydällä, reikiä on tarpeeksi vähän muistettavaksi yhden kierroksen ajan, ja kortit jotka eivät täytä niistä yhtäkään, palaavat ennen kuin ehdin ihastua. [[Miten minä järjestän sivut|/guides/organize-binder]] on sivukoon valinta. Yhdeksän taskua on se, mitä käytän, kun tavoite on nähdä väli valmiina. Kierros päättyy, kun yksi sukupolvi on käyty, vaikka laatikossa näkyisi tuttu kuva seuraavasta. Tutut kuvat ovat huomisen työtä. Tämän illan työ on se lista, joka on auki.",
          ],
        },
        {
          id: "when-it-is-done",
          heading: "Milloin kutsun sen valmiiksi",
          paragraphs: [
            "Sukupolvi on valmis, kun jokaisella lajirivillä on kortti kansiossa ja minä olen selannut sivut todistaakseni sen. Ruutu voi sanoa, että rivit ovat täynnä. Minä selaan silti. Kortti, joka on kirjattu ja sitten jätetty kenkälaatikkoon, ei ole kansiossa.",
            "Minä en päivitä valmista sukupolvea urheilun vuoksi. Jos myöhempi kortti saa minut hymyilemään, se voi vaihtaa taskussa olevan, ja vanha palaa bulkiin. Rivi pysyy täytenä joka tapauksessa. Pointti ei koskaan ollut vaikuttavin kappale. Pointti oli olento, paikallaan, järjestyksessä, niin että ihminen voi selata sen kohdalle.",
            "Budjetti, tässä kansiossa, tarkoittaa että minä käytän huomiota enkä metsästä tiettyä kappaletta. Useimmat tarvittavat kortit minä jo omistan lajittelemattomassa bulkissa. Kulu, jolla on väliä, on suoja ja sivu. Ostan ne tavallisissa pakkauksissa ja käytän niitä tavallisiin kortteihin säästämättä. Pidän lyijykynälistaa rei'istä vain, kun olen poissa ruudulta. Kotona sukupolven sivu on lista. Jos reikä on ollut tyhjä kuukausia, se johtuu siitä, että laji on harvinainen laatikoissani, ei siitä että odotan harvinaisempaa kuvaa lajista, jonka olisin jo voinut arkistoida. Jos vaihdan kortin, en kirjoita rivistä uutta tarinaa. Se oli täynnä, se on täynnä, ja vanha kortti on taas bulkia samassa työssä kuin ennen: odottamassa toista reikää. Vaihto on sallittu hymyn vuoksi. Se ei avaa uutta riviä eikä muuta lukua, jonka jo merkitsin. Hymy ja luku saavat elää samassa taskussa, kunhan taskuja on yhä yksi. Yksi tasku per laji riittää, ja vaihdettu kortti palaa bulkkiin odottamaan toista reikää. Jos hymy sammuu viikon päästä, kortti saa silti jäädä. Rivi ei kysy, pidänkö kuvasta ensi kuussa. Se kysyy vain, onko laji paikalla.",
          ],
        },
      ],
      faqs: [
        {
          q: "Tarvitseeko Pokédex-kansio Pokémonin jokaisen painoksen?",
          a: "Ei. Yksi kortti jokaisesta lajista on koko sääntö. Jokainen painos kuuluu lajin sivulle, ei tähän kansioon.",
        },
        {
          q: "Mikä sukupolvi kannattaa tehdä ensin valmiiksi?",
          a: "Minä aloitan sukupolvesta 1, alkuperäisistä 151 lajista. Kortit ovat tavallisia bulkissa, ja tarkistuslista on tarpeeksi lyhyt valmistumaan. Sen jälkeen otan seuraavan sukupolven kokoelmista, en satunnaista reikää Pokédexin keskeltä.",
        },
      ],
    },
    {
      slug: "gen-1-checklist",
      title: "Sukupolven 1 tarkistuslista: kaikki 151",
      description: "Miten minä kerään alkuperäiset 151 Pokémonia yhteen kansioon sukupolven tarkistuslistalla ja Basen korttilistalla.",
      h1: "Sukupolven 1 tarkistuslista: kaikki 151 alkuperäistä Pokémonia",
      lede: "Sukupolvi 1 on 151 lajia, #001 Bulbasaurista #151 Mewhun. Minä kerään ne yhteen kansioon: yksi kortti kustakin, mistä setistä tahansa. Tarkistuslista on sukupolven sivu, ja Base on se kohta, josta monet tutut nimet alkavat. Niillä kahdella listalla ei ole samaa lukua, ja niiden pitäminen erillään on koko temppu.",
      sections: [
        {
          id: "the-151",
          heading: "Mitä ne 151 tarkoittavat",
          paragraphs: [
            "Ne 151 ovat Pokédex-väli, eivät yksi tuote. [[Sukupolvi 1|/collections/generation/1]] luettelee jokaisen lajin sillä välillä ja muutaman setin, jossa kukin esiintyy. Se sivu on tarkistuslista, jota minä käytän. Se ei ole sama asia kuin Base, jossa on 102 korttia ja mukana valmentajia ja energioita. Ihmiset sekoittavat ne kaksi lukua. Minä pidän ne erillään, jotta kansiossa on oikea määrä taskuja. Etsitkö vuoden 2023 settiä nimeltä [[151|/collections/set/sv3pt5]]? Se on eri lista.",
            "[[Muistiinpano Pokédex-kansiosta|/guides/pokedex-binder]] on sama menetelmä kaikille {species} lajille. Tämä muistiinpano pysyy ensimmäisessä kirjassa, koska alkuperäiset 151 ovat kansio, josta minulta kysytään useimmin. [[Pitkä opas|/guides/collecting-binders]] selittää, miksi tämä on sukupolvikansio eikä settikansio. Tuotepakkaus, jonka kannessa lukee «151», ei automaattisesti ole tämä tarkistuslista. Kannen luku ja sivun luku saavat olla eri. Uskon sivua, koska taskut leikataan sen mukaan. Kansi on myyjän lause, sivu on minun työni.",
          ],
        },
        {
          id: "where-they-appear",
          heading: "Missä alkuperäiset 151 esiintyvät",
          paragraphs: [
            "Kanton laji voi olla Base-kaudella ja taas setissä, joka ilmestyi vuosikymmeniä myöhemmin. [[Pikachu|/pokedex/25]] on ilmeinen. [[Charizard|/pokedex/6]] on toinen. Lajin sivu luettelee painokset. Mikä tahansa niistä täyttää taskun. Minä en tarvitse vanhinta kappaletta enkä uusinta.",
            "[[Setit järjestyksessä|/guides/sets-in-order]] auttavat, kun haluan vanhat tahallani. [[Base-sarja|/collections/series/base]] on Base, Jungle, Fossil ja setit niiden ympärillä. Jos rakennan Basesta settikansion, se on eri hanke, jossa on 102 taskua. Sen hankkeen kortit voivat myös täyttää sukupolven taskun, kerran, jos lajirivi on tyhjä. Minä en pura settikansiota koristellakseni sukupolvikansiota. Ylimääräinen kappale tekee sen työn. Charizard on helppo käsitellä poikkeuksena. Se ei ole poikkeus. Tasku haluaa lajin, ja tavallinen kortti myöhemmästä setistä sulkee numeron #006 yhtä rehellisesti kuin kortti, jota olen katsellut kaksikymmentä vuotta. Vanhin kortti on mukava, jos se jo on kädessä. Se ei ole ehto sille, että #006 saa suojan ja taskun. Ehto on laji, ei vuosi.",
          ],
        },
        {
          id: "base-set",
          heading: "Base on lista, ei koko 151",
          paragraphs: [
            "[[Basessa|/collections/set/base1]] on 102 korttia. Osa alkuperäisistä 151 lajista ei ole sillä listalla. Myöhemmät Base-kauden setit lisäävät niitä. Sukupolvikansio ei odota vanhempia settejä. Puuttuvan lajin nykyaikainen tavallinen kortti on valmis rivi.",
            "Minä avaan silti mielelläni Basen listan, koska keräilynumerot ovat se tapa, jolla opin lukemaan kortin. Numerojärjestys, sitten nimi, sitten setin merkki tarkistuksena. Kun bulkkilaatikko väittää olevansa «kaikki alkuperäiset», minä en luota väitteeseen. Luotan sukupolven sivuun ja kortteihin kädessäni. Jos laji puuttuu kädestä, rivi on tyhjä, lupasi kansi mitä tahansa. Basen valmentajat ja energiat lasketaan niihin 102 korttiin, eikä niitä lasketa niihin 151 lajiin. Se ero on koko syy siihen, että minulla on kaksi kirjanmerkkiä eikä yksi. Kun sanon luvut ääneen vierekkäin, sekaannus loppuu. Yksi luku on kortteja, toinen on lajeja. Ne eivät vaihdu keskenään, vaikka molemmat alkavat samasta aikakaudesta.",
          ],
        },
        {
          id: "one-line",
          heading: "Yksi rivi kerrallaan",
          paragraphs: [
            "Minä käyn tarkistuslistaa numerosta #001 alaspäin vain, kun olen kärsivällisellä tuulella. Useammin otan seuraavan tyhjän rivin, jonka laatikko voi täyttää. Järjestys kansiossa pysyy numeerisena, vaikka järjestys jossa löydän kortit ei ole. Tasku #050 ei siirry eteen siksi, että löysin sen tiistaina.",
            "Rivi on valmis, kun kortilla on suoja, se on taskussa ja se on kirjattu. Sitten katson seuraavaa reikää. Sataviisikymmentäyksi on monta iltapäivää eikä silti arvoitus. Lähes minkä tahansa kauden bulkissa on Kanton olentoja. Työ on yhteensovittamista, ei toivomista.",
            "Pidän sukupolven sivun auki laatikon vieressä enkä ruksita mitään päässäni. Olennot, jotka luulen omistavani, eivät aina ole ne, jotka ovat kansiossa. Mew ja aloituslajit ovat ne, joiden ihmiset olettavat olevan valmiita. Minä tarkistan ne silti. Kansio, josta puuttuu #001 koska Bulbasaur on yhä ilman suojaa rasiassa, ei ole valmiit 151, vaikka muut sivut näyttäisivät täysiltä. Viimeiset kymmenen reikää vievät yleensä kauemmin kuin ensimmäiset viisikymmentä, ja se on normaalia. Ne ovat lajeja, joita laatikoistani sattuu puuttumaan, joten jätän ne tyhjiksi sen sijaan että keksisin korvaavan kortin. En anna täyden sivun edempänä huijata minua hyppäämään reiän yli, jonka olen jo ohittanut. Selaus kulkee taaksepäin yhtä hyvin kuin eteenpäin. Tyhjä tasku keskellä täyttä sivua on rehellisempi kuin keksitty kortti. Jätän sen näkyviin. Näkyvä reikä on huomisen työ, keksitty kortti on valhe joka pysyy. Huominen löytää reiän helpommin, jos en peitä sitä tänään.",
          ],
        },
      ],
      faqs: [
        {
          q: "Onko Base sama asia kuin kaikki 151?",
          a: "Ei. Base on yksi setti, ja julkisessa listassa on 102 korttia. Ne 151 ovat jokainen laji Bulbasaurista Mewhun, mistä setistä tahansa. Minulla on molemmat sivut kirjanmerkkeinä, jotta luvut eivät sekoitu.",
        },
        {
          q: "Tarvitsenko first edition -kortin sukupolven 1 kansioon?",
          a: "Et. Mikä tahansa sen lajin painos täyttää taskun. First edition kuuluu settikansioon, jos sen setin lista sisältää sen.",
        },
      ],
    },
    {
      slug: "read-a-card",
      title: "Miten minä luen numeron ja setin merkin",
      description: "Miten minä löydän keräilynumeron, setin merkin ja harvinaisuusmerkin, jotta bulkkikasan voi lajitella.",
      h1: "Miten minä luen Pokémon-kortin",
      lede: "Minä luen kortin joka kerta samassa järjestyksessä: nimi, keräilynumero, setin merkki, ja sitten harvinaisuusmerkki jos sitä vielä tarvitsen. Se järjestys tekee sekabulkista pinoja, jotka voin arkistoida. Numero vastaa setin korttilistaa. Merkki estää kahta kautta päätymästä samaan pinoon.",
      diagram: {
        kind: "card",
        title: "Mihin minä katson kortissa",
        description: "Yksinkertainen kortin ääriviiva, jossa ovat nimi, keräilynumero, setin merkki ja harvinaisuusmerkki. Ei virallista korttikuvaa.",
        caption: "Minä sovitan keräilynumeron korttilistaan. Merkki ja harvinaisuusmerkki vain auttavat varmistamaan setin.",
      },
      sections: [
        {
          id: "the-number",
          heading: "Keräilynumero on lajittelun avain",
          paragraphs: [
            "Keräilynumero on murtoluku tai lukupari, joka on painettu korttiin, esimerkiksi 4/102. Ensimmäinen luku on kortin paikka siinä setissä. Toinen luku on se, kuinka monta korttia setti laski siinä numeroinnissa. [[Base|/collections/set/base1]] on setti, jolla minä opetan tämän, koska 102 on luku listassa, jonka julkaisen julkisesta aineistosta. Jos kortissa lukee 4 ja listan kortti 4 on sama nimi, minulla on osuma.",
            "Promot ja erikoissetit käyttävät joskus kirjainta, eri kokonaismäärää tai numeroa, joka ei näytä vieressä olevan pääsetin numerolta. Minä en pakota niitä pääsetin järjestykseen. Etsin listan, joka käyttää juuri sitä numerointia. [[Settien aikajana|/guides/sets-in-order]] on se tapa, jolla muistan, että promo istuu kauden vieressä olematta kauden päälista. Väärä lista tekee reiän kahteen kansioon kerralla. Murtoluvun toinen luku on vihje, ei lupaus siitä, että voisin arvata setin siitä yksin. Useat setit ovat laskeneet suunnilleen yhtä monta korttia. Merkki saa ratkaista, mikä lista on auki. Jos toinen luku täsmää kahteen settiin, merkki ratkaisee ennen kuin pino kasvaa. Kasvanut väärä pino on ilta, jonka joudun purkamaan kortti kerrallaan.",
          ],
        },
        {
          id: "the-symbol",
          heading: "Setin merkki varmistaa pinon",
          paragraphs: [
            "Setin merkki on pieni tunnus, yleensä kuvan oikeassa reunassa tai heti sen alla, kaudesta riippuen. Se vaihtuu jokaisen setin mukana. Minä en yritä opetella koko merkkien historiaa ulkoa. Käytän merkkiä estääkseni kahta pinoa sulautumasta, kun numerot voisivat kuulua useammalle kuin yhdelle listalle.",
            "Kun merkki ja numero eivät täsmää nimeen, jota odotin, kortti kertoo totuuden ja muisti ei. Etsin numeron setin sivulta. [[Pikachu|/pokedex/25]] on hyvä muistutus siitä, että yksi nimi voi asua monessa setissä, kullakin oma numeronsa. Nimi yksin ei ole lajittelun avain. Kaksi Pikachua eri numeroilla ovat kaksi riviä, vaikka molemmat hymyilisivät samalla tavalla. Hymy ei ole lajittelun avain. Numero ja merkki ovat, ja ne saavat viedä aikaa. Aika kortin ääressä on halvempaa kuin väärä tasku myöhemmin.",
          ],
        },
        {
          id: "rarity",
          heading: "Harvinaisuusmerkit lajittelevat huonosti",
          paragraphs: [
            "Ympyrä, timantti ja tähti on kaikki painettu kortteihin, ja merkitys siirtyi, kun peliin tuli lisää harvinaisuuksia. Minä en pidä yksityistä taulukkoa siitä, mitä kukin merkki tarkoitti minäkin vuonna. Taulukko olisi lajittelua pitempi, eikä se silti kertoisi, mikä tarkistuslistan rivi on tyhjä.",
            "Vilkaisen merkkiä vain jakaakseni pinon kahteen: «helppo panna suojaan» ja «katson kahdesti ennen kuin se menee taskuun». Se on varmuutta, ei luettelointia. [[Bulkin lajittelu|/guides/bulk-cards]] pysyy numerossa. Harvinaisuus on se, miltä sivu näyttää. Numero on se, miten kansio valmistuu. Himmeä merkki ja kiiltävä kortti voivat olla samassa setissä. Minä en anna kiillon aloittaa omaa pinoaan ennen kuin numero on luettu. Kiilto voi jäädä samaan pinoon himmeän kortin kanssa. Setti ei jakaudu ulkonäön mukaan. Ulkonäkö on sivun ilo vasta, kun numero on jo oikea.",
          ],
        },
        {
          id: "regulation",
          heading: "Sääntömerkki on formaatin kirjain",
          paragraphs: [
            "Vuodesta 2020 painetuissa korteissa Play! Pokémon käyttää sääntömerkkiä: kirjain vasemmassa alakulmassa. [[Play! Pokémonin säännöt|https://play.pokemon.com/en-us/resources/rules/]] sanovat, että Standard kiertää tuon kirjaimen mukaan. Vanhemmissa korteissa kirjainta ei ole. Kortti, jossa on vanhempi kirjain tai ei kirjainta lainkaan, voi yhä olla laillinen, jos sama kortti on painettu uudelleen nykyisellä kirjaimella. Sallitut kirjaimet vaihtuvat. Nykyistä listaa en opettele kansioon, enkä lajittele kirjaimen mukaan.",
            "Kirjain ei ole keräilijänumero eikä harvinaisuusmerkki. [[Korttitietokannan ohje|https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database]] panee harvinaisuusmerkin oikeaan alakulmaan, laajennuskuvakkeen viereen. Kirjainta katson vain, kun joku kysyy, saako kortilla pelata nykyisessä tapahtumassa. Kansiossa numero päättää yhä taskun. Kortti, johon en luota, ei pääse siihen taskuun. Siitä on [[muistiinpano väärennöksistä|/guides/spot-fakes]].",
          ],
        },
        {
          id: "in-practice",
          heading: "Kierros sekakasan läpi",
          paragraphs: [
            "Minä nostan kortin. Luen nimen ääneen, jos kasa on sekaisin, koska silmät hyppäävät kun etenen liian nopeasti. Löydän keräilynumeron. Tarkistan merkin pinoa vasten, johon luulen sen kuuluvan. Pudotan sen siihen pinoon. Jos en osaa sijoittaa sitä muutamassa sekunnissa, se menee kysymyspinoon, ei takaisin sekamelskaan.",
            "Kysymyspino saa rauhallisemman kierroksen, kun [[kokoelmat|/collections]] ovat auki. [[Kansio-opas|/guides/collecting-binders]] on se, jota minä syötän: setin rivit ensin, lajirivit sitten. Kortti, jota en tunnista, saa silti suojan, jos kulma on pehmeä. Tunnistus voi odottaa tunnin. Taipunut kulma pahenee sillä aikaa kun epäröin. Kysymyspino saa nimen lapulle, eikä sitä panna painavamman laatikon alle. Seuraavan rauhallisen kierroksen pitää löytää se aloittamatta koko kasasta uudestaan.",
            "Kortin kieli voi hidastaa kierrosta, ja se sopii. Aineiston englanninkielinen nimi on se, jota korttilista käyttää. Toisella kielellä painetulla kortilla on silti keräilynumero ja setin merkki. Minä sovitan ne ja luen sitten lajin sivun, jos haluan paikallisen nimen. Minä en rakenna erillistä kansiota kieltä kohti. Yksi korttilista, yksi numerojärjestys. Kortin nimi saa erota ruudun nimestä. Jos nimi ruudulla on englanniksi ja kortti ei, se on silti sama rivi. En avaa kielikohtaista kansiota sen takia. Yksi numerojärjestys riittää, ja nimi saa olla se mikä korttiin on painettu. Sekunnit jotka käytän numeroon, säästävät myöhemmän purkamisen. Purkaminen on hitaampaa kuin hidas luku. Hidas luku saa jäädä tavaksi.",
          ],
        },
      ],
      faqs: [
        {
          q: "Mitä teen, jos kortissa ei ole murtolukua?",
          a: "Käsittelen sen promona tai erikoispainoksena ja etsin listan, jossa on sellainen numero. Minä en keksi sille paikkaa pääsetissä. Kysymyspino on se paikka, jossa se odottaa.",
        },
        {
          q: "Pitäisikö lajitella harvinaisuusmerkin mukaan?",
          a: "Minä en lajittele. Merkki on muuttunut ajan myötä. Keräilynumero vastaa korttilistaa. Kiilto kortissa saa odottaa, kunnes pino on jo oikeassa setissä.",
        },
      ],
    },
    {
      slug: "protect-cards",
      title: "Pokémon-korttien suojaaminen ilman säätöä",
      description: "Suojat, kansion sivut ja tavallinen säilytys kokoelmalle, jota avataan, myös lapsen kansiolle.",
      h1: "Pokémon-korttien suojaaminen ilman säätöä",
      lede: "Minä suojaan kortit halvimmalla tavalla, joka yhä antaa avata kansion. Pehmeä suoja, sivu jossa on taskuja, ja hylly joka pysyy kuivana. Siinä on koko suunnitelma. Käytän sitä tavallisiin kortteihin, koska tavallinen kortti on usein se, joka sulkee rivin. Kansio, jota minä en avaa, ei ole kokoelma jota pidän hengissä.",
      sections: [
        {
          id: "sleeve-first",
          heading: "Suoja ennen taskua",
          paragraphs: [
            "Suoja on ohut kirkas tasku yhdelle kortille. Minä panen sen päälle ennen kuin kortti koskaan näkee kansion sivua. Kansion sivut hankaavat. Suojat ottavat sen hankauksen vastaan. Ostan tavalliset nipussa enkä säästä niitä holoille. Tavallinen kortti, jonka kulma on vaalentunut, on yhä reikä tarkistuslistassa, ja sen korvaaminen on huonompi iltapäivä kuin suojan paneminen nyt. Ostan suojat koossa, joka oikeasti sopii Pokémon-kortille, en pussia joka on melkein oikea. Melkein oikea taivuttaa kulman, jota sen piti suojata.",
            "Painan suojan niin, että kortti on suorassa, enkä nuole sitä, teippaa sitä enkä pane kahta suojaa tavallisen bulkkikortin päälle rituaalina. Kaksi suojaa on kortille, joka matkustaa. Arjen kortti saa yhden suojan. [[Kansio-opas|/guides/collecting-binders]] olettaa, että tämä askel on jo tehty. Kirjattu kortti, jonka pinta on paljas, on kortti jonka kirjasin liian aikaisin. Paljas pinta kansiossa on keskeneräinen rivi, vaikka numero olisi jo ruudulla. Suoja kuuluu merkinnän edelle. Merkintä ilman suojaa on lupaus, jota tasku ei vielä pidä.",
          ],
        },
        {
          id: "pages",
          heading: "Kansion sivut, joihin suojattu kortti mahtuu",
          paragraphs: [
            "[[Yhdeksän ja neljän taskun sivut|/guides/organize-binder]] ovat valinta. Taskun pitää ottaa suoja vastaan taivuttamatta korttia. Jos joudun pakottamaan, sivu on väärä. Vaihdan repeytyneen taskun sen sijaan, että toivoisin repeämän pysyvän paikallaan. Revennyt tasku syö kulmia.",
            "Rengaskansiot kelpaavat, kun renkaat eivät paina kortteja. Estän renkaita lepäämästä sivulla sillä, etten täytä kansiota liikaa. D-rengas, joka sulkeutuu siististi, on ystävällisempi kuin kansio, joka on ahdettu niin että kannet vääntyvät. Aloitan mieluummin toisen kansion kuin taivutan viimeisen sivun ensimmäisessä kansiossa. Toinen kansio on halvempi kuin vääntynyt viimeinen sivu. Vääntymä ei oikene itsestään seuraavana kesänä. Uusi kansio alkaa tyhjästä sivusta, ei korjatusta kulmasta.",
          ],
        },
        {
          id: "storage",
          heading: "Missä kansiot asuvat",
          paragraphs: [
            "Pystyssä hyllyllä, tai lappeellaan jos kansio on ohut, poissa ikkunasta ja poissa kosteasta ulkoseinästä. Minä en säilytä kansioita kellarin laatikossa, kuumalla vintillä enkä auton tavaratilassa. Kuumuus käyristää suojan. Kosteus tahraa sivun. Aurinko haalistaa painatuksen. Mikään siitä ei näy samana päivänä. Se näkyy, kun avaan kansion kesää myöhemmin. Kansio, joka nojaa lämpimään patteriin, saa saman kohtelun kuin vintti: se siirretään. Kuiva ja viileä riittää, ja tunnustelen hyllyä kädellä, jos olen epävarma kylmänä aamuna.",
            "Bulk, joka ei ole kansiossa, asuu kuivassa laatikossa, pinottuna niin etteivät kortit taivu painavamman esineen alle. Pidän ruoan ja juoman poissa siltä pöydältä. Se kuulostaa pikkutarkalta, kunnes appelsiinimehu on suojan sisällä. [[Kokoelmat|/collections]] voidaan rakentaa uudestaan korteista. Toisiinsa liimautunutta pinoa ei voida. Mehulasi siirtyy toiselle pöydälle ennen kuin laatikko aukeaa. Se sääntö on tylsä, ja se pitää kortit irti toisistaan. Liimautunut pino on lista, jota ei voi enää lukea.",
          ],
        },
        {
          id: "toploader",
          heading: "Toploader on matkaa varten",
          paragraphs: [
            "Toploader on jäykkä muovikotelo. Käytän sellaista, kun kortti lähtee kotoa: kansio matkalla lapselle tai yksittäinen kortti paketissa. Se on paksumpi kuin kansion sivu tahtoo, joten se jää yhdeksän taskun sivun ulkopuolelle. Kotona kortti elää pehmeässä suojassa, taskussa. Kova kotelo jokaiseen tavalliseen korttiin tekisi kansion, jota en avaa, ja avaaminen on pointti.",
            "En teippaa korttia toploaderiin. Jos sellaista ei ole, pehmeä suoja ja litteä laatikko voittavat yhä taittuneen kulman. [[Pitkä opas|/guides/collecting-binders]] olettaa pehmeän suojan jo valmiiksi. Jäykkä on poikkeus, matkaa varten, ei joka päivän sivua.",
          ],
        },
        {
          id: "kids",
          heading: "Lapsen kokoelma",
          paragraphs: [
            "[[Kansio lapsen kanssa|/guides/collecting-with-a-child]] alkaa suojista ja kansiosta, jonka lapsi voi avata, ei jäykästä kotelosta jokaiselle tavalliselle kortille. Haluan, että lapsi kääntää sivua. Kortti, jota ei koskaan avata, voi pysyä täydellisenä ja samalla lakata olemasta osa iltapäivää. Suojat ovat kompromissi, johon luotan. Lapsi saa avata kansion itse. Minä en seiso pitämässä sitä kiinni kuin sivut olisivat näyttely. Suoja on jo päällä. Loppu on selaamista.",
            "Kun valmis kansio [[lähtee lapselle|/guides/donating-cards]], se lähtee suojattuna, sivuissa, renkaat kunnossa. Minä en luovuta irtokortteja ja kutsu sitä samaksi lahjaksi. Suoja on osa kansiota. Se on myös se osa, joka kestää vähän kovakouraista käyttöä, ja sitä varten hyvä kansio on.",
            "Vaihdan sivut, kun muovi samenee tai taskun sauma halkeaa. En korjaa saumaa teipillä kortin puolelta. Teippi on tapa, jolla kortti saa tahmean reunan. Uusi sivu on korjaus. Vanha sivu, jos muu osa on ehjä, voi pitää lappuja tai tarkistuslistoja, ei kortteja. Kerran vuodessa avaan jokaisen kansion niin pitkälle, että näen takasivut, koska sinne vino tasku piiloutuu. Se kierros on pelastanut enemmän kortteja kuin yksikään erikoiskotelo, jota olen harkinnut enkä ole ostanut. Takasivun tasku, joka on vinossa, vaihdetaan samana päivänä. En jätä sitä ensi vuoteen vain siksi, että etusivut näyttävät hyviltä. Etusivu ei näe taakse. Siksi kerran vuodessa avaan kansion loppuun asti, en vain siihen sivuun jota katson useimmin. Takasivu kuuluu samaan kierrokseen.",
          ],
        },
      ],
      faqs: [
        {
          q: "Tarvitsevatko tavalliset kortit suojat?",
          a: "Minun kansioissani kyllä. Tavallinen kortti on usein se, joka täyttää rivin. Panen suojan ennen kuin se menee taskuun. Vaalentunut kulma on vaikeampi korjata kuin suoja on panna päälle.",
        },
        {
          q: "Onko kova muovikotelo oletus?",
          a: "Ei. Kovaa suojaa käytän, kun kortti matkustaa. Kotiin jäävä kansio käyttää pehmeää suojaa ja taskusivua. Kova kotelo jokaiselle tavalliselle kortille tekisi kansiosta jotain, jota minä en avaa.",
        },
      ],
    },
    {
      slug: "donating-cards",
      title: "Pokémon-korttien antaminen lapsille",
      description: "Minä luovutan valmiin kansion lapselle, osaston, tilapäismajoituksen tai iltapäiväkerhon kautta, ja kirjaan päivän.",
      h1: "Pokémon-korttien antaminen lapsille",
      lede: "Minä annan Pokémon-kortteja eteenpäin luovuttamalla valmiin kansion. Sairaalan osasto, tilapäismajoitus tai iltapäiväkerho voi olla paikka, jonne se menee. Irtobulk jää tänne ja täyttää seuraavan kansion. Kysyn paikalta ensin, kirjaan päivän jolloin kansio lähtee, enkä julkaise myyntihintaa. Jos vastaus on ei vielä, kansio jää hyllyyn ja julkinen lista pysyy ennallaan. Suunnitelma ei ole luovutus. Odotan mieluummin kuin kirjaan lahjan, joka ei ole lähtenyt käsistäni.",
      sections: [
        {
          id: "finished",
          heading: "Vain kansio, jonka olen saanut valmiiksi",
          paragraphs: [
            "Puolitäysi kansio on hanke. Valmis kansio on jotain, jonka voin panna toisen käsiin ilman anteeksipyyntöä. Selaan sivut ennen kuin se lähtee. Jokaisessa taskussa, jota tarkistuslista pyysi, on kortti. [[Pitkä opas|/guides/collecting-binders]] on syy siihen, että se vaatimus on olemassa. En halua, että lapsi perii minun reikäni.",
            "Kansiossa on suojat, koska [[suojaaminen|/guides/protect-cards]] on osa lahjaa eikä yksityinen maku. Renkaat sulkeutuvat. Sivut eivät ole rikki. Jos tasku on väsynyt, vaihdan sivun ennen luovutusta. Se on tavallista huolenpitoa, ei seremoniaa. Lasken taskut tarkistuslistaa vasten viimeisen kerran pöydän ääressä, en ovella. Jos kortti puuttuu, kansio palaa hyllyyn samana iltana. Anteeksipyyntö vastaanotossa ei pienennä reikää. Lasken ääneen, jos olen väsynyt. Väsymys on se hetki, jolloin ohitan energian ja luulen sivun olevan täysi. Ääneen laskeminen palauttaa viimeisen taskun, jonka silmä halusi ohittaa.",
          ],
        },
        {
          id: "where",
          heading: "Osastot, majoitus ja iltapäiväkerhot",
          paragraphs: [
            "Kysyn paikalta, mitä he oikeasti voivat käyttää. Lastenosasto, majoituspaikan leikkihuone ja iltapäiväkerho eivät kaikki halua samaa, ja jotkut eivät voi ottaa kortteja lainkaan. Kuulen mieluummin ei-sanan kuin jätän kansion vastaanottoon, joka ei ole sitä pyytänyt. Siellä työskentelevä ihminen tuntee huoneen. Minä tunnen kansion. Kysyn myös, miten he haluavat ottaa sen vastaan: tuleeko joku minua vastaan, pitääkö kansio merkitä, ja ovatko kortit ylipäätään tervetulleita tässä kuussa. Huone päättää. Minä sovitan kansion siihen, en toisinpäin.",
            "Minä en tee luovutuksesta puhetta keräämisestä. Kansio on koko esittely. Jos lapsi haluaa tietää järjestyksen, järjestys on sivuissa: setti numerojärjestyksessä tai sukupolvi Pokédex-järjestyksessä. [[Kerääminen lapsen kanssa|/guides/collecting-with-a-child]] on se, miten käyttäydyn, kun olen aikuinen pöydän ääressä. Sama käytös pätee, kun olen vain ihminen, joka toi kansion. Jos paikka haluaa vain yhden kansion kerrallaan, vien yhden. En täytä eteistä hankkeella, jota kukaan ei pyytänyt. Yksi valmis kansio on selkeämpi kuin kassi, jonka sisältöä kukaan ei ehtinyt katsoa.",
          ],
        },
        {
          id: "public-list",
          heading: "Mitä julkinen lista näyttää",
          paragraphs: [
            "[[Eteenpäin annettujen lista|/donations]] kirjaa vastaanottajan ja päivämäärän. Se ei kirjaa myyntihintaa, eikä sitä mitä kortista saisi. Talosta lähtevä kansio on tosiasia hankkeesta. Se ei ole arvonmääritys.",
            "[[Kokoelmat|/collections]] näyttää yhä tarkistuslistan, josta ne kortit tulivat. Kun olen merkinnyt kansion annetuksi, lopetan niiden rivien käsittelyn reikinä, jotka minun pitää täyttää uudestaan, ellen ole valinnut rakentaa sitä kansiota toisen kerran. Ruudun pitää vastata hyllyä. Poissa oleva kansio ei saa näyttää kansiolta, jonka unohdin aloittaa. Hyllyssä oleva kansio ja ruudussa oleva rivi kertovat saman asian. Jos ne eroavat, korjaan ruudun, en tarinaa. Tarina voi odottaa. Tyhjä hylly ei saa näyttää keskeneräiseltä hankkeelta.",
          ],
        },
        {
          id: "spares",
          heading: "Ylimääräiset jäävät jonoon",
          paragraphs: [
            "[[Bulk|/guides/bulk-cards]] on se, miten seuraava kansio valmistuu. Ylimääräiset eivät lähde irtonaisena kourallisena lahjan vieressä. Irtonainen kourallinen näyttää avokätiseltä ja saapuu kotitehtävänä. Pidän ylimääräiset, lajittelen ne ja annan niiden sulkea oikeita rivejä.",
            "Jos sinulla on ylimääräisiä kortteja siihen lajitteluun, kirjoita osoitteeseen [[magnus@linksforcards.com|mailto:magnus@linksforcards.com]]. Kerro mitä laatikossa on tavallisella kielellä: setit jotka tunnistat, tai pelkkä bulk. Minä teen lajittelun. Kaupat, jotka lähettävät kortteja, kiitetään nimellä kiitossivulla. Siinä on koko järjestely. Sisään tuleva laatikko saa saman settilajittelun kuin oma bulkini. En lupaa valmista kansiota tietylle viikolle. Lupaan, että kortit päätyvät taskuihin, kun rivi on oikeasti tyhjä.",
            "Kirjaan luovutuksen sinä päivänä kun se tapahtuu, en kuukauden lopussa. Vastaanottaja voi olla osaston tai kerhon nimi, jos lapsen nimi ei ole minun julkaistavakseni. Päivämäärä on päivä, jolloin kansio lähti käsistäni. Jos paikka pyytää odottamaan, kansio jää hyllyyn ja lista pysyy ennallaan. Olen mieluummin hidas kuin keksin lahjan, jota ei ole tapahtunut. Kansio, joka yhä on talossani, ei ole kansio jonka olen antanut eteenpäin, niin varma kuin suunnitelmasta olisinkin. Kirjaan päivän heti, kun ovi on sulkeutunut. Myöhemmin muistettu päivä on arvaus, ja arvausta en pane julkiselle listalle. Lista saa vain sen päivän, jolloin kansio oikeasti lähti. Sitä päivää en siirrä viikon loppuun, enkä kirjaa kansiota joka on yhä hyllyssäni. Jos päivä ei ole vielä tullut, riviä ei ole. Suunnitelma saa olla päässäni, ei julkisella sivulla. Pää ja sivu eivät ole sama paikka.",
          ],
        },
      ],
      faqs: [
        {
          q: "Otatko vastaan irtobulkia?",
          a: "Otan. Irtobulk on tervetullutta. Lajittelen sen kansioihin. En anna irtobulkia eteenpäin lahjana. Valmis kansio on se, joka lähtee, ja ylimääräiset jäävät täyttämään seuraavan.",
        },
        {
          q: "Näyttävätkö julkiset sivut myyntihinnan?",
          a: "Eivät. Julkinen lista näyttää vastaanottajan ja päivämäärän. Se ei koskaan näytä myyntihintaa. Kansio on valmis tarkistuslista, joka lähtee talosta, ja se on ainoa tosiasia jonka siitä julkaisen.",
        },
      ],
    },
    {
      slug: "sets-in-order",
      title: "Pokémon-setit järjestyksessä",
      description: "Julkisen korttilistan sarjat ja setit, Basesta vuonna 1999 uusimpaan sarjaan, linkki jokaiselle setin sivulle.",
      h1: "Pokémon-setit järjestyksessä",
      lede: "Minä pidän setit siinä järjestyksessä, jota julkinen korttilista käyttää. Settejä on {sets} ja sarjoja {seriesCount}, ja niiden nimien takana on {cards} korttia. Tämän muistiinpanon alla oleva lista on se järjestys, rakennettu samasta aineistosta kuin tarkistuslistat. Jokainen rivi linkittää setin sivulle, jota vasten minä merkitsen. Rivin päivämäärä on julkaisupäivä siitä aineistosta.",
      sections: [
        {
          id: "series-and-set",
          heading: "Sarja on hylly, setti on kansio",
          paragraphs: [
            "Sarja on joukko settejä, joilla on yhteinen kausi. Base, Jungle ja Fossil istuvat Base-sarjassa. Setti on yksi korttilista omine keräilynumeroineen. Minä rakennan kansioita setin tasolla ja selaan sarjan tasolla. Niiden kahden sanan sekoittaminen on tapa, jolla laatikkoon tulee lappu «Base», kun puolet on Junglea. Kun olen epävarma, luen setin merkin ennen kuin luen laatikon lapun. Lapun kirjoitin itse, joskus liian nopeasti. Merkki painettiin kortin mukana eikä se ole muuttunut sen jälkeen.",
            "[[Kansio-opas|/guides/collecting-binders]] käyttää tätä aikajanaa, kun päätän mille listalle kortti kuuluu. [[Sivujen järjestäminen|/guides/organize-binder]] olettaa, että lista on jo valittu. Aikajana ei kerro, mikä kortti on sievä. Se kertoo, mikä tarkistuslista on auki. Sarjan nimi hyllyn lapussa ei korvaa setin nimeä kansiossa. Kaksi nimeä, kaksi paikkaa, eikä Jungle muutu Baseksi toivomalla. Toive on hidas tapa täyttää väärä tasku.",
          ],
        },
        {
          id: "how-to-read",
          heading: "Miten minä luen listan",
          paragraphs: [
            "Jokainen lohko alla on sarja. Sen sisällä setit kulkevat julkaisupäivän mukaan julkisesta aineistosta. Päivämäärä on julkaisupäivä siinä aineistossa, kirjoitettuna tämän sivun kielellä. Luku on se, kuinka monta korttia julkaisemassani listassa on, siis nimiä ja keräilynumeroita eikä muuta. En lisää arvausta kortista, jota aineistossa ei ole.",
            "Promot, POP-sarja ja pienet listat, jotka on koottu otsikon Other alle, ovat aineistossa koska niilläkin on keräilynumerot. Minä en piilota niitä, jotta historia näyttäisi siistiltä. Promo on silti lista. Jos lajittelen bulkia ja numero vastaa promolistaa, kortti liittyy siihen pinoon. Setti, jolla ei ole päivämäärää aineistossa, saa silti seistä siinä kohdassa, johon aineisto sen pani. Minä en keksi kuukautta, jotta rivi näyttäisi tasaiselta. Tyhjä päivämäärä on rehellisempi kuin arvattu. Tyhjä kohta päivämäärässä jää tyhjäksi myös muistiinpanooni. En täytä sitä muistikuvalla vuodesta. Muistikuva vuodesta on usein viereisen setin vuosi, ja se riittää sekoittamaan pinon.",
          ],
        },
        {
          id: "early",
          heading: "Mistä pyydän ihmisiä aloittamaan katsomisen",
          paragraphs: [
            "[[Base-sarja|/collections/series/base]] on julkaistun listan alku. [[Base|/collections/set/base1]] itse on 9. tammikuuta 1999, 102 korttia. [[Sukupolven 1 tarkistuslista|/guides/gen-1-checklist]] selittää, miksi ne 102 korttia eivät ole sama asia kuin alkuperäiset 151 lajia. Lähetän ihmiset molemmille sivuille tahallani. Sekaannus on tavallinen, ja korjaus on vain ne kaksi lukua rinnakkain. 102 ja 151 saavat jäädä kahdeksi luvuksi lapulle, jos huomaan alkavani sanoa niitä kuin ne olisivat sama asia. Eivät ole. Lappu on halvempi kuin väärin lajiteltu kansio. Pidän lapun setin sivun vieressä, kunnes en enää sekoita lukuja keskenään. Sitten lappu saa mennä. Ennen sitä kaksi lukua pysyvät kahdessa paikassa.",
            "Listan toinen pää liikkuu, kun aineisto liikkuu. [[Mega Evolution|/collections/set/me1]] on nykyisessä aineistossa omana sarjanaan. Linkitän sen, jotta aikajanalla on tuore ovi, en siksi että uusi setti olisi tärkeämpi kuin vanha tavallinen kortti. [[Kokoelmat|/collections]] on sama lista palkeilla. Tämä muistiinpano on lista päivämäärineen. [[Mega Evolution—Delta Reign|/collections/set/delta-reign]] ei ole vielä sillä listalla. Kirjoitin sivun kansiolle ennen kuin keräilijänumerot ovat olemassa, enkä lisää tähän arvattua lukua.",
          ],
        },
        {
          id: "using-it",
          heading: "Aikajanan käyttö lajittelun aikana",
          paragraphs: [
            "Pidän tämän sivun auki, kun laatikko ulottuu useammalle kuin yhdelle kaudelle. En opettele julkaisuvuosia ulkoa. Napsautan sarjaa, sitten settiä, sitten sovitan keräilynumeron. Jos nimi täsmää, kortti lähtee laatikosta. Jos nimi ei täsmää, minulla on väärä lista, ja pakottaminen tekisi reiän kahteen kansioon yhtä aikaa. Lajittelen laatikon sarjan järjestyksessä ylhäältä alas, yksi sarja valmiiksi ennen seuraavaa. Silloin Base ei sekoitu uuteen kasaan vain siksi, että molempien päällä on Pikachu.",
            "Aineisto rakennettiin {built}. Jos upouusi setti puuttuu täältä, se puuttuu siitä rakennuksesta. Se ei piile valikossa. Näytän mieluummin päivätyn listan kuin epämääräisen lupauksen, että kaikki tähän päivään asti olisi mukana. Alle linkitetyt setin sivut ovat tarkistuslistat, joita minä oikeasti merkitsen.",
            "Käytän jokaisen rivin lukua todellisuustarkistuksena lajitellessani. Jos luulen setin olevan valmis ja kansiossa on vähemmän kortteja kuin luku, olen ohittanut numeron, yleensä valmentajan tai energian läheltä loppua. Jos kortteja on enemmän kuin luku, olen sekoittanut mukaan promon tai seuraavan setin. Kummassakin tapauksessa lista on korjaus. En pyöristä settiä tunteeksi «noin sata». Luku on taskujen määrä. Jos lasken taskut ja luku ei täsmää, etsin puuttuvan numeron lopusta alkaen. Valmentaja ja energia piiloutuvat sinne useammin kuin Pokémon. Loppu on se kohta, jonka silmä väsyy ohittamaan. Siksi lasken lopun erikseen, hitaammin kuin alun, ja vasta sitten uskon että setti on täynnä.",
          ],
        },
      ],
      faqs: [
        {
          q: "Ovatko setit julkaisujärjestyksessä kunkin sarjan sisällä?",
          a: "Ovat. Jokainen sarjalohko luettelee settinsä julkisen korttiaineiston julkaisupäivän mukaan. Sarjat itse seuraavat sen aineiston järjestystä. Lajittelen laatikon samassa järjestyksessä, jotta pinot vastaavat sivuja.",
        },
        {
          q: "Sisältääkö tämä lista hintoja?",
          a: "Ei. Siinä on setin nimi, julkaisupäivä ja korttien määrä julkisesta listasta. Mikään tällä sivulla ei ole myyntihinta. Luku on taskujen määrä siinä kansiossa, ei muuta.",
        },
      ],
    },
    {
      slug: "collecting-with-a-child",
      title: "Pokémon-kokoelman aloittaminen lapsen kanssa",
      description: "Miten minä aloitan yhden kansion lapsen kanssa: yksi tehtävä, bulk, suojat ja lupa lopettaa.",
      h1: "Pokémon-kokoelman aloittaminen lapsen kanssa",
      lede: "Olen isä, joka pitää tarkistuslistasta, ja olen istunut pöydän ääressä lapsen kanssa, joka pitää kuvista. Tapa jolla aloitan on pienempi kuin oma hyllyni. Yksi kansio. Yksi tehtävä. Bulk. Lopetan istunnon, kun se on yhä hauska. Lapsi valitsee kortin. Minä pidän kiinni vain suojasta ja numeroidusta taskusta.",
      sections: [
        {
          id: "one-binder",
          heading: "Yksi kansio, tahallaan",
          paragraphs: [
            "Minä en aloita koko korttipelin historialla. [[Pitkä opas|/guides/collecting-binders]] on minua varten myöhemmin, jos lapsi kysyy mistä muut kansiot tulivat. Ensimmäisellä kerralla tarjoan yhden valinnan: settikansio yhdelle lyhyelle listalle, tai [[sukupolven 1 kansio|/collections/generation/1]], jossa on yksi kortti jokaisesta alkuperäisestä lajista. [[Sukupolven 1 muistiinpano|/guides/gen-1-checklist]] on se versio valinnasta, jonka voin selittää minuutissa. Sataviisikymmentäyksi olentoa, yksi kortti kutakin, mikä tahansa painos. Panen oman avoimen kansioni syrjään ennen kuin lapsi istuutuu. Kaksi avointa kansiota samalla pöydällä muuttuu nopeasti yhdeksi yhteiseksi kasaksi, eikä sillä kasalla ole tehtävää.",
            "Kaksi hanketta yhtä aikaa on tapa, jolla lapsi saa syliinsä pinoja eikä yhtään valmista sivua. Olen tehnyt sen. Toinen kerta on huonompi, koska pöytä näyttää askareelta. Yksi kansio tarkoittaa, että seuraavalla kortilla on ilmeinen tasku. Ilmeinen on ystävällistä. Seuraava kortti ei tarvitse puhetta paikastaan. Tasku on jo olemassa, ja se riittää selitykseksi. Puhe paikasta tulee vasta, jos lapsi kysyy miksi kortti ei mene etusivulle.",
          ],
        },
        {
          id: "their-choice",
          heading: "Anna lapsen valita ensimmäinen sivu",
          paragraphs: [
            "Sekoitan pienen pinon bulkia suojissa ja annan lapsen valita ensimmäisen kortin, joka menee sisään. Jos kansio on Pokédex-järjestyksessä, kortti menee silti numeroituun taskuunsa, ei eteen. Selitän sen kerran, ilman puhetta. Tasku on olennon paikka. Kortin valinta on se hauska osa. Numero on lupaus, että kortti löytyy uudestaan. Jos valittu olento on jo kansiossa, lapsi saa valita vielä kerran samasta pinosta. Kaksoiskappale palaa bulkiin ilman puhetta siitä, että valinta oli väärä.",
            "Minä en korjaa makua. Pikachu on hyvä ensimmäinen kortti. Niin on olento, jota minä pidän tavallisena. [[Bulk|/guides/bulk-cards]] on oikea kasa tähän, koska kappaleita on tarpeeksi, jotta valinta ei ole arvokas. Arvokas pino saa minut leijumaan pöydän yllä. Leijuminen on keittiön lauantain vastakohta. Jos käteni jäävät kortin ylle, vedän ne pois. Valinta on lapsen, ja bulkissa on varaa siihen. Vara on se syy, miksi tämä kasa on oikea kasa aloitukseen.",
          ],
        },
        {
          id: "sleeves",
          heading: "Suojat, sitten sivu",
          paragraphs: [
            "[[Suojat|/guides/protect-cards]] menevät päälle ennen kuin pienet kädet ottavat kortin. Näytän sen liikkeenä, en luentona: kortti sisään, suoja suoraksi, tasku auki, kortti sisään. Lapset ovat hyviä liikkeissä. Heitä kiinnostavat vähemmän mielipiteeni säilytyksestä. Pidän juomat poissa pöydältä enkä selitä syytä, ellei minulta kysytä.",
            "Jos kortti taipuu, en tee siitä moraalista tapahtumaa. Panen suojan korvaajalle bulkista, jos minulla on sellainen, tai jätän rivin tyhjäksi kunnes on. Tyhjä rivi on sallittu. [[Kansio jonka annan eteenpäin|/guides/donating-cards]] on valmis kansio, eikä lapsen lauantaikansion tarvitse tulla sellaiseksi. Se saa jäädä lauantaikansioksi. Tyhjä rivi ei ole epäonnistunut lauantai. Se on paikka, johon voi palata, kun bulkissa on sopiva kortti. Paluu on helpompi, kun tasku jäi näkyviin eikä peittynyt korvikkeeseen.",
          ],
        },
        {
          id: "stop",
          heading: "Lopeta kun se on yhä hauskaa",
          paragraphs: [
            "Lopetan istunnon, kun lapsi on yhä halukas, en kun olen päässyt pyöreään lukuun. Kaksikymmentä minuuttia, jotka päättyvät suljettuun kansioon, tapahtuvat uudestaan. Tunti, joka päättyy huokaukseen, ei ehkä tapahdu. [[Kokoelmat|/collections]] muistavat rivit, jotka olen kirjannut. Mikään ruudulla ei ole tärkeämpää kuin se, että lapsi haluaa avata kansion ensi kerralla. En aseta tavoitteeksi kymmentä korttia tai täyttä sivua. Tavoite on, että kansio suljetaan silloin, kun joku yhä haluaa avata sen uudestaan.",
            "En seuraa lapsen kansiota kilpailuna omaani vastaan. Tämän hankkeen julkiset sivut ovat minun tarkistuslistojani. Lapsen sivu saa olla kesken ikuisesti. Jos he kasvavat pitempään harrastukseen, settilistat ja lajien sivut ovat siellä. Jos eivät, kansio teki silti työnsä: kortit järjestyksessä, suojat päällä, iltapäivä joka kuului heille.",
            "Kysymykset, joihin minä oikeasti vastaan, ovat pieniä. Mihin taskuun tämä kortti menee. Voiko tämä kaksoiskappale täyttää reiän. Saako lopettaa. Kyllä, numeroituun taskuun. Kyllä, jos rivi on tyhjä. Kyllä, lopeta. Isommat mielipiteet pidän omana tietonani, ellei lapsi kysy. Näin alkanut kokoelma voi pysyä pienenä ja olla silti oikea kokoelma. Sillä on järjestys, suoja ja seuraava tyhjä rivi, kun joku haluaa avata sen. Pieni kansio, jossa on järjestys ja suoja, on jo kokoelma. Sen ei tarvitse kasvaa minun hyllyni mittaiseksi. Mitta on lapsen iltapäivä, ei minun rivieni lukumäärä. Jos iltapäivä päättyy yhteen korttiin suojassa, se on valmis kerta. En avaa toista kansiota vain siksi, että pöydällä on vielä tilaa. Kun kansio sulkeutuu hymyyn, ilta onnistui, vaikka rivejä olisi tullut vain kaksi. Kaksi riviä riittää, jos kansio sulkeutuu rauhassa. Kortti, joka näyttää väärältä, ei mene sisään niin kauan kuin epäilen. [[Miten tunnistan väärennöksen|/guides/spot-fakes]] on se tarkistus, hiljaa, ja tilalle tarjotaan toinen kortti bulkista.",
          ],
        },
      ],
      faqs: [
        {
          q: "Mistä kansiosta lapsen kannattaa aloittaa?",
          a: "Tarjoan yhden: joko lyhyen settilistan tai sukupolven 1, jossa on yksi kortti jokaisesta lajista. En pane lasta aloittamaan jokaista settiä yhtä aikaa.",
        },
        {
          q: "Tarvitaanko harvinaisia kortteja lapsen kansioon?",
          a: "Ei. Bulkin tavalliset kortit täyttävät rivit. Harvinainen kortti on vapaaehtoinen, eikä se ole ensimmäisen iltapäivän pointti.",
        },
      ],
    },
    spotFakesFi,
  ];
}
