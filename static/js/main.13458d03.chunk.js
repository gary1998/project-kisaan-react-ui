(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[0],{31:function(e,t,a){e.exports=a(46)},44:function(e){e.exports=JSON.parse('[{"cropId":"FR01","name":"Banana","waterL":1200,"waterH":2200,"periodL":270,"periodH":360,"phL":6,"phH":7.5,"season":"NA","tempL":15,"tempH":35,"humL":75,"humH":85},{"cropId":"FR02","name":"Citrus","waterL":900,"waterH":1200,"periodL":240,"periodH":365,"phL":6,"phH":6.5,"season":"K","tempL":13,"tempH":25,"humL":40,"humH":60},{"cropId":"FR03","name":"Grape","waterL":500,"waterH":1200,"periodL":900,"periodH":1095,"phL":5.5,"phH":6.5,"season":"R","tempL":15,"tempH":40,"humL":"","humH":""},{"cropId":"FR04","name":"Groundnut","waterL":500,"waterH":700,"periodL":120,"periodH":150,"phL":6.5,"phH":7,"season":"K","tempL":30,"tempH":35,"humL":"","humH":""},{"cropId":"FR05","name":"Pineapple","waterL":700,"waterH":1000,"periodL":550,"periodH":730,"phL":4.5,"phH":6.5,"season":"K","tempL":20,"tempH":30,"humL":"","humH":""},{"cropId":"FR06","name":"Sugarcane","waterL":1500,"waterH":2500,"periodL":360,"periodH":540,"phL":5,"phH":8.5,"season":"K","tempL":20,"tempH":26,"humL":"","humH":""},{"cropId":"FR07","name":"Sunflower","waterL":600,"waterH":1000,"periodL":125,"periodH":130,"phL":6,"phH":7.5,"season":"NA","tempL":21,"tempH":25,"humL":"","humH":""},{"cropId":"MS01","name":"Cotton","waterL":700,"waterH":1300,"periodL":180,"periodH":195,"phL":6,"phH":6.5,"season":"K","tempL":21,"tempH":37,"humL":"","humH":""},{"cropId":"VG01","name":"Beans","waterL":300,"waterH":500,"periodL":75,"periodH":90,"phL":6,"phH":6.5,"season":"K","tempL":10,"tempH":21,"humL":"","humH":""},{"cropId":"VG02","name":"Cabbage","waterL":380,"waterH":500,"periodL":90,"periodH":120,"phL":6,"phH":6.5,"season":"R","tempL":15,"tempH":18,"humL":"","humH":""},{"cropId":"VG03","name":"Castor","waterL":500,"waterH":500,"periodL":140,"periodH":180,"phL":5,"phH":8.5,"season":"K","tempL":20,"tempH":27,"humL":"","humH":""},{"cropId":"VG04","name":"Chillies","waterL":500,"waterH":500,"periodL":120,"periodH":210,"phL":5,"phH":6,"season":"NA","tempL":18,"tempH":26,"humL":"","humH":""},{"cropId":"VG05","name":"Gingelly","waterL":350,"waterH":400,"periodL":100,"periodH":135,"phL":5.5,"phH":8,"season":"KR","tempL":25,"tempH":26,"humL":"","humH":""},{"cropId":"VG06","name":"Maize","waterL":500,"waterH":800,"periodL":80,"periodH":110,"phL":5.8,"phH":6.8,"season":"K","tempL":18,"tempH":27,"humL":"","humH":""},{"cropId":"VG07","name":"Onion","waterL":350,"waterH":550,"periodL":70,"periodH":95,"phL":5.5,"phH":6.5,"season":"KR","tempL":20,"tempH":25,"humL":"","humH":""},{"cropId":"VG08","name":"Pea","waterL":350,"waterH":500,"periodL":60,"periodH":70,"phL":5.8,"phH":7,"season":"R","tempL":12,"tempH":21,"humL":"","humH":""},{"cropId":"VG09","name":"Potato","waterL":500,"waterH":700,"periodL":75,"periodH":120,"phL":4.8,"phH":5.5,"season":"R","tempL":15,"tempH":21,"humL":"","humH":""},{"cropId":"VG10","name":"Ragi","waterL":400,"waterH":450,"periodL":90,"periodH":150,"phL":4.5,"phH":8,"season":"K","tempL":20,"tempH":40,"humL":"","humH":""},{"cropId":"VG11","name":"Rice","waterL":900,"waterH":2500,"periodL":90,"periodH":150,"phL":5,"phH":8,"season":"K","tempL":20,"tempH":27,"humL":"","humH":""},{"cropId":"VG12","name":"Sorghum","waterL":450,"waterH":650,"periodL":120,"periodH":130,"phL":6,"phH":7.5,"season":"K","tempL":26,"tempH":30,"humL":"","humH":""},{"cropId":"VG13","name":"Millet","waterL":450,"waterH":650,"periodL":105,"periodH":140,"phL":5.8,"phH":6.5,"season":"K","tempL":15,"tempH":20,"humL":"","humH":""},{"cropId":"VG14","name":"Soybean","waterL":450,"waterH":700,"periodL":135,"periodH":150,"phL":6,"phH":7,"season":"K","tempL":25,"tempH":30,"humL":"","humH":""},{"cropId":"VG15","name":"Tomato","waterL":600,"waterH":800,"periodL":50,"periodH":80,"phL":6,"phH":6.8,"season":"R","tempL":18,"tempH":30,"humL":"","humH":""},{"cropId":"VG16","name":"Wheat","waterL":450,"waterH":650,"periodL":120,"periodH":150,"phL":6,"phH":7,"season":"R","tempL":21,"tempH":24,"humL":"","humH":""}]')},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);a(32),a(33);var r=a(17),n=a(27),o=a(13),c=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):r.c)(Object(r.a)(n.a)),s=function(){try{var e=localStorage.getItem("projectkisaanstate");if(null===e)return;return JSON.parse(e)}catch(t){return}}()||{},i=Object(r.d)((function(e,t){switch(t.type){case"LOGIN_FAILED":return alert("No such user found. Check your email and password again."),Object(o.a)({},e,{user:""});case"LOGIN_SUCCESS":return Object(o.a)({},e,{user:t.payload});case"LOGOUT":return Object(o.a)({},e,{user:""});case"FIELDS_RETRIEVAL_SUCCESS":return Object(o.a)({},e,{fields:t.payload});case"FIELDS_RETRIEVAL_FAILED":return e;case"CROPS_RETRIEVAL_SUCCESS":return Object(o.a)({},e,{crops:t.payload});case"CROPS_RETRIEVAL_FAILED":return e;case"FIELD_ADD_SUCCESS":var a=e.fields.concat(t.payload);return Object(o.a)({},e,{fields:a});case"FIELD_ADD_FAILED":return e;case"CROP_ADD_SUCCESS":var r=e.crops.concat(t.payload);return Object(o.a)({},e,{crops:r});case"CROP_ADD_FAILED":return e;case"FIELD_REMOVAL_SUCCESS":var n=e.fields.filter((function(e){return e.fieldResId!==t.payload}));return Object(o.a)({},e,{fields:n});case"FIELD_REMOVAL_FAILED":return e;case"CROP_REMOVAL_SUCCESS":var c=e.crops.filter((function(e){return e.cropId!==t.payload}));return Object(o.a)({},e,{crops:c});case"CROP_REMOVAL_FAILED":default:return e}}),s,c),u=a(14),l=a(0),p=a.n(l),m=a(20),d=a.n(m),h=a(4),f=a(5),E=a(7),b=a(6),g=a(11),y=a(1),L=a.n(y),v=a(3),w="https://project-kisaan-graphql-server.herokuapp.com/graphql",I="http://api.agromonitoring.com/agro/1.0/polygons",S=function(){var e=Object(v.a)(L.a.mark((function e(t,a){var r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"query login($email: String, $password: String){login(email: $email, password: $password){name photo email}}",r={email:t,password:a},e.abrupt("return",(function(e){fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"query login($email: String, $password: String){login(email: $email, password: $password){name photo email}}",variables:r})}).then((function(e){return e.json()})).then((function(t){t.data.login?e({type:"LOGIN_SUCCESS",payload:t.data.login}):e({type:"LOGIN_FAILED"})})).catch((function(t){console.log("error while loggin in",t),e({type:"LOGIN_FAILED"})}))}));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),O=function(){var e=Object(v.a)(L.a.mark((function e(t){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"query fields($email: String){fields(email: $email){fieldResId data{name geo_json{features{geometry{coordinates}}}}}}",a={email:t},e.abrupt("return",(function(e){fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"query fields($email: String){fields(email: $email){fieldResId data{name geo_json{features{geometry{coordinates}}}}}}",variables:a})}).then((function(e){return e.json()})).then((function(t){t.data.fields?e({type:"FIELDS_RETRIEVAL_SUCCESS",payload:t.data.fields}):e({type:"FIELDS_RETRIEVAL_FAILED"})})).catch((function(t){console.log("error while retrieving fields",t),e({type:"FIELDS_RETRIEVAL_FAILED"})}))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(v.a)(L.a.mark((function e(t){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"query crops($email: String){crops(email: $email){cropId name cropResId}}",a={email:t},e.abrupt("return",(function(e){fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"query crops($email: String){crops(email: $email){cropId name cropResId}}",variables:a})}).then((function(e){return e.json()})).then((function(t){t.data.crops?e({type:"CROPS_RETRIEVAL_SUCCESS",payload:t.data.crops}):e({type:"CROPS_RETRIEVAL_FAILED"})})).catch((function(t){console.log("error while retrieving crops",t),e({type:"CROPS_RETRIEVAL_FAILED"})}))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(v.a)(L.a.mark((function e(t,a,r){var n,o;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"mutation addCrop($owner: String, $cropId: String, $cropResId: String, $name: String){createCrop(owner: $owner, cropId: $cropId, name: $name, cropResId: $cropResId){cropResId cropId}}",n="".concat(t,":crops:").concat(a),o={cropId:a,name:r,owner:t,cropResId:n},e.abrupt("return",(function(e){fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"mutation addCrop($owner: String, $cropId: String, $cropResId: String, $name: String){createCrop(owner: $owner, cropId: $cropId, name: $name, cropResId: $cropResId){cropResId cropId}}",variables:o})}).then((function(e){return e.json()})).then((function(t){t.data.createCrop.cropId?e({type:"CROP_ADD_SUCCESS",payload:{cropId:a,name:r}}):e({type:"CROP_ADD_FAILED"})})).catch((function(t){console.log("error while adding crop",t),e({type:"CROP_ADD_FAILED"})}))}));case 4:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),j=function(){var e=Object(v.a)(L.a.mark((function e(t,a){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(function(e){R(a).then((function(r){var n="".concat(t,":fields:").concat(r.id);delete a.geo_json.features[0].properties;var o={fieldResId:n,owner:t,data:a};fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"mutation addField($owner: String, $data: FieldInputData, $fieldResId: String){createField(owner: $owner, data: $data, fieldResId: $fieldResId){fieldResId data{name geo_json{features{geometry{coordinates}}}}}}",variables:o})}).then((function(e){return e.json()})).then((function(t){t.data.createField.data?e({type:"FIELD_ADD_SUCCESS",payload:t.data.createField}):e({type:"FIELD_ADD_FAILED"})})).catch((function(t){console.log("error while adding field to db",t),e({type:"FIELD_ADD_FAILED"})}))})).catch((function(t){console.log("error while adding field to api",t),e({type:"FIELD_ADD_FAILED"})}))}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),N=function(){var e=Object(v.a)(L.a.mark((function e(t,a){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(function(e){F(a).then((function(){var r="".concat(t,":fields:").concat(a),n={fieldResId:r};fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"mutation deleteField($fieldResId: String){removeField(fieldResId: $fieldResId)}",variables:n})}).then((function(e){return e.json()})).then((function(t){t.data.removeField?e({type:"FIELD_REMOVAL_SUCCESS",payload:r}):e({type:"FIELD_REMOVAL_FAILED"})})).catch((function(e){console.log("error while deleting field",e)}))})).catch((function(e){console.log("error while deleting field from api",e)}))}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),_=function(){var e=Object(v.a)(L.a.mark((function e(t,a){var r,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"mutation deleteCrop($cropResId: String){removeCrop(cropResId: $cropResId)}",r="".concat(t,":crops:").concat(a),n={cropResId:r},e.abrupt("return",(function(e){fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"mutation deleteCrop($cropResId: String){removeCrop(cropResId: $cropResId)}",variables:n})}).then((function(e){return e.json()})).then((function(t){t.data.removeCrop?e({type:"CROP_REMOVAL_SUCCESS",payload:a}):e({type:"CROP_REMOVAL_FAILED"})})).catch((function(e){console.log("error while deleting crop",e)}))}));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),R=function(e){return new Promise((function(t,a){fetch("".concat(I,"?appid=83e9d92cb19c29c0045da2e0282321f5"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(){var e=Object(v.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(alert(t.ok),!t.ok){e.next=5;break}return e.abrupt("return",t.json());case 5:console.log("error while adding field to agro",t.statusText),a(t.statusText);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){t(e)}))}))},F=function(e){return new Promise((function(t,a){fetch("".concat(I,"/").concat(e,"?appid=83e9d92cb19c29c0045da2e0282321f5"),{method:"DELETE"}).then((function(e){alert(e.ok),e.ok?t():(alert(e.response),console.log("error while deleting field from agro",e.statusText),a(e.statusText))}))}))},A=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n)))._handleLogout=function(){localStorage.setItem("projectkisaanstate",""),i.dispatch((function(e){e({type:"LOGOUT"})}))},e}return Object(f.a)(a,[{key:"render",value:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"header"},p.a.createElement("div",{className:"home-menu pure-menu pure-menu-horizontal pure-menu-fixed pure-menu-scrollable"},p.a.createElement("a",{className:"pure-menu-heading",href:"#"},p.a.createElement("img",{alt:"Logo",src:"img/logo-16.png"}),"\xa0",p.a.createElement("strong",null,"Project Kisaan")," - Team EDGE"),p.a.createElement("ul",{className:"pure-menu-list"},p.a.createElement(g.a,null,p.a.createElement("li",{className:"pure-menu-item pure-menu-selected"},p.a.createElement(g.b,{to:"/",className:"pure-menu-link"},"Home")),this.props.user?p.a.createElement(p.a.Fragment,null,p.a.createElement("li",{className:"pure-menu-item"},p.a.createElement(g.b,{to:"/dashboard",className:"pure-menu-link"},"Dashboard")),p.a.createElement("li",{className:"pure-menu-item"},p.a.createElement(g.b,{to:"/chat",className:"pure-menu-link"},"Chat")),p.a.createElement("li",{className:"pure-menu-item"},p.a.createElement(g.b,{to:"/configure",className:"pure-menu-link"},"Configure"))):"",p.a.createElement("li",{className:"pure-menu-item"},p.a.createElement(g.b,{to:"/faq",className:"pure-menu-link"},"Assistance/FAQs")))))),p.a.createElement("div",{className:"footer l-box is-center"},this.props.user?p.a.createElement(p.a.Fragment,null,"Welcome ",this.props.user.name," (",this.props.user.email,"). Click here to ",p.a.createElement("a",{href:"#",onClick:this._handleLogout},"logout")):p.a.createElement(p.a.Fragment,null,"You're not logged in.")))}}]),a}(p.a.Component);var D=Object(u.b)((function(e){return{user:e.user}}))(A),k=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={email:"",password:"",busy:!1},e._handleLoginSubmit=function(){var t=Object(v.a)(L.a.mark((function t(a){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),e.setState({busy:!0}),t.t0=i,t.next=5,S(e.state.email,e.state.password);case 5:return t.t1=t.sent,t.t0.dispatch.call(t.t0,t.t1),t.next=9,e.count(1e3);case 9:e.setState({busy:!1,email:"",password:""});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e._handleEmailChange=function(t){e.setState({email:t.target.value})},e._handlePasswordChange=function(t){e.setState({password:t.target.value})},e.count=function(){var e=Object(v.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout((function(){e()}),t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e}return Object(f.a)(a,[{key:"render",value:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"splash-container"},p.a.createElement("div",{className:"splash"},p.a.createElement("h1",{className:"splash-head"},p.a.createElement("img",{alt:"Splash",src:"img/logo-128.png"})),p.a.createElement("div",{className:"splash-subhead"},p.a.createElement("strong",null,"Project Kisaan"),", because everyone is a farmer by heart."))),p.a.createElement("div",{className:"content-wrapper"},p.a.createElement("div",{className:"content"},p.a.createElement("h2",{className:"content-head is-center"},"Features"),p.a.createElement("div",{className:"pure-g"},p.a.createElement("div",{className:"l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"},p.a.createElement("h3",{className:"content-subhead"},p.a.createElement("i",{className:"fa fa-cogs"}),"IoT Based"),p.a.createElement("p",null,"AgriBot is a IoT based robot which keeps an eye over your fields and crops and keeps you updated.")),p.a.createElement("div",{className:"l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"},p.a.createElement("h3",{className:"content-subhead"},p.a.createElement("i",{className:"fa fa-users"}),"User Friendly"),p.a.createElement("p",null,"( The AgriBot and Project Kisaan web application requires almost negligible input which makes it very user friendly.")),p.a.createElement("div",{className:"l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"},p.a.createElement("h3",{className:"content-subhead"},p.a.createElement("i",{className:"fa fa-eye"}),"Crop Saviour"),p.a.createElement("p",null,"AgriBot comes with a rotatable high-res camera which enables it to detect insects and diseases very accurately.")),p.a.createElement("div",{className:"l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4"},p.a.createElement("h3",{className:"content-subhead"},p.a.createElement("i",{className:"fa fa-info"}),"Lifetime Assistance"),p.a.createElement("p",null,"Project Kisaan team would be very happy to help you anytime anywhere until it's alive.")))),p.a.createElement("div",{className:"content"},p.a.createElement("h2",{className:"content-head is-center"},this.props.user?"More information...":"Login to continue..."),p.a.createElement("div",{className:"pure-g"},p.a.createElement("div",{className:"l-box-lrg pure-u-1 pure-u-md-2-5"},this.props.user?p.a.createElement("form",{className:"pure-form pure-form-stacked"},p.a.createElement("div",{className:"avatar-container"},p.a.createElement("img",{src:this.props.user.photo,className:"avatar",alt:"Avatar"})),p.a.createElement("fieldset",null,p.a.createElement("label",{htmlFor:"email"},"Your Email"),p.a.createElement("input",{id:"email",type:"email",value:this.props.user.email,readOnly:!0}),p.a.createElement("label",{htmlFor:"name"},"Your Name"),p.a.createElement("input",{id:"name",type:"text",value:this.props.user.name,readOnly:!0}))):p.a.createElement("form",{className:"pure-form pure-form-stacked",onSubmit:this._handleLoginSubmit},p.a.createElement("fieldset",null,p.a.createElement("label",{htmlFor:"email"},"Your Email"),p.a.createElement("input",{id:"email",type:"email",value:this.state.email,onChange:this._handleEmailChange,placeholder:"mark@example.com",required:!0}),p.a.createElement("label",{htmlFor:"password"},"Your Password"),p.a.createElement("input",{id:"password",type:"password",value:this.state.password,onChange:this._handlePasswordChange,placeholder:"*****",required:!0}),this.state.busy?p.a.createElement("button",{type:"submit",className:"pure-button pure-button-disabled"},p.a.createElement("i",{className:"fa fa-spin fa-spinner","aria-hidden":"true"}),"\xa0Wait"):p.a.createElement("button",{type:"submit",className:"pure-button"},"Login")),p.a.createElement("p",null,"Trouble logging in? ",p.a.createElement(g.b,{to:"/recovery"},"Help")))),p.a.createElement("div",{className:"l-box-lrg pure-u-1 pure-u-md-3-5"},p.a.createElement("h4",null,"Contact Us"),p.a.createElement("p",null,"Our team is there to help you 24x7. You can clear your questions or doubts in our ",p.a.createElement("a",{href:"#"},"Assistance/FAQs")," section. More more information, you can mail us at ",p.a.createElement("a",{href:"mailto:help.projectkisaan@mail.com"},"help.projectkisaan@mail.com"),"."),p.a.createElement("h4",null,"Interested in AgriBot?"),p.a.createElement("p",null,"You can express your interest for purchasing AgriBot by writing to us at ",p.a.createElement("a",{href:"mailto:purchase.projectkisaan@mail.com"},"purchase.projectkisaan@mail.com"),"."))))))}}]),a}(p.a.Component);var x=Object(u.b)((function(e){return{user:e.user}}))(k),T=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return p.a.createElement("div",null,"Dashboard")}}]),a}(p.a.Component),$=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return p.a.createElement("div",null,"Chat")}}]),a}(p.a.Component),P=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return p.a.createElement("div",null,"FAQ")}}]),a}(p.a.Component),V=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return p.a.createElement("div",null,"Recovery")}}]),a}(p.a.Component),G=a(30),q=a.n(G),U=a(44),K=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(e){var r;return Object(h.a)(this,a),(r=t.call(this,e)).state={busyAddingCrop:!1,busyDeletingCrop:!1,busyAddingField:!1,busyDeletingField:!1,selectedCrop:"FR01",fieldGeoJSON:{},fieldName:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)},r._handleChangeCropSelection=function(e){r.setState({selectedCrop:e.target.value})},r._handleAddCrop=function(){var e=Object(v.a)(L.a.mark((function e(t){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r.setState({busyAddingCrop:!0}),a=U.filter((function(e){return e.cropId===r.state.selectedCrop})),e.next=5,r.props.addCrop(r.props.user.email,r.state.selectedCrop,a[0].name);case 5:return e.next=7,r.count(5e3);case 7:r.setState({busyAddingCrop:!1});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r._handleAddField=Object(v.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.setState({busyAddingField:!0}),e.next=3,r.props.addField(r.props.user.email,r.state.fieldGeoJSON);case 3:return e.next=5,r.count(6500);case 5:r.setState({busyAddingField:!1});case 6:case"end":return e.stop()}}),e)}))),r.deleteField=function(){var e=Object(v.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.setState({busyDeletingField:!0}),e.next=3,r.props.removeField(r.props.user.email,t);case 3:return e.next=5,r.count(5e3);case 5:r.setState({busyDeletingField:!1});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.deleteCrop=function(){var e=Object(v.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.setState({busyDeletingCrop:!0}),e.next=3,r.props.removeCrop(r.props.user.email,t);case 3:return e.next=5,r.count(5e3);case 5:r.setState({busyDeletingCrop:!1});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.count=function(){var e=Object(v.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout((function(){e()}),t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.provider={osm:function(e,t,a){var r=String.fromCharCode(97+(e+t+a)%3);return"https://".concat(r,".tile.openstreetmap.org/").concat(a,"/").concat(e,"/").concat(t,".png")},wikimedia:function(e,t,a,r){return"https://maps.wikimedia.org/osm-intl/".concat(a,"/").concat(e,"/").concat(t).concat(r>=2?"@2x":"",".png")},stamen:function(e,t,a,r){return"https://stamen-tiles.a.ssl.fastly.net/terrain/".concat(a,"/").concat(e,"/").concat(t).concat(r>=2?"@2x":"",".jpg")}},r._handleMapBoundChange=function(e){var t=e.bounds.ne,a=e.bounds.sw,n=[a[0],t[1]],o=[t[0],a[1]],c={name:r.state.fieldName,geo_json:{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[a,o,t,n,a]]}}]}};r.setState({fieldGeoJSON:c})},r.props.retrieveCrops(r.props.user.email),r.props.retrieveFields(r.props.user.email),r}return Object(f.a)(a,[{key:"render",value:function(){var e=this;return p.a.createElement("div",{className:"configure-container"},p.a.createElement("div",{id:"fieldsSection"},p.a.createElement("label",null,"Fields Section"),p.a.createElement("div",{className:"pure-g"},p.a.createElement("div",{className:"l-box-lrg pure-u-1 pure-u-md-1-2 map"},p.a.createElement(q.a,{center:[28.946755,77.726754],animate:!0,zoom:12,height:300,onBoundsChanged:this._handleMapBoundChange,provider:this.provider.osm}),p.a.createElement("span",{className:"pure-form-message"},"Zoom to your fields (maximum 3000 Ha) and click on button below."),this.state.busyAddingField?p.a.createElement("button",{className:"pure-button pure-button-disabled"},p.a.createElement("i",{className:"fa fa-spin fa-spinner"}),"\xa0Wait"):p.a.createElement("button",{className:"pure-button",onClick:this._handleAddField},"Add Field")),p.a.createElement("div",{className:"l-box-lrg pure-u-1 pure-u-md-1-2"},p.a.createElement("table",{className:"pure-table pure-table-bordered"},p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",null,"Field Id"),p.a.createElement("th",null,"Field Location"),p.a.createElement("th",null))),p.a.createElement("tbody",null,this.props.fields.length?this.props.fields.map((function(t){var a=t.fieldResId.lastIndexOf(":"),r=t.fieldResId.substring(a+1),n=t.data.geo_json.features[0].geometry.coordinates[0][0],o=t.data.geo_json.features[0].geometry.coordinates[0][2];return p.a.createElement("tr",{key:t.fieldResId},p.a.createElement("td",null,r),p.a.createElement("td",null,n[0]+"\n"+n[1]+"\n"+o[0]+"\n"+o[1]),p.a.createElement("td",null,e.state.busyDeletingField?p.a.createElement("i",{className:"fa pure-button-disabled fa-trash-o"}):p.a.createElement("i",{onClick:function(){return e.deleteField(r)},className:"deleteIcon fa fa-trash-o"})))})):p.a.createElement("tr",null,p.a.createElement("td",{colSpan:3},"No fields yet."))))))),p.a.createElement("section",{id:"cropsSection"},p.a.createElement("label",null,"Crops Section"),p.a.createElement("div",{className:"pure-g"},p.a.createElement("div",{className:"l-box-lrg pure-u-1 pure-u-md-1-2"},p.a.createElement("form",{className:"pure-form",onSubmit:this._handleAddCrop},p.a.createElement("fieldset",null,p.a.createElement("select",{id:"state",value:this.state.selectedCrop,onChange:this._handleChangeCropSelection},U.map((function(e){return p.a.createElement("option",{key:e.cropId,value:e.cropId},e.name)}))),"\xa0",this.state.busyAddingCrop?p.a.createElement("button",{type:"submit",className:"pure-button pure-button-disabled"},p.a.createElement("i",{className:"fa fa-spin fa-spinner"}),"\xa0Wait"):p.a.createElement("button",{type:"submit",className:"pure-button"},"Add Crop")))),p.a.createElement("div",{className:"l-box-lrg pure-u-1 pure-u-md-1-2"},p.a.createElement("table",{className:"pure-table pure-table-bordered"},p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",null,"Crop Id"),p.a.createElement("th",null,"Crop Name"),p.a.createElement("th",null))),p.a.createElement("tbody",null,this.props.crops.length?this.props.crops.map((function(t){return p.a.createElement("tr",{key:t.cropId},p.a.createElement("td",null,t.cropId),p.a.createElement("td",null,t.name),p.a.createElement("td",null,e.state.busyDeletingCrop?p.a.createElement("i",{className:"fa pure-button-disabled fa-trash-o"}):p.a.createElement("i",{onClick:function(){return e.deleteCrop(t.cropId)},className:"deleteIcon fa fa-trash-o"})))})):p.a.createElement("tr",null,p.a.createElement("td",{colSpan:3},"No crops yet."))))))))}}]),a}(p.a.Component),M=Object(u.b)((function(e){return{user:e.user,fields:e.fields,crops:e.crops,last:e.last}}),(function(e){return{addCrop:function(){var t=Object(v.a)(L.a.mark((function t(a,r,n){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,H(a,r,n);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e,a,r){return t.apply(this,arguments)}}(),removeCrop:function(){var t=Object(v.a)(L.a.mark((function t(a,r){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,_(a,r);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),addField:function(){var t=Object(v.a)(L.a.mark((function t(a,r){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,j(a,r);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),removeField:function(){var t=Object(v.a)(L.a.mark((function t(a,r){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,N(a,r);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),retrieveCrops:function(){var t=Object(v.a)(L.a.mark((function t(a){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,C(a);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),retrieveFields:function(){var t=Object(v.a)(L.a.mark((function t(a){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,O(a);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(K),J=(a(45),a(15)),B=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return p.a.createElement(p.a.Fragment,null,p.a.createElement(D,null),p.a.createElement(g.a,null,p.a.createElement(J.a,{exact:!0,path:"/",render:function(){return p.a.createElement(x,null)}}),p.a.createElement(J.a,{path:"/dashboard",render:function(){return p.a.createElement(T,null)}}),p.a.createElement(J.a,{path:"/chat",render:function(){return p.a.createElement($,null)}}),p.a.createElement(J.a,{path:"/faq",render:function(){return p.a.createElement(P,null)}}),p.a.createElement(J.a,{path:"/recovery",render:function(){return p.a.createElement(V,null)}}),p.a.createElement(J.a,{path:"/configure",render:function(){return p.a.createElement(M,null)}})))}}]),a}(p.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("projectkisaanstate",t)}catch(a){console.log(a)}}(i.getState())})),d.a.render(p.a.createElement(u.a,{store:i},p.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.13458d03.chunk.js.map