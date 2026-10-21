# Toffenetti Val di Sole – nuovo sito

Nuovo sito di [toffenetti.it](https://www.toffenetti.it/), con struttura ispirata a
[deliziedaltrentino.it](https://www.deliziedaltrentino.it/) e contenuti (testi, prodotti,
immagini, contatti) del sito attuale.

Sito statico in HTML, CSS e JavaScript, senza dipendenze: si pubblica caricando i file
su qualsiasi hosting o con GitHub Pages (Settings → Pages → branch `main`, cartella `/`).

## Pagine

| File | Contenuto |
|---|---|
| `index.html` | Home: slider, promozione spedizione, presentazione, categorie (salate, dolci, cantina), prodotti in evidenza, artigianato, merende, territorio |
| `negozio.html` | Il negozio e la storia della famiglia |
| `gastronomia.html` | Gastronomia e cantina, galleria con filtri |
| `artigianato.html` | Artigianato e idee regalo, galleria con filtri |
| `merende.html` | Merende e degustazioni in terrazza |
| `spedizione.html` | Tariffe di spedizione e pagamenti |
| `dove-siamo.html` | Indirizzo, orari, mappa |
| `contatti.html` | Dati aziendali e modulo che apre un messaggio WhatsApp |

## Shop online

I link "Shop", "Carrello" e "Acquista" puntano all'eshop esistente su
`https://www.toffenetti.it/eshop/`. Se il nuovo sito sostituisce quello vecchio sullo stesso
dominio, l'eshop deve restare raggiungibile a quell'indirizzo.

## Immagini

Le immagini vengono dal sito attuale. L'elenco è in `scripts/immagini.txt`; per scaricarle:

- da GitHub: Actions → "Importa immagini dal sito attuale" → Run workflow
- in locale: `bash scripts/scarica-immagini.sh`
