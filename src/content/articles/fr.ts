import type { ArticleCopy } from "@/lib/articles";
import { spotFakesFr } from "./spot-fakes/fr";

export function frenchArticles(): ArticleCopy[] {
  return [
    {
      slug: "collecting-binders",
      title: "Collectionner les cartes Pokémon en classeurs",
      description: "Comment je collectionne les cartes Pokémon dans un classeur de série et un classeur Pokédex, et où vivent les listes.",
      h1: "Le guide pour collectionner les cartes Pokémon en classeurs",
      lede: "Je range les cartes Pokémon dans des classeurs, pas en pile sur une étagère. Un classeur suit une série. L'autre suit le Pokédex. Cette page est le plan. Les notes plus courtes répondent chacune à une question, dans l'ordre où je travaille vraiment : je choisis le classeur, je trie le vrac, puis je cherche le numéro quand une carte refuse de rester dans sa pile.",
      diagram: {
        kind: "binders",
        title: "Deux rangements de classeur",
        description: "Un classeur de série suit les numéros de collection. Un classeur de génération garde une carte de chaque espèce, dans l'ordre du Pokédex.",
        caption: "À gauche : une série, dans l'ordre des numéros. À droite : une espèce par poche, dans l'ordre du Pokédex.",
      },
      sections: [
        {
          id: "two-binders",
          heading: "Deux classeurs, deux travaux",
          paragraphs: [
            "Un classeur de série et un classeur de génération ne posent pas la même question. Le classeur de série demande si j'ai chaque carte de cette série, dans l'ordre du numéro de collection, sans rien sauter parce que la carte est ordinaire. Le classeur de génération demande si j'ai une carte de chaque espèce dans cette tranche du Pokédex. N'importe quel tirage compte, et n'importe quelle langue aussi. Quand je mélangeais les deux travaux dans un seul classeur, la commune absente disparaissait au milieu des belles cartes.",
            "Le détail du tri de tous les jours est dans [[comment je range un classeur|/guides/organize-binder]]. La version courte est celle que j'aurais voulu écrire plus tôt : choisir le travail avant d'acheter les pages. Une page à neuf pochettes est une grille. Elle ignore l'histoire dessinée sur la carte. Moi, je m'en occupe, donc je fixe l'ordre d'abord. Une poche vide a alors un sens. Ce n'est plus un espace que j'aurais oublié de remplir au hasard.",
          ],
        },
        {
          id: "set-binder",
          heading: "Un classeur de série suit la liste",
          paragraphs: [
            "La [[série de Base|/collections/set/base1]] reste l'exemple que j'ouvre pour expliquer ça. Elle est sortie le 9 janvier 1999, et la liste publique compte 102 cartes. La page du classeur suit cette liste : le numéro 1, puis le 2, puis le 3, Dresseurs et Énergies compris. Si la liste a une carte, le classeur a une poche. Je ne laisse pas un trou parce que la carte est commune, et je ne tire pas une holographique vers l'avant pour faire une jolie page.",
            "L'ordre des blocs et des séries est dans [[les séries de cartes Pokémon dans l'ordre|/guides/sets-in-order]]. Je m'en sers quand une boîte de vrac mélange les époques. Une carte Jungle n'entre pas dans le classeur de Base, même si le dessin a l'air de la même année. La page de la série est la liste. Je coche une ligne seulement quand la carte est vraiment dans la pochette, pas quand je l'ai vue passer dans une pile sur la table.",
            "Un troisième classeur suit un thème, pas une série et pas une case pour une seule espèce. [[Les classeurs à thème|/collections/themes]] rassemblent chaque tirage anglais d'une espèce, d'un artiste ou d'un type de carte. [[Toutes les cartes Pikachu|/collections/themes/pikachu]] est la liste que j'ouvre quand la pile est pleine de ce visage.",
          ],
        },
        {
          id: "dex-binder",
          heading: "Un classeur de génération suit le Pokédex",
          paragraphs: [
            "Un classeur de génération tient une carte de chaque espèce. La [[génération 1|/collections/generation/1]] est les 151 d'origine. Les générations 1 à 9 font {species} espèces. [[Comment je complète un classeur Pokédex|/guides/pokedex-binder]] est la note longue pour y arriver sans transformer le projet en chasse au tirage rare. [[La liste de la génération 1|/guides/gen-1-checklist]] reste avec les 151 premiers, parce que c'est le classeur que les gens ont en tête quand ils parlent des créatures d'origine.",
            "[[Pikachu|/pokedex/25]] montre pourquoi la règle sert. La page de l'espèce liste chaque tirage des données publiques, à travers beaucoup de séries. Le classeur de génération en veut un seul. Un Pikachu sorti du vrac ferme la poche. Une illustration rare plus récente la ferme aussi. Je ne garde pas chaque tirage dans ce classeur. Ce travail appartient au classeur de série, et seulement pour la série que je suis en train de construire. Le reste retourne dans la boîte, prêt pour une autre liste.",
          ],
        },
        {
          id: "bulk",
          heading: "Le vrac ferme les poches",
          paragraphs: [
            "La plupart des cartes qui terminent une ligne viennent du vrac. Je le dis avec affection. Le vrac est la pile ordinaire : communes, peu communes, doubles, et le Magicarpe qui revient encore. [[Ce que je fais du vrac|/guides/bulk-cards]] est la méthode de tri. [[Comment je lis une carte|/guides/read-a-card]] dit comment je trouve le numéro de collection et le symbole de série quand la pile mélange plusieurs époques.",
            "Je trie par série avant de trier par créature. Une carte qui correspond à une ligne ouverte d'un classeur de série y va. Un double qui correspond à une espèce encore vide peut passer dans le classeur de génération. Tout le reste reste dans la boîte de vrac jusqu'à ce qu'une liste le réclame, ou jusqu'à ce qu'un classeur fini soit prêt à quitter la maison. Le vrac n'est pas le rebut du projet. C'est la pile qui termine un classeur.",
          ],
        },
        {
          id: "tracker",
          heading: "Le suivi public est une liste, pas une boutique",
          paragraphs: [
            "La [[page d'accueil|/]] est le compte public : combien de cartes différentes sont notées, et quels classeurs ont bougé. La [[page des collections|/collections]] est la liste de travail. Elle regroupe les séries par bloc, relie chaque classeur de génération, et relie une page pour chaque espèce. Une barre remplie veut dire que j'ai noté la carte. Elle ne parle pas d'un prix de vente. Les pages publiques n'en montrent jamais un.",
            "Quand une ligne à l'écran et la carte dans le classeur se contredisent, le classeur gagne. Je n'appelle un classeur complet qu'après avoir tourné les pages de mes mains. L'écran sert à voir le trou avant que je l'oublie. Rien de plus. Un chiffre joli sur la page d'accueil ne remplace pas la pochette vide que je sentirais en feuilletant.",
          ],
        },
        {
          id: "care-and-kids",
          heading: "Protège-cartes, enfants, et un classeur qui part",
          paragraphs: [
            "Une carte qui vit dans un classeur reçoit un protège-cartes d'abord. [[Protéger les cartes|/guides/protect-cards]] parle des protège-cartes, des pages à neuf pochettes, des pages à quatre, et des endroits où je ne laisse pas un classeur. J'ai commencé avec une boîte en fer du supermarché. L'étagère humide m'a donné la leçon. Le protège-cartes est l'étape que je ne saute pas, même pour une commune qui traîne dans chaque boîte de vrac.",
            "[[Collectionner avec un enfant|/guides/collecting-with-a-child]] est la note que j'ouvre quand un enfant s'assoit à la table. Un classeur, un travail, et le droit d'arrêter. [[Donner un classeur fini|/guides/donating-cards]] décrit ce qui se passe quand un classeur est complet et que je le remets. Je remets un classeur fini, pas une poignée de cartes en trop. La liste publique note le destinataire et la date. Un projet à moitié fait reste ici.",
            "S'il fallait laisser une consigne sur un papier, ce serait celle-ci. Choisir le travail du classeur. Ouvrir la liste qui correspond. Glisser un protège-cartes sur la carte qui ferme un trou. Cocher la ligne seulement une fois la carte dans la pochette. S'arrêter quand la table devient un fouillis, et reprendre la fois suivante au même trou. Le reste de ces notes développe cette consigne pour la question qu'on me pose : la taille des pages, le vrac, les 151, le Pokédex au complet, le numéro imprimé sur la carte, le rangement, un enfant à table, ou un classeur qui quitte la maison.",
          ],
        },
      ],
      faqs: [
        {
          q: "Faut-il à la fois un classeur de série et un classeur de génération ?",
          a: "Non. Je me sers des deux parce qu'ils répondent à des questions différentes. Un seul classeur de série est une façon complète de commencer. Un classeur de génération est l'autre façon complète. L'erreur consiste à demander à un seul classeur de faire les deux travaux.",
        },
        {
          q: "Où sont les listes ?",
          a: "Chaque série a une liste de cartes, chaque génération a une liste, et chaque Pokémon a une page de ses tirages. La page des collections relie les trois. Je coche à partir de ces pages, après avoir mis la carte dans le classeur.",
        },
      ],
    },
    {
      slug: "organize-binder",
      title: "Comment ranger un classeur Pokémon",
      description: "Pages à neuf ou quatre pochettes, ordre des numéros de série et ordre du Pokédex, comme je trie vraiment un classeur.",
      h1: "Comment je range un classeur Pokémon",
      lede: "Je range le classeur avant de ranger les cartes. La taille des pages et l'ordre font tout le système. Le reste, c'est une carte qui trouve la poche que j'ai déjà préparée. Si je commence par admirer les dessins, la table se couvre de piles et aucune ligne ne se ferme.",
      diagram: {
        kind: "pockets",
        title: "Neuf pochettes et quatre pochettes",
        description: "Une page à neuf pochettes tient neuf cartes, en trois colonnes de trois. Une page à quatre pochettes tient quatre cartes plus grandes.",
        caption: "Neuf pochettes gardent une série compacte. Quatre pochettes rendent chaque carte plus facile à voir, et le classeur épaissit plus vite.",
      },
      sections: [
        {
          id: "nine-or-four",
          heading: "Neuf pochettes ou quatre pochettes",
          paragraphs: [
            "Une page à neuf pochettes, c'est trois colonnes de trois. Une carte sous protège-cartes y entre. Une série d'une centaine de cartes fait une douzaine de pages, un classeur que je peux tenir ouvert d'une main. C'est la page que j'utilise pour les classeurs de série. [[Paldean Fates|/collections/set/sv4pt5]] compte 245 cartes dans la liste publique, donc le classeur à neuf pochettes est déjà épais. Une page à quatre pochettes transformerait la même série en un classeur que je n'ai pas envie de porter.",
            "Une page à quatre pochettes, c'est deux colonnes de deux, et chaque carte y paraît plus grande. Je la choisis quand le but est de regarder, pas de cocher une longue liste. Un classeur de génération peut aller dans un sens ou dans l'autre. Neuf pochettes font tenir {species} espèces dans moins de classeurs. Quatre pochettes rendent plus facile à retrouver la page qu'un enfant aime, et elles alourdissent l'étagère. Je décide avant que la première carte entre. Déplacer une série finie d'une taille de page à l'autre est un après-midi que j'ai déjà passé une fois. Je ne compte pas le repasser. [[Le guide long|/guides/collecting-binders]] explique pourquoi les deux travaux de classeur restent séparés.",
          ],
        },
        {
          id: "set-order",
          heading: "L'ordre du numéro de série",
          paragraphs: [
            "L'ordre d'une série, c'est le numéro de collection imprimé sur la carte, rapproché de la liste. Le numéro 1 occupe la première poche, même quand ce n'est pas la créature que je préfère. Les Dresseurs et les Énergies restent là où la série les a mis. Je ne fabrique pas une page jolie d'holographiques au début. Cette page-là cache la commune qui manque, et le classeur a l'air fini alors qu'il ne l'est pas.",
            "[[Les séries dans l'ordre|/guides/sets-in-order]] me disent à quelle liste une carte appartient. Le symbole de série m'aide à confirmer. Le numéro est ce par quoi je trie. Si deux cartes portent le même nom et des numéros différents, ce sont deux lignes différentes. Je l'ai appris avec les promos, qui s'assoient souvent à côté d'une série principale et utilisent leur propre compte. Les forcer dans la liste d'à côté ouvre un trou dans les deux classeurs.",
          ],
        },
        {
          id: "dex-order",
          heading: "L'ordre du numéro de Pokédex",
          paragraphs: [
            "L'ordre du Pokédex est l'ordre des espèces. La [[génération 1|/collections/generation/1]] va de Bulbizarre à Mew, du 001 au 151. La poche ne demande pas de quelle série vient la carte. Une commune récente sous protège-cartes remplit le 001 aussi honnêtement qu'un vieux tirage. [[La note sur le classeur Pokédex|/guides/pokedex-binder]] explique pourquoi je m'arrête à une carte par espèce. [[La liste de la génération 1|/guides/gen-1-checklist]] est la même idée, réduite aux 151 premiers.",
            "J'écris le numéro de Pokédex sur une petite étiquette au coin de la page seulement quand la page ouvre une nouvelle centaine. Je n'étiquette pas chaque pochette. La liste sur la page des collections est l'index. Le classeur est la preuve. Si l'étiquette et la carte ne se parlent plus, je crois la carte que je tiens, puis je corrige l'étiquette.",
          ],
        },
        {
          id: "by-type",
          heading: "Trier par type, quand le classeur n'est pas une liste",
          paragraphs: [
            "Le type est le symbole en haut à droite d'une carte Pokémon. [[L'aide de la base de cartes|https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database]] le décrit ainsi : l'icône d'énergie pour Plante, Feu, Eau et le reste. Un enfant qui veut toutes les cartes Eau sur une page trie par type. Je m'en sers pour une pile de jeu sur la table. Je ne m'en sers pas pour ordonner un classeur de série. La liste est numérotée, et une page d'un seul type cache le numéro manquant.",
            "Les Dresseurs ne portent pas cette icône de type, et l'Énergie de base reste une pile à part. Cet après-midi-là, ces cartes ont leur tas, au lieu d'être forcées sous une créature. La génération est l'autre ordre, une tranche du Pokédex, et c'est déjà ce qu'est la [[génération 1|/collections/generation/1]]. Série, numéro, type et génération sont quatre questions. J'en prends une par classeur. [[Comment je lis le symbole|/guides/read-a-card]] montre où il se trouve avant que je fasse confiance au tas.",
          ],
        },
        {
          id: "marking-a-line",
          heading: "Comment je coche une ligne",
          paragraphs: [
            "La [[page des collections|/collections]] montre une ligne comme remplie quand j'ai noté la carte. Noter n'est pas la même chose que jeter un œil à une pile. Je mets la carte dans le protège-cartes, je glisse le protège-cartes dans la pochette, et ensuite seulement je coche. Si je coche d'abord, le suivi ment et le classeur garde un trou. Ce trou ressort des semaines plus tard, quand je croyais la série finie.",
            "[[Les protège-cartes et les pages|/guides/protect-cards]] viennent avant la coche, pas après. Une carte usée à blanc dans une pochette est une carte que je dois remplacer, et la ligne n'était pas vraiment faite. Quand l'écran et le classeur ne sont pas d'accord, je tourne les pages. Le classeur gagne.",
            "Une soirée concrète ressemble à ça. Je choisis un classeur et je laisse l'autre fermé. J'aligne la pile correspondante dans l'ordre des numéros sur la table, neuf cartes par rangée si j'utilise des pages à neuf pochettes. Je protège chaque carte, je la glisse, et seulement alors je regarde la liste. Les cartes qui n'appartiennent pas au classeur du soir retournent dans leur boîte avant que je commence, pour ne pas devenir un second projet au milieu de la page. Une page finie et rangée vaut mieux que trois piles admirées.",
          ],
        },
      ],
      faqs: [
        {
          q: "Un classeur de génération doit-il utiliser des pages à neuf pochettes ?",
          a: "J'utilise des pages à neuf pochettes quand le but est de finir la tranche. J'utilise des pages à quatre pochettes quand le but est de regarder moins de cartes, plus grandes. Les deux sont de vrais classeurs. Ils ne se mélangent pas dans le même volume.",
        },
        {
          q: "Est-ce que je trie une série par type ou par rareté ?",
          a: "Non. Je trie une série par numéro de collection. Le type et la rareté changent l'allure d'une page et cachent les cartes qui manquent. Le numéro, lui, dit exactement quelle poche est encore vide.",
        },
      ],
    },
    {
      slug: "bulk-cards",
      title: "Que faire du vrac de cartes Pokémon",
      description: "Le vrac termine les classeurs. Je trie par série, puis par la ligne d'espèce vide, et je garde le reste.",
      h1: "Que faire du vrac de cartes Pokémon",
      lede: "Le vrac est la pile qui termine un classeur. Je parle de la pile ordinaire : les communes, les doubles, et la carte qui sort de chaque boîte en fer. Une boîte du supermarché est souvent le point de départ. Je trie par série, je laisse les cartes en trop fermer les lignes d'espèce encore vides, et je garde ce qui reste au lieu de traiter ça comme du déchet.",
      sections: [
        {
          id: "why-bulk",
          heading: "Pourquoi je traite le vrac comme la collection",
          paragraphs: [
            "Une holographique fait une belle page. Elle ne fait pas un système. Le système, c'est la ligne vide, et les lignes vides sont surtout des communes. [[Le guide des classeurs|/guides/collecting-binders]] le dit dans la version longue. Voici la version courte que j'utilise à table : si la carte ferme un trou, c'est la carte que je voulais, même quand le dessin est le Magicarpe que je reconnais les yeux fermés.",
            "J'ai arrêté de m'excuser pour le vrac le jour où un classeur de génération a avancé plus vite grâce à une boîte mélangée que grâce à tout ce que j'avais mis de côté comme spécial. Les cartes spéciales peuvent attendre dans un protège-cartes. La liste ne les attend pas. [[Collectionner avec un enfant|/guides/collecting-with-a-child]] se sert de la même pile, parce qu'un enfant peut tenir une commune, choisir une pochette, et voir la ligne se fermer. Rien dans ce geste ne demande une carte rare.",
            "Certaines listes à thème sont presque entièrement ce tas. [[Les cartes en argile de Yuka Morii|/collections/themes/yuka-morii]] sont des communes, et là le vrac est de l'or. [[Les classeurs à thème|/collections/themes]] est l'endroit où ces listes vivent.",
          ],
        },
        {
          id: "sort-by-set",
          heading: "Trier par série d'abord",
          paragraphs: [
            "Je renverse la boîte seulement tant que la table reste traitable. Ensuite je trie par série, pas par créature et pas par brillance. [[Comment je lis le numéro et le symbole|/guides/read-a-card]] est la partie que je fais dans les mains : trouver le numéro de collection, confirmer la série, faire une pile. Une pile pour Base, une pile pour une série récente, une pile que je ne sais pas encore placer.",
            "Chaque pile va vers la page de la série sur la [[page des collections|/collections]]. La page est la liste de cartes. Si la ligne est ouverte, la carte entre dans ce classeur. Si la ligne est déjà remplie, la carte est un double et elle reste dans le vrac. Je ne sors pas les doubles pour les admirer tant que les lignes ouvertes de cette pile ne sont pas faites. L'admiration est la raison pour laquelle une boîte à moitié triée dure un mois. Je la remets à plus tard, et le trou reste ouvert.",
          ],
        },
        {
          id: "species-lines",
          heading: "Puis la ligne d'espèce vide",
          paragraphs: [
            "Un double pour une série peut encore être le premier exemplaire de cette espèce dans un classeur de génération. [[Le classeur Pokédex|/guides/pokedex-binder]] n'en demande qu'un. [[Magicarpe|/pokedex/129]] est l'exemple auquel je me fie, parce que le vrac en propose un autre sans arrêt. Si le 129 est vide, le Magicarpe suivant quitte la boîte et ferme la poche. Si le 129 est rempli, la carte retourne dans le vrac. Je ne négocie pas avec une troisième copie.",
            "N'importe quelle langue compte pour une ligne d'espèce. Une carte imprimée avec un autre nom montre quand même la même espèce sur la page de l'espèce, parce que la page suit le numéro du Pokédex national. Je vérifie le numéro quand le nom sur la carte n'est pas le nom anglais que j'ai en mémoire. Le dessin aide, le numéro tranche.",
          ],
        },
        {
          id: "extras",
          heading: "Ce qui arrive aux cartes en trop",
          paragraphs: [
            "Les cartes en trop restent dans une boîte étiquetée au nom de la série, ou dans une seule boîte mélangée quand la pile est petite. Ce n'est pas une poubelle. Le classeur suivant a souvent besoin de la carte que j'étais prêt à laisser partir. Je les garde au sec, dans un protège-cartes si le coin est déjà mou, et loin du sol.",
            "Quand un classeur est fini, l'histoire change. [[Un classeur fini peut partir|/guides/donating-cards]] vers un enfant. Les cartes en trop, elles, ne partent pas avec lui. Elles restent et ferment le classeur d'après. Cette séparation garde le cadeau complet et garde la liste honnête. Une poignée de doubles à côté d'un classeur fini ressemble à de la générosité et arrive comme un travail à finir.",
            "La boîte elle-même reçoit une étiquette ennuyeuse : le nom de la série, ou « mélange » si je ne l'ai pas encore séparée. Je n'étiquette pas une boîte avec une supposition sur ce que les cartes pourraient rapporter à la vente. Je n'ai pas une boîte pour les « bonnes » cartes et un bac pour le « rebut ». Cette coupure fait disparaître les communes et laisse les trous ouverts. Une fois par mois, je reprends la boîte mélangée, je refais le tri par série, et je la réduis. Le but est une pile de questions plus petite, pas une vitrine plus jolie. Une carte à laquelle je ne fais pas confiance ne ferme pas une ligne. [[Repérer une contrefaçon|/guides/spot-fakes]] est une note à part. La boîte de vrac est l'endroit des cartes ordinaires et vraies, et ce sont celles-là que je veux.",
          ],
        },
      ],
      faqs: [
        {
          q: "Faut-il jeter les communes en double ?",
          a: "Je ne le fais pas. Un double dans une série est souvent l'espèce qui manque dans un autre classeur. Je les range par série jusqu'à ce qu'une liste les demande. Le classeur suivant est d'habitude plus proche qu'une nouvelle pile de boosters.",
        },
        {
          q: "Est-ce que je trie le vrac par rareté d'abord ?",
          a: "Non. Les marques de rareté ont changé au fil des années, et elles ne me disent pas quelle ligne est vide. Le numéro de collection le dit. Je peux trier une boîte entière sans décider si une marque veut dire quelque chose.",
        },
      ],
    },
    {
      slug: "pokedex-binder",
      title: "Comment compléter un classeur Pokédex",
      description: "Une carte de chaque espèce, du 001 jusqu'à la fin de la génération 9, remplie à partir du vrac.",
      h1: "Comment je complète un classeur Pokédex",
      lede: "Un classeur Pokédex, c'est une carte de chaque espèce. Les générations 1 à 9 font {species} espèces. Je le remplis à partir du vrac, dans l'ordre du Pokédex, et je ne cours pas après un tirage que la liste ne demande pas. Ce que j'y mets, c'est le vrac que j'ai déjà, plus un protège-cartes et une pochette pour chaque carte qui ferme un trou.",
      sections: [
        {
          id: "one-card",
          heading: "Une carte de chaque espèce",
          paragraphs: [
            "La règle est petite et elle me sauve. Une carte. N'importe quelle série. N'importe quelle langue. N'importe quelle rareté. [[Le guide long des classeurs|/guides/collecting-binders]] sépare ce travail du classeur de série, où chaque carte de la liste a une poche. Ici, la créature est la poche. Un second Pikachu est un double, même quand le dessin est nouveau. Le nouveau dessin peut être superbe. Il ne crée pas une seconde ligne.",
            "J'ai pris l'habitude avec [[Bulbizarre|/pokedex/1]]. La page de l'espèce liste les tirages. Le classeur en a besoin d'un. J'ai mis le premier Bulbizarre déjà sous protège-cartes que je possédais dans le 001, et j'ai arrêté de chercher un meilleur 001. Le meilleur est un autre passe-temps. Celui-ci est la tranche, du début jusqu'au bout, sans négocier chaque poche.",
            "Une page d'espèce liste chaque tirage, et le classeur Pokédex n'a toujours besoin que d'une seule carte. [[Toutes les cartes Pikachu|/collections/themes/pikachu]] garde chaque tirage de Pikachu comme sa propre liste. [[Les classeurs à thème|/collections/themes]] reste à côté des pages de génération quand je veux voir toute la série d'un visage.",
          ],
        },
        {
          id: "the-range",
          heading: "Les {species}, génération par génération",
          paragraphs: [
            "Je n'ouvre pas un classeur géant pour dire que c'est fait. Je construis par génération, parce que la [[page des collections|/collections]] est déjà découpée ainsi, et parce qu'une génération est un livre que je peux finir. La génération 1 compte 151. La génération 2 est les 100 suivantes. Les générations d'après sont sur la même page, chacune avec sa liste et son propre compte. Je laisse ces comptes sur la page. Je ne les récite pas.",
            "La [[génération 1|/collections/generation/1]] est celle que je dis aux gens de finir d'abord, et [[la note sur la génération 1|/guides/gen-1-checklist]] reste à côté. Les créatures sont familières, les boîtes de vrac en sont pleines, et 151 est un nombre que l'on peut garder en tête. Après ça, la génération 5 est la longue et la génération 6 est la courte. Je laisse la liste le dire. Je ne mémorise pas les comptes. Une génération finie se ferme, et la suivante s'ouvre seulement alors.",
          ],
        },
        {
          id: "from-bulk",
          heading: "Le remplir à partir du vrac",
          paragraphs: [
            "Le [[vrac|/guides/bulk-cards]] est la réserve. J'y tiens. Une illustration rare est la bienvenue quand c'est la carte que j'ai déjà. Ce n'est pas une condition. Attendre un tirage préféré, c'est comme ça qu'un classeur Pokédex reste bloqué sur les mêmes vingt trous pendant un an. La liste, pendant ce temps, n'a pas bougé.",
            "Le passage pratique est monotone, et il marche. Je prends une seule liste de génération. Je parcours la boîte de vrac avec les trous en tête. Je mets un protège-cartes sur la carte qui ferme un trou. Je la glisse dans la pochette. Je coche la ligne. Puis j'arrête, même si la boîte a encore l'air intéressante. [[Comment je range les pages|/guides/organize-binder]] est le choix de la taille de page. Les neuf pochettes sont ce que j'utilise quand le but est de voir la tranche terminée. Quatre pochettes viendraient plus tard, si le but devenait de regarder, pas de finir.",
          ],
        },
        {
          id: "when-it-is-done",
          heading: "Quand je dis que c'est fini",
          paragraphs: [
            "Une génération est finie quand chaque ligne d'espèce a une carte dans le classeur et que j'ai tourné les pages pour le prouver. L'écran peut dire que les lignes sont remplies. Je tourne les pages quand même. Une carte notée puis laissée dans une boîte à chaussures n'est pas dans le classeur. La coche sans la pochette est une histoire que je me raconte.",
            "Je ne « améliore » pas une génération finie pour le sport. Si une carte plus tardive me fait sourire, elle peut remplacer celle de la pochette, et l'ancienne retourne dans le vrac. La ligne reste remplie dans les deux cas. Le but n'a jamais été l'exemplaire le plus impressionnant. Le but était la créature, présente, dans l'ordre, là où quelqu'un peut feuilleter jusqu'à elle.",
            "Pour ce classeur, compter veut dire que je dépense de l'attention au lieu de chasser un exemplaire précis. Je possède déjà la plupart des cartes nécessaires dans du vrac non trié. Le coût qui compte est le protège-cartes et la page, que j'achète en paquets ordinaires et que j'utilise sur les communes sans les réserver. Je garde une liste au crayon des trous seulement quand je suis loin de l'écran. À la maison, la page de la génération est la liste. Si un trou reste vide pendant des mois, c'est que cette espèce est rare dans mes boîtes, pas que j'attends une image plus rare d'une espèce que j'aurais déjà pu ranger.",
          ],
        },
      ],
      faqs: [
        {
          q: "Le classeur Pokédex doit-il contenir chaque tirage d'un Pokémon ?",
          a: "Non. Une carte de chaque espèce est toute la règle. Chaque tirage appartient à la page de l'espèce, pas à ce classeur. Un second dessin, même superbe, retourne dans le vrac ou dans le classeur de sa série.",
        },
        {
          q: "Quelle génération finir en premier ?",
          a: "Je commence par la génération 1, les 151 d'origine. Les cartes sont courantes dans le vrac, et la liste est assez courte pour être finie. Ensuite je prends la génération suivante sur la page, pas un trou au hasard au milieu du Pokédex.",
        },
      ],
    },
    {
      slug: "gen-1-checklist",
      title: "Liste génération 1 : les 151 Pokémon",
      description: "Comment je collectionne les 151 Pokémon d'origine dans un classeur, avec la liste de génération et la liste de Base.",
      h1: "Liste génération 1 : les 151 Pokémon d'origine",
      lede: "La génération 1, ce sont 151 espèces, du 001 Bulbizarre au 151 Mew. Je les collectionne dans un seul classeur : une carte de chaque, depuis n'importe quelle série. La liste est la page de la génération, et la série de Base est l'endroit où beaucoup de noms familiers commencent. Ces deux listes n'ont pas le même compte. Les garder séparées est tout le tour.",
      sections: [
        {
          id: "the-151",
          heading: "Ce que veulent dire les 151",
          paragraphs: [
            "Les 151 sont une tranche du Pokédex, pas un seul produit. La [[génération 1|/collections/generation/1]] liste chaque espèce de cette tranche, avec quelques-unes des séries où chacune apparaît. Cette page est la liste que j'utilise. Ce n'est pas le même objet que la série de Base, qui compte 102 cartes et comprend des Dresseurs et des Énergies. Les gens mélangent ces deux comptes. Je les garde à part pour que le classeur ait le bon nombre de poches. Le set de 2023 qui s'appelle [[151|/collections/set/sv3pt5]] est une autre liste.",
            "[[La note sur le classeur Pokédex|/guides/pokedex-binder]] est la même méthode pour les {species} espèces. Cette note-ci reste avec le premier livre, parce que les 151 d'origine sont le classeur dont on me parle le plus souvent. [[Le guide long|/guides/collecting-binders]] explique pourquoi il s'agit d'un classeur de génération et non d'un classeur de série. Les deux peuvent contenir un Pikachu. Ils ne comptent pas la même chose.",
          ],
        },
        {
          id: "where-they-appear",
          heading: "Où apparaissent les 151 d'origine",
          paragraphs: [
            "Une espèce de Kanto peut apparaître à l'époque de Base et de nouveau dans une série sortie des décennies plus tard. [[Pikachu|/pokedex/25]] est l'exemple évident. [[Dracaufeu|/pokedex/6]] est l'autre. La page de l'espèce liste les tirages. N'importe lequel ferme la poche. Je n'ai pas besoin de la copie la plus ancienne, ni de la plus récente. J'ai besoin d'une carte de cette espèce, sous protège-cartes, à sa place.",
            "[[Les séries dans l'ordre|/guides/sets-in-order]] aident quand je veux les anciennes exprès. Le [[bloc de Base|/collections/series/base]] rassemble Base, Jungle, Fossil et les séries autour. Si je construis un classeur de série pour Base, c'est un autre projet, avec 102 poches. Les cartes de ce projet peuvent aussi fermer une poche de génération, une seule fois, si la ligne d'espèce est vide. Je ne démonte pas un classeur de série pour décorer le classeur de génération. Le double s'en charge. Le classeur de série reste entier.",
          ],
        },
        {
          id: "base-set",
          heading: "La série de Base est une liste, pas les 151",
          paragraphs: [
            "[[Base|/collections/set/base1]] compte 102 cartes. Une partie des 151 d'origine n'est pas dans cette liste. Les séries suivantes de la même époque en ajoutent d'autres. Un classeur de génération n'attend pas ces vieilles séries. Une commune récente d'une espèce manquante est une ligne finie. L'âge de la carte n'est pas une condition de la liste.",
            "J'aime encore ouvrir la liste de Base, parce que les numéros de collection sont la façon dont j'ai appris à lire une carte. L'ordre des numéros, puis le nom, puis le symbole de série comme vérification. Quand une boîte de vrac prétend contenir « tous les originaux », je ne crois pas l'annonce. Je crois la page de la génération et les cartes dans ma main. Une boîte peut être de bonne foi et quand même manquer vingt espèces.",
          ],
        },
        {
          id: "one-line",
          heading: "Une ligne à la fois",
          paragraphs: [
            "Je descends la liste depuis le 001 seulement quand je suis d'humeur patiente. Plus souvent, je prends la prochaine ligne vide que la boîte peut fermer. L'ordre dans le classeur reste numérique, même quand l'ordre où je trouve les cartes ne l'est pas. La poche 050 ne passe pas devant parce que je l'ai trouvée un mardi. Le mardi n'est pas un argument de rangement.",
            "Une ligne est faite quand la carte est sous protège-cartes, dans la pochette, et notée. Ensuite je regarde le trou suivant. Cent cinquante et un, ce sont beaucoup d'après-midi, et ce n'est pas non plus un mystère. Le vrac de presque n'importe quelle époque contient des créatures de Kanto. Le travail est d'associer, pas de souhaiter.",
            "Je garde la page de la génération ouverte à côté de la boîte et je ne coche rien dans ma tête. Les créatures que je crois posséder ne sont pas toujours celles qui sont dans le classeur. Mew et les lignées de départ sont celles que les gens supposent déjà faites. Je les vérifie quand même. Un classeur auquel il manque le 001 parce que le Bulbizarre est encore sans protège-cartes dans une boîte en fer n'est pas un 151 fini, même si le reste des pages a l'air plein. Les dix derniers trous prennent d'habitude plus de temps que les cinquante premiers, et c'est normal. Ce sont les espèces qui manquent dans mes boîtes, alors je les laisse vides plutôt que d'inventer une carte de remplacement.",
          ],
        },
      ],
      faqs: [
        {
          q: "La série de Base est-elle la même chose que les 151 ?",
          a: "Non. Base est une série, avec 102 cartes dans la liste publique. Les 151 sont chaque espèce de Bulbizarre à Mew, depuis n'importe quelle série. Je garde les deux pages sous la main pour que les comptes ne se mélangent pas.",
        },
        {
          q: "Faut-il une carte de première édition pour le classeur de la génération 1 ?",
          a: "Non. N'importe quel tirage de cette espèce ferme la poche. Une première édition appartient à un classeur de série si la liste de cette série l'inclut. Le classeur de génération ne la réclame pas.",
        },
      ],
    },
    {
      slug: "read-a-card",
      title: "Lire le numéro et le symbole d'une carte Pokémon",
      description: "Comment je trouve le numéro de collection, le symbole de série et la marque de rareté pour trier une pile de vrac.",
      h1: "Comment je lis une carte Pokémon",
      lede: "Je lis une carte dans le même ordre à chaque fois : le nom, le numéro de collection, le symbole de série, puis la marque de rareté si j'en ai encore besoin. Cet ordre transforme une pile de vrac mélangée en piles que je peux ranger. Le numéro correspond à la liste de la série. Le symbole empêche deux époques de finir dans la même pile.",
      diagram: {
        kind: "card",
        title: "Où je regarde sur une carte",
        description: "Le contour d'une carte simple, avec le nom, le numéro de collection, le symbole de série et la marque de rareté. Pas d'illustration officielle.",
        caption: "Je rapproche le numéro de collection de la liste de la série. Le symbole et la marque de rareté servent seulement à confirmer la série.",
      },
      sections: [
        {
          id: "the-number",
          heading: "Le numéro de collection est la clé de tri",
          paragraphs: [
            "Le numéro de collection est la fraction ou la paire imprimée sur la carte, comme 4/102. Le premier nombre est la place de la carte dans cette série. Le second est le nombre de cartes que la série a comptées dans cette numérotation. [[Base|/collections/set/base1]] est la série avec laquelle j'explique ça, parce que 102 est le compte de la liste que je publie à partir des données publiques. Si la carte dit 4 et que la carte 4 de la liste porte le même nom, j'ai une correspondance.",
            "Les promos et les séries spéciales utilisent parfois une lettre, un total différent, ou un numéro qui ne ressemble pas à la série principale d'à côté. Je ne les force pas dans l'ordre de la série principale. Je cherche la liste qui utilise cette numérotation. [[La chronologie des séries|/guides/sets-in-order]] est la façon dont je me rappelle que les promos s'assoient à côté d'une époque sans être la liste principale de cette époque. Une lettre au lieu d'une fraction est déjà un signal.",
          ],
        },
        {
          id: "the-symbol",
          heading: "Le symbole de série confirme la pile",
          paragraphs: [
            "Le symbole de série est la petite marque, d'habitude le long du bord droit de l'image ou juste en dessous, selon l'époque. Il change avec chaque série. Je n'essaie pas de mémoriser toute l'histoire des marques. Je me sers du symbole pour empêcher deux piles de fusionner quand les numéros pourraient appartenir à plus d'une liste. Deux cartes peuvent dire 12 et venir de deux mondes différents.",
            "Quand le symbole et le numéro contredisent le nom que j'attendais, la carte dit vrai et ma mémoire non. Je cherche le numéro sur la page de la série. [[Pikachu|/pokedex/25]] rappelle bien qu'un seul nom peut vivre dans beaucoup de séries, chacune avec son propre numéro. Le nom seul n'est pas une clé de tri. Il est un confort, pas un classement.",
          ],
        },
        {
          id: "rarity",
          heading: "Les marques de rareté trient mal",
          paragraphs: [
            "Un cercle, un losange et une étoile ont tous été imprimés sur des cartes, et le sens a bougé à mesure que le jeu ajoutait des raretés. Je ne tiens pas un tableau privé de ce que chaque marque voulait dire chaque année. Le tableau serait plus long que le tri, et il ne me dirait toujours pas quelle ligne de liste est vide. Je laisse ce travail à ceux qui écrivent l'histoire des symboles.",
            "Je jette un œil à la marque seulement pour séparer une pile en « facile à protéger » et « je regarderai deux fois avant de la mettre dans une pochette ». C'est un confort, pas un catalogage. [[Trier le vrac|/guides/bulk-cards]] reste avec le numéro. La rareté est l'allure d'une page. Le numéro est la façon dont un classeur se termine. Une étoile ne ferme pas une ligne à elle seule.",
          ],
        },
        {
          id: "regulation",
          heading: "La marque de régulation est une lettre de format",
          paragraphs: [
            "Sur les cartes imprimées à partir de 2020, Play! Pokémon pose une marque de régulation : une lettre en bas à gauche. Les [[règles de Play! Pokémon|https://play.pokemon.com/en-us/resources/rules/]] disent que le format Standard tourne selon cette lettre. Les cartes plus anciennes n'ont pas de lettre. Une carte avec une lettre ancienne, ou sans lettre, peut rester légale si la même carte a été réimprimée avec une lettre actuelle. Les lettres permises changent. Je n'apprends pas la liste du moment dans un classeur, et je ne trie pas selon la lettre.",
            "La lettre n'est pas le numéro de collection, et ce n'est pas le symbole de rareté. [[L'aide de la base de cartes|https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database]] place le symbole de rareté dans le coin inférieur droit, avec l'icône d'extension. Je regarde la lettre seulement quand quelqu'un demande si une carte peut être jouée dans un événement actuel. Pour le classeur, le numéro décide encore de la poche. Une carte à laquelle je ne fais pas confiance n'atteint pas cette poche. C'est [[comment je repère une contrefaçon|/guides/spot-fakes]].",
          ],
        },
        {
          id: "in-practice",
          heading: "Un passage dans une pile mélangée",
          paragraphs: [
            "Je prends une carte. Je lis le nom à voix haute si la pile est en désordre, parce que mes yeux sautent quand je vais trop vite. Je trouve le numéro de collection. Je vérifie le symbole contre la pile à laquelle je crois qu'elle appartient. Je la pose sur cette pile. Si je ne peux pas la placer en quelques secondes, elle va dans une pile de questions, pas de retour dans le mélange. Remettre une carte douteuse dans le tas, c'est recommencer la même hésitation.",
            "La pile de questions reçoit un passage plus calme avec la [[page des collections|/collections]] ouverte. Je remplis d'abord les lignes décrites dans [[le guide des classeurs|/guides/collecting-binders]] : celles d'une série, puis celles d'une espèce. Une carte que je n'arrive pas à identifier reçoit quand même un protège-cartes si le coin est mou. L'identification peut attendre une heure. Un coin plié empire pendant que j'hésite.",
            "La langue imprimée sur la carte peut ralentir le passage, et ce n'est pas grave. Le nom anglais du jeu de données est celui qu'utilise la liste de la série. Une carte imprimée dans une autre langue a toujours un numéro de collection et un symbole de série. Je rapproche ces deux-là, puis je lis la page de l'espèce si je veux le nom local. Je ne construis pas un classeur séparé par langue. Une liste de série, un ordre de numéros. Le nom sur la carte a le droit de différer du nom à l'écran.",
          ],
        },
      ],
      faqs: [
        {
          q: "Et si la carte n'a pas de fraction ?",
          a: "Je la traite comme une promo ou un tirage spécial, et je cherche une liste avec ce genre de numéro. Je n'invente pas une place pour elle dans la série principale. La pile de questions est l'endroit où elle attend, le temps d'ouvrir la bonne page.",
        },
        {
          q: "Faut-il trier selon le symbole de rareté ?",
          a: "Je ne le fais pas. Le symbole a changé avec le temps. Le numéro de collection correspond à la liste de cartes. Une brillance sur la carte peut attendre que la pile soit déjà dans la bonne série.",
        },
      ],
    },
    {
      slug: "protect-cards",
      title: "Protéger les cartes Pokémon sans se compliquer",
      description: "Protège-cartes, pages de classeur et rangement ordinaire pour une collection qui s'ouvre, y compris le classeur d'un enfant.",
      h1: "Protéger les cartes Pokémon sans en faire une affaire",
      lede: "Je protège les cartes de la façon la moins chère qui me laisse encore ouvrir le classeur. Un protège-cartes souple, une page à pochettes, et une étagère qui reste sèche. C'est tout le plan. Je l'applique aux communes, parce que la commune est souvent la carte qui ferme une ligne. Un classeur que je n'ouvre pas n'est pas une collection que je garde.",
      sections: [
        {
          id: "sleeve-first",
          heading: "Un protège-cartes avant une pochette",
          paragraphs: [
            "Le protège-cartes est une poche fine et claire pour une seule carte. Je le mets avant que la carte voie une page de classeur. Les pages frottent. Les protège-cartes prennent ce frottement à leur place. J'achète les modèles simples en pile et je ne les réserve pas aux holographiques. Une commune au coin blanchi est encore un trou dans une liste, et la remplacer est un pire après-midi que de la protéger maintenant.",
            "Je presse le protège-cartes pour que la carte reste plate, et je ne le lèche pas, je ne le scotche pas, et je ne double pas une commune de vrac comme un rite. Le double protège-cartes est pour une carte qui voyage. La carte du quotidien en reçoit un seul. [[Le guide des classeurs|/guides/collecting-binders]] suppose que cette étape a déjà eu lieu. Une carte notée avec une surface nue est une carte que j'ai notée trop tôt. La coche peut attendre la protection.",
          ],
        },
        {
          id: "pages",
          heading: "Des pages de classeur qui acceptent une carte protégée",
          paragraphs: [
            "[[Les pages à neuf et à quatre pochettes|/guides/organize-binder]] sont le choix. La pochette doit accepter un protège-cartes sans cambrer la carte. Si je dois forcer, la page est mauvaise. Je remplace une pochette déchirée au lieu d'espérer que la déchirure reste sage. Une pochette déchirée mange les coins. Un coin mangé devient ensuite le trou que je croyais déjà fermé.",
            "Les classeurs à anneaux vont bien quand les anneaux n'appuient pas sur les cartes. J'empêche les anneaux de peser sur une page en ne surchargeant pas le classeur. Un anneau en D qui se ferme nettement est plus doux qu'un classeur bourré jusqu'à ce que les plats se déforment. Je préfère commencer un second classeur que plier la dernière page du premier. La seconde couverture coûte moins qu'une page gondolée.",
          ],
        },
        {
          id: "storage",
          heading: "Où vivent les classeurs",
          paragraphs: [
            "Debout sur une étagère, ou à plat si le classeur est mince, loin d'une fenêtre et loin d'un mur extérieur humide. Je ne range pas les classeurs dans un carton de cave, un grenier chaud, ou le coffre d'une voiture. La chaleur recourbe un protège-cartes. L'humidité tache une page. Le soleil pâlit l'encre. Rien de tout ça ne se voit le jour où je le fais. Ça se voit quand j'ouvre le classeur un été plus tard.",
            "Le vrac qui n'est pas dans un classeur vit dans une boîte sèche, empilé pour que les cartes ne soient pas pliées par un objet plus lourd. Je garde la nourriture et les verres hors de cette table. Ça a l'air pointilleux jusqu'au moment où du jus d'orange est à l'intérieur d'un protège-cartes. La [[page des collections|/collections]] peut être reconstruit à partir des cartes. Une pile collée, non. Je préfère une boîte ennuyeuse et sèche à une pile que je devrai décoller.",
          ],
        },
        {
          id: "toploader",
          heading: "Un toploader sert au trajet",
          paragraphs: [
            "Un toploader est une pochette de plastique rigide. J'en prends un quand une carte quitte la maison : un classeur en route vers un enfant, ou une carte seule dans un colis. Il est plus épais qu'une page de classeur ne le souhaite, donc il reste hors de la page à neuf poches. À la maison, la carte vit dans une pochette souple, dans la poche. Un étui dur sur chaque commune donnerait un classeur que je n'ouvre pas, et l'ouvrir est le but.",
            "Je ne scotche pas une carte dans un toploader. Si je n'en ai pas, la pochette souple et une boîte plate battent encore un coin plié. [[Le guide long|/guides/collecting-binders]] suppose déjà la pochette souple. La rigide est l'exception, pour le voyage, pas pour la page de tous les jours.",
          ],
        },
        {
          id: "kids",
          heading: "La collection d'un enfant",
          paragraphs: [
            "[[Un classeur avec un enfant|/guides/collecting-with-a-child]] commence par des protège-cartes et un classeur que l'enfant peut ouvrir, pas par un étui rigide pour chaque commune. Je veux que l'enfant tourne la page. Une carte qui n'est jamais ouverte peut rester parfaite et aussi cesser de faire partie de l'après-midi. Les protège-cartes sont le compromis auquel je me fie. Ils encaissent les doigts sans transformer le classeur en vitrine fermée.",
            "Quand un classeur fini [[part pour un enfant|/guides/donating-cards]], il part protégé, dans des pages, avec des anneaux qui fonctionnent. Je ne remets pas des cartes en vrac en appelant ça le même cadeau. Le protège-cartes fait partie du classeur. C'est aussi la partie qui survit à être un peu malmenée avec affection, et c'est à ça qu'un bon classeur sert.",
            "Je remplace les pages quand le plastique se trouble ou que la couture d'une pochette se fend. Je n'essaie pas de réparer une couture avec du scotch du côté de la carte. Le scotch, c'est comme ça qu'une carte gagne un bord collant. Une page neuve est la réparation. L'ancienne page, si le reste est sain, peut tenir des jetons ou des listes, pas des cartes. Une fois par an, j'ouvre chaque classeur assez loin pour voir les pages du fond, parce que le fond est l'endroit où une pochette gondolée se cache. Ce passage a sauvé plus de cartes que n'importe quel étui spécial que j'ai envisagé et pas acheté.",
          ],
        },
      ],
      faqs: [
        {
          q: "Les communes ont-elles besoin d'un protège-cartes ?",
          a: "Dans mes classeurs, oui. La commune est souvent la carte qui ferme la ligne. Je la protège avant qu'elle entre dans une pochette. Un coin blanchi est plus difficile à réparer qu'un protège-cartes n'est long à enfiler.",
        },
        {
          q: "Un étui rigide est-il le réflexe par défaut ?",
          a: "Non. Un étui dur est ce que j'utilise quand une carte voyage. Le classeur à la maison utilise un protège-cartes souple et une page à pochettes. Un étui dur pour chaque commune ferait du classeur quelque chose que je n'ouvre pas.",
        },
      ],
    },
    {
      slug: "donating-cards",
      title: "Donner des cartes Pokémon à des enfants",
      description: "Je remets un classeur fini à un enfant, par un hôpital, un hébergement ou un accueil périscolaire, et je note la date.",
      h1: "Donner des cartes Pokémon à des enfants",
      lede: "Je donne des cartes Pokémon en remettant un classeur fini. Un service d'hôpital, un hébergement ou un accueil périscolaire peut être l'endroit où il va. Le vrac en vrac reste ici et termine le classeur suivant. Je demande d'abord au lieu, je note le jour où le classeur part, et je ne publie pas de prix de vente. Si la réponse est « pas encore », le classeur reste sur mon étagère et la liste publique ne bouge pas. Un projet n'est pas une remise. Je préfère attendre que noter un cadeau qui n'a pas quitté mes mains.",
      sections: [
        {
          id: "finished",
          heading: "Seulement un classeur que j'ai fini",
          paragraphs: [
            "Un classeur à moitié rempli est un projet. Un classeur fini est quelque chose que je peux mettre dans les mains de quelqu'un d'autre sans m'excuser. Je tourne les pages avant qu'il parte. Chaque poche que la liste demandait a une carte. [[Le guide long|/guides/collecting-binders]] est la raison de cette exigence. Je ne veux pas qu'un enfant hérite de mes trous. Les trous sont mon travail, pas le sien.",
            "Le classeur est protégé, parce que la [[protection|/guides/protect-cards]] fait partie du cadeau et n'est pas une préférence privée. Les anneaux se ferment. Les pages ne sont pas déchirées. Si une pochette est fatiguée, je remplace la page avant la remise. C'est un soin ordinaire, pas une cérémonie. Personne n'a besoin d'un discours pour recevoir un classeur dont les pages tournent.",
          ],
        },
        {
          id: "where",
          heading: "Hôpitaux, hébergements et accueils périscolaires",
          paragraphs: [
            "Je demande au lieu ce dont il peut vraiment se servir. Un service pour enfants, une salle de jeu dans un hébergement et un accueil périscolaire ne veulent pas tous la même chose, et certains ne peuvent pas prendre de cartes du tout. Je préfère entendre non que laisser un classeur à un accueil qui ne l'a pas demandé. La personne qui travaille là connaît la pièce. Moi, je connais le classeur. Chacun reste sur son terrain.",
            "Je ne transforme pas la remise en discours sur la collection. Le classeur est toute la présentation. Si un enfant veut connaître l'ordre, l'ordre est dans les pages : une série dans l'ordre des numéros, ou une génération dans l'ordre du Pokédex. [[Collectionner avec un enfant|/guides/collecting-with-a-child]] est la façon dont je me tiens quand je suis l'adulte à la table. Les mêmes manières valent quand je suis seulement la personne qui a apporté le classeur. J'explique une fois si on me le demande, puis je me tais.",
          ],
        },
        {
          id: "public-list",
          heading: "Ce que montre la liste publique",
          paragraphs: [
            "La [[liste des classeurs donnés|/donations]] note le destinataire et la date. Elle ne note pas un prix de vente, et elle ne note pas ce qu'une carte se vendrait. Un classeur qui quitte la maison est un fait sur le projet. Ce n'est pas une estimation. Le jour et le nom suffisent. Un chiffre de vente n'ajouterait rien que je veuille publier.",
            "La [[page des collections|/collections]] montre encore la liste d'où venaient ces cartes. Une fois que j'ai marqué le classeur comme donné, j'arrête de traiter ces lignes comme des trous que je dois remplir de nouveau, sauf si j'ai choisi de construire ce classeur une seconde fois. L'écran doit correspondre à l'étagère. Un classeur absent ne doit pas ressembler à un classeur que j'aurais oublié de commencer. La page dit qu'il est parti, et c'est exact.",
          ],
        },
        {
          id: "spares",
          heading: "Les cartes en trop restent dans le circuit",
          paragraphs: [
            "Le [[vrac|/guides/bulk-cards]] est la façon dont le classeur suivant se termine. Les cartes en trop ne sortent pas en poignée à côté du cadeau. Une poignée a l'air généreuse et arrive comme un devoir. Je garde les extras, je les trie, et je les laisse fermer de vraies lignes. Le cadeau, lui, est déjà complet le jour où il part.",
            "Si vous avez des cartes en trop pour ce tri, écrivez à [[magnus@linksforcards.com|mailto:magnus@linksforcards.com]]. Dites-moi ce qu'il y a dans la boîte en langage simple : les séries que vous reconnaissez, ou simplement du vrac. Le tri, c'est moi qui le fais. Les boutiques qui envoient des cartes sont remerciées par leur nom sur la page des remerciements. C'est tout l'arrangement. Pas de cérémonie autour d'un colis.",
            "Je note la remise le jour où elle a lieu, pas à la fin du mois. Le destinataire peut être le nom d'un service ou d'un club si le nom d'un enfant n'est pas à moi de publier. La date est le jour où le classeur a quitté mes mains. Si un lieu me demande d'attendre, le classeur reste sur mon étagère et la liste ne change pas. Je préfère être lent qu'inventer un cadeau qui n'a pas eu lieu. Un classeur encore dans ma maison n'est pas un classeur que j'ai donné, aussi sûr que je sois du projet.",
          ],
        },
      ],
      faqs: [
        {
          q: "Est-ce que tu prends le vrac en vrac ?",
          a: "Oui. Le vrac en vrac est le bienvenu. Je le trie dans des classeurs. Je ne le remets pas tel quel comme cadeau. Un classeur fini est ce qui part, et les cartes en trop restent pour fermer le suivant.",
        },
        {
          q: "Les pages publiques montrent-elles un prix de vente ?",
          a: "Non. La liste publique montre un destinataire et une date. Elle ne montre jamais un prix de vente. Le classeur est une liste finie qui quitte la maison, et c'est le seul fait que je publie à son sujet.",
        },
      ],
    },
    {
      slug: "sets-in-order",
      title: "Les séries de cartes Pokémon dans l'ordre",
      description: "Les blocs et les séries de la liste publique, de Base en 1999 jusqu'au bloc le plus récent, avec un lien vers chaque page de série.",
      h1: "Les séries de cartes Pokémon dans l'ordre",
      lede: "Je garde les séries dans l'ordre qu'utilise la liste publique de cartes. Il y a {sets} séries dans {seriesCount} blocs, et {cards} cartes derrière ces noms. La liste sous cette note est cet ordre, construite à partir des mêmes données que les listes de coche. Chaque ligne mène à la page de série contre laquelle je coche. La date sur la ligne est la date de sortie tirée de ces données.",
      sections: [
        {
          id: "series-and-set",
          heading: "Un bloc est une étagère, une série est un classeur",
          paragraphs: [
            "Un bloc est une suite de séries qui partagent une époque. Base, Jungle et Fossil tiennent dans le bloc de Base. Une série est une liste de cartes avec ses propres numéros de collection. Je construis les classeurs au niveau de la série et je feuillette au niveau du bloc. Mélanger ces deux mots, c'est comme ça qu'une boîte se retrouve étiquetée « Base » alors que la moitié est Jungle. Le classeur de Jungle a alors un trou, et celui de Base a une intruse.",
            "[[Le guide des classeurs|/guides/collecting-binders]] utilise cette chronologie quand je décide à quelle liste une carte appartient. [[Ranger les pages|/guides/organize-binder]] suppose que la liste est déjà choisie. La chronologie ne me dit pas quelle carte est jolie. Elle me dit quelle liste est ouverte. Le joli peut attendre que le numéro ait trouvé sa poche.",
          ],
        },
        {
          id: "how-to-read",
          heading: "Comment je lis la liste",
          paragraphs: [
            "Chaque bloc ci-dessous est une époque. À l'intérieur, les séries avancent par date de sortie tirée des données publiques. La date est la date de sortie de ces données, écrite dans la langue de cette page. Le compte est le nombre de cartes dans la liste que je publie, c'est-à-dire des noms et des numéros de collection seulement. Je n'ajoute pas une supposition pour une carte que les données n'ont pas. Un trou dans les données reste un trou, visible.",
            "Les promos, les séries POP et les petites listes rassemblées sous Other sont dans les données parce qu'elles ont aussi des numéros de collection. Je ne les cache pas pour que l'histoire ait l'air nette. Une promo est encore une liste. Si je trie du vrac et que le numéro correspond à une liste de promos, c'est la pile qu'elle rejoint. La cacher dans la série d'à côté ferait mentir les deux comptes.",
          ],
        },
        {
          id: "early",
          heading: "Par où je dis aux gens de commencer à regarder",
          paragraphs: [
            "Le [[bloc de Base|/collections/series/base]] est le début de la liste publiée. [[Base|/collections/set/base1]] elle-même, c'est le 9 janvier 1999, 102 cartes. [[La liste de la génération 1|/guides/gen-1-checklist]] explique pourquoi ces 102 cartes ne sont pas la même chose que les 151 espèces d'origine. J'envoie les gens vers les deux pages exprès. La confusion est courante, et le correctif est simplement les deux comptes, côte à côte. L'un compte des cartes. L'autre compte des espèces.",
            "L'autre bout de la liste bouge quand les données bougent. [[Mega Evolution|/collections/set/me1]] est dans les données actuelles comme son propre bloc. Je le relie pour que la chronologie ait une porte récente, pas parce qu'une série nouvelle serait plus importante qu'une vieille commune. La [[page des collections|/collections]] est la même liste avec les barres d'avancement. Cette note est la liste avec les dates. Les barres disent où j'en suis. Les dates disent quand la série est sortie. [[Mega Evolution—Delta Reign|/collections/set/delta-reign]] n'est pas encore dans cette liste. J'ai écrit une page pour le classeur avant que les numéros existent, et je n'insère pas ici un compte deviné.",
          ],
        },
        {
          id: "using-it",
          heading: "Se servir de la chronologie en triant",
          paragraphs: [
            "Je garde cette page ouverte quand une boîte traverse plus d'une époque. Je ne mémorise pas les années de sortie. Je clique le bloc, puis la série, puis je rapproche le numéro de collection. Si le nom correspond, la carte quitte la boîte. Si le nom ne correspond pas, j'ai la mauvaise liste, et forcer la carte mettrait un trou dans deux classeurs à la fois. Je repose la carte et j'ouvre l'autre page.",
            "Les données ont été construites le {built}. Quand une série toute nouvelle manque ici, elle manque de cette construction, elle ne se cache pas dans un menu. Je préfère montrer une liste datée qu'une promesse vague que tout jusqu'à aujourd'hui est inclus. Les pages de série liées plus bas sont les listes que je coche vraiment. Si une page n'est pas là, je ne l'invente pas.",
            "Je me sers du compte de chaque ligne comme d'un contrôle pendant le tri. Si je crois avoir fini une série et que le classeur a moins de cartes que le compte, j'ai raté un numéro, d'habitude un Dresseur ou une Énergie vers la fin. Si j'ai plus de cartes que le compte, j'ai mélangé une promo ou la série suivante. Dans les deux cas, la liste est la correction. Je n'arrondis pas une série à une impression d'« environ cent ». Le nombre est le nombre de poches.",
          ],
        },
      ],
      faqs: [
        {
          q: "Les séries sont-elles dans l'ordre de sortie à l'intérieur de chaque bloc ?",
          a: "Oui. Chaque bloc liste ses séries par la date de sortie des données publiques de cartes. Les blocs eux-mêmes suivent l'ordre de ces données. Je trie une boîte dans ce même ordre pour que les piles correspondent aux pages.",
        },
        {
          q: "Cette liste comprend-elle des prix ?",
          a: "Non. Elle comprend le nom de la série, la date de sortie et le nombre de cartes de la liste publique. Rien sur cette page n'est un prix de vente. Le compte est le nombre de poches de ce classeur, et rien d'autre.",
        },
      ],
    },
    {
      slug: "collecting-with-a-child",
      title: "Commencer une collection Pokémon avec un enfant",
      description: "Comment je commence un classeur avec un enfant : un travail, du vrac, des protège-cartes, et la permission d'arrêter.",
      h1: "Commencer une collection Pokémon avec un enfant",
      lede: "Je suis un père qui aime la liste, et je me suis assis à table avec un enfant qui aime les images. La façon dont je commence est plus petite que ma propre étagère. Un classeur. Un travail. Du vrac. J'arrête la séance tant que c'est encore amusant. L'enfant choisit la carte. Moi, je ne tiens qu'au protège-cartes et à la pochette numérotée.",
      sections: [
        {
          id: "one-binder",
          heading: "Un classeur, exprès",
          paragraphs: [
            "Je ne commence pas par toute l'histoire du jeu de cartes. [[Le guide long|/guides/collecting-binders]] est pour moi, plus tard, si l'enfant demande d'où viennent les autres classeurs. À la première séance j'offre un seul choix : un classeur de série pour une liste courte, ou [[le classeur de la génération 1|/collections/generation/1]] avec une carte de chaque espèce d'origine. [[La note sur la génération 1|/guides/gen-1-checklist]] est la version de ce choix que je peux expliquer en une minute. Cent cinquante et une créatures, une carte chacune, n'importe quel tirage.",
            "Deux projets en même temps, c'est comme ça qu'un enfant se retrouve avec les genoux couverts de piles et aucune page finie. Je l'ai fait. La deuxième séance est pire, parce que la table a l'air d'une corvée. Un classeur veut dire que la carte suivante a une pochette évidente. L'évident est une gentillesse. Je range l'autre projet hors de la table avant qu'on s'assoie, pour ne pas avoir à dire non à une pile que j'ai moi-même laissée en vue.",
          ],
        },
        {
          id: "their-choice",
          heading: "Laisser l'enfant choisir la première page",
          paragraphs: [
            "Je mélange une petite pile de vrac déjà protégé et je laisse l'enfant choisir la première carte qui entre. Si le classeur est dans l'ordre du Pokédex, la carte va quand même dans sa pochette numérotée, pas devant. Je l'explique une fois, sans discours. La pochette est la place de la créature. Choisir la carte est la partie amusante. Le numéro est la promesse que la carte pourra être retrouvée. Une carte mise devant « parce qu'elle est belle » se perd la semaine d'après.",
            "Je ne corrige pas le goût. Un Pikachu est une très bonne première carte. Une créature que je trouve ordinaire aussi. Le [[vrac|/guides/bulk-cards]] est la bonne pile pour ça, parce qu'il y a assez de copies pour qu'un choix ne soit pas précieux. Une pile précieuse me fait planer au-dessus de la table. Planer est le contraire d'un samedi à la table de la cuisine. Je reste assis, je tiens la pochette ouverte, et je laisse le choix se faire.",
          ],
        },
        {
          id: "sleeves",
          heading: "Le protège-cartes, puis la page",
          paragraphs: [
            "Les [[protège-cartes|/guides/protect-cards]] vont sur la carte avant qu'elle soit aimée par de petites mains. Je le montre comme un geste, pas comme une leçon : carte dedans, protège-cartes plat, pochette ouverte, carte dedans. Les enfants sont bons pour les gestes. Ils s'intéressent moins à mes opinions sur le rangement. Je garde les verres hors de la table et je ne raconte pas la raison sauf si on me la demande. Une phrase suffit, et souvent même pas.",
            "Si une carte se plie, je n'en fais pas un événement moral. Je protège un remplacement pris dans le vrac si j'en ai un, ou je laisse la ligne vide jusqu'à ce que j'en aie un. Une ligne vide est permise. [[Un classeur que je donne|/guides/donating-cards]] est un classeur fini, et le classeur du samedi d'un enfant n'a pas à le devenir. Il peut rester un classeur du samedi. Le vide n'est pas un échec. C'est une poche qui attend.",
          ],
        },
        {
          id: "stop",
          heading: "S'arrêter tant que c'est encore amusant",
          paragraphs: [
            "Je termine la séance quand l'enfant est encore partant, pas quand j'ai atteint un chiffre rond. Vingt minutes qui finissent par un classeur fermé reviendront. Une heure qui finit par un soupir, peut-être pas. La [[page des collections|/collections]] se souviendra des lignes que j'ai notées. Rien sur l'écran n'est plus important que l'envie de l'enfant d'ouvrir le classeur la fois d'après. Je note ce qui est vraiment dans les pochettes, puis je ferme.",
            "Je ne suis pas le classeur d'un enfant comme une compétition contre le mien. Les pages publiques de ce projet sont mes listes. La page d'un enfant a le droit de rester inachevée pour toujours. S'il entre plus tard dans le passe-temps long, les listes de séries et les pages d'espèces sont là. S'il n'y entre pas, le classeur a quand même fait son travail : des cartes dans l'ordre, des protège-cartes en place, un après-midi qui lui appartenait.",
            "Les questions auxquelles je réponds vraiment sont petites. Dans quelle pochette va celle-ci. Est-ce que ce double peut fermer un trou. Est-ce qu'on peut s'arrêter. Oui, la pochette numérotée. Oui, si la ligne est vide. Oui, on s'arrête. Je garde les opinions plus grandes pour moi, sauf si l'enfant les demande. Une collection commencée ainsi peut rester minuscule et être quand même une vraie collection. Elle a un ordre, un protège-cartes, et une prochaine ligne vide pour le jour où quelqu'un aura envie de l'ouvrir. Une carte qui a l'air fausse n'entre pas tant que je doute. [[Comment je repère une contrefaçon|/guides/spot-fakes]] est cette vérification, faite calmement, avec une autre carte du vrac proposée à sa place.",
          ],
        },
      ],
      faqs: [
        {
          q: "Par quel classeur un enfant devrait-il commencer ?",
          a: "J'en propose un : soit une liste de série courte, soit la génération 1 avec une carte de chaque espèce. Je ne lance pas un enfant sur toutes les séries en même temps. Un classeur fini d'une page vaut mieux que cinq piles commencées.",
        },
        {
          q: "Faut-il des cartes rares pour le classeur d'un enfant ?",
          a: "Non. Les communes du vrac ferment les lignes. Une carte rare est facultative, et elle n'est pas le sujet du premier après-midi. Le sujet est une carte choisie, protégée, et rangée à sa place.",
        },
      ],
    },
    spotFakesFr,
  ];
}
