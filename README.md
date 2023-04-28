# CSS

*Minimalistic Cascading Style Sheets framework for semantic HTML.*

 ![GitHub stars](https://img.shields.io/github/stars/wavelet-space/css?style=social)

## Goals

Pro webové projekty potřebujeme často výchozý vzhled dokumentů. 
Ideální je nasazení pro administrační nebo demonstrační stránky (dashboard).

Cílem je vytvořit základní sadu stylů v podobě malého CSS frameworku, který bude možné použít jako rozumný základ a který lze snadno přizpůsobit konkrétnímu projektu.

CSS framework by měl mít tyto vlastnosti:

- Dostupnost: stážení přímo z GitHub pomocí CDN např. <https://www.jsdelivr.com/>.
- Modulárnost tzn., že lze použít jen části frameworku.
- Minifikace pro rychlé načítání při stahování.
- Minmální velikost pod 2kB, použitelný i na emmbeded zařízeních.

Co je třeba implementovat:

- Basics
  - Reset: Nastavení/vypnutí výchozích vlastností prvků stránky.
  - Typography: Nastevní základních typografických konvencí: velikost písma, mřížka atd.
    - Headings
    - Paragraphs
    - Blockquotes
    - Details
    - Definition Lists
  - Layout: Základní layouty stránkek/aplikací.  
  - Forms:
    - Inputs
      - text
      - date
      - range
    - Buttons  
  - Tables
  
- Components
  - Cards
  - Navigations
  
## Structure

- HTML
  - `index.html`
  - layouts (examples)
    - &hellip;  
- CSS
  - `index.css`
  - `reset.css`
  - `baseline-grid.css`
- JS
  - `devel.js`


## Inspirace

- https://news.ycombinator.com/item?id=35708613
- https://dohliam.github.io/dropin-minimal-css/