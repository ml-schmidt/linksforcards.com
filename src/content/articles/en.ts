import type { ArticleCopy } from "@/lib/articles";
import { spotFakesEn } from "./spot-fakes/en";

function spellUK(text: string): string {
  return text
    .replace(/a grocery-store tin/g, "a tin from the newsagent")
    .replace(/\borganize\b/g, "organise")
    .replace(/\borganizing\b/g, "organising")
    .replace(/\borganized\b/g, "organised")
    .replace(/\btoward\b/g, "towards")
    .replace(/\blabeled\b/g, "labelled")
    .replace(/\bfavorite\b/g, "favourite");
}

function toUK(text: string): string {
  return text
    .split(/(\[\[[^\]|]+\|[^\]]+\]\])/)
    .map((part) => {
      const link = part.match(/^\[\[([^\]|]+)\|([^\]]+)\]\]$/);
      if (!link) return spellUK(part);
      return `[[${spellUK(link[1])}|${link[2]}]]`;
    })
    .join("");
}

function localize(articles: ArticleCopy[], fn: (text: string) => string): ArticleCopy[] {
  return articles.map((article) => ({
    ...article,
    title: fn(article.title),
    description: fn(article.description),
    h1: fn(article.h1),
    lede: fn(article.lede),
    diagram: article.diagram
      ? {
          ...article.diagram,
          title: fn(article.diagram.title),
          description: fn(article.diagram.description),
          caption: fn(article.diagram.caption),
        }
      : undefined,
    sections: article.sections.map((section) => ({
      ...section,
      heading: fn(section.heading),
      paragraphs: section.paragraphs.map(fn),
    })),
    faqs: article.faqs.map((faq) => ({ q: fn(faq.q), a: fn(faq.a) })),
  }));
}

