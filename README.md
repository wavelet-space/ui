# CSS

Cascading Style Sheets Framework

## Goals

(cs) Pro různorodé webové projekty potřebujeme rozumný zakladní výchozý vzhled HTML dokumentů. Cílem je vytvořit základní sadu stylů v podobě malého frameworku, který bude možná použít jako základní výchozí vzhled a který lze dále přizpůsobit konkrétnímu projektu. Ideální je nasazení pro administrační nebo demonstrační stránky (dashboard).

Framework by měl mít tyto vlastnosti:

- Stážení přímo z GitHub nebo CDN.
- Modulárnost tzn., že lze použít jen části frameworku.
- Minifikace pro rychlé načítání při stahování.

Co chceme implementovat:

- Basics
  - Reset
  - Typography: h1 až h6
  - Layout
  - Forms
    - Inputs
      - text
      - date
      - range  
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
