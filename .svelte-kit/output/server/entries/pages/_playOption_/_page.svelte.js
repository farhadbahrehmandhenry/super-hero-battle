import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
import { H as Header } from "../../../chunks/Header.js";
const PlayerCart_svelte_svelte_type_style_lang = "";
const Playground_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".play-container.svelte-1s01ejx{width:100%;height:100%;min-height:30rem;display:flex;justify-content:space-around;align-items:center;flex-direction:column}.back-btn.svelte-1s01ejx{border:none;outline:none;padding-left:0.5rem;padding-right:0.5rem;border:2px solid black;font-family:'Carter One', cursive;background-color:red;cursor:pointer;margin-bottom:1rem;font-size:1rem;position:fixed;top:1rem;left:1rem}.back-btn.svelte-1s01ejx:hover{background-color:black;color:white}a.svelte-1s01ejx{text-decoration:none;color:black}a.svelte-1s01ejx:hover{color:white}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const { playOption } = $page.params;
  let characters;
  console.log(characters);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"play-container svelte-1s01ejx"}"><button class="${"back-btn svelte-1s01ejx"}"><a href="${"/"}" class="${"svelte-1s01ejx"}">Back</a></button>
  ${validate_component(Header, "Header").$$render($$result, { size: "3rem" }, {}, {})}
  ${playOption === "multiPlayer" ? `<h3>Development in progress</h3>` : `${`<h3>Loading...</h3>`}`}
  
</div>`;
});
export {
  Page as default
};
