import { c as create_ssr_component, e as escape } from "./index.js";
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: ".header.svelte-11x56l9{font-size:var(--size);display:flex;justify-self:flex-start;align-items:flex-start;margin-bottom:0.5rem;margin-top:1rem;text-align:center}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "5rem" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css);
  return `<h1 class="${"header svelte-11x56l9"}" style="${"--size: " + escape(size, true)}">Super Hero Battle</h1>`;
});
export {
  Header as H
};
