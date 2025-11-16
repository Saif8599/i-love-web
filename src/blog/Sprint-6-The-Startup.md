---
title: Sprint 6 - The Startup
sprint: 6
layout: base.njk
---

# Week 1  
## 6-1-2025:
**Briefing van je opdrachtgever**  
### Wat hebben we gedaan?
Vandaag zijn we naar het Funda-kantoor gegaan voor een meeting met de opdrachtgever. Tijdens deze sessie hebben we een briefing ontvangen over de wensen en verwachtingen voor het project.  

Na de meeting hebben we een debriefing opgesteld om de belangrijkste punten uit de briefing duidelijk vast te leggen. Dit helpt ons om een goed begrip te hebben van de opdracht en duidelijke richtlijnen te hebben voor de volgende stappen.  

## 8-1-2025:  
**Workshop Mobile first**  

### Wat hebben we gedaan?  
Tijdens deze workshop hebben we gewerkt aan het principe van "mobile first" design. Dit houdt in dat we bij het ontwerpen van de interface eerst kijken naar de mobiele weergave en pas daarna uitbreiden naar grotere schermformaten.  

We hebben schetsen gemaakt voor het Funda-design, waarbij de focus lag op een gebruiksvriendelijke en overzichtelijke lay-out voor smartphones. Deze schetsen vormen de basis voor verdere uitwerking van het design.  

