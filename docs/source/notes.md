# Poznámky

Pro webové projekty potřebujeme často výchozý vzhled dokumentů.
Ideální je nasazení pro administrační nebo demonstrační stránky (dashboard).
Cílem je vytvořit základní sadu stylů v podobě malého CSS frameworku, který bude možné použít jako rozumný základ a který lze snadno přizpůsobit konkrétnímu projektu.

Framework by měl mít tyto vlastnosti:

## CSS/HTML

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

## Python

Vytváření dashboard stránek jen s pomocí Python.
  
## Struktura

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

- Informace a příklady o `box-sizing` https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing

- Pro minifiaci CSS, HTML použít
  - <https://github.com/kangax/html-minifier>
  - <https://github.com/css/csso>
  - <https://github.com/csstree/csstree>

- https://engageinteractive.co.uk/blog/em-vs-rem-vs-px
- https://news.ycombinator.com/item?id=35708613
- https://dohliam.github.io/dropin-minimal-css/

- https://stackoverflow.com/questions/13416866/why-should-i-use-ul-li-in-my-html

- `html.clientHeight`
- `html.scrollHeight`
- `html.offsetHeight`

- https://developer.mozilla.org/en-US/docs/Web/CSS/
- https://developer.mozilla.org/en-US/docs/Web/HTML/

## Style Guide

### Forms

Poznámky k designu formulářů.

- Preferuj vertikální rozmístění prvků.
- Použij *radio* pokud máš na výběr z vícero možností, ale jen jedna je správně.
- Použij *radio* pro výběr vícero položek namísto *select* pokud jich je do pěti a jen jedna je správně.  
- Použij *checkbox* pro výběr vícero položek namísto *select*, pokud jich je do pěti.  