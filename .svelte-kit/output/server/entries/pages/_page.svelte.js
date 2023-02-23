import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { H as Header } from "../../chunks/Header.js";
const Setting_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: `#settings-container.svelte-8v4e4e{display:flex;justify-content:center;align-items:center;flex-direction:column;font-size:1.5rem}input[type="radio"].svelte-8v4e4e{position:relative;cursor:pointer}input[type="radio"].svelte-8v4e4e::before{content:"";width:100%;height:100%;background-color:#333;border-radius:50%;position:absolute;left:0;top:0}input[type="radio"].svelte-8v4e4e::after{content:"";width:calc(100% - 4px);height:calc(100% - 4px);background-color:#fff;border:1px solid #fff;border-radius:50%;position:absolute;transform:translate(-50%, -50%);left:50%;top:50%;z-index:2}input[type="radio"].svelte-8v4e4e:checked::after{background-color:#333}.start-btn.svelte-8v4e4e{border:none;outline:none;width:4rem;height:2rem;border:2px solid black;font-family:'Carter One', cursive;background-color:red;cursor:pointer;margin-top:1rem;font-size:1rem}.start-btn.svelte-8v4e4e:hover{background-color:black;color:white}`,
  map: null
};
const Setting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div id="${"settings-container"}" class="${"svelte-8v4e4e"}"><div class="${"options"}"><label for="${"single-player"}">Single Player</label>
    <input type="${"radio"}" id="${"single-player"}" name="${"play-setting"}" value="${"singlePlayer"}" checked class="${"svelte-8v4e4e"}">
    <label for="${"multi-player"}">Multi Player</label>
    <input type="${"radio"}" id="${"multi-player"}" name="${"play-setting"}" value="${"multiPlayer"}" class="${"svelte-8v4e4e"}"></div>
  <button class="${"start-btn svelte-8v4e4e"}">
    START
  </button>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".landing-container.svelte-1bf167y{width:100%;height:100%;display:flex;justify-content:space-around;align-items:center;flex-direction:column}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"landing-container svelte-1bf167y"}">${validate_component(Header, "Header").$$render($$result, { size: "5rem" }, {}, {})}
  ${validate_component(Setting, "Setting").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
