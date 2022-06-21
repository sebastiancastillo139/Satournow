(function(){"use strict";var t={9887:function(t,e,a){var s=a(8935),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("NavbarCompBV"),a("router-view"),a("FooterComp")],1)},o=[],i=a(6926),n=a(4665),l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{"d-flex":"","flex-column":"","min-vh-100":""}},[s("footer",{staticClass:"footer-cont"},[s("img",{staticClass:"d-inline-block saturn-icon",attrs:{src:a(4749)}}),s("p",{staticClass:"m-0"},[t._v("Este proyecto fue elaborado por: Sebastián Castillo y María Jesús Petour")])])])}],u={name:"FooterComp"},d=u,m=a(1001),v=(0,m.Z)(d,l,c,!1,null,"94b1ef86",null),p=v.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-navbar",{staticClass:"nav_comp fixed-top",attrs:{toggleable:"lg",type:"dark"}},[s("a",{staticClass:"navbar-brand"},[s("img",{staticClass:"d-inline-block align-middle saturn-icon mx-3",attrs:{src:a(4749),alt:"Kitten",fluid:""}})]),s("b-navbar-brand",{staticClass:"mx-4",attrs:{to:"/"}},[t._v("SA-TOUR-NOW!")]),s("b-navbar-toggle",{staticClass:"toggle_menu m-3",attrs:{target:"nav-collapse"}}),s("b-collapse",{staticClass:"navbar-nav m-0",attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",[s("b-nav-item",{attrs:{to:"/tours"}},[t._v("Tours Disponibles")]),s("b-nav-item",{attrs:{to:"/users"}},[t._v("Menú de Turistas")])],1),s("b-navbar-nav",{staticClass:"ml-auto"},[0!=t.activeUser?s("b-button",{staticClass:"my-2 my-sm-0",attrs:{variant:"light",size:"sm",type:"submit",disabled:""}},[t._v(t._s(t.activeUser.email))]):t._e(),0!=t.activeUser?s("b-button",{staticClass:"my-2 mx-2 my-sm-0",attrs:{variant:"warning",size:"sm",type:"submit",to:"/"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.logOutUser.apply(null,arguments)}}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-right-from-bracket"}})],1):t._e(),0==t.activeUser?s("div",{staticClass:"d-inline"},[s("LogInModal",{staticClass:"d-inline"}),s("SignUpModal",{staticClass:"d-inline"})],1):t._e()],1)],1)],1)],1)},f=[],b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"LogInModal",expression:"'LogInModal'"}],staticClass:"nav_btn btn_yellow",attrs:{variant:"warning",size:"sm",type:"submit"},on:{click:t.resetUserPassCheck}},[t._v("Ingresa")]),a("b-modal",{ref:"modal",attrs:{id:"LogInModal",title:"Ingresa a Sa-Tour-Now!","body-bg-variant":"dark","body-text-variant":"light","header-bg-variant":"dark","header-text-variant":"light","hide-footer":"","hide-header-close":""}},[a("form",{ref:"form"},[!1===t.getUserPassCheck?a("h2",{staticClass:"btn btn-danger"},[t._v("USUARIO Y/O CONTRASEÑA NO RECONOCIDOS")]):t._e(),a("b-form-group",{attrs:{label:"Usuario","label-for":"Usuario-input","invalid-feedback":"Se requiere un usuario válido"}},[a("b-form-input",{staticClass:"form-control",attrs:{type:"email",id:"LogInComponent_Username","aria-describedby":"emailHelp",required:""},on:{input:t.setUsername,focus:t.resetUserPassCheck}})],1),a("b-form-group",{attrs:{label:"Contraseña","label-for":"Password-input","invalid-feedback":"Se requiere una contraseña"}},[a("b-form-input",{staticClass:"form-control",attrs:{type:"password",id:"LogInComponent_Password",required:""},on:{input:t.setPassword,focus:t.resetUserPassCheck}})],1)],1),a("div",{staticStyle:{"text-align":"end","margin-top":"1rem"}},[a("b-button",{staticClass:"sign_btn",on:{click:function(e){e.preventDefault(),t.logInUser(),t.hideModal}}},[t._v("Ingresar")])],1)])],1)},g=[],_={name:"LogInModal",props:{id:String},methods:{...(0,n.nv)(["setUsername","setPassword","logInUser","resetUserPassCheck"]),showModal(){this.$refs["my-modal"].show()},hideModal(){this.$refs["LogInModal"].hide()},toggleModal(){this.$refs["my-modal"].toggle("#toggle-btn")}},computed:{...(0,n.Se)(["getUsername","getPassword","getUserPassCheck"])},beforeMount(){this.resetUserPassCheck}},C=_,y=(0,m.Z)(C,b,g,!1,null,"c5230e32",null),w=y.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"SignUpModal",expression:"'SignUpModal'"}],staticClass:"nav_btn btn_yellow",attrs:{variant:"warning",size:"sm",type:"submit"}},[t._v(" Regístrate ")]),a("b-modal",{ref:"modal",attrs:{id:"SignUpModal",title:"Regístrate a Sa-Tour-Now!","hide-footer":"","body-bg-variant":"dark","body-text-variant":"light","header-bg-variant":"dark","header-text-variant":"light","hide-header-close":""}},[a("form",{ref:"form"},[!1===this.validEmail?a("p",{staticClass:"btn btn-danger"},[t._v(" INGRESE CORREO ELECTRÓNICO Y/O CONTRASEÑA VÁLIDO ")]):t._e(),!0===this.userAlready?a("p",{staticClass:"btn btn-info"},[t._v(" USUARIO YA EXISTE EN BASE DE DATOS ")]):t._e(),a("b-form-group",{attrs:{"label-for":"Usuario-DatosPersonales"}},[a("b-form-input",{staticClass:"form-control my-3",attrs:{placeholder:"Nombre",type:"text",id:"SignInComp_firstName","aria-describedby":"emailHelp",required:""},model:{value:t.user.firstName,callback:function(e){t.$set(t.user,"firstName",e)},expression:"user.firstName"}}),a("b-form-input",{staticClass:"form-control my-3",attrs:{placeholder:"Apellido",type:"text",id:"SignInComp_lastName","aria-describedby":"emailHelp",required:""},model:{value:t.user.lastName,callback:function(e){t.$set(t.user,"lastName",e)},expression:"user.lastName"}})],1),a("b-form-group",{attrs:{"label-for":"Usuario-input"}},[a("b-form-input",{staticClass:"form-control my-3",attrs:{placeholder:"Correo electrónico",type:"email",id:"LogInComponent_Username","aria-describedby":"emailHelp",required:""},on:{click:function(e){t.validEmail=!0,t.userAlready=!1}},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),a("b-form-group",{attrs:{"label-for":"Password-input"}},[a("b-form-input",{staticClass:"form-control my-3 mb-0",attrs:{placeholder:"Contraseña",type:"password",id:"LogInComponent_Password",required:""},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),t.user.password.length<=7?a("p",{staticClass:"reminder"},[t._v(" *La contraseña debe tener mínimo 8 caracteres ")]):t._e()],1)],1),a("div",{staticStyle:{"text-align":"end","margin-top":"1rem"}},[a("b-button",{staticClass:"sign_btn",attrs:{variant:"outline-primary"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.SignUpUser.apply(null,arguments)}}},[t._v("Guardar datos")])],1)])],1)},k=[],U=a(3214),D={name:"SignUpComp",data(){return{user:{email:"",password:"",firstName:"",lastName:"",validEmail:!0},validEmail:!0,userAlready:!1}},props:{id:String},computed:{...(0,n.rn)(["myFirestore"])},methods:{async SignUpUser(){this.validEmail=!0,this.userAlready=!1;try{const{email:t,password:e,firstName:a,lastName:s}=this.user,r=(0,U.v0)();/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(t)&&e.length>=8?(await(0,U.Xb)(r,t,e),await(0,i.ET)((0,i.hJ)(this.myFirestore,"saturnousers"),{userFirstName:a,userLastName:s,user_email:t}),this.$router.push("/tours")):(console.log("Ingrese correo válido"),this.validEmail=!1)}catch{console.log("Este usuario ya existe"),this.userAlready=!0}}}},T=D,x=(0,m.Z)(T,S,k,!1,null,"feb50c7e",null),E=x.exports,N={name:"NavbarComp",computed:{...(0,n.Se)(["activeUser"]),logInSignUpComp(t){return console.log(t),0!=t?"d-block":"d-none"}},methods:{...(0,n.nv)(["logOutUser"])},beforeMount(){this.activeUser},components:{LogInModal:w,SignUpModal:E}},F=N,I=(0,m.Z)(F,h,f,!1,null,"0c6a74dd",null),A=I.exports,O={name:"App",components:{FooterComp:p,NavbarCompBV:A},methods:{...(0,n.nv)(["instanceFirestore","getTours","getUsers","callOnemiData","callBaikonurData","callSpaceLaunchData"]),initFirestore(){this.instanceFirestore(i.ad)}},computed:{...(0,n.Se)(["getOnemiData","getBaikonurData","getSpaceLaunchData"])},created(){this.initFirestore()},beforeMount(){this.getTours(),this.getUsers(),this.callOnemiData(),this.callBaikonurData(),this.callSpaceLaunchData()}},L=O,P=(0,m.Z)(L,r,o,!1,null,null,null),M=P.exports,R=a(2809),$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("WeatherModal",{attrs:{weatherData:t.getBaikonurData}}),s("header",{staticClass:"header_container"},[s("video",{attrs:{id:"background-video",autoplay:"",loop:"",muted:""},domProps:{muted:!0}},[s("source",{attrs:{src:a(2413),type:"video/mp4"}})]),s("b-jumbotron",{staticClass:"hero_img content",attrs:{header:"¡Bienvenido a Sa-tour-now!",lead:"Encuentra toda la información sobre qué hacer en Saturno"}},[s("div",{staticClass:"text-center align-text-bottom arrow_icon"},[s("a",{staticClass:"arrow_link",attrs:{href:"#tours_destacados"}},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-angles-down",size:"4x"}})],1)])])],1),s("section",{staticClass:"main-section"},[s("b-container",{attrs:{id:"tours_destacados"}},[s("h2",{staticClass:"title"},[t._v("NUESTROS TOURS DESTACADOS")]),s("HomeTour",{attrs:{listTours:t.getHighlightedTours}}),s("div",{staticClass:"text-center"},[s("b-button",{staticClass:"btn_tours",attrs:{to:"/tours"}},[t._v("Ver todos los tours")])],1)],1)],1),s("TypeForm")],1)},q=[],B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.listTours,(function(e,s){return a("div",{key:s,staticClass:"row py-5 tour_container"},[a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"img_container"},[a("img",{staticClass:"tour_img",attrs:{src:e.image_url,alt:""}})])]),a("div",{staticClass:"col-lg-8 desc_container"},[a("h2",[t._v(t._s(e.name))]),a("p",{staticClass:"m-0"},[t._v(" "+t._s(e.description))])])])})),0)},j=[],Z={name:"HomeTour",props:{listTours:Array}},V=Z,z=(0,m.Z)(V,B,j,!1,null,"23341378",null),H=z.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"text-center align-items-center input_section"},[a("h2",{staticClass:"title pt-0"},[t._v("¿Te gustaría recibir nuestro newsletter?")]),a("form",{staticClass:"input-group-lg d-flex justify-content-center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.subscriberEmail,expression:"subscriberEmail"}],staticClass:"form-control email_input",attrs:{type:"text",placeholder:"Ingresa tu correo","aria-label":"correo del usuario","aria-describedby":"button-addon2",required:""},domProps:{value:t.subscriberEmail},on:{input:function(e){e.target.composing||(t.subscriberEmail=e.target.value)}}}),a("b-alert",{staticClass:"position-fixed fixed-top m-0 rounded-0",staticStyle:{"z-index":"2000"},attrs:{variant:t.getAlertData.variant,show:t.dismissCountDown,fade:""},on:{"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.getAlertData.message)+" ")]),a("button",{on:{click:[function(e){return e.preventDefault(),t.activateNewsletterSub(t.subscriberEmail)},t.showAlert]}},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-right",size:"3x",inverse:""}})],1)],1)])])},K=[],G={name:"TypeForm",data(){return{subscriberEmail:void 0,dismissSecs:5,dismissCountDown:0}},computed:{...(0,n.Se)(["getAlertData"])},methods:{...(0,n.nv)(["activateNewsletterSub"]),countDownChanged(t){this.dismissCountDown=t},showAlert(){this.dismissCountDown=this.dismissSecs}}},W=G,X=(0,m.Z)(W,J,K,!1,null,"4ba104ac",null),Y=X.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{ref:"my-modal",attrs:{id:"modal-center",centered:"","body-bg-variant":"dark","body-text-variant":"light","header-bg-variant":"dark","header-text-variant":"light","hide-footer":""},scopedSlots:t._u([{key:"modal-header",fn:function(){return[t._v(" Meteorología // Cosmódromo de Baikonur "),a("button",{staticClass:"close_btn",on:{click:function(e){return t.$bvModal.hide("modal-center")}}},[a("font-awesome-icon",{staticClass:"ml-0 mr-auto",attrs:{cancel:"",icon:"fa-solid fa-xmark"}})],1)]},proxy:!0}])},[a("p",{staticClass:"my-4"},[a("font-awesome-icon",{staticClass:"mx-3",attrs:{size:"2x",icon:"fa-solid fa-temperature-half"}}),t._v("La temperatura actual es: "+t._s(t.weatherData.temperature))],1),a("p",{staticClass:"my-4"},[a("font-awesome-icon",{staticClass:"mx-3",attrs:{size:"2x",icon:"fa-solid fa-wind"}}),t._v("Los vientos llegan hasta los: "+t._s(t.weatherData.wind))],1),a("p",{staticClass:"my-4"},[a("font-awesome-icon",{staticClass:"mx-3",attrs:{size:"2x",icon:"fa-solid fa-plane-departure"}}),t._v("Condiciones para viajar a Saturno: Óptimas")],1)])],1)},tt=[],et={name:"WeatherModal",props:["weatherData"],methods:{showModal(){this.$refs["my-modal"].show()}},mounted(){this.showModal()}},at=et,st=(0,m.Z)(at,Q,tt,!1,null,"16ff44de",null),rt=st.exports,ot={name:"HomeView",components:{TypeForm:Y,HomeTour:H,WeatherModal:rt},computed:{...(0,n.Se)(["getHighlightedTours","getBaikonurData"])},methods:{showModal(){this.$refs["my-modal"].show()}},mounted(){this.showModal()}},it=ot,nt=(0,m.Z)(it,$,q,!1,null,"77c4a67b",null),lt=nt.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("FavouriteTable")],1)},ut=[],dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"main-section px-5 table-responsive"},[0==t.getFavouritesByUser.length?a("h2",{staticClass:"title"},[t._v("AL PARECER NO TIENES TOURS AGREGADOS A FAVORITOS")]):a("h1",{staticClass:"title"},[t._v("Tus tours favoritos")]),a("table",{staticClass:"table"},[t._m(0),t._l(t.getFavouritesByUser,(function(e,s){return a("tbody",{key:s,staticStyle:{color:"white"}},[a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" "+t._s(parseInt(s)+1)+" ")]),a("td",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"sidebar"+e.id,expression:"'sidebar'+tour.id"}]},[t._v(" "+t._s(e.name)+" ")]),a("td",{staticClass:"hide_sm"},[t._v(" "+t._s(e.available?"Si":"No")+" ")]),a("td",{staticClass:"hide_sm"},[t._v(t._s(e.vacancies))]),a("td",{staticClass:"hide_sm"},[t._v(" "+t._s(t.formatNumber(e.duration_hrs))+" horas ")]),a("td",{staticClass:"td_btn"},[a("SidebarComp",{staticClass:"col-3",attrs:{tourData:e}})],1),a("td",{staticClass:"td_btn"},[a("RequestModalComp",{attrs:{userEmail:t.activeUser.email,tourID:e.id,tourName:e.name}})],1),a("td",{staticClass:"td_btn"},[a("b-button",{staticClass:"btn_delete",on:{click:function(a){return a.preventDefault(),t.activateRemoveFromFavourites([t.activeUser.email,e.id])}}},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-trash"}})],1)],1)])])}))],2)])])},mt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticStyle:{color:"white"}},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Nombre")]),a("th",{staticClass:"hide_sm",attrs:{scope:"col"}},[t._v("Disponibilidad")]),a("th",{staticClass:"hide_sm",attrs:{scope:"col"}},[t._v("Vacantes")]),a("th",{staticClass:"hide_sm",attrs:{scope:"col"}},[t._v("Duración")]),a("th",{attrs:{colspan:"3",scope:"colgroup"}},[t._v("Acciones")])])])}],vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"sidebar"+t.tourData.id,expression:"'sidebar' + tourData.id"}],staticClass:"btn_info"},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-eye"}})],1),a("b-sidebar",{staticClass:"sidebar",attrs:{id:"sidebar"+t.tourData.id,title:t.tourData.name,shadow:"",right:"","bg-variant":"dark","text-variant":"light","no-header-close":"",backdrop:"true"}},[a("div",{staticClass:"px-3 py-2"},[a("p",[t._v(" "+t._s(t.tourData.description)+" ")]),a("b-img",{attrs:{src:t.tourData.image_url,fluid:"",thumbnail:""}})],1)])],1)},pt=[],ht={props:{tourData:Object}},ft=ht,bt=(0,m.Z)(ft,vt,pt,!1,null,"7be70df6",null),gt=bt.exports,_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"modal"+t.tourID,expression:"'modal' + tourID"}],staticClass:"btn_rqst"},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-circle-question"}})],1),a("b-modal",{attrs:{id:"modal"+t.tourID,centered:"",title:"Consultar información","body-bg-variant":"dark","body-text-variant":"light","header-bg-variant":"dark","header-text-variant":"light","footer-bg-variant":"dark","footer-text-variant":"light","hide-header-close":""},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var s=e.cancel;return[a("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(e){t.show=!1,t.activateRequestTourInfo([t.userEmail,t.tourID,t.tourName,t.tourRequestDescription])}}},[t._v(" Enviar solicitud ")]),a("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(t){return s()}}},[t._v(" Cancelar ")])]}}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("p",[t._v("A continuación ingrese lo que desea conocer del tour:")]),a("p",{staticClass:"fw-bolder"},[t._v(" "+t._s(t.tourName)+" ")]),a("b-form-input",{attrs:{placeholder:"Ingresa tu consulta"},model:{value:t.tourRequestDescription,callback:function(e){t.tourRequestDescription=e},expression:"tourRequestDescription"}})],1)],1)},Ct=[],yt={props:{userEmail:String,tourID:String,tourName:String},data(){return{tourRequestDescription:"",show:!1}},methods:{...(0,n.nv)(["activateRequestTourInfo"])}},wt=yt,St=(0,m.Z)(wt,_t,Ct,!1,null,"3642e8e6",null),kt=St.exports,Ut={name:"FavouriteTable",components:{SidebarComp:gt,RequestModalComp:kt},methods:{...(0,n.nv)(["activateRemoveFromFavourites","activateRequestTourInfo"]),formatNumber(t){return parseInt(t).toLocaleString("es-CL")}},computed:{...(0,n.Se)(["activeUser","getListTours","getFavouritesByUser","getUsername"])},beforeMount(){this.getListTours}},Dt=Ut,Tt=(0,m.Z)(Dt,dt,mt,!1,null,"37a6e5d6",null),xt=Tt.exports,Et={name:"UserView",components:{FavouriteTable:xt}},Nt=Et,Ft=(0,m.Z)(Nt,ct,ut,!1,null,null,null),It=Ft.exports,At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"card-container"},[a("h1",{staticClass:"title"},[t._v("TOURS SA-TOUR-NOW")]),a("ToursCard",{attrs:{listTours:t.listTours}})],1)])},Ot=[],Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 row pb-4 m-0"},[a("b-modal",{attrs:{"body-bg-variant":"dark","body-text-variant":"light","header-bg-variant":"dark","header-text-variant":"light",title:"Necesitas identificarte para continuar","hide-header-close":"","hide-footer":""},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[a("div",[a("div",{staticClass:"cont_mod"},[a("h3",{staticClass:"title"},[t._v("Si ya tienes cuenta:")]),a("LogInModal")],1),a("div",{staticClass:"cont_mod"},[a("h3",{staticClass:"title"},[t._v("Si aún no te registras puedes hacerlo aquí:")]),a("SignUpModal")],1)])]),t._l(t.listTours,(function(e,s){return a("div",{key:s,staticClass:"col-md-4 p-2"},[a("div",{staticClass:"card mx-4 my-2 card_container"},[0==e.available?a("div",{staticClass:"availability"},[a("p",[t._v("No disponible")])]):t._e(),a("div",{staticClass:"img_container_1"},[a("img",{staticClass:"card-img-top img-height img-fluid",attrs:{alt:"Imagen",src:e.image_url}}),a("button",{staticClass:"fav_btn",attrs:{type:"button"},on:{click:[function(a){return a.stopPropagation(),a.preventDefault(),t.checkLoggedUser([t.activeUser,t.activeUser.email,e.id])},t.showAlert]}},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-heart",size:"2x"}})],1),a("b-alert",{staticClass:"position-fixed fixed-bottom m-0 rounded-0",staticStyle:{"z-index":"2000"},attrs:{variant:"info",show:t.dismissCountDown,fade:""},on:{"dismiss-count-down":t.countDownChanged}},[t._v(" El tour ha sido agregado a tu favoritos. Para ver la lista completa haz "),a("router-link",{staticClass:"alert-link",attrs:{to:"/users"}},[t._v("click aquí")])],1)],1),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(" "+t._s(e.name)+" ")]),a("hr",{staticStyle:{color:"white"}}),a("ul",{staticClass:"list-group"},[a("li",{staticClass:"list-group-item"},[a("span",{staticStyle:{color:"rgb(238, 0, 238)"}},[t._v("Valor:")]),t._v(" "+t._s("$"+e.price_usd)+" USD. (Por persona) ")]),a("li",{staticClass:"list-group-item"},[a("span",{staticStyle:{color:"rgb(238, 0, 238)"}},[t._v("Duración:")]),t._v(" "+t._s(e.duration_hrs)+" horas ")]),a("li",{staticClass:"list-group-item"},[a("span",{staticStyle:{color:"rgb(238, 0, 238)"}},[t._v("Vacantes disponibles:")]),t._v(" "+t._s(e.vacancies-e.enrrolled)+" / "+t._s(e.vacancies)+" ")])])]),a("DetailsModal",{staticClass:"btn btn-primary seemore_btn p-0",attrs:{idKey:e.id,tour:e}})],1)])}))],2)},Pt=[],Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"modalDetails"+t.idKey,expression:"'modalDetails' + idKey"}],staticClass:"seemore_btn purple_btn"},[t._v("Ver más")]),a("b-modal",{attrs:{id:"modalDetails"+t.idKey,"body-bg-variant":"dark","body-text-variant":"light","header-bg-variant":"dark","header-text-variant":"light","hide-footer":""},scopedSlots:t._u([{key:"modal-header",fn:function(){return[t._v(" "+t._s(t.tour.name)+" "),a("button",{staticClass:"close_btn",on:{click:function(e){return t.$bvModal.hide("modalDetails"+t.idKey)}}},[a("font-awesome-icon",{staticClass:"ml-0 mr-auto",attrs:{cancel:"",icon:"fa-solid fa-xmark"}})],1)]},proxy:!0},{key:"modal-footer",fn:function(){return[a("div",{staticClass:"w-100"},[a("b-button",{staticClass:"float-right",attrs:{variant:"primary",size:"sm"},on:{click:function(e){t.show=!1}}},[t._v(" Cerrar ")])],1)]},proxy:!0}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("b-img",{attrs:{src:t.tour.image_url,fluid:"",alt:"Responsive image"}}),a("p",{staticClass:"my-4"},[t._v(t._s(t.tour.description))])],1)],1)},Rt=[],$t={name:"DetailsModal",data(){return{show:!1}},props:{idKey:String,tour:Object}},qt=$t,Bt=(0,m.Z)(qt,Mt,Rt,!1,null,"4177c034",null),jt=Bt.exports,Zt={name:"ToursCard",data(){return{dismissSecs:5,dismissCountDown:0,modalShow:!1}},props:{listTours:Array},components:{DetailsModal:jt,LogInModal:w,SignUpModal:E},methods:{countDownChanged(t){this.dismissCountDown=t},showAlert(){this.dismissCountDown=this.dismissSecs},...(0,n.nv)(["getUsers","activateAddToFavourites","activateAddToFavourites_2","activateRemoveFromFavourites"]),checkLoggedUser(t){let[e,a,s]=t;0==e?this.modalShow=!this.modalShow:this.activateAddToFavourites([a,s])}},computed:{...(0,n.Se)(["activeUser"]),activeUserNow(){return this.activeUser}},beforeMount(){this.activeUser},mounted(){this.activeUserNow}},Vt=Zt,zt=(0,m.Z)(Vt,Lt,Pt,!1,null,"971208e2",null),Ht=zt.exports,Jt={name:"ToursView",components:{ToursCard:Ht},computed:{...(0,n.rn)(["listTours"])}},Kt=Jt,Gt=(0,m.Z)(Kt,At,Ot,!1,null,"ded55814",null),Wt=Gt.exports;s["default"].use(R.Z);const Xt=[{path:"",name:"home",component:lt},{path:"/tours",name:"tours",component:Wt},{path:"/users",name:"userView",component:It,meta:{authRequired:!0}},{path:"/:catchAll(.*)",name:"ErrorView",component:()=>a.e(593).then(a.bind(a,9593))}],Yt=new R.Z({mode:"history",base:"/Satournow/",routes:Xt});Yt.beforeEach(((t,e,a)=>{const{currentUser:s}=(0,U.v0)(),{meta:{authRequired:r}}=t;window.scrollTo(0,0),s&&r?a():!s&&r?a("/ErrorView"):a()}));var Qt=Yt;s["default"].use(n.ZP);var te=new n.ZP.Store({state:{myFirestore:null,userPassCheck:!0,listTours:[],dataTable:[],listUsers:[],onemiData:[],baikonurData:[],spaceLaunchData:[],user:{email:"",password:"",firstName:"",lastName:""},fields:[{key:"name",label:"Nombre"},{key:"vacancies",label:"Vacantes",sortable:"true"},{key:"enrrolled",label:"Inscritos",sortable:"true"},{key:"duration_hrs",label:"Duración (hrs)",sortable:"true"},{key:"price_usd",label:"Precio",sortable:"true"},{key:"available",label:"Disponible",sortable:"true"},{key:"reg_date",label:"Fecha de creación"},{key:"id",label:"ID"}],form:{name:"",image_url:"",vacancies:"",enrrolled:"",duration_hrs:"",price_usd:"",id:"",description:""},show:!0,editedIndex:"",alert:{message:"",variant:""}},getters:{activeUser(){let{currentUser:t}=(0,U.v0)(),e={currentUser:t};return void 0!=e.currentUser&&e.currentUser},getUserPassCheck(t){return t.userPassCheck},getOnemiData(t){return t.onemiData},getBaikonurData(t){return t.baikonurData},getSpaceLaunchData(t){return t.spaceLaunchData},getHighlightedTours(t,e){const a=e.getListTours.filter((t=>1==t.highlighted));return a},getFavouritesByUser(t,e){let a=e.activeUser.email.toString(),s=e.getListUsers;const r=s.find((t=>t.user_email==a));let o=[];return r.favourites.map((e=>{t.listTours.map((t=>{t.id==e&&o.push(t)}))})),o},getUsername(t){return t.user.name},getPassword(t){return t.user.password},getListTours(t){return t.listTours},getListUsers(t){return t.listUsers},getDataTable(t){function e(t){const{name:e,vacancies:a,enrrolled:s,duration_hrs:r,price_usd:o,available:i,reg_date:n,id:l}=t;return{name:e,vacancies:a,enrrolled:s,duration_hrs:r,price_usd:o,available:i,reg_date:n,id:l}}const a=t.listTours.map(e);return t.dataTable=a,t.dataTable},getFields(t){return t.fields},getForm(t){return t.form},changeDateTime(t){let e=1e3*t,a=new Date(e),s=a.toLocaleString("es-US",{month:"long"}),r=a.toLocaleString("es-US",{day:"numeric"}),o=a.toLocaleString("es-US",{year:"numeric"})-1969;const i=`Fecha: ${r} de ${s} de ${o}`;return i},totalVacancies(t){let e=0;for(let a=0;a<t.listTours.length;a++)e+=parseFloat(t.listTours[a].vacancies);return e},totalEnrrolled(t){let e=0;for(let a=0;a<t.listTours.length;a++)e+=parseFloat(t.listTours[a].enrrolled);return e},totalAvailableTours(t){let e=0;for(let a=0;a<t.listTours.length;a++)1==t.listTours[a].available?e+=1:e+=0;return e},totalUnavailableTours(t){let e=0;for(let a=0;a<t.listTours.length;a++)1!=t.listTours[a].available?e+=1:e+=0;return e},totalTours(t){let e=t.listTours.length;return e},getAlertData(t){return t.alert}},mutations:{instanceFirestore(t,e){t.myFirestore=e},mutateUsername(t,e){t.user.email=e},mutateUserPassCheck(t,e){t.userPassCheck=e},mutatePassword(t,e){t.user.password=e},mutateTours(t,e){t.listTours=e},mutateUsers(t,e){t.listUsers=e},deleteTour(t,e){const a=(0,i.JU)(this.state.myFirestore,"saturnotours",e);(0,i.oe)(a)},addToFavourites(t,e){let[a,s]=e,r=this.getters.getListUsers.find((t=>t.user_email==a)),o=r.id.toString();const n=(0,i.JU)(this.state.myFirestore,"saturnousers",o);(0,i.r7)(n,{favourites:(0,i.vr)(s)})},removeFromFavourites(t,e){let[a,s]=e,r=this.getters.getListUsers.find((t=>t.user_email==a)),o=r.id.toString();const n=(0,i.JU)(this.state.myFirestore,"saturnousers",o);(0,i.r7)(n,{favourites:(0,i.Ab)(s)})},requestTourInfo(t,e){let[a,s,r,o]=e,n=this.getters.getListUsers.find((t=>t.user_email==a)),l=n.id.toString();const c=(0,i.JU)(this.state.myFirestore,"saturnousers",l);(0,i.r7)(c,{infoRequests:(0,i.vr)({param1:a,param2:s,param3:r,param4:o})})},onReset(t){t.preventDefault(),this.state.form.name="",this.state.form.image_url="",this.state.form.vacancies="",this.state.form.enrrolled="",this.state.form.duration_hrs="",this.state.form.price_usd="",this.state.form.id="",this.state.form.description="",this.state.show=!1,this.$nextTick((()=>{this.state.show=!0}))},subscribeToNewsletter(t,e){let a="ieDmCBUyRdhxtUBkRogh";const s=(0,i.JU)(this.state.myFirestore,"saturnoNewsletter",a);(0,i.r7)(s,{subscribers:(0,i.vr)(e.toString())})},dataToAlert(t,e){t.alert.message=e.message,t.alert.variant=e.variant},mutateOnemiData:(t,e)=>{t.onemiData=e},mutateBaikonurData:(t,e)=>{t.baikonurData=e},mutateSpaceLaunchData:(t,e)=>{t.spaceLaunchData=e}},actions:{async instanceFirestore({commit:t},e){t("instanceFirestore",e())},async getTours({commit:t}){if(this.state.myFirestore){const e=(0,i.IO)((0,i.hJ)(this.state.myFirestore,"saturnotours"));(0,i.cf)(e,(e=>{const a=[];e.forEach((t=>{a.push({id:t.id,...t.data()})})),t("mutateTours",a)}))}},async getUsers({commit:t}){if(this.state.myFirestore){const e=(0,i.IO)((0,i.hJ)(this.state.myFirestore,"saturnousers"));(0,i.cf)(e,(e=>{const a=[];e.forEach((t=>{a.push({id:t.id,...t.data()})})),t("mutateUsers",a)}))}},async onSubmit(t){t.commit("onSubmit")},async onReset(t){t.commit("onReset")},async logInUser(t){try{const{email:e,password:a}=this.state.user,s=(0,U.v0)();await(0,U.e5)(s,e,a),Qt.push("/users"),t.commit("mutateUsername",""),t.commit("mutatePassword","")}catch(e){console.log("Usuario y/o contraseña no reconocidos");let a=!1;t.commit("mutateUserPassCheck",a)}},logOutUser(){const t=(0,U.v0)();(0,U.w7)(t).then((()=>{console.log("Sesión cerrada exitosamente")})).catch((()=>{}))},resetUserPassCheck(t){t.commit("mutateUserPassCheck",!0)},setUsername(t,e){t.commit("mutateUsername",e)},setPassword(t,e){t.commit("mutatePassword",e)},activateAddToFavourites({commit:t},e){t("addToFavourites",e)},activateRemoveFromFavourites({commit:t},e){console.log("Param1 = "+e),t("removeFromFavourites",e)},activateNewsletterSub({commit:t},e){let a="",s="";/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(e)?(a="Su correo fue registrado correctamente, muchas gracias :)",s="success",t("subscribeToNewsletter",e)):(a="Correo electrónico no válido, intenta de nuevo",s="danger"),t("dataToAlert",{message:a,variant:s})},activateRequestTourInfo({commit:t},e){console.log("Param1 = "+e),t("requestTourInfo",e)},async callOnemiData({commit:t}){const e="https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-05-31E&end_date=2022-06-05&api_key=OaGIu1rtXVFHo5u3Nh04arwUua6VCffTerY8mSBX",a=await fetch(e).then((t=>t.json()));t("mutateOnemiData",a)},async callBaikonurData({commit:t}){const e="https://goweather.herokuapp.com/weather/Baikonur",a=await fetch(e).then((t=>t.json()));t("mutateBaikonurData",a)},async callSpaceLaunchData({commit:t}){const e="https://api.sbif.cl/api-sbifv3/recursos_api/dolar?apikey=4ac9912c9934d28e378d474d52e70a890360a41b&formato=json",a=await fetch(e).then((t=>t.json()));t("mutateSpaceLaunchData",a)}}}),ee=a(9017),ae=a(8262),se=a(3266),re=(a(44),a(81)),oe=a(6978),ie=a(9009);re.vI.add(oe.eFW,oe.m6i,oe.xVw,oe.O97,oe.ccn,oe.DSs,oe.SJh,oe.$aW,oe.Mdf,oe.FDd,oe.gR,oe.g82),s["default"].component("font-awesome-icon",ie.GN),s["default"].use(ae.XG7),s["default"].use(se.A7),s["default"].use(ae.XG7),s["default"].use(se.A7);const ne={apiKey:"AIzaSyCKQ5D85JRcxIHuiljC62tCuAs59KN0zUg",authDomain:"ensayofirebase1.firebaseapp.com",projectId:"ensayofirebase1",storageBucket:"ensayofirebase1.appspot.com",messagingSenderId:"495704296636",appId:"1:495704296636:web:8a8333bc16e61f33c714b9",measurementId:"G-3M1CJS9DTT"},le=(0,ee.ZF)(ne);s["default"].config.productionTip=!1,new s["default"]({app:le,router:Qt,store:te,render:t=>t(M)}).$mount("#app")},4749:function(t,e,a){t.exports=a.p+"img/saturn_logo.74507a6e.svg"},2413:function(t,e,a){t.exports=a.p+"media/galaxy.3612e218.mp4"}},e={};function a(s){var r=e[s];if(void 0!==r)return r.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,s,r,o){if(!s){var i=1/0;for(u=0;u<t.length;u++){s=t[u][0],r=t[u][1],o=t[u][2];for(var n=!0,l=0;l<s.length;l++)(!1&o||i>=o)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(n=!1,o<i&&(i=o));if(n){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[s,r,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,s){return a.f[s](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+".61e8c1ef.js"}}(),function(){a.miniCssF=function(t){return"css/"+t+".77871d27.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="Sa-Tour-Now!:";a.l=function(s,r,o,i){if(t[s])t[s].push(r);else{var n,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==e+o){n=d;break}}n||(l=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,a.nc&&n.setAttribute("nonce",a.nc),n.setAttribute("data-webpack",e+o),n.src=s),t[s]=[r];var m=function(e,a){n.onerror=n.onload=null,clearTimeout(v);var r=t[s];if(delete t[s],n.parentNode&&n.parentNode.removeChild(n),r&&r.forEach((function(t){return t(a)})),e)return e(a)},v=setTimeout(m.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=m.bind(null,n.onerror),n.onload=m.bind(null,n.onload),l&&document.head.appendChild(n)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/Satournow/"}(),function(){var t=function(t,e,a,s){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)a();else{var i=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=n,r.parentNode.removeChild(r),s(l)}};return r.onerror=r.onload=o,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var r=a[s],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===t||o===e))return r}var i=document.getElementsByTagName("style");for(s=0;s<i.length;s++){r=i[s],o=r.getAttribute("data-href");if(o===t||o===e)return r}},s=function(s){return new Promise((function(r,o){var i=a.miniCssF(s),n=a.p+i;if(e(i,n))return r();t(s,n,r,o)}))},r={143:0};a.f.miniCss=function(t,e){var a={593:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=s(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};a.f.j=function(e,s){var r=a.o(t,e)?t[e]:void 0;if(0!==r)if(r)s.push(r[2]);else{var o=new Promise((function(a,s){r=t[e]=[a,s]}));s.push(r[2]=o);var i=a.p+a.u(e),n=new Error,l=function(s){if(a.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var o=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.src;n.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",n.name="ChunkLoadError",n.type=o,n.request=i,r[1](n)}};a.l(i,l,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,o,i=s[0],n=s[1],l=s[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in n)a.o(n,r)&&(a.m[r]=n[r]);if(l)var u=l(a)}for(e&&e(s);c<i.length;c++)o=i[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(u)},s=self["webpackChunkSa_Tour_Now_"]=self["webpackChunkSa_Tour_Now_"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(9887)}));s=a.O(s)})();
//# sourceMappingURL=app.5a966ef5.js.map