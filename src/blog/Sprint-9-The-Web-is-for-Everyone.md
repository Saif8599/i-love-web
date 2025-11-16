---
title: Sprint 9 - The Web is for Everyone
sprint: 9
layout: base.njk
---

# week 1
## 24-3-2025  
**Workshop Progressive Enhancement**

1. Bepaal eerst de core functionality van wat je gaat maken
2. Bouw die functionaliteit met de simpelste techniek (meestal HTML, met een klein beetje Mobile First CSS voor de huisstijl)
3. Voeg daarna extra enhancements toe met CSS en client-side JS, om de User Experience te verbeteren (de leukste stap!)

```
<h1>Frontend design & development</h1>
<style>
  h1{
    max-width: 200px;
    font-size: 30px;
    background: linear-gradient(90deg, purple, blue, black);
    background-clip: text;
    color:  transparent;
  }
</style>
```
Audio core functionaliteit = Het horen van de audio na het klikken

## 26-2-2025  
**Code/Design Review - Device Lab**

Reviews gegeven:
* https://github.com/DeBosOs/the-web-is-for-everyone-interactive-functionality/issues/3
* https://github.com/miel775/the-web-is-for-everyone-interactive-functionality/issues/8
* https://github.com/OFRqq/the-web-is-for-everyone-interactive-functionality/issues/10

Reviuws gekregen:
* https://github.com/Saif8599/the-web-is-for-everyone-interactive-functionality/issues/9
* https://github.com/Saif8599/the-web-is-for-everyone-interactive-functionality/issues/8
* https://github.com/Saif8599/the-web-is-for-everyone-interactive-functionality/issues/7

# week 2
## 1-4-2025  
**Workshop Client-Side Fetch met Server-side partials**
### Hierarchy of User Needs

![image](https://github.com/user-attachments/assets/cf345c1b-4088-4dc0-9f3c-8473274984db)

Empty state en Ideal state nodig om te beginnen voordat je daarna kan “enhancen”—met client-side JavaScript. 

dus :

Loading State – Geeft aan dat content of data wordt geladen.

Error State – Laat zien dat er iets mis is gegaan, bijvoorbeeld een foutmelding bij een mislukte API-call.

Success State – Bevestigt dat een actie is voltooid na het opslaan van data.

Loading state [wait times](https://primer.style/product/ui-patterns/loading/#adapting-to-different-wait-times)
![image](https://github.com/user-attachments/assets/f64ecddc-6a5b-47d5-ae0a-4b42cf1d4183)
 
### Ontdekkingen

https://www.quora.com/How-do-I-add-a-WhatsApp-API-to-HTML

Math.max()

Math.min()


## 4-4-2025  
**Retrospect sprint 9**
### Vragenlijst - Lerend vermogen

1. Ik kan uitleggen wat NodeJS is en waarvoor het gebruikt wordt : 3
2. Ik weet wat het doel van package.json is en heb hier aanpassingen in gemaakt : 3  
3. Ik heb met npm packages geïnstalleerd en gebruikt in het bestand server.js : 3
4. Ik kan met commando’s in de terminal een NodeJS project stoppen en starten : 3 
5. Ik weet waarom ik mijn NodeJS project regelmatig moet herstarten en kan dit uitleggen : 3
6. Ik heb een strategie voor debuggen in NodeJS  : 3 [[Code](https://github.com/Saif8599/the-web-is-for-everyone-interactive-functionality/blob/main/server.js#L117)]
7. Ik kan uitleggen wat Express.js doet en waarom het nodig is om met NodeJS een website te bouwen  : 3
8. Ik weet wat routes zijn en kan zelf een nieuwe route aanmaken  : 3 [[Code](https://github.com/Saif8599/the-web-is-for-everyone-interactive-functionality/blob/main/server.js#L100-L125)]
9. Ik weet wat request en response argumenten zijn in een functie voor het laden van data  : 3
10. Ik heb gebruik gemaakt van een request parameter om specifieke data te laden  : 3 [[Code](https://github.com/Saif8599/the-web-is-for-everyone-interactive-functionality/blob/main/server.js#L83)]
11. Ik kan uitleggen wat Liquid doet en waarom het nodig is om met Express.js een website te maken  : 3
12. Ik weet hoe ik data naar Liquid verstuur om dit te gebruiken bij het renderen van een pagina  : 3 [[Code](https://github.com/Saif8599/the-web-is-for-everyone-interactive-functionality/blob/main/server.js#L89-L93)]
13. Ik weet hoe ik Liquid filters toe kan passen en waar ik kan vinden hoe die werken  : 2
14. Ik heb een nieuwe route gemaakt en nieuwe data meegegeven aan een Liquid view  : 3 [[Code](https://github.com/Saif8599/the-web-is-for-everyone-interactive-functionality/blob/main/server.js#L100-L125)]
15. Ik weet waar een foreach loop voor gebruikt wordt en pas het toe in een Liquid view om HTML te renderen  : 3 [[Code](https://github.com/Saif8599/the-web-is-for-everyone-interactive-functionality/blob/main/views/partials/stekjes-collection.liquid#L6-L17)]
16. Ik kan in Liquid een controle maken waarmee een image niet getoond wordt als deze niet in de database is ingevuld  : 2
17. Ik heb een strategie voor debuggen in Liquid  : 3 [[Code](https://github.com/Saif8599/the-web-is-for-everyone-interactive-functionality/commit/6b3addce54bfada3698b5e0fe0b19401493ef173#diff-fa7701e395de08ee810d654ad9809792f182b718b5587e14a0aee3871a9963ebR7-R10)]
18. Ik kan data fetchen uit een REST API  : 3 [[Code](https://github.com/Saif8599/the-web-is-for-everyone-interactive-functionality/blob/main/server.js#L60-L70)]
19. Ik snap het verschil tussen HTTP requests van de methodes GET en POST  : 3
20. Ik kan data uit een REST API filteren of sorteren  : 3 [[Code](https://github.com/Saif8599/the-web-is-for-everyone-interactive-functionality/blob/main/server.js#L60-L61)]
21. Ik snap wat het async keyword doet in JavaScript code  : 3
22. Ik weet wat het doel is van een try/catch block en kan het gebruiken bij het parsen van JSON  : 3 [[Code](https://github.com/Saif8599/the-web-is-for-everyone-interactive-functionality/blob/main/server.js#L173-L178)]
23. Ik begrijp het verschil tussen client-side JavaScript en server-side JavaScript en wanneer ik welke het handigst in kan zetten  : 3
24. Ik kan formulier data die is ge-POST opslaan in een variabele op de server en gebruiken bij het renderen van een pagina  : 3 [[Code](https://github.com/Saif8599/the-web-is-for-everyone-interactive-functionality/blob/main/server.js#L89-L93)]
25. Ik kan formulier data die is ge-POST door middel van een POST of PATCH HTTP request opslaan in de REST API  : 3[[Code](https://github.com/Saif8599/the-web-is-for-everyone-interactive-functionality/blob/main/server.js#L104-L124)]