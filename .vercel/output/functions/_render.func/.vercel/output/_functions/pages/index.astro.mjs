import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderHead, e as renderSlot, f as createAstro, g as renderComponent } from '../chunks/astro/server__VYezxdV.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
export { renderers } from '../renderers.mjs';

const $$LoadingScreen = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="screen" data-astro-cid-g2nbzz2z> <div data-astro-cid-g2nbzz2z> <div class="loader" data-astro-cid-g2nbzz2z></div> </div> </div>  `;
}, "F:/01-cosas/01-proyectos-web/GitHub/island-flowers/island-flowers/src/components/LoadingScreen.astro", void 0);

const $isModalOpen = atom(false);

const Modal = () => {
  const isModalOpen = useStore($isModalOpen);
  console.log(isModalOpen);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        position: "absolute",
        top: 39,
        left: 39,
        // Para centrar horizontal y verticalmente
        width: 1016,
        height: 568,
        background: "#00000065",
        // Fondo blanco
        opacity: `${isModalOpen ? 1 : 0}`,
        pointerEvents: "none",
        transition: "opacity 0.3s ease-in-out"
      },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            // Para centrar horizontal y verticalmente
            width: 600,
            height: 340,
            borderRadius: "15px",
            // Bordes redondeados
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            // Sombra para dar un efecto de elevación
            padding: "28px",
            // Espaciado interno
            overflow: "hidden",
            background: "white"
          },
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 600,
                  height: 340,
                  backgroundImage: "url('/sunflowers.jpg')",
                  backgroundSize: "cover",
                  opacity: 0.4,
                  zIndex: -1
                }
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                style: {
                  fontFamily: '"Sofadi One", system-ui',
                  fontSize: 32,
                  textAlign: "center",
                  color: "#2c0d0d",
                  marginTop: 20
                },
                children: "Siento que cada conversación contigo es como deshojar una margarita, cada pétalo revela una capa nueva de ti que me vuelve más adicto. ¿Qué pasará si termino de deshojar los pétalos? 🤔 ¡Pues descubrámoslo juntos!"
              }
            )
          ]
        }
      )
    }
  ) });
};

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Sofadi+One&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "F:/01-cosas/01-proyectos-web/GitHub/island-flowers/island-flowers/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="canvas-container" data-astro-cid-j7pv25f6> <canvas data-astro-cid-j7pv25f6></canvas> ${renderComponent($$result2, "LoadingScreen", $$LoadingScreen, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Modal", Modal, { "client:load": true, "client:component-hydration": "load", "client:component-path": "F:/01-cosas/01-proyectos-web/GitHub/island-flowers/island-flowers/src/components/Modal", "client:component-export": "Modal", "data-astro-cid-j7pv25f6": true })} </div> ` })}  `;
}, "F:/01-cosas/01-proyectos-web/GitHub/island-flowers/island-flowers/src/pages/index.astro", void 0);

const $$file = "F:/01-cosas/01-proyectos-web/GitHub/island-flowers/island-flowers/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
