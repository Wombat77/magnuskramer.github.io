/*
Datenobjekt für Wien OGD JSON Beispiel
    {
        titel : "",
        info : "",
        metadaten : "",
        attribute : "",
        json : "",
        icon : null,
    },
    Daten: https://www.data.gv.at/auftritte/?organisation=stadt-wien&formatFilter=JSON&katFilter=sport-und-freizeit#showresults
    Icons: https://open.wien.gv.at/site/icons/
*/

const wienDatensaetze = [{
        titel: "Stadtwanderwege und RundumadumWanderweg Wien",
        info: "Stadtwanderwege und Rundumadum-Wanderweg",
        metadaten: "https://www.data.gv.at/katalog/dataset/36886c25-6961-4055-96b2-b3e8b138e588",
        attribute: "BEZ_TXT: Information über den Abschnitt URL_INFO: ein Link zu einer Informationsseite TYP: Typ 1 = Stadtwanderweg, Typ 2 = Rundumadum",
        json: "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:WANDERWEGEOGD&srsName=EPSG:4326&outputFormat=json",
        icon: null,
    },
    {
        titel: "Grillplätze Standorte Wien",
        info: "Grillplätze in Wien",
        metadaten: "https://www.data.gv.at/katalog/dataset/c6fc4688-1aca-4363-bd1a-8d14ea08d2f8",
        attribute: "LAGE: Lagebeschreibung GRILLPLATZ_ID: ID des Grillplatzes RESERVIERUNG: ob Reservierung erforderlich ist WEBLINK: Weiterführende Information bzw. Link zur Reservierungsseite",
        json: "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:GRILLPLATZOGD&srsName=EPSG:4326&outputFormat=json",
        icon: "https://data.wien.gv.at/katalog/images/grillplatzogd.png",
    },
    {
        titel: "Stadtspaziergang Wien",
        info: "Themenrundgänge durch Wien",
        metadaten: "https://www.data.gv.at/katalog/dataset/f7bd721a-1f72-4bef-a38c-792f59cc8fe3",
        attribute: "KATEGORIE: Name des Spaziergangs (Thema) NAME: Name der Sehenswürdigkeit BEMERKUNG: Kurzinformation zur Sehenswürdigkeit ADRESSE: Adresse/Standort der Sehenswürdigkeit WEITERE_INF: Internetadresse",
        json: "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&srsName=EPSG:4326&outputFormat=json&typeName=ogdwien:SPAZIERPUNKTOGD,ogdwien:SPAZIERLINIEOGD",
        icon: "http://www.data.wien.gv.at/icons/spazierpunktogd.png",
    },
    {
        titel: "Parkanlagen Standorte Wien",
        info: "Standorte der Parkanlagen in Wien",
        metadaten: "https://www.data.gv.at/katalog/dataset/da0902a3-6370-4300-8c49-a7e5eaa02ee5",
        attribute: "PARKANLAGE: Bezeichnung der Anlage BEZIRK: Wiener Gemeindebezirksnummer FLAECHE: Größe der Anlage in Quadratmeter OEFF_ZEITEN: Sperr- und Öffnungszeiten SPIELPLATZ: Spielplatztyp, Spielmöglichkeiten TRINKBRUNNEN: Anzahl der Trinkbrunnen HUNDEZONE: Hundezonentyp wenn vorhanden TELEFON: Telefonnummer WEITERE_INFO: Link zu Parkanlagen in Wien",
        json: "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:PARKANLAGEOGD&srsName=EPSG:4326&outputFormat=json",
        icon: "https://data.wien.gv.at/katalog/images/parkanlageogd.png",
    },
    {
        titel: "Hundezonen Standorte Wien",
        info: "Standorte der Hundezonen und Hundeausläufe in Wiener Parkanlagen",
        metadaten: "https://www.data.gv.at/katalog/dataset/28a7419c-f432-4e1a-b0a6-aa9e71968a14",
        attribute: "PARK: Bezeichnung der Anlage FLAECHE: Größe der Anlage in Quadratmeter TYP: Bezeichnung der Hundezonentyps TELEFON: Telefonnummer Gartentelefon EINFRIEDUNG: Art und Höhe der Einfriedung WEBLINK1: Link zu Hundezonen in Wien - Hundeausläufe",
        json: "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:HUNDEZONEOGD&srsName=EPSG:4326&outputFormat=json",
        icon: "https://data.wien.gv.at/katalog/images/hundezoneogd.png",
    },
    {
        titel: "Kinder- und Jugendangebote Standorte Wien",
        info: "Offene Kinder- und Jugendarbeit in Wien. Indoor-Angebote: Jugendzentren, Jugendtreffs; Outdoor - fix: Parkbetreuung; Outdoor - flex: Mobile Jugendarbeit und Streetwork; gemeinwesenorientiertes Angebot: Fair-Play-Team; Wienweite - überregionale Angebote",
        metadaten: "https://www.data.gv.at/katalog/dataset/cabad01a-8cc7-48c0-b7e8-ffbe1e685b26",
        attribute: "FID=Interne ID; OBJECTID=GeoserverID; SHAPE=Koordinaten; ANGEBOT_ID=MA13-ID; BEZEICHNUNG=Art des ANGEBOTES; BEZIRK=Bezirk; ADRESSE=Adresse; OEFFNUNGSZEIT=Öffnungszeiten; ANGEBOT_LABEL=Kurzzeichen des Angebotes; ANGEBOT_LABEL_TXT=Langtext des Angebotes; ZUSATZANGEBOT=Verfügbare zustatzangebote; TELEFON=Telefonnummer; EMAIL=emailadresse; WEBLINK1=Internetadresse; WEBLINK2=zusätzliche Internetadresse; WLAN=Wlan Verfügbar; ANMERKUNG=Anmerkungen; SE_ANNO_CAD_DATA=; VEREIN=Name des Trägervereins",
        json: "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:JGDANGEBOTOGD&srsName=EPSG:4326&outputFormat=json",
        icon: "http://www.data.wien.gv.at/icons/jgdwienweitogd.png",
    },
    {
        titel: "Donauinsel Freizeiteinrichtungen Standorte Wien (Punkte)",
        info: "Standorte der Freizeiteinrichtungen auf der Donauinsel",
        metadaten: "https://www.data.gv.at/katalog/dataset/4e8d237b-8bd4-4483-a85d-431784c543b9",
        attribute: 'Objekt_Id*: einmalige Zuordnungsnummer zur Identifikation des Objektes Bezeichnung: Art des Objektes Ortsbeschreibung: "Adresse" UAN: Unterartnummer Weblink: Internetadresse Typ: Art des Objektes TYP_TXT: Art der Einrichtung (Stiege, Ponton, Lokal)',
        json: "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:DONAUINSPKTOGD&srsName=EPSG:4326&outputFormat=json",
        icon: null,
    },
    {
        titel: "Burgen und Schlösser Standorte Wien",
        info: "Mittelalterliche Burgen und Schlösser, Standorte, Wien",
        metadaten: "https://www.data.gv.at/katalog/dataset/a42cbe4f-89f0-42ae-a34d-f2e5db6aa1d2",
        attribute: "-NAME: Objektbezeichnung -KATEGORIE: Kategorie -BESCHREIBUNG: Objektbeschreibung -SICHTBAR / NICHT SICHTBAR ",
        json: "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:BURGSCHLOSSOGD&srsName=EPSG:4326&outputFormat=json",
        icon: "http://www.data.wien.gv.at/icons/burgschlossogdsichtbar.png",
    },
    {
        titel: "Campingplätze Standorte Wien",
        info: "Campingplätze, Standorte, Wien",
        metadaten: "https://www.data.gv.at/katalog/dataset/de64ade8-5025-40f9-a2e0-15b72797e6a7",
        attribute: "BETRIEB: Objektbezeichnung BEZIRK: Wiener Gemeindebezirksnummer STRASSE: Straßenname gem. amtlichem Straßennamenverzeichnis HAUSNUMMER: Orientierungsnummer gem. Wiener Adressregister INTERNET: Hyperlink",
        json: "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:CAMPINGPLATZOGD&srsName=EPSG:4326&outputFormat=json",
        icon: "http://www.data.wien.gv.at/icons/camping.png",
    },
    {
        titel: "Citybike Standorte Wien",
        info: "Citybike, Standorte, Wien",
        metadaten: "https://www.data.gv.at/katalog/dataset/523ba2e4-8c55-4dde-8acf-39e3621811b0",
        attribute: "STATION: Straßenname des Objektstandortes BEZIRK: Wiener Gemeindebezirksnummer",
        json: "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:CITYBIKEOGD&srsName=EPSG:4326&outputFormat=json",
        icon: "http://www.data.wien.gv.at/icons/citybike.png",
    },
    {
        titel: "Radfahranlagen Wien",
        info: "Radfahranlagen, Wien",
        metadaten: "https://www.data.gv.at/katalog/dataset/5e6175cd-dc44-4b32-a64a-1ac4239a6e4a",
        attribute: 'MERKMAL: Radwegtyp (Markierte Anlage/Moutantainbike-Radfahren im Wald/Radroute/Radweg) SUBMERKMAL = nähere Beschreibung der Radfahrinfrastruktur gem. StVO 1960 und RVS-Richtlinie "Radverkehr" ',
        json: "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:RADWEGEOGD&srsName=EPSG:4326&outputFormat=json",
        icon: null,
    },
    {
        titel: "Schwimmbäder Standorte Wien",
        info: "Bäder, Standorte, Wien",
        metadaten: "https://www.data.gv.at/katalog/dataset/898afe8c-0297-45d6-b4b5-0cb9e632094b",
        attribute: "NAME: Objektbezeichnung ADRESSE: Adresse (Bezirksnummer, Straßenname, Orientierungsnummer) WEBLINK1: Hyperlink BEZIRK: Wiener Gemeindebezirksnummer",
        json: "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:SCHWIMMBADOGD&srsName=EPSG:4326&outputFormat=json",
        icon: "http://www.data.wien.gv.at/icons/schwimmbad.png",
    },
    {
        titel: "Taxistandplätze Standorte Wien",
        info: "Taxistandplätze, Wien",
        metadaten: "https://www.data.gv.at/katalog/dataset/be2e0197-57b8-4fcf-a144-cb33f7466f3a",
        attribute: "ADRESSE: Adresse (Bezirksnummer, Straßenname, Orientierungsnummer) ZEITRAUM: Zeitraum in dem nur Taxis halten und parken dürfen STELLPLATZANZAHL: Anzahl der Stellplätze",
        json: "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:TAXIOGD&srsName=EPSG:4326&outputFormat=json",
        icon: "https://data.wien.gv.at/katalog/images/taxiogd.png",
    },
    {
        titel: "Sportstätten Standorte Wien",
        info: "Sportstätte, Standorte, Wien",
        metadaten: "https://www.data.gv.at/katalog/dataset/71084c02-973d-4544-b804-7ed82bd53027",
        attribute: "KATEGORIE_TXT: Kategorie der Sportstätte ADRESSE: Adresse (Bezirksnummer, Straßenname, Orientierungsnummer) FLAECHE: Fläche der Sportstätte SPORTSTAETTEN_ART: Angaben zu der Sportstätte WEBLINK1: Link zur Sportstätte",
        json: "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:SPORTSTAETTENOGD&srsName=EPSG:4326&outputFormat=json",
        icon: "http://www.data.wien.gv.at/icons/sportstaette-oeffentlich-outdoor.png",
    },
    {
        titel: "Spielplätze Standorte Wien",
        info: "Spielplätze, Standorte, Wien",
        metadaten: "https://www.data.gv.at/katalog/dataset/b5e8ad35-dbbe-483b-bd99-2700beba64bf",
        attribute: "ANGEBOT: Sportplatz, Kinder-, Jugend-, Generationenspielplatz OEFFNUNGSZEITEN: Öffnungszeiten STANDORT: Standortangabe BEZIRK: Wiener Gemeindebezirksnummer WASSER: (Trink-)Brunnen WEBLINK1: Hyperlink",
        json: "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:SPIELPLATZOGD&srsName=EPSG:4326&outputFormat=json",
        icon: "http://www.data.wien.gv.at/icons/spielplatzogd.png",
    },
    {
        titel: "Themenradwege Wien",
        info: "Themenradwege, Wien",
        metadaten: "https://www.data.gv.at/katalog/dataset/ff99d26f-8176-4c81-a60c-dfc0bf9a226c",
        attribute: "BEZEICHNUNG: Bezeichnung des Themenradweges",
        json: "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:THEMENRADWEGOGD&srsName=EPSG:4326&outputFormat=json",
        icon: null,
    },
    {
        titel: "Badestellen Standorte Wien",
        info: "Badestellen, Standorte, Wien",
        metadaten: "https://www.data.gv.at/katalog/dataset/7c6e9dbf-487b-4146-a379-19e46642c392",
        attribute: "BEZEICHNUNG: Name des Standortes WEITERE INFO: Hyperlink BEZIRK: Wiener Gemeindebezirksnummer WASSERQUALITAET: Code für die Bewertung der Wasserqualität UNTERSUCHUNGSDATUM: Datum der letzten Untersuchung WASSERTEMPERATUR: Wassertemperatur in Grad Celsius SICHTTIEFE: Sichttiefe in Meter ANZ_ECOLI: Anzahl von E. coli in 100 ml ANZ_ENTEROKOKKEN: Anzahl von Enterokokken in 100 ml TYP 1: Badestellen TYP 2: Naturbadeplätze",
        json: "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:BADESTELLENOGD&srsName=EPSG:4326&outputFormat=json",
        icon: "http://www.data.wien.gv.at/icons/badestelle.png",
    },
    {
        titel: "Fahrradabstellanlagen Standorte Wien",
        info: "Fahrradabstellanlagen, überdachte Fahrradabstellanlage, Fahrradgarage und Fahrradbox - Standorte, Wien",
        metadaten: "https://www.data.gv.at/katalog/dataset/97ef14eb-f280-48a7-96c0-df03859b06c2",
        attribute: "BEZIRK: Wiener Gemeindebezirksnummer ADRESSE: Straßenname, Orientierungsnummer ART: Art der Anlage (Unterscheidung in Fahrradabstellanlage, Überdachte Fahrradabstellanlage, Fahrradbox / -garage) ",
        json: "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:FAHRRADABSTELLANLAGEOGD&srsName=EPSG:4326&outputFormat=json",
        icon: "http://www.data.wien.gv.at/icons/fahrradabstellanlage.png",
    },
];