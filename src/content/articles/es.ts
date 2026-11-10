import type { ArticleCopy } from "@/lib/articles";
import { spotFakesEs } from "./spot-fakes/es";

export function spanishArticles(): ArticleCopy[] {
  return [
    {
      slug: "collecting-binders",
      title: "Coleccionar cartas Pokémon en carpetas",
      description: "Cómo colecciono cartas Pokémon en una carpeta de set y una carpeta Pokédex, y dónde están las listas.",
      h1: "La guía para coleccionar cartas Pokémon en carpetas",
      lede: "Las cartas Pokémon las guardo en carpetas. Una pila en la estantería no me dice qué falta. Una carpeta sigue un set. Otra sigue el Pokédex. Esta página es el mapa. Las notas cortas contestan una pregunta cada una, en el orden en que trabajo de verdad: elijo la carpeta, ordeno el bulk y busco el número cuando una carta no quiere quedarse en su montón.",
      diagram: {
        kind: "binders",
        title: "Dos maneras de llenar una carpeta",
        description: "Una carpeta de set sigue los números de colección. Una carpeta de generación guarda una carta de cada especie, en orden de Pokédex.",
        caption: "A la izquierda: un set, por número. A la derecha: una especie por bolsillo, en orden de Pokédex.",
      },
      sections: [
        {
          id: "two-binders",
          heading: "Dos carpetas, dos trabajos",
          paragraphs: [
            "Una carpeta de set y una carpeta de generación no preguntan lo mismo. La de set pregunta si tengo cada carta de ese set, en el orden del número de colección, sin saltarme una porque sea corriente. La de generación pregunta si tengo una carta de cada especie en ese tramo del Pokédex. Cualquier impresión vale, y cualquier idioma también. Mezclar los dos trabajos en una sola carpeta es la forma en que antes perdía de vista una común que faltaba.",
            "La versión larga del orden de cada día está en [[cómo organizo una carpeta|/guides/organize-binder]]. La corta es la que me habría gustado anotar antes: elegir el trabajo antes de comprar las páginas. Una página de nueve bolsillos es una cuadrícula. No se entera de la historia que cuenta la carta. Yo sí, así que decido el orden primero. Un bolsillo vacío pasa entonces a significar algo concreto, no un hueco que se me olvidó.",
          ],
        },
        {
          id: "set-binder",
          heading: "Una carpeta de set sigue la lista",
          paragraphs: [
            "El [[set Base|/collections/set/base1]] sigue siendo el ejemplo que abro para explicarlo. Salió el 9 de enero de 1999 y la lista pública tiene 102 cartas. La página de la carpeta sigue esa lista: el número 1, luego el 2, luego el 3, con entrenadores y energías. Si la lista tiene una carta, la carpeta tiene un bolsillo. No dejo un hueco porque la carta sea común, y no adelanto un holo para fabricar una página bonita.",
            "El orden completo de series y sets está en [[sets de cartas Pokémon en orden|/guides/sets-in-order]]. Lo uso cuando una caja de bulk mezcla épocas. Una carta de Jungle no pertenece a la carpeta de Base, aunque el dibujo parezca del mismo año. La página del set es la lista. Marco una línea solo cuando esa carta está en la carpeta, no cuando la he visto pasar encima de la mesa.",
            "Una tercera carpeta sigue un tema, no una expansión y no un hueco para una sola especie. [[Las carpetas temáticas|/collections/themes]] reúnen cada impresión inglesa de una especie, de un artista o de un tipo de carta. [[Todas las cartas de Pikachu|/collections/themes/pikachu]] es la lista que abro cuando el montón está lleno de esa cara.",
          ],
        },
        {
          id: "dex-binder",
          heading: "Una carpeta de generación sigue el Pokédex",
          paragraphs: [
            "Una carpeta de generación guarda una carta de cada especie. La [[generación 1|/collections/generation/1]] son las 151 originales. De la generación 1 a la 9 hay {species} especies. [[Cómo completo una carpeta Pokédex|/guides/pokedex-binder]] es la nota larga para hacerlo sin convertirlo en una caza de impresiones raras. [[La lista de la generación 1|/guides/gen-1-checklist]] se queda con las 151 primeras, porque es la carpeta que la gente tiene en mente cuando habla de las criaturas originales.",
            "[[Pikachu|/pokedex/25]] enseña por qué importa la regla. La página de la especie lista cada impresión de los datos públicos, en muchos sets. La carpeta de generación necesita una. Un Pikachu del bulk llena el hueco. Una ilustración rara posterior también lo llena. No guardo cada impresión en esa carpeta. Ese trabajo es de la carpeta de set, y solo del set que estoy armando. Lo demás vuelve a la caja.",
          ],
        },
        {
          id: "bulk",
          heading: "El bulk es lo que llena los huecos",
          paragraphs: [
            "Casi todas las cartas que cierran una línea salen del bulk. Lo digo con cariño. El bulk es el montón corriente: comunes, poco comunes, repetidas y el Magikarp que vuelve a aparecer. [[Qué hago con el bulk|/guides/bulk-cards]] es el método de orden. [[Cómo leo una carta|/guides/read-a-card]] explica cómo encuentro el número de colección y el símbolo del set cuando el montón está mezclado.",
            "Ordeno por set antes que por criatura. Una carta que encaja en una línea abierta de una carpeta de set va ahí. Una repetida que encaja en una especie vacía puede pasar a la carpeta de generación. Lo que sobra se queda en la caja de bulk hasta que una lista lo pida, o hasta que una carpeta terminada esté lista para salir. El bulk no es lo que desecho. Es el montón que termina una carpeta.",
          ],
        },
        {
          id: "tracker",
          heading: "El registro público es una lista, no una tienda",
          paragraphs: [
            "La [[página de inicio|/]] es la cuenta pública: cuántas cartas distintas están anotadas y qué carpetas se han movido. La [[página de colecciones|/collections]] es la lista de trabajo. Agrupa los sets por serie, enlaza cada carpeta de generación y enlaza una página por especie. Una barra llena quiere decir que he anotado la carta. No dice nada de un precio de venta. Las páginas públicas no muestran uno.",
            "Cuando una línea en la pantalla y la carta en la carpeta no coinciden, gana la carpeta. Solo llamo completa a una carpeta después de pasar las páginas con la mano. La pantalla está para que vea el hueco antes de olvidarlo. Nada más. Un número bonito en el inicio no sustituye el bolsillo vacío que notaría al hojear.",
          ],
        },
        {
          id: "care-and-kids",
          heading: "Fundas, niños y una carpeta que se va",
          paragraphs: [
            "Una carta que vive en una carpeta recibe primero una funda. [[Proteger las cartas|/guides/protect-cards]] habla de fundas, páginas de nueve bolsillos, páginas de cuatro y de los sitios donde no guardo una carpeta. Empecé con una lata del supermercado. La balda húmeda me lo enseñó. La funda es el paso que no me salto, ni siquiera con una común que aparece en cada caja de bulk.",
            "[[Coleccionar con un niño|/guides/collecting-with-a-child]] es la nota que uso cuando un niño se sienta a la mesa. Una carpeta, un trabajo y permiso para parar. [[Entregar una carpeta terminada|/guides/donating-cards]] cuenta qué pasa cuando una carpeta está completa y la entrego. Entrego una carpeta terminada, no un puñado de cartas sueltas. La lista pública anota quién la recibió y la fecha. Un proyecto a medias se queda en casa.",
            "Si tuviera que dejar una instrucción en un papel, sería esta. Elegir el trabajo de la carpeta. Abrir la lista que le corresponde. Poner funda a la carta que cierra un hueco. Marcar la línea solo cuando la carta ya está en el bolsillo. Parar cuando la mesa se llena de montones y empezar la siguiente vez en el mismo hueco. El resto de estas notas es esa instrucción, escrita para la pregunta que de verdad me hacen: el tamaño de página, el bulk, las 151, el Pokédex entero, el número de la carta, el guardado, un niño a la mesa o una carpeta que sale de casa.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Hacen falta una carpeta de set y una de generación?",
          a: "No. Uso las dos porque contestan preguntas distintas. Una sola carpeta de set es una forma completa de empezar. Una carpeta de generación es la otra. El error es pedirle a una carpeta que haga los dos trabajos.",
        },
        {
          q: "¿Dónde están las listas?",
          a: "Cada set tiene una lista de cartas, cada generación tiene una lista y cada Pokémon tiene una página de sus impresiones. La página de colecciones enlaza las tres. Marco desde esas páginas, después de meter la carta en la carpeta.",
        },
      ],
    },
    {
      slug: "organize-binder",
      title: "Cómo organizar una carpeta Pokémon",
      description: "Páginas de nueve y de cuatro bolsillos, orden por número de set y orden de Pokédex, tal como ordeno una carpeta.",
      h1: "Cómo organizo una carpeta Pokémon",
      lede: "Organizo la carpeta antes de organizar las cartas. El tamaño de página y el orden son todo el sistema. Lo demás es una carta que encuentra el bolsillo que ya preparé. Si empiezo por mirar los dibujos, la mesa se llena de montones y ninguna línea se cierra.",
      diagram: {
        kind: "pockets",
        title: "Nueve bolsillos y cuatro bolsillos",
        description: "Una página de nueve bolsillos guarda nueve cartas, en tres columnas de tres. Una página de cuatro bolsillos guarda cuatro cartas más grandes.",
        caption: "Nueve bolsillos mantienen un set compacto. Cuatro bolsillos hacen cada carta más fácil de ver, y la carpeta engorda antes.",
      },
      sections: [
        {
          id: "nine-or-four",
          heading: "Nueve bolsillos o cuatro bolsillos",
          paragraphs: [
            "Una página de nueve bolsillos son tres columnas de tres. Una carta con funda cabe. Un set de unas cien cartas son una docena de páginas, una carpeta que puedo sujetar abierta con una mano. Esa es la página que uso para las carpetas de set. [[Paldean Fates|/collections/set/sv4pt5]] tiene 245 cartas en la lista pública, así que la carpeta de nueve bolsillos ya es gruesa. Una página de cuatro bolsillos convertiría el mismo set en una carpeta que no quiero cargar.",
            "Una página de cuatro bolsillos son dos columnas de dos, y cada carta se ve más grande. La uso cuando el punto es mirar, no tachar una lista larga. Una carpeta de generación puede ir en cualquiera de los dos sentidos. Nueve bolsillos terminan {species} especies en menos carpetas. Cuatro bolsillos hacen más fácil encontrar la página que un niño quiere volver a ver, y hacen la estantería más pesada. Decido antes de que entre la primera carta. Pasar un set terminado de un tamaño de página a otro es una tarde que ya gasté una vez. No pienso gastarla otra. [[La guía larga|/guides/collecting-binders]] es la razón por la que los dos trabajos de carpeta siguen separados.",
          ],
        },
        {
          id: "set-order",
          heading: "Orden por número de set",
          paragraphs: [
            "El orden de un set es el número de colección de la carta, comparado con la lista. El número 1 ocupa el primer bolsillo, aunque no sea la criatura que más me gusta. Entrenadores y energías se quedan donde el set los puso. No armo una página bonita de holos al principio. Esa página esconde la común que falta, y la carpeta parece terminada cuando no lo está.",
            "[[Los sets en orden|/guides/sets-in-order]] me dicen a qué lista pertenece una carta. El símbolo del set me ayuda a confirmarlo. El número es lo que uso para ordenar. Si dos cartas comparten nombre y los números cambian, son líneas distintas. Lo aprendí con las promos, que a menudo se sientan al lado de un set principal y usan su propia cuenta. Meterlas a la fuerza en la lista de al lado abre un hueco en las dos carpetas.",
          ],
        },
        {
          id: "dex-order",
          heading: "Orden por número de Pokédex",
          paragraphs: [
            "El orden del Pokédex es el orden de las especies. La [[generación 1|/collections/generation/1]] va de Bulbasaur a Mew, del 001 al 151. Al bolsillo no le importa de qué set salió la carta. Una común reciente, ya enfundada, llena el 001 con la misma honradez que una impresión vieja. [[La nota de la carpeta Pokédex|/guides/pokedex-binder]] explica por qué paro en una carta por especie. [[La lista de la generación 1|/guides/gen-1-checklist]] es la misma idea, reducida a las 151 primeras.",
            "Escribo el número de Pokédex en una etiqueta pequeña en la esquina de la página solo cuando la página abre una centena nueva. No etiqueto cada bolsillo. La lista de la página de colecciones es el índice. La carpeta es la prueba. Si la etiqueta y la carta dejan de coincidir, creo a la carta que tengo en la mano y corrijo la etiqueta después.",
          ],
        },
        {
          id: "by-type",
          heading: "Ordenar por tipo, cuando el archivador no es una lista",
          paragraphs: [
            "El tipo es el símbolo de arriba a la derecha en una carta de Pokémon. [[La ayuda de la base de cartas|https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database]] lo describe así: el icono de energía de Planta, Fuego, Agua y el resto. Un niño que quiere todas las cartas de Agua en una página ordena por tipo. Eso lo uso para un montón de juego en la mesa. No lo uso para ordenar un archivador de set. La lista va numerada, y una página de un solo tipo esconde el número que falta.",
            "Los Entrenadores no llevan ese icono de tipo, y la Energía básica es un montón aparte. En una tarde de orden por tipo, esas cartas tienen su pila, en vez de quedar forzadas bajo una criatura. La generación es el otro orden, un tramo del Pokédex, y eso es ya lo que hace la [[generación 1|/collections/generation/1]]. Set, número, tipo y generación son cuatro preguntas. Elijo una por archivador. [[Cómo leo el símbolo|/guides/read-a-card]] es cómo encuentro el icono antes de fiarme del montón.",
          ],
        },
        {
          id: "marking-a-line",
          heading: "Cómo marco una línea",
          paragraphs: [
            "La [[página de colecciones|/collections]] muestra una línea llena cuando he anotado la carta. Anotar no es lo mismo que echar un vistazo a un montón. Meto la carta en la funda, meto la funda en el bolsillo y solo entonces marco. Si marco antes, el registro miente y la carpeta tiene un hueco. Ese hueco reaparece semanas después, cuando ya daba el set por cerrado.",
            "[[Fundas y páginas|/guides/protect-cards]] van antes de la marca, no después. Una carta raspada dentro de un bolsillo es una carta que luego tengo que sustituir, y la línea nunca estuvo hecha de verdad. Cuando la pantalla y la carpeta no coinciden, paso las páginas. Gana la carpeta.",
            "Una tarde práctica se parece a esto. Elijo una carpeta y dejo la otra cerrada. Reparte el montón que corresponde en orden de número sobre la mesa, nueve cartas por fila si uso páginas de nueve bolsillos. Pongo funda a cada una, la deslizo y solo entonces miro la lista. Las cartas que no pertenecen a la carpeta de esta noche vuelven a su caja antes de empezar, para que no se conviertan en un segundo proyecto a mitad de página. Una página terminada y guardada vale más que tres montones admirados.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Una carpeta de generación debería usar páginas de nueve bolsillos?",
          a: "Uso páginas de nueve bolsillos cuando el objetivo es terminar el tramo. Uso páginas de cuatro cuando el objetivo es mirar menos cartas, más grandes. Las dos son carpetas de verdad. No se mezclan en un mismo volumen.",
        },
        {
          q: "¿Ordeno un set por tipo o por rareza?",
          a: "No. Ordeno un set por número de colección. El tipo y la rareza cambian el aspecto de una página y esconden las cartas que faltan. El número dice qué bolsillo sigue vacío.",
        },
      ],
    },
    {
      slug: "bulk-cards",
      title: "Qué hacer con el bulk de cartas Pokémon",
      description: "El bulk llena las carpetas. Ordeno por set, luego por la línea de especie vacía, y me quedo con el resto.",
      h1: "Qué hacer con el bulk de cartas Pokémon",
      lede: "El bulk es el montón que termina una carpeta. Hablo del montón corriente: comunes, repetidas y la carta que sale en cada lata. Una lata del supermercado suele ser el principio. Ordeno por set, dejo que las cartas que sobran llenen especies vacías y guardo lo que queda en lugar de llamarlo basura.",
      sections: [
        {
          id: "why-bulk",
          heading: "Por qué trato el bulk como la colección",
          paragraphs: [
            "Un holo es una página agradable. No es un sistema. El sistema es la línea vacía, y las líneas vacías son sobre todo comunes. [[La guía de las carpetas|/guides/collecting-binders]] lo dice en largo. Esta es la forma corta que uso en la mesa: si la carta cierra un hueco, es la carta que quería, aunque el dibujo sea el Magikarp que ya me sé de memoria.",
            "Dejé de disculparme por el bulk el día en que una carpeta de generación avanzó más deprisa con una caja mezclada que con todo lo que había apartado como especial. Las cartas especiales pueden esperar en una funda. La lista no las espera. [[Coleccionar con un niño|/guides/collecting-with-a-child]] usa el mismo montón, porque un niño puede sostener una común, elegir un bolsillo y ver cómo se cierra la línea. Ese gesto no pide una carta rara.",
            "Algunas listas temáticas son casi por completo este montón. [[Las cartas de arcilla de Yuka Morii|/collections/themes/yuka-morii]] son comunes, y ahí el bulk es oro. [[Las carpetas temáticas|/collections/themes]] es el lugar donde viven esas listas.",
          ],
        },
        {
          id: "sort-by-set",
          heading: "Primero, ordenar por set",
          paragraphs: [
            "Vuelco la caja solo mientras la mesa siga siendo amable. Luego ordeno por set, no por criatura y no por brillo. [[Cómo leo el número y el símbolo|/guides/read-a-card]] es la parte que hago con las manos: encontrar el número de colección, confirmar el set, hacer un montón. Un montón para Base, un montón para un set reciente, un montón que todavía no sé colocar.",
            "Cada montón va a la página del set en la [[página de colecciones|/collections]]. La página es la lista de cartas. Si la línea está abierta, la carta entra en esa carpeta. Si la línea ya está llena, la carta es una repetida y se queda en el bulk. No saco las repetidas para admirarlas hasta que las líneas abiertas de ese montón estén hechas. Admirar es la manera de que una caja a medio ordenar dure un mes. Lo dejo para luego y el hueco sigue abierto.",
          ],
        },
        {
          id: "species-lines",
          heading: "Después, la línea de especie vacía",
          paragraphs: [
            "Una repetida de un set puede ser todavía la primera copia de esa especie en una carpeta de generación. [[La carpeta Pokédex|/guides/pokedex-binder]] solo necesita una. [[Magikarp|/pokedex/129]] es el ejemplo en el que confío, porque el bulk ofrece otro sin parar. Si el 129 está vacío, el siguiente Magikarp sale de la caja y llena el bolsillo. Si el 129 está lleno, la carta vuelve. No negocio con una tercera copia.",
            "Cualquier idioma cuenta para una línea de especie. Una carta impresa con otro nombre sigue mostrando la misma especie en la página de la especie, porque la página sigue el número del Pokédex nacional. Compruebo el número cuando el nombre de la carta no es el nombre en inglés que tengo memorizado. El dibujo ayuda. El número decide.",
          ],
        },
        {
          id: "extras",
          heading: "Qué pasa con las que sobran",
          paragraphs: [
            "Las que sobran se quedan en una caja etiquetada con el set, o en una sola caja mezclada si el montón es pequeño. No son basura. La carpeta siguiente suele necesitar la carta que estuve a punto de soltar. Las guardo secas, en una funda si la esquina ya está blanda, y fuera del suelo.",
            "Cuando una carpeta está terminada, la historia cambia. [[Una carpeta terminada puede irse|/guides/donating-cards]] hacia un niño. Las cartas sueltas no se van con ella. Se quedan y llenan la siguiente. Ese corte mantiene el regalo completo y mantiene la lista honesta. Un puñado de repetidas al lado de una carpeta terminada parece generoso y llega como deberes.",
            "La caja misma lleva una etiqueta aburrida: el nombre del set, o «mezcla» si todavía no la he separado. No etiqueto una caja con una suposición de lo que las cartas podrían sacar en una venta. No tengo una caja para las cartas «buenas» y un cubo para la «basura». Ese corte es la forma en que desaparecen las comunes y los huecos se quedan abiertos. Una vez al mes cojo la caja mezclada, repito el orden por set y la achico. El objetivo es un montón de dudas más pequeño, no un expositor más bonito. Una carta en la que no confío no cierra una línea. [[Detectar una falsificación|/guides/spot-fakes]] es una nota aparte. La caja de bulk es el sitio de las cartas corrientes y de verdad, y esas son las que quiero.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Tiro las comunes repetidas?",
          a: "No las tiro. Una repetida en un set suele ser la especie que falta en otra carpeta. Las guardo por set hasta que una lista las pide. La carpeta siguiente suele estar más cerca que un montón nuevo de sobres.",
        },
        {
          q: "¿Ordeno el bulk por rareza primero?",
          a: "No. Las marcas de rareza han cambiado con los años y no me dicen qué línea está vacía. El número de colección sí. Puedo ordenar una caja entera sin decidir si una marca significa algo.",
        },
      ],
    },
    {
      slug: "pokedex-binder",
      title: "Cómo completar una carpeta Pokédex",
      description: "Una carta de cada especie, del 001 hasta el final de la generación 9, llena con bulk.",
      h1: "Cómo completo una carpeta Pokédex",
      lede: "Una carpeta Pokédex es una carta de cada especie. De la generación 1 a la 9 hay {species} especies. La lleno con bulk, en orden de Pokédex, y no persigo una impresión que la lista no pide. Lo que uso es el bulk que ya tengo, más una funda y un bolsillo para cada carta que cierra un hueco.",
      sections: [
        {
          id: "one-card",
          heading: "Una carta de cada especie",
          paragraphs: [
            "La regla es pequeña y me ahorra líos. Una carta. Cualquier set. Cualquier idioma. Cualquier rareza. [[La guía larga de las carpetas|/guides/collecting-binders]] separa este trabajo de la carpeta de set, donde cada carta de la lista tiene un bolsillo. Aquí la criatura es el bolsillo. Un segundo Pikachu es una repetida, aunque el dibujo sea nuevo. El dibujo nuevo puede ser precioso. No abre una segunda línea.",
            "El hábito empezó con [[Bulbasaur|/pokedex/1]]. La página de la especie lista las impresiones. La carpeta necesita una. Metí en el 001 el primer Bulbasaur que ya tenía enfundado y dejé de buscar un 001 mejor. Lo mejor es otra afición. Esta afición es el tramo, de punta a punta, sin negociar cada bolsillo.",
            "Una página de especie lista cada impresión, y la carpeta Pokédex sigue necesitando solo una. [[Todas las cartas de Pikachu|/collections/themes/pikachu]] guarda cada impresión de Pikachu como su propia lista. [[Las carpetas temáticas|/collections/themes]] queda junto a las páginas de generación cuando quiero ver la serie completa de una cara.",
          ],
        },
        {
          id: "the-range",
          heading: "Las {species}, generación por generación",
          paragraphs: [
            "No abro una carpeta gigante y doy el trabajo por hecho. Construyo por generación, porque la [[página de colecciones|/collections]] ya está partida así y porque una generación es un libro que puedo terminar. La generación 1 son 151. La generación 2 son las 100 siguientes. Las generaciones posteriores están en la misma página, cada una con su lista y su propia cuenta. Dejo esas cuentas en la página. No las recito.",
            "La [[generación 1|/collections/generation/1]] es la que digo a la gente que termine primero, y [[la nota de la generación 1|/guides/gen-1-checklist]] se queda al lado. Las criaturas son conocidas, las cajas de bulk están llenas de ellas y 151 es un número que cabe en la cabeza. Después, la generación 5 es la larga y la generación 6 es la corta. Dejo que lo diga la lista. No memorizo las cuentas. Una generación cerrada se queda cerrada, y la siguiente se abre solo entonces.",
          ],
        },
        {
          id: "from-bulk",
          heading: "Llenarla con bulk",
          paragraphs: [
            "El [[bulk|/guides/bulk-cards]] es el suministro. En eso no improviso. Una ilustración rara es bienvenida cuando es la carta que ya tengo. No es un requisito. Esperar una impresión favorita es la forma de que una carpeta Pokédex se quede atascada en los mismos veinte huecos durante un año. La lista, mientras tanto, no se ha movido.",
            "La pasada práctica es aburrida y funciona. Cojo una sola lista de generación. Recorro la caja de bulk con los huecos en mente. Pongo funda a la carta que cierra un hueco. La meto en el bolsillo. Marco la línea. Luego paro, aunque la caja siga teniendo aspecto interesante. [[Cómo organizo las páginas|/guides/organize-binder]] es la elección del tamaño. Los nueve bolsillos son los que uso cuando el objetivo es ver el tramo terminado. Cuatro bolsillos vendrían después, si el objetivo pasara a ser mirar y no terminar.",
          ],
        },
        {
          id: "when-it-is-done",
          heading: "Cuándo digo que está hecha",
          paragraphs: [
            "Una generación está hecha cuando cada línea de especie tiene una carta en la carpeta y he pasado las páginas para demostrarlo. La pantalla puede decir que las líneas están llenas. Paso las páginas igual. Una carta anotada y luego dejada en una caja de zapatos no está en la carpeta. La marca sin el bolsillo es una historia que me cuento.",
            "No «mejora» una generación terminada por deporte. Si una carta posterior me hace sonreír, puede sustituir a la del bolsillo, y la vieja vuelve al bulk. La línea sigue llena de las dos maneras. El punto nunca fue la copia más impresionante. El punto era la criatura, presente, en orden, donde una persona puede pasar páginas hasta encontrarla.",
            "Para esta carpeta, contar quiere decir que gasto atención en lugar de cazar una copia concreta. Ya tengo casi todas las cartas necesarias dentro de bulk sin ordenar. El coste que importa es la funda y la página, que compro en paquetes corrientes y uso en las comunes sin guardarlas. Llevo una lista a lápiz de los huecos solo cuando estoy lejos de la pantalla. En casa, la página de la generación es la lista. Si un hueco lleva meses vacío, es porque esa especie escasea en mis cajas, no porque esté esperando un dibujo más raro de una especie que ya podría haber archivado.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿La carpeta Pokédex necesita cada impresión de un Pokémon?",
          a: "No. Una carta de cada especie es toda la regla. Cada impresión pertenece a la página de la especie, no a esta carpeta. Un segundo dibujo, por bonito que sea, vuelve al bulk o a la carpeta de su set.",
        },
        {
          q: "¿Qué generación conviene terminar primero?",
          a: "Empiezo por la generación 1, las 151 originales. Las cartas son habituales en el bulk y la lista es lo bastante corta para terminarla. Después tomo la generación siguiente de la página, no un hueco al azar en medio del Pokédex.",
        },
      ],
    },
    {
      slug: "gen-1-checklist",
      title: "Lista de la generación 1: los 151",
      description: "Cómo colecciono los 151 Pokémon originales en una carpeta, con la lista de generación y la lista de Base.",
      h1: "Lista de la generación 1: los 151 Pokémon originales",
      lede: "La generación 1 son 151 especies, del 001 Bulbasaur al 151 Mew. Las colecciono en una sola carpeta: una carta de cada una, de cualquier set. La lista es la página de la generación, y el set Base es donde empiezan muchos nombres conocidos. Esas dos listas no tienen la misma cuenta. Mantenerlas separadas es todo el truco.",
      sections: [
        {
          id: "the-151",
          heading: "Qué significan las 151",
          paragraphs: [
            "Las 151 son un tramo del Pokédex, no un solo producto. La [[generación 1|/collections/generation/1]] lista cada especie de ese tramo, con algunos de los sets en los que aparece. Esa página es la lista que uso. No es el mismo objeto que el set Base, que tiene 102 cartas e incluye entrenadores y energías. La gente mezcla esas dos cuentas. Yo las mantengo aparte para que la carpeta tenga el número justo de bolsillos. El set de 2023 llamado [[151|/collections/set/sv3pt5]] es otra lista.",
            "[[La nota de la carpeta Pokédex|/guides/pokedex-binder]] es el mismo método para las {species} especies. Esta nota se queda con el primer libro, porque las 151 originales son la carpeta de la que más me preguntan. [[La guía larga|/guides/collecting-binders]] explica por qué esto es una carpeta de generación y no una carpeta de set. Las dos pueden contener un Pikachu. No cuentan lo mismo.",
          ],
        },
        {
          id: "where-they-appear",
          heading: "Dónde aparecen las 151 originales",
          paragraphs: [
            "Una especie de Kanto puede salir en la época de Base y otra vez en un set publicado décadas después. [[Pikachu|/pokedex/25]] es el caso obvio. [[Charizard|/pokedex/6]] es el otro. La página de la especie lista las impresiones. Cualquiera llena el bolsillo. No necesito la copia más vieja ni la más nueva. Necesito una carta de esa especie, con funda, en su sitio.",
            "[[Los sets en orden|/guides/sets-in-order]] ayudan cuando quiero las antiguas a propósito. La [[serie Base|/collections/series/base]] reúne Base, Jungle, Fossil y los sets de alrededor. Si estoy armando una carpeta de set de Base, ese es otro proyecto, con 102 huecos. Las cartas de ese proyecto también pueden llenar un hueco de generación, una sola vez, si la línea de especie está vacía. No desmonto una carpeta de set para decorar la de generación. La copia de más hace ese trabajo. La carpeta de set se queda entera.",
          ],
        },
        {
          id: "base-set",
          heading: "El set Base es una lista, no las 151",
          paragraphs: [
            "[[Base|/collections/set/base1]] tiene 102 cartas. Parte de las 151 originales no está en esa lista. Los sets posteriores de la misma época añaden más. Una carpeta de generación no espera a esos sets viejos. Una común reciente de una especie que falta es una línea terminada. La edad de la carta no es una condición de la lista.",
            "Sigo gustando de abrir la lista de Base, porque los números de colección son la forma en que aprendí a leer una carta. Primero el orden de los números, luego el nombre, luego el símbolo del set como comprobación. Cuando una caja de bulk dice traer «todos los originales», no me fío de la frase. Me fío de la página de la generación y de las cartas que tengo en la mano. Una caja puede ser de buena fe y aun así faltarle veinte especies.",
          ],
        },
        {
          id: "one-line",
          heading: "Una línea cada vez",
          paragraphs: [
            "Bajo la lista desde el 001 solo cuando estoy de humor paciente. Más a menudo tomo la siguiente línea vacía que la caja puede cerrar. El orden dentro de la carpeta sigue siendo numérico aunque el orden en que encuentro las cartas no lo sea. El bolsillo 050 no se adelanta porque lo haya encontrado un martes. El martes no es un argumento de orden.",
            "Una línea está hecha cuando la carta tiene funda, está en el bolsillo y está anotada. Luego miro el hueco siguiente. Ciento cincuenta y una son muchas tardes, y tampoco son un misterio. El bulk de casi cualquier época trae criaturas de Kanto. El trabajo es emparejar, no desear.",
            "Dejo la página de la generación abierta al lado de la caja y no tacho nada de memoria. Las criaturas que creo tener no siempre son las que están en la carpeta. Mew y las líneas iniciales son las que la gente da por hechas. Las compruebo igual. Una carpeta a la que le falta el 001 porque el Bulbasaur sigue sin funda en una lata no es un 151 terminado, aunque el resto de las páginas parezca lleno. Los últimos diez huecos suelen tardar más que los primeros cincuenta, y es normal. Son las especies que mis cajas no tienen, así que las dejo vacías en lugar de inventar una carta de sustitución.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿El set Base es lo mismo que las 151?",
          a: "No. Base es un set, con 102 cartas en la lista pública. Las 151 son cada especie desde Bulbasaur hasta Mew, de cualquier set. Tengo las dos páginas a mano para que las cuentas no se mezclen.",
        },
        {
          q: "¿Hace falta una carta de primera edición para la carpeta de la generación 1?",
          a: "No. Cualquier impresión de esa especie llena el hueco. Una primera edición pertenece a una carpeta de set si la lista de ese set la incluye. La carpeta de generación no la pide.",
        },
      ],
    },
    {
      slug: "read-a-card",
      title: "Leer el número y el símbolo de una carta Pokémon",
      description: "Cómo encuentro el número de colección, el símbolo del set y la marca de rareza para ordenar un montón de bulk.",
      h1: "Cómo leo una carta Pokémon",
      lede: "Leo una carta en el mismo orden cada vez: nombre, número de colección, símbolo del set y, si todavía lo necesito, la marca de rareza. Ese orden convierte un montón de bulk mezclado en montones que puedo archivar. El número coincide con la lista del set. El símbolo evita que dos épocas acaben en el mismo montón.",
      diagram: {
        kind: "card",
        title: "Dónde miro en una carta",
        description: "El contorno de una carta sencilla, con el nombre, el número de colección, el símbolo del set y la marca de rareza. Sin arte oficial.",
        caption: "Comparo el número de colección con la lista del set. El símbolo y la marca de rareza solo me ayudan a confirmar el set.",
      },
      sections: [
        {
          id: "the-number",
          heading: "El número de colección es la clave",
          paragraphs: [
            "El número de colección es la fracción o el par impreso en la carta, como 4/102. El primer número es el lugar de la carta en ese set. El segundo es cuántas cartas contó el set en esa numeración. [[Base|/collections/set/base1]] es el set con el que enseño esto, porque 102 es la cuenta de la lista que publico a partir de los datos públicos. Si la carta dice 4 y la carta 4 de la lista tiene el mismo nombre, hay coincidencia.",
            "Las promos y los sets especiales a veces usan una letra, un total distinto o un número que no se parece al set principal de al lado. No las meto a la fuerza en el orden del set principal. Busco la lista que usa esa numeración. [[La cronología de los sets|/guides/sets-in-order]] es como recuerdo que las promos se sientan junto a una época sin ser la lista principal de esa época. Una letra en lugar de una fracción ya es una señal.",
          ],
        },
        {
          id: "the-symbol",
          heading: "El símbolo del set confirma el montón",
          paragraphs: [
            "El símbolo del set es la marca pequeña, normalmente junto al borde derecho del dibujo o justo debajo, según la época. Cambia con cada set. No intento memorizar toda la historia de las marcas. Uso el símbolo para que dos montones no se fundan cuando los números podrían pertenecer a más de una lista. Dos cartas pueden decir 12 y venir de dos mundos distintos.",
            "Cuando el símbolo y el número contradicen el nombre que esperaba, la carta dice la verdad y mi memoria no. Busco el número en la página del set. [[Pikachu|/pokedex/25]] recuerda bien que un solo nombre puede vivir en muchos sets, cada uno con su número. El nombre solo no es una clave de orden. Es un consuelo, no un archivo.",
          ],
        },
        {
          id: "rarity",
          heading: "Las marcas de rareza ordenan mal",
          paragraphs: [
            "Un círculo, un rombo y una estrella se han impreso en cartas, y el significado se movió a medida que el juego añadía rarezas. No guardo una tabla privada de lo que cada marca quería decir cada año. La tabla sería más larga que el orden, y seguiría sin decirme qué línea de la lista está vacía. Ese trabajo se lo dejo a quien escribe la historia de los símbolos.",
            "Miro la marca solo para separar un montón en «fácil de enfundar» y «miraré dos veces antes de meterla en un bolsillo». Es comodidad, no catalogación. [[Ordenar el bulk|/guides/bulk-cards]] se queda con el número. La rareza es el aspecto de una página. El número es la forma en que una carpeta se termina. Una estrella no cierra una línea por sí sola.",
          ],
        },
        {
          id: "regulation",
          heading: "La marca de regulación es una letra de formato",
          paragraphs: [
            "En las cartas impresas desde 2020, Play! Pokémon usa una marca de regulación: una letra abajo a la izquierda. Las [[reglas de Play! Pokémon|https://play.pokemon.com/en-us/resources/rules/]] dicen que el formato Standard rota según esa letra. Las cartas más viejas no tienen letra. Una carta con una letra antigua, o sin letra, puede seguir siendo legal si la misma carta se reimprimió con una letra vigente. Las letras permitidas cambian. No me aprendo la lista de ahora en un archivador, y no ordeno por la letra.",
            "La letra no es el número de colección, y no es el símbolo de rareza. [[La ayuda de la base de cartas|https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database]] pone el símbolo de rareza en la esquina inferior derecha, junto al icono de expansión. Miro la letra solo cuando alguien pregunta si una carta se puede jugar en un evento actual. Para el archivador, el número sigue decidiendo el hueco. Una carta en la que no confío no llega a ese hueco. De eso trata [[cómo detecto una falsificación|/guides/spot-fakes]].",
          ],
        },
        {
          id: "in-practice",
          heading: "Una pasada por un montón mezclado",
          paragraphs: [
            "Cojo una carta. Leo el nombre en voz alta si el montón está desordenado, porque los ojos se saltan líneas cuando voy demasiado deprisa. Encuentro el número de colección. Compruebo el símbolo contra el montón al que creo que pertenece. La dejo en ese montón. Si no puedo colocarla en unos segundos, va a un montón de dudas, no de vuelta a la mezcla. Devolver una carta dudosa al montón es repetir la misma duda.",
            "El montón de dudas recibe una pasada más tranquila con la [[página de colecciones|/collections]] abierto. Primero lleno las líneas de las que habla [[la guía de las carpetas|/guides/collecting-binders]]: las de un set, y después las de una especie. Una carta que no logro identificar recibe igual una funda si la esquina está blanda. La identificación puede esperar una hora. Una esquina doblada empeora mientras dudo.",
            "El idioma impreso en la carta puede frenar la pasada, y no pasa nada. El nombre en inglés del conjunto de datos es el que usa la lista del set. Una carta impresa en otro idioma sigue teniendo número de colección y símbolo de set. Comparo esas dos cosas y luego leo la página de la especie si quiero el nombre local. No armo una carpeta distinta por idioma. Una lista de set, un orden de números. El nombre de la carta puede diferir del nombre de la pantalla.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Y si la carta no trae fracción?",
          a: "La trato como una promo o una impresión especial y busco una lista con ese tipo de número. No le invento un sitio en el set principal. El montón de dudas es donde espera, hasta que abra la página correcta.",
        },
        {
          q: "¿Hay que ordenar por el símbolo de rareza?",
          a: "Yo no. El símbolo cambió con el tiempo. El número de colección coincide con la lista de cartas. Un brillo en la carta puede esperar a que el montón ya esté en el set correcto.",
        },
      ],
    },
    {
      slug: "protect-cards",
      title: "Proteger cartas Pokémon sin complicarlo",
      description: "Fundas, páginas de carpeta y un guardado corriente para una colección que se abre, incluida la carpeta de un niño.",
      h1: "Proteger cartas Pokémon sin hacer un drama",
      lede: "Protejo las cartas de la forma más barata que todavía me deja abrir la carpeta. Una funda blanda, una página de bolsillos y una balda que se mantiene seca. Ese es todo el plan. Lo uso con las comunes, porque la común suele ser la carta que cierra una línea. Una carpeta que no voy a abrir no es una colección que esté guardando.",
      sections: [
        {
          id: "sleeve-first",
          heading: "Una funda antes que un bolsillo",
          paragraphs: [
            "La funda es un bolsillo fino y transparente para una sola carta. La pongo antes de que la carta vea una página de carpeta. Las páginas rozan. Las fundas reciben ese roce. Compro las lisas en un taco y no las reservo para los holos. Una común con la esquina blanqueada sigue siendo un hueco en una lista, y sustituirla es una tarde peor que enfundarla ahora.",
            "Aprieto la funda para que la carta quede plana, y no la chupo, no le pongo cinta y no doblo la funda de una común de bulk como un rito. La doble funda es para una carta que viaja. La carta de cada día lleva una. [[La guía de las carpetas|/guides/collecting-binders]] da por hecho que este paso ya ocurrió. Una carta anotada con la superficie desnuda es una carta que anoté demasiado pronto. La marca puede esperar a la funda.",
          ],
        },
        {
          id: "pages",
          heading: "Páginas que aceptan una carta enfundada",
          paragraphs: [
            "[[Las páginas de nueve y de cuatro bolsillos|/guides/organize-binder]] son la elección. El bolsillo tiene que aceptar una funda sin arquear la carta. Si tengo que forzar, la página no sirve. Sustituyo un bolsillo roto en lugar de esperar a que el corte se porte bien. Un bolsillo roto se come las esquinas. Una esquina comida se convierte luego en el hueco que creía cerrado.",
            "Las carpetas de anillas van bien cuando las anillas no aprietan las cartas. Evito que las anillas se apoyen en una página no llenando la carpeta de más. Una anilla en D que cierra limpia es más amable que una carpeta embutida hasta que las tapas se deforman. Prefiero empezar una segunda carpeta que doblar la última página de la primera. La segunda tapa cuesta menos que una página ondulada.",
          ],
        },
        {
          id: "storage",
          heading: "Dónde viven las carpetas",
          paragraphs: [
            "De pie en una balda, o tumbadas si la carpeta es fina, lejos de una ventana y lejos de una pared exterior húmeda. No guardo carpetas en una caja de sótano, un ático caliente o el maletero de un coche. El calor curva una funda. La humedad mancha una página. El sol apaga la tinta. Nada de eso se ve el día en que lo hago. Se ve cuando abro la carpeta un verano después.",
            "El bulk que no está en una carpeta vive en una caja seca, apilado para que las cartas no se doblen bajo un objeto más pesado. Mantengo la comida y los vasos fuera de esa mesa. Suena quisquilloso hasta que hay zumo de naranja dentro de una funda. La [[página de colecciones|/collections]] se puede reconstruir a partir de las cartas. Un montón pegado, no. Prefiero una caja aburrida y seca a un montón que luego tenga que despegar.",
          ],
        },
        {
          id: "toploader",
          heading: "Un toploader es para el viaje",
          paragraphs: [
            "Un toploader es una funda de plástico rígido. Uso una cuando una carta sale de casa: un archivador de camino a un niño, o una carta suelta en un paquete. Es más gruesa de lo que quiere una página, así que se queda fuera de la página de nueve bolsillos. En casa, la carta vive en una funda blanda, en el bolsillo. Una caja dura en cada común haría un archivador que no abro, y abrirlo es el sentido.",
            "No pego una carta dentro de un toploader. Si no tengo uno, la funda blanda y una caja plana siguen ganando a una esquina doblada. [[La guía larga|/guides/collecting-binders]] ya da por hecha la funda blanda. La rígida es la excepción, para el viaje, no para la página de cada día.",
          ],
        },
        {
          id: "kids",
          heading: "La colección de un niño",
          paragraphs: [
            "[[Una carpeta con un niño|/guides/collecting-with-a-child]] empieza con fundas y una carpeta que el niño pueda abrir, no con una caja rígida para cada común. Quiero que el niño pase la página. Una carta que no se abre nunca puede quedarse perfecta y también dejar de formar parte de la tarde. Las fundas son el compromiso en el que confío. Aguantan los dedos sin convertir la carpeta en una vitrina cerrada.",
            "Cuando una carpeta terminada [[sale hacia un niño|/guides/donating-cards]], sale enfundada, en páginas, con las anillas en funcionamiento. No entrego cartas sueltas y lo llamo el mismo regalo. La funda forma parte de la carpeta. También es la parte que sobrevive a que la quieran un poco a lo bruto, que es para lo que sirve una buena carpeta.",
            "Cambio las páginas cuando el plástico se enturbia o la costura de un bolsillo se abre. No intento reparar una costura con cinta por el lado de la carta. La cinta es la forma de que una carta gane un borde pegajoso. Una página nueva es la reparación. La página vieja, si el resto está sano, puede guardar fichas o listas, no cartas. Una vez al año abro cada carpeta lo bastante para ver las páginas del fondo, porque el fondo es donde se esconde un bolsillo deformado. Esa pasada ha salvado más cartas que cualquier caja especial que haya considerado y no haya comprado.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Las comunes necesitan funda?",
          a: "En mis carpetas, sí. La común suele ser la carta que llena la línea. La enfundo antes de que entre en un bolsillo. Una esquina blanqueada es más difícil de arreglar que poner una funda.",
        },
        {
          q: "¿Una funda rígida es lo normal?",
          a: "No. Una funda dura es lo que uso cuando una carta viaja. La carpeta de casa usa una funda blanda y una página de bolsillos. Una caja dura para cada común convertiría la carpeta en algo que no abro.",
        },
      ],
    },
    {
      slug: "donating-cards",
      title: "Entregar cartas Pokémon a niños",
      description: "Entrego una carpeta terminada a un niño, por un hospital, un alojamiento o un club después del colegio, y apunto la fecha.",
      h1: "Entregar cartas Pokémon a niños",
      lede: "Entrego cartas Pokémon entregando una carpeta terminada. Una planta de hospital, un alojamiento o un club después del colegio puede ser el sitio al que va. El bulk suelto se queda aquí y llena la carpeta siguiente. Pregunto primero al lugar, apunto el día en que la carpeta sale y no publico un precio de venta. Si la respuesta es «todavía no», la carpeta se queda en mi estantería y la lista pública no cambia. Un plan no es una entrega. Prefiero esperar a anotar un regalo que no ha salido de mis manos.",
      sections: [
        {
          id: "finished",
          heading: "Solo una carpeta que he terminado",
          paragraphs: [
            "Una carpeta a medias es un proyecto. Una carpeta terminada es algo que puedo poner en manos de otra persona sin disculparme. Paso las páginas antes de que salga. Cada hueco que pedía la lista tiene una carta. [[La guía larga|/guides/collecting-binders]] es la razón de ese criterio. No quiero que un niño herede mis huecos. Los huecos son mi trabajo, no el suyo.",
            "La carpeta va enfundada, porque la [[protección|/guides/protect-cards]] forma parte del regalo y no es un gusto privado. Las anillas cierran. Las páginas no están rotas. Si un bolsillo está cansado, cambio la página antes de la entrega. Es un cuidado corriente, no una ceremonia. Nadie necesita un discurso para recibir una carpeta cuyas páginas pasan.",
          ],
        },
        {
          id: "where",
          heading: "Hospitales, alojamientos y clubs después del colegio",
          paragraphs: [
            "Pregunto al lugar qué puede usar de verdad. Una planta infantil, una sala de juego en un alojamiento y un club después del colegio no quieren todos lo mismo, y algunos no pueden aceptar cartas. Prefiero oír que no a dejar una carpeta en una recepción que no la pidió. Quien trabaja allí conoce la sala. Yo conozco la carpeta. Cada uno se queda en lo suyo.",
            "No convierto la entrega en un discurso sobre coleccionar. La carpeta es toda la presentación. Si un niño quiere saber el orden, el orden está en las páginas: un set por número, o una generación en orden de Pokédex. [[Coleccionar con un niño|/guides/collecting-with-a-child]] es cómo me porto cuando soy el adulto de la mesa. Las mismas maneras valen cuando solo soy la persona que trajo la carpeta. Explico una vez si me lo piden y luego me callo.",
          ],
        },
        {
          id: "public-list",
          heading: "Qué muestra la lista pública",
          paragraphs: [
            "La [[lista de carpetas entregadas|/donations]] anota quién la recibió y la fecha. No anota un precio de venta, ni lo que una carta se vendería. Una carpeta que sale de casa es un hecho del proyecto. No es una valoración. El día y el nombre bastan. Un número de venta no añadiría nada que yo quiera publicar.",
            "La [[página de colecciones|/collections]] sigue mostrando la lista de la que salieron esas cartas. Cuando marco la carpeta como entregada, dejo de tratar esas líneas como huecos que tengo que volver a llenar, salvo que haya elegido armar esa carpeta una segunda vez. La pantalla tiene que coincidir con la estantería. Una carpeta ausente no debe parecer una carpeta que olvidé empezar. La página dice que se fue, y es exacto.",
          ],
        },
        {
          id: "spares",
          heading: "Las cartas de más se quedan en el circuito",
          paragraphs: [
            "El [[bulk|/guides/bulk-cards]] es la forma en que se termina la carpeta siguiente. Las cartas de más no salen en un puñado junto al regalo. Un puñado parece generoso y llega como tarea. Me quedo con las repetidas, las ordeno y dejo que cierren líneas de verdad. El regalo ya está completo el día que sale.",
            "Si tiene cartas de más para ese orden, escriba a [[magnus@linksforcards.com|mailto:magnus@linksforcards.com]]. Dígame qué hay en la caja con palabras llanas: sets que reconozca, o solo bulk. El orden lo hago yo. Las tiendas que envían cartas aparecen con su nombre en la página de gracias. Ese es todo el arreglo. No hay ceremonia alrededor de un paquete.",
            "Apunto la entrega el día en que ocurre, no a fin de mes. Quien recibe puede ser el nombre de una planta o de un club si el nombre de un niño no es mío para publicarlo. La fecha es el día en que la carpeta salió de mis manos. Si un lugar me pide esperar, la carpeta se queda en la estantería y la lista no cambia. Prefiero ir lento a inventar un regalo que no ha ocurrido. Una carpeta que sigue en mi casa no es una carpeta que haya entregado, por muy seguro que esté del plan.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Aceptas bulk suelto?",
          a: "Sí. El bulk suelto es bienvenido. Lo ordeno en carpetas. No lo entrego tal cual como regalo. Una carpeta terminada es lo que sale, y las cartas de más se quedan para llenar la siguiente.",
        },
        {
          q: "¿Las páginas públicas muestran un precio de venta?",
          a: "No. La lista pública muestra quién recibió la carpeta y una fecha. Nunca muestra un precio de venta. La carpeta es una lista terminada que sale de casa, y ese es el único hecho que publico sobre ella.",
        },
      ],
    },
    {
      slug: "sets-in-order",
      title: "Sets de cartas Pokémon en orden",
      description: "Las series y los sets de la lista pública, desde Base en 1999 hasta la serie más reciente, con un enlace a cada página de set.",
      h1: "Sets de cartas Pokémon en orden",
      lede: "Dejo los sets en el orden que usa la lista pública de cartas. Hay {sets} sets en {seriesCount} series, y {cards} cartas detrás de esos nombres. La lista bajo esta nota es ese orden, hecha con los mismos datos que las listas de trabajo. Cada fila enlaza con la página de set contra la que marco. La fecha de la fila es la fecha de salida de esos datos.",
      sections: [
        {
          id: "series-and-set",
          heading: "Una serie es una balda, un set es una carpeta",
          paragraphs: [
            "Una serie es una tanda de sets que comparten una época. Base, Jungle y Fossil están en la serie Base. Un set es una lista de cartas con sus propios números de colección. Armo carpetas al nivel del set y hojeo al nivel de la serie. Mezclar esas dos palabras es la forma de que una caja acabe etiquetada «Base» cuando la mitad es Jungle. La carpeta de Jungle tiene entonces un hueco, y la de Base tiene una intrusa.",
            "[[La guía de las carpetas|/guides/collecting-binders]] usa esta cronología cuando decido a qué lista pertenece una carta. [[Organizar las páginas|/guides/organize-binder]] da por hecho que la lista ya está elegida. La cronología no me dice qué carta es bonita. Me dice qué lista está abierta. Lo bonito puede esperar a que el número haya encontrado su bolsillo.",
          ],
        },
        {
          id: "how-to-read",
          heading: "Cómo leo la lista",
          paragraphs: [
            "Cada bloque de abajo es una serie. Dentro, los sets avanzan por la fecha de salida de los datos públicos. La fecha es la fecha de salida de esos datos, escrita en el idioma de esta página. La cuenta es el número de cartas de la lista que publico: nombres y números de colección, nada más. No añado una suposición para una carta que los datos no tienen. Un hueco en los datos sigue siendo un hueco, a la vista.",
            "Las promos, las series POP y las listas pequeñas reunidas bajo Other están en los datos porque también tienen números de colección. No las escondo para que la historia quede pulcra. Una promo sigue siendo una lista. Si estoy ordenando bulk y el número coincide con una lista de promos, ese es el montón al que se une. Esconderla en el set de al lado haría mentir las dos cuentas.",
          ],
        },
        {
          id: "early",
          heading: "Por dónde digo que se empiece a mirar",
          paragraphs: [
            "La [[serie Base|/collections/series/base]] es el principio de la lista publicada. [[Base|/collections/set/base1]] en sí es el 9 de enero de 1999, 102 cartas. [[La lista de la generación 1|/guides/gen-1-checklist]] explica por qué esas 102 cartas no son lo mismo que las 151 especies originales. Mando a la gente a las dos páginas a propósito. La confusión es habitual, y el arreglo es simplemente las dos cuentas, una al lado de la otra. Una cuenta cartas. La otra cuenta especies.",
            "El otro extremo de la lista se mueve cuando se mueven los datos. [[Mega Evolution|/collections/set/me1]] está en los datos actuales como serie propia. Lo enlazo para que la cronología tenga una puerta reciente, no porque un set nuevo sea más importante que una común vieja. La [[página de colecciones|/collections]] es la misma lista con las barras de avance. Esta nota es la lista con las fechas. Las barras dicen por dónde voy. Las fechas dicen cuándo salió el set. [[Mega Evolution—Delta Reign|/collections/set/delta-reign]] todavía no está en esa lista. Escribí una página para el archivador antes de que existan los números, y aquí no meto una cuenta adivinada.",
          ],
        },
        {
          id: "using-it",
          heading: "Usar la cronología mientras ordeno",
          paragraphs: [
            "Dejo esta página abierta cuando una caja cruza más de una época. No memorizo los años de salida. Hago clic en la serie, luego en el set, y comparo el número de colección. Si el nombre coincide, la carta sale de la caja. Si el nombre no coincide, tengo la lista equivocada, y forzar la carta abriría un hueco en dos carpetas a la vez. Dejo la carta y abro la otra página.",
            "Los datos se construyeron el {built}. Cuando un set recién salido falta aquí, falta de esa construcción, no está escondido en un menú. Prefiero mostrar una lista con fecha a una promesa vaga de que todo hasta hoy está incluido. Las páginas de set enlazadas más abajo son las listas que marco de verdad. Si una página no está, no la invento.",
            "Uso la cuenta de cada fila como comprobación mientras ordeno. Si creo que he terminado un set y la carpeta tiene menos cartas que la cuenta, me he saltado un número, normalmente un entrenador o una energía hacia el final. Si tengo más cartas que la cuenta, he mezclado una promo o el set siguiente. En los dos casos, la lista es la corrección. No redondeo un set a una sensación de «unas cien». El número es el número de bolsillos.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Los sets van en orden de salida dentro de cada serie?",
          a: "Sí. Cada bloque de serie lista sus sets por la fecha de salida de los datos públicos. Las series siguen el orden de esos datos. Ordeno una caja en ese mismo orden para que los montones coincidan con las páginas.",
        },
        {
          q: "¿Esta lista incluye precios?",
          a: "No. Incluye el nombre del set, la fecha de salida y la cuenta de cartas de la lista pública. Nada en esta página es un precio de venta. La cuenta es el número de bolsillos de esa carpeta, y nada más.",
        },
      ],
    },
    {
      slug: "collecting-with-a-child",
      title: "Empezar una colección Pokémon con un niño",
      description: "Cómo empiezo una carpeta con un niño: un trabajo, bulk, fundas y permiso para parar.",
      h1: "Empezar una colección Pokémon con un niño",
      lede: "Soy un padre al que le gusta la lista, y me he sentado a la mesa con un niño al que le gustan los dibujos. La forma en que empiezo es más pequeña que mi propia estantería. Una carpeta. Un trabajo. Bulk. Paro la sesión mientras todavía es divertida. El niño elige la carta. Yo solo insisto en la funda y en el bolsillo numerado.",
      sections: [
        {
          id: "one-binder",
          heading: "Una carpeta, a propósito",
          paragraphs: [
            "No abro con toda la historia del juego de cartas. [[La guía larga|/guides/collecting-binders]] es para mí, más tarde, si el niño pregunta de dónde salieron las otras carpetas. En la primera sesión ofrezco una sola elección: una carpeta de set para una lista corta, o [[la carpeta de la generación 1|/collections/generation/1]] con una carta de cada especie original. [[La nota de la generación 1|/guides/gen-1-checklist]] es la versión de esa elección que puedo explicar en un minuto. Ciento cincuenta y una criaturas, una carta cada una, cualquier impresión.",
            "Dos proyectos a la vez es la forma de que un niño acabe con el regazo lleno de montones y ninguna página terminada. Ya lo he hecho. La segunda sesión es peor, porque la mesa parece una tarea. Una carpeta quiere decir que la carta siguiente tiene un bolsillo obvio. Lo obvio es una amabilidad. Quito el otro proyecto de la mesa antes de sentarnos, para no tener que decir que no a un montón que yo mismo dejé a la vista.",
          ],
        },
        {
          id: "their-choice",
          heading: "Dejar que el niño elija la primera página",
          paragraphs: [
            "Barajo un montón pequeño de bulk ya enfundado y dejo que el niño elija la primera carta que entra. Si la carpeta va en orden de Pokédex, la carta va igual a su bolsillo numerado, no al frente. Lo explico una vez, sin discurso. El bolsillo es el sitio de la criatura. Elegir la carta es la parte divertida. El número es la promesa de que la carta se podrá encontrar otra vez. Una carta puesta delante «porque es bonita» se pierde la semana siguiente.",
            "No corrijo el gusto. Un Pikachu es una primera carta perfectamente buena. También lo es una criatura que a mí me parece corriente. El [[bulk|/guides/bulk-cards]] es el montón adecuado para esto, porque hay copias de sobra y una elección no es preciosa. Un montón precioso me hace merodear por encima de la mesa. Merodear es lo contrario de un sábado en la mesa de la cocina. Me quedo sentado, sujeto el bolsillo abierto y dejo que la elección ocurra.",
          ],
        },
        {
          id: "sleeves",
          heading: "La funda, y luego la página",
          paragraphs: [
            "Las [[fundas|/guides/protect-cards]] van en la carta antes de que unas manos pequeñas la quieran. Lo enseño como un gesto, no como una lección: carta dentro, funda plana, bolsillo abierto, carta dentro. Los niños son buenos con los gestos. Les interesan menos mis opiniones sobre el guardado. Mantengo los vasos fuera de la mesa y no narro el motivo salvo que me lo pregunten. Una frase basta, y a menudo ni eso.",
            "Si una carta se dobla, no lo convierto en un asunto moral. Enfundo un recambio del bulk si tengo uno, o dejo la línea vacía hasta tenerlo. Una línea vacía está permitida. [[Una carpeta que entrego|/guides/donating-cards]] es una carpeta terminada, y la carpeta del sábado de un niño no tiene que convertirse en eso. Puede seguir siendo una carpeta de sábado. El vacío no es un fracaso. Es un bolsillo que espera.",
          ],
        },
        {
          id: "stop",
          heading: "Parar mientras todavía es divertido",
          paragraphs: [
            "Termino la sesión cuando el niño todavía quiere, no cuando he llegado a un número redondo. Veinte minutos que acaban con una carpeta cerrada volverán a ocurrir. Una hora que acaba en un suspiro, quizá no. La [[página de colecciones|/collections]] recordará las líneas que anoté. Nada en la pantalla importa más que el niño quiera abrir la carpeta la próxima vez. Anoto lo que de verdad está en los bolsillos y cierro.",
            "No llevo la carpeta de un niño como una competición contra la mía. Las páginas públicas de este proyecto son mis listas. La página de un niño puede quedarse inacabada para siempre. Si más adelante entra en la afición larga, las listas de sets y las páginas de especies están ahí. Si no entra, la carpeta hizo igual su trabajo: cartas en orden, fundas puestas, una tarde que era suya.",
            "Las preguntas que de verdad contesto son pequeñas. En qué bolsillo va esta. Si esta repetida puede cerrar un hueco. Si se puede parar. Sí, el bolsillo numerado. Sí, si la línea está vacía. Sí, se para. Me guardo las opiniones más grandes salvo que el niño las pida. Una colección empezada así puede quedarse diminuta y seguir siendo una colección de verdad. Tiene un orden, una funda y una próxima línea vacía para el día en que alguien tenga ganas de abrirla. Una carta que parece falsa no entra mientras dude. [[Cómo detecto una falsificación|/guides/spot-fakes]] es esa revisión, en voz baja, con otra carta del bulk ofrecida en su lugar.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Con qué carpeta debería empezar un niño?",
          a: "Ofrezco una: o una lista corta de un set, o la generación 1 con una carta de cada especie. No pongo a un niño a empezar todos los sets a la vez. Una página terminada vale más que cinco montones empezados.",
        },
        {
          q: "¿Hacen falta cartas raras para la carpeta de un niño?",
          a: "No. Las comunes del bulk llenan las líneas. Una carta rara es opcional, y no es el tema de la primera tarde. El tema es una carta elegida, enfundada y puesta en su sitio.",
        },
      ],
    },
    spotFakesEs,
  ];
}
