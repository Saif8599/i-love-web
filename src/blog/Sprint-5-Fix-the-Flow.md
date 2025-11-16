---
title: Sprint 5 - Fix the Flow
sprint: 5
layout: base.njk
---

# Week 1  
## 2-12-2024:  
**Workshop User Interface Design**  

### Wat heb ik vandaag gedaan?  
- Roadmap en user stories opgesteld.  
- Schetsen gemaakt van een wireflow.  
- Het verschil tussen **active** en **focus** verduidelijkt in mijn ontwerpen.  
- **Feedback** en **feedforward** leren herkennen en toepassen in een gebruikersinterface.  

---

### Roadmap  

![image](https://github.com/user-attachments/assets/b52b2a41-9f6b-4a61-85d8-c13003d2b412) 

![image](https://github.com/user-attachments/assets/9a65cc35-10f8-4391-904e-e2b324ab10c3)

---

### Wireflow  
![image](https://github.com/user-attachments/assets/478ec58f-f2b3-40ce-b827-45a96786af7c)

[Bekijk de volledige issue hier](https://github.com/users/Saif8599/projects/2/views/1?pane=issue&itemId=89341653&issue=Saif8599%7Cfix-the-flow-interactive-website%7C22)  

---

### Feedback en Feedforward  

**Feedback**: Dit is informatie die een gebruiker ontvangt nadat een actie is uitgevoerd. Bijvoorbeeld wanneer een knop wordt ingedrukt en een bevestigingsbericht verschijnt. In mijn ontwerp heb ik dit toegepast door duidelijke visuele signalen toe te voegen, zoals een kleurverandering van de knop en een tekstmelding (zie 1.1 Subject selected) 

**Feedforward**: Dit is informatie die een gebruiker krijgt over wat er gaat gebeuren als ze een actie ondernemen. Bijvoorbeeld een tooltip die verschijnt wanneer een muis over een knop beweegt, die uitlegt wat de knop doet. Ik heb dit toegepast door interactieve tooltips toe te voegen in mijn wireflow (zie 1.2 Remove subject)

---

**Bronnen**
- [Medium: Tinder Wireflow](https://medium.com/@WeAreFantasy/tinder-6dfca630ad53)  
- [Medium: Wireflows - When, Why & How to Use Them](https://medium.com/@webkeyz/wireflows-when-why-how-to-use-them-b4c04d169f81)  

## 4-12-2024:  
**Workshop Programming User Interaction**  

### Wat heb ik vandaag gedaan?  
Vandaag heb ik tijdens de workshop geleerd hoe je gebruikersinteracties kunt programmeren met JavaScript. Hierbij heb ik functies zoals `querySelectorAll`, `addEventListener`, en het gebruik van data-attributen toegepast. Daarnaast heb ik ontdekt hoe je fouten opspoort en oplost, zoals een script dat te vroeg wordt geladen.  

---

### De 3 Stappen van JavaScript
**Stap 1: Selecteren (Element)**

Het element is het HTML-element dat je wilt manipuleren of waarop je een actie wilt uitvoeren. Dit is de eerste stap waarin je een specifiek onderdeel van de webpagina selecteert. Dit doe je met methoden zoals `document.querySelector` of `document.getElementById`.

**Voorbeeld:**
  ```javascript
   // Selecteer een HTML-element met een ID
   const mijnKnop = document.querySelector('#mijnKnop');
  ```

**Stap 2: Interactie toevoegen (Functie)**

Een functie bepaalt het gedrag van een element. Dit gebeurt vaak door middel van een event listener, die luistert naar een specifieke interactie, zoals een klik of een muisbeweging.

**Voorbeeld:**
   ```javascript
   // Selecteert een knop en voegt een klikinteractie toe
   const knop = document.querySelector('#mijnKnop');
   knop.addEventListener('click', () => {
     alert('Je hebt op de knop geklikt!');
   });
   ```

**Stap 3: Eigenschap (Property)**

Een eigenschap beschrijft een kenmerk of staat van een element. Je kunt eigenschappen lezen of aanpassen om het gedrag of de inhoud van een element te wijzigen.

**Voorbeeld:**
   ```javascript
   const heading = document.querySelector('#pageTitle');

   // De tekstinhoud van een element ophalen en wijzigen
   console.log(heading.textContent); // Geeft de huidige tekstinhoud weer
   heading.textContent = 'Welkom op de webinar pagina!';
   ```

---

### Ontdekkingen  

**1. Selecteren en Interactie toevoegen**  

**`addEventListener`**: Hiermee voeg je een actie toe, zoals een klikgebeurtenis.

  **Voorbeeld:**
  ```javascript
  const myButton = document.querySelector('#myButton');
  myButton.addEventListener('click', () => {
  alert('Knop geklikt!');
  });
  ```

**`querySelectorAll`**: Hiermee kun je meerdere elementen selecteren en bewerken.

  **Voorbeeld:**  
  ```javascript
  const buttons = document.querySelectorAll('.my-button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      console.log('Je hebt op een knop geklikt!');
    });
  });
  ```
**`getAttribute()`**: Met deze functie kun je de waarde van een attribuut ophalen van een HTML-element.

  **Voorbeeld:**
  ```javascript
  const value = button.getAttribute('data-category');
  console.log(value); // Haalt de waarde van het data-category attribuut op
  ```
In dit voorbeeld wordt de waarde van het data-category attribuut opgehaald en opgeslagen in de variabele value.

**`document.captureEvents()`**: Deze functie wordt gebruikt om te luisteren naar specifieke gebeurtenissen op oudere browsers (vooral in de context van Netscape).

**Voorbeeld (verouderd):**

  ```javascript
  document.captureEvents(Event.CLICK);
  ```

  Deze code zou vroeger het CLICK-event op het document vastleggen, maar tegenwoordig is het niet meer nodig, omdat moderne browsers de 
  `addEventListener()` functie ondersteunen.

**`document.cookies`**: Met deze eigenschap kun je toegang krijgen tot cookies die zijn ingesteld voor de huidige pagina. Cookies bevatten gegevens die door de server of de client-side zijn opgeslagen en kunnen worden gebruikt voor bijvoorbeeld sessiebeheer.

**Voorbeeld:**

  ```javascript
  document.cookie = "username=JohnDoe"; // Stel een cookie in
  ```

  Dit stelt een cookie in met de naam username en de waarde JohnDoe.

---

**2. Micro-interacties**
* Dit zijn kleine animaties of visuele effecten die een website aantrekkelijker maken.
Voorbeeld: Een knop die van kleur verandert en tekst aanpast bij een klik.

---

**3. Foutanalyse**

Tijdens de workshop kreeg ik de foutmelding:
`Cannot read property 'addEventListener' of null.`

**Wat ging er fout?**
* Het script werd geladen vóórdat de HTML was gerenderd. Hierdoor kon JavaScript het element niet vinden.

**Oplossing:**
* Door het script onderaan de body te plaatsen of te wachten tot de DOM volledig is geladen:


## 6-12-2024:  
**Code/Design-review**

### Wat heb ik vandaag gedaan?

code review:
* https://github.com/OFRqq/fix-the-flow-interactive-website/issues/20
* https://github.com/julia-stevens/fix-the-flow-interactive-website/issues/27


### Verschil Let en Const

let allows the variable to be reassigned multiple times, while const creates a variable that cannot be reassigned after it has been assigned a value.

**Let :**
  ```javascript
  let greeting = "say Hi";
  if (true) {
    let greeting = "say Hello instead";
    console.log(greeting); // "say Hello instead"
  }
  console.log(greeting); // "say Hi"
  ```

**Const :**
 ```javascript
  const greeting = "say Hi";
  const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared
 ```

**Bronnen**
- https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

# Week 2  
## 9-12-2024:  
**Workshop UI Events** 

### Wat heb ik vandaag gedaan?

Ik ben begonnen met deeltaak [ui-events](https://github.com/Saif8599/ui-events).

- **Hoeveel van de 10 experimenten heb je al gemaakt?**
  - Tot nu toe heb ik 3 experimenten gemaakt.

- **Bij welk gedragscriterium past deze deeltaak en wat moet je nog doen om het te kunnen toevoegen aan Portflow?**
  - Deze deeltaak past bij het gedragscriterium Interactie, omdat ik werk met UI Events zoals klikken en muisbewegingen, die zorgen voor feedback en feedforward tijdens de interactie met de website.

- **Welke UI Events kun je nog meer toepassen in de leertaak, voor de opdrachtgever?**
  - Ik kan `focus`, `scroll`, `input`, en `change` events toepassen om de gebruikersinteractie te verbeteren.


## 11-12-2024:  
**Workshop forms en states**

### Wat heb ik vandaag gedaan?

Vandaag heb ik geleerd hoe je met CSS en states zoals :user-invalid formulieren toegankelijker maakt. Dit zorgt voor directe feedback bij fouten, wat de gebruiksvriendelijkheid verhoogt.

```html
<form>
  <label for="email">Email:</label>
  <input id="email" type="email" required>
  <button type="submit">Verstuur</button>
</form>

<style>
  input:user-invalid {
    border: 2px solid red;
  }
  input:valid {
    border: 2px solid green;
  }
</style>
```
![image](https://github.com/user-attachments/assets/68a81e8f-ed0d-4898-9c22-7033b4b36c30)
![image](https://github.com/user-attachments/assets/05737fd2-cf42-4476-be87-990f47069f77)

Wat doet het?
* Ongeldige invoer: rode rand door :user-invalid.
* Geldige invoer: groene rand door :valid. 

## 13-12-2024:  
**Code/Design-review en User Testing**  

### Wat heb ik vandaag gedaan?  
Vandaag heb ik gewerkt aan de review van code en design en dit gecombineerd met user testing. Hierdoor kon ik feedback verzamelen en verbeteringen doorvoeren op basis van echte gebruikerservaringen.  

### User Story met Scenario  
Ik heb een user story uitgewerkt waarin het scenario van de gebruiker staat:  
[User Story Scenario](https://github.com/users/Saif8599/projects/2/views/1?pane=issue&itemId=89341653&issue=Saif8599%7Cfix-the-flow-interactive-website%7C22)

### User Testing Resultaten  
Tijdens de user tests heb ik feedback kunnen geven en dit via GitHub issues genoteerd:  
- [Test voor Bran](https://github.com/Brancovanbeek/fix-the-flow-interactive-website/issues/6)  
- [Test voor Ravi](https://github.com/Ravirkt/fix-the-flow-interactive-website/issues/11)  

De feedback uit deze tests is belangrijk om de gebruikerservaring verder te verbeteren.

# Week 3  
## 16-12-2024:  
**Workshop over navigeren en labels** 

### Wat heb ik vandaag gedaan?  
Vandaag heb ik geleerd over het belang van duidelijke navigatie en labels in webdesign. Een goed voorbeeld hiervan zijn straatnaambordjes (feedback) en bewegwijzering (feedforward).  

### Wat heb ik ontdekt?  
Bij het gebruik van iconen is het belangrijk om deze te voorzien van labels. Dit zorgt ervoor dat gebruikers beter begrijpen wat een icoon doet. Net zoals input-elementen in een formulier altijd een label nodig hebben, geldt dit ook voor andere interactieve elementen.  

![Menu icon voorbeelden](https://github.com/user-attachments/assets/27462bd7-353b-4647-a5d3-b20adaf6664e)  
Bovenstaand beeld toont hoe verschillende menu-iconen voor dezelfde interactie verwarrend kunnen zijn zonder context of label.  

### Wat neem ik mee?  
Zorg ervoor dat iconen en navigatie-elementen altijd duidelijk zijn door labels of tekst toe te voegen, zodat gebruikers direct begrijpen wat ze kunnen verwachten.

## 18-12-2024: 
**WRAP-UP sprint 5**

### Wat heb ik vandaag gedaan?

Vandaag heb ik de README van mijn project geüpdatet om het werk van Sprint 5 samen te vatten. Hierin heb ik alle belangrijke details over het project, de functionaliteiten, en de kenmerken van deze sprint gedocumenteerd.  

Bekijk de README hier: [README.md](https://github.com/Saif8599/fix-the-flow-interactive-website/blob/main/README.md)  

### Ontdekkingen  

**AnimationEvent**

Tijdens het experimenteren met **AnimationEvent** heb ik geleerd hoe je specifieke acties kunt uitvoeren tijdens verschillende fasen van een CSS-animatie. Er zijn drie belangrijke events:

1. **`animationstart`**: Wordt geactiveerd wanneer een animatie begint.
2. **`animationiteration`**: Wordt geactiveerd bij elke herhaling van een animatie.
3. **`animationend`**: Wordt geactiveerd wanneer een animatie eindigt.

**Codevoorbeeld**

Hier is een eenvoudige implementatie met een bewegende en roterende box:

```html
<div class="box"></div>

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: orange;
    animation: moveAndSpin 3s infinite;
  }

  @keyframes moveAndSpin {
    0% {
      transform: translateX(0) rotate(0deg);
    }
    50% {
      transform: translateX(200px) rotate(180deg);
    }
    100% {
      transform: translateX(0) rotate(360deg);
    }
  }
</style>
```

  ```javascript
  const box = document.querySelector('.box');

  // Start van de animatie
  box.addEventListener('animationstart', () => {
    console.log('Animatie gestart!');
    box.style.border = '2px solid red';
  });

  // Elke herhaling van de animatie
  box.addEventListener('animationiteration', () => {
    console.log('Nieuwe cyclus!');
    box.style.backgroundColor =
      box.style.backgroundColor === 'orange' ? 'blue' : 'orange';
  });

  // Animatie eindigt
  box.addEventListener('animationend', () => {
    console.log('Animatie gestopt!');
    box.style.opacity = 0.5;
  });
  ```