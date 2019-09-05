import Vue from "vue";
import wrap from '@vue/web-component-wrapper';
import VueWebComponent from './components/VueWebComponent';



const CustomElement = wrap(Vue, VueWebComponent);
// The API for registering a web component is customElements.define()
// "custom element" = "web component" 
window.customElements.define('my-custom-element', CustomElement);





Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");

// Object.keys(Components).forEach(name => {
//   Vue.component(name, Components[name]);
// });
// const CustomElement = wrap(Vue, SafaGridView);
// // The API for registering a web component is customElements.define()
// // "custom element" = "web component" 
// window.customElements.define('SafaGridView', CustomElement);



// these  below line maybe need for load up comps.

// 
//      < script src = "https://unpkg.com/vue" > < /script> <
//       !--Load the web component polyfill-- >
//       <
//       script src = "https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-loader.js" > < /script> <
//       !--Load your custom element-- >
//       <
//       script src = "./my-custom-element.js" > < /script> 
//