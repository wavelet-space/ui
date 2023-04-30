# wui

Web User Interface

Cílem tohoto projektu je implementovat základní komponenty webového uživatelského rozhraní pomocí standardu [webcomponents](https://www.webcomponents.org/). Účelem je zapouzdřit různé komponenty tak, aby se dali snadno přepoužívat a měli jednotný vzhled a chování napříč různými aplikacemi.Jednoduše řečeno, ulehčit si práci na projektech, abyvhom nemuseli vždy začínat od nuly pomocí HTML a CSS. Zároveň se snažíme nepoužívat žádný framework jako Reactči Vue, protože&hellip; prostě protože!

## Roadmap

Components

- [ ] Buttons
- [ ] Pane/Panel (Resizable/Movable)
- [ ] Table

- 2023-01-10
 - [ ] Vytvoř layout pro `index.html` pomocí CSS grid.


Inspiration
- https://github.com/pywebio/PyWebIO/
- https://github.com/zauberzeug/nicegui/
-   

## References

- https://www.webcomponents.org/
- https://www.webcomponents.org/specs



## Design systems and components
- https://carbondesignsystem.com/ IBM Design System
- https://web-components.carbondesignsystem.com/ IBM Web Components
- https://github.com/carbon-design-system/carbon-web-components/ IBM Web Components Github
- https://github.com/carbon-design-system/carbon/ IBM Design System Github
- https://sap.github.io/ui5-webcomponents/, https://github.com/SAP/ui5-webcomponents
- https://www.uxpin.com/studio/blog/user-interface-elements-every-designer-should-know/
- https://usefulangle.com/post/27/javascript-advantage-of-using-pointer-events-over-mouse-touch-events
- https://usefulangle.com/post/389/css-radio-button-color

### Development

- https://stackoverflow.com/questions/5107232/is-it-possible-to-programmatically-catch-all-events-on-the-page-in-the-browser
- https://code.visualstudio.com/docs/languages/jsconfig
- Live Server
- https://caniuse.com/decorators
- https://bobbyhadz.com/blog/javascript-get-class-name-of-object

### Tutorials

- https://developer.mozilla.org/en-US/docs/Web/Web_Components
- https://web.dev/building-a-button-component/ How to design button
- https://web.dev/building-a-tooltip-component/ How to design tooltip


# Notes

- Začni s plochou strukturou projektu, žádné adresáře.
- Piš v čistém JS nebo TS?
  - Prozatím používám JavaScript bez knihoven (TypeScript prozatím ne)
- Prozatím řádný Webpack.
- Příklady rovnou do HTML.
- Později nějaký design system.
- Používej jen webcomponents, žádný framework.

Kdy použít input a kdy button. Jak se od sebe liší?
https://stackoverflow.com/questions/469059/button-vs-input-type-button-which-to-use


---


Webcomponens je technologie, která umožňuje jednoduše definovat a používat vlastní komponenty uživatelksého rozhraní ve webovém prohlížeči. Pod komponentou si představme nějaký prvek uživatelského rozhraní s vlastním vzhledem a chováním, který můžeme snadno vkládat do stránky a případně přispůsobovat jeho vzhled i chování danému projektu. Komponenta narozdíl od čistého HTML a CSS umožňuje snadné pepoužívání.

Součástí webcomponents jsou tři hlavní technologie:
1. Custom elements
2. Shadow DOM
3. HTML templates

## Postup vytvoření vlastní webové komponenty

1. Vytvoř pomocí JavaScriptu třídu dědící od třídy `HTMLElement`.
2. Registruj komponentu pomocí JavaScript metody `define` https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry.
3. Přiřaď `shadow-DOM` pokud je třeba.
4. Definuj HTML template, pokud je třeba.
5. Použij registrovaný HTML prvek na stránce.
