import type { ArticleCopy } from "@/lib/articles";
import { spotFakesDe } from "./spot-fakes/de";

export function germanArticles(): ArticleCopy[] {
  return [
    {
      slug: "collecting-binders",
      title: "Pokémon-Karten im Sammelordner sammeln",
      description: "Wie ich Pokémon-Karten in einem Set-Ordner und einem Pokédex-Ordner sammle und wo die Checklisten liegen.",
      h1: "Sammelordner für Pokémon-Karten: Set-Ordner und Pokédex",
      lede: "Ich sammle Pokémon-Karten in Sammelordnern und nicht als losen Stapel im Regal. Ein Ordner folgt einem Set, ein anderer dem Pokédex. Diese Seite ist die Übersicht. Die kürzeren Notizen beantworten jeweils eine Frage, in der Reihenfolge, in der ich am Tisch wirklich arbeite: zuerst die Aufgabe des Ordners festlegen, dann die Bulk-Karten sortieren, und die Kartennummer nachschlagen, sobald eine Karte in keinen Stapel will. Wer nur eine Frage hat, steigt bei der passenden Notiz ein. Wer den Zusammenhang will, bleibt hier.",
      diagram: {
        kind: "binders",
        title: "Zwei Ordner, zwei Raster",
        description: "Ein Set-Ordner folgt den Kartennummern. Ein Generationenordner hält eine Karte je Art in Pokédex-Reihenfolge.",
        caption: "Links ein Set in Nummernfolge. Rechts eine Art je Fach, in Pokédex-Reihenfolge.",
      },
      sections: [
        {
          id: "two-binders",
          heading: "Zwei Sammelordner, zwei Aufgaben",
          paragraphs: [
            "Ein Set-Ordner und ein Generationenordner stellen verschiedene Fragen. Der Set-Ordner will jede Karte dieses Sets, in der Reihenfolge der Kartennummer, und lässt eine schlichte Karte nicht weg, nur weil sie gewöhnlich aussieht. Der Generationenordner will eine Karte je Art in diesem Pokédex-Abschnitt. Dort zählt jeder Druck, und jede Sprache zählt. Früher habe ich beide Aufgaben in einen Ordner gepackt. Danach war die fehlende gewöhnliche Karte weg, zwischen zwei Karten, die ich für auffälliger hielt. Die Checkliste habe ich erst Wochen später wieder aufgeschlagen.",
            "Die lange Fassung vom Sortieren am Tisch steht in [[wie ich einen Ordner ordne|/guides/organize-binder]]. Die kurze Fassung hätte ich mir früher auf den Zettel schreiben sollen: die Aufgabe wählen, bevor die Seiten ins Haus kommen. Eine Seite mit neun Taschen ist ein Raster. Die Geschichte auf der Karte ist dem Raster egal. Mir ist sie nicht egal, deshalb lege ich die Reihenfolge fest, solange der Ordner noch leer ist. Eine volle Seite später umzuschichten, verschlingt einen Nachmittag. Den habe ich einmal ausgegeben und plane ihn nicht als Gewohnheit.",
          ],
        },
        {
          id: "set-binder",
          heading: "Ein Set-Ordner folgt der Kartenliste",
          paragraphs: [
            "[[Base|/collections/set/base1]] ist das Beispiel, das ich immer noch aufschlage, wenn ich das erklären will. Auf Deutsch kenne ich es als Basis-Set. Erschienen ist es am 9. Januar 1999, und die öffentliche Liste führt 102 Karten, Kennung base1. Die Ordnerseite folgt dieser Liste: Nummer 1, dann 2, dann 3, Trainer und Energie eingeschlossen. Steht eine Karte auf der Liste, hat der Ordner ein Fach. Ich lasse kein Loch, weil die Karte gewöhnlich ist, und ich ziehe ein Holo nicht nach vorn, damit die erste Seite hübscher wirkt. Die hübsche Seite verdeckt genau die Nummer, die noch fehlt.",
            "Die volle Reihenfolge der Serien und Sets steht in [[Pokémon-Sets in Reihenfolge|/guides/sets-in-order]]. Die brauche ich, wenn eine Schachtel Bulk mehrere Jahre mischt. Eine Karte aus Jungle gehört nicht in den Base-Ordner, auch wenn die Zeichnung sich nach demselben Jahr anfühlt. Auf Deutsch heißt Jungle oft Dschungel. Die Liste auf der Seite benutzt den englischen Namen, und nach dem sortiere ich. Die Set-Seite ist Kartenliste und Checkliste zugleich. Eine Zeile markiere ich erst, wenn die Karte im Fach steckt. Ein Stapel auf dem Tisch ist eine Absicht, kein Eintrag.",
            "Ein dritter Ordner folgt einem Thema, nicht einem Set und nicht einem einzelnen Art-Fach. [[Themen-Binder|/collections/themes]] sammeln jeden englischen Druck einer Art, eines Künstlers oder einer Kartenform. [[Alle Pikachu-Karten|/collections/themes/pikachu]] ist die Liste, die ich aufschlage, wenn der Stapel voll von diesem Gesicht ist.",
          ],
        },
        {
          id: "dex-binder",
          heading: "Ein Generationenordner folgt dem Pokédex",
          paragraphs: [
            "Ein Generationenordner hält eine Karte je Art. [[Generation 1|/collections/generation/1]] sind die ursprünglichen 151. Die Generationen 1 bis 9 umfassen {species} Arten. [[Wie ich einen Pokédex-Ordner fülle|/guides/pokedex-binder]] ist die lange Notiz dazu, das zu tun, ohne eine Jagd auf seltene Drucke daraus zu machen. [[Die Checkliste der ersten 151|/guides/gen-1-checklist]] bleibt bei diesen 151, weil die meisten Leute genau diesen Ordner meinen, wenn sie von den ursprünglichen Wesen sprechen. 151 kann ich im Kopf behalten. Die späteren Zählungen lasse ich auf der Seite stehen.",
            "[[Pikachu|/pokedex/25]] zeigt, warum die Regel trägt. Die Art-Seite listet jeden Druck aus den öffentlichen Daten, über viele Sets hinweg. Der Generationenordner braucht einen davon. Ein Pikachu aus dem Bulk füllt das Fach. Eine spätere seltene Illustration füllt dasselbe Fach. Ich hebe nicht jeden Druck in diesem Ordner auf. Jeden Druck eines Sets zu halten, ist die Aufgabe des Set-Ordners, und nur für das Set, das ich gerade baue. Zwei Pikachu mit verschiedenen Nummern sind zwei Zeilen in zwei Listen. Sie sind kein doppeltes Fach in der Generation.",
          ],
        },
        {
          id: "bulk",
          heading: "Bulk-Karten füllen die Fächer",
          paragraphs: [
            "Die meisten Karten, die eine Zeile schließen, kommen aus dem Bulk. Das sage ich mit Zuneigung. Bulk ist der gewöhnliche Stapel: häufige Karten, etwas seltenere, Dubletten und das Karpador, das immer wieder auftaucht. Dieser Stapel macht den Ordner fertig. [[Was ich mit Bulk-Karten mache|/guides/bulk-cards]] ist die Sortierweise. [[Kartennummer und Set-Symbol lesen|/guides/read-a-card]] ist der Griff, mit dem ich Nummer und Symbol finde, wenn der Stapel gemischt ist. Eine Blechdose aus dem Supermarkt ist oft der Anfang. Ich schütte sie aus, als Material für offene Zeilen.",
            "Ich sortiere nach Set, bevor ich nach Wesen sortiere. Eine Karte, die zu einer offenen Zeile im Set-Ordner passt, wandert dorthin. Eine überzählige Karte, die zu einer leeren Art-Zeile passt, kann in den Generationenordner. Alles andere bleibt in der Bulk-Schachtel, bis eine Checkliste danach fragt oder bis ein fertiger Ordner das Haus verlassen darf. Bewundern kommt nach dem Einordnen. Vorher ist Bewundern nur eine Art, die Schachtel noch einen Monat halb sortiert stehen zu lassen. Glänzende Karten können in der Hülle warten. Die offene Zeile wartet nicht auf sie.",
          ],
        },
        {
          id: "tracker",
          heading: "Die öffentliche Liste ist die Checkliste",
          paragraphs: [
            "Die [[Startseite|/]] ist die öffentliche Zählung: wie viele verschiedene Karten eingetragen sind und welche Ordner sich bewegt haben. [[Die Sammlungen|/collections]] sind die Arbeitsliste. Dort liegen die Sets nach Serie, jeder Generationenordner hat eine Seite, und jede Art hat eine eigene Seite. Ein gefüllter Balken heißt, dass ich die Karte eingetragen habe. Er sagt nichts darüber, zu welchem Handel eine Karte taugen könnte. Öffentliche Seiten zeigen so eine Angabe nicht. Ich führe sie auch nicht neben der Checkliste, auf einem Zettel oder auf der Schachtel.",
            "Wenn eine Zeile auf dem Bildschirm und die Karte im Ordner sich widersprechen, gewinnt der Ordner. Vollständig nenne ich einen Ordner erst, nachdem ich die Seiten umgeblättert habe. Der Bildschirm ist da, damit ich das Loch sehe, bevor ich es vergesse. Mehr soll die Liste nicht leisten. Sie ist die Checkliste, die mit dem Regal übereinstimmen soll. Eine Karte, die ich nur erinnere, zählt nicht. Eine Karte, die ich eingetragen und dann im Schuhkarton gelassen habe, sitzt auch nicht im Ordner.",
          ],
        },
        {
          id: "care-and-kids",
          heading: "Hüllen, Kinder und ein Ordner, der geht",
          paragraphs: [
            "Eine Karte, die im Ordner leben soll, bekommt zuerst eine Hülle. [[Karten schützen|/guides/protect-cards]] ist die Notiz zu Hüllen, Seiten mit neun Taschen, Seiten mit vier Taschen und den Orten, an die ich einen Ordner nicht stelle. Angefangen habe ich mit einer Blechdose aus dem Supermarkt und das feuchte Regal auf die harte Tour gelernt. Feuchtigkeit sieht man am ersten Abend nicht. Man sieht sie, wenn die Seite einen Sommer später fleckig ist. Die Hülle ist der Schritt, den ich nicht auslasse, auch bei einer gewöhnlichen Karte, die in jeder Bulk-Schachtel liegt.",
            "[[Sammeln mit einem Kind|/guides/collecting-with-a-child]] ist die Notiz, die ich aufschlage, wenn ein Kind sich an den Tisch setzt. Ein Ordner, eine Aufgabe, und die Erlaubnis aufzuhören. [[Einen fertigen Ordner spenden|/guides/donating-cards]] beschreibt, was passiert, wenn ein Ordner vollständig ist und ich ihn abgebe. Ich spende einen fertigen Ordner, keine Handvoll loser Reste. Die öffentliche Liste hält den Empfänger und den Tag fest. Lose Reste bleiben hier und schließen die nächste Zeile. So bleibt das Weitergegebene vollständig, und die Checkliste bleibt ehrlich.",
            "Müsste ich eine Anweisung auf einen Zettel schreiben, wäre es diese. Die Aufgabe des Ordners festlegen. Die passende Checkliste aufschlagen. Die Karte einhüllen, die ein Loch schließt. Die Zeile erst markieren, wenn die Karte im Fach sitzt. Aufhören, wenn der Tisch unruhig wird, und beim nächsten Mal an demselben Loch weiterarbeiten. Der Rest dieser Notizen ist genau diese Anweisung, ausgeschrieben für die Frage, die tatsächlich kommt: Seitengröße, Bulk, die 151, der ganze Pokédex, die Nummer auf der Karte, das Lager, ein Kind am Tisch oder ein Ordner, der das Haus verlässt.",
          ],
        },
      ],
      faqs: [
        {
          q: "Brauche ich einen Set-Ordner und einen Generationenordner?",
          a: "Nein. Ich führe beide, weil sie verschiedene Fragen stellen. Ein Set-Ordner allein ist ein ganzer Anfang. Ein Generationenordner allein ist der andere ganze Anfang. Schief geht es, wenn ein Ordner beide Aufgaben gleichzeitig erledigen soll. Dann verschwindet die fehlende gewöhnliche Karte hinter einer Seite, die nur hübsch sein wollte.",
        },
        {
          q: "Wo liegen die Checklisten?",
          a: "Jedes Set hat eine Kartenliste, jede Generation eine Checkliste, und jedes Pokémon eine Seite mit seinen Drucken. Die Sammlungen verknüpfen alle drei. Ich markiere eine Zeile erst, wenn die eingehüllte Karte im Fach liegt, und ich blättere den Ordner durch, bevor ich ihn vollständig nenne.",
        },
      ],
    },
    {
      slug: "organize-binder",
      title: "Einen Set-Ordner nach Kartennummer ordnen",
      description: "Seiten mit neun oder vier Taschen, Nummernfolge und Pokédex-Folge, so wie ich einen Sammelordner wirklich sortiere.",
      h1: "Wie ich einen Sammelordner ordne",
      lede: "Ich ordne den Sammelordner, bevor ich die Karten ordne. Seitengröße und Reihenfolge sind das ganze System. Alles andere ist eine Karte, die ein Fach sucht, das ich schon gebaut habe. Steht die Entscheidung noch nicht, wird aus jedem Abend ein neuer Anfang, und die Schachtel sieht danach genauso gemischt aus wie davor.",
      diagram: {
        kind: "pockets",
        title: "Neun Taschen und vier Taschen",
        description: "Eine Seite mit neun Taschen hält neun Karten in drei mal drei. Eine Seite mit vier Taschen hält vier größere Karten.",
        caption: "Neun Taschen halten ein Set kompakt. Vier Taschen zeigen jede Karte größer, und der Ordner wird schneller dick.",
      },
      sections: [
        {
          id: "nine-or-four",
          heading: "Neun Taschen oder vier Taschen",
          paragraphs: [
            "Eine Seite mit neun Taschen hat drei Spalten zu je drei Karten. Eine eingehüllte Karte passt hinein. Ein Set von etwa hundert Karten wird daraus ein Dutzend Seiten, ein Ordner, den ich mit einer Hand aufgeschlagen halten kann. Das ist die Seite für Set-Ordner. [[Paldean Fates|/collections/set/sv4pt5]] führt in der öffentlichen Liste 245 Karten, Kennung sv4pt5. Der Neuner-Ordner ist dabei schon ein dicker Band. Dieselbe Liste auf Viererseiten würde einen Ordner ergeben, den ich nicht tragen möchte. Die Seitengröße entscheide ich, bevor die erste Karte einzieht.",
            "Eine Seite mit vier Taschen hat zwei Spalten zu je zwei Karten, und jede Karte sitzt größer. Die nutze ich, wenn es ums Anschauen geht und nicht um eine lange Liste zum Abhaken. Ein Generationenordner kann beides werden. Neun Taschen bringen {species} Arten in weniger Ordnern unter. Vier Taschen machen die Lieblingsseite eines Kindes leichter zu finden und das Regal schwerer. Ein fertiges Set von einer Seitengröße in die andere umzuziehen, ist ein Nachmittag, den ich schon einmal verbracht habe. Noch einmal plane ich das nicht. [[Die lange Übersicht|/guides/collecting-binders]] ist der Grund, warum die beiden Ordneraufgaben getrennt bleiben. In einem Band mische ich die Seitengrößen nicht.",
          ],
        },
        {
          id: "set-order",
          heading: "Ordnung nach Kartennummer",
          paragraphs: [
            "Set-Ordnung ist die Kartennummer auf der Karte, gelegt an die Kartenliste. Nummer 1 ist das erste Fach, auch wenn es nicht das Wesen ist, das ich am liebsten mag. Trainer und Energie bleiben dort, wo das Set sie hingesetzt hat. Ich baue vorn keine schöne Holoseite. Die schöne Seite versteckt die fehlende gewöhnliche Karte, und genau die hält den Ordner offen. Eine Lücke ist eine fehlende Nummer, kein Gestaltungsmittel.",
            "[[Die Sets in Reihenfolge|/guides/sets-in-order]] sagen mir, zu welcher Liste eine Karte gehört. Das Set-Symbol hilft beim Bestätigen. Sortiert wird nach der Nummer. Teilen sich zwei Karten einen Namen und unterscheiden sich die Nummern, sind es verschiedene Zeilen. Das habe ich an Promos gelernt. Die sitzen oft neben einem Hauptset und führen eine eigene Zählung. Ich zwinge sie nicht in die Nummern des Nachbarsets, nur weil der Name bekannt ist.",
          ],
        },
        {
          id: "dex-order",
          heading: "Ordnung nach Pokédex-Nummer",
          paragraphs: [
            "Pokédex-Ordnung ist die Ordnung der Arten. [[Generation 1|/collections/generation/1]] läuft von Bisasam bis Mew, #001 bis #151. Dem Fach ist egal, aus welchem Set die Karte stammt. Eine eingehüllte gewöhnliche Karte aus einem neuen Set füllt #001 genauso wie ein alter Druck. [[Die Notiz zum Pokédex-Ordner|/guides/pokedex-binder]] erklärt, warum ich bei einer Karte je Art aufhöre. [[Die Checkliste der ersten 151|/guides/gen-1-checklist]] ist dieselbe Idee, beschränkt auf diese 151. Das Fach #050 rückt nicht nach vorn, weil ich die Karte an einem Dienstag gefunden habe.",
            "Die Pokédex-Nummer schreibe ich nur dann klein an die Ecke der Seite, wenn die Seite ein neues Hundert beginnt. Ich beschrifte nicht jedes Fach. Die Checkliste auf der Sammlungsseite ist das Verzeichnis. Der Ordner ist der Beweis. Wer eine Art suchen will, kennt die Nummer oder schlägt sie nach. Ein Ordner voller Zettel an jedem Fach wird steif und sagt trotzdem nicht, welche Zeile noch leer ist.",
          ],
        },
        {
          id: "by-type",
          heading: "Nach Typ sortieren, wenn der Ordner keine Checkliste ist",
          paragraphs: [
            "Der Typ ist das Zeichen oben rechts auf einer Pokémon-Karte. [[Die Hilfe zur Kartendatenbank|https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database]] beschreibt es so: das Energie-Symbol für Pflanze, Feuer, Wasser und den Rest. Ein Kind, das jede Wasserkarte auf einer Seite haben will, sortiert nach Typ. Das nutze ich für einen Spielstapel auf dem Tisch. Für einen Set-Ordner nutze ich es nicht. Die Liste ist nummeriert, und eine Seite eines einzigen Typs versteckt die fehlende Nummer.",
            "Trainer tragen dieses Typ-Zeichen nicht, und Basis-Energie bleibt ein eigener Stapel. An so einem Nachmittag bekommen diese Karten eigene Haufen, statt unter ein Wesen gezwungen zu werden. Generation ist die andere Ordnung, ein Bereich im Pokédex, und genau das ist [[Generation 1|/collections/generation/1]] schon. Set, Nummer, Typ und Generation sind vier Fragen. Pro Ordner nehme ich eine. [[Wie ich das Zeichen lese|/guides/read-a-card]] zeigt, wo das Symbol sitzt, bevor ich dem Stapel traue.",
          ],
        },
        {
          id: "marking-a-line",
          heading: "Wann ich eine Zeile markiere",
          paragraphs: [
            "[[Die Sammlungen|/collections]] zeigen eine Zeile als gefüllt, wenn ich die Karte eingetragen habe. Eintragen ist etwas anderes, als einen Stapel anzusehen. Ich stecke die Karte in die Hülle, die Hülle ins Fach, und dann markiere ich die Zeile. Markiere ich zuerst, lügt die Liste, und der Ordner hat ein Loch. Dieses Loch fällt erst auf, wenn ich die Seiten wirklich umblättere, oft an einem anderen Abend, wenn die Schachtel schon wieder zu ist.",
            "[[Hüllen und Seiten|/guides/protect-cards]] kommen vor der Markierung, nicht danach. Eine Karte, die sich in der Tasche blank scheuert, muss ich danach ersetzen, und die Zeile war nie wirklich fertig. Widersprechen sich Bildschirm und Ordner, blättere ich. Der Ordner gewinnt. Die Liste korrigiere ich auf den Stand der Fächer, nicht umgekehrt. Ein Balken auf dem Bildschirm ist eine Erinnerung. Das Fach ist die Tatsache.",
            "Ein brauchbarer Abend sieht so aus. Ich nehme einen Ordner vor und lasse den anderen zu. Den passenden Stapel lege ich in Nummernfolge auf den Tisch, neun Karten in eine Reihe, wenn ich Neunerseiten benutze. Jede Karte kommt in die Hülle, dann ins Fach, und erst danach schaue ich auf die Checkliste. Karten, die heute nicht in diesen Ordner gehören, wandern zurück in ihre Schachtel, bevor ich anfange. Sonst werden sie auf halber Seite ein zweites Vorhaben. Eine fertige, abgelegte Seite ist ein besserer Abend als drei bewunderte Stapel.",
          ],
        },
      ],
      faqs: [
        {
          q: "Soll ein Generationenordner Seiten mit neun Taschen haben?",
          a: "Ich nehme neun Taschen, wenn der Abschnitt fertig werden soll. Ich nehme vier Taschen, wenn weniger Karten größer zu sehen sein sollen. Beides sind richtige Ordner. In einem Band mische ich die beiden Seiten nicht, weil die Zählung und das Regal dabei durcheinandergeraten.",
        },
        {
          q: "Sortiere ich ein Set nach Typ oder nach Seltenheit?",
          a: "Nein. Ein Set sortiere ich nach Kartennummer. Typ und Seltenheit verändern das Aussehen einer Seite und verstecken die fehlenden Nummern. Trainer und Energie bleiben an der Stelle, die das Set ihnen gegeben hat.",
        },
      ],
    },
    {
      slug: "bulk-cards",
      title: "Was ich mit Bulk-Karten mache",
      description: "Bulk füllt die Ordner. Ich sortiere nach Set, dann nach der leeren Art-Zeile, und den Rest behalte ich.",
      h1: "Bulk-Karten sind der Stapel, der den Ordner fertig macht",
      lede: "Bulk behandle ich mit Zuneigung. Gemeint ist der gewöhnliche Stapel: häufige Karten, Dubletten und die Karte, die in jeder Dose steckt. Dieser Stapel macht einen Sammelordner fertig. Oft fängt er als Blechdose aus dem Supermarkt an. Ich sortiere ihn nach Set, lasse übrige Karten leere Art-Zeilen schließen und behalte, was übrig bleibt, statt es Gerümpel zu nennen.",
      sections: [
        {
          id: "why-bulk",
          heading: "Warum Bulk für mich die Sammlung ist",
          paragraphs: [
            "Ein Holo ist eine schöne Seite. Ein System ist es nicht. Das System ist die leere Zeile, und leere Zeilen sind meist gewöhnliche Karten. [[Die Ordner-Übersicht|/guides/collecting-binders]] sagt das in der langen Form. Am Tisch gilt die kurze Form: füllt die Karte ein Loch, ist es die Karte, die ich haben wollte, auch wenn die Zeichnung dasselbe Karpador ist, das ich schon auswendig kenne. Die Wiederholung stört mich nicht. Sie ist der Vorrat.",
            "Mit dem Entschuldigen für Bulk habe ich aufgehört, als ein Generationenordner aus einer gemischten Schachtel schneller vorankam als aus allem, was ich als besonders beiseitegelegt hatte. Besondere Karten können in der Hülle warten. Die Checkliste wartet nicht auf sie. [[Sammeln mit einem Kind|/guides/collecting-with-a-child]] benutzt denselben Stapel. Ein Kind kann eine gewöhnliche Karte halten, ein Fach wählen und sehen, wie die Zeile zugeht. Dafür brauche ich keine seltene Karte auf dem Tisch, und ich halte auch keine zurück, als wäre die gewöhnliche zu schlicht zum Anfassen.",
            "Manche Themenlisten bestehen fast nur aus diesem Stapel. [[Yuka Moriis Tonkarten|/collections/themes/yuka-morii]] sind häufige und ungewöhnliche Karten, und dort ist Bulk Gold. [[Themen-Binder|/collections/themes]] ist der Ort, an dem diese Checklisten liegen.",
          ],
        },
        {
          id: "sort-by-set",
          heading: "Zuerst nach Set sortieren",
          paragraphs: [
            "Ich kippe die Schachtel nur so weit aus, wie der Tisch freundlich bleibt. Dann sortiere ich nach Set, nicht nach Wesen und nicht nach Glanz. [[Nummer und Symbol lesen|/guides/read-a-card]] ist der Teil, den ich in den Händen erledige: Kartennummer finden, Set bestätigen, einen Stapel bilden. Ein Stapel für Base, ein Stapel für ein neueres Set, ein Stapel, den ich noch nicht zuordnen kann. Der dritte Stapel ist erlaubt. Er ist besser als eine Karte, die ich aus Ungeduld in den falschen Ordner schiebe.",
            "Jeder Stapel geht zur Set-Seite in [[den Sammlungen|/collections]]. Die Seite ist die Kartenliste. Ist die Zeile offen, wandert die Karte in diesen Ordner. Ist die Zeile gefüllt, ist die Karte eine Dublette und bleibt Bulk. Dubletten ziehe ich nicht zum Bewundern heraus, solange in diesem Stapel noch offene Zeilen sind. Bewunderung ist die Art, wie eine halb sortierte Schachtel einen Monat überdauert. Erst die offenen Nummern, dann alles andere. Die Dose darf hübsch sein, wenn sie leer an offenen Zeilen ist.",
          ],
        },
        {
          id: "species-lines",
          heading: "Dann die leere Art-Zeile",
          paragraphs: [
            "Eine Dublette für ein Set kann trotzdem die erste Karte dieser Art in einem Generationenordner sein. [[Der Pokédex-Ordner|/guides/pokedex-binder]] braucht nur eine. [[Karpador|/pokedex/129]] ist das Beispiel, dem ich traue, weil der Bulk immer noch ein weiteres anbietet. Ist #129 leer, verlässt das nächste Karpador die Schachtel und füllt das Fach. Ist #129 belegt, geht die Karte zurück. Ich suche dafür nicht den ältesten Druck und nicht den neuesten. Ich nehme die Karte, die schon da ist.",
            "Für eine Art-Zeile zählt jede Sprache. Eine Karte mit einem anderen gedruckten Namen zeigt auf der Art-Seite dieselbe Art, weil die Seite der nationalen Pokédex-Nummer folgt. Ich prüfe die Nummer, wenn der Name auf der Karte nicht der englische Name ist, den ich auswendig kann. Bei Karpador steht auf einer englischen Karte Magikarp. Die Nummer entscheidet, nicht meine Erinnerung an den Namen. So landet eine fremdsprachige Karte im richtigen Fach, ohne dass ich dafür einen zweiten Ordner aufmache.",
          ],
        },
        {
          id: "extras",
          heading: "Was mit den übrigen Karten passiert",
          paragraphs: [
            "Der Rest bleibt in einer Schachtel mit dem Set-Namen, oder in einer gemischten Schachtel, wenn der Stapel klein ist. Das ist kein Abfall. Der nächste Ordner braucht oft genau die Karte, die ich fast weggelegt hätte. Ich halte sie trocken, stecke sie in eine Hülle, wenn die Ecke schon weich ist, und lasse sie nicht auf dem Boden liegen. Eine weiche Ecke wird in einer offenen Schachtel nur weicher. Die Hülle ist auch hier der kleinere Aufwand.",
            "Ist ein Ordner fertig, ändert sich die Geschichte. [[Ein fertiger Ordner kann gehen|/guides/donating-cards]], zu einem Kind. Lose Reste gehen nicht mit. Sie bleiben und füllen den nächsten Ordner. Diese Trennung hält die Gabe vollständig und die Checkliste ehrlich. Eine Handvoll lose Karten sieht großzügig aus und kommt als Hausaufgabe an. Ein geschlossener Ordner ist etwas, das jemand aufschlagen kann, ohne meine Lücken zu erben.",
            "Die Schachtel selbst bekommt ein langweiliges Schild: den Set-Namen, oder gemischt, wenn ich sie noch nicht getrennt habe. Auf das Schild schreibe ich keine Vermutung darüber, was die Karten im Handel tun könnten. Ich führe keine eigene Schachtel für tolle Karten und keine Kiste für Rest. Diese Trennung ist die Art, wie gewöhnliche Karten verschwinden und Löcher offen bleiben. Einmal im Monat nehme ich die gemischte Schachtel, sortiere wieder nach Set und mache sie kleiner. Das Ziel ist ein kleinerer Fragenstapel, keine schönere Ausstellung. Eine Karte, der ich nicht traue, füllt keine Zeile. [[Eine Fälschung erkennen|/guides/spot-fakes]] ist eine eigene Notiz. In der Bulk-Schachtel liegen die gewöhnlichen echten Karten, und genau die will ich.",
          ],
        },
      ],
      faqs: [
        {
          q: "Soll ich doppelte gewöhnliche Karten wegwerfen?",
          a: "Das mache ich nicht. Eine Dublette in einem Set ist oft die fehlende Art in einem anderen Ordner. Ich packe sie nach Set in Schachteln, bis eine Checkliste danach fragt. Der nächste Ordner ist meist näher als ein neuer Stapel Packs. Karpador #129 ist dafür mein Prüfstein.",
        },
        {
          q: "Sortiere ich Bulk zuerst nach Seltenheit?",
          a: "Nein. Die Zeichen dafür haben sich über die Jahre geändert, und sie sagen mir nicht, welche Zeile leer ist. Die Kartennummer sagt es. Eine ganze Schachtel kann ich sortieren, ohne zu entscheiden, ob ein Kreis, eine Raute oder ein Stern heute noch dasselbe meint.",
        },
      ],
    },
    {
      slug: "pokedex-binder",
      title: "Einen Pokédex-Ordner vervollständigen",
      description: "Eine Karte je Art, von #001 bis zum Ende von Generation 9, gefüllt aus Bulk.",
      h1: "Wie ich einen Pokédex-Ordner fertig mache",
      lede: "Ein Pokédex-Ordner ist eine Karte je Art. Die Generationen 1 bis 9 sind {species} Arten. Ich fülle ihn aus Bulk, in Pokédex-Reihenfolge, und ich jage keinen Druck, nach dem die Checkliste nicht fragt. Was ich dafür brauche, liegt meist schon im Stapel, plus eine Hülle und ein Fach für jede Karte, die ein Loch schließt.",
      sections: [
        {
          id: "one-card",
          heading: "Eine Karte je Art",
          paragraphs: [
            "Die Regel ist klein, und sie hält mich. Eine Karte. Jedes Set. Jede Sprache. Jede Seltenheit. [[Die lange Ordner-Übersicht|/guides/collecting-binders]] trennt diese Aufgabe vom Set-Ordner, in dem jede Karte der Liste ein Fach hat. Hier ist das Wesen das Fach. Ein zweites Pikachu ist eine Dublette, auch wenn die Zeichnung neu ist. Die neue Zeichnung darf mich freuen. Sie macht aus einem belegten Fach keine zweite Pflicht.",
            "Angefangen habe ich die Gewohnheit mit [[Bisasam|/pokedex/1]]. Die Art-Seite listet die Drucke. Der Ordner braucht einen davon. Das erste eingehüllte Bisasam, das ich schon besaß, habe ich in #001 gesteckt und danach aufgehört, ein besseres #001 zu suchen. Besser ist ein anderes Hobby. Dieses Hobby ist der Abschnitt. Wer #001 offen lässt, weil irgendwo noch ein älteres Bisasam liegen könnte, sammelt Warten. Ich sammle die Reihe.",
            "Eine Art-Seite listet jeden Druck, und der Pokédex-Ordner braucht weiter nur einen davon. [[Alle Pikachu-Karten|/collections/themes/pikachu]] hält jeden Pikachu-Druck als eigene Checkliste. [[Themen-Binder|/collections/themes]] liegt neben den Generationen, wenn ich den ganzen Lauf eines Gesichts sehen will.",
          ],
        },
        {
          id: "the-range",
          heading: "Die {species}, Generation für Generation",
          paragraphs: [
            "Ich schlage nicht einen Riesenordner auf und nenne das fertig. Ich baue nach Generation, weil [[die Sammlungen|/collections]] schon so geteilt sind und weil eine Generation ein Heft ist, das ich zu Ende bringen kann. Generation 1 sind 151. Generation 2 sind die nächsten 100. Die späteren Generationen liegen auf derselben Seite, jede mit eigener Checkliste und eigener Zählung. Die Zählung lese ich dort ab. Ich lerne sie nicht auswendig, um damit anzugeben.",
            "[[Generation 1|/collections/generation/1]] ist der Abschnitt, den ich Leuten als ersten nenne, und [[die Notiz zu den 151|/guides/gen-1-checklist]] liegt daneben. Die Wesen sind vertraut, die Bulk-Schachteln sind voll davon, und 151 ist eine Zahl, die in den Kopf passt. Danach ist Generation 5 der lange Abschnitt und Generation 6 der kurze. Das soll die Checkliste sagen. Ich merke mir die Zählungen nicht. Ein leeres Fach in der Mitte des Pokédex überspringe ich nicht, um irgendwo ein lieberes Wesen vorzuziehen. Die Reihe bleibt die Reihe.",
          ],
        },
        {
          id: "from-bulk",
          heading: "Aus dem Bulk füllen",
          paragraphs: [
            "[[Bulk|/guides/bulk-cards]] ist der Vorrat. Dabei bin ich absichtlich. Eine seltene Illustration ist willkommen, wenn es die Karte ist, die ich schon habe. Eine Pflicht ist sie nicht. Auf einen Lieblingsdruck zu warten, ist die Art, wie ein Pokédex-Ordner ein Jahr lang an denselben zwanzig Löchern stehen bleibt. Zwanzig Löcher kann ich mir merken. Trotzdem sind sie kein Grund, die Karte liegen zu lassen, die das Fach heute schließen würde.",
            "Der praktische Durchgang ist fad, und er funktioniert. Ich nehme eine Generationen-Checkliste. Ich gehe die Bulk-Schachtel durch, mit den Löchern im Kopf. Die Karte, die ein Loch schließt, kommt in die Hülle, dann ins Fach, dann markiere ich die Zeile. Danach höre ich auf, auch wenn die Schachtel noch interessant aussieht. [[Wie ich die Seiten ordne|/guides/organize-binder]] ist die Entscheidung über die Seitengröße. Neun Taschen nehme ich, wenn ich den Abschnitt abgeschlossen sehen will. Vier Taschen wären Anschauen. Dieser Durchgang ist Abhaken.",
          ],
        },
        {
          id: "when-it-is-done",
          heading: "Wann ich einen Abschnitt fertig nenne",
          paragraphs: [
            "Eine Generation ist fertig, wenn jede Art-Zeile eine Karte im Ordner hat und ich die Seiten umgeblättert habe, um es zu belegen. Der Bildschirm kann sagen, die Zeilen seien gefüllt. Ich blättere trotzdem. Eine eingetragene Karte, die im Schuhkarton liegt, ist nicht im Ordner. Der Schuhkarton ist ein Wartesaal. Das Fach ist der Platz. Bevor ich einen Abschnitt fertig nenne, will ich das Wesen unter der Nummer sehen, nicht nur den Balken.",
            "Eine fertige Generation tausche ich nicht zum Sport aus. Wenn eine spätere Karte mich zum Lächeln bringt, darf sie die Karte im Fach ersetzen, und die alte geht zurück in den Bulk. Die Zeile bleibt so oder so gefüllt. Der Punkt war nie die eindrucksvollste Kopie. Der Punkt war das Wesen, anwesend, in der Reihe, so dass jemand dahin blättern kann. Das Lächeln ist erlaubt. Es ist keine zweite Checkliste.",
            "Für diesen Ordner heißt Aufwand, dass ich Aufmerksamkeit ausgebe, statt eine bestimmte Kopie zu jagen. Die meisten nötigen Karten besitze ich schon im unsortierten Bulk. Was ich dazukaufe, sind Hüllen und Seiten, in gewöhnlichen Packungen, und ich hebe sie nicht für Holos auf. Eine Bleistiftliste der Löcher führe ich nur, wenn ich weg vom Bildschirm bin. Zu Hause ist die Generationsseite die Liste. Ist ein Loch seit Monaten leer, dann ist diese Art in meinen Schachteln knapp, nicht weil ich auf ein selteneres Bild eines Wesens warte, das ich längst hätte ablegen können.",
          ],
        },
      ],
      faqs: [
        {
          q: "Braucht der Pokédex-Ordner jeden Druck eines Pokémon?",
          a: "Nein. Eine Karte je Art ist die ganze Regel. Jeder Druck gehört auf die Art-Seite, nicht in diesen Ordner. Ein zweites Pikachu mit neuer Zeichnung bleibt eine Dublette, solange das Fach schon belegt ist.",
        },
        {
          q: "Welche Generation soll ich zuerst fertig machen?",
          a: "Ich fange mit Generation 1 an, den ursprünglichen 151. Die Karten liegen häufig im Bulk, und die Checkliste ist kurz genug zum Abschließen. Danach nehme ich die nächste Generation auf der Sammlungsseite, nicht ein beliebiges Loch aus der Mitte des Pokédex.",
        },
      ],
    },
    {
      slug: "gen-1-checklist",
      title: "Checkliste der ersten 151 Pokémon",
      description: "Wie ich die ursprünglichen 151 Pokémon in einem Ordner sammle, mit der Generationen-Checkliste und der Liste von Base.",
      h1: "Gen-1-Checkliste: alle 151 ursprünglichen Pokémon",
      lede: "Generation 1 sind 151 Arten, von #001 Bisasam bis #151 Mew. Ich sammle sie als einen Ordner: eine Karte je Art, aus jedem Set. Die Checkliste ist die Generationsseite, und Base ist der Ort, an dem viele vertraute Namen anfangen. Die beiden Listen haben nicht dieselbe Zählung. Sie auseinanderzuhalten ist der ganze Kniff.",
      sections: [
        {
          id: "the-151",
          heading: "Was die 151 bedeutet",
          paragraphs: [
            "Die 151 sind ein Pokédex-Abschnitt, kein einzelnes Produkt. [[Generation 1|/collections/generation/1]] listet jede Art in diesem Abschnitt, mit einigen der Sets, in denen sie vorkommt. Diese Seite ist die Checkliste, die ich benutze. Sie ist nicht dasselbe wie Base, das 102 Karten hat und Trainer sowie Energie enthält. Leute vermischen diese beiden Zählungen. Ich halte sie auseinander, damit der Ordner die richtige Zahl an Fächern hat. 151 Fächer für Wesen, 102 Zeilen für ein Set. Beides kann stimmen, nur nicht gleichzeitig für denselben Ordner. Wer das Set von 2023 namens [[151|/collections/set/sv3pt5]] sucht, sucht eine andere Liste.",
            "[[Die Notiz zum Pokédex-Ordner|/guides/pokedex-binder]] ist dieselbe Methode für alle {species} Arten. Diese Notiz bleibt beim ersten Heft, weil nach den ursprünglichen 151 am häufigsten gefragt wird. [[Die lange Übersicht|/guides/collecting-binders]] erklärt, warum das ein Generationenordner ist und kein Set-Ordner. Im Set-Ordner hat jede Karte der Liste ein Fach, Trainer eingeschlossen. Im Generationenordner ist Bisasam ein Fach und ein Trainer gar keins. Diese Trennung verhindert, dass ich am Ende 102 stecken habe und glaube, die 151 seien fertig.",
          ],
        },
        {
          id: "where-they-appear",
          heading: "Wo die ursprünglichen 151 auftauchen",
          paragraphs: [
            "Eine Art aus Kanto kann im Base-Zeitalter auftauchen und wieder in einem Set, das Jahrzehnte später erschienen ist. [[Pikachu|/pokedex/25]] ist der offensichtliche Fall. [[Glurak|/pokedex/6]] ist der andere. Die Art-Seite listet die Drucke. Jeder einzelne füllt das Fach. Den ältesten Druck brauche ich nicht, und den neuesten auch nicht. Ein gewöhnliches Pikachu aus einer neueren Schachtel schließt die Zeile genauso wie eine Karte, die Leute zuerst nennen, wenn sie an die alten Jahre denken.",
            "[[Sets in Reihenfolge|/guides/sets-in-order]] helfen, wenn ich die alten Drucke mit Absicht will. [[Die Basis-Serie|/collections/series/base]] ist Base, Jungle und Fossil samt den Sets darum. Baue ich einen Set-Ordner von Base, ist das ein anderes Vorhaben mit 102 Fächern. Karten aus diesem Vorhaben können auch eine Generationszeile füllen, einmal, wenn die Art-Zeile leer ist. Einen Set-Ordner plündere ich nicht, um den Generationenordner zu schmücken. Das erledigt die übrige Kopie. Fehlt die übrige Kopie, bleibt die Generationszeile leer, bis der Bulk eine bringt.",
          ],
        },
        {
          id: "base-set",
          heading: "Base ist eine Liste, nicht die ganzen 151",
          paragraphs: [
            "[[Base|/collections/set/base1]] hat 102 Karten, Kennung base1, erschienen am 9. Januar 1999. Ein Teil der ursprünglichen 151 steht nicht auf dieser Liste. Spätere Sets aus dem Base-Zeitalter fügen mehr davon hinzu. Ein Generationenordner wartet nicht auf diese älteren Sets. Eine heutige gewöhnliche Karte einer fehlenden Art ist eine fertige Zeile. Bisasam kann aus Base kommen. Es muss nicht. Das Fach fragt nach der Art, nicht nach dem Jahr auf dem Druck.",
            "Trotzdem schlage ich die Base-Liste gern auf, weil ich an diesen Kartennummern gelernt habe, eine Karte zu lesen. Zuerst die Nummer, dann der Name, dann das Set-Symbol als Kontrolle. Wenn eine Bulk-Schachtel behauptet, alle Originale zu enthalten, glaube ich der Behauptung nicht. Ich glaube der Generationsseite und den Karten in der Hand. Eine Schachtel kann nach den alten Jahren riechen und trotzdem drei Arten schuldig bleiben. Die Seite merkt das. Die Beschriftung auf dem Deckel merkt es nicht.",
          ],
        },
        {
          id: "one-line",
          heading: "Eine Zeile nach der anderen",
          paragraphs: [
            "Die Checkliste von #001 abwärts arbeite ich nur ab, wenn ich geduldig bin. Öfter nehme ich die nächste leere Zeile, die die Schachtel füllen kann. Die Ordnung im Ordner bleibt numerisch, auch wenn die Ordnung, in der ich die Karten finde, es nicht ist. Fach #050 wandert nicht nach vorn, weil ich es an einem Dienstag gefunden habe. Die Reihe von Bisasam bis Mew ist das Versprechen, dass ich die Karte wiederfinde. Der Fundtag ist keine neue Sortierung.",
            "Eine Zeile ist fertig, wenn die Karte eingehüllt im Fach steckt und eingetragen ist. Dann schaue ich auf das nächste Loch. 151 sind viele Nachmittage und trotzdem kein Rätsel. Bulk aus fast jedem Zeitalter hat Kanto-Wesen darin. Die Arbeit ist das Zuordnen, nicht das Wünschen. Wünschen hält #001 offen, obwohl das Bisasam schon ohne Hülle in einer Dose liegt. Zuordnen nimmt die Dose, hüllt die Karte ein und schließt die Zeile.",
            "Die Generationsseite halte ich neben der Schachtel offen und hake nichts nur im Kopf ab. Die Wesen, die ich zu besitzen glaube, sind nicht immer die im Ordner. Mew und die Starter sind die, von denen Leute annehmen, sie seien erledigt. Ich prüfe sie trotzdem. Ein Ordner, dem #001 fehlt, weil das Bisasam noch ohne Hülle in einer Dose liegt, ist keine fertige 151, auch wenn der Rest der Seiten voll aussieht. Die letzten zehn Löcher dauern meist länger als die ersten fünfzig, und das ist normal. Das sind die Arten, die meine Schachteln zufällig nicht hergeben. Ich lasse sie leer, statt eine Ersatzkarte zu erfinden.",
          ],
        },
      ],
      faqs: [
        {
          q: "Ist Base dasselbe wie alle 151?",
          a: "Nein. Base ist ein Set mit 102 Karten in der öffentlichen Liste, erschienen am 9. Januar 1999. Die 151 sind jede Art von Bisasam bis Mew, aus jedem Set. Ich habe beide Seiten gemerkt, damit die Zählungen nicht ineinanderlaufen. Trainer und Energie gehören in die 102, nicht in die 151.",
        },
        {
          q: "Brauche ich eine Erstausgabe für den Gen-1-Ordner?",
          a: "Nein. Jeder Druck dieser Art füllt das Fach. Eine Erstausgabe gehört in einen Set-Ordner, wenn die Liste dieses Sets sie führt. Für Bisasam #001 reicht die eingehüllte Karte, die ich schon habe.",
        },
      ],
    },
    {
      slug: "read-a-card",
      title: "Kartennummer und Set-Symbol lesen",
      description: "Wie ich Kartennummer, Set-Symbol und Seltenheitszeichen finde, damit ein Bulk-Stapel sortierbar wird.",
      h1: "Wie ich Kartennummer und Set-Symbol auf einer Pokémon-Karte lese",
      lede: "Ich lese eine Karte jedes Mal in derselben Folge: Name, Kartennummer, Set-Symbol, und das Seltenheitszeichen nur, wenn ich es noch brauche. Diese Folge macht aus einem gemischten Bulk-Stapel Stapel, die ich ablegen kann. Die Nummer passt zur Set-Liste. Das Symbol verhindert, dass zwei Zeitalter in einem Stapel landen.",
      diagram: {
        kind: "card",
        title: "Wohin ich auf der Karte schaue",
        description: "Ein schlichter Kartenumriss mit Name, Kartennummer, Set-Symbol und Seltenheitszeichen. Kein offizielles Kartenbild.",
        caption: "Die Kartennummer gleiche ich mit der Set-Liste ab. Symbol und Seltenheitszeichen helfen nur, das Set zu bestätigen.",
      },
      sections: [
        {
          id: "the-number",
          heading: "Die Kartennummer ist der Sortierschlüssel",
          paragraphs: [
            "Die Kartennummer ist der Bruch oder das Paar auf der Karte, zum Beispiel 4/102. Die erste Zahl ist der Platz der Karte in diesem Set. Die zweite Zahl ist, wie viele Karten das Set in dieser Zählung gezählt hat. [[Base|/collections/set/base1]] ist das Set, an dem ich das zeige, weil 102 die Zählung auf der Liste ist, die ich aus den öffentlichen Daten veröffentliche. Kennung der Liste ist base1, erschienen am 9. Januar 1999. Sagt die Karte 4 und heißt Karte 4 auf der Liste gleich, habe ich eine Übereinstimmung. Der Name allein würde mich bei Pikachu in die Irre schicken. Die Nummer nicht.",
            "Promos und besondere Sets benutzen manchmal einen Buchstaben, eine andere Gesamtzahl oder eine Nummer, die nicht wie das danebenliegende Hauptset aussieht. Ich zwinge sie nicht in die Ordnung des Hauptsets. Ich suche die Liste, die diese Zählung benutzt. [[Die Zeitlinie der Sets|/guides/sets-in-order]] erinnert mich daran, dass Promos neben einem Zeitalter sitzen, ohne die Hauptliste dieses Zeitalters zu sein. Ein Buchstabe vor der Zahl ist ein Hinweis, die Nachbarliste zu öffnen, nicht ein Grund, die Karte zwischen 4 und 5 von Base zu schieben.",
          ],
        },
        {
          id: "the-symbol",
          heading: "Das Set-Symbol bestätigt den Stapel",
          paragraphs: [
            "Das Set-Symbol ist das kleine Zeichen, je nach Zeitalter meist am rechten Rand des Bildes oder knapp darunter. Es wechselt mit jedem Set. Die ganze Geschichte der Zeichen lerne ich nicht auswendig. Ich benutze das Symbol, damit zwei Stapel nicht zusammenfließen, wenn die Nummern zu mehr als einer Liste gehören könnten. Ein gleicher Name und eine ähnliche Zahl sind noch kein gleiches Set. Das Zeichen daneben entscheidet den Stapel, bevor ich die Karte in den Ordner schiebe.",
            "Wenn Symbol und Nummer dem Namen widersprechen, den ich erwartet habe, sagt die Karte die Wahrheit, und mein Gedächtnis nicht. Die Nummer schlage ich auf der Set-Seite nach. [[Pikachu|/pokedex/25]] erinnert daran, dass ein Name in vielen Sets leben kann, jedes mit eigener Nummer. Der Name allein ist kein Sortierschlüssel. Auf der Art-Seite sehe ich die Drucke nebeneinander. In der Hand sortiere ich trotzdem nach Symbol und Zahl, sonst baue ich einen Stapel, der nur aus Erinnerung besteht.",
          ],
        },
        {
          id: "rarity",
          heading: "Seltenheitszeichen sortieren schwach",
          paragraphs: [
            "Kreis, Raute und Stern sind allesamt auf Karten gedruckt worden, und die Bedeutung hat sich verschoben, als das Spiel weitere Seltenheiten dazubekommen hat. Ich führe keine private Tabelle, was jedes Zeichen in jedem Jahr bedeutet hat. Die Tabelle wäre länger als das Sortieren und würde mir trotzdem nicht sagen, welche Checklistenzeile leer ist. Dafür reicht ein Blick auf die Kartennummer. Das Zeichen lasse ich Zeichen sein, bis der Stapel schon beim richtigen Set liegt.",
            "Auf das Zeichen schaue ich nur, um einen Stapel grob in Karten zu teilen, die sich leicht einhüllen lassen, und Karten, bei denen ich zweimal hinsehe. Das ist Bequemlichkeit, keine Katalogarbeit. [[Bulk sortieren|/guides/bulk-cards]] bleibt bei der Nummer. Seltenheit ist, wie eine Seite aussieht. Die Nummer ist, wie ein Ordner fertig wird. Ein Stern auf einer Karte ändert das Fach nicht, das die Liste für diese Nummer vorsieht. Er ändert höchstens, wie ruhig ich die Karte in die Hülle schiebe.",
          ],
        },
        {
          id: "regulation",
          heading: "Das Regulation-Zeichen ist ein Formatbuchstabe",
          paragraphs: [
            "Auf Karten ab 2020 setzt Play! Pokémon ein Regulation-Zeichen: einen Buchstaben unten links. Die [[Regeln von Play! Pokémon|https://play.pokemon.com/en-us/resources/rules/]] sagen, dass Standard nach diesem Buchstaben rotiert. Ältere Karten haben keinen Buchstaben. Eine Karte mit älterem Buchstaben oder ganz ohne kann trotzdem legal sein, wenn dieselbe Karte mit einem aktuellen Buchstaben nachgedruckt wurde. Die erlaubten Buchstaben wechseln. Die aktuelle Liste lerne ich nicht in einem Ordner auswendig, und nach dem Buchstaben sortiere ich nicht.",
            "Der Buchstabe ist nicht die Kartennummer und nicht das Seltenheitszeichen. [[Die Hilfe zur Kartendatenbank|https://support.pokemon.com/hc/en-us/articles/360001025274-How-do-I-use-the-Trading-Card-Game-database]] setzt das Seltenheitszeichen in die untere rechte Ecke, beim Erweiterungssymbol. Auf den Buchstaben schaue ich nur, wenn jemand fragt, ob eine Karte bei einem aktuellen Event gespielt werden darf. Für den Ordner entscheidet die Nummer über das Fach. Eine Karte, der ich nicht traue, erreicht das Fach nicht. Dazu gibt es [[eine eigene Notiz|/guides/spot-fakes]].",
          ],
        },
        {
          id: "in-practice",
          heading: "Ein Durchgang durch einen gemischten Stapel",
          paragraphs: [
            "Ich nehme eine Karte auf. Den Namen lese ich laut, wenn der Stapel wüst ist, weil die Augen springen, sobald ich zu schnell werde. Ich finde die Kartennummer. Ich prüfe das Symbol gegen den Stapel, zu dem ich sie rechne. Dann lasse ich sie auf diesen Stapel fallen. Kann ich sie in ein paar Sekunden nicht zuordnen, kommt sie auf einen Fragenstapel, nicht zurück in die Mischung. Zurück in die Mischung ist die Art, wie dieselbe Karte viermal am Abend wieder auftaucht.",
            "Der Fragenstapel bekommt einen ruhigeren Durchgang, mit offenen [[Sammlungen|/collections]]. [[Die Ordner-Übersicht|/guides/collecting-binders]] ist das, was ich dabei füttere: zuerst Set-Zeilen, dann Art-Zeilen. Eine Karte, die ich nicht erkenne, bekommt trotzdem eine Hülle, wenn die Ecke weich ist. Das Erkennen kann eine Stunde warten. Eine geknickte Ecke wird schlechter, während ich zögere. Die Hülle ist der Schritt, der nicht von meiner Sicherheit abhängt.",
            "Die Sprache auf der Karte kann den Durchgang bremsen, und das ist in Ordnung. Der englische Name im Datenbestand ist der Name, den die Set-Liste benutzt. Eine Karte in einer anderen Sprache hat trotzdem Kartennummer und Set-Symbol. Die gleiche ich ab, und die Art-Seite lese ich, wenn ich den hiesigen Namen will. Einen eigenen Ordner je Sprache baue ich nicht. Eine Set-Liste, eine Nummernfolge. Der Name auf der Karte darf vom Namen auf dem Bildschirm abweichen. Karpador und Magikarp sind dann dieselbe Zeile, sobald die Nummer stimmt.",
          ],
        },
      ],
      faqs: [
        {
          q: "Was ist, wenn die Karte keinen Bruch zeigt?",
          a: "Dann behandle ich sie als Promo oder als besonderen Druck und suche eine Liste mit dieser Art von Nummer. Einen Platz im Hauptset erfinde ich nicht. Auf dem Fragenstapel wartet sie, bis die passende Liste offen ist. Ein Buchstabe vor der Zahl ist dafür der übliche Hinweis.",
        },
        {
          q: "Soll ich nach dem Seltenheitssymbol sortieren?",
          a: "Das tue ich nicht. Das Symbol hat sich mit der Zeit geändert. Die Kartennummer passt zur Kartenliste. Glanz auf der Karte kann warten, bis der Stapel schon im richtigen Set liegt. Kreis, Raute und Stern sagen mir nicht, welche Zeile leer ist.",
        },
      ],
    },
    {
      slug: "protect-cards",
      title: "Hüllen für Pokémon-Karten im Ordner",
      description: "Hüllen, Ordnerseiten und gewöhnliche Aufbewahrung für eine Sammlung, die aufgeschlagen wird, auch die eines Kindes.",
      h1: "Pokémon-Karten schützen: erst die Hülle, dann die Tasche",
      lede: "Ich schütze Karten auf die schlichteste Art, bei der ich den Ordner noch aufschlage. Eine weiche Hülle, eine Taschenseite und ein Regal, das trocken bleibt. Das ist der ganze Plan. Ich wende ihn auf gewöhnliche Karten an, weil oft genau die eine Zeile schließt. Ein Ordner, den ich nicht öffne, ist keine Sammlung, die ich führe.",
      sections: [
        {
          id: "sleeve-first",
          heading: "Erst die Hülle, dann die Tasche",
          paragraphs: [
            "Die Hülle ist eine dünne klare Tasche für eine Karte. Ich ziehe sie auf, bevor die Karte eine Ordnerseite sieht. Ordnerseiten scheuern. Die Hülle nimmt die Scheuerstelle ab. Die schlichten Hüllen kaufe ich im Stapel und hebe sie nicht für Holos auf. Eine gewöhnliche Karte mit weiß gewordener Ecke ist trotzdem ein Loch in einer Checkliste, und sie später zu ersetzen dauert länger, als sie jetzt einzuhüllen. Die Hülle ist der kleinere Handgriff.",
            "Ich streiche die Hülle glatt, damit die Karte flach sitzt. Ich lecke sie nicht an, klebe sie nicht und stecke eine gewöhnliche Bulk-Karte nicht aus Ritual in eine zweite Hülle. Zwei Hüllen sind für eine Karte, die unterwegs ist. Die Karte für den Alltag bekommt eine. [[Die Ordner-Übersicht|/guides/collecting-binders]] setzt diesen Schritt schon voraus. Eine eingetragene Karte mit blanker Oberfläche ist eine Karte, die ich zu früh eingetragen habe. Die Markierung kommt nach der Hülle und nach dem Fach, nicht davor.",
          ],
        },
        {
          id: "pages",
          heading: "Ordnerseiten, die eine eingehüllte Karte aufnehmen",
          paragraphs: [
            "[[Seiten mit neun und mit vier Taschen|/guides/organize-binder]] sind die Wahl. Die Tasche muss eine Hülle aufnehmen, ohne die Karte zu wölben. Muss ich zwängen, ist die Seite die falsche. Eine eingerissene Tasche ersetze ich, statt zu hoffen, der Riss bleibe, wo er ist. Eine eingerissene Tasche frisst Ecken. Das merkt man nicht beim Hineinschieben, sondern wenn die Karte wieder herauskommt und die weiße Stelle neu ist.",
            "Ringordner sind in Ordnung, wenn die Ringe nicht auf die Karten drücken. Ich halte die Ringe von der Seite fern, indem ich den Ordner nicht überfülle. Ein D-Ring, der sauber schließt, ist freundlicher als ein Ordner, der so voll ist, dass die Deckel sich werfen. Lieber fange ich einen zweiten Ordner an, als die letzte Seite des ersten zu biegen. Die letzte Seite ist oft die, auf der Energie und Trainer sitzen, und genau die fehlen später in der Zählung, wenn sie verbogen im Deckel klemmen.",
          ],
        },
        {
          id: "storage",
          heading: "Wo die Ordner stehen",
          paragraphs: [
            "Aufrecht im Regal, oder flach, wenn der Ordner dünn ist, weg vom Fenster und weg von einer feuchten Außenwand. In einen Kellerkarton, auf einen heißen Dachboden oder in den Kofferraum stelle ich Ordner nicht. Wärme wölbt eine Hülle. Feuchtigkeit fleckt eine Seite. Sonne bleicht Farbe. Davon sieht man am Tag, an dem man es tut, nichts. Man sieht es, wenn man den Ordner einen Sommer später aufschlägt. Das feuchte Regal habe ich mit einer Blechdose aus dem Supermarkt gelernt. Einmal hat gereicht.",
            "Bulk, der nicht im Ordner steckt, lebt in einer trockenen Schachtel, so gestapelt, dass kein schwererer Gegenstand die Karten biegt. Essen und Trinken bleiben von diesem Tisch weg. Das klingt pedantisch, bis Orangensaft in einer Hülle steht. [[Die Sammlungen|/collections]] kann ich aus den Karten neu aufbauen. Einen zusammengeklebten Stapel kann ich nicht. Die Schachtel kommt nach dem Abend zu, auch wenn noch ein kleiner Stapel liegen bleibt. Offen über Nacht ist eine Einladung für das Glas, das jemand abstellt.",
          ],
        },
        {
          id: "toploader",
          heading: "Ein Toploader ist für den Weg",
          paragraphs: [
            "Ein Toploader ist eine steife Kunststoffhülle. Ich nehme eine, wenn eine Karte das Haus verlässt: ein Ordner auf dem Weg zu einem Kind, oder eine einzelne Karte in einem Paket. Sie ist dicker, als eine Ordnerseite mag, also bleibt sie aus der Neunfachseite draußen. Zu Hause lebt die Karte in einer weichen Hülle, im Fach. Eine harte Hülle auf jeder gewöhnlichen Karte ergäbe einen Ordner, den ich nicht aufschlage, und das Aufschlagen ist der Punkt.",
            "Ich klebe eine Karte nicht in einen Toploader. Habe ich keinen, schlagen die weiche Hülle und eine flache Schachtel eine geknickte Ecke immer noch. [[Die lange Notiz|/guides/collecting-binders]] setzt die weiche Hülle schon voraus. Die steife ist die Ausnahme, für den Transport, nicht für die alltägliche Seite.",
          ],
        },
        {
          id: "kids",
          heading: "Die Sammlung eines Kindes",
          paragraphs: [
            "[[Ein Ordner mit einem Kind|/guides/collecting-with-a-child]] fängt mit Hüllen und einem Ordner an, den das Kind aufschlagen kann, nicht mit einem starren Kasten für jede gewöhnliche Karte. Ich will, dass das Kind die Seite umblättert. Eine Karte, die nie aufgeschlagen wird, bleibt vielleicht makellos und hört gleichzeitig auf, Teil des Nachmittags zu sein. Hüllen sind der Kompromiss, dem ich traue. Sie nehmen den Alltag auf und lassen die Seite beweglich.",
            "Wenn ein fertiger Ordner [[zu einem Kind geht|/guides/donating-cards]], geht er eingehüllt, in Seiten, mit funktionierenden Ringen. Lose Karten gebe ich nicht ab und nenne es dieselbe Gabe. Die Hülle ist Teil des Ordners. Sie ist auch der Teil, der es aushält, ein bisschen ruppig angefasst zu werden. Dafür ist ein guter Ordner da. Vor der Übergabe tausche ich eine müde Seite aus. Ein Riss soll nicht das Erste sein, was beim Aufschlagen auffällt.",
            "Seiten ersetze ich, wenn der Kunststoff blind wird oder die Naht der Tasche aufgeht. Eine Naht flicke ich nicht mit Klebeband auf der Kartenseite. Klebeband ist die Art, wie eine Karte eine klebrige Kante bekommt. Eine frische Seite ist die Reparatur. Die alte Seite kann, wenn der Rest noch heil ist, Zettel oder Checklisten halten, keine Karten. Einmal im Jahr schlage ich jeden Ordner weit genug auf, um die hinteren Seiten zu sehen, denn hinten versteckt sich eine geworfene Tasche. Dieser Durchgang hat mehr Karten bewahrt als jeder besondere Kasten, den ich erwogen und nicht gekauft habe.",
          ],
        },
      ],
      faqs: [
        {
          q: "Brauchen gewöhnliche Karten eine Hülle?",
          a: "In meinen Ordnern ja. Oft ist genau die gewöhnliche Karte die, die die Zeile füllt. Ich hülle sie ein, bevor sie in eine Tasche kommt. Eine weiß gewordene Ecke ist schwerer zu richten als eine Hülle aufzuziehen. Die Hülle hebe ich nicht für Holos auf.",
        },
        {
          q: "Ist ein Toploader die normale Hülle?",
          a: "Nein. Eine harte Hülle nehme ich, wenn eine Karte unterwegs ist. Der Ordner zu Hause bekommt eine weiche Hülle und eine Taschenseite. Ein harter Kasten für jede gewöhnliche Karte würde den Ordner zu etwas machen, das ich nicht mehr aufschlage.",
        },
      ],
    },
    {
      slug: "donating-cards",
      title: "Fertige Pokémon-Ordner spenden",
      description: "Ich spende einen fertigen Ordner an ein Kind, über eine Station, eine Unterkunft oder einen Hort, und ich schreibe den Tag auf.",
      h1: "Pokémon-Karten spenden: ein fertiger Ordner",
      lede: "Ich spende Pokémon-Karten, indem ich einen fertigen Ordner abgebe. Eine Kinderstation, eine Unterkunft oder ein Hort kann der Ort sein. Loser Bulk bleibt hier und füllt den nächsten Ordner. Ich frage den Ort zuerst, schreibe den Tag auf, an dem der Ordner geht, und veröffentliche keine Handelsangabe. Heißt die Antwort noch nicht, bleibt der Ordner im Regal, und die öffentliche Liste bleibt, wie sie ist. Ein Plan ist keine Übergabe. Lieber warte ich, als eine Gabe einzutragen, die meine Hände nicht verlassen hat.",
      sections: [
        {
          id: "finished",
          heading: "Nur ein Ordner, den ich fertig habe",
          paragraphs: [
            "Ein halb gefüllter Ordner ist ein Vorhaben. Ein fertiger Ordner ist etwas, das ich jemand anderem in die Hände geben kann, ohne mich zu entschuldigen. Ich blättere die Seiten um, bevor er geht. Jedes Fach, nach dem die Checkliste gefragt hat, hat eine Karte. [[Die lange Übersicht|/guides/collecting-binders]] ist der Grund für diesen Maßstab. Ein Kind soll meine Löcher nicht erben. Eine Lücke, die ich kenne, ist für mich eine Aufgabe. Für jemand anderen wäre sie ein Loch auf Seite drei.",
            "Der Ordner ist eingehüllt, weil [[der Schutz|/guides/protect-cards]] Teil der Gabe ist und keine private Vorliebe. Die Ringe schließen. Die Seiten sind nicht eingerissen. Ist eine Tasche müde, tausche ich die Seite vor der Übergabe. Das ist gewöhnliche Sorgfalt, keine Feier. Zwei Hüllen brauche ich dafür nicht. Eine Hülle, eine heile Seite, ein Ring, der nicht auf die Karten drückt. Damit kann jemand den Ordner aufschlagen, ohne zuerst meine Reparaturen zu erben.",
          ],
        },
        {
          id: "where",
          heading: "Station, Unterkunft und Hort",
          paragraphs: [
            "Ich frage den Ort, was dort wirklich ankommt. Eine Kinderstation, ein Spielzimmer einer Unterkunft und ein Hort wollen nicht alle dasselbe, und manche können Karten gar nicht annehmen. Lieber höre ich ein Nein, als einen Ordner an einer Theke zu lassen, die nicht danach gefragt hat. Die Person, die dort arbeitet, kennt den Raum. Ich kenne den Ordner. Das Nein ist eine brauchbare Antwort. Der Ordner bleibt dann im Regal, vollständig, bis ein Ort Ja sagt.",
            "Aus der Übergabe mache ich keine Rede über das Sammeln. Der Ordner ist die ganze Vorstellung. Will ein Kind die Ordnung wissen, steckt die Ordnung in den Seiten: ein Set in Nummernfolge oder eine Generation in Pokédex-Folge. [[Sammeln mit einem Kind|/guides/collecting-with-a-child]] ist, wie ich mich verhalte, wenn ich der Erwachsene am Tisch bin. Dieselben Manieren gelten, wenn ich nur die Person bin, die den Ordner gebracht hat. Ich korrigiere keinen Geschmack und halte keinen Vortrag über Seltenheit.",
          ],
        },
        {
          id: "public-list",
          heading: "Was die öffentliche Liste zeigt",
          paragraphs: [
            "Die [[Liste der abgegebenen Ordner|/donations]] hält Empfänger und Tag fest. Eine Handelsangabe hält sie nicht fest, und auch nicht, was eine Karte im Handel tun könnte. Ein Ordner, der das Haus verlässt, ist eine Tatsache über das Vorhaben. Mehr veröffentliche ich dazu nicht. Der Empfänger kann der Name einer Station oder eines Horts sein, wenn der Name eines Kindes nicht meiner zum Veröffentlichen ist. Der Tag ist der Tag, an dem der Ordner meine Hände verlassen hat.",
            "[[Die Sammlungen|/collections]] zeigen weiterhin die Checkliste, aus der diese Karten kamen. Sobald ich den Ordner als abgegeben markiere, behandle ich diese Zeilen nicht mehr als Löcher, die ich wieder füllen muss, es sei denn, ich habe mich entschieden, diesen Ordner ein zweites Mal zu bauen. Der Bildschirm soll zum Regal passen. Ein fehlender Ordner soll nicht aussehen wie ein Ordner, den ich zu beginnen vergessen habe. Die Zeilen bleiben als abgeschlossene Geschichte sichtbar, nicht als offene Arbeit.",
          ],
        },
        {
          id: "spares",
          heading: "Übrige Karten bleiben in der Reihe",
          paragraphs: [
            "[[Bulk|/guides/bulk-cards]] ist die Art, wie der nächste Ordner fertig wird. Reste gehen nicht als lose Handvoll neben der Gabe mit. Eine lose Handvoll sieht großzügig aus und kommt als Hausaufgabe an. Ich behalte die Reste, sortiere sie und lasse sie echte Zeilen schließen. Der gespendete Ordner ist vollständig. Die Schachtel zu Hause wird dadurch nicht ärmer an Material, sie wird nur ehrlicher: was noch da ist, hat noch eine offene Zeile vor sich.",
            "Wer Karten für dieses Sortieren übrig hat, schreibt an [[magnus@linksforcards.com|mailto:magnus@linksforcards.com]]. In der Nachricht reichen einfache Worte: Sets, die sich erkennen lassen, oder einfach Bulk. Das Sortieren mache ich. Läden, die Karten schicken, werden auf der Dankesseite mit Namen genannt. Das ist die ganze Absprache. Eine Schachtel braucht keine Rede und keine Schätzung, was die Karten im Handel tun könnten. Sie braucht einen Deckel, der schließt, und ein paar Sätze in der Post.",
            "Die Übergabe schreibe ich an dem Tag auf, an dem sie geschieht, nicht am Ende des Monats. Der Empfänger kann der Name einer Station oder eines Klubs sein, wenn der Name eines Kindes nicht meiner zum Veröffentlichen ist. Der Tag ist der Tag, an dem der Ordner meine Hände verlassen hat. Bittet ein Ort mich zu warten, bleibt der Ordner im Regal, und die Liste bleibt unverändert. Lieber bin ich langsam, als eine Gabe zu erfinden, die nicht stattgefunden hat. Ein Ordner, der noch im Haus steht, ist kein abgegebener Ordner, so sicher ich mir über den Plan auch bin.",
          ],
        },
      ],
      faqs: [
        {
          q: "Nimmst du losen Bulk an?",
          a: "Ja. Loser Bulk ist willkommen. Ich sortiere ihn in Ordner. Als Gabe gebe ich losen Bulk nicht weiter. Ein fertiger Ordner ist das, was geht, und die übrigen Karten bleiben, um den nächsten zu füllen. Schreiben kann man an magnus@linksforcards.com, in einfachen Worten, was in der Schachtel liegt.",
        },
        {
          q: "Zeigen die öffentlichen Seiten eine Handelsangabe?",
          a: "Nein. Die öffentliche Liste zeigt einen Empfänger und einen Tag. Eine Angabe dazu, was eine Karte im Handel tun könnte, zeigt sie nie. Der Ordner ist eine fertige Checkliste, die das Haus verlässt, und das ist die einzige Tatsache, die ich dazu veröffentliche.",
        },
      ],
    },
    {
      slug: "sets-in-order",
      title: "Pokémon-Sets in Reihenfolge",
      description: "Die Serien und Sets der öffentlichen Kartenliste, von Base 1999 bis zur neuesten Serie, mit einer Seite je Set.",
      h1: "Pokémon-Sets in Reihenfolge, Set für Set",
      lede: "Ich halte die Sets in der Reihenfolge, die die öffentliche Kartenliste benutzt. Es sind {sets} Sets in {seriesCount} Serien, und hinter den Namen stehen {cards} Karten. Die Liste unter dieser Notiz ist diese Reihenfolge, gebaut aus denselben Daten wie die Checklisten. Jede Zeile führt auf die Set-Seite, an der ich abhake. Das Datum in der Zeile ist das Erscheinungsdatum aus diesen Daten.",
      sections: [
        {
          id: "series-and-set",
          heading: "Eine Serie ist ein Regal, ein Set ist ein Ordner",
          paragraphs: [
            "Eine Serie ist eine Folge von Sets, die sich ein Zeitalter teilen. Base, Jungle und Fossil liegen in der Basis-Serie. Ein Set ist eine Kartenliste mit eigenen Kartennummern. Ordner baue ich auf Set-Ebene, und ich stöbere auf Serien-Ebene. Wer die beiden Wörter mischt, beschriftet eine Schachtel mit Base, obwohl die Hälfte Jungle ist. Jungle heißt auf Deutsch oft Dschungel. Die Seite zeigt den Namen aus den Daten. Nach dem Namen auf der Seite lege ich den Stapel ab, sonst finde ich ihn beim nächsten Mal nicht wieder.",
            "[[Die Ordner-Übersicht|/guides/collecting-binders]] benutzt diese Zeitlinie, wenn ich entscheide, zu welcher Liste eine Karte gehört. [[Die Seiten ordnen|/guides/organize-binder]] setzt voraus, dass die Liste schon gewählt ist. Die Zeitlinie sagt mir nicht, welche Karte hübsch ist. Sie sagt mir, welche Checkliste offen ist. Hübsch kann ich danach immer noch finden. Zuerst muss die Karte im Stapel liegen, der zu ihrer Nummer passt, sonst schließt sie eine Zeile in der falschen Liste und öffnet ein Loch in der richtigen.",
          ],
        },
        {
          id: "how-to-read",
          heading: "Wie ich die Liste lese",
          paragraphs: [
            "Jeder Block darunter ist eine Serie. Darin laufen die Sets nach dem Erscheinungsdatum aus den öffentlichen Daten. Das Datum ist das Erscheinungsdatum in diesen Daten, ausgeschrieben in der Sprache dieser Seite. Die Zählung ist die Zahl der Karten in der Liste, die ich veröffentliche, also Namen und Kartennummern, sonst nichts. Für eine Karte, die die Daten nicht haben, setze ich keine Schätzung ein. Eine Lücke in den Daten bleibt eine Lücke. Ich fülle sie nicht mit einer Erinnerung an ein Pack, das ich einmal in der Hand hatte.",
            "Promos, die POP-Serie und die kleinen Listen unter Other stehen in den Daten, weil auch sie Kartennummern haben. Ich verstecke sie nicht, damit die Geschichte aufgeräumt aussieht. Eine Promo ist trotzdem eine Liste. Wenn ich Bulk sortiere und die Nummer zu einer Promo-Liste passt, ist das der Stapel, zu dem sie kommt. Ein Buchstabe in der Nummer ist oft der Hinweis. Die Hauptliste daneben bleibt in ihrer eigenen Zählung, auch wenn der Name der Karte dort ebenfalls vorkommt.",
          ],
        },
        {
          id: "early",
          heading: "Wo ich zum Hinschauen schicke",
          paragraphs: [
            "Die [[Basis-Serie|/collections/series/base]] ist der Anfang der veröffentlichten Liste. [[Base|/collections/set/base1]] selbst ist der 9. Januar 1999, 102 Karten, Kennung base1. [[Die Checkliste der ersten 151|/guides/gen-1-checklist]] erklärt, warum diese 102 Karten nicht dasselbe sind wie die ursprünglichen 151 Arten. Auf beide Seiten schicke ich mit Absicht. Die Verwechslung ist häufig, und die Korrektur sind nur die beiden Zählungen nebeneinander. Trainer und Energie stecken in den 102. In den 151 stecken Wesen, von Bisasam bis Mew, aus jedem Set.",
            "Das andere Ende der Liste bewegt sich, wenn die Daten sich bewegen. [[Mega Evolution|/collections/set/me1]] steht in den aktuellen Daten als eigene Serie, Kennung me1. Ich verlinke es, damit die Zeitlinie eine jüngere Tür hat, nicht weil ein neues Set wichtiger wäre als eine alte gewöhnliche Karte. [[Die Sammlungen|/collections]] sind dieselbe Liste mit den Balken. Diese Notiz ist die Liste mit den Daten. Ein Balken sagt, was ich eingetragen habe. Ein Datum sagt, wann das Set in den Daten steht. Beides zusammen ist die Orientierung in einer Schachtel, die mehrere Jahre mischt. [[Mega Evolution—Delta Reign|/collections/set/delta-reign]] steht in dieser Liste noch nicht. Ich habe eine Seite für den Ordner geschrieben, bevor die Kartennummern existieren, und hier setze ich keine geratene Zählung ein.",
          ],
        },
        {
          id: "using-it",
          heading: "Die Zeitlinie beim Sortieren",
          paragraphs: [
            "Diese Seite halte ich offen, wenn eine Schachtel mehr als ein Zeitalter umfasst. Erscheinungsjahre lerne ich nicht auswendig. Ich öffne die Serie, dann das Set, dann gleiche ich die Kartennummer ab. Passt der Name, verlässt die Karte die Schachtel. Passt der Name nicht, habe ich die falsche Liste, und sie zu erzwingen würde in zwei Ordnern zugleich ein Loch erzeugen. Lieber liegt die Karte eine Minute länger auf dem Fragenstapel als ein Abend lang im falschen Fach.",
            "Die Daten sind am {built} gebaut worden. Fehlt hier ein brandneues Set, fehlt es in diesem Stand, es versteckt sich nicht in einem Menü. Lieber zeige ich eine datierte Liste als ein vages Versprechen, alles bis heute sei enthalten. Die Set-Seiten, die darunter verlinkt sind, sind die Checklisten, an denen ich wirklich abhake. Ein Set, das die Daten noch nicht führen, bekommt von mir auch keinen leeren Ordner mit einer erfundenen Zählung.",
            "Die Zählung in jeder Zeile nutze ich beim Sortieren als Kontrolle. Glaube ich, ein Set sei fertig, und der Ordner hat weniger Karten als die Zählung, habe ich eine Nummer ausgelassen, meist einen Trainer oder eine Energie gegen Ende. Habe ich mehr Karten als die Zählung, ist eine Promo oder das nächste Set mit hineingeraten. So oder so ist die Liste die Korrektur. Ein Set runde ich nicht auf ein Gefühl von ungefähr hundert. Die Zahl ist die Zahl der Fächer. Bei Base sind es 102, nicht ungefähr hundert, und bei einem dickeren Set ist der Unterschied noch deutlicher.",
          ],
        },
      ],
      faqs: [
        {
          q: "Stehen die Sets innerhalb einer Serie nach Erscheinungsdatum?",
          a: "Ja. Jeder Serienblock listet seine Sets nach dem Erscheinungsdatum in den öffentlichen Kartendaten. Die Serien selbst folgen der Ordnung dieser Daten. Eine Schachtel sortiere ich in derselben Ordnung, damit die Stapel zu den Seiten passen. Base, am 9. Januar 1999 erschienen, steht am Anfang dieser Liste.",
        },
        {
          q: "Enthält diese Liste Handelsangaben?",
          a: "Nein. Sie enthält den Set-Namen, das Erscheinungsdatum und die Kartenzahl aus der öffentlichen Liste. Nichts auf dieser Seite ist eine Angabe dazu, was eine Karte im Handel tun könnte. Die Zählung ist die Zahl der Fächer in diesem Ordner, sonst nichts.",
        },
      ],
    },
    {
      slug: "collecting-with-a-child",
      title: "Mit einem Kind einen Sammelordner anfangen",
      description: "Wie ich mit einem Kind einen Ordner anfange: eine Aufgabe, Bulk-Karten, Hüllen und die Erlaubnis aufzuhören.",
      h1: "Mit einem Kind eine Pokémon-Sammlung anfangen",
      lede: "Ich bin ein Vater, der die Checkliste mag, und ich habe am Tisch gesessen mit einem Kind, das die Bilder mag. Der Anfang ist kleiner als mein eigenes Regal. Ein Ordner. Eine Aufgabe. Bulk-Karten. Ich beende das Sitzen, solange es noch Spaß macht. Das Kind sucht die Karte aus. Ich bestehe nur auf der Hülle und dem nummerierten Fach.",
      sections: [
        {
          id: "one-binder",
          heading: "Ein Ordner, mit Absicht",
          paragraphs: [
            "Ich fange nicht mit der ganzen Geschichte des Kartenspiels an. [[Die lange Übersicht|/guides/collecting-binders]] ist für mich, später, falls das Kind fragt, wo die anderen Ordner herkommen. Beim ersten Sitzen biete ich eine Wahl: einen Set-Ordner für eine kurze Liste oder [[den Ordner zu Generation 1|/collections/generation/1]] mit einer Karte je ursprünglicher Art. [[Die Notiz zu den 151|/guides/gen-1-checklist]] ist die Fassung dieser Wahl, die ich in einer Minute erklären kann. 151 Wesen, eine Karte je Wesen, jeder Druck. Base mit seinen 102 Karten erkläre ich erst, wenn die Frage kommt. Sonst vermischen sich die Zählungen, bevor die erste Seite voll ist.",
            "Zwei Vorhaben zugleich sind die Art, wie ein Kind einen Schoß voller Stapel bekommt und keine fertige Seite. Das habe ich gemacht. Das zweite Sitzen ist schlechter, weil der Tisch wie eine Pflicht aussieht. Ein Ordner heißt: die nächste Karte hat ein offensichtliches Fach. Offensichtlich ist freundlich. Freundlich ist auch, den anderen Ordner zugeklappt zu lassen, auch wenn ich selbst gerade an eine andere Liste denken muss. Die andere Liste hat einen anderen Abend.",
          ],
        },
        {
          id: "their-choice",
          heading: "Das Kind sucht die erste Karte aus",
          paragraphs: [
            "Ich mische einen kleinen Stapel Bulk in Hüllen und lasse das Kind die erste Karte wählen, die hineinkommt. Ist der Ordner in Pokédex-Folge, geht die Karte trotzdem in ihr nummeriertes Fach, nicht nach vorn. Das erkläre ich einmal, ohne Rede. Das Fach ist der Platz des Wesens. Die Karte zu wählen ist der Spaß. Die Nummer ist das Versprechen, dass die Karte wiederzufinden ist. Fach #025 bleibt Fach #025, auch wenn Pikachu die erste Karte des Nachmittags war.",
            "Geschmack korrigiere ich nicht. Ein Pikachu ist eine gute erste Karte. Ein Wesen, das ich schlicht finde, auch. [[Bulk|/guides/bulk-cards]] ist der richtige Stapel dafür, weil es genug Kopien gibt, dass eine Wahl nicht kostbar ist. Ein kostbarer Stapel lässt mich darüber schweben. Schweben ist das Gegenteil eines Samstags am Küchentisch. Liegt von einer Art nur eine einzige Karte in der Schachtel und die Zeile im Set-Ordner ist noch offen, biete ich eine andere Karte an. Die Wahl bleibt eine Wahl unter Karten, die der Nachmittag vertragen kann.",
          ],
        },
        {
          id: "sleeves",
          heading: "Hüllen, dann die Seite",
          paragraphs: [
            "[[Hüllen|/guides/protect-cards]] kommen drauf, bevor kleine Hände die Karte mögen. Ich zeige es als Bewegung, nicht als Vortrag: Karte hinein, Hülle glatt, Fach auf, Karte hinein. Kinder können Bewegungen. An meinen Meinungen zur Aufbewahrung sind sie weniger interessiert. Getränke bleiben vom Tisch weg, und den Grund erzähle ich nur, wenn jemand fragt. Orangensaft in einer Hülle ist eine ausreichende Erklärung, falls die Frage kommt. Vorher ist es einfach die Bewegung.",
            "Wenn eine Karte knickt, mache ich kein moralisches Ereignis daraus. Ich hülle einen Ersatz aus dem Bulk ein, wenn ich einen habe, oder ich lasse die Zeile leer, bis ich einen habe. Eine leere Zeile ist erlaubt. [[Ein Ordner, den ich abgebe|/guides/donating-cards]], ist ein fertiger, und der Samstagsordner eines Kindes muss nicht dazu werden. Er darf ein Samstagsordner bleiben. Eine geknickte Karte wandert aus dem Fach, die Zeile wartet, und der Nachmittag geht weiter. Die Checkliste überlebt eine Lücke besser als ein Kind einen Vortrag.",
          ],
        },
        {
          id: "stop",
          heading: "Aufhören, solange es noch Spaß macht",
          paragraphs: [
            "Ich beende das Sitzen, wenn das Kind noch bereit ist, nicht wenn ich eine runde Zahl erreicht habe. Zwanzig Minuten, die mit einem geschlossenen Ordner enden, gibt es wieder. Eine Stunde, die mit einem Seufzer endet, vielleicht nicht. [[Die Sammlungen|/collections]] merken sich die Zeilen, die ich eingetragen habe. Nichts auf dem Bildschirm ist wichtiger als der Wunsch, den Ordner beim nächsten Mal wieder aufzuschlagen. Den Balken kann ich später setzen. Die Bereitschaft nicht.",
            "Den Ordner eines Kindes führe ich nicht als Wettstreit gegen meinen. Die öffentlichen Seiten dieses Vorhabens sind meine Checklisten. Die Seite eines Kindes darf für immer unfertig bleiben. Wächst daraus das längere Hobby, liegen die Set-Listen und die Art-Seiten bereit. Wächst es nicht, hat der Ordner seine Aufgabe erfüllt: Karten in einer Reihe, Hüllen drauf, ein Nachmittag, der dem Kind gehört hat. Mein Regal ist dabei keine Messlatte.",
            "Die Fragen, die ich wirklich beantworte, sind klein. In welches Fach kommt diese. Kann diese Dublette ein Loch schließen. Ist es in Ordnung aufzuhören. Ja, das nummerierte Fach. Ja, wenn die Zeile leer ist. Ja, aufhören. Die größeren Meinungen behalte ich für mich, solange das Kind nicht fragt. Eine so angefangene Sammlung darf klein bleiben und ist trotzdem eine richtige Sammlung. Sie hat eine Ordnung, eine Hülle und eine nächste leere Zeile, wann immer jemand sie aufschlagen mag. Mehr verlange ich von einem Samstag nicht. Eine Karte, die falsch aussieht, kommt nicht hinein, solange ich unsicher bin. [[Wie ich eine Fälschung erkenne|/guides/spot-fakes]] ist diese Prüfung, leise, und eine andere Karte aus dem Bulk liegt an ihrer Stelle bereit.",
          ],
        },
      ],
      faqs: [
        {
          q: "Mit welchem Ordner soll ein Kind anfangen?",
          a: "Ich biete einen an: entweder eine kurze Set-Liste oder Generation 1 mit einer Karte je Art, von Bisasam bis Mew. Mit jedem Set zugleich fange ich nicht an. Ein Ordner hat ein offensichtliches nächstes Fach. Zwei Ordner haben einen Schoß voller Stapel.",
        },
        {
          q: "Braucht der Ordner eines Kindes seltene Karten?",
          a: "Nein. Gewöhnliche Karten aus dem Bulk füllen die Zeilen. Eine seltene Karte ist möglich und ist nicht der Punkt des ersten Nachmittags. Die Hülle und das nummerierte Fach sind der Punkt, auf dem ich bestehe.",
        },
      ],
    },
    spotFakesDe,
  ];
}
