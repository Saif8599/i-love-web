---
title: Sprint 10 - User Experience
sprint: 10
layout: base.njk
---

# week 1
## 13-4-2025  
**Sprintplanning + Workshop Performance**

Repo klaarzetten, Project board koppelen, Issues verplaatsen met description & Label het issue met de MoSCoW methode.




The MoSCoW method is a prioritization technique. It is used in [software development](https://en.wikipedia.org/wiki/Software_development),

# week 2
## 22-4-2025  
**Workshop Perceived Performance**
azy loading, loading states en hoe je er voor kan zorgen dat gebruikers een website als snel ervaren, Visual delay time

https://stephaniewalter.design/

# week 2
## 22-4-2025  
**Workshop Perceived Performance**
 
image formats WebP voor betere compressie van afbeeldingen, AVIF beter en mooier maar minder ondersteund. ook animaties. Progressive enchantment laag 2.

```HTML
 <picture>
    //Eerste
    <source type="image/avif" srcset="plaatje.avif">
    //Tweede
    <source type="image/webp" srcset="plaatje.webp">
    // Als laatste als beide niet gesupporterd word
    <img src="plaatje.png" alt="Plaatje" width="400" height="300" decoding="async">
  </picture>
```

srcset, picture in html en image-set in CSS (voor backgrounds)

- [responsive images](https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/#assets-optimizations) 

**Picture**
Picture is een element waar we verschillende <source> elementen aan kunnen meegeven en een default, zodat we de browser op weg helpen met de juiste afbeelding te kiezen. Picture wordt ook veel voor art direction gebruikt. Denk aan een portrait foto die goed werkt op mobiel maar een andere ratio moet krijgen op desktop.

[MDN documentatie picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture)

**Srcset**
We kunnen het srcset attribuut gebruiken in <img> en in <source> elementen. Hiermee kunnen we de browser vertellen dat we verschillende afbeeldingsformaten hebben zodat het zelfde de juiste keuze kan maken. In combinatie met het sizes attribuut kun je de browser ook op weg helpen met verschillende media queries, dit wordt wel [snel ingewikkeld](https://cloudfour.com/thinks/responsive-images-the-simple-way/).

[MDN documentatie srcset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset)

**Image-set**
We kunnen in CSS backgrounds ook responsive images gebruiken dmv image-set. Hier kun je een ook weer een lijstje aan formats meegeven zodat de browser zelf kan kiezen welke het serveert.

[MDN documentatie image-set](https://developer.mozilla.org/en-US/docs/Web/CSS/image/image-set)

### Responsive images test

Zonder format:

![image](https://github.com/user-attachments/assets/531646c5-95e9-43ea-98be-d80870d0ff20)


Met format: 

![image](https://github.com/user-attachments/assets/1312bcd2-5b75-4bbc-a9e6-ab859702bb0c)

### Delivery Optimizations
 
* loading="lazy" Bepaalt wanneer de afbeelding wordt opgehaald van de server.

"Lazy": Laadt de afbeelding pas wanneer hij bijna in beeld is (tijdens scrollen).
Zonder "lazy": Laadt de afbeelding meteen (ook als hij ver onderaan de pagina staat).

* decoding="async" Bepaalt wanneer de afbeelding wordt gedecodeerd (na het ophalen).

"Async": Decodeert de afbeelding op de achtergrond, zonder de weergave van de pagina te blokkeren.
Zonder "async": De browser kan even pauzeren met renderen tot de afbeelding klaar is ("sync").

## 25-4-2025
### We Love Web Niels Leenheer

HTML is fouttolerant: browsers repareren slechte code (bv. <a<a<a> → <a>).

**Tim Berners-Lee**
* Web bedacht voor simpele info-uitwisseling.
* Eerste browser = editor (bekijken + maken websites).

`<noscript>`
* Werkt alleen als JS uitstaat.
* Onbekende tags/attributen worden genegeerd.

**Oude Tags**
* <blink> (vervangen door CSS), <marquee> (niet meer gebruiken).

**Browser Parsing**
* Tokeniser: Herkent tags/attributen (bv. <a href="#">).

`Web is flexibel door backward compatibility.`

# week 3
## Meivakantie

# week 4
## 9-5-2025  
**Retrospect sprint 10**

### Vragenlijst Blok 4, voor Lerend Vermogen

**Ik begrijp het verschil tussen client-side JavaScript en server-side JavaScript en wanneer ik welke het handigst in kan zetten**
* Ja ik begrijp de verschillen. Ik gebruik client-side voor dynamische pagina aanpassingen en server-side voor dataverwerking.

**Ik heb een strategie voor server-side JavaScript debuggen, voor client-side JavaScript debuggen, en voor Liquid code debuggen**
1. Server-side : console.log().
2. Client-side : Chrome DevTools (breakpoints en network tab).
3. Liquid : {{ json }} voor data inspectie.

**Ik kan GET en POST routes aanmaken en request parameters gebruiken**
* Ja zie [server.js L104-L153](https://github.com/Saif8599/user-experience-enhanced-website/blob/main/server.js#L104-L153)

**Ik kan server-side JSON data fetchen uit een REST API**
* Ja zie [server.js L47-L62](https://github.com/Saif8599/user-experience-enhanced-website/blob/main/server.js#L47-L62) 

**Ik kan data uit een REST API filteren of sorteren**
* Ja zie [server.js L50-L52](https://github.com/Saif8599/user-experience-enhanced-website/blob/main/server.js#L50-L52) 

**Ik snap wat het async keyword doet in JavaScript code**
* Ja een async functie word uitgevoerd terwijl mijn code doorloopt. Maar bij een await functie pauzeert het hier tot het klaar is.

**Ik weet wat het doel is van een try/catch block en kan het gebruiken bij het parsen van JSON**
* Ja try/catch block zijn er om errors af te vangen bij JSON parsing.

**Ik kan met een client-side fetch een werkend formulier verrijken**
* Ja ik voeg een eventListener toe aan een formulier en gebruik preventDefault() om te zorgen dat het pagina niet opnieuw reload.

**Ik kan multi-page en single-page view transitions inzetten en aanpassen**
* Nee ik heb nog geen single-page transition maar maak wel gebruik van multi-page transition. Zie [stylesheet L164-L166](https://github.com/Saif8599/user-experience-enhanced-website/blob/main/public/styles/stylesheet.css#L164-L166)

**Ik kan verschillende manieren van responsive images uitleggen en toepassen**
* Ja Ik gebruik `<picture>` met srcset + sizes voor resolutieswitches.
Zie voorbeeld [stekje-item.liquid L4-L27](https://github.com/Saif8599/user-experience-enhanced-website/blob/main/views/partials/stekje-item.liquid#L4-L27)
 
**Ik weet hoe ik de resultaten van een performance audit moet interpreteren en hoe ik performance problemen kan oplossen**
* Ja ik gebruik de Lighthouse performance test via chrome devtools en kijk naar loading performance, interactivity en de visual stability van de pagina. Dit kan opgelost worden met lazy loading.

**Ik weet hoe ik met client-side JS de UX kan verbeteren, rekening houdend met progressive enhancement**
* Ja eerst bouw ik een een werkende HTML/CSS basis en daarna voeg ik JS toe voor verbeteringen.

**Ik weet hoe ik binnen HTML, CSS en client-side JS nieuwe technieken toe kan passen, rekening houdend met oudere browsers**
* Ja je kan @supports gebruiken in CSS als het browser ondersteunt word. 

**Ik weet wat objecten, arrays, strings, loops, variabelen, functies en parameters zijn, en kan die in JavaScript inzetten**
* Ja zie voorbeeld [likedStekjes.liquid L10C9-L57](https://github.com/Saif8599/user-experience-enhanced-website/blob/main/views/likedStekjes.liquid#L10C9-L57) hoe ik gebruik maan van een loop om stekjes te tonen als likedStekjes bestaat. 

**Ik weet wat geavanceerdere concepten in JavaScript zijn, zoals closures, promises, callbacks, scope en de event loop**
* Nee ik weet ze nog niet allemaal.
 
**Ik kan via GitHub met feature branches werken, pull requests aanmaken, reviewen en mergen**
* Ja ik kan dit al maar heb het nog niet toegepast.

**Ik weet hoe ik formulieren pro-actief kan valideren met client-side code**
* Ja doormiddel van een HTML input attribute `required`

**Ik weet de eerste regel van ARIA, en wat dat betekent voor hoe ik HTML schrijf**
* Eerst niet maar nu wel `Rule #1: Don't use ARIA, use native HTML instead`

**Ik weet wat layout shifts zijn, door wat ze veroorzaakt worden, hoe ik ze kan meten en hoe ik ze kan oplossen**
* Ja dat komt meestal door images zonder width of height. Je meet het met lighthouse.

**Ik weet wat de Core Web Vitals zijn, hoe ik die kan meten, en hoe ik de cijfers moet interpreteren**
* Ja LCP (large contentful paint), INP (interaction to next paint), CLS (cumulative layout shift).

**Ik weet hoe perceived performance invloed heeft op de beleving van een gebruiker, en ik heb de ontwerp- en code vaardigheden om die toe te passen**
* Ja met skeletons of lazy loading kan je dit toepassen. Dit zorgt voor een betere UX.

**Ik kan UI states in meerdere lagen van progressive enhancement inzetten om de UX te verbeteren**
* Ja zie hier een voorbeeld van een loading en success state [stekje-card.liquid](https://github.com/Saif8599/user-experience-enhanced-website/blob/main/views/partials/stekje-card.liquid)

**Ik kan een UI leuker en prettiger maken, zonder de core functionaliteit uit het oog te verliezen**
* Ja door gebruik te maken van micro-interacties zoals hover en transities.
 
**Ik kan scroll-driven animations inzetten om de UI beter te maken**
* Nee ik heb dat geprobeerd maar het is me niet gelukt

**Ik weet hoe ik verschillende vormen van feature detection in kan zetten in HTML, in CSS en in client-side JS**
* Nee ik weet alleen In CSS met @supports
