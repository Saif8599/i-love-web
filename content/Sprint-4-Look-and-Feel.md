# Week 1
## 11-11-2024: 
**Workshop Styleguide**

Vandaag zijn we gestart met de leertaak **_Look and Feel - Corporate Identity_**, een opdracht die we geforkt hebben voor deze sprint. Deze workshop was gericht op het opzetten van een duidelijke styleguide voor ons project.

### Wat hebben we gedaan?
- **Sitemap & Wireframes:**  
  Samen met mijn team hebben we een **sitemap** en **wireframes** opgesteld voor het project _On Collaboration_. Dit hielp ons om een goede structuur en navigatie te plannen.
  
  ![Sitemap](https://github.com/user-attachments/assets/bb0ad111-7c98-4a07-922a-98e29c359783)
  ![Wireframe](https://github.com/user-attachments/assets/b6bb32af-1132-4121-b9d9-2a442e181448)

- **Interface Inventory:**  
  We hebben een **interface inventory** gemaakt om ervoor te zorgen dat onze stijl consistent blijft. Dit omvat kleuren, typografie en componenten die we gaan gebruiken.


### Styleguide
We werken verder op de styleguide van Colin, die we hebben geforkt en aangepast aan onze projectbehoeften. Check onze voortgang hier: [oncollaboration.css styleguide](https://github.com/ColindeGroot/look-and-feel-styleguide/blob/main/oncollaboration.css).

---

### Vragen voor het team
1. Hoe kunnen we als team deze opdracht efficiënt aanpakken?
2. Waar gaan we onze afspraken en voortgang documenteren om overzicht te behouden?


## 13-11-2024: 
**Stylesheets for styleguide**

Vandaag heb ik gewerkt aan de strategie voor het gebruik van **CSS** in onze styleguide. Hierbij heb ik gekeken naar **custom properties** en het efficiënt inladen van stylesheets.

We gebruiken een standaard stylesheet (`oncollaboration.css`). Indien nodig kunnen we specifieke stijlen aanpassen met `specificity.css`, waarbij het laatste `<link>`-element wordt gelezen en de styling overschrijft.

### CSS Strategie & Specificity
- **Element Selector**: De standaard stylesheet `oncollaboration.css` kan worden overschreven door `specificity.css`, waardoor de laatste `color`-waarde (`color: darkred;`) wordt toegepast.
  
  ![Color Override](https://github.com/user-attachments/assets/52f0c78d-498b-469e-acbf-3265e596f504)

- **Custom Properties**: We hebben een **css-strategie** opgezet met gebruik van custom properties en element selectors. Hieronder zie je hoe kleuren worden aangepast door het gebruik van specifieke selectors.

  ![Custom Properties](https://github.com/user-attachments/assets/cae322f9-8114-4a96-b7d5-32ce3557ba5d)

- **CSS Specificity Selector**: We hebben ontdekt dat een class selector (`.heading-medium`) meer prioriteit heeft dan een element selector (`h2`). Dit helpt om stijlen op een meer gecontroleerde manier toe te passen.

  ![Specificity Selector](https://github.com/user-attachments/assets/28e36a6d-c71f-46d6-b7bc-0e3608df92bb)
  ![Class vs Element](https://github.com/user-attachments/assets/8fc08efa-f1b1-4f2c-ab59-00e4177873eb)
  ![Priority Example](https://github.com/user-attachments/assets/883c9627-6782-4166-a2c2-3e04ba533ab1)

### Wat ik heb geleerd?
1. Het gebruik van custom properties om styling consistent te houden.
2. Hoe je CSS specificity inzet om controle te houden over welke stijlen toegepast worden.
3. Het efficiënt inladen van stylesheets en het overschrijven van standaard stijlen met `specificity.css`.

### Vragen
- **Hoe gaan we nieuwe CSS-code in zowel de gemeenschappelijke als onze eigen code verwerken?**

  Algemene stijlen komen in `oncollaboration.css`. Wijzigingen delen we via pull requests.
- **Waar documenteren we afspraken over onze CSS-strategie?**  

  Het voorstel is om dit bij te houden in de README.

## 14-11-2024: 
**Styleguide samenstellen**

Vandaag heb ik mezelf flink beziggehouden met het afronden van onze styleguide. Ik liep een beetje achter, dus heb ik er flink wat tijd in gestoken om dit helemaal bij te werken. Deze [styleguide](https://github.com/ColindeGroot/look-and-feel-styleguide) is belangrijk, want het zorgt ervoor dat we allemaal dezelfde stijlen gebruiken, zoals kleuren, lettertypes en formulieren, zodat alles er strak en uniform uitziet.


### Wat heb ik gedaan?

1. **Kleuren**  
   Ik heb een kleurenpalet opgesteld met **custom properties** (CSS-variabelen), zodat we die makkelijk overal kunnen hergebruiken:

   ![Kleuren](https://github.com/user-attachments/assets/38473140-607e-4052-bd6b-8412965a1b33)

2. **Typografie**  
   Vervolgens heb ik onze **typografie** uitgewerkt. Dit betekent dat ik heb vastgelegd welke lettertypes en groottes we gebruiken voor koppen, paragrafen, etc:

   ![Typografie](https://github.com/user-attachments/assets/1821d28d-21d3-48ec-b225-b5206aae8e23)

3. **Forms**  
   Ten slotte heb ik gekeken naar **formulieren**. Ik heb ervoor gezorgd dat alle invoervelden, knoppen en labels netjes gestyled zijn volgens onze richtlijnen:

   ![Formulieren](https://github.com/user-attachments/assets/b780f7bb-6ae8-43c3-8064-191beca3472e)

### Documentatie & Interface Inventory
Alles wat ik vandaag heb uitgewerkt, is gedocumenteerd in onze **interface inventory** op Figma. Dit is een handig naslagwerk waar we snel kunnen checken hoe alles eruit moet zien en welke stijlen we moeten gebruiken.

[Check hier onze Interface Inventory op Figma](https://www.figma.com/design/EzwrnPKJfiSgJSDVLfHEmu/Interface-Inventory?node-id=27-2&node-type=canvas&t=ZddIqsg1uvm5xeby-0)

## 15-11-2024: 
**Code/Design-review**

### Wat heb ik vandaag gedaan?  
Vandaag heb ik reviews gegeven op de styleguides van klasgenoten. Tijdens deze reviews kwam ik goede ideeën tegen voor het structureren van custom properties en het organiseren van CSS-modules.

Feedback gegeven op:
- [Feedback #1](https://github.com/warrenAk/look-and-feel-styleguide/issues/6)
- [Feedback #2](https://github.com/warrenAk/look-and-feel-styleguide/issues/7)

### Welke code neem ik mee in mijn werk?
- **Gebruik van variabelen** voor kleur en typografie om consistentie en toekomstige updates makkelijker te maken.
- **Het opdelen van stylesheets** in kleinere modules voor een betere overzichtelijkheid en herbruikbaarheid van de code.

# Week 2
## 18-11-2024: 
**Typografie en EM**

### Wat heb ik gedaan?
Vandaag heb ik onderzoek gedaan naar de typografie van twee websites: **De Correspondent** en **Pixel Ambacht**. Hierbij heb ik gekeken naar de CSS-properties die bijdragen aan de leesbaarheid van teksten.  

![image](https://github.com/user-attachments/assets/d48d982c-6db8-45ee-b769-2276ba9a1016)

**De Correspondent**
- **Font-family:**  
  `Family, Times, Times New Roman, serif`
- **Font-size:**  
  - Desktop: 4rem  
  - Mobile: 4rem  
- **Line-height:**  
  1
- **Tekstbreedte:**  
  - Desktop: 750px  
  - Mobile: 100%
- **Andere opvallende CSS-properties:**  
  - `font-weight: 700;`

![image](https://github.com/user-attachments/assets/bdf8fb76-dc61-4408-a95b-b225ea858160)

**Pixel Ambacht**
- **Font-family:**  
  `kinesis-pro-3, Georgia, Times, "Times New Roman", serif;`
- **Font-size:**  
  - Desktop: 2.6em  
  - Mobile: 2.6em  
- **Line-height:**  
  1
- **Tekstbreedte:**  
  - Desktop: 750px  
  - Mobile: 100%
- **Andere opvallende CSS-properties:**  
  - `margin: .5em 0;` 

---

**Typografie en CSS-properties**

#### **Macro-typografie**  
Macro-typografie richt zich op de algemene structuur en stijl van tekst:  
- **Font-family:** Zorgt voor consistentie en sfeer in de tekst.  
  - Voorbeeld: `font-family: 'Arial', sans-serif;`  
- **Font-size:** Hiërarchie en leesbaarheid. Met `clamp()` kan de tekst schaalbaar worden gemaakt.  
  - Voorbeeld: `font-size: clamp(1rem, 2.5vw, 2rem);`  
- **Line-height:** Zorgt voor de juiste afstand tussen regels voor leescomfort.  
  - Voorbeeld: `line-height: 1.6;`  
- **Text-align:** Regelt de uitlijning van tekst in een container.  
  - Voorbeeld: `text-align: center;`  

#### **Micro-typografie**  
Dit betreft de subtiele details die de leesbaarheid verbeteren:  
- **Letter-spacing:** Ruimte tussen letters voor een nettere uitstraling.  
  - Voorbeeld: `letter-spacing: 0.05em;`  
- **Word-spacing:** Voegt ruimte toe tussen woorden, bijvoorbeeld voor langere teksten.  
  - Voorbeeld: `word-spacing: 0.1em;`  
- **Hyphenation:** Laat woorden automatisch afbreken bij kleine viewports.  
  - Voorbeeld: `hyphens: auto;`  
- **Text-wrap:** Regelt hoe tekst breekt in containers.  
  - Voorbeeld: `overflow-wrap: break-word;`  

---

#### **Pixel Font Ontwerpen & Implementeren**  

Vandaag heb ik mijn eigen **pixel font** ontworpen met de online tool [Ares Luna Configurator](https://config.aresluna.org). Na het ontwerpen heb ik het font gedownload in het **OTF-format** en geïmplementeerd op mijn I Love Web-website. 

**Resultaten**  
Hier zijn enkele voorbeelden van het font in actie:  

![image](https://github.com/user-attachments/assets/2bd49cb3-6d4a-4506-b31b-57fa920cc736) 

*Mijn zelfgemaakte pixel font in de Ares Luna Configurator.*  

![image](https://github.com/user-attachments/assets/c5b3f6e9-1df9-442b-90ea-144757594970)
*Het font toegepast op mijn I Love Web-website.*  

**Wat heb ik geleerd?**  
- Hoe je een custom font ontwerpt en gebruikt in CSS.  
- Het gebruik van `@font-face` om een OTF-font te laden.  
- Het toepassen van unieke typografie voor meer creativiteit in webdesign.  


---

#### **CSS-eenheden voor Regellengte**  

Ik heb geëxperimenteerd met verschillende CSS-eenheden om de ideale regellengte voor tekst te bepalen. Ik heb verschillende eenheden zoals cm, em, ch, rem, vw, vmax en cqw gebruikt om de breedte van een tekstregel met 10-12 woorden te bepalen, zoals aanbevolen door Robert Bringhurst.

De CSS-code varieerde afhankelijk van de eenheid, en ik ontdekte dat de meeste eenheden goed werken voor tekstregels van de juiste lengte, maar met elk een uniek effect afhankelijk van de context, zoals het gebruik van verschillende lettertypen.

Bekijk mijn commits:

* [html](https://github.com/Saif8599/look-and-feel-corporate-identity/commit/9d4d04b7ca2e9b4c05c1341e094ad5addaee83ba)
* [css](https://github.com/Saif8599/look-and-feel-corporate-identity/commit/8df5e78f3164b3431651369bd96c78fe2f8c744c)

# Week 2
## 20-11-2024: 
**Formulieren**

### **`<input>` Types Overzicht**

1. **`text`**  
   - **Omschrijving**: Standaard tekstveld.  
   - **Attribuut**: `maxlength="10"` – beperkt de invoer tot 10 tekens.  
   - **Gebruik van `list`**: Ja, om suggesties toe te voegen.  

2. **`email`**  
   - **Omschrijving**: Voor invoer van e-mailadressen.  
   - **Attribuut**: `multiple` – accepteert meerdere adressen gescheiden door komma's.  
   - **Gebruik van `list`**: Ja, voor voorgestelde e-maildomeinen.  

3. **`number`**  
   - **Omschrijving**: Numerieke invoer.  
   - **Attribuut**: `step="0.5"` – bepaalt de stapgrootte bij gebruik van pijltjes.  
   - **Gebruik van `list`**: Niet bruikbaar.  

4. **`date`**  
   - **Omschrijving**: Datumselector.  
   - **Attribuut**: `min="2024-01-01"` – voorkomt data vóór een bepaalde datum.  
   - **Gebruik van `list`**: Niet bruikbaar.  

5. **`file`**  
   - **Omschrijving**: Uploadbestanden.  
   - **Attribuut**: `accept="image/*"` – beperkt tot afbeeldingsbestanden.  
   - **Gebruik van `list`**: Niet bruikbaar.  

6. **`color`**  
   - **Omschrijving**: Kleurkiezer.  
   - **Attribuut**: Geen extra attributen zoals `min` of `step` van toepassing.  
   - **Gebruik van `list`**: Niet bruikbaar.  

7. **`range`**  
   - **Omschrijving**: Schuifbalk voor waarden.  
   - **Attribuut**: `min="1" max="10"` – bepaalt de minimum- en maximumwaarden.  
   - **Gebruik van `list`**: Niet effectief.  

8. **`tel`**  
   - **Omschrijving**: Telefoonnummer.  
   - **Attribuut**: Geen ingebouwde validatie.  
   - **Gebruik van `list`**: Ja, voor voorgestelde nummers.  

9. **`password`**  
   - **Omschrijving**: Wachtwoordinvoer (met verborgen tekens).  
   - **Attribuut**: `maxlength="20"` – beperkt lengte.  
   - **Gebruik van `list`**: Niet effectief.  

10. **`search`**  
    - **Omschrijving**: Zoekveld met extra opmaak.  
    - **Attribuut**: `placeholder="Zoek hier..."`.  
    - **Gebruik van `list`**: Ja, voor voorgestelde zoektermen.

---

### **Formulierelementen stylen**

Tijdens deze opdracht heb ik verschillende <input> types onderzocht en gestyled met CSS. Hierbij heb ik gebruik gemaakt van pseudo-classes zoals :focus en :invalid

| Origineel               | Text Focus Effect       | Validatiefeedback     |
|--------------------------|-------------------------|-------------------------|
![image](https://github.com/user-attachments/assets/f8b507e3-883e-429d-9b05-054a4879a0f8) | ![Focus](https://github.com/user-attachments/assets/f14b7b52-9e37-424c-8d29-9a14c2b78feb) | ![Validatie](https://github.com/user-attachments/assets/9b8c9912-7cf7-40ce-9bb9-e69f79309c72) |
| ![Origineel](https://github.com/user-attachments/assets/0d2a2ded-62a6-418f-9120-575d3e712402)| ![Focus](https://github.com/user-attachments/assets/84e61395-53bd-4e7b-969c-e0caf56ae5df)| ![Validatie](https://github.com/user-attachments/assets/4ff22bc7-4942-448c-bef2-861a01b80a35)|
| ![Origineel](https://github.com/user-attachments/assets/81f9eb00-b6c1-4524-8e4d-caefa97f148f)| ![Focus](https://github.com/user-attachments/assets/61d8667f-0111-4c77-9c85-be7b2760ff12) | ![Validatie](https://github.com/user-attachments/assets/61f7ba19-5f3b-4aad-94d7-e3c1b97bf7f1)|

1. **Origineel (Standaard Styling)**:
   - **Text Input**: Het tekstinvoerveld heeft een grijze rand, padding en afgeronde hoeken. Dit is de standaardstijl wanneer het veld niet in gebruik is.
   - **Email Input**: Hetzelfde als het tekstinvoerveld, maar specifiek voor e-mailadressen.
   - **Color Input**: De kleurkiezer heeft een vaste breedte en hoogte, afgeronde hoeken en een cursor die verandert naar een pointer bij hover om aan te geven dat het klikbaar is.

2. **Focus Effect**:
   - **Text & Email Input**: Wanneer een tekst- of e-mailinvoerveld in focus is, verandert de randkleur naar blauw en krijgt de achtergrond een gradient van blauw naar roze.
   - **Color Input**: Geen specifiek focus-effect is ingesteld, maar het kan typisch de randkleur veranderen als het actief is (color input is standaard actief tenzij je het omzeilt doormiddel javascript of `value=''`).

3. **Validatiefeedback**:
   - **Invalid Input**: Als de invoer ongeldig is (bijvoorbeeld leeg of niet volgens het juiste formaat), wordt de rand rood en wordt er een rode schaduw toegevoegd om de fout visueel te benadrukken.
   - **Valid Input**: Bij een geldige invoer verandert de randkleur naar groen en krijgt het veld een groene schaduw om aan te geven dat de invoer correct is.

Deze styling biedt duidelijke visuele feedback voor de gebruiker over de status van hun invoer (actief, geldig of ongeldig), waardoor het gemakkelijker wordt om formulieren correct in te vullen.

## 15-11-2024: 
**Code/Design-review**

### Wat heb ik vandaag gedaan?  
Vandaag heb ik een stylesheet-review uitgevoerd:  

1. **Review : Styleguide Issues**  
   - Beoordeeld via [WarrenAk's GitHub issues #6](https://github.com/warrenAk/look-and-feel-styleguide/issues/6) en [issue #7](https://github.com/warrenAk/look-and-feel-styleguide/issues/7).  
   - Feedback gegeven over typografie, kleurenpalet en responsiviteit.

# Week 3
## 25-11-2024: 
**Workshop layout en compositie**

Vandaag heb ik deelgenomen aan een workshop over layout en compositie, waarbij we dieper ingingen op **Gestalt-psychologie**. Dit hielp ons begrijpen hoe mensen visuele elementen waarnemen en ordenen. Enkele belangrijke wetten die we hebben besproken:  

### Gestalt-wetten  

1. **Law of Common Region**  
   - Elementen die zich binnen dezelfde visuele grens of regio bevinden, worden waargenomen als een groep, zelfs als ze fysiek niet dichtbij elkaar staan.  
   - **Voorbeeld:** Knoppen die binnen een kader staan worden als bij elkaar horend ervaren.  
   - Ik heb deze wet toegepast in mijn Figma-design door inhoud te groeperen binnen duidelijke afgebakende secties (zie foto "Example").

2. **Law of Proximity**  
   - Elementen die dicht bij elkaar staan, worden waargenomen als onderdeel van dezelfde groep.  
   - **Voorbeeld:** Een navigatiemenu met knoppen die dicht bij elkaar staan voelt meer verbonden dan knoppen met grote tussenruimtes.  

3. **Law of Similarity**  
   - Elementen die visueel op elkaar lijken (kleur, vorm, grootte, stijl) worden als een groep gezien, zelfs als ze niet dicht bij elkaar staan.  
   - **Voorbeeld:** Titels en tekstblokken in dezelfde kleur en stijl suggereren dat ze bij dezelfde sectie horen.  

![image](https://github.com/user-attachments/assets/a513034b-953c-49df-998e-513ef24ca2c0)

### Groepsonderzoek  
In een groep van drie hebben we deze wetten verder onderzocht. Mijn focus lag op de **Law of Common Region**, waarbij ik een Figma-design maakte waarin deze wet duidelijk zichtbaar is.

![image](https://github.com/user-attachments/assets/1e6d6a13-ab65-47bc-9138-efb78b9c6907)
![image](https://github.com/user-attachments/assets/c4d60e7c-f209-4f94-bf4a-8e30a608a4c5)
![image](https://github.com/user-attachments/assets/d56a6228-1e8d-4ebc-af26-fa9332490d3e)
![image](https://github.com/user-attachments/assets/93e2015d-b40a-477d-aa58-853c360d1abb)


## 26-11-2024 
**CSS Challenge 7 – States van buttons, controls en `:has()`**

Vandaag heb ik gewerkt aan **CSS Challenge 7**, waarin de focus lag op het stylen van verschillende interactiestates van buttons en form-controls. Daarbij heb ik ook geleerd over de kracht van de `:has()`-pseudo-klasse.  

Wat ik heb geleerd  

1. ###  **Interactie-states van buttons**  
   - Buttons kunnen verschillende **states** hebben, zoals:  
     - `:hover` – wanneer een gebruiker met de muis over de knop beweegt.  
     - `:focus` – wanneer de knop geselecteerd is, bijvoorbeeld door tabben met het toetsenbord.  
     - `:active` – wanneer de knop ingedrukt wordt.  
   - **CSS-voorbeeld:**
     ```css
     button {
         background-color: #007bff;
         color: white;
         padding: 10px 20px;
         border: none;
         border-radius: 5px;
         cursor: pointer;
         transition: background-color 0.3s ease;
     }

     button:hover {
         background-color: #0056b3;
     }

     button:focus {
         outline: 2px solid #ff9800;
     }

     button:active {
         background-color: #003f7f;
     }
     ```
   - **Uitleg:** Het gebruik van deze states verbetert de gebruikerservaring door visuele feedback te geven bij interactie met buttons.  

---

2. **States van form-controls**  
   - Form-controls zoals **checkboxes, radio buttons, en textfields** kunnen gestyled worden voor states zoals:  
     - `:checked` – wanneer een optie geselecteerd is.  
     - `:disabled` – wanneer een control niet actief is.  
     - `:focus-within` – wanneer een element binnen een formulier de focus heeft.  
   - **CSS-voorbeeld:**  
     ```css
     input[type="checkbox"]:checked + label {
         color: green;
         font-weight: bold;
     }

     input[type="text"]:disabled {
         background-color: #e0e0e0;
         color: #888;
     }

     form:focus-within {
         border: 2px solid #4caf50;
     }
     ```
   - **Uitleg:** Het benadrukken van deze states helpt gebruikers bij het invullen van formulieren en het navigeren door een interface.  

---

3. **Gebruik van `:has()`**  
   - De `:has()`-pseudo-klasse wordt gebruikt om een element te stylen op basis van de aanwezigheid van bepaalde kinderen of states.  
   - **Voorbeeld:** Een kaart dynamisch stylen als deze een geselecteerde checkbox bevat.  
     ```css
     .card:has(input[type="checkbox"]:checked) {
         border: 2px solid #4caf50;
         background-color: #e8f5e9;
     }
     ```
   - **Uitleg:** `:has()` maakt het mogelijk om contextueel te stylen zonder extra JavaScript, wat zorgt voor eenvoud en betere prestaties.  