[Prototype naar HTML](https://github.com/users/Saif8599/projects/3?pane=issue&itemId=92995348&issue=Saif8599%7Cthe-startup-responsive-interactive-website%7C11)

## 10-1-2025:  
**Code/Design-review: Mobile First ** 

### Wat heb ik gedaan?  
Ik heb een code/design-review uitgevoerd met de focus op het "mobile first" ontwerp. Hierbij heb ik waardevolle feedback ontvangen op de structuur en implementatie van mijn mobiele lay-out.  

### Ontvangen Reviews  
- [Review 1: Gebruik van responsieve elementen](https://github.com/Saif8599/the-startup-responsive-interactive-website/issues/11#issuecomment-2582095473)  
- [Review 2: Consistentie en visueel ontwerp](https://github.com/Saif8599/the-startup-responsive-interactive-website/issues/11#issuecomment-2582145861)  
- [Review 3: Optimalisaties voor prestaties](https://github.com/Saif8599/the-startup-responsive-interactive-website/issues/11#issuecomment-2585212033)  

### Belangrijke Lessen  
Deze reviews benadrukken verbeterpunten rondom responsiviteit, consistentie en prestatieoptimalisaties, die ik zal verwerken in het verdere design- en ontwikkelproces.  

# Week 2  
## 13-1-2025:
**Workshop Interaction Design**

### Wat heb ik gedaan?  
Tijdens deze workshop heb ik me gericht op het herkennen van 7 verschillende micro-interacties in user interfaces. Dit zijn kleine, subtiele veranderingen of animaties die bijdragen aan een vloeiende en gebruiksvriendelijke ervaring.  

### Micro-interacties  
Ik heb de volgende micro-interacties herkend en besproken:  
1. **Bevestiging van acties:** Feedback na het klikken op een knop  
2. **Laadindicaties:** Bijvoorbeeld een spinner tijdens het laden van content  
3. **Statusupdates:** Real-time updates van content  
4. **Visuele signalen:** Highlighting bij hover of focus  
5. **Overgangen:** Vloeiende animaties tussen pagina’s of secties  
6. **Content hints:** Tooltips of subtiele aanwijzingen  

### Bron  
De workshop was gebaseerd op inzichten uit *7 Secrets for Enhancing UX with Micro-Interactions*.  

[7 Secrets for enhancing UX with micro interactions](https://webdesignerdepot.com/7-secrets-for-enhancing-ux-with-micro-interactions/)

![Workshop Interaction Design](https://github.com/user-attachments/assets/969c3ca3-2013-4b0d-b9ce-9f492da7ea84)  

## 15-1-2025
**Workshop Programming User Interaction**

"Usually, most of the interface animations lie between 200–600ms. Interactions like hover and feedbacks are around 300ms and elaborated motions like transitions are around 500ms.""

### Disney's 12 Animatieprincipes

1. **Squash and Stretch** – Flexibiliteit en gewicht aan objecten.  
2. **Anticipation** – Voorbereiden op een actie.  
3. **Staging** – Aandacht richten op het belangrijkste element.  
4. **Straight Ahead & Pose to Pose** – Twee technieken voor animatiebewegingen.  
5. **Follow Through & Overlapping Action** – Onderdelen bewegen op verschillende momenten.  
6. **Slow In & Slow Out** – Langzame start en stop van bewegingen.  
7. **Arc** – Natuurlijke bewegingen volgen een gebogen pad.  
8. **Secondary Action** – Extra animaties ter ondersteuning.  
9. **Timing** – Snelheid van beweging voor realisme.  
10. **Exaggeration** – Overdrijving voor duidelijkheid.  
11. **Solid Drawing** – Realistische vormen en volumes.  
12. **Appeal** – Visueel aantrekkelijk en duidelijk design.

### Bron
- https://m2.material.io/design/motion/speed.html#duration
- https://medium.com/@ruthiran_b/disneys-motion-principles-in-designing-interface-animations-9ac7707a2b43

## 16-1-2025:
**Practicum Programming User Interaction**
### Ontdekkingen  

**HTML Image Maps**

Een image map wordt gemaakt met het `<map>`-element en het gebruik van `<area>`-tags. Elk klikbaar gebied binnen de afbeelding wordt gespecificeerd door coördinaten in de vorm van rechthoeken, cirkels of polygonen.

![image](https://github.com/user-attachments/assets/f03900ff-0a3e-4e34-86ed-dab09b4082ac)
![image](https://github.com/user-attachments/assets/7c210b2e-37b7-4e67-ba1d-4fd88c0c836d)


**Codevoorbeeld**

```html
<img src="workplace.jpg" alt="Workplace" usemap="#workmap">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm">
</map>
```


### Feedback voor de volgende keer

- **Comments in commits:** Plaats uitleg en documentatie in de commit messages of descriptions in plaats van issue zelf.  
- **Kleine commits:** Maak meerdere kleine commits, bijvoorbeeld één per item in de checklist, zodat elke commit een duidelijke focus heeft.  
- **Aria-label:** Gebruik `aria-label` alleen als laatste redmiddel. Vaak zijn er betere alternatieven in HTML, zoals `<h1>`, `<alt>` en andere semantische elementen. ARIA wordt vooral aangeraden in uitzonderingsgevallen wanneer HTML zelf niet volstaat.

[Feedback issue #11](https://github.com/Saif8599/the-startup-responsive-interactive-website/issues/11#issuecomment-2593966809)

## 17-1-2025:
**Code/Design-review User Testing**

### Wat heb ik gedaan?  
Vandaag heb ik user testing uitgevoerd om de interactie van mijn ontwerp te evalueren. Tijdens de test heb ik gebruikers gevraagd om door de interface te navigeren en specifieke taken uit te voeren.  


### Gegeven review

- https://github.com/Brancovanbeek/funda/issues/9
- https://github.com/Ravirkt/the-startup-responsive-interactive-website/issues/13
- https://github.com/Matthijs217/the-startup-responsive-interactive-website/issues/11
- https://github.com/Ties7/the-startup-responsive-interactive-website/issues/35

### Gekregen review

- https://github.com/Saif8599/the-startup-responsive-interactive-website/issues/23
- https://github.com/Saif8599/the-startup-responsive-interactive-website/issues/21
- https://github.com/Saif8599/the-startup-responsive-interactive-website/issues/22
 
### Dave Bitter

Dave introduceerde de app "Presi Parrot", die gebruik maakt van spraakherkenningstechnologie voor transcripties. Hij vertelde over de geschiedenis van spraakherkenning en hoe de technologie zich heeft ontwikkeld, van de jaren vijftig tot de opkomst van slimme systemen zoals Siri en Google Assistant. Wat ik leerde, is hoe webtechnieken steeds verder evolueren en hoe projecten zoals Project Fugu van Google nieuwe mogelijkheden bieden voor webontwikkelaars. Zijn uitleg over de praktische toepassing van spraakherkenning en de noodzaak om prestaties te optimaliseren voor een goede gebruikerservaring was erg waardevol.

# Week 3  
## 20-1-2025:
**Workshop over refactoring en code standaarden**
### Refactoring en Code Conventions

HTML
![image](https://github.com/user-attachments/assets/6a22c91e-9ea5-4e00-a5c9-e029bab82dce)
![image](https://github.com/user-attachments/assets/be7414ad-1bcb-46a8-8f3f-f75d2e587f95)

CSS
![image](https://github.com/user-attachments/assets/55b6a579-aceb-457b-9988-57936e428f71)

Commit: https://github.com/Saif8599/the-startup-responsive-interactive-website/commit/bca7f35560e1b10c2b9a555032128fc38ef17aed

## 20-1-2025:  
**README UPDATE**  

README updaten met Code Conventions
- https://github.com/Saif8599/the-startup-responsive-interactive-website/blob/main/README.md

## 21-1-2025:  
**Feedback opdrachtgever** 
- https://github.com/Saif8599/the-startup-responsive-interactive-website/issues/26

## 22-1-2025:  
**Workshop wrapping up**  

Funda expo poster maken.
![image](https://github.com/user-attachments/assets/98ca0cc9-acd5-4118-bb85-ab2db274da30)

## 23-1-2025:  
*Sprint review: Oplevering bij de opdrachtgever*

### Wat heb ik gedaan?  
Vandaag ben ik naar het kantoor van de opdrachtgever gegaan voor de oplevering van het project. Tijdens deze sessie heb ik de resultaten gepresenteerd en besproken met de opdrachtgever.  

### Belangrijkste punten van de oplevering  
- **Presentatie van het werk:** Ik heb de gemaakte functionaliteiten en het design gepresenteerd, met de nadruk op de belangrijkste verbeteringen en toevoegingen.  
- **Feedback:** De opdrachtgever gaf positieve feedback, maar had enkele suggesties voor kleine aanpassingen en verbeteringen.  

[Code review Lars](https://github.com/Saif8599/the-startup-responsive-interactive-website/issues/26)

## 24-1-2025:  
*Retrospect sprint 6*