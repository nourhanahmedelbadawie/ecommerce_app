(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{120:function(e,t,a){e.exports=a(169)},125:function(e,t,a){},144:function(e,t,a){},166:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(16),r=a.n(l),m=(a(125),a(23)),s=a(14),o=a(47),i=function(e,t){switch(t.type){case"addProduct":return e.productItems.find((function(e){return e.id===t.payload.id}))||e.productItems.push(Object(s.a)(Object(s.a)({},t.payload),{},{quantity:1})),Object(s.a)(Object(s.a)({},e),{},{productItems:Object(o.a)(e.productItems)});case"removeProduct":return Object(s.a)(Object(s.a)({},e),{},{productItems:Object(o.a)(e.productItems.filter((function(e){return e.id!==t.payload.id})))});case"increaseProduct":return Object(s.a)(Object(s.a)({},e),{},{productItems:Object(o.a)(e.productItems.map((function(e){return e.id===t.payload.id&&e.quantity++,e})))});case"decreaseProduct":return e.productItems[e.productItems.findIndex((function(e){return e.id===t.payload.id}))].quantity>0?Object(s.a)(Object(s.a)({},e),{},{productItems:Object(o.a)(e.productItems.map((function(e){return e.id===t.payload.id&&e.quantity--,e})))}):{productItems:Object(o.a)(e.productItems)};case"submitProduct":return Object(s.a)(Object(s.a)({},e),{},{productItems:[]});case"decreaseProduct":default:return e}},u={productItems:[]},d=Object(n.createContext)(),p=function(e){var t=e.children,a=Object(n.useReducer)(i,u),l=Object(m.a)(a,2),r=l[0],o=l[1],p=Object(s.a)({removeProduct:function(e){o({type:"removeProduct",payload:e})},addProduct:function(e){o({type:"addProduct",payload:e})},increaseProduct:function(e){o({type:"increaseProduct",payload:e})},decreaseProduct:function(e){o({type:"decreaseProduct",payload:e})},submitProduct:function(e){o({type:"submitProduct",payload:e})}},r);return c.a.createElement(d.Provider,{value:p},t)},E=a(173),b=a(174),f=a(104),g=a(181),h=a(11),y=[{id:0,img:"https://www.vegetables.co.nz/assets/vegetables/_resampled/FillWyI0MDAiLCIzMDAiXQ/courgettes.png",name:"Cucumber",price:11,cat:"category 1",quantity:0},{id:1,img:"https://www.vegetables.co.nz/assets/vegetables/_resampled/FillWyI0MDAiLCIzMDAiXQ/capsicums.png",name:"Capsicums",price:13,cat:"category 2",quantity:0},{id:2,img:"https://www.vegetables.co.nz/assets/vegetables/_resampled/FillWyI0MDAiLCIzMDAiXQ/broccoli.png",name:"Broccoli",price:33,cat:"category 3",quantity:0},{id:3,img:"https://www.vegetables.co.nz/assets/vegetables/_resampled/FillWyI0MDAiLCIzMDAiXQ/garlic.png",name:"Garlic",price:8,cat:"category 4",quantity:0},{id:4,img:"https://www.vegetables.co.nz/assets/vegetables/_resampled/FillWyI0MDAiLCIzMDAiXQ/pumpkins.png",name:"Pumpkins",price:11,cat:"category 5",quantity:0},{id:5,img:"https://www.vegetables.co.nz/assets/vegetables/_resampled/FillWyI0MDAiLCIzMDAiXQ/tomatoes.png",name:"Tomatoes",price:10,cat:"category 6",quantity:0}],v=a(41),N=a(103),j=a(34),O=a(36);a(97);var x=function(){var e=Object(v.useToasts)().addToast,t=function(t){e(t,{appearance:"success",autoDismiss:!0})},a=Object(n.useContext)(d),l=a.addProduct,r=a.productItems,m=a.increaseProduct,s=function(e){return!!r.find((function(t){return t.id===e.id}))},o=Object(h.g)(),i=Object(n.useRef)(null),u=function(e){console.log(i),1===e?(i.current.style.gridTemplateColumns="1fr 1fr 1fr",document.querySelectorAll(".card").forEach((function(e){return e.classList.remove("listItem")})),document.querySelectorAll(".card").forEach((function(e){return e.classList.add("gridItem")}))):(i.current.style.gridTemplateColumns="1fr",document.querySelectorAll(".card").forEach((function(e){return e.classList.remove("gridItem")})),document.querySelectorAll(".card").forEach((function(e){return e.classList.add("listItem")})))};return c.a.createElement("div",null,c.a.createElement("header",null,c.a.createElement(E.a,{className:"mb-4"},c.a.createElement(b.a,null,c.a.createElement(f.a,null,c.a.createElement("section",{id:"head"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("img",{className:"head-img",src:"https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Vegetables-PNG/Organic_Vegetables_PNG_Picture.png?m=1507172105",alt:""})),c.a.createElement("div",{className:"col-md-5 offset-1 head-text "},c.a.createElement("h6",null,"BEST QUALITY PRODUCTS"),c.a.createElement("h1",null,"Join the Organic Movement!"),c.a.createElement("p",{className:"mb-4"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien."),c.a.createElement(N.Link,{className:"my-btn btn",to:"products",spy:!0,smooth:!0,offset:50,duration:500,delay:50}," ",c.a.createElement("i",{className:"fas fa-cart-arrow-down"})," Shop Now"))))))))),c.a.createElement("section",{className:"products mt-4",id:"products"},c.a.createElement(E.a,null,c.a.createElement(b.a,null,c.a.createElement(f.a,{xs:"12"},c.a.createElement("td",{width:"120"},c.a.createElement("h5",{className:"mb-2"},"Switch View"),c.a.createElement("div",{className:"toggle"},c.a.createElement("input",{type:"radio",value:"on",name:"radio",onChange:function(){return u(1)}}),c.a.createElement("input",{type:"radio",value:"off",name:"radio",onChange:function(){return u(2)}}),c.a.createElement("div",{className:"toggle__pointer"})))),c.a.createElement(f.a,{className:"grid",xs:"12",ref:i},y.map((function(e,a){return c.a.createElement("div",{className:"mb-4",xs:"1",key:a},c.a.createElement(g.a,{style:{width:"18rem"}},c.a.createElement(g.a.Img,{onClick:function(e){return function(e,t){e.preventDefault(),o.push("/product/".concat(t))}(e,a)},variant:"top",src:e.img}),c.a.createElement(g.a.Body,null,c.a.createElement(g.a.Title,null,e.name),c.a.createElement(g.a.Text,null,c.a.createElement("h4",null,e.price," $"),c.a.createElement("div",null,c.a.createElement("h5",null,e.cat," "),s(e)&&c.a.createElement("button",{onClick:function(){m(e),t("An item has been added to the card successfully")},className:"btn btn-outline-primary btn-sm"}," ",c.a.createElement(j.a,{icon:O.a})),!s(e)&&c.a.createElement("button",{onClick:function(){l(e),t("An item has been added to the card successfully")},className:"btn btn-primary btn-sm"}," ",c.a.createElement(j.a,{icon:O.c})))))))})))))))},I=(a(98),a(18));var C=function(){var e=Object(n.useContext)(d).productItems;return c.a.createElement("div",null,c.a.createElement(E.a,null,c.a.createElement(b.a,null,c.a.createElement(f.a,{xs:"12"},c.a.createElement(g.a,null,c.a.createElement(f.a,{className:"title p-4 mb-4 mt-4 "},c.a.createElement("h2",null,"Product view")),c.a.createElement(g.a.Body,null,0===e.length&&c.a.createElement(b.a,null,c.a.createElement(f.a,{className:"d-flex px-2 py-4 align-items-center justify-content-center",xs:"12"},"No item")),e.map((function(e,t){return c.a.createElement(f.a,{xs:"12",className:"d-flex onepdt px-2 justify-items-space-between align-items-center py-4 shopping-cart",key:t},c.a.createElement(f.a,{className:"image",xs:"2"},c.a.createElement("img",{src:e.img,alt:""})),c.a.createElement(f.a,{className:"total-price ",xs:"4"},c.a.createElement("p",null,"Price per item ",c.a.createElement("strong",null,e.price)," $"),c.a.createElement("br",null),c.a.createElement("p",null," ","Number of items ",c.a.createElement("strong",null,e.quantity)," "),c.a.createElement("br",null)),c.a.createElement(f.a,{xs:"3"},c.a.createElement("span",null,"Total price : ",e.price*e.quantity)))})),e.length>0&&c.a.createElement(f.a,{className:"d-flex px-2 py-4 shopping-cart align-items-center justify-content-center"},c.a.createElement(I.b,{className:"btn",to:"/submit"},"Submit"))))))))},w=a(175),P=function(){return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(w.a,{fluid:!0},c.a.createElement(E.a,null,c.a.createElement(b.a,null,c.a.createElement(f.a,{xs:"12",className:"d-flex justify-content-center align-items-center flex-column"},c.a.createElement("h2",{className:"mb-2"}," ",c.a.createElement(j.a,{icon:O.b})),c.a.createElement("p",{className:"mb-2"},"Error 404"),c.a.createElement(I.a,{className:"btn",to:"/"},"Back To Home")))))))},S=a(105);var A=function(){var e=Object(n.useContext)(d),t=e.decreaseProduct,a=e.productItems,l=e.increaseProduct,r=e.removeProduct;return c.a.createElement("div",null,c.a.createElement(E.a,null,c.a.createElement(b.a,null,c.a.createElement(f.a,{className:"title p-4 mb-4 mt-4 ",xs:"12"},c.a.createElement("h2",null,"Product view")),0===a.length&&c.a.createElement(f.a,{className:"d-flex px-2 py-4 align-items-center justify-content-center"},"No item"),a.map((function(e,a){return c.a.createElement(f.a,{xs:"12",className:"d-flex onepdt px-2 justify-items-space-between align-items-center py-4 shopping-cart",key:a},c.a.createElement(f.a,{className:"image",xs:"2"},c.a.createElement("img",{src:e.img,alt:""})),c.a.createElement(f.a,{className:"description",xs:"2"},c.a.createElement("h4",null,e.name),c.a.createElement("span",null,e.cat),c.a.createElement(I.b,{to:"/product/".concat(e.id)},"View Product")),c.a.createElement(f.a,{className:"quantity d-flex  justify-content-space-around align-items-center",xs:"4"},c.a.createElement("div",{className:"d-flex flex-column justify-content center align-items-center"},c.a.createElement("button",{className:"plus-btn",onClick:function(){return l(e)}},c.a.createElement("img",{src:"https://designmodo.com/demo/shopping-cart/plus.svg",alt:""})),c.a.createElement("button",{className:"minus-btn",onClick:function(){return t(e)}},c.a.createElement("img",{src:"https://designmodo.com/demo/shopping-cart/minus.svg",alt:""}))),c.a.createElement("input",{type:"number",name:"name",value:e.quantity,placeholder:"1",disabled:!0})),c.a.createElement(f.a,{className:"  ",xs:"3"},c.a.createElement("span",null,"Total ",e.price*e.quantity),c.a.createElement(S.a,{variant:"danger",className:"ml-2",onClick:function(){return r(e)}},c.a.createElement("span",{className:"delete-btn "}))))})),a.length>0&&c.a.createElement(f.a,{className:"d-flex px-2 py-4 shopping-cart align-items-center justify-content-center"},c.a.createElement(I.b,{className:"btn",to:"/order"},"Review order")))))},k=a(92),L=a(6),q=a(67),T=a.n(q),B=a(106),z=a(115),D=a(176),M=a(109),_=a.n(M),F=a(110),G=a(78),R=a.n(G);a(144);var Q=function(){var e=Object(n.useContext)(d),t=e.productItems,a=e.submitProduct,l=function(){var e=Object(B.a)(T.a.mark((function e(t,n){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(document.querySelector('[type="submit"]')[0]),document.querySelector('[type="submit"]').classList.add("disabled-btn"),_.a.fire("Congratulation!","your Order have submitted successfuly","success").then((function(){a(),n.resetForm({values:{name:"",phone:"",email:"",address:""}})}));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),r={lat:31.212285,lng:29.923821},o=Object(n.useState)(r),i=Object(m.a)(o,2),u=i[0],p=i[1],g=Object(n.useState)(u),h=Object(m.a)(g,2),y=h[0],v=h[1],N=Object(n.useState)(10),j=Object(m.a)(N,2),O=j[0],x=j[1],I=Object(n.useState)(""),C=Object(m.a)(I,2),w=C[0],P=C[1],A=function(e,t){v({lat:e,lng:t})},k=function(e){x(e)},q=function(){p(Object(s.a)({},r)),x(10)};R.a.setApiKey("AIzaSyCJ7Ut5ra6Z4RdmbSpeliaGlFG6Ten8A4g"),R.a.fromLatLng(y.lat,y.lng).then((function(e){var t=e.results[0].formatted_address;P(t),y!==u&&(document.getElementById("address").value=w)}),(function(e){console.error(e)})),R.a.setLanguage("en");var M=Object(n.useState)(!1),G=Object(m.a)(M,2),Q=G[0],V=G[1];return c.a.createElement("div",null,c.a.createElement(E.a,{className:"bg"},c.a.createElement(b.a,null,c.a.createElement(f.a,{className:"title p-4 mb-4 mt-4 "},c.a.createElement("h2",null,"Submit your order")),c.a.createElement(f.a,{xs:"12"},c.a.createElement("p",null," ",c.a.createElement("mark",{className:"submittotal"},"Total Price: ",c.a.createElement("span",null,t.length>0?function(e){var t=0;return e.forEach((function(e){t+=e.quantity*e.price})),t}(t):0)," $"," "))),c.a.createElement(f.a,{xs:"12",className:"d-flex onepdt px-2 py-4 shopping-cart"},c.a.createElement(z.a,{initialValues:{name:"",phone:"",email:"",address:""},validate:function(e){var t={};return e.email?/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(e.email)||(t.email="Invalid Email"):t.email="Email is required",e.name?!0===/\d/.test(e.name)&&(t.name="Invalid Name"):t.name="Name is required",e.phone?/^[0-9]*$/.test(e.phone)||(t.phone="Invalid Phone"):t.phone="Phone is required",e.address||(t.address="address is required"),t},onSubmit:l},(function(e){var t,a,n,l,r,m=e.values,s=e.handleChange,o=e.handleSubmit,i=e.errors,d=e.touched,p=e.handleBlur,E=e.isValid,b=e.dirty;return c.a.createElement("form",{onSubmit:o,className:"col-12 p-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",(t={type:"text",className:"form-control",id:"exampleInputname1",placeholder:"Name"},Object(L.a)(t,"type","name"),Object(L.a)(t,"name","name"),Object(L.a)(t,"id","name"),Object(L.a)(t,"value",m.name),Object(L.a)(t,"onChange",s),Object(L.a)(t,"onBlur",p),Object(L.a)(t,"className",i.name&&d.name?"input-error":null),t))),i.name&&d.name&&c.a.createElement("span",{className:"error"},i.name),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",(a={type:"phone",className:"form-control",id:"exampleInputphone1",placeholder:"Phone"},Object(L.a)(a,"type","phone"),Object(L.a)(a,"name","phone"),Object(L.a)(a,"id","phone"),Object(L.a)(a,"value",m.phone),Object(L.a)(a,"onChange",s),Object(L.a)(a,"onBlur",p),Object(L.a)(a,"className",i.phone&&d.phone?"input-error":null),a))),i.phone&&d.phone&&c.a.createElement("span",{className:"error"},i.phone),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",(n={type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"},Object(L.a)(n,"type","email"),Object(L.a)(n,"name","email"),Object(L.a)(n,"id","email"),Object(L.a)(n,"value",m.email),Object(L.a)(n,"onChange",s),Object(L.a)(n,"onBlur",p),Object(L.a)(n,"className",i.email&&d.email?"input-error":null),n))),i.email&&d.email&&c.a.createElement("span",{className:"error"},i.email),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",(l={type:"text",className:"form-control",id:"exampleInputAddress1",placeholder:"Address"},Object(L.a)(l,"type","text"),Object(L.a)(l,"name","address"),Object(L.a)(l,"id","address"),Object(L.a)(l,"value",m.address),Object(L.a)(l,"onChange",s),Object(L.a)(l,"onBlur",p),Object(L.a)(l,"className",i.address&&d.address?"input-error":null),l)),c.a.createElement("a",{className:"getLocation",onClick:function(){return V(!0)}},"get location from Map")),i.address&&d.address&&c.a.createElement("span",{className:"error"},i.address),c.a.createElement(D.a,{show:Q,onHide:function(){return V(!1)},dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title"},c.a.createElement(D.a.Header,{closeButton:!0},c.a.createElement(D.a.Title,{id:"example-custom-modal-styling-title"},"Pick your location")),c.a.createElement(D.a.Body,null,c.a.createElement(f.a,{className:"d-flex justify-content-around",xs:"12"},c.a.createElement("button",{className:" p-2 mb-2",onClick:q},"Reset Location"),c.a.createElement("button",{className:" p-2 mb-2",onClick:function(){return V(!1)}},"get location")),c.a.createElement("label",{className:"mr-2"},"Latitute:"),c.a.createElement("input",{className:"mr-2",type:"text",value:y.lat,disabled:!0}),c.a.createElement("label",{className:"mr-2"},"Longitute:"),c.a.createElement("input",{className:"mr-2",type:"text",value:y.lng,disabled:!0}),c.a.createElement(F.a,{defaultLocation:u,zoom:O,style:{height:"700px"},onChangeLocation:A,onChangeZoom:k,apiKey:"AIzaSyCJ7Ut5ra6Z4RdmbSpeliaGlFG6Ten8A4g"}))),c.a.createElement(f.a,{xs:"12",className:"mt-2"},c.a.createElement(S.a,(r={type:"submit",className:"btn btn-primary col-4"},Object(L.a)(r,"type","submit"),Object(L.a)(r,"className",b&&E?"button":"button disabled-btn"),Object(L.a)(r,"disabled",!(b&&E)),r),"Submit")))}))))))};var V=function(e){var t=e.match.params.pdtId,a=Object(v.useToasts)().addToast,l=function(e){a(e,{appearance:"success",autoDismiss:!0})},r=Object(n.useContext)(d),m=r.addProduct,s=r.productItems,o=r.increaseProduct,i=function(e){return!!s.find((function(t){return t.id===e.id}))};return c.a.createElement("div",null,c.a.createElement(E.a,{className:"bg mb-4"},c.a.createElement(b.a,null,c.a.createElement(f.a,{className:"title p-4 mb-4 mt-4 ",xs:"12"},c.a.createElement("h2",null,"Product view")),c.a.createElement(f.a,{xs:"12"},c.a.createElement(f.a,{md:"4",className:"mb-4 products",xs:"12"},c.a.createElement(g.a,{style:{width:"18rem"}},c.a.createElement(g.a.Img,{variant:"top",src:y[t].img}),c.a.createElement(g.a.Body,null,c.a.createElement(g.a.Title,null,y[t].name),c.a.createElement(g.a.Text,null,c.a.createElement("h4",null,y[t].price," $"),c.a.createElement("div",null,c.a.createElement("h5",null,y[t].cat," "),i(y[t])&&c.a.createElement("button",{onClick:function(){o(y[t]),l("An item has been added to the card successfully")},className:"btn btn-outline-primary btn-sm"}," ",c.a.createElement(j.a,{icon:O.a})),!i(y[t])&&c.a.createElement("button",{onClick:function(){m(y[t]),l("An item has been added to the card successfully")},className:"btn btn-primary btn-sm"}," ",c.a.createElement(j.a,{icon:O.c})))))))))))},W=a(112),X=a(179),$=a(180),J=a(178),H=a(177);a(166);var U=function(){var e=Object(n.useContext)(d).productItems,t=Object(n.useState)(y),a=Object(m.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(""),o=Object(m.a)(s,2),i=o[0],u=o[1],p=Object(n.useState)(!1),g=Object(m.a)(p,2),N=g[0],j=g[1],O=function(){j(!1)};return c.a.createElement(v.ToastProvider,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(I.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(E.a,null,c.a.createElement(b.a,null,c.a.createElement(f.a,{xs:"12"},c.a.createElement(f.a,{xs:"12",className:"my-4 pt-4 pb-4 pl-0 pr-0"},c.a.createElement(X.a,{expand:"lg"},c.a.createElement(X.a.Brand,null," ",c.a.createElement(I.b,{to:"/"},"ORGNO food")),c.a.createElement(X.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(X.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement($.a,{className:"mr-auto"},c.a.createElement(J.a,{title:"",id:"profileImg",style:{backgroundImage:"url(https://engineering.unl.edu/images/staff/Kayla_Person-small.jpg)"}},c.a.createElement(J.a.Item,{href:""},"View/ Edit Profile"),c.a.createElement(J.a.Item,{href:""},"Sign Out")),c.a.createElement(J.a,{title:"Cart",id:"cart"},c.a.createElement(J.a.Item,null,c.a.createElement(I.b,{to:"/cart"},"Show product"," ",c.a.createElement("mark",null," (",e.length,")"))))),c.a.createElement(H.a,{inline:!0},c.a.createElement("input",{autoComplete:"off",type:"text",placeholder:"Search",className:"mr-sm-2",value:i,onChange:function(e){var t=y.filter((function(t){return t.name.toLowerCase().startsWith(e.target.value.toLowerCase())}));u(e.target.value),r(t)},onFocus:function(){j(!0)},onBlur:function(){setTimeout((function(){O()}),150)},id:"searchInput"}),!0===N&&c.a.createElement(k.a,{in:N,timeout:200,classNames:"my-node"},c.a.createElement("ul",{id:"searchList"},0===l.length?c.a.createElement("li",null,"No item"):l.map((function(e,t){return c.a.createElement("li",{key:t,onClick:function(){var t;O(),t=e,document.getElementById("searchInput").value=t.name,u(t.name)}},c.a.createElement(I.b,{to:"/product/".concat(e.id)},e.name))})))))))),c.a.createElement(h.d,null,c.a.createElement(h.b,{exact:!0,path:"/home",component:x}),c.a.createElement(h.b,{exact:!0,path:"/",render:function(){return c.a.createElement(h.a,{to:"/home"})}}),c.a.createElement(h.b,{exact:!0,path:"/ecommerce_app",render:function(){return c.a.createElement(h.a,{to:"/home"})}}),c.a.createElement(h.b,{exact:!0,path:"/submit",component:Q}),c.a.createElement(h.b,{exact:!0,path:"/order",component:C}),c.a.createElement(h.b,{exact:!0,path:"/cart",component:A}),c.a.createElement(h.b,{exact:!0,path:"/product/:pdtId",render:function(e){return c.a.createElement(V,e)}}),c.a.createElement(h.b,{path:"*",exact:!0,component:P})))))),c.a.createElement(W.Sugar,{time:2e3,color:"#eb8025",background:"#ffff",className:"load",animation:"slide"}))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null,c.a.createElement(U,null))),document.getElementById("root"))},97:function(e,t,a){},98:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.84215ae7.chunk.js.map