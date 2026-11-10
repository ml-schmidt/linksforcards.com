import type { ArticleCopy } from "@/lib/articles";
import { spotFakesPl } from "./spot-fakes/pl";

export function polishArticles(): ArticleCopy[] {
  return [
    {
      slug: "collecting-binders",
      title: "Zbieranie kart Pokémon w segregatorach",
      description: "Jak zbieram karty Pokémon w segregatorze setu i segregatorze Pokédexa, i gdzie leżą listy kart.",
      h1: "Jak zbieram karty Pokémon w segregatorach",
      lede: "Na półce stoją segregatory, nie stosy. Jeden idzie za setem, numer po numerze, z trenerami i energiami tam, gdzie stawia je lista. Drugi idzie za Pokédexem i pyta tylko, czy gatunek już jest. Ten tekst jest mapą tej różnicy. Krótsze notatki biorą po jednym pytaniu, w kolejności prawdziwego wieczoru: najpierw zadanie segregatora, potem bulk na stole, na końcu liczba na karcie, kiedy stos nie chce zostać rzędem.",
      diagram: {
        kind: "binders",
        title: "Dwa sposoby wypełnienia segregatora",
        description: "Segregator setu idzie za numerami kolekcjonerskimi. Segregator generacji trzyma jedną kartę każdego gatunku w kolejności Pokédexa.",
        caption: "Po lewej: jeden set, w kolejności numerów. Po prawej: jeden gatunek na kieszonkę, w kolejności Pokédexa.",
      },
      sections: [
        {
          id: "two-binders",
          heading: "Dwa segregatory, dwa zadania",
          paragraphs: [
            "Segregator setu i segregator generacji odpowiadają na różne pytania i już ich nie mieszam. Segregator setu pyta, czy każda karta tego setu leży na miejscu, w kolejności numeru kolekcjonerskiego, także wtedy, gdy karta jest zwyczajna. Segregator generacji pyta, czy mam jedną kartę każdego gatunku z tego zakresu Pokédexa. Wystarczy dowolne wydanie i dowolny język. Kiedy jeden segregator robił obie rzeczy, gubiłem brakującą zwykłą kartę: rząd holo wyglądał na pełny, a dziura niknęła w połysku.",
            "Dłuższa wersja sortowania z wieczoru na wieczór jest w tekście [[jak układam segregator|/guides/organize-binder]]. Krótka wersja powinna była powstać wcześniej: wybierz zadanie, zanim kupisz strony. Strona z dziewięcioma kieszonkami jest siatką. Nie obchodzi jej opowieść na karcie. Mnie obchodzi, więc kolejność ustalam najpierw, a karty mają się do niej dopasować. Zapisuję zadanie na grzbiecie ołówkiem: set albo generacja. Dwa słowa na grzbiecie znaczą, że segregator jest pomieszany, zanim włożę pierwszą kartę. Grzbiet obiecuje stronom jedną robotę i tej obietnicy pilnuję.",
          ],
        },
        {
          id: "set-binder",
          heading: "Segregator setu idzie za listą kart",
          paragraphs: [
            "[[Base|/collections/set/base1]] to przykład, który wciąż otwieram, kiedy ktoś pyta, jak działa segregator setu. Set wyszedł 9 stycznia 1999, a publiczna lista kart ma 102 karty. Strona w segregatorze idzie za tą listą: numer 1, potem 2, potem 3, trenerzy i energie włącznie. Jest karta na liście, jest kieszonka. Nie zostawiam dziury dlatego, że karta jest zwykła, i nie wyciągam holo na początek dlatego, że błyszczy.",
            "Cała kolejność serii i setów jest w tekście [[sety Pokémon po kolei|/guides/sets-in-order]]. Tę oś czasu wyjmuję, kiedy pudełko bulk miesza lata. Karta z Jungle nie należy do segregatora Base, nawet jeśli rysunek wydaje się z tego samego roku. Strona setu jest naraz listą kart i listą kontrolną. Zaznaczam rząd dopiero wtedy, gdy właśnie ta karta siedzi w segregatorze, a nie kiedy widziałem ją w stosie na stole. 102 kieszonki znaczą, że energia pod koniec jest tak samo obowiązkowa jak pierwszy Pokémon. Pomijam ją tylko wtedy, gdy lista kart ją pomija. Base jej nie pomija, a pusta kieszonka na końcu jest tak samo prawdziwa jak pusta na początku.",
            "Trzeci segregator idzie za motywem, nie za jednym setem i nie za jednym miejscem gatunku. [[Segregatory tematyczne|/collections/themes]] zbierają każdy angielski druk jednego gatunku, jednego artysty albo jednego rodzaju karty. [[Wszystkie karty Pikachu|/collections/themes/pikachu]] to lista, którą otwieram, gdy stos jest pełen tej twarzy.",
          ],
        },
        {
          id: "dex-binder",
          heading: "Segregator generacji idzie za Pokédexem",
          paragraphs: [
            "Segregator generacji mieści jedną kartę każdego gatunku. [[Generacja 1|/collections/generation/1]] to pierwsze 151. Generacje od 1 do 9 to {species} gatunków. [[Jak uzupełniam segregator Pokédexa|/guides/pokedex-binder]] to długa notatka o tym, jak to zrobić bez polowania na rzadkie wydania. [[Lista kontrolna generacji 1|/guides/gen-1-checklist]] zostaje przy pierwszych 151, bo o tym segregatorze ludzie mówią, kiedy mówią o pierwotnych stworach. Jeśli druga karta tego samego gatunku jest ładniejsza, czeka w bulk. Kieszonka nie rośnie o drugie miejsce. Ładniejsza dostaje kolejkę dopiero przy wymianie, a stara wraca do pudełka.",
            "[[Pikachu|/pokedex/25]] pokazuje, po co jest ta zasada. Strona gatunku wymienia każde wydanie w publicznych danych, przez wiele setów. Segregator generacji potrzebuje jednego. Pikachu z bulk wypełnia kieszonkę. Późniejsza illustration rare wypełnia tę samą kieszonkę. Nie trzymam tam każdego wydania. To robota segregatora setu i tylko tego setu, który naprawdę buduję.",
          ],
        },
        {
          id: "bulk",
          heading: "Bulk to stos, który wypełnia kieszonki",
          paragraphs: [
            "Większość kart, które zamykają rząd, pochodzi z bulk. Mówię to z sympatią. Bulk to zwykły stos: karty zwykłe, nieco rzadsze, dublety i ten Magikarp, który wraca. [[Co robię z bulk|/guides/bulk-cards]] to sortowanie. [[Jak czytam kartę|/guides/read-a-card]] to sposób, w jaki znajduję numer kolekcjonerski i symbol setu, kiedy stos jest mieszany, a nazwa nie wystarcza.",
            "Sortuję według setu, zanim sortuję według stwora. Karta, która pasuje do otwartego rzędu w segregatorze setu, ląduje tam. Zapasowa kopia, która pasuje do pustego rzędu gatunku, może przejść do segregatora generacji. Reszta zostaje w pudełku bulk, aż lista kontrolna o nią poprosi albo gotowy segregator będzie mógł wyjść z domu. Bulk nie jest więc tym, co zostaje po kolekcji. Bulk jest stosem, który segregator kończy. Na koniec wieczoru liczę otwarte rzędy, nie błyszczące karty. Liczba, która maleje, jest wieczorem, który się udał. Błyszczący stos, którego rzędów nie sprawdziłem, czeka do następnego razu.",
          ],
        },
        {
          id: "tracker",
          heading: "Publiczny spis to lista kontrolna, nie sklep",
          paragraphs: [
            "[[Strona główna|/]] to publiczne liczenie: ile różnych kart jest zapisanych i które segregatory się ruszyły. [[Kolekcje|/collections]] to lista robocza. Sety są tam ułożone według serii, każdy segregator generacji ma odnośnik, a każdy gatunek ma własną stronę. Pełny pasek znaczy, że kartę zapisałem. Nie mówi nic o cenie sprzedaży. Strony publiczne nigdy takiej nie pokazują.",
            "Kiedy rząd na ekranie i karta w segregatorze się nie zgadzają, wygrywa segregator. Nazywam segregator gotowym dopiero po przekartkowaniu stron. Ekran jest po to, żebym zobaczył dziurę, zanim ją zapomnę. Tyle jest całego spisu. Żadne pole nie jest cennikiem i żaden pasek nie znaczy, że karta jest na sprzedaż. Ptaszka stawiam dopiero wtedy, gdy dokartkowałem do kieszonki. Ptaszek bez kartkowania to karteczka, nie gotowy segregator, a następne siedzenie zaczyna się tam, gdzie ptaszka brakuje. Jeśli ekran pokazuje pełny pasek, a kieszonka jest pusta, ścieram ptaszka. Nie tłumaczę pustej kieszonki ekranowi. Ekran idzie za segregatorem, dlatego kartkuję strony, zanim cokolwiek nazwę gotowym.",
          ],
        },
        {
          id: "care-and-kids",
          heading: "Koszulki, dziecko i segregator, który wychodzi",
          paragraphs: [
            "Karta, która ma mieszkać w segregatorze, dostaje najpierw koszulkę. [[Ochrona kart|/guides/protect-cards]] to notatka o koszulkach, stronach z dziewięcioma kieszonkami, stronach z czterema kieszonkami i o tym, gdzie segregatora nie stawiam. Zaczynałem od puszki ze sklepu spożywczego i wilgotnej półki nauczyłem się na własnej skórze. Koszulki nie pomijam nawet przy zwykłej karcie, która jest w każdym pudełku bulk.",
            "[[Zbieranie z dzieckiem|/guides/collecting-with-a-child]] to notatka, po którą sięgam, kiedy dziecko siada przy stole. Jeden segregator, jedno zadanie i zgoda na koniec. [[Oddawanie gotowego segregatora|/guides/donating-cards]] opisuje chwilę, gdy segregator jest skończony i przekazuję go dalej. Przekazuję gotowy segregator, nie garść luźnych dodatków. Publiczna lista zapisuje odbiorcę i datę.",
            "Gdybym zostawiał jedną instrukcję na kartce, brzmiałaby tak. Wybierz zadanie segregatora. Otwórz właściwą listę kontrolną. Nałóż koszulkę na kartę, która zamyka dziurę. Zaznacz rząd dopiero wtedy, gdy karta siedzi w kieszonce. Skończ, kiedy stół robi się bałaganem, i zacznij następnym razem od tej samej dziury. Reszta tych notatek jest tą instrukcją, rozpisaną pod pytanie, które naprawdę słyszę: rozmiar strony, bulk, te 151, cały Pokédex, numer na karcie, przechowywanie, dziecko przy stole albo segregator, który wychodzi z domu. Kartka zostaje na stole do następnego razu. Nie otwieram nowego setu tego samego wieczoru tylko dlatego, że ręce są jeszcze ciepłe. Ciepła ręka to zły powód, żeby otwierać drugi segregator, kiedy w pierwszym wciąż jest dziura.",
          ],
        },
      ],
      faqs: [
        {
          q: "Czy potrzebuję i segregatora setu, i segregatora generacji?",
          a: "Nie. Używam obu, bo odpowiadają na różne pytania. Jeden segregator setu to pełny sposób, żeby zacząć. Segregator generacji to drugi pełny sposób. Błędem jest prosić jeden segregator o obie roboty.",
        },
        {
          q: "Gdzie są listy kontrolne?",
          a: "Każdy set ma listę kart, każda generacja ma listę kontrolną, a każdy Pokémon ma stronę swoich wydań. Strona kolekcji łączy wszystkie trzy.",
        },
      ],
    },
    {
      slug: "organize-binder",
      title: "Jak układam segregator Pokémon",
      description: "Strony z dziewięcioma i czterema kieszonkami, numer setu i kolejność Pokédexa, tak jak naprawdę sortuję segregator.",
      h1: "Jak układam segregator Pokémon",
      lede: "Najpierw układam segregator, dopiero potem karty. Rozmiar strony i kolejność są całym systemem. Reszta to karta, która znajduje kieszonkę już przygotowaną. Kiedy te dwie decyzje siedzą, bałaganiarski wieczór i tak może skończyć się jedną gotową stroną, a nie trzema stosami, które tylko zostały pooglądane.",
      diagram: {
        kind: "pockets",
        title: "Dziewięć kieszonek i cztery kieszonki",
        description: "Strona z dziewięcioma kieszonkami mieści dziewięć kart w siatce trzy na trzy. Strona z czterema kieszonkami mieści cztery większe karty.",
        caption: "Dziewięć kieszonek trzyma set zwartym. Cztery kieszonki robią każdą kartę łatwiejszą dozenia, a segregator grubieje szybciej.",
      },
      sections: [
        {
          id: "nine-or-four",
          heading: "Dziewięć kieszonek czy cztery",
          paragraphs: [
            "Strona z dziewięcioma kieszonkami to trzy kolumny po trzy. Karta w koszulce się mieści. Set około stu kart to kilkanaście stron, segregator, który utrzymam otwarty jedną ręką. Tej strony używam do segregatorów setów. [[Paldean Fates|/collections/set/sv4pt5]] ma 245 kart na publicznej liście, więc segregator z dziewięcioma kieszonkami jest już gruby. Strona z czterema kieszonkami zrobiłaby z tego samego setu segregator, którego nie chcę nosić.",
            "Strona z czterema kieszonkami to dwie kolumny po dwie i każda karta siedzi większa. Używam jej, kiedy chodzi o oglądanie, nie o odhaczanie długiej listy. Segregator generacji może iść w obie strony. Dziewięć kieszonek mieści {species} gatunków w mniejszej liczbie segregatorów. Cztery kieszonki ułatwiają dziecku znaleźć ulubioną stronę i obciążają półkę. Decyduję, zanim pierwsza karta wejdzie. Przenoszenie gotowego setu z jednego rozmiaru strony na drugi to popołudnie, które już raz straciłem, i nie zamierzam tracić go drugi raz. Nowa strona czeka pusta, aż rozmiar całego setu jest ustalony. Pojedyncza karta nie wybiera rozmiaru w biegu. Decyzja zapada raz, a potem kieszonki tylko się zapełniają. [[Długi przewodnik|/guides/collecting-binders]] jest powodem, dla którego te dwa zadania segregatora zostają osobno.",
          ],
        },
        {
          id: "set-order",
          heading: "Kolejność według numeru setu",
          paragraphs: [
            "Kolejność setu to numer kolekcjonerski na karcie, zestawiony z listą kart. Numer 1 jest pierwszą kieszonką, nawet gdy to nie stwór, którego lubię najbardziej. Trenerzy i energie zostają tam, gdzie położył je set. Nie robię ładnej strony z holo na początku. Ładna strona chowa brakującą zwykłą kartę.",
            "[[Sety po kolei|/guides/sets-in-order]] mówią, do której listy karta należy. Symbol setu pomaga to potwierdzić. Numer jest tym, według czego sortuję. Jeśli dwie karty dzielą nazwę, a numery się różnią, to różne rzędy. Nauczyłem się tego na promach, które często leżą obok głównego setu i mają własne liczenie. Nie wolno ich wsunąć do głównej listy tylko dlatego, że nazwa brzmi znajomo. Promo dostaje własny stos i własną kartkę. Wsuwam je do głównego setu dopiero wtedy, gdy lista kart sama tak mówi, a ona tak nie mówi. Osobne liczenie to osobna lista, choć rysunek wygląda na ten sam rok.",
          ],
        },
        {
          id: "dex-order",
          heading: "Kolejność według numeru Pokédexa",
          paragraphs: [
            "Kolejność Pokédexa to kolejność gatunków. [[Generacja 1|/collections/generation/1]] idzie od Bulbasaura do Mew, od #001 do #151. Kieszonki nie obchodzi, z którego setu karta przyszła. Zwykła karta w koszulce z nowego setu wypełnia #001 równie uczciwie jak stare wydanie. [[Notatka o segregatorze Pokédexa|/guides/pokedex-binder]] wyjaśnia, czemu zatrzymuję się na jednej karcie gatunku. [[Lista kontrolna generacji 1|/guides/gen-1-checklist]] to ten sam pomysł, zawężony do pierwszych 151.",
            "Numer Pokédexa piszę na małej kartce w rogu strony tylko wtedy, gdy strona zaczyna nową setkę. Nie opisuję każdej kieszonki. Lista kontrolna na stronie kolekcji jest indeksem. Segregator jest dowodem. Kiedy kartkuję do #050, ta kieszonka ma być #050, nawet jeśli kartę znalazłem we wtorek i się ucieszyłem. Radość nie przesuwa kieszonki. Numer zostaje, a karta go szuka, nie odwrotnie. Znalezisko z wtorku wciąż jest #050, jeśli numer tak mówi.",
          ],
        },
        {
          id: "by-type",
          heading: "Sortowanie według typu, gdy segregator nie jest listą",
          paragraphs: [
            "Typ to symbol w prawym górnym rogu karty Pokémon. [[Pomoc do bazy kart|https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database]] opisuje go tak: ikona energii dla Trawy, Ognia, Wody i reszty. Dziecko, które chce każdą kartę wody na jednej stronie, sortuje według typu. Tego używam do stosu do gry na stole. Do segregatora setu tego nie używam. Lista jest numerowana, a strona jednego typu chowa brakujący numer.",
            "Trenerzy nie noszą tej ikony typu, a podstawowa Energia zostaje osobnym stosem. Takiego popołudnia te karty dostają własny stos, zamiast być wciskane pod stwora. Generacja to inny porządek, zakres Pokédexa, i właśnie tym jest już [[generacja 1|/collections/generation/1]]. Set, numer, typ i generacja to cztery pytania. Biorę jedno na segregator. [[Jak czytam symbol|/guides/read-a-card]] pokazuje, gdzie jest ikona, zanim zaufam stosowi.",
          ],
        },
        {
          id: "marking-a-line",
          heading: "Jak zaznaczam rząd",
          paragraphs: [
            "[[Kolekcje|/collections]] pokazują rząd jako pełny, kiedy kartę zapisałem. Zapisanie to nie to samo co rzut oka na stos. Wkładam kartę do koszulki, koszulkę do kieszonki, i dopiero wtedy zaznaczam rząd. Jeśli zaznaczę najpierw, spis kłamie, a w segregatorze jest dziura.",
            "[[Koszulki i strony|/guides/protect-cards]] są przed ptaszkiem, nie po nim. Karta starta do białości w kieszonce to karta, którą potem muszę wymienić, a rząd tak naprawdę nigdy nie był skończony. Kiedy ekran i segregator się różnią, kartkuję. Segregator wygrywa.",
            "Praktyczny wieczór wygląda tak. Wybieram jeden segregator, a drugi zostawiam zamknięty. Pasujący stos kładę na stole w kolejności numerów, dziewięć kart w rzędzie, jeśli używam stron z dziewięcioma kieszonkami. Każdą wkładam w koszulkę, wsuwam, i dopiero potem patrzę na listę kontrolną. Karty, które nie należą do wieczornego segregatora, wracają do swojego pudełka, zanim zacznę, żeby w połowie strony nie stały się drugim projektem. Jedna strona skończona i włożona jest lepszym wieczorem niż trzy podziwiane stosy. Nie zapalam drugiej lampy i nie otwieram następnego segregatora tylko dlatego, że pierwsza strona poszła szybko. Szybko to powód, żeby przestać, a nie żeby zaczynać jeszcze jeden projekt. Jutro ten sam segregator otwiera się na tej samej stronie. Nie nagradzam pośpiechu nowym stosem. Stos zostawiony w połowie jest jutro łatwiejszy niż dwa stosy zostawione w połowie.",
            "Kiedy strona jest gotowa, zamykam segregator i na kartce zostawiam tylko nazwę setu oraz numer, na którym stanąłem. Nie opisuję, czy strona wygląda ładnie. Następny wieczór zaczyna się od tego numeru, nie od nowego pomysłu. Jeśli w siatce dziewięciu kieszonek zostaje jedna pusta na końcu strony, zostaje pusta. Nie przesuwam pierwszej karty następnej strony do tyłu, żeby zatkać dziurę, bo wtedy numery uciekają z siatki. Numer 10 setu ma siedzieć w tym samym miejscu za każdym razem, gdy otwieram segregator.",
          ],
        },
      ],
      faqs: [
        {
          q: "Czy segregator generacji powinien mieć strony z dziewięcioma kieszonkami?",
          a: "Używam dziewięciu kieszonek, kiedy celem jest domknięcie zakresu. Używam czterech, kiedy celem jest oglądanie mniejszej liczby kart, większych. Oba są prawdziwymi segregatorami. Nie powinny się mieszać w jednym tomie.",
        },
        {
          q: "Czy sortuję set według typu albo rzadkości?",
          a: "Nie. Sortuję set według numeru kolekcjonerskiego. Typ i rzadkość zmieniają wygląd strony i chowają brakujące karty.",
        },
      ],
    },
    {
      slug: "bulk-cards",
      title: "Co robię z bulk kart Pokémon",
      description: "Bulk wypełnia segregatory. Sortuję według setu, potem według pustego rzędu gatunku, a resztę zostawiam.",
      h1: "Co robię z bulk kart Pokémon",
      lede: "Bulk to złoto. Chodzi o zwykły stos: karty zwyczajne, dublety i kartę, która jest w każdej puszce. Ten stos kończy segregator. Często zaczyna się od puszki ze sklepu spożywczego. Sortuję według setu, pozwalam zapasom wypełnić puste rzędy gatunków i zostawiam to, co zostanie, zamiast nazywać to śmieciem.",
      sections: [
        {
          id: "why-bulk",
          heading: "Czemu traktuję bulk jak kolekcję",
          paragraphs: [
            "Holo to miła strona. To nie system. Systemem jest pusty rząd, a puste rzędy to głównie zwykłe karty. [[Przewodnik po segregatorach|/guides/collecting-binders]] mówi to w długiej formie. Tu jest krótka forma, której używam przy stole: jeśli karta zamyka dziurę, to jest karta, której chciałem, nawet gdy rysunek to ten sam Magikarp, którego znam na pamięć.",
            "Przestałem tłumaczyć się z bulk w dniu, w którym segregator generacji ruszył szybciej z mieszanego pudełka niż z czegokolwiek, co odłożyłem jako szczególne. Szczególne karty mogą czekać w koszulce. Lista kontrolna na nie nie czeka. [[Zbieranie z dzieckiem|/guides/collecting-with-a-child]] używa tego samego stosu, bo dziecko może trzymać zwykłą kartę, wybrać kieszonkę i zobaczyć, jak rząd się zamyka. To prawdziwy postęp, nie nagroda pocieszenia. Ręka dziecka i moja lista kontrolna używają tej samej zwykłej karty. Wystarcza obu. Rzadka karta może czekać, aż rząd zamknie się bez niej.",
            "Niektóre listy tematyczne to prawie sam ten stos. [[Gliniane karty Yuki Morii|/collections/themes/yuka-morii]] to zwykłe karty, a tam bulk jest złotem. [[Segregatory tematyczne|/collections/themes]] to miejsce, w którym leżą te listy.",
          ],
        },
        {
          id: "sort-by-set",
          heading: "Najpierw sortuj według setu",
          paragraphs: [
            "Wysypuję pudełko tylko tak daleko, żeby stół został życzliwy. Potem sortuję według setu, nie według stwora i nie według połysku. [[Jak czytam numer i symbol|/guides/read-a-card]] to część, którą robię rękami: znajdź numer kolekcjonerski, potwierdź set, zrób stos. Stos na Base, stos na współczesny set, stos, którego jeszcze nie umiem położyć.",
            "Każdy stos idzie na stronę setu w [[kolekcjach|/collections]]. Strona jest listą kart. Jeśli rząd jest otwarty, karta wchodzi do tego segregatora. Jeśli rząd jest pełny, karta jest dubletem i zostaje w bulk. Nie wyjmuję dubletów, żeby je podziwiać, dopóki otwarte rzędy tego stosu nie są skończone. Podziwianie to sposób, w jaki na wpół posortowane pudełko trwa miesiąc. Stos, którego nie umiem położyć, leży osobno, aż symbol i numer dostaną spokojne spojrzenie. To nie porażka. Czeka na następny wieczór i nie wolno go wsypywać z powrotem tylko dlatego, że zrobiło się późno. Na kartce piszę nazwę setu, jeśli ją rozpoznaję, i słowo pytanie, jeśli nie. Poranek nie zaczyna się od domysłu. Domysł z wczorajszego wieczoru jest rano dziurą w dwóch segregatorach.",
          ],
        },
        {
          id: "species-lines",
          heading: "Potem pusty rząd gatunku",
          paragraphs: [
            "Dublet do setu wciąż może być pierwszym egzemplarzem tego gatunku w segregatorze generacji. [[Segregator Pokédexa|/guides/pokedex-binder]] potrzebuje tylko jednego. [[Magikarp|/pokedex/129]] to przykład, któremu ufam, bo bulk wciąż podsuwa kolejnego. Jeśli #129 jest puste, następny Magikarp wychodzi z pudełka i wypełnia kieszonkę. Jeśli #129 jest pełne, karta wraca.",
            "Na rzędzie gatunku liczy się dowolny język. Karta wydrukowana z inną nazwą i tak pokazuje ten sam gatunek na stronie gatunku, bo strona idzie za krajowym numerem Pokédexa. Sprawdzam numer, kiedy nazwa na karcie nie jest tą angielską, którą pamiętam. Nazwa może się różnić. Numeru nie wolno zgadywać. Nie piszę nazwy gatunku na pudełku jako skrótu. Numer na karcie i numer w Pokédexie mają być tą samą liczbą, zanim karta opuści bulk. Jeśli numery się różnią, karta zostaje w pudełku. Domysł wypełniłby złą kieszonkę i zostawił właściwą pustą. Pusta właściwa kieszonka jest uczciwsza niż zła karta na ładnym miejscu.",
          ],
        },
        {
          id: "extras",
          heading: "Co się dzieje z kartami zapasowymi",
          paragraphs: [
            "Zapas zostaje w pudełku opisanym nazwą setu albo w jednym mieszanym pudełku, kiedy stos jest mały. To nie śmieci. Następny segregator często potrzebuje karty, z której prawie zrezygnowałem. Trzymam je sucho, w koszulce jeśli róg jest już miękki, i nie na podłodze. Miękki róg, który poleży luzem jeszcze tydzień, to róg, do którego potem szukam zastępstwa, więc koszulka wchodzi tego samego wieczoru, kiedy to zauważę.",
            "Kiedy segregator jest gotowy, historia się zmienia. [[Gotowy segregator może wyjść z domu|/guides/donating-cards]] i trafić do dziecka. Luźny zapas nie idzie z nim. Zostaje i wypełnia następny. Ten podział robi z podarku całość i trzyma listę kontrolną w prawdzie.",
            "Samemu pudełku daję nudną etykietę: nazwę setu albo słowo «mieszane», jeśli jeszcze go nie rozdzieliłem. Nie opisuję pudełka domysłem, za ile karty dałoby się sprzedać. Nie mam osobnego pudełka na karty «dobre» i kosza na «śmieci». Taki podział sprawia, że zwykłe karty znikają, a dziury zostają otwarte. Raz w miesiącu biorę mieszane pudełko, robię sortowanie według setu jeszcze raz i je zmniejszam. Celem jest mniejszy stos pytań, nie ładniejsza wystawa. Mniejszy stos pytań jest jedynym celem miesiąca. Ładny stos, którego nie sprawdziłem, nie jest postępem. Sprawdzenie jest chwilą, w której karta albo zamyka rząd, albo wraca do pudełka.",
            "Po miesięcznym przejściu dopisuję na pudełku dzień i set, który został w połowie. Nie dopisuję domysłu, co w stosie jest warte zachodu. Następny raz zaczyna się od tej kartki. Mały stos, który mieści się w jednym woreczku, dostaje tę samą kartkę co pudełko. Mały stos ginie na dnie dużego łatwiej niż duży, a właśnie stamtąd zwykle wychodzi brakująca zwykła karta. Nie łączę dwóch setów w jednym woreczku, żeby oszczędzić miejsce. Miejsce jest na półce. Pomieszanie kosztuje następny wieczór. Karta, której nie ufam, nie zamyka rzędu. [[Rozpoznawanie fałszywki|/guides/spot-fakes]] to osobna notatka. W pudełku bulk leżą zwykłe prawdziwe karty i właśnie tych chcę.",
          ],
        },
      ],
      faqs: [
        {
          q: "Czy wyrzucać dublety zwykłych kart?",
          a: "Nie wyrzucam. Dublet w jednym secie często jest brakującym gatunkiem w innym segregatorze. Trzymam je w pudełkach według setu, aż lista kontrolna o nie poprosi. Następny segregator bywa bliżej niż nowy stos saszetek.",
        },
        {
          q: "Czy sortuję bulk najpierw według rzadkości?",
          a: "Nie. Znaki rzadkości zmieniały się przez lata i nie mówią, który rząd jest pusty. Mówi to numer kolekcjonerski. Mogę posortować całe pudełko, nie rozstrzygając, czy znak coś znaczy.",
        },
      ],
    },
    {
      slug: "pokedex-binder",
      title: "Jak uzupełniam segregator Pokédexa",
      description: "Jedna karta każdego gatunku, od #001 do końca generacji 9, wypełniona z bulk.",
      h1: "Jak uzupełniam segregator Pokédexa",
      lede: "Segregator Pokédexa to jedna karta każdego gatunku. Generacje od 1 do 9 to {species} gatunków. Wypełniam go z bulk, w kolejności Pokédexa, i nie gonię wydania, o które lista kontrolna nie prosi. Budżet to bulk, który już mam, plus koszulka i kieszonka dla każdej karty, która zamyka dziurę.",
      sections: [
        {
          id: "one-card",
          heading: "Jedna karta każdego gatunku",
          paragraphs: [
            "Zasada jest mała i mnie ratuje. Jedna karta. Dowolny set. Dowolny język. Dowolna rzadkość. [[Długi przewodnik po segregatorach|/guides/collecting-binders]] oddziela tę robotę od segregatora setu, gdzie każda karta z listy ma kieszonkę. Tu stwór jest kieszonką. Drugi Pikachu jest dubletem, nawet gdy rysunek jest nowy.",
            "Nawyk zacząłem od [[Bulbasaura|/pokedex/1]]. Strona gatunku wymienia wydania. Segregator potrzebuje jednego. Włożyłem pierwszego Bulbasaura w koszulce, którego już miałem, na #001 i przestałem szukać lepszego #001. Lepsze to inne hobby. To hobby to zakres, od pierwszego numeru do ostatniego, jeden stwór w każdym rzędzie. Drugi Bulbasaur, choćby najstarszy, jest bulk, kiedy #001 jest już pełne. Nie trzymam dla niego zapasowej kieszonki. Zapasowa kieszonka byłaby drugim hobby pod tą samą okładką.",
            "Strona gatunku wymienia każdy druk, a segregator Pokédexa wciąż potrzebuje tylko jednej karty. [[Wszystkie karty Pikachu|/collections/themes/pikachu]] trzyma każdy druk Pikachu jako osobną listę. [[Segregatory tematyczne|/collections/themes]] leży obok stron generacji, kiedy chcę zobaczyć cały rząd jednej twarzy.",
          ],
        },
        {
          id: "the-range",
          heading: "Te {species}, generacja po generacji",
          paragraphs: [
            "Nie otwieram jednego wielkiego segregatora i nie nazywam go gotowym. Buduję generację po generacji, bo [[kolekcje|/collections]] są już tak podzielone i bo generacja jest książką, którą da się skończyć. Generacja 1 to 151. Generacja 2 to następne 100. Późniejsze generacje leżą w tym samym miejscu, każda z własną listą kontrolną i własną liczbą.",
            "[[Generacja 1|/collections/generation/1]] jest tą, którą mówię ludziom, żeby skończyli najpierw, a [[notatka o generacji 1|/guides/gen-1-checklist]] leży obok. Stwory są znajome, pudełka bulk są ich pełne, a 151 to liczba, którą utrzymam w głowie. Potem generacja 5 jest długa, a generacja 6 krótka. Niech lista kontrolna to powie. Liczb nie wkuwam. Strona generacji mówi, jaka jest długość. Ufam stronie bardziej niż wspomnieniu, która generacja była długa. Wspomnienie zaokrągla, a kieszonki się nie zaokrąglają.",
          ],
        },
        {
          id: "from-bulk",
          heading: "Wypełniaj go z bulk",
          paragraphs: [
            "[[Bulk|/guides/bulk-cards]] jest zapasem. Ten wybór jest świadomy. Rzadka ilustracja jest mile widziana, kiedy to karta, którą już mam. Nie jest warunkiem. Czekanie na ulubione wydanie to sposób, w jaki segregator Pokédexa stoi na tych samych dwudziestu dziurach przez rok.",
            "Praktyczne przejście jest nudne i działa. Biorę jedną listę kontrolną generacji. Idę przez pudełko bulk z dziurami w głowie. Wkładam w koszulkę kartę, która dziurę zamyka. Wsuwam ją do kieszonki. Zaznaczam rząd. Potem przestaję, nawet jeśli pudełko wciąż wygląda ciekawie. Nie zanoszę całego pudełka na kanapę. Lista leży na stole, dziur jest dość mało, żeby je pamiętać przez jedno przejście, a karty, które żadnej nie zamykają, wracają, zanim zdążę się zachwycić. [[Jak układam strony|/guides/organize-binder]] to wybór rozmiaru strony. Dziewięciu kieszonek używam, kiedy celem jest zobaczyć zakres skończony. Przejście kończy się, gdy jedna generacja jest przejrzana, choćby w pudełku mignął znajomy rysunek następnej. Znajome rysunki są robotą jutra. Robota tego wieczoru to lista, która jest otwarta.",
          ],
        },
        {
          id: "when-it-is-done",
          heading: "Kiedy nazywam go gotowym",
          paragraphs: [
            "Generacja jest gotowa, kiedy każdy rząd gatunku ma kartę w segregatorze i przekartkowałem strony, żeby to udowodnić. Ekran może mówić, że rzędy są pełne. I tak kartkuję. Karta zapisana, a potem zostawiona w pudełku po butach, nie jest w segregatorze.",
            "Nie podmieniam gotowej generacji dla sportu. Jeśli późniejsza karta mnie uśmiecha, może wymienić tę w kieszonce, a stara wraca do bulk. Rząd zostaje pełny tak czy tak. Nie chodziło o najbardziej efektowną kopię. Chodziło o stwora, na miejscu, po kolei, tak żeby dało się do niego dokartkować.",
            "Budżet, przy tym segregatorze, znaczy, że wydaję uwagę zamiast gonić konkretną kopię. Większość potrzebnych kart już mam w nieposortowanym bulk. Koszt, który ma znaczenie, to koszulka i strona. Kupuję je w zwykłych opakowaniach i używam na zwykłych kartach, nie odkładając ich na później. Listę dziur ołówkiem mam tylko wtedy, gdy jestem z dala od ekranu. W domu listą jest strona generacji. Jeśli dziura stoi pusta miesiącami, to dlatego, że tego gatunku brakuje w moich pudełkach, a nie dlatego, że czekam na rzadszy obraz gatunku, który już mogłem odłożyć. Kiedy wymieniam kartę, nie piszę o rzędzie nowej historii. Był pełny, jest pełny, a stara karta znów jest bulk i czeka na inną dziurę. Wymiana jest dozwolona dla uśmiechu. Nie otwiera nowego rzędu i nie zmienia liczby, którą już zaznaczyłem. Uśmiech i liczba mogą mieszkać w jednej kieszonce, byle kieszonka została jedna.",
            "Generacje trzymam w osobnych segregatorach, kiedy do jednego tomu zaczyna wchodzić za dużo stron. Generacja 1 to 151 kieszonek. Dłuższe i krótsze generacje mają liczby na stronach kolekcji, więc ich nie wkuwam. Kiedy zaczynam nową generację, poprzedni segregator zostaje zamknięty na półce. Dwie otwarte generacje na jednym stole mieszają numery, bo #050 z jednej księgi i późniejsze #050 to nie ta sama kieszonka. Na kartce piszę numer krajowy. Nie zaczynam segregatora od środka zakresu tylko dlatego, że ten gatunek leży na wierzchu pudełka. Wierzchnia karta idzie do swojego numeru, a wieczór jedzie dalej od dziury, którą lista pokazuje jako następną.",
          ],
        },
      ],
      faqs: [
        {
          q: "Czy segregator Pokédexa potrzebuje każdego wydania Pokémona?",
          a: "Nie. Jedna karta każdego gatunku to cała zasada. Każde wydanie należy na stronę gatunku, nie do tego segregatora.",
        },
        {
          q: "Którą generację skończyć najpierw?",
          a: "Zaczynam od generacji 1, pierwszych 151. Karty są częste w bulk, a lista kontrolna jest dość krótka, żeby ją domknąć. Potem biorę następną generację ze spisu, nie losową dziurę ze środka Pokédexa.",
        },
      ],
    },
    {
      slug: "gen-1-checklist",
      title: "Lista kontrolna generacji 1: wszystkie 151",
      description: "Jak zbieram pierwsze 151 Pokémonów w jednym segregatorze, z listą generacji i listą kart Base.",
      h1: "Lista kontrolna generacji 1: wszystkie 151 pierwszych Pokémonów",
      lede: "Generacja 1 to 151 gatunków, od #001 Bulbasaura do #151 Mew. Zbieram je jako jeden segregator: jedna karta każdego, z dowolnego setu. Listą kontrolną jest strona generacji, a Base jest miejscem, od którego zaczyna się wiele znajomych nazw. Te dwie listy nie mają tej samej liczby i trzymanie ich z dala od siebie jest całym trikiem.",
      sections: [
        {
          id: "the-151",
          heading: "Co znaczy te 151",
          paragraphs: [
            "Te 151 to zakres Pokédexa, nie jeden produkt. [[Generacja 1|/collections/generation/1]] wymienia każdy gatunek z tego zakresu i kilka setów, w których się pojawia. Ta strona jest listą kontrolną, której używam. To nie to samo co Base, który ma 102 karty i zawiera trenerów oraz energie. Ludzie mieszają te dwie liczby. Trzymam je osobno, żeby segregator dostał właściwą liczbę kieszonek. Szukasz setu z 2023 roku o nazwie [[151|/collections/set/sv3pt5]]? To inna lista.",
            "[[Notatka o segregatorze Pokédexa|/guides/pokedex-binder]] to ta sama metoda dla wszystkich {species} gatunków. Ta notatka zostaje przy pierwszej książce, bo pierwsze 151 to segregator, o który pytają mnie najczęściej. [[Długi przewodnik|/guides/collecting-binders]] wyjaśnia, czemu to segregator generacji, a nie segregator setu. Pudełko produktu z «151» na pokrywce nie jest automatycznie tą listą kontrolną. Liczba na pokrywce i liczba na stronie mogą się różnić. Ufam stronie, bo kieszonki tnę według niej. Pokrywka jest zdaniem sprzedawcy, strona jest moją robotą.",
          ],
        },
        {
          id: "where-they-appear",
          heading: "Gdzie pojawia się pierwsze 151",
          paragraphs: [
            "Gatunek z Kanto może być w erze Base i znowu w secie wydanym dekady później. [[Pikachu|/pokedex/25]] jest oczywisty. [[Charizard|/pokedex/6]] jest drugi. Strona gatunku wymienia wydania. Którekolwiek wypełnia kieszonkę. Nie potrzebuję najstarszej kopii i nie potrzebuję najnowszej.",
            "[[Sety po kolei|/guides/sets-in-order]] pomagają, kiedy starych chcę celowo. [[Seria Base|/collections/series/base]] to Base, Jungle, Fossil i sety wokół nich. Jeśli buduję segregator setu Base, to inny projekt, ze 102 kieszonkami. Karty z tego projektu mogą też wypełnić kieszonkę generacji, raz, jeśli rząd gatunku jest pusty. Nie rozbieram segregatora setu, żeby ozdobić segregator generacji. Robi to kopia zapasowa. Charizarda łatwo traktować jak wyjątek. Nie jest wyjątkiem. Kieszonka chce gatunku, a zwykła karta z późniejszego setu zamyka #006 równie uczciwie jak karta, na którą patrzę od dwudziestu lat. Najstarsza karta jest miła, jeśli już jest w ręce. Nie jest warunkiem, żeby #006 dostało koszulkę i kieszonkę. Warunkiem jest gatunek, nie rok.",
          ],
        },
        {
          id: "base-set",
          heading: "Base to lista, nie całe 151",
          paragraphs: [
            "[[Base|/collections/set/base1]] ma 102 karty. Części pierwszych 151 nie ma na tej liście. Późniejsze sety ery Base dokładają ich więcej. Segregator generacji nie czeka na starsze sety. Współczesna zwykła karta brakującego gatunku jest skończonym rzędem.",
            "I tak chętnie otwieram listę Base, bo numery kolekcjonerskie nauczyły mnie czytać kartę. Kolejność numerów, potem nazwa, potem symbol setu jako sprawdzenie. Kiedy pudełko bulk obiecuje «wszystkie oryginały», nie wierzę obietnicy. Wierzę stronie generacji i kartom w ręce. Brakuje gatunku w ręce, rząd jest pusty, cokolwiek obiecywała pokrywka. Trenerzy i energie w Base liczą się do tych 102 i nie liczą się do tych 151. Ta różnica jest całym powodem, dla którego mam dwie zakładki, a nie jedną. Kiedy mówię obie liczby obok siebie, pomyłka się kończy. Jedna liczba to karty, druga to gatunki. Nie zamieniają się miejscami, choć obie zaczynają się w tej samej epoce.",
          ],
        },
        {
          id: "one-line",
          heading: "Jeden rząd naraz",
          paragraphs: [
            "Idę listą kontrolną od #001 w dół tylko wtedy, gdy mam cierpliwy nastrój. Częściej biorę następny pusty rząd, który pudełko potrafi wypełnić. Kolejność w segregatorze zostaje liczbowa, nawet gdy kolejność znajdowania kart taka nie jest. Kieszonka #050 nie wędruje na początek dlatego, że znalazłem ją we wtorek.",
            "Rząd jest gotowy, kiedy karta ma koszulkę, siedzi w kieszonce i jest zapisana. Potem patrzę na następną dziurę. Sto pięćdziesiąt jeden to wiele popołudni i jednocześnie żadna zagadka. Bulk z prawie każdej ery ma w sobie stwory z Kanto. Robota polega na dopasowaniu, nie na życzeniu.",
            "Stronę generacji trzymam otwartą obok pudełka i niczego nie odhaczam w głowie. Stwory, które wydaje mi się, że mam, nie zawsze są tymi w segregatorze. Mew i rzędy starterów to te, które ludzie uznają za skończone. I tak je sprawdzam. Segregator, któremu brakuje #001, bo Bulbasaur wciąż leży bez koszulki w puszce, nie jest skończonym 151, nawet jeśli reszta stron wygląda na pełną. Ostatnie dziesięć dziur zwykle trwa dłużej niż pierwsze pięćdziesiąt i to jest normalne. To gatunki, których w moich pudełkach akurat nie ma, więc zostawiam je puste, zamiast wymyślać kartę zastępczą. Nie pozwalam, żeby pełna strona dalej oszukała mnie i kazała przeskoczyć dziurę, którą już minąłem. Kartkowanie idzie wstecz równie chętnie jak do przodu. Pusta kieszonka w środku pełnej strony jest uczciwsza niż wymyślona karta. Zostawiam ją widoczną. Widoczna dziura jest robotą jutra, a wymyślona karta jest kłamstwem, które zostaje.",
            "Kiedy wieczorne pudełko ma stwory z Kanto z nowszego setu, karta i tak się nadaje. Kieszonka nie pyta o rok. Pyta o numer gatunku. Jeśli ten sam gatunek wpada dwa razy, pierwsza karta idzie do kieszonki, a druga wraca do bulk. Nie trzymam dwóch kandydatów w palcach tak długo, aż zapomnę numer. Decyzja jest szybka, bo reguła już stoi: jedna karta, dowolne wydanie. Mew dostaje to samo traktowanie co Bulbasaur. Jeśli go nie ma w ręce, rząd zostaje pusty, a numer ląduje na kartce.",
          ],
        },
      ],
      faqs: [
        {
          q: "Czy Base to to samo co wszystkie 151?",
          a: "Nie. Base to jeden set, ze 102 kartami na publicznej liście. Te 151 to każdy gatunek od Bulbasaura do Mew, z dowolnego setu. Mam obie strony w zakładkach, żeby liczby się nie zlewały.",
        },
        {
          q: "Czy do segregatora generacji 1 potrzebuję karty first edition?",
          a: "Nie. Dowolne wydanie tego gatunku wypełnia kieszonkę. First edition należy do segregatora setu, jeśli lista tego setu je zawiera.",
        },
      ],
    },
    {
      slug: "read-a-card",
      title: "Jak czytam numer i symbol setu",
      description: "Jak znajduję numer kolekcjonerski, symbol setu i znak rzadkości, żeby dało się posortować stos bulk.",
      h1: "Jak czytam kartę Pokémon",
      lede: "Czytam kartę za każdym razem w tej samej kolejności: nazwa, numer kolekcjonerski, symbol setu, a potem znak rzadkości, jeśli wciąż go potrzebuję. Ta kolejność zamienia mieszany bulk w stosy, które da się odłożyć. Numer pasuje do listy kart setu. Symbol nie pozwala dwóm erom wpaść do jednego stosu.",
      diagram: {
        kind: "card",
        title: "Gdzie patrzę na karcie",
        description: "Prosty obrys karty z nazwą, numerem kolekcjonerskim, symbolem setu i znakiem rzadkości. Bez oficjalnej grafiki karty.",
        caption: "Dopasowuję numer kolekcjonerski do listy kart. Symbol i znak rzadkości tylko pomagają potwierdzić set.",
      },
      sections: [
        {
          id: "the-number",
          heading: "Numer kolekcjonerski jest kluczem sortowania",
          paragraphs: [
            "Numer kolekcjonerski to ułamek albo para wydrukowana na karcie, na przykład 4/102. Pierwsza liczba to miejsce karty w tym secie. Druga to ile kart set liczył w tej numeracji. [[Base|/collections/set/base1]] jest setem, na którym tego uczę, bo 102 to liczba na liście, którą publikuję z publicznych danych. Jeśli na karcie jest 4, a karta 4 na liście ma tę samą nazwę, mam trafienie.",
            "Promy i sety specjalne czasem używają litery, innej sumy albo numeru, który nie wygląda jak główny set obok. Nie wciskam ich w kolejność głównego setu. Szukam listy, która używa właśnie tej numeracji. [[Oś czasu setów|/guides/sets-in-order]] jest sposobem, w jaki pamiętam, że promo leży przy erze, nie będąc główną listą tej ery. Zła lista robi dziurę w dwóch segregatorach naraz. Druga liczba ułamka jest śladem, nie obietnicą, że set odgadnę z niej samej. Kilka setów liczyło mniej więcej tyle samo kart. Symbol ma rozstrzygnąć, która lista jest otwarta. Jeśli druga liczba pasuje do dwóch setów, symbol rozstrzyga, zanim stos urośnie. Zły stos, który urósł, to wieczór, który muszę rozebrać karta po karcie.",
          ],
        },
        {
          id: "the-symbol",
          heading: "Symbol setu potwierdza stos",
          paragraphs: [
            "Symbol setu to mały znak, zwykle wzdłuż prawej krawędzi obrazka albo tuż pod nim, zależnie od ery. Zmienia się z każdym setem. Nie próbuję wkuć całej historii znaków. Używam symbolu, żeby dwa stosy nie stopiły się w jeden, kiedy numery mogłyby należeć do więcej niż jednej listy.",
            "Kiedy symbol i numer nie zgadzają się z nazwą, której oczekiwałem, karta mówi prawdę, a pamięć nie. Szukam numeru na stronie setu. [[Pikachu|/pokedex/25]] dobrze przypomina, że jedna nazwa może mieszkać w wielu setach, każdy z własnym numerem. Sama nazwa nie jest kluczem sortowania. Dwa Pikachu z różnymi numerami to dwa rzędy, nawet jeśli oba uśmiechają się tak samo. Uśmiech nie jest kluczem sortowania. Numer i symbol są, i wolno im zająć czas. Czas przy karcie jest tańszy niż zła kieszonka później.",
          ],
        },
        {
          id: "rarity",
          heading: "Znaki rzadkości sortują słabo",
          paragraphs: [
            "Kółko, romb i gwiazdka były drukowane na kartach, a znaczenie przesuwało się, kiedy gra dokładała rzadkości. Nie trzymam prywatnej tabeli, co który znak znaczył w którym roku. Tabela byłaby dłuższa niż sortowanie i tak nie powiedziałaby, który rząd listy kontrolnej jest pusty.",
            "Zerkam na znak tylko po to, żeby podzielić stos na «łatwo włożyć w koszulkę» i «spojrzę dwa razy, zanim pójdzie do kieszonki». To ostrożność, nie katalog. [[Sortowanie bulk|/guides/bulk-cards]] zostaje przy numerze. Rzadkość jest tym, jak strona wygląda. Numer jest tym, jak segregator się kończy. Matowy znak i błyszcząca karta mogą siedzieć w tym samym secie. Nie pozwalam, żeby połysk założył własny stos, zanim numer zostanie przeczytany. Połysk może zostać w tym samym stosie co matowa karta. Set nie dzieli się według wyglądu. Wygląd jest radością strony dopiero wtedy, gdy numer jest już właściwy.",
          ],
        },
        {
          id: "regulation",
          heading: "Znak regulacji to litera formatu",
          paragraphs: [
            "Na kartach drukowanych od 2020 roku Play! Pokémon stawia znak regulacji: literę w lewym dolnym rogu. [[Zasady Play! Pokémon|https://play.pokemon.com/en-us/resources/rules/]] mówią, że Standard obraca się według tej litery. Starsze karty nie mają litery. Karta ze starszą literą albo bez litery może zostać legalna, jeśli ta sama karta została dodrukowana z aktualną literą. Dozwolone litery się zmieniają. Aktualnej listy nie wkuwam do segregatora i nie sortuję według litery.",
            "Litera nie jest numerem kolekcjonerskim i nie jest znakiem rzadkości. [[Pomoc do bazy kart|https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database]] kładzie znak rzadkości w prawym dolnym rogu, przy ikonie dodatku. Na literę patrzę tylko, gdy ktoś pyta, czy kartą wolno grać na aktualnej imprezie. W segregatorze numer wciąż decyduje o kieszonce. Karta, której nie ufam, do tej kieszonki nie dochodzi. O tym jest [[jak rozpoznaję fałszywkę|/guides/spot-fakes]].",
          ],
        },
        {
          id: "in-practice",
          heading: "Przejście przez mieszany stos",
          paragraphs: [
            "Podnoszę kartę. Czytam nazwę na głos, jeśli stos jest bałaganiarski, bo oczy przeskakują, kiedy idę za szybko. Znajduję numer kolekcjonerski. Sprawdzam symbol przy stosie, do którego wydaje mi się, że należy. Upuszczam ją na ten stos. Jeśli nie umiem jej położyć w kilka sekund, idzie na stos pytań, nie z powrotem do mieszaniny.",
            "Stos pytań dostaje spokojniejsze przejście przy otwartych [[kolekcjach|/collections]]. [[Przewodnik po segregatorach|/guides/collecting-binders]] jest tym, co karmię: najpierw rzędy setu, potem rzędy gatunku. Karty, której nie rozpoznaję, i tak dostaje koszulkę, jeśli róg jest miękki. Rozpoznanie może poczekać godzinę. Zgięty róg pogarsza się, kiedy się waham. Stos pytań dostaje nazwę na kartce i nie ląduje pod cięższym pudełkiem. Następne spokojne przejście ma go znaleźć bez zaczynania od całego stosu.",
            "Język na karcie może spowolnić przejście i to jest w porządku. Angielska nazwa w danych jest tą, której używa lista kart. Karta wydrukowana w innym języku wciąż ma numer kolekcjonerski i symbol setu. Dopasowuję je, a potem czytam stronę gatunku, jeśli chcę nazwę lokalną. Nie buduję osobnego segregatora na język. Jedna lista kart, jedna kolejność numerów. Nazwa na karcie może różnić się od nazwy na ekranie. Jeśli nazwa na ekranie jest po angielsku, a karta nie, to wciąż ten sam rząd. Nie otwieram segregatora na każdy język. Jedna kolejność numerów wystarcza, a nazwa na karcie może zostać taka, jaką wydrukowano.",
            "Jeśli numer jest starty, nie zgaduję miejsca po rysunku. Rysunek wraca w wielu setach. Karta idzie na stos pytań i później porównuję ją ze stroną setu, gdzie ta sama nazwa spotyka się z resztą symbolu. Jeśli symbolu też nie widać, karta czeka, aż zobaczę drugi egzemplarz tego wydania. Drugi egzemplarz uczy numeru. Zgadywanie nauczyłoby dziury w dwóch segregatorach. Dlatego wolne przejście jest częścią sortowania, a nie przerwą. Stos pytań może zostać w rogu stołu przez cały wieczór.",
          ],
        },
      ],
      faqs: [
        {
          q: "Co zrobić, kiedy na karcie nie ma ułamka?",
          a: "Traktuję ją jak promo albo wydanie specjalne i szukam listy z takim numerem. Nie wymyślam jej miejsca w głównym secie. Stos pytań jest miejscem, w którym czeka.",
        },
        {
          q: "Czy sortować według symbolu rzadkości?",
          a: "Nie sortuję. Symbol zmieniał się z czasem. Numer kolekcjonerski pasuje do listy kart. Połysk na karcie może poczekać, aż stos leży już we właściwym secie.",
        },
      ],
    },
    {
      slug: "protect-cards",
      title: "Ochrona kart Pokémon bez ceregieli",
      description: "Koszulki, strony segregatora i zwykłe przechowywanie kolekcji, którą się otwiera, także segregatora dziecka.",
      h1: "Ochrona kart Pokémon bez ceregieli",
      lede: "Chronię karty najtańszym sposobem, który wciąż pozwala otworzyć segregator. Miękka koszulka, strona z kieszonkami i półka, która zostaje sucha. Tyle jest całego planu. Używam go na zwykłych kartach, bo zwykła karta często zamyka rząd. Segregator, którego nie otwieram, nie jest kolekcją, którą utrzymuję przy życiu.",
      sections: [
        {
          id: "sleeve-first",
          heading: "Koszulka przed kieszonką",
          paragraphs: [
            "Koszulka to cienka przezroczysta osłona na jedną kartę. Nakładam ją, zanim karta w ogóle zobaczy stronę segregatora. Strony trą. Koszulki biorą to tarcie na siebie. Kupuję zwykłe w paczce i nie odkładam ich dla holo. Zwykła karta z wybielonym rogiem wciąż jest dziurą na liście kontrolnej, a wymiana jest gorszym popołudniem niż nałożenie koszulki teraz. Kupuję koszulki w rozmiarze, który naprawdę pasuje do karty Pokémon, nie woreczek, który jest prawie dobry. Prawie dobry zgina róg, który miał chronić.",
            "Dociskam koszulkę, żeby karta leżała płasko, i nie oblizuję jej, nie oklejam taśmą i nie wkładam zwykłej karty z bulk w dwie koszulki jak w rytuał. Dwie koszulki są dla karty, która podróżuje. Codzienna karta dostaje jedną. [[Przewodnik po segregatorach|/guides/collecting-binders]] zakłada, że ten krok już się stał. Zapisana karta z gołą powierzchnią to karta, którą zapisałem za wcześnie. Goła powierzchnia w segregatorze to niedokończony rząd, choćby numer był już na ekranie. Koszulka jest przed ptaszkiem. Ptaszek bez koszulki jest obietnicą, której kieszonka jeszcze nie trzyma.",
          ],
        },
        {
          id: "pages",
          heading: "Strony, które mieszczą kartę w koszulce",
          paragraphs: [
            "[[Strony z dziewięcioma i czterema kieszonkami|/guides/organize-binder]] to wybór. Kieszonka musi przyjąć koszulkę bez wyginania karty. Jeśli muszę pchać, strona jest zła. Wymieniam rozdartą kieszonkę, zamiast mieć nadzieję, że rozdarcie zostanie na miejscu. Rozdarta kieszonka zjada rogi.",
            "Segregatory na kółkach są w porządku, kiedy kółka nie uciskają kart. Nie pozwalam kółkom leżeć na stronie przez to, że nie przepełniam segregatora. Kółko D, które zamyka się czysto, jest łaskawsze niż segregator napchany, aż okładki się wyginają. Wolę zacząć drugi segregator, niż zgiąć ostatnią stronę pierwszego. Drugi segregator jest tańszy niż wygięta ostatnia strona. Wygięcie nie prostuje się samo następnego lata. Nowy segregator zaczyna się od pustej strony, nie od naprawionego rogu.",
          ],
        },
        {
          id: "storage",
          heading: "Gdzie mieszkają segregatory",
          paragraphs: [
            "Pionowo na półce albo na płask, jeśli segregator jest cienki, z dala od okna i od wilgotnej ściany zewnętrznej. Nie trzymam segregatorów w pudle w piwnicy, na gorącym strychu ani w bagażniku samochodu. Ciepło wygina koszulkę. Wilgoć plami stronę. Słońce płowieje druk. Nic z tego nie widać tego samego dnia. Widać to, kiedy otwieram segregator lato później. Segregator oparty o ciepły kaloryfer dostaje to samo co strych: zostaje przeniesiony. Sucho i chłodno wystarcza, a jeśli zimnym rankiem nie jestem pewien, sprawdzam półkę dłonią.",
            "Bulk, który nie siedzi w segregatorze, mieszka w suchym pudełku, ułożony tak, żeby kart nie zginał cięższy przedmiot. Jedzenie i picie trzymam z dala od tego stołu. Brzmi to drobiazgowo, dopóki sok pomarańczowy nie jest w koszulce. [[Kolekcje|/collections]] da się odbudować z kart. Sklejonego stosu się nie da. Szklanka soku przechodzi na drugi stół, zanim pudełko się otworzy. Ta zasada jest nudna i trzyma karty osobno. Sklejony stos jest listą, której nie da się już czytać.",
          ],
        },
        {
          id: "toploader",
          heading: "Toploader jest na drogę",
          paragraphs: [
            "Toploader to sztywna plastikowa koszulka. Biorę taki, gdy karta wychodzi z domu: segregator w drodze do dziecka albo pojedyncza karta w paczce. Jest grubszy, niż chce tego strona segregatora, więc zostaje poza stroną z dziewięcioma kieszonkami. W domu karta żyje w miękkiej koszulce, w kieszonce. Twardy futerał na każdą zwykłą kartę zrobiłby segregator, którego nie otwieram, a otwieranie jest sensem.",
            "Nie przyklejam karty taśmą do toploadera. Jeśli go nie mam, miękka koszulka i płaskie pudełko i tak wygrywają ze zgiętym rogiem. [[Długi przewodnik|/guides/collecting-binders]] zakłada już miękką koszulkę. Sztywna jest wyjątkiem, na podróż, nie na codzienną stronę.",
          ],
        },
        {
          id: "kids",
          heading: "Kolekcja dziecka",
          paragraphs: [
            "[[Segregator z dzieckiem|/guides/collecting-with-a-child]] zaczyna się od koszulek i segregatora, który dziecko może otworzyć, nie od sztywnego etui na każdą zwykłą kartę. Chcę, żeby dziecko kartkowało. Karta, której nigdy się nie otwiera, może zostać idealna i jednocześnie przestać być częścią popołudnia. Koszulki są kompromisem, któremu ufam. Dziecko otwiera segregator samo. Nie stoję i nie trzymam go tak, jakby strony były wystawą. Koszulka już jest. Reszta to kartkowanie.",
            "Kiedy gotowy segregator [[wychodzi do dziecka|/guides/donating-cards]], wychodzi w koszulkach, na stronach, z kółkami, które działają. Nie przekazuję luźnych kart i nie nazywam tego tym samym podarkiem. Koszulka jest częścią segregatora. Jest też tą częścią, która znosi trochę szorstkiego obchodzenia, a do tego właśnie jest dobry segregator.",
            "Wymieniam strony, kiedy plastik mętnieje albo szew kieszonki pęka. Nie naprawiam szwu taśmą od strony karty. Taśma to sposób, w jaki karta dostaje lepką krawędź. Nowa strona jest naprawą. Stara strona, jeśli reszta jest cała, może trzymać karteczki albo listy kontrolne, nie karty. Raz w roku otwieram każdy segregator dość daleko, żeby zobaczyć tylne strony, bo tam chowa się skrzywiona kieszonka. To przejście uratowało więcej kart niż jakiekolwiek specjalne etui, które rozważałem i którego nie kupiłem. Skrzywioną kieszonkę z tyłu wymieniam tego samego dnia. Nie zostawiam jej na przyszły rok tylko dlatego, że pierwsze strony wyglądają dobrze. Pierwsza strona nie widzi tyłu.",
            "Przy tym samym przejściu sprawdzam, czy kółka nie naciskają na wewnętrzną stronę. Jeśli naciskają, przenoszę ostatnie strony do drugiego segregatora, zanim róg zostanie zgięty. Nie kupuję do tego specjalnych narzędzi. Wystarczy, że palec mieści się między kółkiem a stroną. W pudełku bulk sprawdzenie jest prostsze: wieczko zamknięte, pudełko na suchej półce, nic ciężkiego na wierzchu. Otwarty woreczek dostaje zamknięcie tego samego wieczoru. Otwarty woreczek zbiera kurz w róg, a kurz widać dopiero wtedy, gdy karta już siedzi w kieszonce.",
          ],
        },
      ],
      faqs: [
        {
          q: "Czy zwykłe karty potrzebują koszulek?",
          a: "W moich segregatorach tak. Zwykła karta często wypełnia rząd. Wkładam ją w koszulkę, zanim pójdzie do kieszonki. Wybielony róg trudniej naprawić, niż nałożyć koszulkę.",
        },
        {
          q: "Czy twarda osłona jest standardem?",
          a: "Nie. Twardej koszulki używam, kiedy karta podróżuje. Segregator w domu używa miękkiej koszulki i strony z kieszonkami. Twarde etui na każdą zwykłą kartę zrobiłoby z segregatora coś, czego nie otwieram.",
        },
      ],
    },
    {
      slug: "donating-cards",
      title: "Oddawanie kart Pokémon dzieciom",
      description: "Przekazuję gotowy segregator dziecku, przez oddział, ośrodek albo świetlicę, i zapisuję dzień.",
      h1: "Oddawanie kart Pokémon dzieciom",
      lede: "Oddaję karty Pokémon, przekazując gotowy segregator. Oddział szpitalny, ośrodek albo świetlica mogą być miejscem, do którego trafia. Luźny bulk zostaje tutaj i wypełnia następny segregator. Najpierw pytam miejsce, zapisuję dzień, w którym segregator wychodzi, i nie publikuję ceny sprzedaży. Jeśli odpowiedź brzmi jeszcze nie, segregator zostaje na półce, a publiczna lista bez zmian. Plan nie jest przekazaniem. Wolę poczekać, niż zapisać podarek, który nie opuścił moich rąk.",
      sections: [
        {
          id: "finished",
          heading: "Tylko segregator, który skończyłem",
          paragraphs: [
            "Segregator w połowie to projekt. Gotowy segregator mogę położyć w cudze ręce bez przeprosin. Kartkuję strony, zanim wyjdzie. Każda kieszonka, o którą prosiła lista kontrolna, ma kartę. [[Długi przewodnik|/guides/collecting-binders]] jest powodem, dla którego ta poprzeczka istnieje. Nie chcę, żeby dziecko odziedziczyło moje dziury.",
            "Segregator ma koszulki, bo [[ochrona|/guides/protect-cards]] jest częścią podarku, a nie prywatnym gustem. Kółka się zamykają. Strony nie są podarte. Jeśli kieszonka jest zmęczona, wymieniam stronę przed przekazaniem. To zwykła troska, nie ceremonia. Liczę kieszonki przy liście kontrolnej ostatni raz przy stole, nie w drzwiach. Brakuje karty, segregator wraca na półkę tego samego wieczoru. Przeprosiny w recepcji nie zmniejszają dziury. Liczę na głos, kiedy jestem zmęczony. Zmęczenie jest chwilą, w której omijam energię i wydaje mi się, że strona jest pełna. Liczenie na głos wraca do ostatniej kieszonki, którą oko chciało przeskoczyć.",
          ],
        },
        {
          id: "where",
          heading: "Oddziały, ośrodki i świetlice",
          paragraphs: [
            "Pytam miejsce, czego naprawdę może użyć. Oddział dziecięcy, pokój zabaw w ośrodku i świetlica nie chcą wszystkie tego samego, a niektóre w ogóle nie mogą przyjąć kart. Wolę usłyszeć nie, niż zostawić segregator w recepcji, która o niego nie prosiła. Osoba, która tam pracuje, zna pokój. Ja znam segregator. Pytam też, jak chcą go przyjąć: czy ktoś mnie spotka, czy segregator ma być opisany i czy karty w ogóle są w tym miesiącu mile widziane. Pokój decyduje. Dopasowuję segregator do tego, nie odwrotnie.",
            "Nie zamieniam przekazania w przemowę o zbieraniu. Segregator jest całym wstępem. Jeśli dziecko chce znać kolejność, kolejność jest na stronach: set w kolejności numerów albo generacja w kolejności Pokédexa. [[Zbieranie z dzieckiem|/guides/collecting-with-a-child]] to sposób, w jaki się zachowuję, kiedy jestem dorosłym przy stole. Te same maniery obowiązują, kiedy jestem tylko osobą, która przyniosła segregator. Jeśli miejsce chce tylko jednego segregatora naraz, niosę jeden. Nie zapełniam przedpokoju projektem, o który nikt nie prosił. Jeden gotowy segregator jest wyraźniejszy niż torba, której zawartości nikt nie zdążył obejrzeć.",
          ],
        },
        {
          id: "public-list",
          heading: "Co pokazuje publiczna lista",
          paragraphs: [
            "[[Lista tego, co oddane|/donations]] zapisuje odbiorcę i datę. Nie zapisuje ceny sprzedaży i nie zapisuje, za ile karta by się sprzedała. Segregator, który wychodzi z domu, jest faktem o projekcie. Nie jest wyceną.",
            "[[Kolekcje|/collections]] wciąż pokazują listę kontrolną, z której te karty przyszły. Kiedy oznaczę segregator jako oddany, przestaję traktować te rzędy jak dziury, które muszę wypełnić jeszcze raz, chyba że wybrałem budowę tego segregatora po raz drugi. Ekran ma zgadzać się z półką. Nieobecny segregator nie powinien wyglądać jak segregator, który zapomniałem zacząć. Segregator na półce i rząd na ekranie mówią to samo. Jeśli się różnią, poprawiam ekran, nie opowieść. Opowieść może poczekać. Pusta półka nie może udawać niedokończonego projektu.",
          ],
        },
        {
          id: "spares",
          heading: "Karty zapasowe zostają w kolejce",
          paragraphs: [
            "[[Bulk|/guides/bulk-cards]] jest tym, jak następny segregator się kończy. Zapas nie wychodzi jako luźna garść obok podarku. Luźna garść wygląda hojnie, a dociera jako zadanie domowe. Zostawiam zapas, sortuję go i pozwalam mu zamykać prawdziwe rzędy.",
            "Jeśli masz zapasowe karty do tego sortowania, napisz na [[magnus@linksforcards.com|mailto:magnus@linksforcards.com]]. Powiedz zwykłym językiem, co jest w pudełku: sety, które rozpoznajesz, albo sam bulk. Sortowanie robię ja. Sklepy, które przysyłają karty, dostają podziękowanie z nazwą na stronie podziękowań. Tyle jest całej umowy. Pudełko, które przychodzi, dostaje to samo sortowanie według setu co mój własny bulk. Nie obiecuję gotowego segregatora na konkretny tydzień. Obiecuję, że karty trafią do kieszonek, kiedy rząd naprawdę jest pusty.",
            "Zapisuję przekazanie w dniu, w którym się dzieje, nie na końcu miesiąca. Odbiorcą może być nazwa oddziału albo świetlicy, jeśli imię dziecka nie jest moje do publikacji. Data jest dniem, w którym segregator opuścił moje ręce. Jeśli miejsce prosi, żebym poczekał, segregator zostaje na półce, a lista bez zmian. Wolę być powolny, niż wymyślać podarek, którego nie było. Segregator, który wciąż stoi w moim domu, nie jest segregatorem, który oddałem, choćbym był pewien planu. Zapisuję dzień zaraz po zamknięciu drzwi. Dzień przypomniany później jest domysłem, a domysłu nie kładę na publicznej liście. Lista dostaje tylko ten dzień, w którym segregator naprawdę wyszedł.",
            "Zanim segregator wyjdzie, zapisuję nazwę odbiorcy na kartce, która zostaje w notesie, a na publicznej liście tę samą nazwę dopiero po zamknięciu drzwi. Jeśli miejsce odwołuje odbiór, publiczny wpis się nie pojawia: segregator nie został oddany, więc lista zostaje bez zmian. Kartka w notesie może zostać przypomnieniem, żeby zapytać później. Nie dokładam luźnych kart, jeśli kieszonka została pusta w ostatniej chwili. Pusta kieszonka jest powodem, żeby przesunąć wyjście, a nie żeby zmienić regułę podarku. Gotowy segregator, z koszulkami, jest tym, co dziecko ma otworzyć. Reszta zostaje w bulk i czeka na następny rząd.",
          ],
        },
      ],
      faqs: [
        {
          q: "Przyjmujesz luźny bulk?",
          a: "Tak. Luźny bulk jest mile widziany. Sortuję go do segregatorów. Nie przekazuję luźnego bulk jako podarku. Gotowy segregator jest tym, co wychodzi, a zapas zostaje, żeby wypełnić następny.",
        },
        {
          q: "Czy strony publiczne pokazują cenę sprzedaży?",
          a: "Nie. Publiczna lista pokazuje odbiorcę i datę. Nigdy nie pokazuje ceny sprzedaży. Segregator jest skończoną listą kontrolną, która wychodzi z domu, i to jedyny fakt, który o nim publikuję.",
        },
      ],
    },
    {
      slug: "sets-in-order",
      title: "Sety kart Pokémon po kolei",
      description: "Serie i sety na publicznej liście kart, od Base w 1999 do najnowszej serii, z odnośnikiem do każdej strony setu.",
      h1: "Sety kart Pokémon po kolei",
      lede: "Trzymam sety w kolejności, której używa publiczna lista kart. Jest {sets} setów w {seriesCount} seriach i {cards} kart za tymi nazwami. Lista pod tą notatką jest tą kolejnością, zbudowaną z tych samych danych co listy kontrolne. Każdy rząd prowadzi do strony setu, przy której zaznaczam. Data w rzędzie jest datą wydania z tych danych.",
      sections: [
        {
          id: "series-and-set",
          heading: "Seria to półka, set to segregator",
          paragraphs: [
            "Seria to ciąg setów, które dzielą erę. Base, Jungle i Fossil siedzą w serii Base. Set to jedna lista kart z własnymi numerami kolekcjonerskimi. Segregatory buduję na poziomie setu, a kartkuję na poziomie serii. Mieszanie tych dwóch słów sprawia, że pudełko dostaje napis «Base», kiedy połowa to Jungle. Kiedy nie jestem pewien, czytam symbol setu, zanim czytam etykietę pudełka. Etykietę pisałem sam, czasem za szybko. Symbol wydrukowano razem z kartą i od tamtej pory się nie zmienił.",
            "[[Przewodnik po segregatorach|/guides/collecting-binders]] używa tej osi czasu, kiedy rozstrzygam, do której listy karta należy. [[Układanie stron|/guides/organize-binder]] zakłada, że lista jest już wybrana. Oś czasu nie mówi, która karta jest ładna. Mówi, która lista kontrolna jest otwarta. Nazwa serii na kartce półki nie zastępuje nazwy setu na segregatorze. Dwie nazwy, dwa miejsca, i Jungle nie staje się Base przez życzenie. Życzenie to powolny sposób na wypełnienie złej kieszonki.",
          ],
        },
        {
          id: "how-to-read",
          heading: "Jak czytam listę",
          paragraphs: [
            "Każdy blok niżej jest serią. W środku sety idą według daty wydania z publicznych danych. Data jest datą wydania w tych danych, zapisaną w języku tej strony. Liczba to ile kart jest na liście, którą publikuję, czyli nazwy i numery kolekcjonerskie i nic więcej. Nie dodaję domysłu o karcie, której w danych nie ma.",
            "Promy, seria POP i małe listy zebrane pod Other są w danych, bo też mają numery kolekcjonerskie. Nie chowam ich, żeby historia wyglądała schludnie. Promo wciąż jest listą. Jeśli sortuję bulk i numer pasuje do listy promo, karta dołącza do tego stosu. Set bez daty w danych i tak stoi tam, gdzie dane go położyły. Nie wymyślam miesiąca, żeby rząd wyglądał równo. Pusta data jest uczciwsza niż odgadnięta. Puste miejsce daty zostaje puste także w mojej notatce. Nie wypełniam go wspomnieniem roku. Wspomnienie roku często jest rokiem sąsiedniego setu i to wystarcza, żeby pomieszać stos.",
          ],
        },
        {
          id: "early",
          heading: "Od czego proszę ludzi, żeby zaczęli oglądać",
          paragraphs: [
            "[[Seria Base|/collections/series/base]] jest początkiem opublikowanej listy. Sam [[Base|/collections/set/base1]] to 9 stycznia 1999, 102 karty. [[Lista kontrolna generacji 1|/guides/gen-1-checklist]] wyjaśnia, czemu te 102 karty nie są tym samym co pierwsze 151 gatunków. Wysyłam ludzi na obie strony celowo. Pomylenie jest częste, a naprawa to tylko te dwie liczby, obok siebie. 102 i 151 zostają dwiema liczbami na kartce, jeśli złapię się na tym, że zaczynam mówić o nich jak o jednej rzeczy. Nie są jedną rzeczą. Kartka jest tańsza niż źle posortowany segregator. Trzymam kartkę obok strony setu, dopóki te dwie liczby już mi się nie mieszają. Potem kartka może zniknąć. Do tej pory dwie liczby zostają w dwóch miejscach.",
            "Drugi koniec listy rusza się, kiedy ruszają się dane. [[Mega Evolution|/collections/set/me1]] jest w obecnych danych jako własna seria. Linkuję tam, żeby oś czasu miała świeże drzwi, nie dlatego, że nowy set jest ważniejszy od starej zwykłej karty. [[Kolekcje|/collections]] to ta sama lista z paskami. Ta notatka jest listą z datami. [[Mega Evolution—Delta Reign|/collections/set/delta-reign]] nie ma jeszcze na tej liście. Napisałem stronę segregatora, zanim istnieją numery kolekcjonerskie, i nie wstawiam tu zgadniętej liczby.",
          ],
        },
        {
          id: "using-it",
          heading: "Oś czasu w trakcie sortowania",
          paragraphs: [
            "Tę stronę mam otwartą, kiedy pudełko obejmuje więcej niż jedną erę. Nie wkuwam lat wydania. Klikam serię, potem set, potem dopasowuję numer kolekcjonerski. Jeśli nazwa się zgadza, karta opuszcza pudełko. Jeśli nazwa się nie zgadza, mam złą listę, a wciśnięcie jej zrobiłoby dziurę w dwóch segregatorach naraz. Sortuję pudełko w kolejności serii od góry, jedną serię do końca, zanim zacznę następną. Wtedy Base nie miesza się ze współczesnym stosem tylko dlatego, że na obu leży Pikachu.",
            "Dane zbudowano {built}. Jeśli brakuje tu zupełnie nowego setu, brakuje go w tym zbudowaniu. Nie chowa się w menu. Wolę pokazać listę z datą niż mglistą obietnicę, że wszystko do dzisiaj jest w środku. Strony setów podlinkowane niżej są listami kontrolnymi, które naprawdę zaznaczam.",
            "Liczby w każdym rzędzie używam jako sprawdzenia w trakcie sortowania. Jeśli wydaje mi się, że set jest skończony, a w segregatorze jest mniej kart niż liczba, pominąłem numer, zwykle trenera albo energię bliżej końca. Jeśli kart mam więcej niż liczba, wmieszałem promo albo następny set. Tak czy tak listą jest poprawka. Nie zaokrąglam setu do poczucia «około stu». Liczba jest liczbą kieszonek. Jeśli liczę kieszonki i liczba się nie zgadza, szukam brakującego numeru od końca. Trener i energia chowają się tam częściej niż Pokémon. Koniec jest miejscem, które oko omija, kiedy jest zmęczone.",
            "Kiedy jednego wieczoru sortuję kilka er, stosy idą w tej samej kolejności co serie na stronie. Nie zaczynam od setu, którego karta akurat leży na wierzchu. Wierzchnia karta czeka na swoją kolej, żeby karty Jungle nie weszły między karty Base tylko dlatego, że były pod ręką. Mały stos promo dostaje własną kartkę, nawet jeśli są na nim trzy karty. Trzy karty w złym secie to trzy dziury i trzy dodatki. Oś czasu jest po to, żeby ręka umiała poczekać. Lat nie próbuję pamiętać. Pamiętam, że lista jest otwarta i że następny stos jest następnym rzędem.",
          ],
        },
      ],
      faqs: [
        {
          q: "Czy sety w każdej serii są w kolejności wydania?",
          a: "Tak. Każdy blok serii wymienia swoje sety według daty wydania w publicznych danych kart. Same serie idą w kolejności tych danych. Sortuję pudełko w tej samej kolejności, żeby stosy pasowały do stron.",
        },
        {
          q: "Czy ta lista zawiera ceny?",
          a: "Nie. Zawiera nazwę setu, datę wydania i liczbę kart z publicznej listy. Nic na tej stronie nie jest ceną sprzedaży. Liczba to liczba kieszonek w tym segregatorze i nic więcej.",
        },
      ],
    },
    {
      slug: "collecting-with-a-child",
      title: "Zaczynanie kolekcji Pokémon z dzieckiem",
      description: "Jak zaczynam jeden segregator z dzieckiem: jedno zadanie, bulk, koszulki i zgoda na koniec.",
      h1: "Zaczynanie kolekcji Pokémon z dzieckiem",
      lede: "Jestem tatą, który lubi listę kontrolną, i siedziałem przy stole z dzieckiem, które lubi obrazki. Sposób, w jaki zaczynam, jest mniejszy niż moja własna półka. Jeden segregator. Jedno zadanie. Bulk. Kończę siedzenie, kiedy wciąż jest przyjemne. Dziecko wybiera kartę. Ja upieram się tylko przy koszulce i numerowanej kieszonce.",
      sections: [
        {
          id: "one-binder",
          heading: "Jeden segregator, celowo",
          paragraphs: [
            "Nie zaczynam od całej historii gry karcianej. [[Długi przewodnik|/guides/collecting-binders]] jest dla mnie, później, jeśli dziecko zapyta, skąd wzięły się pozostałe segregatory. Przy pierwszym siedzeniu daję jeden wybór: segregator setu na krótką listę albo [[segregator generacji 1|/collections/generation/1]] z jedną kartą każdego pierwotnego gatunku. [[Notatka o generacji 1|/guides/gen-1-checklist]] to wersja tego wyboru, którą wyjaśnię w minutę. Sto pięćdziesiąt jeden stworów, jedna karta każdego, dowolne wydanie. Odkładam własny otwarty segregator, zanim dziecko usiądzie. Dwa otwarte segregatory na jednym stole szybko stają się jednym wspólnym stosem, a ten stos nie ma zadania.",
            "Dwa projekty naraz to sposób, w jaki dziecko dostaje kolana pełne stosów i żadnej skończonej strony. Robiłem tak. Drugie siedzenie jest gorsze, bo stół wygląda jak obowiązek. Jeden segregator znaczy, że następna karta ma oczywistą kieszonkę. Oczywiste jest życzliwe. Następna karta nie potrzebuje przemowy o swoim miejscu. Kieszonka już jest i to wystarcza za wyjaśnienie. Przemowa o miejscu przychodzi dopiero wtedy, gdy dziecko pyta, czemu karta nie idzie na pierwszą stronę.",
          ],
        },
        {
          id: "their-choice",
          heading: "Niech dziecko wybierze pierwszą stronę",
          paragraphs: [
            "Tasuję mały stos bulk w koszulkach i pozwalam dziecku wybrać pierwszą kartę, która wchodzi. Jeśli segregator jest w kolejności Pokédexa, karta i tak idzie do swojej numerowanej kieszonki, nie na początek. Wyjaśniam to raz, bez przemowy. Kieszonka jest miejscem stwora. Wybór karty jest tą przyjemną częścią. Numer jest obietnicą, że kartę da się znaleźć znowu. Jeśli wybrany stwór już jest w segregatorze, dziecko wybiera jeszcze raz z tego samego stosu. Dublet wraca do bulk bez przemowy o tym, że wybór był zły.",
            "Nie poprawiam gustu. Pikachu jest dobrą pierwszą kartą. Tak samo stwór, którego uważam za zwyczajnego. [[Bulk|/guides/bulk-cards]] jest właściwym stosem do tego, bo kopii jest dość, żeby wybór nie był cenny. Cenny stos sprawia, że zawisam nad stołem. Zawisanie jest przeciwieństwem soboty przy kuchennym stole. Jeśli ręce zostają nad kartą, zabieram je. Wybór należy do dziecka, a w bulk jest na to zapas. Zapas jest powodem, dla którego ten stos nadaje się na początek.",
          ],
        },
        {
          id: "sleeves",
          heading: "Koszulki, potem strona",
          paragraphs: [
            "[[Koszulki|/guides/protect-cards]] wchodzą, zanim kartę wezmą małe ręce. Pokazuję to jako ruch, nie jako wykład: karta do środka, koszulka na płasko, kieszonka otwarta, karta do środka. Dzieci są dobre w ruchach. Mniej obchodzą je moje zdania o przechowywaniu. Trzymam picie z dala od stołu i nie opowiadam powodu, jeśli nikt nie zapyta.",
            "Jeśli karta się zgina, nie robię z tego wydarzenia moralnego. Wkładam w koszulkę zastępstwo z bulk, jeśli je mam, albo zostawiam rząd pusty, aż będę miał. Pusty rząd jest dozwolony. [[Segregator, który oddaję|/guides/donating-cards]] jest gotowym segregatorem, a sobotni segregator dziecka nie musi się nim stać. Może zostać sobotnim segregatorem. Pusty rząd nie jest nieudaną sobotą. Jest miejscem, do którego da się wrócić, kiedy w bulk znajdzie się pasująca karta. Powrót jest łatwiejszy, gdy kieszonka została widoczna, a nie przykryta namiastką.",
          ],
        },
        {
          id: "stop",
          heading: "Skończ, kiedy wciąż jest przyjemnie",
          paragraphs: [
            "Kończę siedzenie, kiedy dziecko wciąż ma ochotę, nie kiedy dobiję do okrągłej liczby. Dwadzieścia minut, które kończą się zamkniętym segregatorem, zdarzy się znowu. Godzina, która kończy się westchnieniem, może się nie zdarzyć. [[Kolekcje|/collections]] pamiętają rzędy, które zapisałem. Nic na ekranie nie jest ważniejsze od tego, że dziecko zechce otworzyć segregator następnym razem. Nie stawiam celu dziesięciu kart ani pełnej strony. Celem jest, żeby segregator zamknął się, kiedy ktoś wciąż chce go otworzyć.",
            "Nie śledzę segregatora dziecka jak zawodów z moim. Publiczne strony tego projektu są moimi listami kontrolnymi. Strona dziecka może zostać niedokończona na zawsze. Jeśli wejdą w dłuższe hobby, listy setów i strony gatunków tam są. Jeśli nie, segregator i tak zrobił swoją robotę: karty po kolei, koszulki nałożone, popołudnie, które należało do nich.",
            "Pytania, na które naprawdę odpowiadam, są małe. Do której kieszonki idzie ta karta. Czy ten dublet może zamknąć dziurę. Czy wolno skończyć. Tak, do numerowanej kieszonki. Tak, jeśli rząd jest pusty. Tak, skończ. Większe zdania zostawiam przy sobie, jeśli dziecko nie pyta. Kolekcja zaczęta w ten sposób może zostać mała i wciąż być prawdziwą kolekcją. Ma kolejność, koszulkę i następny pusty rząd, kiedy ktoś ma ochotę ją otworzyć. Mały segregator z kolejnością i koszulką już jest kolekcją. Nie musi dorosnąć do rozmiaru mojej półki. Miarą jest popołudnie dziecka, nie liczba moich rzędów.",
            "Jeśli dziecko chce zabrać segregator do swojego pokoju, segregator może iść, byle nie został na podłodze. Pokazuję półkę albo blat raz. Nie robię z tego kontroli w następnym tygodniu. Karty są w koszulkach, a strona znosi kartkowanie. Jeśli karta wraca zgięta, wymieniam ją z bulk bez mowy o tym, kto ją zgiął. Pusty rząd jest uczciwszy niż zgięta karta, którą udaję gotową. Następny raz zaczyna się od tej dziury, a dziecko znowu wybiera. Moja robota to trzymać kieszonkę przy właściwym numerze i picie z dala od stołu. Karta, która wygląda źle, nie wchodzi, dopóki mam wątpliwość. [[Jak rozpoznaję fałszywkę|/guides/spot-fakes]] to to sprawdzenie, po cichu, z inną kartą z bulku podaną w zamian.",
          ],
        },
      ],
      faqs: [
        {
          q: "Od którego segregatora dziecko ma zacząć?",
          a: "Daję jeden: albo krótką listę setu, albo generację 1 z jedną kartą każdego gatunku. Nie sadzam dziecka do wszystkich setów naraz.",
        },
        {
          q: "Czy do segregatora dziecka potrzeba rzadkich kart?",
          a: "Nie. Zwykłe karty z bulk wypełniają rzędy. Rzadka karta jest dowolna i nie jest sensem pierwszego popołudnia.",
        },
      ],
    },
    spotFakesPl,
  ];
}
