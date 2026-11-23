# Website-Update 23.11.2026 (v6)

## Hochladen auf GitHub (Repo der Website)
Neu oder geändert, bitte hochladen bzw. ersetzen:
- index.html
- en/index.html  (neu, englische Version unter leansustain.de/en/)
- impressum.html, datenschutz.html  (nur Skip-Link + CSS-Version)
- sitemap.xml
- assets/styles.css
- assets/site.js  (neu, Seitenlogik für DE und EN)
- assets/hannah-avatar.webp  (neu, Porträt im Hero)
- assets/logo-leansustain-512.png, assets/apple-touch-icon.png  (neu)

Löschen (wird nicht mehr genutzt): fonts/CormorantGaramond-italic.woff2
Nicht anfassen: die CNAME-Datei im Repo (Domain-Zuordnung von GitHub Pages).

## Was sich geändert hat
- Hero: Button „Gespräch anfragen“ (direkte Mail), Hinweis „In 20 Minuten …“, Vertrauenszeile mit Porträt
- Pakete: Umbau vorausgewählt (ohne „Empfohlen“-Label), Anfrage-Button je Paket mit Betreff, nicht enthaltene Bausteine lesbar statt ausgegraut, mobil ausgeblendet mit Hinweiszeile
- Neuer Abschnitt „So arbeite ich“ (Vertraulichkeit, keine Begleitung in Termine, kein Matchmaking, keine offenen Kurse, Englisch)
- Mobil: feste Kontaktleiste unten, Hero-Grafik und Diagramm ausgeblendet, Chips umbrechend, Klickflächen ≥ 44 px
- Tablet: Hero und Über mich zweispaltig bis 720 px
- Koralle als Textfarbe dunkler (#BF4418, Kontrast ≥ 4,5:1), Header-Zeile in Manrope statt Cormorant
- Pitch-Zitate nicht mehr durchgestrichen
- Technik: <main>, Skip-Link, reduzierte Bewegung, PNG-Logo für Google, hreflang DE/EN, Seitentitel mit Suchbegriffen
- Sprachumschalter DE | EN im Header; EN-Rechtstexte verlinken auf die deutschen Seiten

## Nachtrag 23.11.2026: eine Kontakt-Handlung + Buchungslink
- Überall nur noch ein Button „Gespräch anfragen“ (EN „Book a call“): Header, Hero, unter den Paketen, Kontaktbereich, mobile Leiste
- Telefon und Mail nur noch als Textlinks, LinkedIn im Footer
- Datenschutz: neuer Abschnitt 6 „Terminbuchung über Google Kalender“

### Buchungslink aktivieren (vor dem Hochladen!)
1. Google Kalender (hannah@leansustain.de) → Erstellen → Terminplan: „20-Minuten-Gespräch“, 20 Min., Verfügbarkeit, Pufferzeit, ggf. Feld „Unternehmen“ und „Welches Produkt bietest du an?“
2. Terminplan öffnen → „Teilen“ → Link der Buchungsseite kopieren
3. In assets/site.js ganz oben eintragen: var BOOKING_URL = 'https://calendar.app.google/…';
   (oder Link an Claude geben)
Ohne Link öffnen alle Buttons eine E-Mail. Den neuen Datenschutz-Abschnitt erst mit aktivem Link hochladen.

Buchungslink eingetragen (23.11.2026): https://calendar.app.google/GSX7KYtsyRinggnXA – alles kann jetzt komplett hochgeladen werden.

## Nachtrag 23.11.2026 (v7): vertriebliche Schärfung
- Button-Text „Gespräch buchen“ (EN „Book a call“), weil er direkt zur Buchung führt
- Neuer niedrigster Einstieg: „Noch kleiner anfangen?“ unter den Paketen – Onboarding-Module (ab Februar 2027) zuerst, dann Pitch-Audit kompakt; Onboarding-Karte mit Label „ab Februar 2027“
- Angebot: Überschrift „Vom Pitch zum Rahmenvertrag.“, je Paket ein Satz „Passt, wenn …“
- Nach dem Problem-Abschnitt: Box „Erkennst du deinen Pitch wieder?“ mit Buchungsbutton
- „So arbeite ich“: drei offene Kacheln statt zugeklappter Fragen
- Kontaktbereich ohne doppelte „20 Minuten“-Zeile, kürzere Vertrauenszeile im Hero

## Nachtrag 23.11.2026 (v8)
- Konkrete Zusage für die 20 Minuten (Hero + Kontakt): Folie oder Satz vorab schicken
- Neuer Block „Woran du es merkst“ vor dem Angebot (drei Ergebnisse in Vertriebssprache)
- Kachel „Du brauchst keinen Türöffner.“ statt „Kein Matchmaking“
- Onboarding-Module: Textlink „Vormerken: kurze Mail genügt“ (Betreff „Vormerkung Onboarding-Module“)
- Google-Buchungsseite (manuell): Beschreibung und Zusatzfrage ergänzen

## Nachtrag 23.11.2026 (v9)
- Neuer Block „Warum ich als Entscheiderin Angebote abgelehnt habe“ nach „Über mich“ (drei Fälle: Einsparversprechen, Umlage auf Mieter, Laufzeit gegen Haltedauer), DE und EN

- „Passt, wenn …“ auch bei Onboarding-Modulen und Pitch-Audit kompakt (v9.1)
- Fälle 1 und 3 nach Hannahs Korrektur angepasst (Durchschnittswerte statt Spitzenwerte; Laufzeit gegen Mietvertrag des Ankermieters)
- Englisch von Business-Muttersprachler-Sicht überarbeitet (en/index.html, assets/site.js)
- DE: „Deine Lösung“ statt „Ich biete“; Pitch-Audit komplett: Kunde setzt um, Hannah prüft nach (DE/EN)
- Neuer Buchungslink (Terminplan im Konto hannah@leansustain.de): https://calendar.app.google/hJn4hmGvggd2cp1N7
