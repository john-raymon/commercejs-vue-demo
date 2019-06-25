(function(t){function e(e){for(var n,a,s=e[0],c=e[1],u=e[2],p=0,m=[];p<s.length;p++)a=s[p],r[a]&&m.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,s=1;s<i.length;s++){var c=i[s];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},r={app:0},o=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"App ph2 pv4"},[t.order?i("div",{staticClass:"mw7 center"},[i("h2",{staticClass:"tracked ttu green"},[t._v("\n      Thank you for shopping!\n    ")]),i("h4",{staticClass:"tracked ttu gray flex justify-between"},[t._v("\n      Your order number is #"+t._s(t.order.id)+"\n    ")])]):t._e(),t.checkout?i("checkout",{attrs:{checkout:t.checkout,commerce:t.commerce},on:{"capture-order":t.captureOrder,"cancel-checkout":t.cancelCheckout}}):i("div",[i("cart",{attrs:{cart:t.cart},on:{"remove-item-from-cart":t.removeProductFromCart,"create-checkout":t.createCheckout}}),i("div",{staticClass:"products-container mw7 center cf"},[i("h2",{staticClass:"tracked ttu gray"},[t._v("\n        All Products\n      ")]),t.products.length?i("div",t._l(t.products,function(e){return i("product-item",{key:e.id,attrs:{product:e},on:{"add-product-to-cart":t.addProductToCart}})}),1):i("p",[t._v("There no products available right now")])])],1)],1)},o=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"products-container__product fl w-third pa1 flex flex-column justify-center"},[i("div",{staticClass:"aspect-ratio aspect-ratio--5x8 bg-black-50",style:{backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain",backgroundImage:"url("+t.product.media.source+")"}}),i("p",{staticClass:"tracked f7 flex justify-between items-center"},[t._v("\n   "+t._s(t.product.name)+"\n   "),i("span",[t._v("\n   "+t._s(t.product.price.formatted_with_code)+"\n   ")])]),i("button",{staticClass:"dim b1 b--mid-gray outline-0 pointer pa2",attrs:{disabled:t.product.is.sold_out},on:{click:function(e){return t.$emit("add-product-to-cart",t.product.id)}}},[t._v("\n   "+t._s(t.product.is.sold_out?"Sold Out":"Add to Cart")+"\n  ")])])},s=[],c={name:"ProductItem",props:{product:{type:Object,required:!0}}},u=c,l=i("2877"),p=Object(l["a"])(u,a,s,!1,null,null,null),m=p.exports,d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mw7 center"},[t.cart?i("div",{staticClass:"cart-container center"},[i("h2",{staticClass:"tracked ttu gray flex justify-between"},[t._v("\n        Cart ("+t._s(t.cart.total_items)+")\n        "),i("span",{staticClass:"flex flex-column f7"},[i("span",[t._v("\n            subtotal: $"+t._s(t.cart.subtotal.formatted_with_code)+"\n          ")])])]),t.cart.total_items>0?i("ul",{staticClass:"w-100 list-reset ma0 pv0 ph4"},t._l(t.cart.line_items,function(e){return i("line-item",{key:e.id,attrs:{item:e},on:{"remove-item-from-cart":function(e){return t.$emit("remove-item-from-cart",e)}}})}),1):i("p",{staticClass:"f7 tracked"},[t._v("Your cart is empty")]),i("button",{staticClass:"dim b1 outline-0 pointer pa2 mt2 db w-100",class:[0===t.cart.total_items?"b--light-gray":"b--mid-gray"],attrs:{disabled:0===t.cart.total_items},on:{click:function(e){return t.$emit("create-checkout")}}},[t._v("\n        Checkout\n      ")])]):i("p",{staticClass:"center"},[t._v("\n    Loading Cart...\n  ")])])},h=[],v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cart-container__line-item w-100 flex items-center justify-between pb2"},[i("div",{staticClass:"w-auto pr1"},[i("p",{staticClass:"tracked ttc f7"},[t._v("\n      "+t._s(t.item.name+" - "+t.item.quantity+" "+t.item.line_total.formatted_with_code)+"\n    ")])]),i("button",{staticClass:"dim b1 b--mid-gray outline-0 pointer pa2",on:{click:function(e){return t.$emit("remove-item-from-cart",t.item.id)}}},[t._v("\n    Remove from Cart\n  ")])])},f=[],g={name:"LineItem",props:["item"]},b=g,_=Object(l["a"])(b,v,f,!1,null,null,null),y=_.exports,C={name:"cart",props:["cart"],components:{LineItem:y}},x=C,k=Object(l["a"])(x,d,h,!1,null,null,null),w=k.exports,N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"checkout-container mw7 center pb4"},[i("h2",{staticClass:"tracked ttu gray flex justify-between"},[t._v("\n    Checkout\n  ")]),i("ul",{staticClass:"w-100 list-reset ma0 pv0 ph4"},t._l(t.checkout.live.line_items,function(t){return i("li",{key:t.id},[i("checkout-item",{attrs:{item:t}})],1)}),0),i("form",{on:{submit:function(e){return e.preventDefault(),t.captureOrder(e)}}},[i("h4",{staticClass:"tracked ttu gray flex justify-between"},[t._v("\n      Customer Details\n    ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.customerFirstName,expression:"customerFirstName"}],staticClass:"db mb1",attrs:{type:"text",name:"customerFirstName",placeholder:"First Name"},domProps:{value:t.customerFirstName},on:{input:function(e){e.target.composing||(t.customerFirstName=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.customerLastName,expression:"customerLastName"}],staticClass:"db mb1",attrs:{type:"text",name:"customerLastName",placeholder:"Last Name"},domProps:{value:t.customerLastName},on:{input:function(e){e.target.composing||(t.customerLastName=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.customerEmail,expression:"customerEmail"}],staticClass:"db mb1",attrs:{type:"email",name:"customerEmail",placeholder:"Email"},domProps:{value:t.customerEmail},on:{input:function(e){e.target.composing||(t.customerEmail=e.target.value)}}}),i("h4",{staticClass:"tracked ttu gray flex justify-between"},[t._v("\n      shipping address\n    ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingFullName,expression:"shippingFullName"}],staticClass:"db mb1",attrs:{type:"text",name:"shippingFullName",placeholder:"Name"},domProps:{value:t.shippingFullName},on:{input:function(e){e.target.composing||(t.shippingFullName=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.streetAddress,expression:"streetAddress"}],staticClass:"db mb1",attrs:{type:"text",name:"streetAddress",placeholder:"Street Address"},domProps:{value:t.streetAddress},on:{input:function(e){e.target.composing||(t.streetAddress=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"db mb1",attrs:{type:"text",name:"city",placeholder:"City"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.postalZipcode,expression:"postalZipcode"}],staticClass:"db mb1",attrs:{type:"text",name:"postalZipcode",placeholder:"Postal/Zip Code"},domProps:{value:t.postalZipcode},on:{input:function(e){e.target.composing||(t.postalZipcode=e.target.value)}}}),i("select",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],staticClass:"db mb2",attrs:{name:"country"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.country=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"",disabled:""}},[t._v("Country")]),t._l(t.countries,function(e,n,r){return i("option",{key:r,domProps:{value:n}},[t._v(t._s(e))])})],2),i("select",{directives:[{name:"model",rawName:"v-model",value:t.provinceRegionState,expression:"provinceRegionState"}],staticClass:"db mb2",attrs:{name:"provinceRegionState",placeholder:"Province/Region/State"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.provinceRegionState=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"",disabled:""}},[t._v("Province/Region/State")]),t._l(t.subdivisions,function(e,n,r){return i("option",{key:n+r,domProps:{value:n}},[t._v(t._s(e))])})],2),i("h4",{staticClass:"tracked ttu gray flex justify-between"},[t._v("\n      choose a shipping method\n    ")]),t.shippingOptions.length>0?i("select",{directives:[{name:"model",rawName:"v-model",value:t.shippingOption,expression:"shippingOption"}],staticClass:"db mb2",attrs:{name:"shippingOption"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.shippingOption=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"",disabled:""}},[t._v("Choose a shipping method")]),t._l(t.shippingOptions,function(e){return i("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.description+" - $"+e.price.formatted_with_code))])})],2):i("p",[t._v("\n      There are no shipping options available for the selected country\n    ")]),i("h4",{staticClass:"tracked ttu gray flex justify-between"},[t._v("\n      Payment\n    ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.cardNumber,expression:"cardNumber"}],staticClass:"db mb1",attrs:{type:"text",name:"cardNumber",placeholder:"Card Number"},domProps:{value:t.cardNumber},on:{input:function(e){e.target.composing||(t.cardNumber=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.expMonth,expression:"expMonth"}],staticClass:"db mb1",attrs:{type:"text",name:"expMonth",placeholder:"Exp Month"},domProps:{value:t.expMonth},on:{input:function(e){e.target.composing||(t.expMonth=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.expYear,expression:"expYear"}],staticClass:"db mb1",attrs:{type:"text",name:"expYear",placeholder:"Exp Year"},domProps:{value:t.expYear},on:{input:function(e){e.target.composing||(t.expYear=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.ccv,expression:"ccv"}],staticClass:"db mb1",attrs:{type:"text",name:"ccv",placeholder:"Security Code (CCV)"},domProps:{value:t.ccv},on:{input:function(e){e.target.composing||(t.ccv=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billingPostalZipcode,expression:"billingPostalZipcode"}],staticClass:"db mb1",attrs:{type:"text",name:"billingPostalZipcode",placeholder:"Billing Postal/Zip Code"},domProps:{value:t.billingPostalZipcode},on:{input:function(e){e.target.composing||(t.billingPostalZipcode=e.target.value)}}}),i("p",[t._v("\n     Subtotal: "+t._s(t.checkout.live.total_due.formatted_with_code)+"\n    ")]),i("p",[t._v("\n     Shipping: "+t._s(t.selectedShippingPrice)+"\n    ")]),i("button",{staticClass:"dim b1 outline-0 pointer pa2 mt2 db w-100 ttc",class:[t.shippingOptions.length?"b--mid-gray":"b--light-gray"],attrs:{disabled:!t.shippingOptions.length}},[t._v("\n      complete order\n    ")])]),i("span",{staticClass:"db tracked ttu tc mv2"},[t._v("or")]),i("button",{staticClass:"dim b1  b--mid-gray outline-0 pointer pa2 mt2 db w-100 ttc",on:{click:function(e){return t.$emit("cancel-checkout")}}},[t._v("\n    continue shopping\n  ")])])},O=[],P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cart-container__line-item w-100 flex items-center justify-between pb2"},[i("div",{staticClass:"w-auto pr1"},[i("p",{staticClass:"tracked ttc f7"},[t._v("\n      "+t._s(t.item.product_name)+" - ("+t._s(t.item.quantity)+")\n    ")])]),i("p",{staticClass:"pa0 ma0"},[t._v("\n    $"+t._s(t.item.line_total.formatted_with_code)+"\n  ")])])},S=[],j={name:"CheckoutItem",props:["item"]},E=j,F=Object(l["a"])(E,P,S,!1,null,null,null),A=F.exports,Z={name:"Checkout",components:{CheckoutItem:A},data:function(){return{customerFirstName:"",customerLastName:"",customerEmail:"",country:"US",shippingFullName:"",streetAddress:"",city:"",provinceRegionState:"",postalZipcode:"",shippingOption:"",shippingOptions:[],shippingOptionsById:{},cardNumber:"4242 4242 4242 4242",expMonth:"01",expYear:"2021",ccv:"123",billingPostalZipcode:"32825",countries:{},subdivisions:{}}},props:["commerce","checkout"],created:function(){this.getAllCountries(),this.getRegions(this.country),this.getShippingOptions(this.checkout.id,this.country)},watch:{country:function(t,e){t!==e&&(this.getRegions(t),this.getShippingOptions(this.checkout.id,t))}},methods:{getAllCountries:function(){var t=this;this.commerce.Services.localeListShippingCountries(this.checkout.id,function(e){t.countries=e.countries},function(t){return console.log(t)})},getRegions:function(t){var e=this;this.commerce.Services.localeListSubdivisions(t,function(t){e.subdivisions=t.subdivisions},function(t){return console.log(t)})},getShippingOptions:function(t,e){var i=this;this.commerce.Checkout.getShippingOptions(t,{country:e},function(t){t.error?(i.shippingOptions=[],i.shippingOptionsById={}):(i.shippingOptions=t,i.shippingOptionsById=t.reduce(function(t,e){return t[e.id]=e,t},{}))})},captureOrder:function(){var t=this.checkout.live.line_items.reduce(function(t,e){return t[e.id]={quantity:e.quantity},t},{}),e={line_items:t,customer:{firstname:this.customerFirstName,lastname:this.customerLastName,email:this.customerEmail},shipping:{name:this.shippingFullName,country:this.country,street:this.streetAddress,town_city:this.city,county_state:this.provinceRegionState,postal_zip_code:this.postalZipcode},fulfillment:{shipping_method:this.shippingOption},payment:{gateway:"test_gateway",card:{number:this.cardNumber,expiry_month:this.expMonth,expiry_year:this.expYear,cvc:this.ccv,postal_zip_code:this.billingPostalZipcode}}};this.$emit("capture-order",this.checkout.id,e)}},computed:{selectedShippingPrice:function(){return this.shippingOptionsById[this.shippingOption]&&this.shippingOptionsById[this.shippingOption].price.formatted_with_code||"----"}}},$=Z,L=Object(l["a"])($,N,O,!1,null,null,null),R=L.exports,I=(i("f24d"),{name:"app",components:{ProductItem:m,Cart:w,Checkout:R},props:{commerce:{required:!0,type:Object}},created:function(){var t=this;void 0!==this.commerce&&"undefined"!==typeof this.commerce&&(this.commerce.Products.list(function(e){t.products=e.data},function(t){console.log(t)}),window.addEventListener("Commercejs.Cart.Ready",function(){var t=this;this.commerce.Cart.retrieve(function(e){e.error||(t.cart=e)})}.bind(this)))},methods:{addProductToCart:function(t){var e=this;this.commerce.Cart.add({id:t},function(t){t.error||(e.cart=t.cart)})},removeProductFromCart:function(t){var e=this;this.commerce.Cart.remove(t,function(t){t.error||(e.cart=t.cart)})},refreshCart:function(){this.commerce.Cart.refresh(function(t){},function(t){return console.log(t)})},createCheckout:function(){var t=this;this.cart.total_items>0&&this.commerce.Checkout.generateToken(this.cart.id,{type:"cart"},function(e){t.checkout=e},function(t){console.log("Error:",t)})},cancelCheckout:function(){this.checkout=null},captureOrder:function(t,e){var i=this;console.log(arguments),this.commerce.Checkout.capture(t,e,function(t){i.refreshCart(),i.checkout=null,i.order=t},function(t){return console.log(t)})}},data:function(){return{products:[],cart:null,checkout:null,order:null}}}),M=I,Y=Object(l["a"])(M,r,o,!1,null,null,null),T=Y.exports,q=new window.Commerce("pk_test_1551355ddcd1fde4b5d32b066305d6c6a172eea886ae6",!1);n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(T,{props:{commerce:q}})}}).$mount("#app")},f24d:function(t,e,i){}});
//# sourceMappingURL=app.d87869c9.js.map