const us: ArticleCopy[] = [
  {
    slug: "collecting-binders",
    title: "Collecting Pokémon cards in binders",
    description: "How I collect Pokémon cards in a set binder and a Pokédex binder, and where the checklists live.",
    h1: "The complete guide to collecting Pokémon cards in binders",
    lede: "I collect Pokémon cards in binders, not in a pile on a shelf. One binder follows a set. Another follows the Pokédex. This note is the map. The shorter notes answer one question each. I wrote them in the order I actually work: choose the binder, sort the bulk, then look up the number when a card will not sit in a stack.",
    diagram: {
      kind: "binders",
      title: "Two binder layouts",
      description: "A set binder follows collector numbers. A generation binder holds one card of each species in Pokédex order.",
      caption: "Left: one set, in number order. Right: one species per slot, in Pokédex order.",
    },
    sections: [
      {
        id: "two-binders",
        heading: "Two binders, two jobs",
        paragraphs: [
          "A set binder and a generation binder answer different questions. The set binder asks whether I have every card in that set, in collector-number order, with nothing skipped because it is plain. The generation binder asks whether I have one card of each species in that Pokédex range. Any printing counts there, and any language counts. Mixing the two jobs in one binder is how I used to lose track of a missing common.",
          "I keep the long version of the day-to-day sorting in [[how I organize a binder|/guides/organize-binder]]. The short version is the one I wish I had written down earlier: pick the job before you buy the pages. A nine-pocket page is a grid. It does not care about the story on the card. I do, so I decide the order first.",
        ],
      },
      {
        id: "set-binder",
        heading: "A set binder follows the card list",
        paragraphs: [
          "The [[Base set|/collections/set/base1]] is the example I still open when I explain this. It came out on 9 January 1999 and the public list has 102 cards. The binder page follows that list: number 1, then 2, then 3, including the trainers and the energy. If the list has a card, the binder has a slot. I do not leave a hole because the card is a common, and I do not pull a holo to the front.",
          "The full order of series and sets is in [[Pokémon card sets in order|/guides/sets-in-order]]. I use that timeline when a bulk box mixes eras. A Jungle card does not belong in the Base binder, even when the art feels like the same year. The set page is the card list and the checklist. I mark a line only when that card is in the binder.",
          "A third binder follows a theme instead of one set or one species slot. [[Themed binders|/collections/themes]] collect every English printing of a creature, an artist, or a kind of card. [[All Pikachu cards|/collections/themes/pikachu]] is the list I open when the pile is full of that face.",
        ],
      },
      {
        id: "dex-binder",
        heading: "A generation binder follows the Pokédex",
        paragraphs: [
          "A generation binder holds one card of each species. [[Generation 1|/collections/generation/1]] is the original 151. Generations 1 through 9 are {species} species. [[How I complete a Pokédex binder|/guides/pokedex-binder]] is the long note on doing that without turning it into a hunt for rare printings. [[The Gen 1 checklist|/guides/gen-1-checklist]] stays with the first 151, because that is the binder most people mean when they say the original set of creatures.",
          "[[Pikachu|/pokedex/25]] shows why the rule matters. The species page lists every printing in the public data, across many sets. The generation binder needs one of them. A bulk Pikachu fills the slot. A later illustration rare also fills the slot. I do not keep every printing in that binder. That is the set binder's job, and only for the set I am building.",
        ],
      },
      {
        id: "bulk",
        heading: "Bulk is how the slots get filled",
        paragraphs: [
          "Most of the cards that finish a line come from bulk. I say that with affection. Bulk is the ordinary pile: commons, uncommons, duplicates, and the Magikarp that shows up again. [[What I do with bulk|/guides/bulk-cards]] is the sorting method. [[How I read a card|/guides/read-a-card]] is how I find the collector number and the set symbol when the pile is mixed.",
          "I sort by set before I sort by creature. A card that matches an open line in a set binder goes there. A spare that matches an empty species line can move to the generation binder. Anything left stays in the bulk box until a checklist needs it, or until a finished binder is ready to leave.",
        ],
      },
      {
        id: "tracker",
        heading: "The public tracker is the checklist, not a shop",
        paragraphs: [
          "The [[home page|/]] is the public count: how many different cards are logged, and which binders have moved. The [[collections hub|/collections]] is the working list. It groups sets by series, links each generation binder, and links a page for every species. A filled bar means I have logged the card. It does not mean anything about a selling price. Public pages never show one.",
          "When a line on the screen and the card in the binder disagree, the binder wins. I only call a binder complete after I have turned the pages. The screen is there so I can see the hole before I forget it. That is the whole tracker.",
        ],
      },
      {
        id: "care-and-kids",
        heading: "Sleeves, kids, and a binder that leaves",
        paragraphs: [
          "A card that lives in a binder gets a sleeve first. [[Protecting cards|/guides/protect-cards]] is the note on sleeves, nine-pocket pages, four-pocket pages, and where I do not store a binder. I started with a grocery-store tin and learned the damp shelf the hard way. The sleeve is the part I do not skip, even for a common that exists in every bulk box.",
          "[[Collecting with a child|/guides/collecting-with-a-child]] is the note I use when a kid sits down at the table. One binder, one job, and permission to stop. [[Donating a finished binder|/guides/donating-cards]] is what happens when a binder is complete and I hand it on. I hand over a finished binder, not a handful of loose extras. The public list records the recipient and the date.",
          "If I had to leave one instruction on a slip of paper, it would be this. Pick the binder's job. Open the matching checklist. Sleeve the card that fills a hole. Mark the line only after the card is in the pocket. Stop when the table gets messy, and start the next sitting at the same hole. The rest of these notes are that instruction, written out for the question I actually get asked: page size, bulk, the 151, the full Pokédex, the number on the card, storage, a child at the table, or a binder that leaves the house.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need both a set binder and a generation binder?",
        a: "No. I use both because they answer different questions. One set binder is a complete way to start. A generation binder is the other complete way to start. The mistake is asking one binder to do both jobs.",
      },
      {
        q: "Where are the checklists?",
        a: "Every set has a card list, every generation has a checklist, and every Pokémon has a page of its printings. The collections hub links all three.",
      },
    ],
  },
  {
    slug: "organize-binder",
    title: "How to organize a Pokémon binder",
    description: "Nine-pocket and four-pocket pages, set-number order, and Pokédex order, the way I actually sort a binder.",
    h1: "How I organize a Pokémon binder",
    lede: "I organize a binder before I organize the cards. The page size and the order are the whole system. Everything else is a card finding the slot I already made.",
    diagram: {
      kind: "pockets",
      title: "Nine pockets and four pockets",
      description: "A nine-pocket page holds nine cards in a three by three grid. A four-pocket page holds four larger cards.",
      caption: "Nine pockets keep a set compact. Four pockets make each card easier to see, and the binder gets thick faster.",
    },
    sections: [
      {
        id: "nine-or-four",
        heading: "Nine pockets or four pockets",
        paragraphs: [
          "A nine-pocket page is three columns of three. A sleeved card fits. A set of about a hundred cards is a dozen pages, which is a binder I can hold open with one hand. That is the page I use for set binders. [[Paldean Fates|/collections/set/sv4pt5]] is 245 cards in the public list, so the nine-pocket binder is already a thick one. A four-pocket page would turn that same set into a binder I do not want to carry.",
          "A four-pocket page is two columns of two, and each card sits larger. I use it when the point is looking, not checking off a long list. A generation binder can go either way. Nine pockets finish {species} species in fewer binders. Four pockets make a child's favorite page easier to find, and they make the shelf heavier. I decide before the first card goes in. Moving a finished set from one page size to the other is an afternoon I have already spent once, and I do not plan to spend it again. [[The long guide|/guides/collecting-binders]] is the reason the two binder jobs stay separate.",
        ],
      },
      {
        id: "set-order",
        heading: "Order by set number",
        paragraphs: [
          "Set order is the collector number on the card, matched to the card list. Number 1 is the first slot, even when it is not the creature I like best. Trainers and energy stay in the list where the set put them. I do not make a pretty page of holos at the front. The pretty page hides the missing common.",
          "[[The sets in order|/guides/sets-in-order]] tell me which list a card belongs to. The set symbol helps me confirm it. The number is what I sort by. If two cards share a name and the numbers differ, they are different lines. I learned that from promos, which often sit beside a main set and use their own count.",
        ],
      },
      {
        id: "dex-order",
        heading: "Order by Pokédex number",
        paragraphs: [
          "Pokédex order is species order. [[Generation 1|/collections/generation/1]] runs from Bulbasaur through Mew, #001 to #151. The slot does not care which set the card came from. A sleeved common from a recent set fills #001 as honestly as an old printing. [[The Pokédex binder note|/guides/pokedex-binder]] explains why I stop at one card per species. [[The Gen 1 checklist|/guides/gen-1-checklist]] is the same idea, narrowed to the first 151.",
          "I write the Pokédex number on a small label at the corner of the page only when the page starts a new hundred. I do not label every pocket. The checklist on the collections page is the index. The binder is the proof.",
        ],
      },
      {
        id: "by-type",
        heading: "Sorting by type, when the binder is not a checklist",
        paragraphs: [
          "Type is the symbol in the top-right corner of a Pokémon card. [[Pokémon's card database help|https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database]] describes it that way: the energy icon for Grass, Fire, Water, and the rest. A child who wants every water card on one page is sorting by type. I use that for a play pile on the table. I do not use it to order a set binder. The set list is numbered, and a page of one type hides the missing number.",
          "Trainers do not carry that Pokémon type icon, and basic Energy is its own stack. On a type-sorting afternoon those cards get their own piles instead of being forced under a creature. Generation is the other order, a Pokédex range, which is what [[Generation 1|/collections/generation/1]] already is. Set, number, type, and generation are four different questions. I pick one question per binder. [[How I read the symbol|/guides/read-a-card]] is how I find the icon before I trust the pile.",
        ],
      },
      {
        id: "marking-a-line",
        heading: "How I mark a line",
        paragraphs: [
          "The [[collections hub|/collections]] shows a line as filled when I have logged the card. Logging is not the same as glancing at a stack. I put the card in the sleeve, put the sleeve in the pocket, and then I mark the line. If I mark first, the tracker lies and the binder has a hole.",
          "[[Sleeves and pages|/guides/protect-cards]] come before the mark, not after. A card rubbed raw in a pocket is a card I then have to replace, and the line was never really done. When the screen and the binder disagree, I turn the pages. The binder wins.",
          "A practical evening looks like this. I choose one binder and I leave the other closed. I deal the matching stack into number order on the table, nine cards to a row if I am using nine-pocket pages. I sleeve each one, slide it in, and only then look at the checklist. Cards that do not belong in tonight's binder go back to their box before I start, so they cannot become a second project halfway through the page. One page finished and filed is a better night than three piles admired.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should a generation binder use nine-pocket pages?",
        a: "I use nine-pocket pages when the goal is to finish the range. I use four-pocket pages when the goal is to look at fewer cards, larger. Both are real binders. They should not be mixed in one volume.",
      },
      {
        q: "Do I sort a set by type or by rarity?",
        a: "No. I sort a set by collector number. Type and rarity change the look of a page and hide the missing cards.",
      },
    ],
  },
  {
    slug: "bulk-cards",
    title: "What to do with bulk Pokémon cards",
    description: "Bulk fills the binders. I sort by set, then by the empty species line, and I keep the rest.",
    h1: "What to do with bulk Pokémon cards",
    lede: "Bulk is gold. I mean the ordinary pile: commons, duplicates, and the card that shows up in every tin. That pile is what finishes a binder. A grocery-store tin is often where it starts. I sort it by set, then I let the spare cards fill empty species lines, and I keep what is left instead of calling it junk.",
    sections: [
      {
        id: "why-bulk",
        heading: "Why I treat bulk as the collection",
        paragraphs: [
          "A holo is a nice page. It is not a system. The system is the empty line, and empty lines are mostly commons. [[The binder guide|/guides/collecting-binders]] says it in the long form. Here is the short form I use at the table: if the card fills a hole, it is the card I wanted, even when the art is the same Magikarp I already know by heart.",
          "I stopped apologizing for bulk when I watched a generation binder move faster from a mixed box than from anything I had set aside as special. Special cards can wait in a sleeve. The checklist does not wait on them. [[Collecting with a child|/guides/collecting-with-a-child]] uses the same pile, because a child can hold a common, choose a pocket, and see the line close.",
          "Some themed lists are almost entirely this pile. [[Yuka Morii clay cards|/collections/themes/yuka-morii]] are commons and uncommons I can hunt in bulk, and bulk is gold there. [[Themed binders|/collections/themes]] is where those checklists live.",
        ],
      },
      {
        id: "sort-by-set",
        heading: "Sort by set first",
        paragraphs: [
          "I tip the box out only as far as the table stays kind. Then I sort by set, not by creature and not by shine. [[How I read the number and the symbol|/guides/read-a-card]] is the part I do in my hands: find the collector number, confirm the set, make a stack. A stack for Base, a stack for a modern set, a stack I cannot place yet.",
          "Each stack goes to the set page on the [[collections hub|/collections]]. The page is the card list. If the line is open, the card goes into that binder. If the line is filled, the card is a duplicate and it stays in bulk. I do not pull duplicates out to admire them until the open lines in that stack are done. Admiration is how a half-sorted box lasts a month.",
        ],
      },
      {
        id: "species-lines",
        heading: "Then the empty species line",
        paragraphs: [
          "A duplicate for a set can still be the first copy of that species in a generation binder. [[The Pokédex binder|/guides/pokedex-binder]] only needs one. [[Magikarp|/pokedex/129]] is the example I trust, because bulk keeps offering another one. If #129 is empty, the next Magikarp leaves the box and fills the slot. If #129 is filled, the card goes back.",
          "Any language counts for a species line. A card printed with a different name still shows the same species on the species page, because the page follows the national Pokédex number. I check the number when the name on the card is not the English name I have memorized.",
        ],
      },
      {
        id: "extras",
        heading: "What happens to the extras",
        paragraphs: [
          "Extras stay in a box labeled with the set, or in one mixed box when the stack is small. They are not trash. The next binder often needs the card I almost gave up on. I keep them dry, in a sleeve if the corner is already soft, and off the floor.",
          "When a binder is finished, the story changes. [[A finished binder can leave|/guides/donating-cards]] for a child. Loose extras do not leave with it. They stay and fill the next one. That split keeps the gift complete and keeps the checklist honest.",
          "The box itself gets a boring label: the set name, or 'mixed' if I have not split it yet. I do not label a box with a guess about what the cards might sell for. I do not own a separate box for 'good' cards and a bin for 'junk.' That split is how commons disappear and holes stay open. Once a month I take the mixed box, run the set sort again, and shrink it. The goal is a smaller question stack, not a prettier display. A card I would not trust does not fill a line. [[Spotting a fake|/guides/spot-fakes]] is a separate note. The bulk box is where the ordinary real cards are, and those are the ones I want.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I throw away duplicate commons?",
        a: "I do not. A duplicate in one set is often the missing species in another binder. I box them by set until a checklist asks for them. The next binder is usually closer than a new pile of packs.",
      },
      {
        q: "Do I sort bulk by rarity first?",
        a: "No. Rarity marks changed over the years, and they do not tell me which line is empty. The collector number does. I can sort a whole box without deciding whether a mark means anything.",
      },
    ],
  },
  {
    slug: "pokedex-binder",
    title: "How to complete a Pokédex binder",
    description: "One card of each species, from #001 through the end of generation 9, filled from bulk.",
    h1: "How I complete a Pokédex binder",
    lede: "A Pokédex binder is one card of each species. Generations 1 through 9 are {species} species. I fill it from bulk, in Pokédex order, and I do not chase a printing the checklist does not ask for. The budget is the bulk I already have, plus a sleeve and a pocket for each card that fills a hole.",
    sections: [
      {
        id: "one-card",
        heading: "One card of each species",
        paragraphs: [
          "The rule is small and it saves me. One card. Any set. Any language. Any rarity. [[The long binder guide|/guides/collecting-binders]] separates this job from the set binder, where every card in the list has a slot. Here the creature is the slot. A second Pikachu is a duplicate even when the art is new.",
          "I started the habit with [[Bulbasaur|/pokedex/1]]. The species page lists the printings. The binder needs one of them. I put the first sleeved Bulbasaur I already owned into #001 and I stopped looking for a better #001. Better is a different hobby. This hobby is the range.",
          "A species page lists every printing, and the Pokédex binder still needs only one of them. [[All Pikachu cards|/collections/themes/pikachu]] keeps every Pikachu printing as its own checklist. [[Themed binders|/collections/themes]] sits beside the generation pages when I want the full run of one face.",
        ],
      },
      {
        id: "the-range",
        heading: "The {species}, generation by generation",
        paragraphs: [
          "I do not open one giant binder and call it done. I build by generation, because the [[collections hub|/collections]] is already split that way and because a generation is a book I can finish. Generation 1 is 151. Generation 2 is the next 100. The later generations are on the same hub, each with its own checklist and its own count.",
          "[[Generation 1|/collections/generation/1]] is the one I tell people to finish first, and [[the Gen 1 note|/guides/gen-1-checklist]] stays beside it. The creatures are familiar, the bulk boxes are full of them, and 151 is a number you can hold in your head. After that, generation 5 is the long one and generation 6 is the short one. I let the checklist say so. I do not memorize the counts.",
        ],
      },
      {
        id: "from-bulk",
        heading: "Fill it from bulk",
        paragraphs: [
          "[[Bulk|/guides/bulk-cards]] is the supply. I am deliberate about that. A rare illustration is welcome when it is the card I already have. It is not a requirement. Waiting for a favorite printing is how a Pokédex binder stalls at the same twenty holes for a year.",
          "The practical pass is dull and it works. I take one generation checklist. I walk the bulk box with the holes in mind. I sleeve the card that fills a hole. I pocket it. I mark the line. Then I stop, even if the box still looks interesting. [[How I organize the pages|/guides/organize-binder]] is the page-size choice. Nine pockets are what I use when the goal is to see the range completed.",
        ],
      },
      {
        id: "when-it-is-done",
        heading: "When I call it done",
        paragraphs: [
          "A generation is done when every species line has a card in the binder and I have turned the pages to prove it. The screen can say the lines are filled. I still turn the pages. A card logged and then left in a shoebox is not in the binder.",
          "I do not upgrade a finished generation for sport. If a later card makes me smile, it can replace the one in the pocket, and the old one returns to bulk. The line stays filled either way. The point was never the most impressive copy. The point was the creature, present, in order, where a person can flip to it.",
          "A budget, for this binder, means I spend attention instead of hunting a particular copy. I already own most of the needed cards inside unsorted bulk. The cost that matters is the sleeve and the page, which I buy in ordinary packs and use on commons without saving them. I keep a pencil list of the holes only when I am away from the screen. At home the generation page is the list. If a hole has been empty for months, it is because that species is scarce in my boxes, not because I am waiting for a rarer picture of a species I already could have filed.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does the Pokédex binder need every printing of a Pokémon?",
        a: "No. One card of each species is the whole rule. Every printing belongs on the species page, not in this binder.",
      },
      {
        q: "Which generation should I finish first?",
        a: "I start with generation 1, the original 151. The cards are common in bulk, and the checklist is short enough to finish. After that I take the next generation on the hub, not a random hole from the middle of the Pokédex.",
      },
    ],
  },
  {
    slug: "gen-1-checklist",
    title: "Gen 1 Pokémon card checklist: all 151",
    description: "How I collect the original 151 Pokémon in one binder, using the generation checklist and the Base set list.",
    h1: "Gen 1 checklist: all 151 original Pokémon",
    lede: "Generation 1 is 151 species, #001 Bulbasaur through #151 Mew. I collect them as one binder: one card of each, from any set. The checklist is the generation page, and the Base set is where a lot of the familiar names begin. Those two lists are not the same count, and keeping them apart is the whole trick.",
    sections: [
      {
        id: "the-151",
        heading: "What the 151 means",
        paragraphs: [
          "The 151 is a Pokédex range, not a single product. [[Generation 1|/collections/generation/1]] lists every species in that range, with a few of the sets each one appears in. That page is the checklist I use. It is not the same object as the Base set, which is 102 cards and includes trainers and energy. People mix those two counts. I keep them apart so the binder has the right number of slots. Looking for the 2023 set called [[151|/collections/set/sv3pt5]]? That is a different list.",
          "[[The Pokédex binder note|/guides/pokedex-binder]] is the same method for all {species} species. This note stays with the first book, because the original 151 is the binder I am most often asked about. [[The long guide|/guides/collecting-binders]] explains why this is a generation binder and not a set binder.",
        ],
      },
      {
        id: "where-they-appear",
        heading: "Where the original 151 show up",
        paragraphs: [
          "A species from Kanto can appear in the Base era and again in a set released decades later. [[Pikachu|/pokedex/25]] is the obvious one. [[Charizard|/pokedex/6]] is the other. The species page lists the printings. Any one of them fills the slot. I do not need the oldest copy, and I do not need the newest.",
          "[[Sets in order|/guides/sets-in-order]] help when I want the old ones on purpose. The [[Base series|/collections/series/base]] is Base, Jungle, Fossil, and the sets around them. If I am building a set binder of Base, that is a different project with 102 slots. Cards from that project can also fill a generation slot, once, if the species line is empty. I do not cannibalize a set binder to decorate the generation binder. The spare copy does that job.",
        ],
      },
      {
        id: "base-set",
        heading: "The Base set is a list, not the whole 151",
        paragraphs: [
          "[[Base|/collections/set/base1]] has 102 cards. Some of the original 151 are not in that list. Later Base-era sets add more of them. A generation binder does not wait for those older sets. A modern common of a missing species is a finished line.",
          "I still like opening the Base list, because the collector numbers are how I learned to read a card. Number order, then the name, then the set symbol as a check. When a bulk box claims to be 'all the originals,' I do not trust the claim. I trust the generation page and the cards in my hand.",
        ],
      },
      {
        id: "one-line",
        heading: "One line at a time",
        paragraphs: [
          "I work the checklist from #001 downward only when I am in a patient mood. More often I take the next empty line the box can fill. The order in the binder stays numerical even when the order I find the cards does not. Pocket #050 does not move to the front because I found it on a Tuesday.",
          "A line is done when the card is sleeved, in the pocket, and logged. Then I look at the next hole. One hundred fifty-one is many afternoons and also not a mystery. Bulk from almost any era has Kanto creatures in it. The work is matching, not wishing.",
          "I keep the generation page open beside the box and I tick nothing in my head. The creatures I think I own are not always the ones in the binder. Mew and the starter lines are the ones people assume are done. I check them anyway. A binder missing #001 because the Bulbasaur is still sleeveless in a tin is not a finished 151, even if the rest of the pages look full. The last ten holes usually take longer than the first fifty, and that is normal. Those are the species my boxes happen to lack, so I leave them empty rather than invent a substitute card.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the Base set the same as all 151?",
        a: "No. Base is one set, with 102 cards in the public list. The 151 is every species from Bulbasaur through Mew, from any set. I keep both pages bookmarked so the counts do not get blended.",
      },
      {
        q: "Do I need a first-edition card for the Gen 1 binder?",
        a: "No. Any printing of that species fills the slot. A first edition belongs in a set binder if that set's list includes it.",
      },
    ],
  },
  {
    slug: "read-a-card",
    title: "How to read a Pokémon card number and set symbol",
    description: "How I find the collector number, the set symbol, and the rarity mark so a bulk pile can be sorted.",
    h1: "How I read a Pokémon card",
    lede: "I read a card in the same order every time: name, collector number, set symbol, then the rarity mark if I still need it. That order turns a mixed bulk pile into stacks I can file. The number matches the set list. The symbol keeps two eras from landing in one stack.",
    diagram: {
      kind: "card",
      title: "Where I look on a card",
      description: "A plain card outline with the name, the collector number, the set symbol, and the rarity mark. No official card art.",
      caption: "I match the collector number to the set list. The symbol and the rarity mark only help me confirm the set.",
    },
    sections: [
      {
        id: "the-number",
        heading: "The collector number is the sort key",
        paragraphs: [
          "The collector number is the fraction or the pair printed on the card, like 4/102. The first number is the card's place in that set. The second number is how many cards the set counted in that numbering. [[Base|/collections/set/base1]] is the set I use to teach this, because 102 is the count on the list I publish from the public data. If the card says 4 and the list's card 4 is the same name, I have a match.",
          "Promos and special sets sometimes use a letter, a different total, or a number that does not look like the main set beside them. I do not force those into the main set's order. I find the list that uses that numbering. [[The timeline of sets|/guides/sets-in-order]] is how I remember that promos sit next to an era without being the era's main list.",
        ],
      },
      {
        id: "the-symbol",
        heading: "The set symbol confirms the pile",
        paragraphs: [
          "The set symbol is the small mark, usually along the right side of the picture or just under it, depending on the era. It changes with every set. I do not try to memorize the whole history of marks. I use the symbol to keep two stacks from merging when the numbers could belong to more than one list.",
          "When the symbol and the number disagree with the name I expected, the card is telling the truth and my memory is not. I look the number up on the set page. [[Pikachu|/pokedex/25]] is a good reminder that one name can live in many sets, each with its own number. The name alone is not a sort key.",
        ],
      },
      {
        id: "rarity",
        heading: "Rarity marks are a weak sort",
        paragraphs: [
          "A circle, a diamond, and a star have all been printed on cards, and the meaning shifted as the game added rarities. I do not keep a private chart of what each mark meant in each year. The chart would be longer than the sorting, and it would still not tell me which checklist line is empty.",
          "I glance at the mark only to separate a stack into 'easy to sleeve' and 'I will look twice before it goes in a pocket.' That is comfort, not cataloging. [[Sorting bulk|/guides/bulk-cards]] stays with the number. Rarity is how a page looks. The number is how a binder gets finished.",
        ],
      },
      {
        id: "regulation",
        heading: "The regulation mark is a format letter",
        paragraphs: [
          "On cards printed from 2020 onward, Play! Pokémon uses a regulation mark: a letter in the bottom-left corner. The [[Play! Pokémon rules|https://play.pokemon.com/en-us/resources/rules/]] say Standard format rotates by that letter. Older cards have no letter. A card with an older letter, or with none, can still be legal if the same card was reprinted with a current letter. The allowed letters change. I do not memorize the current list in a binder, and I do not sort by the letter.",
          "The letter is not the collector number, and it is not the rarity symbol. [[Pokémon's database help|https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database]] puts the rarity symbol in the lower-right corner, with the expansion icon. I look at the letter only when someone asks whether a card can be played in a current event. For the binder, the number still decides the slot. A card I do not trust never reaches that slot, which is [[how I spot a fake|/guides/spot-fakes]].",
        ],
      },
      {
        id: "in-practice",
        heading: "A pass through a mixed pile",
        paragraphs: [
          "I pick up a card. I read the name out loud if the pile is messy, because my eyes skip when I go too fast. I find the collector number. I check the symbol against the stack I think it belongs to. I drop it on that stack. If I cannot place it in a few seconds, it goes to a question stack, not back into the mix.",
          "The question stack gets a calmer pass with the [[collections hub|/collections]] open. [[The binder guide|/guides/collecting-binders]] is what I am feeding: set lines first, species lines second. A card I cannot identify still gets a sleeve if the corner is soft. Identification can wait an hour. A bent corner gets worse while I hesitate.",
          "Language on the card can slow the pass, and that is fine. The English name in the dataset is what the set list uses. A card printed in another language still has a collector number and a set symbol. I match those, then I read the species page if I want the local name. I do not build a separate binder per language. One set list, one number order. The name on the card is allowed to differ from the name on the screen.",
        ],
      },
    ],
    faqs: [
      {
        q: "What if the card has no fraction?",
        a: "I treat it as a promo or a special printing and I look for a list with that kind of number. I do not invent a place for it in the main set. The question stack is where it waits.",
      },
      {
        q: "Should I sort by the rarity symbol?",
        a: "I do not. The symbol changed over time. The collector number matches the card list. A shine on the card can wait until the stack is already in the right set.",
      },
    ],
  },
  {
    slug: "protect-cards",
    title: "Protecting Pokémon cards on a budget",
    description: "Sleeves, binder pages, and ordinary storage for a collection that gets opened, including a child's binder.",
    h1: "Protecting Pokémon cards without a fuss",
    lede: "I protect cards in the cheapest way that still lets me open the binder. A soft sleeve, a pocket page, and a shelf that stays dry. That is the whole plan. I use it on commons, because the common is often the card that closes a line. A binder I will not open is not a collection I am keeping.",
    sections: [
      {
        id: "sleeve-first",
        heading: "A sleeve before a pocket",
        paragraphs: [
          "The sleeve is a thin clear pocket for one card. I put it on before the card ever sees a binder page. Binder pages rub. Sleeves take that rub instead. I buy the plain ones in a stack and I do not save them for holos. A common with a whitened corner is still a hole in a checklist, and replacing it is a worse afternoon than sleeving it now.",
          "I squeeze the sleeve so the card sits flat, and I do not lick it, tape it, or double-sleeve a bulk common as a ritual. Double sleeves are for a card that travels. The daily card gets one sleeve. [[The binder guide|/guides/collecting-binders]] assumes this step already happened. A logged card with a raw surface is a card I logged too early.",
        ],
      },
      {
        id: "pages",
        heading: "Binder pages that fit a sleeved card",
        paragraphs: [
          "[[Nine-pocket and four-pocket pages|/guides/organize-binder]] are the choice. The pocket has to accept a sleeve without bowing the card. If I have to force it, the page is wrong. I replace a torn pocket instead of hoping the tear stays put. A torn pocket eats corners.",
          "Ring binders are fine when the rings do not press on the cards. I keep the rings from sitting on a page by not overfilling the binder. A D-ring that closes cleanly is kinder than a binder stuffed until the covers warp. I would rather start a second binder than bend the last page of the first.",
        ],
      },
      {
        id: "storage",
        heading: "Where the binders live",
        paragraphs: [
          "Upright on a shelf, or flat if the binder is thin, away from a window and away from a damp outside wall. I do not store binders in a basement box, a hot attic, or the boot of a car. Heat curls a sleeve. Damp stains a page. Sun fades ink. None of that shows up the day I do it. It shows up when I open the binder a summer later.",
          "Bulk that is not in a binder lives in a dry box, stacked so the cards are not bent by a heavier object. I keep food and drinks off that table. It sounds fussy until orange juice is inside a sleeve. The [[collections hub|/collections]] can be rebuilt from the cards. A stuck-together stack cannot.",
        ],
      },
      {
        id: "toploader",
        heading: "A toploader is for the trip",
        paragraphs: [
          "A toploader is a rigid plastic sleeve. I use one when a card leaves the house: a binder on its way to a child, or a single card in a parcel. It is thicker than a binder pocket wants, so it stays out of the nine-pocket page. At home the card lives in a soft sleeve, in the pocket. A hard case on every common would make a binder I do not open, and opening it is the point.",
          "I do not tape a card into a toploader. If I do not have one, the soft sleeve and a flat box still beat a bent corner. [[The binder guide|/guides/collecting-binders]] already assumes the soft sleeve. The rigid one is the exception, for travel, not the daily page.",
        ],
      },
      {
        id: "kids",
        heading: "A child's collection",
        paragraphs: [
          "[[A binder with a child|/guides/collecting-with-a-child]] starts with sleeves and a binder they can open, not with a rigid case for every common. I want the child to turn the page. A card that never gets opened might stay perfect and also stop being part of the afternoon. Sleeves are the compromise I trust.",
          "When a finished binder [[leaves for a child|/guides/donating-cards]], it leaves sleeved, in pages, with the rings working. I do not hand over loose cards and call it the same gift. The sleeve is part of the binder. It is also the part that survives being loved a little roughly, which is what a good binder is for.",
          "I replace pages when the plastic clouds or the pocket seam splits. I do not try to repair a seam with tape on the card side. Tape is how a card gets a sticky edge. A fresh page is the repair. The old page, if the rest of it is sound, can hold tokens or checklists, not cards. Once a year I open every binder far enough to see the back pages, because the back is where a warped pocket hides. That pass has saved more cards than any special case I have considered and not bought.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do commons need sleeves?",
        a: "In my binders, yes. The common is often the card that fills the line. I sleeve it before it goes in a pocket. A whitened corner is harder to fix than a sleeve is to put on.",
      },
      {
        q: "Is a toploader the default?",
        a: "No. A hard sleeve is what I use when a card travels. The binder at home uses a soft sleeve and a pocket page. A hard case for every common would make the binder something I do not open.",
      },
    ],
  },
  {
    slug: "donating-cards",
    title: "Donating Pokémon cards to children",
    description: "I donate a finished binder to a child, through a hospital, a shelter, or an after-school club, and I write down the date.",
    h1: "Donating Pokémon cards to children",
    lede: "I donate Pokémon cards by handing over a finished binder. A hospital ward, a shelter, or an after-school club can be the place it goes. Loose bulk stays here and fills the next binder. I ask the place first, I write down the day the binder leaves, and I do not publish a selling price. If the answer is not yet, the binder stays on my shelf and the public list stays unchanged. A plan is not a handoff. I would rather wait than log a gift that has not left my hands.",
    sections: [
      {
        id: "finished",
        heading: "Only a binder I have finished",
        paragraphs: [
          "A half-filled binder is a project. A finished binder is something I can put in someone else's hands without an apology. I turn the pages before it leaves. Every slot the checklist asked for has a card. [[The long guide|/guides/collecting-binders]] is why that standard exists. I do not want a child to inherit my holes.",
          "The binder is sleeved, because [[protection|/guides/protect-cards]] is part of the gift and not a private preference. Rings close. Pages are not torn. If a pocket is tired, I replace the page before the handoff. This is ordinary care, not a ceremony.",
        ],
      },
      {
        id: "where",
        heading: "Hospitals, shelters, and after-school clubs",
        paragraphs: [
          "I ask the place what they can actually use. A children's ward, a shelter playroom, and an after-school club do not all want the same thing, and some cannot take cards at all. I would rather hear no than leave a binder at a front desk that did not ask for it. The person who works there knows the room. I know the binder.",
          "I do not turn the handoff into a speech about collecting. The binder is the whole introduction. If a child wants to know the order, the order is in the pages: a set in number order, or a generation in Pokédex order. [[Collecting with a child|/guides/collecting-with-a-child]] is how I behave when I am the adult at the table. The same manners apply when I am only the person who brought the binder.",
        ],
      },
      {
        id: "public-list",
        heading: "What the public list shows",
        paragraphs: [
          "The [[given-away list|/donations]] records the recipient and the date. It does not record a selling price, and it does not record what a card would sell for. A binder leaving the house is a fact about the project. It is not a valuation.",
          "The [[collections hub|/collections]] still shows the checklist those cards came from. Once I mark the binder given away, I stop treating those lines as holes I need to fill again, unless I have chosen to build that binder a second time. The screen should match the shelf. An absent binder should not look like a binder I forgot to start.",
        ],
      },
      {
        id: "spares",
        heading: "Spare cards stay in the pipeline",
        paragraphs: [
          "[[Bulk|/guides/bulk-cards]] is how the next binder gets finished. Extras do not go out as a loose handful alongside the gift. A loose handful looks generous and arrives as homework. I keep the extras, sort them, and let them close real lines.",
          "If you have spare cards for that sorting, write to [[magnus@linksforcards.com|mailto:magnus@linksforcards.com]]. Tell me what is in the box in plain language: sets you recognize, or just bulk. I do the sorting. Shops that send cards are thanked by name on the thanks page. That is the whole arrangement.",
          "I write the handoff down the day it happens, not at the end of the month. The recipient can be the name of a ward or a club if a child's name is not mine to publish. The date is the day the binder left my hands. If a place asks me to wait, the binder stays on my shelf and the list stays unchanged. I would rather be slow than invent a gift that has not happened. A binder still in my house is not a binder I have given away, however sure I am about the plan.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you take loose bulk?",
        a: "Yes. Loose bulk is welcome. I sort it into binders. I do not hand loose bulk on as the gift. A finished binder is the thing that leaves, and the extras stay to fill the next one.",
      },
      {
        q: "Do the public pages show a selling price?",
        a: "No. The public list shows a recipient and a date. It never shows a selling price. The binder is a finished checklist leaving the house, and that is the only fact I publish about it.",
      },
    ],
  },
  {
    slug: "sets-in-order",
    title: "Pokémon card sets in order",
    description: "The series and sets in the public card list, from Base in 1999 through the newest series, with a link to every set page.",
    h1: "Pokémon card sets in order",
    lede: "I keep the sets in the order the public card list uses. There are {sets} sets in {seriesCount} series, and {cards} cards behind those names. The list under this note is that order, built from the same data as the checklists. Each row links to the set page I mark against. The date on the row is the release date from that data.",
    sections: [
      {
        id: "series-and-set",
        heading: "A series is a shelf, a set is a binder",
        paragraphs: [
          "A series is a run of sets that share an era. Base, Jungle, and Fossil sit in the Base series. A set is one card list with its own collector numbers. I build binders at the set level and I browse at the series level. Mixing those two words is how a box gets labeled 'Base' when half of it is Jungle.",
          "[[The binder guide|/guides/collecting-binders]] uses this timeline when I decide which list a card belongs to. [[Organizing the pages|/guides/organize-binder]] assumes the list is already chosen. The timeline does not tell me which card is pretty. It tells me which checklist is open.",
        ],
      },
      {
        id: "how-to-read",
        heading: "How I read the list",
        paragraphs: [
          "Each block below is a series. Inside it, the sets run by release date from the public data. The date is the release date in that data, written out in the language of this page. The count is the number of cards in the list I publish, which is names and collector numbers only. I do not add a guess for a card the data does not have.",
          "Promos, POP series, and the small lists gathered under Other are in the data because they have collector numbers too. I do not hide them to make the history look neat. A promo is still a list. If I am sorting bulk and the number matches a promo list, that is the stack it joins.",
        ],
      },
      {
        id: "early",
        heading: "Where I tell people to start looking",
        paragraphs: [
          "The [[Base series|/collections/series/base]] is the start of the published list. [[Base|/collections/set/base1]] itself is 9 January 1999, 102 cards. [[The Gen 1 checklist|/guides/gen-1-checklist]] explains why those 102 cards are not the same thing as the original 151 species. I send people to both pages on purpose. The confusion is common and the fix is just the two counts, side by side.",
          "The other end of the list moves when the data moves. [[Mega Evolution|/collections/set/me1]] is in the current data as its own series. I link it so the timeline has a recent door, not because a new set is more important than an old common. [[Mega Evolution—Delta Reign|/collections/set/delta-reign]] is not in that list yet. I wrote a page for the binder before the collector numbers exist, and I am not inserting a guessed count here. The [[collections hub|/collections]] is the same list with the progress bars. This note is the list with the dates.",
        ],
      },
      {
        id: "using-it",
        heading: "Using the timeline while sorting",
        paragraphs: [
          "I keep this page open when a box spans more than one era. I do not memorize release years. I click the series, then the set, then I match the collector number. If the name matches, the card leaves the box. If the name does not match, I have the wrong list, and forcing it would put a hole in two binders at once.",
          "The data was built on {built}. When a brand-new set is missing here, it is missing from that build, not hiding in a menu. I would rather show a dated list than a vague promise that everything up to today is included. The set pages linked below are the checklists I actually mark.",
          "I use the count on each row as a reality check while I sort. If I think I have finished a set and the binder has fewer cards than the count, I missed a number, usually a trainer or an energy near the end. If I have more cards than the count, I have mixed in a promo or the next set. Either way the list is the correction. I do not round a set to a vibe of 'about a hundred.' The number is the number of slots.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are the sets in release order inside each series?",
        a: "Yes. Each series block lists its sets by the release date in the public card data. The series themselves follow the order of that data. I sort a box in that same order so the stacks match the pages.",
      },
      {
        q: "Does this list include prices?",
        a: "No. It includes the set name, the release date, and the card count from the public list. Nothing on this page is a selling price. The count is the number of slots in that binder, nothing else.",
      },
    ],
  },
  {
    slug: "collecting-with-a-child",
    title: "Starting a Pokémon collection with a child",
    description: "How I start one binder with a child: one job, bulk cards, sleeves, and permission to stop.",
    h1: "Starting a Pokémon collection with a child",
    lede: "I am a dad who likes the checklist, and I have sat at the table with a child who likes the pictures. The way I start is smaller than my own shelf. One binder. One job. Bulk cards. I stop the sitting while it is still fun. The child picks the card. I only insist on the sleeve and the numbered pocket.",
    sections: [
      {
        id: "one-binder",
        heading: "One binder, on purpose",
        paragraphs: [
          "I do not open with the whole history of the card game. [[The long guide|/guides/collecting-binders]] is for me, later, if the child asks where the other binders came from. At the first sitting I offer one choice: a set binder for one short list, or [[the generation 1 binder|/collections/generation/1]] with one card of each original species. [[The Gen 1 note|/guides/gen-1-checklist]] is the version of that choice I can explain in a minute. One hundred fifty-one creatures, one card each, any printing.",
          "Two projects at once is how a child gets a lap full of stacks and no finished page. I have done that. The second sitting is worse, because the table looks like a chore. One binder means the next card has an obvious pocket. Obvious is kind.",
        ],
      },
      {
        id: "their-choice",
        heading: "Let the child pick the first page",
        paragraphs: [
          "I shuffle a small stack of sleeved bulk and I let the child choose the first card that goes in. If the binder is in Pokédex order, the card still goes in its numbered pocket, not at the front. I explain that once, without a speech. The pocket is the creature's place. Choosing the card is the fun part. The number is the promise that the card can be found again.",
          "I do not correct taste. A Pikachu is a fine first card. So is a creature I find plain. [[Bulk|/guides/bulk-cards]] is the right pile for this, because there are enough copies that a choice is not precious. A precious stack makes me hover. Hovering is the opposite of a Saturday at the kitchen table.",
        ],
      },
      {
        id: "sleeves",
        heading: "Sleeves, then the page",
        paragraphs: [
          "[[Sleeves|/guides/protect-cards]] go on before the card is loved by small hands. I show it as a motion, not a lecture: card in, sleeve flat, pocket open, card in. Children are good at motions. They are less interested in my opinions about storage. I keep drinks off the table and I do not narrate the reason unless I am asked.",
          "If a card bends, I do not make it a moral event. I sleeve a replacement from bulk if I have one, or I leave the line empty until I do. An empty line is allowed. [[A binder I give away|/guides/donating-cards]] is a finished one, and a child's Saturday binder does not have to become that. It can stay a Saturday binder.",
        ],
      },
      {
        id: "stop",
        heading: "Stop while it is still fun",
        paragraphs: [
          "I end the sitting when the child is still willing, not when I have reached a round number. Twenty minutes that ends with a closed binder will happen again. An hour that ends with a sigh might not. The [[collections hub|/collections]] will remember the lines I logged. Nothing on the screen is more important than the child wanting to open the binder next time.",
          "I do not track a child's binder as a contest against mine. The public pages of this project are my checklists. A kid's page is allowed to be unfinished forever. If they grow into the longer hobby, the set lists and the species pages are there. If they do not, the binder still did its job: cards in order, sleeves on, an afternoon that belonged to them.",
          "The questions I actually answer are small. Which pocket does this one go in. Can this duplicate fill a hole. Is it all right to stop. Yes, the numbered pocket. Yes, if the line is empty. Yes, stop. A card that looks wrong does not go in while I am unsure. [[How I spot a fake|/guides/spot-fakes]] is that check, done quietly, with another bulk card offered in its place. I keep the bigger opinions to myself unless the child asks. A collection started this way can stay tiny and still be a real collection. It has an order, a sleeve, and a next empty line whenever someone feels like opening it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which binder should a child start with?",
        a: "I offer one: either a short set list, or generation 1 with one card of each species. I do not start a child on every set at once.",
      },
      {
        q: "Do you need rare cards for a child's binder?",
        a: "No. Bulk commons fill the lines. A rare card is optional, and it is not the point of the first afternoon.",
      },
    ],
  },
  spotFakesEn,
];

export function englishArticles(kind: "us" | "uk"): ArticleCopy[] {
  if (kind === "us") return us;
  return localize(us, toUK);
}
