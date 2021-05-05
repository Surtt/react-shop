(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),i=c(7),r=c.n(i),s=(c(13),c(0)),o=function(){return Object(s.jsx)("nav",{className:"deep-orange",children:Object(s.jsxs)("div",{className:"nav-wrapper",children:[Object(s.jsx)("a",{href:"!#",className:"brand-logo",children:"React Shop"}),Object(s.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"!#",children:"Repo"})})})]})})},l=c(8),j=c(1),d=c(3),u=function(){return Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"indeterminate"})})},b=function(e){var t=e.id,c=e.name,n=e.description,a=e.price,i=e.full_background,r=e.addToBasket;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("img",{src:i,alt:c})}),Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("span",{className:"card-title",children:c}),Object(s.jsx)("p",{children:n})]}),Object(s.jsxs)("div",{className:"card-action",children:[Object(s.jsx)("button",{className:"btn deep-orange darken-2",onClick:function(){return r({id:t,name:c,price:a})},children:"Buy"}),Object(s.jsxs)("span",{className:"right",style:{fontSize:"1.8rem"},children:[a," eur"]})]})]})},h=function(e){var t=e.goods,c=void 0===t?[]:t,n=e.addToBasket;return c.length?Object(s.jsx)("div",{className:"goods",children:c.map((function(e){return Object(s.jsx)(b,Object(j.a)(Object(j.a)({},e),{},{addToBasket:n}),e.id)}))}):Object(s.jsx)("h3",{children:"Nothing here"})},m=function(e){var t=e.quantity,c=void 0===t?0:t,n=e.handleBasketShow;return Object(s.jsxs)("div",{className:"cart blue darken-4 white-text",onClick:n,children:[Object(s.jsx)("i",{className:"material-icons",children:"shopping_cart"}),c?Object(s.jsx)("span",{className:"cart-quantity",children:c}):null]})},O=function(e){var t=e.id,c=e.name,n=e.price,a=e.quantity,i=e.removeFromBasket,r=e.incQuantity,o=e.decQuantity;return Object(s.jsxs)("li",{className:"collection-item",children:[c,Object(s.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return o(t)},children:"remove"})," ","x",a," ",Object(s.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return r(t)},children:"add"})," = ",n*a," eur",Object(s.jsx)("span",{className:"secondary-content",onClick:function(){return i(t)},children:Object(s.jsx)("i",{className:"material-icons basket-delete",children:"close"})})]})},x=function(e){var t=e.order,c=e.handleBasketShow,n=e.removeFromBasket,a=e.incQuantity,i=e.decQuantity,r=t.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(s.jsxs)("ul",{className:"collection basket-list",children:[Object(s.jsx)("li",{className:"collection-item active deep-orange darken-2",children:"Cart"}),t.length?t.map((function(e){return Object(s.jsx)(O,Object(j.a)(Object(j.a)({},e),{},{removeFromBasket:n,incQuantity:a,decQuantity:i}),e.id)})):Object(s.jsx)("li",{className:"collection-item",children:"The shopping cart is empty"}),Object(s.jsxs)("li",{className:"collection-item active deep-orange darken-2",children:["Total amount: ",r," eur"]}),Object(s.jsx)("li",{className:"collection-item",children:Object(s.jsx)("button",{className:"deep-orange darken-2 btn-small",children:"Pay for the order"})}),Object(s.jsx)("i",{className:"material-icons basket-close",onClick:c,children:"close"})]})},f=function(e){var t=e.name,c=e.closeAlert;return Object(n.useEffect)((function(){var e=setTimeout(c,3e3);return function(){clearTimeout(e)}}),[t]),Object(s.jsx)("div",{id:"toast-container",children:Object(s.jsxs)("div",{className:"toast",children:[t," added to cart"]})})},p=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!0),r=Object(d.a)(i,2),o=r[0],b=r[1],O=Object(n.useState)([]),p=Object(d.a)(O,2),v=p[0],N=p[1],g=Object(n.useState)(!1),k=Object(d.a)(g,2),y=k[0],q=k[1],B=Object(n.useState)(""),S=Object(d.a)(B,2),w=S[0],T=S[1],C=function(){q(!y)};return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=en",{headers:{Authorization:"6bb09fab-b8d90e5d-91bb5e9e-887281c9"}}).then((function(e){return e.json()})).then((function(e){e.featured&&a(e.featured),b(!1)}))}),[]),Object(s.jsxs)("main",{className:"container content",children:[Object(s.jsx)(m,{quantity:v.length,handleBasketShow:C}),o?Object(s.jsx)(u,{}):Object(s.jsx)(h,{goods:c,addToBasket:function(e){var t=v.findIndex((function(t){return t.id===e.id}));if(t<0){var c=Object(j.a)(Object(j.a)({},e),{},{quantity:1});N([].concat(Object(l.a)(v),[c]))}else{var n=v.map((function(e,c){return c===t?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e}));N(n)}T(e.name)}}),y&&Object(s.jsx)(x,{order:v,handleBasketShow:C,removeFromBasket:function(e){var t=v.filter((function(t){return t.id!==e}));N(t)},incQuantity:function(e){var t=v.map((function(t){if(t.id===e){var c=t.quantity+1;return Object(j.a)(Object(j.a)({},t),{},{quantity:c})}return t}));N(t)},decQuantity:function(e){var t=v.map((function(t){if(t.id===e){var c=t.quantity-1;return Object(j.a)(Object(j.a)({},t),{},{quantity:c>=0?c:0})}return t}));N(t)}}),w&&Object(s.jsx)(f,{name:w,closeAlert:function(){T("")}})]})},v=function(){return Object(s.jsx)("footer",{className:"page-footer deep-orange lighten-2",children:Object(s.jsx)("div",{className:"footer-copyright",children:Object(s.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(s.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})},N=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{}),Object(s.jsx)(p,{}),Object(s.jsx)(v,{})]})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.44a112d1.chunk.js.map