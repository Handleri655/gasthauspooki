# Gasthaus Pooki

Staattinen sivusto majatalolle ja juhlatiloille Uudessakaupungissa.

```bash
npm install
npm run dev
```

Sivusto aukeaa osoitteeseen http://localhost:4321. Tuotantoversio rakennetaan komennolla `npm run build`. Julkaisu on tehty Netlifyä varten: lomakkeet (`yhteydenotto`, `tarjouspyynto`) aktivoituvat, kun sivusto on Netlifyssä.

## Kuvat

Kuvat on haettu vanhalta sivustolta ja ne ovat kansiossa `public/kuvat`.

Vielä puuttuu kolmen muun huoneen kuvat. Vanhalla sivustolla oli vain yksi huonekuva. Vanha logo jätettiin pois, koska siinä on musta tausta eikä se istu uuteen ulkoasuun.

## Älä keksi näitä

Hintoja, ruokalistaa, asiakaslainauksia ja myyntikohteen välittäjää ei ole keksitty. Ne lisätään, kun tiedot on vahvistettu.

Ruotsi ja englanti: kopioi `src/data/site.ts` ja lisää sivut hakemistoihin `src/pages/sv` ja `src/pages/en`.
