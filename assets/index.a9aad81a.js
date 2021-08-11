import{B as t,a as e,b as a,c as s,d as r,e as n,f as i,g as o,h as l,i as c,j as u,k as d,l as p,m as h,n as m,o as f,p as g,V as y,q as b}from"./vendor.804d05e3.js";!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(a){const s=new URL(t,location),r=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((a,n)=>{const i=new URL(t,s);if(self[e].moduleMap[i])return a(self[e].moduleMap[i]);const o=new Blob([`import * as m from '${i}';`,`${e}.moduleMap['${i}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){n(new Error(`Failed to import: ${t}`)),r(l)},onload(){a(self[e].moduleMap[i]),r(l)}});document.head.appendChild(l)})),self[e].moduleMap={}}}("https://cooty.github.io/vue-weather-app/assets/");class v{constructor(t,e){this.lat=t,this.lon=e}}const _={debug:!1,state:{weatherData:null,city:"",coords:null,isLoading:!0,isError:!1,errorMessage:"",isRightSectionOpened:!1,units:"metric"},setWeatherData(t){this.debug&&console.log("setWeatherDataAction triggered with",t),this.state.weatherData=t},setCity(t){this.debug&&console.log("setCity triggered with",t),this.state.city=t},setCoords(t){this.debug&&console.log("setCoords triggered with",t),this.state.coords=t},setIsLoading(t){this.debug&&console.log("setIsLoading triggered with",t),this.state.isLoading=t},setIsError(t){this.debug&&console.log("setIsError triggered with",t),this.state.isError=t},setErrorMessage(t){this.debug&&console.log("setErrorMessage triggered with",t),this.state.errorMessage=t},setIsRightSectionOpened(t){this.debug&&console.log("setIsRightSectionOpened triggered with",t),this.state.isRightSectionOpened=t},setUnits(t){this.debug&&console.log("setUnits triggered with",t),this.state.setUnits=t}};Object.freeze(_);function w(t,e,a,s,r,n,i,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),s&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):r&&(l=o?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}const C={};var S=w({name:"QueryForm",components:{BForm:t,BFormInput:e,BIconSearch:a,BButton:s},data:()=>({city:"",appState:_.state}),computed:{valid(){return this.city}},mounted(){const t=new v(parseFloat((180*Math.random()-90).toFixed(8)),parseFloat((360*Math.random()-180).toFixed(8)));this.$bubble("update-weather",{lat:t.lat,lon:t.lon,lang:this.$i18n.locale,units:this.appState.units})},methods:{submitHandler(){this.$bubble("update-weather",{q:this.city,lang:this.$i18n.locale,units:this.appState.units})}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form",{attrs:{inline:""},on:{submit:function(e){return e.preventDefault(),t.submitHandler.apply(null,arguments)}}},[a("label",{staticClass:"sr-only",attrs:{for:"input-city"}},[t._v(" "+t._s(t.$t("messages.cityLabel"))+" ")]),a("b-form-input",{staticClass:"query-form-city",attrs:{id:"input-city",name:"city",placeholder:t.$t("messages.cityPlaceholder"),required:""},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}}),a("b-button",{staticClass:"query-form-submit",attrs:{type:"submit",variant:"primary",disabled:!t.valid||t.appState.isLoading,"aria-label":t.$t("messages.submit")}},[a("b-icon-search")],1)],1)}),[],!1,(function(t){for(let e in C)this[e]=C[e]}),"027a8836",null,null);S.options.__file="src/domain/query/QueryForm.vue";var $=S.exports;const x={name:"TextRow",props:{bold:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},noBottomMargin:{type:Boolean,default:!1}}},E={};var L=w(x,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{class:{"font-weight-bold":t.bold,"text-muted":t.muted,"mb-0":t.noBottomMargin}},[t._t("default")],2)}),[],!1,(function(t){for(let e in E)this[e]=E[e]}),null,null,null);L.options.__file="src/ui/TextRow.vue";var B=L.exports;const F={};var k=w({name:"Divider"},(function(){var t=this.$createElement;return(this._self._c||t)("hr",{staticClass:"border-top my-2"})}),[],!1,(function(t){for(let e in F)this[e]=F[e]}),null,null,null);k.options.__file="src/ui/Divider.vue";var R=k.exports;const D={};var M=w({name:"FormattedTemperature",props:{temp:{type:Number,required:!0}},data:()=>({appState:_.state})},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"text-nowrap"},[t._v(" "+t._s(Math.floor(t.temp))+t._s("metric"===t.appState.units?"°C":"°F")+" ")])}),[],!1,(function(t){for(let e in D)this[e]=D[e]}),null,null,null);M.options.__file="src/domain/display/FormattedTemperature.vue";var j=M.exports;class I{constructor(t,e,a,s,r){this.temp=t,this.description=e,this.feelsLike=a,this.humidity=s,this.pressure=r}}const U={};var O=w({name:"Display",components:{BCard:r,TextRow:B,Divider:R,BBadge:n,FormattedTemperature:j},props:{weatherData:{type:I,default:null},coords:{type:v,default:null},city:{type:String,default:""}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"shadow",attrs:{tag:"article"}},[a("text-row",{attrs:{bold:!0}},[t.city?[t._v(" "+t._s(t.$t("messages.weatherForCity",{city:t.city}))+" ")]:[t._v(" "+t._s(t.$t("messages.weatherForCoordinates",{lat:t.coords.lat,lon:t.coords.lon}))+" ")]],2),a("div",{staticClass:"d-flex flex-nowrap justify-content-between"},[a("h1",{staticClass:"h2"},[a("formatted-temperature",{attrs:{temp:t.weatherData.temp}})],1),a("div",[a("b-badge",{attrs:{variant:"info"}},[t._v(" "+t._s(t.weatherData.description)+" ")])],1)]),a("text-row",[t._v(" "+t._s(t.$t("messages.feelsLike"))+" "),a("formatted-temperature",{attrs:{temp:t.weatherData.feelsLike}})],1),a("divider"),a("text-row",{attrs:{muted:!0}},[t._v(" "+t._s(t.$t("messages.humidity"))+": "+t._s(t.weatherData.humidity)+"% ")]),a("text-row",{attrs:{muted:!0,"no-bottom-margin":!0}},[t._v(" "+t._s(t.$t("messages.pressure"))+": "+t._s(t.weatherData.pressure)+"hPa ")])],1)}),[],!1,(function(t){for(let e in U)this[e]=U[e]}),null,null,null);O.options.__file="src/domain/display/Display.vue";var A=O.exports;const W={};var T=w({name:"Wrapper",components:{BContainer:i,BRow:o,BCol:l}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:"md"}},[a("b-row",{staticClass:"justify-content-center align-items-center"},[a("b-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"6",xl:"5"}},[t._t("default")],2)],1)],1)}),[],!1,(function(t){for(let e in W)this[e]=W[e]}),null,null,null);T.options.__file="src/ui/Wrapper.vue";var H=T.exports;const q={};var z=w({name:"AppMain"},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("main",{staticClass:"position-relative d-flex flex-column h-100"},[t._t("default")],2)}),[],!1,(function(t){for(let e in q)this[e]=q[e]}),null,null,null);z.options.__file="src/ui/AppMain.vue";var P=z.exports;const N={};var G=w({name:"AppHeader",components:{BNavbar:c,BContainer:i,BRow:o,BCol:l,BIconGear:u,BIconX:d},data:()=>({appState:_.state}),methods:{toggle(){_.setIsRightSectionOpened(!this.appState.isRightSectionOpened)}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"shadow-sm",attrs:{sticky:!0,type:"light",variant:"light"}},[a("b-container",{attrs:{fluid:"lg"}},[a("b-row",{staticClass:"w-100 no-gutters",attrs:{"align-h":"between"}},[a("b-col",{staticClass:"flex-1",attrs:{cols:"auto"}},[t._t("left")],2),a("b-col",{staticClass:"d-flex justify-content-end position-relative pl-5",attrs:{cols:"auto"}},[a("button",{staticClass:"right-slot-toggler-lt-md d-md-none h4 mb-0 text-secondary",on:{click:t.toggle}},[t.appState.isRightSectionOpened?[a("b-icon-x")]:[a("b-icon-gear")]],2),a("div",{staticClass:"right-slot p-2 p-md-0 rounded d-md-flex",class:{opened:t.appState.isRightSectionOpened}},[t._t("right")],2)])],1)],1)],1)}),[],!1,(function(t){for(let e in N)this[e]=N[e]}),"10bf8eae",null,null);G.options.__file="src/ui/AppHeader.vue";var K=G.exports;const V={};var Q=w({name:"AppContent"},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{staticClass:"app-content d-flex flex-column justify-content-center"},[t._t("default")],2)}),[],!1,(function(t){for(let e in V)this[e]=V[e]}),"70f25bb9",null,null);Q.options.__file="src/ui/AppContent.vue";var X=Q.exports;const J=Object.freeze({EN:"en",DE:"de",BG:"bg",HU:"hu"});const Y={};var Z=w({name:"LanguageChanger",components:{BFormSelect:p},data:()=>({languages:[{text:"English",value:J.EN},{text:"Deutsch",value:J.DE},{text:"Magyar",value:J.HU},{text:"български",value:J.BG}]}),methods:{changeHandler(t){const e={};_.state.coords?(e.lat=_.state.coords.lat,e.lon=_.state.coords.lon):e.q=_.state.city,e.lang=t,e.units=_.state.units,this.$bubble("update-weather",e)}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-form-select",{attrs:{options:t.languages},on:{change:t.changeHandler},model:{value:t.$i18n.locale,callback:function(e){t.$set(t.$i18n,"locale",e)},expression:"$i18n.locale"}})}),[],!1,(function(t){for(let e in Y)this[e]=Y[e]}),null,null,null);Z.options.__file="src/infrastructure/i18n/LanguageChanger.vue";var tt=Z.exports;const et=t=>new URLSearchParams(t).toString(),at=async t=>await(async t=>{const e=await fetch(t);if(200!==e.status)throw new Error("messages.error");return await e.json()})(`\n        https://api.openweathermap.org/data/2.5/weather?${et(t)}&appid=af70a8ed8f9ec89b897089b1e7ad7ee9`),st={makeKey:t=>`_wa_${t}`,saveToCache(t,e){try{sessionStorage.setItem(this.makeKey(t),JSON.stringify(e))}catch(a){console.warn(a)}},getFromCache(t){try{const e=sessionStorage.getItem(this.makeKey(t));return!!e&&JSON.parse(e)}catch(e){return console.warn(e),!1}}};Object.freeze(st);const rt={};var nt=w({name:"UnitSwitcher",components:{BFormRadioGroup:h,BFormRadio:m},data:()=>({appState:_.state}),methods:{changeHandler(t){const e={};_.state.coords?(e.lat=_.state.coords.lat,e.lon=_.state.coords.lon):e.q=_.state.city,e.lang=this.$i18n.locale,e.units=t,this.$bubble("update-weather",e)}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form-radio-group",{staticClass:"text-nowrap",attrs:{id:"unit-switcher",name:"unit-switcher-buttons","button-variant":"outline-primary",buttons:""},on:{change:t.changeHandler},model:{value:t.appState.units,callback:function(e){t.$set(t.appState,"units",e)},expression:"appState.units"}},[a("b-form-radio",{attrs:{value:"metric"}},[t._v(" "+t._s(t.$t("messages.metric"))+": °C ")]),a("b-form-radio",{attrs:{value:"imperial"}},[t._v(" "+t._s(t.$t("messages.imperial"))+": °F ")])],1)}),[],!1,(function(t){for(let e in rt)this[e]=rt[e]}),null,null,null);nt.options.__file="src/domain/units/UnitSwitcher.vue";var it=nt.exports;const ot={};var lt=w({name:"App",components:{QueryForm:$,Display:A,BSpinner:f,BAlert:g,Wrapper:H,LanguageChanger:tt,AppHeader:K,AppMain:P,AppContent:X,UnitSwitcher:it},data:()=>({appState:_.state}),methods:{onUpdateWeatherHandler:async t=>{var e;(e=_).setIsLoading(!0),e.setErrorMessage(""),e.setIsError(!1);try{let e;const a=et(t),s=st.getFromCache(a);if(s)e=s;else{e=(t=>{const{main:e,weather:a}=t;if(!(e&&a&&a[0]&&a[0].description&&e.feels_like&&e.humidity&&e.pressure))throw new Error("Can't find all the necessary data in the API response");return new I(e.temp,a[0].description,e.feels_like,e.humidity,e.pressure)})(await at(t)),st.saveToCache(a,e)}t.q?((t,e,a)=>{a.setWeatherData(t),a.setCoords(null),a.setCity(e)})(e,t.q,_):((t,e,a)=>{a.setWeatherData(t),a.setCoords(e)})(e,new v(t.lat,t.lon),_),_.setUnits(t.units)}catch(a){((t,e)=>{e.setIsError(!0),e.setErrorMessage(t.message)})(a,_)}finally{_.setIsLoading(!1)}}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-main",{on:{"update-weather":t.onUpdateWeatherHandler}},[a("app-header",{scopedSlots:t._u([{key:"left",fn:function(){return[a("query-form")]},proxy:!0},{key:"right",fn:function(){return[a("ul",{staticClass:"mb-0 list-unstyled d-md-flex w-100"},[a("li",{staticClass:"mb-3 mr-md-3 mb-md-0"},[a("unit-switcher")],1),a("li",[a("language-changer")],1)])]},proxy:!0}])}),a("app-content",[a("wrapper",[!t.appState.weatherData||t.appState.isLoading||t.appState.isError?t.appState.isLoading?[a("div",{staticClass:"text-center"},[a("b-spinner",{attrs:{title:t.$t("messages.loading"),variant:"primary",label:t.$t("messages.loading")}})],1)]:t.appState.isError?[a("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(" "+t._s(t.$t(t.appState.errorMessage))+" ")])]:t._e():[a("display",{attrs:{"weather-data":t.appState.weatherData,city:t.appState.city,coords:t.appState.coords}})]],2)],1)],1)}),[],!1,(function(t){for(let e in ot)this[e]=ot[e]}),null,null,null);lt.options.__file="src/application/App.vue";var ct=lt.exports;y.use(b);const ut={en:{messages:{weatherForCity:"The weather for {city} is:",weatherForCoordinates:"The weather for a random coordinate (latitude: {lat}, longitude: {lon}) is:",feelsLike:"feels like",humidity:"Humidity",pressure:"Pressure",cityLabel:"City:",cityPlaceholder:"Type your city",submit:"Check the weather!",loading:"Loading...",error:"We couldn't get the weather data for that location",metric:"Metric",imperial:"Imperial"}},de:{messages:{weatherForCity:"Das Wetter für {city} ist:",weatherForCoordinates:"Das Wetter für eine zufällige Koordinate (Breite: {lat}, Längengrad: {lon}) ist:",feelsLike:"fühlt sich an wie",humidity:"Feuchtigkeit",pressure:"Luftdruck",cityLabel:"Stadt:",cityPlaceholder:"Geben Sie Ihre Stadt ein",submit:"Wetter anschauen!",loading:"Wird geladen...",error:"Wir konnten die Wetterdaten für diesen Ort nicht abrufen",metric:"metrisch",imperial:"angloamerikanische"}},hu:{messages:{weatherForCity:"Aktuális időjárás, {city}:",weatherForCoordinates:"Időjárás egy véletlenszerű ponton (szélesség: {lat}, hosszúság: {lon}):",feelsLike:"érzésre",humidity:"Páratartalom",pressure:"Nyomás",cityLabel:"Város:",cityPlaceholder:"Írj be egy várost",submit:"Lássuk az időjárást!",loading:"Betöltés...",error:"Sajnos erről a helyről nem tudjuk lekérni az időjárást",metric:"Metrikus",imperial:"Angolszász"}},bg:{messages:{weatherForCity:"Времето за {city} е:",weatherForCoordinates:"Времето за произволна координата (географска ширина: {lat}, дължина: {lon}) е:",feelsLike:"се чувства като",humidity:"Влажност",pressure:"Налягане",cityLabel:"Град:",cityPlaceholder:"Въведете вашия град",submit:"Проверете времето!",loading:"Зареждане...",error:"Не можахме да получим метеорологичните данни за това местоположение",metric:"метричен",imperial:"американски"}}},dt=new b({locale:J.EN,messages:ut});y.use((t=>{t.prototype.$bubble=function(t,...e){let a=this;do{a.$emit(t,...e),a=a.$parent}while(a)}})),new y({i18n:dt,render:t=>t(ct)}).$mount("#app");
