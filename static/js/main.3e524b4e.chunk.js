(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1jZfU",Modal:"Modal_Modal__1hxgY"}},13:function(e,t,a){e.exports={App:"Container_App__2k94h"}},14:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3f8xG"}},16:function(e,t,a){e.exports={Button:"Button_Button__1PNZE"}},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(12),c=a.n(o),s=a(11),i=a(3),l=a(4),u=a(6),h=a(5),m=a(13),d=a.n(m),b=a(0);function g(e){var t=e.children;return Object(b.jsx)("div",{className:d.a.App,children:t})}var p=a(7),j=a.n(p),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={text:"",webformatURL:"",largeImageURL:"",id:""},e.hendleChange=function(t){e.setState({text:t.currentTarget.value.toLowerCase()})},e.hendleSubmit=function(t){t.preventDefault(),""!==e.state.text.trim()?(e.props.onSubmit(e.state.text),e.reset()):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438")},e.reset=function(){e.setState({text:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:j.a.Searchbar,children:Object(b.jsxs)("form",{className:j.a.SearchForm,onSubmit:this.hendleSubmit,children:[Object(b.jsx)("button",{type:"submit",className:j.a.button,children:Object(b.jsx)("span",{className:j.a.lable})}),Object(b.jsx)("input",{value:this.state.text,onChange:this.hendleChange,className:j.a.input,type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),O=f,x=a(9),v=a.n(x);function y(e){var t=e.webformatURL,a=e.user,n=e.openModal,r=e.largeImageURL;return Object(b.jsx)("li",{className:v.a.ImageGalleryItem,children:Object(b.jsx)("img",{src:t,alt:a,"data-source":r,className:v.a.image,onClick:n})})}var _=a(14),w=a.n(_);function S(e){var t=e.images,a=e.openModal;return Object(b.jsx)("ul",{className:w.a.ImageGallery,children:t.map((function(e){var t=e.webformatURL,n=e.id,r=e.user,o=e.largeImageURL;return Object(b.jsx)(y,{user:r,webformatURL:t,largeImageURL:o,openModal:a},n)}))})}var I=a(15),k=a.n(I),C=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)(k.a,{type:"Watch",color:"#00BFFF",height:200,width:200,timeout:3e3})}}]),a}(n.Component),M=a(10),L=a.n(M),U=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleKeyClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(b.jsx)("div",{className:L.a.Overlay,onClick:this.handleKeyClick,children:Object(b.jsx)("div",{className:L.a.Modal,children:Object(b.jsx)("img",{src:this.props.largeImageURL,alt:""})})})}}]),a}(n.Component),N=a(16),R=a.n(N);function G(e){var t=e.onClick;return Object(b.jsx)("button",{type:"button",className:R.a.Button,onClick:t,children:"Load More"})}var F="idle",A="pending",E="resolved",B="rejected",D=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={text:"",page:1,images:[],loading:!1,error:null,status:F,showModal:!1,largeImageURL:""},e.fetchImg=function(){var t=e.state,a=t.page,n=t.text;fetch("https://pixabay.com/api/?q=".concat(n,"&page=").concat(a,"&key=").concat("22963284-23f543f8627e95ac39317c785","&image_type=photo&orientation=horizontal&per_page=").concat(12)).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0439 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 ".concat(n)))})).then((function(t){var n=t.hits;e.setState((function(e){var t=e.images;return{images:[].concat(Object(s.a)(t),Object(s.a)(n)),status:E,page:a+1}})),1!==a&&window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:t,status:B})}))},e.handleFormSubmit=function(t){e.setState({text:t,page:1})},e.openModal=function(t){e.setState({largeImageURL:t.target.dataset.source}),e.toggleModal()},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.btnFetch=function(){e.fetchImg()},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.text!==this.state.text&&(this.setState({images:[],page:1,status:A}),this.fetchImg())}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.error,n=e.status,r=e.showModal,o=e.largeImageURL,c=n===E&&t.length>11;return Object(b.jsxs)(g,{children:[Object(b.jsx)(O,{onSubmit:this.handleFormSubmit}),n===F&&Object(b.jsx)("h2",{children:"\u0412\u0432\u0435\u0434\u0438 \u0438 \u0431\u0443\u0434\u0435\u0442 \u0447\u0443\u0434\u043e"}),n===B&&Object(b.jsx)("h1",{children:a.message}),c&&Object(b.jsx)(S,{images:t,openModal:this.openModal}),n===A&&Object(b.jsx)(C,{}),0!==t.length&&Object(b.jsx)(G,{onClick:this.btnFetch}),r&&Object(b.jsx)(U,{onClose:this.toggleModal,largeImageURL:o})]})}}]),a}(n.Component),K=D;a(42);c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(K,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3ipVA",SearchForm:"Searchbar_SearchForm__1uOba",button:"Searchbar_button__1ldLK",label:"Searchbar_label__3YGUW",input:"Searchbar_input__36E4G"}},9:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__23JCp",image:"ImageGalleryItem_image__10C5k"}}},[[43,1,2]]]);
//# sourceMappingURL=main.3e524b4e.chunk.js.map