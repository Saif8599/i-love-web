# Week 1  
## 4-2-2025  
**Sprint planning Connect Your Tribe**
Vandaag heb ik de sprintplanning opgesteld en georganiseerd met behulp van GitHub Projects.

### Tools en Technologieën

-**NPM (Node Package Manager)**

![image](https://github.com/user-attachments/assets/d612d5e6-ea90-4403-90bb-1ca684e43805)

npm is een pakketbeheerder voor JavaScript die wordt gebruikt om externe modules en libraries te installeren en beheren. Deze tool maakt het gemakkelijker om de benodigde dependencies voor het project toe te voegen en bij te werken. Het stelt me in staat om snel te werken met populaire JavaScript-bibliotheken en tools.


-**LiquidJS**

![image](https://github.com/user-attachments/assets/3d1a4d1b-ef10-43ec-ac44-7395c52a03fe)

LiquidJS is een eenvoudige, expressieve en veilige template-engine gebaseerd op Shopify Liquid. Deze tool maakt het mogelijk om dynamische templates te bouwen. LiquidJS is vooral handig in combinatie met Jekyll-sites en GitHub Pages, en het biedt de flexibiliteit om content dynamisch in de templates in te voegen.


-**Node.js Backend Framework**

![image](https://github.com/user-attachments/assets/19b369de-efac-412b-954f-ab1141fb4466)

Node.js wordt gebruikt om RESTful API's te bouwen. Het is een krachtig backend-framework dat me in staat stelt om efficiënte en schaalbare server-side functionaliteiten te ontwikkelen. Door het gebruik van Node.js kan ik de backend van het project opzetten en zorgen voor de juiste communicatie tussen de frontend en de server.


### Workshop visitekaartje met NodeJS

## 5-2-2025:
**Workshop REST API en JSON**  
### Waar ging het over?

Vandaag ging de workshop over hoe je data in je webapp kunt ophalen en tonen. We hebben het gehad over:

1. **Routing:** Routes instellen om pagina’s aan elkaar te koppelen.

2. **Views:** Pagina's dynamisch maken zodat je data direct kan laten zien.

3. **Express:** Een handige tool om sneller backend-functionaliteiten te maken.

4. **Liquid:** Een template-engine die je helpt om makkelijk dynamische HTML-pagina’s te bouwen.

5. **JSON:** Een formaat om data netjes uit te wisselen.

6. **API:**  REST AI gebruiken die data levert.

Hiermee kun je data netjes laten zien op je site:
**Extra route toevoegen met data parsen**

```javascript
// Vul hier jouw eigen ID in (zie de instructies in de leertaak)
const personID = 165;

// Doe een fetch naar een URL op de WHOIS API, ga pas verder als de fetch gelukt is
const personResponse = await fetch(
  "https://fdnd.directus.app/items/person/" + personID
);

// Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
const personResponseJSON = await personResponse.json();

// Alle data vanuit custom parsen
personResponseJSON.data.custom = JSON.parse(personResponseJSON.data.custom);

// Om Views weer te geven, heb je Routes nodig
// Maak een GET route voor de oefenen (als /oefenen)
app.get("/oefenen", async function (request, response) {
  // Render oefenen.liquid uit de Views map en geef de opgehaalde data mee, in een variabele genaamd person
  response.render("oefenen.liquid", {
    person: personResponseJSON.data
  });
});
```


Met deze code kan je alle data weergeven : 

```html
<details>
  <summary>Data</summary>
  <pre>{{ person | json : 4 }}</pre>
</details>

```
![image](https://github.com/user-attachments/assets/c3f4803c-ff64-4a09-9072-f483652627b1)

### How to Use Conventional Commits in Your Workflow

**Conventional Commits** is een standaard voor gestructureerde commit messages die het ontwikkelproces verduidelijken en samenwerking bevorderen. Het formaat is:  
`<type>[optional scope]: <description>`

#### Veelgebruikte types
- **feat:** Nieuwe functionaliteit (bijv. `feat(auth): voeg login-functionaliteit toe`)  
- **fix:** Bugfixes (bijv. `fix: los crash op bij aanmelden`)  
- **docs:** Documentatie-updates (bijv. `docs: voeg API-voorbeelden toe`)  
- **chore:** Onderhoudstaken zonder directe impact (bijv. `chore: update dependencies`)  

#### Waarom gebruiken?
- **Duidelijkheid:** Commit messages geven direct de intentie van een wijziging weer.  
- **Debuggen:** Helpt snel de oorzaak van bugs te traceren.  

Met deze methode blijft de commitgeschiedenis gestructureerd en begrijpelijk.

### Bron

-[JSON Parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

-[Conventional Commits](https://dev.to/itxshakil/commit-like-a-pro-a-beginners-guide-to-conventional-commits-34c3#bonus-tips-mastering-commit-message-references)

## 7-2-2025:
**Code/Design-review**  

3 reviews gegeven :

https://github.com/Safae-e/connect-your-tribe-profile-card/issues/1#issuecomment-2642593929
https://github.com/DeBosOs/connect-your-tribe-profile-card/issues/1#issuecomment-2642519008
https://github.com/OFRqq/connect-your-tribe-profile-card/issues/1#issuecomment-2642547644


## 10-2-2025:
**Workshop Squadpage**  
### Waar ging het over?
- 

## 12-2-2025:
**Workshop Filteren en Sorteren**  
### Waar ging het over?
- 

## 13-2-2025:
**Url structureren**  
### Ontdekkingen

| Feature            | `{% include %}`  | `{% render %}`  |
|--------------------|------------------|-----------------|
| **Hoe wordt de partial geladen?** | Direct in de huidige scope | In een **eigen, geïsoleerde** scope |
| **Heeft toegang tot de ouder-variabelen?** | ✅ Ja, krijgt alle variabelen uit de parent | ❌ Nee, krijgt alleen de meegegeven variabelen |
| **Kan variabelen wijzigen?** | ✅ Ja, gebruikt dezelfde scope | ❌ Nee, variabelen blijven binnen de partial |
| **Prop hoeft niet meegegeven te worden** | ✅ Ja, gebruikt de variabelen van de parent| ❌ Nee, moet expliciet worden meegegeven |

## 14-2-2025:
**Code/Design-review**

### We ♥ Web met [Kilian Valkhof](https://kilianvalkhof.com/)

# Week 3  
**Voorjaarsvakantie**

# Week 4  
## 24-2-2025  
**Workshop User Generated Content**

## 26-2-2025
**WRAP-UP**

## 28-2-2025  
**Retrospect sprint 7**

### Vragenlijst

1. Ik kan uitleggen wat NodeJS is en waarvoor het gebruikt wordt - 3
2. Ik weet wat het doel van package.json is en heb hier aanpassingen ingemaakt - 3
3. Ik heb met npm packages geïnstalleerd en gebruikt in het bestand server.js - 3
4. Ik kan met commando’s in de terminal een NodeJS project stoppen en starten - 3
5. Ik weet waarom ik mijn NodeJS project regelmatig moet herstarten en kan dit uitleggen - 3
6. Ik heb een strategie voor debuggen in NodeJS - 2
7. Ik kan uitleggen wat Express.js doet en waarom het nodig is om met NodeJS een website te bouwen - 3
8. Ik weet wat routes zijn en kan zelf een nieuwe route aanmaken - 3 
9. Ik weet wat request en response argumenten zijn ineen functie voor het laden van data - 3
10. Ik heb gebruik gemaakt van een request parameter om specifieke data te laden - 3 
11. Ik kan uitleggen wat Liquid doet en waarom het nodig is om met Express.js een website te maken - 3
12. Ik weet hoe ik data naar Liquid verstuur om dit te gebruiken bij het renderen van een pagina - 3
13. Ik weet hoe ik Liquid filters toe kan passen en waar ik kan vinden hoe die werken - 3
14. Ik heb een nieuwe route gemaakt en nieuwe data meegegeven aan een Liquid view - 3
15. Ik weet waar een foreach loop voor gebruikt wordt en pas het toe in een Liquid view om HTML te renderen - 3
16. Ik kan in Liquid een controle maken waarmee de avatar niet getoond wordt als deze niet in whois.fdnd.nl is ingevuld - 2
17. Ik heb een strategie voor debuggen in Liquid - 3
18. Ik kan data fetchen uit een REST API - 3
19. Ik snap het verschil tussen HTTP requests van de methodes GET en POST - 3
20. Ik kan data uit een REST API filteren of sorteren - 3
21. Ik snap wat het async keyword doet in JavaScriptcode - 3
22. Ik weet wat het doel is van een try/catch block en kan het gebruiken bij het parsen van JSON - 2
23. Ik begrijp het verschil tussen client-side JavaScript en server-side JavaScript en wanneer ik welke het handigst in kan zetten - 2
24. Ik kan formulier data die is ge-POST opslaan ineen variabele op de server en gebruiken bij het renderen van een pagina - 3
25. Ik kan formulier data die is ge-POST door middel van een POST of PATCH HTTP request opslaan in de REST API - 2

71 punten