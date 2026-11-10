import type { ArticleCopy } from "@/lib/articles";
import { spotFakesIt } from "./spot-fakes/it";

export function italianArticles(): ArticleCopy[] {
  return [
    {
      slug: "collecting-binders",
      title: "Collezionare le carte Pokémon nei raccoglitori",
      description: "Come colleziono le carte Pokémon in un raccoglitore di set e in un raccoglitore Pokédex, e dove stanno le liste.",
      h1: "La guida per collezionare le carte Pokémon nei raccoglitori",
      lede: "Le carte Pokémon le tengo nei raccoglitori. Una pila sullo scaffale mi fa perdere la comune che manca. Un raccoglitore segue un set. L'altro segue il Pokédex. Questa pagina è la mappa. Le note più corte rispondono a una domanda ciascuna, nell'ordine in cui lavoro davvero: scelgo il raccoglitore, smisto il bulk, poi cerco il numero quando una carta non vuole restare nel mucchio.",
      diagram: {
        kind: "binders",
        title: "Due modi di riempire un raccoglitore",
        description: "Un raccoglitore di set segue i numeri di collezione. Un raccoglitore di generazione tiene una carta di ogni specie, in ordine di Pokédex.",
        caption: "A sinistra: un set, in ordine di numero. A destra: una specie per tasca, in ordine di Pokédex.",
      },
      sections: [
        {
          id: "two-binders",
          heading: "Due raccoglitori, due lavori",
          paragraphs: [
            "Un raccoglitore di set e un raccoglitore di generazione non fanno la stessa domanda. Quello di set chiede se ho ogni carta di quel set, nell'ordine del numero di collezione, senza saltarne una perché è ordinaria. Quello di generazione chiede se ho una carta di ogni specie in quel tratto del Pokédex. Vale qualsiasi stampa, e vale qualsiasi lingua. Mescolare i due lavori nello stesso raccoglitore è il modo in cui perdevo di vista una comune assente.",
            "Il dettaglio dell'ordine di tutti i giorni sta in [[come organizzo un raccoglitore|/guides/organize-binder]]. La versione corta è quella che avrei voluto scrivere prima: scegliere il lavoro prima di comprare le pagine. Una pagina a nove tasche è una griglia. Non sa nulla della storia disegnata sulla carta. Io sì, quindi fisso l'ordine per primo. Una tasca vuota ha allora un senso preciso. Non è più uno spazio che ho dimenticato di riempire a caso.",
          ],
        },
        {
          id: "set-binder",
          heading: "Un raccoglitore di set segue la lista",
          paragraphs: [
            "Il [[set Base|/collections/set/base1]] è l'esempio che apro ancora per spiegare questo. È uscito il 9 gennaio 1999 e la lista pubblica conta 102 carte. La pagina del raccoglitore segue quella lista: il numero 1, poi il 2, poi il 3, allenatori ed energie compresi. Se la lista ha una carta, il raccoglitore ha una tasca. Non lascio un buco perché la carta è comune, e non porto avanti un'olografica per fare una pagina bella.",
            "L'ordine delle serie e dei set sta in [[i set di carte Pokémon in ordine|/guides/sets-in-order]]. Lo uso quando una scatola di bulk mescola le epoche. Una carta di Jungle non entra nel raccoglitore di Base, anche se il disegno sembra dello stesso anno. La pagina del set è la lista. Segno una riga solo quando quella carta è davvero nella tasca, non quando l'ho vista passare su un mucchio in tavola.",
            "Un terzo raccoglitore segue un tema, non un set e non un posto per una sola specie. [[I raccoglitori a tema|/collections/themes]] raccolgono ogni stampa inglese di una specie, di un artista o di un tipo di carta. [[Tutte le carte Pikachu|/collections/themes/pikachu]] è la lista che apro quando il mucchio è pieno di quella faccia.",
          ],
        },
        {
          id: "dex-binder",
          heading: "Un raccoglitore di generazione segue il Pokédex",
          paragraphs: [
            "Un raccoglitore di generazione tiene una carta di ogni specie. La [[generazione 1|/collections/generation/1]] sono i 151 originali. Dalla generazione 1 alla 9 sono {species} specie. [[Come completo un raccoglitore Pokédex|/guides/pokedex-binder]] è la nota lunga per arrivarci senza trasformare il progetto in una caccia alla stampa rara. [[La lista della generazione 1|/guides/gen-1-checklist]] resta con i primi 151, perché è il raccoglitore che la gente ha in mente quando parla delle creature originali.",
            "[[Pikachu|/pokedex/25]] mostra perché la regola serve. La pagina della specie elenca ogni stampa dei dati pubblici, attraverso molti set. Il raccoglitore di generazione ne vuole una sola. Un Pikachu uscito dal bulk chiude la tasca. Anche un'illustrazione rara più recente la chiude. Non tengo ogni stampa in quel raccoglitore. Quel lavoro appartiene al raccoglitore di set, e solo per il set che sto costruendo. Il resto torna nella scatola.",
          ],
        },
        {
          id: "bulk",
          heading: "Il bulk chiude le tasche",
          paragraphs: [
            "Quasi tutte le carte che chiudono una riga arrivano dal bulk. Lo dico con affetto. Il bulk è il mucchio ordinario: comuni, non comuni, doppioni, e il Magikarp che torna ancora. [[Che cosa faccio del bulk|/guides/bulk-cards]] è il metodo di smistamento. [[Come leggo una carta|/guides/read-a-card]] dice come trovo il numero di collezione e il simbolo del set quando il mucchio mescola più epoche.",
            "Smisto per set prima di smistare per creatura. Una carta che corrisponde a una riga aperta in un raccoglitore di set va lì. Un doppione che corrisponde a una specie ancora vuota può passare nel raccoglitore di generazione. Tutto il resto resta nella scatola di bulk finché una lista lo chiede, o finché un raccoglitore finito è pronto a uscire di casa. Il bulk non è lo scarto del progetto. È il mucchio che chiude un raccoglitore.",
          ],
        },
        {
          id: "tracker",
          heading: "Il registro pubblico è una lista, non un negozio",
          paragraphs: [
            "La [[pagina iniziale|/]] è il conto pubblico: quante carte diverse sono segnate, e quali raccoglitori si sono mossi. La [[pagina delle collezioni|/collections]] è la lista di lavoro. Raggruppa i set per serie, collega ogni raccoglitore di generazione e collega una pagina per ogni specie. Una barra piena vuol dire che ho segnato la carta. Non parla di un prezzo di vendita. Le pagine pubbliche non ne mostrano uno.",
            "Quando una riga sullo schermo e la carta nel raccoglitore non dicono la stessa cosa, vince il raccoglitore. Chiamo completo un raccoglitore solo dopo aver girato le pagine con le mani. Lo schermo serve a vedere il buco prima che me lo dimentichi. Nient'altro. Un numero bello sulla pagina iniziale non sostituisce la tasca vuota che sentirei sfogliando.",
          ],
        },
        {
          id: "care-and-kids",
          heading: "Bustine, bambini e un raccoglitore che parte",
          paragraphs: [
            "Una carta che vive in un raccoglitore riceve prima una bustina. [[Proteggere le carte|/guides/protect-cards]] parla di bustine, pagine a nove tasche, pagine a quattro, e dei posti dove non lascio un raccoglitore. Ho cominciato con una scatola di latta del supermercato. Lo scaffale umido mi ha dato la lezione. La bustina è il passaggio che non salto, nemmeno per una comune che gira in ogni scatola di bulk.",
            "[[Collezionare con un bambino|/guides/collecting-with-a-child]] è la nota che apro quando un bambino si siede al tavolo. Un raccoglitore, un lavoro, e il permesso di smettere. [[Consegnare un raccoglitore finito|/guides/donating-cards]] descrive che cosa succede quando un raccoglitore è completo e lo consegno. Consegno un raccoglitore finito, non una manciata di carte in più. La lista pubblica segna chi lo riceve e la data. Un progetto a metà resta qui.",
            "Se dovessi lasciare un'istruzione su un foglietto, sarebbe questa. Scegliere il lavoro del raccoglitore. Aprire la lista che gli corrisponde. Mettere una bustina sulla carta che chiude un buco. Segnare la riga solo quando la carta è nella tasca. Fermarsi quando il tavolo diventa un disordine, e riprendere la volta dopo dallo stesso buco. Il resto di queste note è quell'istruzione, scritta per la domanda che mi fanno davvero: la misura delle pagine, il bulk, i 151, il Pokédex intero, il numero stampato sulla carta, il posto dove tengo i raccoglitori, un bambino al tavolo, o un raccoglitore che esce di casa.",
          ],
        },
      ],
      faqs: [
        {
          q: "Servono insieme un raccoglitore di set e uno di generazione?",
          a: "No. Uso entrambi perché rispondono a domande diverse. Un solo raccoglitore di set è un modo completo per cominciare. Un raccoglitore di generazione è l'altro modo completo. L'errore è chiedere a un raccoglitore di fare i due lavori.",
        },
        {
          q: "Dove stanno le liste?",
          a: "Ogni set ha una lista di carte, ogni generazione ha una lista, e ogni Pokémon ha una pagina delle sue stampe. La pagina delle collezioni collega le tre. Segno da quelle pagine, dopo aver messo la carta nel raccoglitore.",
        },
      ],
    },
    {
      slug: "organize-binder",
      title: "Come organizzare un raccoglitore Pokémon",
      description: "Pagine a nove o quattro tasche, ordine del numero di set e ordine del Pokédex, come smisto davvero un raccoglitore.",
      h1: "Come organizzo un raccoglitore Pokémon",
      lede: "Organizzo il raccoglitore prima di organizzare le carte. La misura delle pagine e l'ordine sono tutto il sistema. Il resto è una carta che trova la tasca già preparata. Se comincio ammirando i disegni, il tavolo si copre di mucchi e nessuna riga si chiude.",
      diagram: {
        kind: "pockets",
        title: "Nove tasche e quattro tasche",
        description: "Una pagina a nove tasche tiene nove carte, in tre colonne di tre. Una pagina a quattro tasche tiene quattro carte più grandi.",
        caption: "Nove tasche tengono un set compatto. Quattro tasche rendono ogni carta più facile da vedere, e il raccoglitore si ispessisce prima.",
      },
      sections: [
        {
          id: "nine-or-four",
          heading: "Nove tasche o quattro tasche",
          paragraphs: [
            "Una pagina a nove tasche è tre colonne di tre. Una carta in bustina ci entra. Un set di un centinaio di carte fa una dozzina di pagine, un raccoglitore che posso tenere aperto con una mano. È la pagina che uso per i raccoglitori di set. [[Paldean Fates|/collections/set/sv4pt5]] conta 245 carte nella lista pubblica, quindi il raccoglitore a nove tasche è già spesso. Una pagina a quattro tasche trasformerebbe lo stesso set in un raccoglitore che non ho voglia di portare.",
            "Una pagina a quattro tasche è due colonne di due, e ogni carta ci sta più grande. La scelgo quando il punto è guardare, non spuntare una lista lunga. Un raccoglitore di generazione può andare in un senso o nell'altro. Nove tasche fanno stare {species} specie in meno raccoglitori. Quattro tasche rendono più facile ritrovare la pagina che un bambino ama, e appesantiscono lo scaffale. Decido prima che entri la prima carta. Spostare un set finito da una misura di pagina all'altra è un pomeriggio che ho già speso una volta. Non conto di spenderlo di nuovo. [[La guida lunga|/guides/collecting-binders]] spiega perché i due lavori del raccoglitore restano separati.",
          ],
        },
        {
          id: "set-order",
          heading: "L'ordine del numero di set",
          paragraphs: [
            "L'ordine di un set è il numero di collezione stampato sulla carta, confrontato con la lista. Il numero 1 occupa la prima tasca, anche quando non è la creatura che preferisco. Allenatori ed energie restano dove il set li ha messi. Non fabbrico una pagina bella di olografiche all'inizio. Quella pagina nasconde la comune che manca, e il raccoglitore sembra finito quando non lo è.",
            "[[I set in ordine|/guides/sets-in-order]] mi dicono a quale lista appartiene una carta. Il simbolo del set mi aiuta a confermare. Il numero è ciò per cui smisto. Se due carte portano lo stesso nome e numeri diversi, sono due righe diverse. L'ho imparato dalle promo, che spesso siedono accanto a un set principale e usano un conteggio proprio. Forzarle nella lista vicina apre un buco in entrambi i raccoglitori.",
          ],
        },
        {
          id: "dex-order",
          heading: "L'ordine del numero di Pokédex",
          paragraphs: [
            "L'ordine del Pokédex è l'ordine delle specie. La [[generazione 1|/collections/generation/1]] va da Bulbasaur a Mew, dal 001 al 151. Alla tasca non importa da quale set arrivi la carta. Una comune recente, già in bustina, riempie il 001 con la stessa onestà di una stampa vecchia. [[La nota sul raccoglitore Pokédex|/guides/pokedex-binder]] spiega perché mi fermo a una carta per specie. [[La lista della generazione 1|/guides/gen-1-checklist]] è la stessa idea, ristretta ai primi 151.",
            "Scrivo il numero di Pokédex su un'etichetta piccola all'angolo della pagina solo quando la pagina apre un nuovo centinaio. Non etichetto ogni tasca. La lista sulla pagina delle collezioni è l'indice. Il raccoglitore è la prova. Se l'etichetta e la carta non si parlano più, credo alla carta che ho in mano e correggo l'etichetta dopo.",
          ],
        },
        {
          id: "by-type",
          heading: "Ordinare per tipo, quando il raccoglitore non è una lista",
          paragraphs: [
            "Il tipo è il simbolo in alto a destra su una carta Pokémon. [[L'aiuto del database delle carte|https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database]] lo descrive così: l'icona energia per Erba, Fuoco, Acqua e il resto. Un bambino che vuole ogni carta Acqua su una pagina ordina per tipo. Lo uso per una pila da gioco sul tavolo. Non lo uso per ordinare un raccoglitore di set. La lista è numerata, e una pagina di un solo tipo nasconde il numero che manca.",
            "Gli Allenatori non portano quell'icona di tipo, e l'Energia base resta una pila a sé. In un pomeriggio di ordine per tipo, quelle carte hanno il mucchio, invece di finire forzate sotto una creatura. La generazione è l'altro ordine, un tratto del Pokédex, ed è già quello che fa la [[generazione 1|/collections/generation/1]]. Set, numero, tipo e generazione sono quattro domande. Ne prendo una per raccoglitore. [[Come leggo il simbolo|/guides/read-a-card]] è il modo in cui trovo l'icona prima di fidarmi della pila.",
          ],
        },
        {
          id: "marking-a-line",
          heading: "Come segno una riga",
          paragraphs: [
            "La [[pagina delle collezioni|/collections]] mostra una riga come piena quando ho segnato la carta. Segnare non è la stessa cosa che dare un'occhiata a un mucchio. Metto la carta nella bustina, infilo la bustina nella tasca, e solo allora segno. Se segno prima, il registro mente e il raccoglitore tiene un buco. Quel buco torna fuori settimane dopo, quando credevo il set finito.",
            "[[Bustine e pagine|/guides/protect-cards]] vengono prima del segno, non dopo. Una carta consumata a bianco in una tasca è una carta che poi devo sostituire, e la riga non era davvero fatta. Quando lo schermo e il raccoglitore non vanno d'accordo, giro le pagine. Vince il raccoglitore.",
            "Una sera concreta assomiglia a questo. Scelgo un raccoglitore e lascio l'altro chiuso. Allineo il mucchio corrispondente in ordine di numero sul tavolo, nove carte per fila se uso pagine a nove tasche. Metto la bustina a ciascuna, la infilo, e solo allora guardo la lista. Le carte che non appartengono al raccoglitore di stasera tornano nella loro scatola prima che cominci, così non diventano un secondo progetto a metà pagina. Una pagina finita e riposta vale più di tre mucchi ammirati.",
          ],
        },
      ],
      faqs: [
        {
          q: "Un raccoglitore di generazione deve usare pagine a nove tasche?",
          a: "Uso pagine a nove tasche quando l'obiettivo è finire il tratto. Uso pagine a quattro tasche quando l'obiettivo è guardare meno carte, più grandi. Sono entrambi raccoglitori veri. Non si mescolano nello stesso volume.",
        },
        {
          q: "Smisto un set per tipo o per rarità?",
          a: "No. Smisto un set per numero di collezione. Tipo e rarità cambiano l'aspetto di una pagina e nascondono le carte che mancano. Il numero dice quale tasca è ancora vuota.",
        },
      ],
    },
    {
      slug: "bulk-cards",
      title: "Che cosa fare del bulk di carte Pokémon",
      description: "Il bulk chiude i raccoglitori. Smisto per set, poi per la riga di specie vuota, e tengo il resto.",
      h1: "Che cosa fare del bulk di carte Pokémon",
      lede: "Il bulk è il mucchio che chiude un raccoglitore. Parlo del mucchio ordinario: le comuni, i doppioni, e la carta che esce da ogni scatola di latta. Una scatola del supermercato è spesso il punto di partenza. Smisto per set, lascio che le carte in più chiudano le specie ancora vuote, e tengo quello che resta invece di chiamarlo scarto.",
      sections: [
        {
          id: "why-bulk",
          heading: "Perché tratto il bulk come la collezione",
          paragraphs: [
            "Un'olografica fa una bella pagina. Non fa un sistema. Il sistema è la riga vuota, e le righe vuote sono soprattutto comuni. [[La guida dei raccoglitori|/guides/collecting-binders]] lo dice nella versione lunga. Ecco la versione corta che uso al tavolo: se la carta chiude un buco, è la carta che volevo, anche quando il disegno è il Magikarp che riconoscerei a occhi chiusi.",
            "Ho smesso di scusarmi per il bulk il giorno in cui un raccoglitore di generazione è avanzato più in fretta grazie a una scatola mescolata che grazie a tutto ciò che avevo messo da parte come speciale. Le carte speciali possono aspettare in una bustina. La lista non le aspetta. [[Collezionare con un bambino|/guides/collecting-with-a-child]] usa lo stesso mucchio, perché un bambino può tenere una comune, scegliere una tasca e vedere la riga chiudersi. Quel gesto non chiede una carta rara.",
            "Alcune liste a tema sono quasi solo questo mucchio. [[Le carte di creta di Yuka Morii|/collections/themes/yuka-morii]] sono comuni, e lì il bulk è oro. [[I raccoglitori a tema|/collections/themes]] è il posto in cui stanno quelle liste.",
          ],
        },
        {
          id: "sort-by-set",
          heading: "Prima si smista per set",
          paragraphs: [
            "Rovescio la scatola solo finché il tavolo resta trattabile. Poi smisto per set, non per creatura e non per lucentezza. [[Come leggo il numero e il simbolo|/guides/read-a-card]] è la parte che faccio con le mani: trovare il numero di collezione, confermare il set, fare un mucchio. Un mucchio per Base, un mucchio per un set recente, un mucchio che non so ancora dove mettere.",
            "Ogni mucchio va alla pagina del set sulla [[pagina delle collezioni|/collections]]. La pagina è la lista di carte. Se la riga è aperta, la carta entra in quel raccoglitore. Se la riga è già piena, la carta è un doppione e resta nel bulk. Non tiro fuori i doppioni per ammirarli finché le righe aperte di quel mucchio non sono fatte. L'ammirazione è il motivo per cui una scatola smistata a metà dura un mese. La rimando, e il buco resta aperto.",
          ],
        },
        {
          id: "species-lines",
          heading: "Poi la riga di specie vuota",
          paragraphs: [
            "Un doppione per un set può ancora essere la prima copia di quella specie in un raccoglitore di generazione. [[Il raccoglitore Pokédex|/guides/pokedex-binder]] ne chiede una sola. [[Magikarp|/pokedex/129]] è l'esempio di cui mi fido, perché il bulk ne offre un altro di continuo. Se il 129 è vuoto, il Magikarp successivo lascia la scatola e chiude la tasca. Se il 129 è pieno, la carta torna nel bulk. Non tratto con una terza copia.",
            "Qualsiasi lingua conta per una riga di specie. Una carta stampata con un altro nome mostra comunque la stessa specie sulla pagina della specie, perché la pagina segue il numero del Pokédex nazionale. Controllo il numero quando il nome sulla carta non è il nome inglese che ho in memoria. Il disegno aiuta. Il numero decide.",
          ],
        },
        {
          id: "extras",
          heading: "Che cosa succede alle carte in più",
          paragraphs: [
            "Le carte in più restano in una scatola etichettata con il nome del set, o in una sola scatola mescolata quando il mucchio è piccolo. Non è un cestino. Il raccoglitore successivo ha spesso bisogno della carta che ero pronto a lasciare andare. Le tengo asciutte, in una bustina se l'angolo è già morbido, e lontano dal pavimento.",
            "Quando un raccoglitore è finito, la storia cambia. [[Un raccoglitore finito può partire|/guides/donating-cards]] verso un bambino. Le carte in più non partono con lui. Restano e chiudono il raccoglitore dopo. Quella separazione tiene il regalo completo e tiene la lista onesta. Una manciata di doppioni accanto a un raccoglitore finito sembra generosa e arriva come un compito da finire.",
            "La scatola stessa riceve un'etichetta noiosa: il nome del set, o «misto» se non l'ho ancora divisa. Non etichetto una scatola con una supposizione su quanto le carte potrebbero rendere in una vendita. Non ho una scatola per le carte «buone» e un contenitore per lo «scarto». Quel taglio fa sparire le comuni e lascia i buchi aperti. Una volta al mese riprendo la scatola mista, rifaccio lo smistamento per set e la riduco. L'obiettivo è un mucchio di domande più piccolo, non una vetrina più bella. Una carta di cui non mi fido non chiude una riga. [[Riconoscere un falso|/guides/spot-fakes]] è una nota a parte. La scatola del bulk è il posto delle carte ordinarie e vere, e sono quelle che voglio.",
          ],
        },
      ],
      faqs: [
        {
          q: "Butto via le comuni doppie?",
          a: "Non lo faccio. Un doppione in un set è spesso la specie che manca in un altro raccoglitore. I doppioni restano divisi per set finché una lista li chiede. Il raccoglitore successivo di solito è più vicino di un mucchio nuovo di pacchetti.",
        },
        {
          q: "Smisto il bulk per rarità, per prima cosa?",
          a: "No. I segni di rarità sono cambiati negli anni, e non mi dicono quale riga è vuota. Il numero di collezione lo dice. Posso smistare un'intera scatola senza decidere se un segno voglia dire qualcosa.",
        },
      ],
    },
    {
      slug: "pokedex-binder",
      title: "Come completare un raccoglitore Pokédex",
      description: "Una carta di ogni specie, dal 001 fino alla fine della generazione 9, riempita dal bulk.",
      h1: "Come completo un raccoglitore Pokédex",
      lede: "Un raccoglitore Pokédex è una carta di ogni specie. Dalla generazione 1 alla 9 sono {species} specie. Lo riempio dal bulk, in ordine di Pokédex, e non inseguo una stampa che la lista non chiede. Quello che ci metto è il bulk che ho già, più una bustina e una tasca per ogni carta che chiude un buco.",
      sections: [
        {
          id: "one-card",
          heading: "Una carta di ogni specie",
          paragraphs: [
            "La regola è piccola e mi salva. Una carta. Qualsiasi set. Qualsiasi lingua. Qualsiasi rarità. [[La guida lunga dei raccoglitori|/guides/collecting-binders]] separa questo lavoro dal raccoglitore di set, dove ogni carta della lista ha una tasca. Qui la creatura è la tasca. Un secondo Pikachu è un doppione, anche quando il disegno è nuovo. Il disegno nuovo può essere bellissimo. Non apre una seconda riga.",
            "L'abitudine è cominciata con [[Bulbasaur|/pokedex/1]]. La pagina della specie elenca le stampe. Il raccoglitore ne ha bisogno di una. Ho messo nel 001 il primo Bulbasaur già in bustina che possedevo, e ho smesso di cercare un 001 migliore. Il migliore è un altro passatempo. Questo è il tratto, dall'inizio alla fine, senza trattare su ogni tasca.",
            "Una pagina di specie elenca ogni stampa, e il raccoglitore Pokédex ha ancora bisogno di una sola carta. [[Tutte le carte Pikachu|/collections/themes/pikachu]] tiene ogni stampa di Pikachu come lista propria. [[I raccoglitori a tema|/collections/themes]] sta accanto alle pagine di generazione quando voglio vedere tutta la serie di una faccia.",
          ],
        },
        {
          id: "the-range",
          heading: "Le {species}, generazione per generazione",
          paragraphs: [
            "Non apro un raccoglitore gigante per dire che è fatto. Costruisco per generazione, perché la [[pagina delle collezioni|/collections]] è già tagliata così, e perché una generazione è un libro che posso finire. La generazione 1 conta 151. La generazione 2 sono le 100 successive. Le generazioni dopo stanno sulla stessa pagina, ciascuna con la sua lista e il suo conteggio. Lascio quei conteggi sulla pagina. Non li recito.",
            "La [[generazione 1|/collections/generation/1]] è quella che dico di finire per prima, e [[la nota sulla generazione 1|/guides/gen-1-checklist]] resta accanto. Le creature sono familiari, le scatole di bulk ne sono piene, e 151 è un numero che si può tenere in testa. Dopo, la generazione 5 è quella lunga e la generazione 6 è quella corta. Lascio che lo dica la lista. Non memorizzo i conteggi. Una generazione finita si chiude, e la successiva si apre solo allora.",
          ],
        },
        {
          id: "from-bulk",
          heading: "Riempirlo dal bulk",
          paragraphs: [
            "Il [[bulk|/guides/bulk-cards]] è la scorta. Su questo sono deciso. Un'illustrazione rara è benvenuta quando è la carta che ho già. Non è un requisito. Aspettare una stampa preferita è il modo in cui un raccoglitore Pokédex resta fermo sugli stessi venti buchi per un anno. La lista, intanto, non si è mossa.",
            "Il passaggio pratico è monotono, e funziona. Prendo una sola lista di generazione. Percorro la scatola di bulk con i buchi in mente. Metto una bustina sulla carta che chiude un buco. La infilo nella tasca. Segno la riga. Poi mi fermo, anche se la scatola ha ancora un'aria interessante. [[Come organizzo le pagine|/guides/organize-binder]] è la scelta della misura. Le nove tasche sono quelle che uso quando l'obiettivo è vedere il tratto completato. Quattro tasche verrebbero dopo, se l'obiettivo diventasse guardare, non finire.",
          ],
        },
        {
          id: "when-it-is-done",
          heading: "Quando dico che è finito",
          paragraphs: [
            "Una generazione è finita quando ogni riga di specie ha una carta nel raccoglitore e ho girato le pagine per provarlo. Lo schermo può dire che le righe sono piene. Giro le pagine lo stesso. Una carta segnata e poi lasciata in una scatola da scarpe non è nel raccoglitore. Il segno senza la tasca è una storia che mi racconto.",
            "Non «miglioro» una generazione finita per sport. Se una carta successiva mi fa sorridere, può sostituire quella nella tasca, e la vecchia torna nel bulk. La riga resta piena in entrambi i casi. Il punto non è mai stato la copia più impressionante. Il punto era la creatura, presente, in ordine, dove una persona può sfogliare fino a trovarla.",
            "Per questo raccoglitore, il limite è l'attenzione: non sto cacciando una copia precisa. Possiedo già quasi tutte le carte necessarie dentro bulk non smistato. Il costo che conta è la bustina e la pagina, che compro in pacchetti ordinari e uso sulle comuni senza conservarle. Tengo una lista a matita dei buchi solo quando sono lontano dallo schermo. A casa, la pagina della generazione è la lista. Se un buco resta vuoto per mesi, è perché quella specie scarseggia nelle mie scatole, non perché aspetto un disegno più raro di una specie che avrei già potuto archiviare.",
          ],
        },
      ],
      faqs: [
        {
          q: "Il raccoglitore Pokédex deve contenere ogni stampa di un Pokémon?",
          a: "No. Una carta di ogni specie è tutta la regola. Ogni stampa appartiene alla pagina della specie, non a questo raccoglitore. Un secondo disegno, anche bello, torna nel bulk o nel raccoglitore del suo set.",
        },
        {
          q: "Quale generazione conviene finire per prima?",
          a: "Comincio dalla generazione 1, i 151 originali. Le carte sono comuni nel bulk, e la lista è abbastanza corta da poterla finire. Poi prendo la generazione successiva sulla pagina delle collezioni, non un buco a caso in mezzo al Pokédex.",
        },
      ],
    },
    {
      slug: "gen-1-checklist",
      title: "Lista generazione 1: tutti i 151",
      description: "Come colleziono i 151 Pokémon originali in un raccoglitore, con la lista di generazione e la lista di Base.",
      h1: "Lista generazione 1: i 151 Pokémon originali",
      lede: "La generazione 1 sono 151 specie, dal 001 Bulbasaur al 151 Mew. Le colleziono in un solo raccoglitore: una carta di ciascuna, da qualsiasi set. La lista è la pagina della generazione, e il set Base è dove cominciano molti nomi familiari. Quelle due liste non hanno lo stesso conteggio. Tenerle separate è tutto il trucco.",
      sections: [
        {
          id: "the-151",
          heading: "Che cosa vogliono dire i 151",
          paragraphs: [
            "I 151 sono un tratto del Pokédex, non un solo prodotto. La [[generazione 1|/collections/generation/1]] elenca ogni specie di quel tratto, con alcuni dei set in cui ciascuna compare. Quella pagina è la lista che uso. Non è lo stesso oggetto del set Base, che conta 102 carte e comprende allenatori ed energie. La gente mescola quei due conteggi. Li tengo separati perché il raccoglitore abbia il numero giusto di tasche. Il set del 2023 chiamato [[151|/collections/set/sv3pt5]] è un'altra lista.",
            "[[La nota sul raccoglitore Pokédex|/guides/pokedex-binder]] è lo stesso metodo per tutte le {species} specie. Questa nota resta con il primo libro, perché i 151 originali sono il raccoglitore di cui mi chiedono più spesso. [[La guida lunga|/guides/collecting-binders]] spiega perché si tratta di un raccoglitore di generazione e non di un raccoglitore di set. Entrambi possono contenere un Pikachu. Non contano la stessa cosa.",
          ],
        },
        {
          id: "where-they-appear",
          heading: "Dove compaiono i 151 originali",
          paragraphs: [
            "Una specie di Kanto può comparire nell'epoca di Base e di nuovo in un set uscito decenni dopo. [[Pikachu|/pokedex/25]] è l'esempio ovvio. [[Charizard|/pokedex/6]] è l'altro. La pagina della specie elenca le stampe. Una qualsiasi chiude la tasca. Non mi serve la copia più vecchia, né la più nuova. Mi serve una carta di quella specie, in bustina, al suo posto.",
            "[[I set in ordine|/guides/sets-in-order]] aiutano quando voglio quelle vecchie apposta. La [[serie Base|/collections/series/base]] riunisce Base, Jungle, Fossil e i set intorno. Se costruisco un raccoglitore di set per Base, è un altro progetto, con 102 tasche. Le carte di quel progetto possono anche chiudere una tasca di generazione, una volta sola, se la riga di specie è vuota. Non smonto un raccoglitore di set per decorare quello di generazione. Ci pensa il doppione. Il raccoglitore di set resta intero.",
          ],
        },
        {
          id: "base-set",
          heading: "Il set Base è una lista, non i 151",
          paragraphs: [
            "[[Base|/collections/set/base1]] conta 102 carte. Una parte dei 151 originali non è in quella lista. I set successivi della stessa epoca ne aggiungono altri. Un raccoglitore di generazione non aspetta quei set vecchi. Una comune recente di una specie che manca è una riga finita. L'età della carta non è una condizione della lista.",
            "Mi piace ancora aprire la lista di Base, perché i numeri di collezione sono il modo in cui ho imparato a leggere una carta. Prima l'ordine dei numeri, poi il nome, poi il simbolo del set come verifica. Quando una scatola di bulk pretende di contenere «tutti gli originali», non credo alla frase. Credo alla pagina della generazione e alle carte che ho in mano. Una scatola può essere in buona fede e mancare lo stesso di venti specie.",
          ],
        },
        {
          id: "one-line",
          heading: "Una riga alla volta",
          paragraphs: [
            "Scendo la lista dal 001 solo quando sono di umore paziente. Più spesso prendo la prossima riga vuota che la scatola può chiudere. L'ordine nel raccoglitore resta numerico anche quando l'ordine in cui trovo le carte non lo è. La tasca 050 non passa davanti perché l'ho trovata un martedì. Il martedì non è un argomento di ordine.",
            "Una riga è fatta quando la carta è in bustina, nella tasca, e segnata. Poi guardo il buco successivo. Centocinquantuno sono molti pomeriggi, e non sono nemmeno un mistero. Il bulk di quasi qualsiasi epoca contiene creature di Kanto. Il lavoro è abbinare, non desiderare.",
            "Tengo la pagina della generazione aperta accanto alla scatola e non spunto nulla a mente. Le creature che credo di possedere non sono sempre quelle nel raccoglitore. Mew e le linee iniziali sono quelle che la gente dà per fatte. Le controllo lo stesso. Un raccoglitore a cui manca il 001 perché il Bulbasaur è ancora senza bustina in una scatola di latta non è un 151 finito, anche se il resto delle pagine sembra pieno. Gli ultimi dieci buchi di solito prendono più tempo dei primi cinquanta, ed è normale. Sono le specie che mancano nelle mie scatole, quindi le lascio vuote invece di inventare una carta sostitutiva.",
          ],
        },
      ],
      faqs: [
        {
          q: "Il set Base è la stessa cosa dei 151?",
          a: "No. Base è un set, con 102 carte nella lista pubblica. I 151 sono ogni specie da Bulbasaur a Mew, da qualsiasi set. Tengo le due pagine a portata di mano perché i conteggi non si mescolino.",
        },
        {
          q: "Serve una carta di prima edizione per il raccoglitore della generazione 1?",
          a: "No. Qualsiasi stampa di quella specie chiude la tasca. Una prima edizione appartiene a un raccoglitore di set se la lista di quel set la include. Il raccoglitore di generazione non la chiede.",
        },
      ],
    },
    {
      slug: "read-a-card",
      title: "Leggere il numero e il simbolo di una carta Pokémon",
      description: "Come trovo il numero di collezione, il simbolo del set e il segno di rarità per smistare un mucchio di bulk.",
      h1: "Come leggo una carta Pokémon",
      lede: "Leggo una carta nello stesso ordine ogni volta: il nome, il numero di collezione, il simbolo del set, poi il segno di rarità se mi serve ancora. Quell'ordine trasforma un mucchio di bulk mescolato in mucchi che posso archiviare. Il numero corrisponde alla lista del set. Il simbolo impedisce a due epoche di finire nello stesso mucchio.",
      diagram: {
        kind: "card",
        title: "Dove guardo su una carta",
        description: "Il contorno di una carta semplice, con il nome, il numero di collezione, il simbolo del set e il segno di rarità. Nessuna illustrazione ufficiale.",
        caption: "Confronto il numero di collezione con la lista del set. Il simbolo e il segno di rarità servono solo a confermare il set.",
      },
      sections: [
        {
          id: "the-number",
          heading: "Il numero di collezione è la chiave",
          paragraphs: [
            "Il numero di collezione è la frazione o la coppia stampata sulla carta, come 4/102. Il primo numero è il posto della carta in quel set. Il secondo è quante carte il set ha contato in quella numerazione. [[Base|/collections/set/base1]] è il set con cui spiego questo, perché 102 è il conteggio della lista che pubblico a partire dai dati pubblici. Se la carta dice 4 e la carta 4 della lista porta lo stesso nome, ho una corrispondenza.",
            "Le promo e i set speciali usano a volte una lettera, un totale diverso, o un numero che non somiglia al set principale accanto. Non li forzo nell'ordine del set principale. Cerco la lista che usa quella numerazione. [[La cronologia dei set|/guides/sets-in-order]] è il modo in cui ricordo che le promo siedono accanto a un'epoca senza essere la lista principale di quell'epoca. Una lettera al posto di una frazione è già un segnale.",
          ],
        },
        {
          id: "the-symbol",
          heading: "Il simbolo del set conferma il mucchio",
          paragraphs: [
            "Il simbolo del set è il piccolo segno, di solito lungo il bordo destro del disegno o appena sotto, secondo l'epoca. Cambia con ogni set. Non provo a memorizzare tutta la storia dei segni. Uso il simbolo per impedire a due mucchi di fondersi quando i numeri potrebbero appartenere a più di una lista. Due carte possono dire 12 e venire da due mondi diversi.",
            "Quando il simbolo e il numero contraddicono il nome che mi aspettavo, la carta dice il vero e la memoria no. Cerco il numero sulla pagina del set. [[Pikachu|/pokedex/25]] ricorda bene che un solo nome può vivere in molti set, ciascuno con il suo numero. Il nome da solo non è una chiave di smistamento. È un conforto, non un archivio.",
          ],
        },
        {
          id: "rarity",
          heading: "I segni di rarità smistano male",
          paragraphs: [
            "Un cerchio, un rombo e una stella sono stati stampati sulle carte, e il senso si è mosso man mano che il gioco aggiungeva rarità. Non tengo una tabella privata di che cosa volesse dire ogni segno in ogni anno. La tabella sarebbe più lunga dello smistamento, e non mi direbbe ancora quale riga della lista è vuota. Quel lavoro lo lascio a chi scrive la storia dei simboli.",
            "Do un'occhiata al segno solo per separare un mucchio in «facile da mettere in bustina» e «guarderò due volte prima di metterla in una tasca». È comodità, non catalogazione. [[Smistare il bulk|/guides/bulk-cards]] resta con il numero. La rarità è l'aspetto di una pagina. Il numero è il modo in cui un raccoglitore si chiude. Una stella non chiude una riga da sola.",
          ],
        },
        {
          id: "regulation",
          heading: "Il marchio di regolamento è una lettera di formato",
          paragraphs: [
            "Sulle carte stampate dal 2020, Play! Pokémon usa un marchio di regolamento: una lettera in basso a sinistra. Le [[regole di Play! Pokémon|https://play.pokemon.com/en-us/resources/rules/]] dicono che il formato Standard ruota secondo quella lettera. Le carte più vecchie non hanno lettera. Una carta con una lettera vecchia, o senza lettera, può restare legale se la stessa carta è stata ristampata con una lettera attuale. Le lettere permesse cambiano. Non imparo a memoria la lista di adesso in un raccoglitore, e non ordino secondo la lettera.",
            "La lettera non è il numero di collezione, e non è il simbolo di rarità. [[L'aiuto del database delle carte|https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database]] mette il simbolo di rarità nell'angolo in basso a destra, con l'icona dell'espansione. Guardo la lettera solo quando qualcuno chiede se una carta si può giocare in un evento attuale. Per il raccoglitore, il numero decide ancora lo slot. Una carta di cui non mi fido non arriva a quello slot. Di questo parla [[come riconosco un falso|/guides/spot-fakes]].",
          ],
        },
        {
          id: "in-practice",
          heading: "Un passaggio in un mucchio mescolato",
          paragraphs: [
            "Prendo una carta. Leggo il nome ad alta voce se il mucchio è in disordine, perché gli occhi saltano quando vado troppo in fretta. Trovo il numero di collezione. Controllo il simbolo contro il mucchio a cui credo che appartenga. La appoggio su quel mucchio. Se non riesco a collocarla in pochi secondi, va in un mucchio di domande, non di nuovo nel miscuglio. Rimandare una carta dubbia nel mucchio è ripetere la stessa esitazione.",
            "Il mucchio di domande riceve un passaggio più calmo con la [[pagina delle collezioni|/collections]] aperta. Riempio prima le righe di cui parla [[la guida dei raccoglitori|/guides/collecting-binders]]: quelle di un set, poi quelle di una specie. Una carta che non riesco a identificare riceve comunque una bustina se l'angolo è morbido. L'identificazione può aspettare un'ora. Un angolo piegato peggiora mentre esito.",
            "La lingua stampata sulla carta può rallentare il passaggio, e non è un problema. Il nome inglese del dataset è quello che usa la lista del set. Una carta stampata in un'altra lingua ha sempre un numero di collezione e un simbolo del set. Confronto quei due, poi leggo la pagina della specie se voglio il nome locale. Non costruisco un raccoglitore separato per lingua. Una lista di set, un ordine di numeri. Il nome sulla carta può differire dal nome sullo schermo.",
          ],
        },
      ],
      faqs: [
        {
          q: "E se la carta non ha una frazione?",
          a: "La tratto come una promo o una stampa speciale, e cerco una lista con quel tipo di numero. Non le invento un posto nel set principale. Il mucchio di domande è dove aspetta, finché non apro la pagina giusta.",
        },
        {
          q: "Conviene smistare secondo il simbolo di rarità?",
          a: "Io non lo faccio. Il simbolo è cambiato nel tempo. Il numero di collezione corrisponde alla lista di carte. Una lucentezza sulla carta può aspettare che il mucchio sia già nel set giusto.",
        },
      ],
    },
    {
      slug: "protect-cards",
      title: "Proteggere le carte Pokémon senza complicarsi",
      description: "Bustine, pagine da raccoglitore e un posto ordinario per una collezione che si apre, compreso il raccoglitore di un bambino.",
      h1: "Proteggere le carte Pokémon senza farne un caso",
      lede: "Proteggo le carte nel modo più economico che mi lascia ancora aprire il raccoglitore. Una bustina morbida, una pagina a tasche, e uno scaffale che resta asciutto. Questo è tutto il piano. Lo uso sulle comuni, perché la comune è spesso la carta che chiude una riga. Un raccoglitore che non apro non è una collezione che sto tenendo.",
      sections: [
        {
          id: "sleeve-first",
          heading: "Una bustina prima di una tasca",
          paragraphs: [
            "La bustina è una tasca sottile e trasparente per una sola carta. La metto prima che la carta veda una pagina del raccoglitore. Le pagine sfregano. Le bustine prendono quello sfregamento al posto della carta. Compro quelle semplici in un mazzo e non le riservo alle olografiche. Una comune con l'angolo sbiancato è ancora un buco in una lista, e sostituirla è un pomeriggio peggiore che proteggerla adesso.",
            "Premo la bustina perché la carta resti piatta, e non la lecco, non ci metto nastro, e non raddoppio una comune di bulk come un rito. La doppia bustina è per una carta che viaggia. La carta di tutti i giorni ne riceve una sola. [[La guida dei raccoglitori|/guides/collecting-binders]] dà per fatto questo passaggio. Una carta segnata con la superficie nuda è una carta che ho segnato troppo presto. Il segno può aspettare la bustina.",
          ],
        },
        {
          id: "pages",
          heading: "Pagine che accettano una carta in bustina",
          paragraphs: [
            "[[Le pagine a nove e a quattro tasche|/guides/organize-binder]] sono la scelta. La tasca deve accettare una bustina senza inarcare la carta. Se devo forzare, la pagina è sbagliata. Sostituisco una tasca strappata invece di sperare che lo strappo resti buono. Una tasca strappata mangia gli angoli. Un angolo mangiato diventa poi il buco che credevo già chiuso.",
            "I raccoglitori ad anelli vanno bene quando gli anelli non premono sulle carte. Impedisco agli anelli di pesare su una pagina non riempiendo troppo il raccoglitore. Un anello a D che si chiude netto è più gentile di un raccoglitore stipato finché le copertine si deformano. Preferisco cominciare un secondo raccoglitore che piegare l'ultima pagina del primo. La seconda copertina costa meno di una pagina ondulata.",
          ],
        },
        {
          id: "storage",
          heading: "Dove vivono i raccoglitori",
          paragraphs: [
            "In piedi su uno scaffale, o piatti se il raccoglitore è sottile, lontano da una finestra e lontano da un muro esterno umido. Non tengo i raccoglitori in uno scatolone di cantina, in una soffitta calda, o nel bagagliaio di un'auto. Il calore arriccia una bustina. L'umidità macchia una pagina. Il sole sbiadisce l'inchiostro. Niente di tutto questo si vede il giorno in cui lo faccio. Si vede quando apro il raccoglitore un'estate dopo.",
            "Il bulk che non è in un raccoglitore vive in una scatola asciutta, impilato così che le carte non siano piegate da un oggetto più pesante. Tengo cibo e bicchieri fuori da quel tavolo. Sembra pignolo finché del succo d'arancia è dentro una bustina. La [[pagina delle collezioni|/collections]] si può ricostruire dalle carte. Un mucchio incollato, no. Preferisco una scatola noiosa e asciutta a un mucchio che poi dovrò staccare.",
          ],
        },
        {
          id: "toploader",
          heading: "Un toploader serve per il viaggio",
          paragraphs: [
            "Un toploader è una bustina di plastica rigida. Ne uso uno quando una carta esce di casa: un raccoglitore in viaggio verso un bambino, o una carta sola in un pacco. È più spesso di quanto una pagina voglia, quindi resta fuori dalla pagina a nove tasche. A casa la carta vive in una bustina morbida, nella tasca. Una custodia dura su ogni comune farebbe un raccoglitore che non apro, e aprirlo è il punto.",
            "Non nastrò una carta dentro un toploader. Se non ne ho uno, la bustina morbida e una scatola piatta battono ancora un angolo piegato. [[La guida lunga|/guides/collecting-binders]] dà già per fatta la bustina morbida. Quella rigida è l'eccezione, per il viaggio, non per la pagina di ogni giorno.",
          ],
        },
        {
          id: "kids",
          heading: "La collezione di un bambino",
          paragraphs: [
            "[[Un raccoglitore con un bambino|/guides/collecting-with-a-child]] comincia con le bustine e un raccoglitore che il bambino possa aprire, non con un astuccio rigido per ogni comune. Voglio che il bambino giri la pagina. Una carta che non viene mai aperta può restare perfetta e anche smettere di far parte del pomeriggio. Le bustine sono il compromesso di cui mi fido. Reggono le dita senza trasformare il raccoglitore in una vetrina chiusa.",
            "Quando un raccoglitore finito [[parte per un bambino|/guides/donating-cards]], parte in bustina, nelle pagine, con gli anelli che funzionano. Non consegno carte sfuse chiamandolo lo stesso regalo. La bustina fa parte del raccoglitore. È anche la parte che sopravvive a essere un po' maltrattata con affetto, ed è a questo che serve un buon raccoglitore.",
            "Sostituisco le pagine quando la plastica si opacizza o la cucitura di una tasca si apre. Non provo a riparare una cucitura con nastro dal lato della carta. Il nastro è il modo in cui una carta guadagna un bordo appiccicoso. Una pagina nuova è la riparazione. La pagina vecchia, se il resto è sano, può tenere gettoni o liste, non carte. Una volta all'anno apro ogni raccoglitore abbastanza da vedere le pagine in fondo, perché il fondo è dove si nasconde una tasca deformata. Quel passaggio ha salvato più carte di qualsiasi custodia speciale che ho considerato e non ho comprato.",
          ],
        },
      ],
      faqs: [
        {
          q: "Le comuni hanno bisogno di una bustina?",
          a: "Nei miei raccoglitori, sì. La comune è spesso la carta che chiude la riga. La metto in bustina prima che entri in una tasca. Un angolo sbiancato è più difficile da sistemare di quanto serva a infilare una bustina.",
        },
        {
          q: "Una custodia rigida è la scelta abituale?",
          a: "No. Una custodia dura è quella che uso quando una carta viaggia. Il raccoglitore di casa usa una bustina morbida e una pagina a tasche. Una custodia dura per ogni comune farebbe del raccoglitore qualcosa che non apro.",
        },
      ],
    },
    {
      slug: "donating-cards",
      title: "Consegnare carte Pokémon ai bambini",
      description: "Consegno un raccoglitore finito a un bambino, attraverso un ospedale, un alloggio o un doposcuola, e segno la data.",
      h1: "Consegnare carte Pokémon ai bambini",
      lede: "Consegno le carte Pokémon consegnando un raccoglitore finito. Un reparto d'ospedale, un alloggio o un doposcuola può essere il posto dove va. Il bulk sfuso resta qui e chiude il raccoglitore successivo. Chiedo prima al posto, segno il giorno in cui il raccoglitore esce, e non pubblico un prezzo di vendita. Se la risposta è «non ancora», il raccoglitore resta sul mio scaffale e la lista pubblica non cambia. Un piano non è una consegna. Preferisco aspettare che segnare un regalo che non è uscito dalle mie mani.",
      sections: [
        {
          id: "finished",
          heading: "Solo un raccoglitore che ho finito",
          paragraphs: [
            "Un raccoglitore riempito a metà è un progetto. Un raccoglitore finito è qualcosa che posso mettere nelle mani di un'altra persona senza scusarmi. Giro le pagine prima che esca. Ogni tasca che la lista chiedeva ha una carta. [[La guida lunga|/guides/collecting-binders]] è la ragione di quel criterio. Non voglio che un bambino erediti i miei buchi. I buchi sono il mio lavoro, non il suo.",
            "Il raccoglitore è in bustina, perché la [[protezione|/guides/protect-cards]] fa parte del regalo e non è un gusto privato. Gli anelli si chiudono. Le pagine non sono strappate. Se una tasca è stanca, sostituisco la pagina prima della consegna. È una cura ordinaria, non una cerimonia. Nessuno ha bisogno di un discorso per ricevere un raccoglitore le cui pagine girano.",
          ],
        },
        {
          id: "where",
          heading: "Ospedali, alloggi e doposcuola",
          paragraphs: [
            "Chiedo al posto che cosa può usare davvero. Un reparto per bambini, una sala giochi in un alloggio e un doposcuola non vogliono tutti la stessa cosa, e alcuni non possono prendere carte. Preferisco sentire di no che lasciare un raccoglitore a una reception che non l'ha chiesto. Chi lavora lì conosce la stanza. Io conosco il raccoglitore. Ciascuno resta sul suo terreno.",
            "Non trasformo la consegna in un discorso sul collezionare. Il raccoglitore è tutta la presentazione. Se un bambino vuole conoscere l'ordine, l'ordine è nelle pagine: un set in ordine di numero, o una generazione in ordine di Pokédex. [[Collezionare con un bambino|/guides/collecting-with-a-child]] è il modo in cui mi comporto quando sono l'adulto al tavolo. Le stesse maniere valgono quando sono solo la persona che ha portato il raccoglitore. Spiego una volta se me lo chiedono, poi taccio.",
          ],
        },
        {
          id: "public-list",
          heading: "Che cosa mostra la lista pubblica",
          paragraphs: [
            "L'[[elenco dei raccoglitori consegnati|/donations]] segna chi ha ricevuto e la data. Non segna un prezzo di vendita, e non segna quanto si venderebbe una carta. Un raccoglitore che esce di casa è un fatto sul progetto. Non è una stima. Il giorno e il nome bastano. Un numero di vendita non aggiungerebbe nulla che io voglia pubblicare.",
            "La [[pagina delle collezioni|/collections]] mostra ancora la lista da cui venivano quelle carte. Una volta segnato il raccoglitore come consegnato, smetto di trattare quelle righe come buchi da riempire di nuovo, salvo che abbia scelto di costruire quel raccoglitore una seconda volta. Lo schermo deve corrispondere allo scaffale. Un raccoglitore assente non deve sembrare un raccoglitore che ho dimenticato di cominciare. La pagina dice che è partito, ed è esatto.",
          ],
        },
        {
          id: "spares",
          heading: "Le carte in più restano nel circuito",
          paragraphs: [
            "Il [[bulk|/guides/bulk-cards]] è il modo in cui si chiude il raccoglitore successivo. Le carte in più non escono in una manciata accanto al regalo. Una manciata sembra generosa e arriva come un compito. Tengo gli extra, li smisto, e li lascio chiudere righe vere. Il regalo è già completo il giorno in cui parte.",
            "Se ha carte in più per quello smistamento, scriva a [[magnus@linksforcards.com|mailto:magnus@linksforcards.com]]. Mi dica che cosa c'è nella scatola in parole semplici: i set che riconosce, o solo bulk. Lo smistamento lo faccio io. I negozi che mandano carte sono ringraziati per nome nella pagina dei ringraziamenti. Questo è tutto l'accordo. Nessuna cerimonia intorno a un pacco.",
            "Segno la consegna il giorno in cui avviene, non a fine mese. Chi riceve può essere il nome di un reparto o di un club se il nome di un bambino non è mio da pubblicare. La data è il giorno in cui il raccoglitore è uscito dalle mie mani. Se un posto mi chiede di aspettare, il raccoglitore resta sul mio scaffale e la lista non cambia. Preferisco essere lento che inventare un regalo che non è avvenuto. Un raccoglitore ancora in casa mia non è un raccoglitore che ho consegnato, per quanto sia sicuro del piano.",
          ],
        },
      ],
      faqs: [
        {
          q: "Accetta il bulk sfuso?",
          a: "Sì. Il bulk sfuso è benvenuto. Lo smisto nei raccoglitori. Non lo consegno così com'è, come regalo. Un raccoglitore finito è ciò che parte, e le carte in più restano per chiudere il successivo.",
        },
        {
          q: "Le pagine pubbliche mostrano un prezzo di vendita?",
          a: "No. La lista pubblica mostra chi ha ricevuto e una data. Non mostra mai un prezzo di vendita. Il raccoglitore è una lista finita che esce di casa, e questo è l'unico fatto che pubblico su di esso.",
        },
      ],
    },
    {
      slug: "sets-in-order",
      title: "I set di carte Pokémon in ordine",
      description: "Le serie e i set della lista pubblica, da Base nel 1999 fino alla serie più recente, con un collegamento a ogni pagina di set.",
      h1: "I set di carte Pokémon in ordine",
      lede: "Tengo i set nell'ordine che usa la lista pubblica di carte. Ci sono {sets} set in {seriesCount} serie, e {cards} carte dietro quei nomi. La lista sotto questa nota è quell'ordine, costruita dagli stessi dati delle liste di lavoro. Ogni riga porta alla pagina di set contro cui segno. La data sulla riga è la data di uscita di quei dati.",
      sections: [
        {
          id: "series-and-set",
          heading: "Una serie è uno scaffale, un set è un raccoglitore",
          paragraphs: [
            "Una serie è una sequenza di set che condividono un'epoca. Base, Jungle e Fossil stanno nella serie Base. Un set è una lista di carte con i propri numeri di collezione. Costruisco i raccoglitori al livello del set e sfoglio al livello della serie. Mescolare quelle due parole è il modo in cui una scatola finisce etichettata «Base» quando metà è Jungle. Il raccoglitore di Jungle ha allora un buco, e quello di Base ha un'intrusa.",
            "[[La guida dei raccoglitori|/guides/collecting-binders]] usa questa cronologia quando decido a quale lista appartiene una carta. [[Organizzare le pagine|/guides/organize-binder]] presume che la lista sia già stata scelta. La cronologia non mi dice quale carta è bella. Mi dice quale lista è aperta. Il bello può aspettare che il numero abbia trovato la sua tasca.",
          ],
        },
        {
          id: "how-to-read",
          heading: "Come leggo la lista",
          paragraphs: [
            "Ogni blocco qui sotto è una serie. Dentro, i set avanzano per data di uscita dei dati pubblici. La data è la data di uscita di quei dati, scritta nella lingua di questa pagina. Il conteggio è il numero di carte nella lista che pubblico, cioè nomi e numeri di collezione soltanto. Non aggiungo una supposizione per una carta che i dati non hanno. Un buco nei dati resta un buco, visibile.",
            "Le promo, le serie POP e le liste piccole raccolte sotto Other sono nei dati perché hanno anch'esse numeri di collezione. Non le nascondo per far sembrare pulita la storia. Una promo è ancora una lista. Se smisto del bulk e il numero corrisponde a una lista di promo, è il mucchio che raggiunge. Nasconderla nel set accanto farebbe mentire entrambi i conteggi.",
          ],
        },
        {
          id: "early",
          heading: "Da dove dico di cominciare a guardare",
          paragraphs: [
            "La [[serie Base|/collections/series/base]] è l'inizio della lista pubblicata. [[Base|/collections/set/base1]] in sé è il 9 gennaio 1999, 102 carte. [[La lista della generazione 1|/guides/gen-1-checklist]] spiega perché quelle 102 carte non sono la stessa cosa delle 151 specie originali. Mando la gente a entrambe le pagine apposta. La confusione è comune, e la correzione è semplicemente i due conteggi, uno accanto all'altro. Uno conta carte. L'altro conta specie.",
            "L'altro capo della lista si muove quando si muovono i dati. [[Mega Evolution|/collections/set/me1]] è nei dati attuali come serie propria. Lo collego perché la cronologia abbia una porta recente, non perché un set nuovo sia più importante di una comune vecchia. La [[pagina delle collezioni|/collections]] è la stessa lista con le barre di avanzamento. Questa nota è la lista con le date. Le barre dicono a che punto sono. Le date dicono quando è uscito il set. [[Mega Evolution—Delta Reign|/collections/set/delta-reign]] non è ancora in quella lista. Ho scritto una pagina per il raccoglitore prima che i numeri esistano, e qui non inserisco un conteggio indovinato.",
          ],
        },
        {
          id: "using-it",
          heading: "Usare la cronologia mentre si smista",
          paragraphs: [
            "Tengo questa pagina aperta quando una scatola attraversa più di un'epoca. Non memorizzo gli anni di uscita. Faccio clic sulla serie, poi sul set, poi confronto il numero di collezione. Se il nome corrisponde, la carta lascia la scatola. Se il nome non corrisponde, ho la lista sbagliata, e forzare la carta aprirebbe un buco in due raccoglitori insieme. Riposo la carta e apro l'altra pagina.",
            "I dati sono stati costruiti il {built}. Quando un set appena uscito manca qui, manca da quella costruzione, non si nasconde in un menu. Preferisco mostrare una lista datata a una promessa vaga che tutto fino a oggi sia incluso. Le pagine di set collegate più sotto sono le liste che segno davvero. Se una pagina non c'è, non la invento.",
            "Uso il conteggio di ogni riga come controllo mentre smisto. Se credo di aver finito un set e il raccoglitore ha meno carte del conteggio, ho saltato un numero, di solito un allenatore o un'energia verso la fine. Se ho più carte del conteggio, ho mescolato una promo o il set successivo. In entrambi i casi, la lista è la correzione. Non arrotondo un set a un'impressione di «circa cento». Il numero è il numero di tasche.",
          ],
        },
      ],
      faqs: [
        {
          q: "I set sono in ordine di uscita dentro ogni serie?",
          a: "Sì. Ogni blocco di serie elenca i suoi set per la data di uscita dei dati pubblici di carte. Le serie seguono l'ordine di quei dati. Smisto una scatola in quello stesso ordine perché i mucchi corrispondano alle pagine.",
        },
        {
          q: "Questa lista comprende dei prezzi?",
          a: "No. Comprende il nome del set, la data di uscita e il numero di carte della lista pubblica. Niente su questa pagina è un prezzo di vendita. Il conteggio è il numero di tasche di quel raccoglitore, e nient'altro.",
        },
      ],
    },
    {
      slug: "collecting-with-a-child",
      title: "Cominciare una collezione Pokémon con un bambino",
      description: "Come comincio un raccoglitore con un bambino: un lavoro, del bulk, le bustine, e il permesso di smettere.",
      h1: "Cominciare una collezione Pokémon con un bambino",
      lede: "Sono un padre a cui piace la lista, e mi sono seduto al tavolo con un bambino a cui piacciono i disegni. Il modo in cui comincio è più piccolo del mio scaffale. Un raccoglitore. Un lavoro. Del bulk. Chiudo la seduta mentre è ancora divertente. Il bambino sceglie la carta. Io tengo solo alla bustina e alla tasca numerata.",
      sections: [
        {
          id: "one-binder",
          heading: "Un raccoglitore, apposta",
          paragraphs: [
            "Non apro con tutta la storia del gioco di carte. [[La guida lunga|/guides/collecting-binders]] è per me, più tardi, se il bambino chiede da dove vengono gli altri raccoglitori. Alla prima seduta offro una sola scelta: un raccoglitore di set per una lista corta, o [[il raccoglitore della generazione 1|/collections/generation/1]] con una carta di ogni specie originale. [[La nota sulla generazione 1|/guides/gen-1-checklist]] è la versione di quella scelta che posso spiegare in un minuto. Centocinquantuno creature, una carta ciascuna, qualsiasi stampa.",
            "Due progetti insieme sono il modo in cui un bambino si ritrova con le ginocchia coperte di mucchi e nessuna pagina finita. L'ho fatto. La seconda seduta è peggio, perché il tavolo sembra un compito. Un raccoglitore vuol dire che la carta successiva ha una tasca ovvia. L'ovvio è una gentilezza. Tolgo l'altro progetto dal tavolo prima di sederci, per non dover dire di no a un mucchio che ho lasciato io in vista.",
          ],
        },
        {
          id: "their-choice",
          heading: "Lasciare che il bambino scelga la prima pagina",
          paragraphs: [
            "Mescolo un piccolo mucchio di bulk già in bustina e lascio che il bambino scelga la prima carta che entra. Se il raccoglitore è in ordine di Pokédex, la carta va comunque nella sua tasca numerata, non davanti. Lo spiego una volta, senza discorso. La tasca è il posto della creatura. Scegliere la carta è la parte divertente. Il numero è la promessa che la carta si potrà ritrovare. Una carta messa davanti «perché è bella» si perde la settimana dopo.",
            "Non correggo il gusto. Un Pikachu è un'ottima prima carta. Lo è anche una creatura che io trovo ordinaria. Il [[bulk|/guides/bulk-cards]] è il mucchio giusto per questo, perché ci sono copie abbastanza perché una scelta non sia preziosa. Un mucchio prezioso mi fa aleggiare sopra il tavolo. Aleggiare è il contrario di un sabato al tavolo della cucina. Resto seduto, tengo la tasca aperta, e lascio che la scelta avvenga.",
          ],
        },
        {
          id: "sleeves",
          heading: "La bustina, poi la pagina",
          paragraphs: [
            "Le [[bustine|/guides/protect-cards]] vanno sulla carta prima che delle mani piccole la vogliano bene. Lo mostro come un gesto, non come una lezione: carta dentro, bustina piatta, tasca aperta, carta dentro. I bambini sono bravi con i gesti. Si interessano meno alle mie opinioni sul posto dove tenere le carte. Tengo i bicchieri fuori dal tavolo e non racconto il motivo se non me lo chiedono. Una frase basta, e spesso nemmeno quella.",
            "Se una carta si piega, non ne faccio un evento morale. Metto in bustina un rimpiazzo dal bulk se ne ho uno, o lascio la riga vuota finché non ne ho uno. Una riga vuota è permessa. [[Un raccoglitore che consegno|/guides/donating-cards]] è un raccoglitore finito, e il raccoglitore del sabato di un bambino non deve diventarlo. Può restare un raccoglitore del sabato. Il vuoto non è un fallimento. È una tasca che aspetta.",
          ],
        },
        {
          id: "stop",
          heading: "Smettere mentre è ancora divertente",
          paragraphs: [
            "Chiudo la seduta quando il bambino è ancora disposto, non quando ho raggiunto un numero tondo. Venti minuti che finiscono con un raccoglitore chiuso torneranno. Un'ora che finisce con un sospiro, forse no. La [[pagina delle collezioni|/collections]] ricorderà le righe che ho segnato. Niente sullo schermo è più importante del bambino che voglia aprire il raccoglitore la volta dopo. Segno ciò che è davvero nelle tasche, poi chiudo.",
            "Non seguo il raccoglitore di un bambino come una gara contro il mio. Le pagine pubbliche di questo progetto sono le mie liste. La pagina di un bambino ha il diritto di restare incompiuta per sempre. Se più avanti entra nel passatempo lungo, le liste dei set e le pagine delle specie sono lì. Se non ci entra, il raccoglitore ha comunque fatto il suo lavoro: carte in ordine, bustine al loro posto, un pomeriggio che era suo.",
            "Le domande a cui rispondo davvero sono piccole. In quale tasca va questa. Se questo doppione può chiudere un buco. Se si può smettere. Sì, la tasca numerata. Sì, se la riga è vuota. Sì, si smette. Tengo per me le opinioni più grandi, salvo che il bambino le chieda. Una collezione cominciata così può restare minuscola ed essere comunque una collezione vera. Ha un ordine, una bustina, e una prossima riga vuota per il giorno in cui qualcuno avrà voglia di aprirla. Una carta che sembra falsa non entra finché ho un dubbio. [[Come riconosco un falso|/guides/spot-fakes]] è quel controllo, fatto a bassa voce, con un'altra carta del bulk offerta al suo posto.",
          ],
        },
      ],
      faqs: [
        {
          q: "Con quale raccoglitore dovrebbe cominciare un bambino?",
          a: "Ne offro uno: o una lista corta di un set, o la generazione 1 con una carta di ogni specie. Non faccio cominciare un bambino su tutti i set insieme. Una pagina finita vale più di cinque mucchi cominciati.",
        },
        {
          q: "Servono carte rare per il raccoglitore di un bambino?",
          a: "No. Le comuni del bulk chiudono le righe. Una carta rara è facoltativa, e non è il tema del primo pomeriggio. Il tema è una carta scelta, in bustina, e messa al suo posto.",
        },
      ],
    },
    spotFakesIt,
  ];
}
