"use strict";(self.webpackChunkbussiness_frontend=self.webpackChunkbussiness_frontend||[]).push([[758],{6626:function(e,n,t){var s=t(1413),a=t(885),i=t(2791),r=t(184);n.Z=function(e){var n=(0,i.useState)(!1),t=(0,a.Z)(n,2),c=t[0],l=t[1];return(0,i.useEffect)((function(){var e=window.pageYOffset,n=function(){var n=window.pageYOffset;l(!(n<200)&&n<e),e=n};return window.addEventListener("scroll",(function(){n()})),function(){window.removeEventListener("scroll",(function(){n()}))}}),[c]),(0,r.jsxs)("button",(0,s.Z)((0,s.Z)({type:"button",className:"scroll-to-top ".concat(c?"show":""),onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}},e),{},{children:[(0,r.jsx)("i",{className:"arrow-top icofont-long-arrow-up"}),(0,r.jsx)("i",{className:"arrow-bottom icofont-long-arrow-up"})]}))}},1220:function(e,n,t){var s=t(184),a=function(e){var n=e.subTitle,t=e.title,a=e.excerpt,i=e.classOption,r=e.excerptClassOption;return(0,s.jsxs)("div",{className:"title-section ".concat(i),children:[(0,s.jsx)("span",{className:"sub-title",children:n}),(0,s.jsx)("h3",{className:"title",dangerouslySetInnerHTML:{__html:t}}),(0,s.jsx)("p",{className:"".concat(r),dangerouslySetInnerHTML:{__html:a}})]})};a.defaultProps={classOption:"section-title"},n.Z=a},9983:function(e,n,t){t(2791);var s=t(4270),a=t(184);n.Z=function(e){var n=e.title;return(0,a.jsxs)(s.q,{children:[(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("title",{children:n}),(0,a.jsx)("meta",{name:"robots",content:"noindex, follow"}),(0,a.jsx)("meta",{name:"description",content:"Hope \u2013 Health & Medical React JS Template"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"})]})}},7994:function(e,n,t){t.d(n,{Z:function(){return o}});var s=t(2791),a=t(9577),i=t(184),r=function(e){var n,t=e.status,a=e.message,r=e.onValidated;return(0,i.jsxs)(s.Fragment,{children:[(0,i.jsxs)("form",{className:"news-letter-form d-flex",children:[(0,i.jsx)("input",{id:"mc-email",className:"form-control",type:"email",placeholder:"Enter Email here",name:"mail",onChange:function(e){return function(e){console.log(e.target.value)}(e)},ref:function(e){return n=e}}),(0,i.jsx)("button",{className:"search-btn",type:"submit",onClick:function(e){e.preventDefault(),n&&n.value.indexOf("@")>-1&&r({EMAIL:n.value}),document.getElementById("mc-email").value=""},children:"Subscribe"})]}),"sending"===t&&(0,i.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===t&&(0,i.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:a}}),"success"===t&&(0,i.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:a}})]})},c=function(e){return(0,i.jsx)(a.Z,{url:e.mailchimpUrl,render:function(e){var n=e.subscribe,t=e.status,s=e.message;return(0,i.jsx)(r,{status:t,message:s,onValidated:function(e){return n(e)}})}})},l=t(1220),o=function(){return(0,i.jsx)("div",{className:"news-letter-section section-pb",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-7 col-xl-6 mx-auto",children:(0,i.jsx)(l.Z,{classOption:"title-section mb-10 text-center",subTitle:"NEWSLETTER",title:"Subscribe <span class='text-primary'>Newsletter</span> & <br class='d-none d-xl-block' />get latest update..."})}),(0,i.jsx)("div",{className:"col-xl-8 col-lg-10 mx-auto",children:(0,i.jsx)(c,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})})]})})})}},231:function(e,n,t){t.d(n,{Z:function(){return o}});var s=t(2791),a=t(3629),i=t.n(a),r=t(184),c=function(e){var n=e.image,t=(0,s.useRef)(null);return(0,s.useEffect)((function(){var e=new(i())(t.current,{relativeInput:!0});return e.enable(),function(){return e.disable()}}),[]),(0,r.jsx)("div",{className:"banner-content scene banner-img",id:"scene",ref:t,children:(0,r.jsx)("div",{"data-depth":"0.2",children:(0,r.jsx)("img",{src:n,alt:"img"})})})},l=function(e){var n=e.title,t=e.excerpt;return(0,r.jsxs)("div",{className:"banner-content banner-padding",children:[(0,r.jsx)("h3",{className:"title",children:n}),(0,r.jsx)("p",{dangerouslySetInnerHTML:{__html:t}})]})},o=function(e){var n=e.title,t=e.excerpt,s=e.image;return(0,r.jsxs)("div",{className:"banner-section position-relative",children:[(0,r.jsx)("img",{className:"banner-shape",src:"/images/banner/shape1.png",alt:"shape"}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-6",children:(0,r.jsx)(l,{title:n,excerpt:t})}),(0,r.jsx)("div",{className:"col-md-6 mt-7 mt-md-0",children:(0,r.jsx)(c,{image:s})})]})})]})}},9758:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});t(2791);var s=t(6626),a=t(9983),i=t(7994),r=t(231),c=t(184),l=function(e){var n=e.data;return(0,c.jsxs)("div",{className:"team-card",children:[(0,c.jsx)("div",{className:"thumb",children:(0,c.jsx)("img",{src:n.thumb,alt:"img"})}),(0,c.jsxs)("div",{className:"content",children:[(0,c.jsx)("h3",{className:"title",children:n.name}),(0,c.jsx)("span",{children:n.designation})]})]})},o=JSON.parse('[{"id":1,"thumb":"./images/team/1.png","name":"Charles Taylor","designation":"CEO"},{"id":2,"thumb":"./images/team/2.png","name":"Victoria Taylor","designation":"COO"},{"id":3,"thumb":"./images/team/4.png","name":"Abel Cancino","designation":"Business Manager"},{"id":4,"thumb":"./images/team/6.png","name":"Maiazana","designation":"Web3 Engineer"},{"id":5,"thumb":"./images/team/7.png","name":"Thobias","designation":"Senior Marketer"},{"id":6,"thumb":"./images/team/3.png","name":"William Taylor","designation":"Jr  Web3 Engineer"}]'),d=function(){return(0,c.jsx)("div",{className:"service-section section-py",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 mb-n7",children:o&&o.map((function(e,n){return(0,c.jsx)("div",{className:"col col-md-6 col-lg-4 col-xl-3 text-center mb-7",children:(0,c.jsx)(l,{data:e},n)},n)}))})})})},m=function(){return(0,c.jsxs)("div",{children:[(0,c.jsx)(a.Z,{title:"Fudgy Labs - Team"}),(0,c.jsxs)("div",{className:"wrapper",children:[(0,c.jsx)(r.Z,{title:"Our Team",excerpt:"Pleasure rationally encounter consequences <br /> are extremely painful great oppurtunity",image:"./images/team/5.png"}),(0,c.jsx)(d,{}),(0,c.jsx)(i.Z,{}),(0,c.jsx)(s.Z,{})]})]})}}}]);
//# sourceMappingURL=758.45c042c7.chunk.js.map