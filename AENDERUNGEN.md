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
