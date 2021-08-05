import{B as t,a as e,b as a,c as s,d as r,e as n,f as i,g as o,h as l,i as c,j as u,k as p,l as d,m as h,n as m,V as g,o as f}from"./vendor.56e3e040.js";!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(a){const s=new URL(t,location),r=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((a,n)=>{const i=new URL(t,s);if(self[e].moduleMap[i])return a(self[e].moduleMap[i]);const o=new Blob([`import * as m from '${i}';`,`${e}.moduleMap['${i}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){n(new Error(`Failed to import: ${t}`)),r(l)},onload(){a(self[e].moduleMap[i]),r(l)}});document.head.appendChild(l)})),self[e].moduleMap={}}}("https://cooty.github.io/vue-weather-app/assets/");const y="https://api.openweathermap.org/data/2.5/weather",_="&appid=af70a8ed8f9ec89b897089b1e7ad7ee9&units=metric",v=async t=>{const e=await fetch(t);if(200!==e.status)throw new Error("We couldn't get the weather data for that location");return await e.json()},b=async(t,e,a)=>await v(`${y}?lat=${t}&lon=${e}${_}&lang=${a.lang}`),w=async(t,e)=>await v(`${y}?q=${t}${_}&lang=${e.lang}`);class C{constructor(t,e,a,s,r){this.temp=t,this.description=e,this.feelsLike=a,this.humidity=s,this.pressure=r}}const $={debug:!1,state:{weatherData:new C,city:"",lat:0,lon:0,isLoading:!0,isError:!1,errorMessage:"",isRightSectionOpened:!1},setWeatherData(t){this.debug&&console.log("setWeatherDataAction triggered with",t),this.state.weatherData=t},setCity(t){this.debug&&console.log("setCity triggered with",t),this.state.city=t},setLat(t){this.debug&&console.log("setLat triggered with",t),this.state.lat=t},setLon(t){this.debug&&console.log("setLon triggered with",t),this.state.lon=t},setIsLoading(t){this.debug&&console.log("setIsLoading triggered with",t),this.state.isLoading=t},setIsError(t){this.debug&&console.log("setIsError triggered with",t),this.state.isError=t},setErrorMessage(t){this.debug&&console.log("setErrorMessage triggered with",t),this.state.errorMessage=t},setIsRightSectionOpened(t){this.debug&&console.log("setIsRightSectionOpened triggered with",t),this.state.isRightSectionOpened=t}};Object.freeze($);const x={makeKey:t=>`_wa_${t}`,saveToCache(t,e){try{sessionStorage.setItem(this.makeKey(t),JSON.stringify(e))}catch(a){console.warn(a)}},getFromCache(t){try{const e=sessionStorage.getItem(this.makeKey(t));return!!e&&JSON.parse(e)}catch(e){return console.warn(e),!1}}};Object.freeze(x);const L=(t,e)=>{e.setIsError(!0),e.setErrorMessage(t.message)},S=t=>{t.setIsLoading(!0),t.setErrorMessage(""),t.setIsError(!1),t.setIsRightSectionOpened(!1)},E=(t,e,a)=>{a.setWeatherData(t),a.setLat(0),a.setLon(0),a.setCity(e)},B=t=>{const{main:e,weather:a}=t;if(!(e&&a&&a[0]&&a[0].description&&e.feels_like&&e.humidity&&e.pressure))throw new Error("Can't find all the necessary data in the API response");return new C(e.temp,a[0].description,e.feels_like,e.humidity,e.pressure)};function F(t,e,a,s,r,n,i,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),s&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):r&&(l=o?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}const D={};var k=F({name:"QueryForm",components:{BForm:t,BFormInput:e,BIconSearch:a,BButton:s},data:()=>({city:"",appState:$.state}),computed:{valid:function(){return this.city}},mounted(){this.mountHandler()},methods:{submitHandler:async function(){S($);try{const t=`${this.city}${this.$i18n.locale}`;let e=x.getFromCache(t);if(!e){const a=await w(this.city,{lang:this.$i18n.locale});e=B(a),x.saveToCache(t,e)}E(e,this.city,$)}catch(t){L(t,$)}finally{$.setIsLoading(!1)}},mountHandler:async function(){const t={lat:parseFloat((180*Math.random()-90).toFixed(8)),lon:parseFloat((360*Math.random()-180).toFixed(8))};try{const e=await b(t.lat,t.lon,{lang:this.$i18n.locale});((t,e,a)=>{a.setWeatherData(t),a.setLat(e.lat),a.setLon(e.lon)})(B(e),t,$)}catch(e){L(e,$)}finally{$.setIsLoading(!1)}}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form",{attrs:{inline:""},on:{submit:function(e){return e.preventDefault(),t.submitHandler.apply(null,arguments)}}},[a("label",{staticClass:"sr-only",attrs:{for:"input-city"}},[t._v(" "+t._s(t.$t("messages.cityLabel"))+" ")]),a("b-form-input",{staticClass:"query-form-city",attrs:{id:"input-city",name:"city",placeholder:t.$t("messages.cityPlaceholder"),required:""},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}}),a("b-button",{staticClass:"query-form-submit",attrs:{type:"submit",variant:"primary",disabled:!t.valid||t.appState.isLoading,"aria-label":t.$t("messages.submit")}},[a("b-icon-search")],1)],1)}),[],!1,(function(t){for(let e in D)this[e]=D[e]}),"02a32f9c",null,null);k.options.__file="src/domain/query/QueryForm.vue";var R=k.exports;const I={name:"TextRow",props:{bold:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},noBottomMargin:{type:Boolean,default:!1}}},M={};var j=F(I,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{class:{"font-weight-bold":t.bold,"text-muted":t.muted,"mb-0":t.noBottomMargin}},[t._t("default")],2)}),[],!1,(function(t){for(let e in M)this[e]=M[e]}),null,null,null);j.options.__file="src/ui/TextRow.vue";var O=j.exports;const T={};var A=F({name:"Divider"},(function(){var t=this.$createElement;return(this._self._c||t)("hr",{staticClass:"border-top my-2"})}),[],!1,(function(t){for(let e in T)this[e]=T[e]}),null,null,null);A.options.__file="src/ui/Divider.vue";var W=A.exports;const H={};var N=F({name:"FormattedTemperature",props:{temp:{type:Number,required:!0}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"text-nowrap"},[t._v(" "+t._s(Math.floor(t.temp))+"°C ")])}),[],!1,(function(t){for(let e in H)this[e]=H[e]}),null,null,null);N.options.__file="src/domain/display/FormattedTemperature.vue";var P=N.exports;const U={};var z=F({name:"Display",components:{BCard:r,TextRow:O,Divider:W,BBadge:n,FormattedTemperature:P},props:{weatherData:{type:C,required:!0},lat:{type:Number,default:0},lon:{type:Number,default:0},city:{type:String,default:""}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"shadow",attrs:{tag:"article"}},[a("text-row",{attrs:{bold:!0}},[t.city?[t._v(" "+t._s(t.$t("messages.weatherForCity",{city:t.city}))+" ")]:[t._v(" "+t._s(t.$t("messages.weatherForCoordinates",{lat:t.lat,lon:t.lon}))+" ")]],2),a("div",{staticClass:"d-flex flex-nowrap justify-content-between"},[a("h1",{staticClass:"h2"},[a("formatted-temperature",{attrs:{temp:t.weatherData.temp}})],1),a("div",[a("b-badge",{attrs:{variant:"info"}},[t._v(" "+t._s(t.weatherData.description)+" ")])],1)]),a("text-row",[t._v(" "+t._s(t.$t("messages.feelsLike"))+" "),a("formatted-temperature",{attrs:{temp:t.weatherData.feelsLike}})],1),a("divider"),a("text-row",{attrs:{muted:!0}},[t._v(" "+t._s(t.$t("messages.humidity"))+": "+t._s(t.weatherData.humidity)+"% ")]),a("text-row",{attrs:{muted:!0,"no-bottom-margin":!0}},[t._v(" "+t._s(t.$t("messages.pressure"))+": "+t._s(t.weatherData.pressure)+"hPa ")])],1)}),[],!1,(function(t){for(let e in U)this[e]=U[e]}),null,null,null);z.options.__file="src/domain/display/Display.vue";var q=z.exports;const G={};var K=F({name:"Wrapper",components:{BContainer:i,BRow:o,BCol:l}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:"md"}},[a("b-row",{staticClass:"justify-content-center align-items-center"},[a("b-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"6",xl:"5"}},[t._t("default")],2)],1)],1)}),[],!1,(function(t){for(let e in G)this[e]=G[e]}),null,null,null);K.options.__file="src/ui/Wrapper.vue";var V=K.exports;const Q={};var X=F({name:"AppMain"},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("main",{staticClass:"position-relative d-flex flex-column h-100"},[t._t("default")],2)}),[],!1,(function(t){for(let e in Q)this[e]=Q[e]}),null,null,null);X.options.__file="src/ui/AppMain.vue";var J=X.exports;const Y={};var Z=F({name:"AppHeader",components:{BNavbar:c,BContainer:i,BRow:o,BCol:l,BIconGear:u,BIconX:p},data:()=>({appState:$.state}),methods:{toggle(){$.setIsRightSectionOpened(!this.appState.isRightSectionOpened)}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"shadow-sm",attrs:{sticky:!0,type:"light",variant:"light"}},[a("b-container",{attrs:{fluid:"lg"}},[a("b-row",{staticClass:"w-100 no-gutters",attrs:{"align-h":"between"}},[a("b-col",{attrs:{cols:10,sm:9,md:8,lg:6}},[t._t("left")],2),a("b-col",{staticClass:"d-flex justify-content-end position-relative",attrs:{cols:2,sm:3,md:4,lg:6}},[a("button",{staticClass:"right-slot-toggler-lt-md d-md-none h4 mb-0 text-secondary",on:{click:t.toggle}},[t.appState.isRightSectionOpened?[a("b-icon-x")]:[a("b-icon-gear")]],2),a("div",{staticClass:"right-slot p-2 p-md-0 rounded d-md-flex",class:{opened:t.appState.isRightSectionOpened}},[t._t("right")],2)])],1)],1)],1)}),[],!1,(function(t){for(let e in Y)this[e]=Y[e]}),"6b285008",null,null);Z.options.__file="src/ui/AppHeader.vue";var tt=Z.exports;const et={};var at=F({name:"AppContent"},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{staticClass:"app-content d-flex flex-column justify-content-center"},[t._t("default")],2)}),[],!1,(function(t){for(let e in et)this[e]=et[e]}),"70f25bb9",null,null);at.options.__file="src/ui/AppContent.vue";var st=at.exports;const rt=Object.freeze({EN:"en",DE:"de",BG:"bg",HU:"hu"});const nt={};var it=F({name:"LanguageChanger",components:{BFormSelect:d},data:()=>({languages:[{text:"English",value:rt.EN},{text:"Deutsch",value:rt.DE},{text:"Magyar",value:rt.HU},{text:"български",value:rt.BG}]}),methods:{async changeHandler(t){S($);try{if($.state.lat&&$.state.lon){const e=await b($.state.lat,$.state.lon,{lang:t});$.setWeatherData(B(e))}else{const e=`${$.state.city}${t}`;let a=x.getFromCache(e);if(!a){const s=await w($.state.city,{lang:t});a=B(s),x.saveToCache(e,a)}E(a,$.state.city,$)}}catch(e){L(e,$)}finally{$.setIsLoading(!1)}}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-form-select",{attrs:{options:t.languages},on:{change:t.changeHandler},model:{value:t.$i18n.locale,callback:function(e){t.$set(t.$i18n,"locale",e)},expression:"$i18n.locale"}})}),[],!1,(function(t){for(let e in nt)this[e]=nt[e]}),null,null,null);it.options.__file="src/infrastructure/i18n/LanguageChanger.vue";var ot=it.exports;const lt={};var ct=F({name:"App",components:{QueryForm:R,Display:q,BSpinner:h,BAlert:m,Wrapper:V,LanguageChanger:ot,AppHeader:tt,AppMain:J,AppContent:st},data:()=>({appState:$.state})},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-main",[a("app-header",{scopedSlots:t._u([{key:"left",fn:function(){return[a("query-form")]},proxy:!0},{key:"right",fn:function(){return[a("language-changer")]},proxy:!0}])}),a("app-content",[a("wrapper",[!t.appState.weatherData.temp||t.appState.isLoading||t.appState.isError?t.appState.isLoading?[a("div",{staticClass:"text-center"},[a("b-spinner",{attrs:{title:t.$t("messages.loading"),variant:"primary",label:t.$t("messages.loading")}})],1)]:t.appState.isError?[a("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(" "+t._s(t.appState.errorMessage)+" ")])]:t._e():[a("display",{attrs:{"weather-data":t.appState.weatherData,city:t.appState.city,lat:t.appState.lat,lon:t.appState.lon}})]],2)],1)],1)}),[],!1,(function(t){for(let e in lt)this[e]=lt[e]}),null,null,null);ct.options.__file="src/application/App.vue";var ut=ct.exports;g.use(f);const pt={en:{messages:{weatherForCity:"The weather for {city} is:",weatherForCoordinates:"The weather for a random coordinate (latitude: {lat}, longitude: {lon}) is:",feelsLike:"feels like",humidity:"Humidity",pressure:"Pressure",cityLabel:"City:",cityPlaceholder:"Type your city",submit:"Check the weather!",loading:"Loading..."}},de:{messages:{weatherForCity:"Das Wetter für {city} ist:",weatherForCoordinates:"Das Wetter für eine zufällige Koordinate (Breite: {lat}, Längengrad: {lon}) ist:",feelsLike:"fühlt sich an wie",humidity:"Feuchtigkeit",pressure:"Luftdruck",cityLabel:"Stadt:",cityPlaceholder:"Geben Sie Ihre Stadt ein",submit:"Wetter anschauen!",loading:"Wird geladen..."}},hu:{messages:{weatherForCity:"Aktuális időjárás, {city}:",weatherForCoordinates:"Időjárás egy véletlenszerű ponton (szélesség: {lat}, hosszúság: {lon}):",feelsLike:"érzésre",humidity:"Páratartalom",pressure:"Nyomás",cityLabel:"Város:",cityPlaceholder:"Írj be egy várost",submit:"Lássuk az időjárást!",loading:"Betöltés..."}},bg:{messages:{weatherForCity:"Времето за {city} е:",weatherForCoordinates:"Времето за произволна координата (географска ширина: {lat}, дължина: {lon}) е:",feelsLike:"се чувства като",humidity:"Влажност",pressure:"Налягане",cityLabel:"Град:",cityPlaceholder:"Въведете вашия град",submit:"Проверете времето!",loading:"Зареждане..."}}};new g({i18n:new f({locale:rt.EN,messages:pt}),render:t=>t(ut)}).$mount("#app");
