/**
 * Suomenkielinen sisältö. Faktat tulevat Gasthaus Pookin omilta sivuilta,
 * Visit Uusikaupunki -esittelystä ja Booking.com-varauskanavasta.
 *
 * Ruotsi ja englanti: kopioi tämä moduuli tiedostoiksi sv.ts ja en.ts ja
 * lisää sivut hakemistoihin src/pages/sv sekä src/pages/en. Älä keksi
 * hintoja, ruokalistoja, huoneiden nimiä tai asiakaslainauksia.
 */

export const site = {
  name: "Gasthaus Pooki",
  url: "https://gasthauspooki.fi",
  phoneDisplay: "+358 2 8477 100",
  phoneHref: "tel:+35828477100",
  email: "info@gasthauspooki.fi",
  street: "Ylinenkatu 21",
  postalCode: "23500",
  city: "Uusikaupunki",
  country: "FI",
  bookingUrl: "https://www.booking.com/hotel/fi/gasthaus-pooki-uusikaupunki.html",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Gasthaus+Pooki,+Ylinenkatu+21,+23500+Uusikaupunki",
  mapsEmbed:
    "https://maps.google.com/maps?q=Ylinenkatu%2021%2C%2023500%20Uusikaupunki&z=16&output=embed",
  closedUntil: "31.12.2026",
  checkIn: "15–21",
  checkOut: "12",
} as const;

export const nav = [
  { href: "/", label: "Etusivu" },
  { href: "/majoitus", label: "Majoitus" },
  { href: "/juhlat", label: "Juhlat" },
  { href: "/ravintola", label: "Ravintola" },
  { href: "/tarina", label: "Tarina" },
  { href: "/yhteystiedot", label: "Yhteys" },
] as const;

export const amenities = [
  { title: "Kahdelle", text: "Jokainen huone on kahden hengen huone." },
  { title: "Oma suihku", text: "Huoneissa on oma suihku." },
  { title: "Kaapeli‑tv", text: "Huoneessa on kaapeli‑tv." },
  { title: "Langaton verkko", text: "Käytössä on langaton internetyhteys." },
  { title: "Aamiainen", text: "Huoneen hintaan sisältyy runsas aamiainen." },
] as const;

export const venues = [
  {
    name: "JuhlaPooki",
    capacity: "60",
    unit: "henkilöä",
    text: "Juhla- ja kokoustila enintään 60 hengen ryhmille.",
    note: "Tiedustelut ja varaukset puhelimitse tai tarjouspyynnöllä.",
    image: "/kuvat/juhlapooki.jpg",
    alt: "JuhlaPookin ruokasali, katettu puupöydin ja meriaiheisin liinoin.",
  },
  {
    name: "Kabinetti",
    capacity: "10",
    unit: "henkilöä",
    text: "Pieni kokous- ja juhlatila. Uusittua tekniikkaa ja iso tv-näyttö.",
    note: "Suljettu 31.12.2026 asti.",
    image: "/kuvat/slider-kabinetti.jpg",
    alt: "Kabinetin pitkä pöytä, nahkatuolit ja takka.",
  },
  {
    name: "Liiteri",
    capacity: "70",
    unit: "henkilöä",
    text: "Kesäkauden esiintymis- ja kokoontumistila enintään 70 hengelle.",
    note: "Avoinna kesäkaudella.",
    image: "/kuvat/kievari2_iso.jpg",
    alt: "Liiteri katettuna: hirsiseinät, pöydät ja esiintymislava.",
  },
] as const;

export const timeline = [
  {
    year: "1911",
    title: "Pankkitalo valmistuu",
    text: "Walter Thomén suunnittelema pankkirakennus valmistuu Ylinenkadulle.",
  },
  {
    year: "1986",
    title: "Pooki avataan",
    text: "Kaija ja Simo Reijonsaari avaavat 5. tammikuuta kodikkaan, meriteemaisen majatalo-ravintolan.",
  },
  {
    year: "2026",
    title: "40. juhlavuosi",
    text: "Pooki täyttää 40 vuotta. Talo tunnetaan ruuasta, ystävällisestä palvelusta ja kesäpihastaan.",
  },
] as const;

export function jsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hotel",
        "@id": `${site.url}/#hotel`,
        name: site.name,
        url: site.url,
        telephone: "+35828477100",
        email: site.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.street,
          postalCode: site.postalCode,
          addressLocality: site.city,
          addressCountry: site.country,
        },
        numberOfRooms: 4,
        checkinTime: "15:00",
        checkoutTime: "12:00",
        foundingDate: "1986-01-05",
        currenciesAccepted: "EUR",
        hasMap: site.mapsUrl,
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Oma suihku", value: true },
          { "@type": "LocationFeatureSpecification", name: "Kaapeli-tv", value: true },
          { "@type": "LocationFeatureSpecification", name: "Langaton internet", value: true },
          { "@type": "LocationFeatureSpecification", name: "Aamiainen", value: true },
        ],
      },
      {
        "@type": "Restaurant",
        "@id": `${site.url}/#restaurant`,
        name: site.name,
        url: `${site.url}/ravintola`,
        telephone: "+35828477100",
        email: site.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.street,
          postalCode: site.postalCode,
          addressLocality: site.city,
          addressCountry: site.country,
        },
        acceptsReservations: true,
      },
    ],
  };

  return JSON.stringify(graph).replace(/</g, "\\u003c");
}
