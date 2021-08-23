(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{189:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(73),a=c.n(i),o=(c(86),c(5)),s=c(4),r=(c(87),c(46)),l=c.n(r),d=c(0);var m=function(){return Object(d.jsxs)("div",{className:"".concat(l.a.logo),children:[Object(d.jsx)("i",{className:"".concat(l.a.icon," fas fa-utensils")}),"COOKBOOK"]})},j=c(34),u=c.n(j);var b=function(e){var t;return Object(d.jsxs)("button",{onClick:e.onClick,className:"".concat(u.a.button," ").concat(u.a.fill," ").concat(null!==(t=e.className)&&void 0!==t?t:""),children:[e.icon&&Object(d.jsx)("i",{className:"".concat(e.icon," ").concat(u.a.icon)}),e.children]})},p=c(74),f=c.n(p);var g=function(e){var t=Object(n.useState)(!0),c=Object(s.a)(t,2),i=c[0],a=c[1],o=function(){window.innerWidth<=576?a(!1):a(!0)};return Object(n.useEffect)((function(){o()}),[]),window.addEventListener("resize",o),Object(d.jsxs)("header",{className:"row py-4 px-3 align-items-center",children:[Object(d.jsx)("div",{className:"col-sm-4",children:Object(d.jsx)(m,{})}),Object(d.jsx)("div",{className:"col-sm-8 ".concat(f.a["btn-box"]),children:Object(d.jsx)(b,{icon:"fas fa-plus-square",onClick:e.onClick,children:i&&"Add recipe"})})]})},O=c(21),h=c.n(O);function x(e){var t=e.onUpdate,c=e.setMode,n=e.selectedRecipeId;console.log("footer render");return Object(d.jsxs)("footer",{className:"row ".concat(h.a.footer),children:[Object(d.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-5"}),Object(d.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-7 ".concat(h.a["button-container"]),children:0!==n&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{className:h.a.button,onClick:t,children:"Update"}),Object(d.jsx)(b,{className:h.a.button,onClick:function(){c("delete")},children:"Delete"})]})})]})}var v=c(35),_=c.n(v);var N=function(e){return console.log("WelcomeContent render"),Object(d.jsx)("div",{className:_.a.container,children:Object(d.jsx)("div",{className:_.a["h2-box"],children:Object(d.jsx)("h2",{className:_.a.h2,children:"Welcome to COOKBOOK"})})})},k=c(36),C=c.n(k);var w=function(e){console.log("RecipeList render");var t=e.onClick,c=e.recipeList,n=e.isActive;return Object(d.jsx)("ul",{className:C.a.ul,children:c.map((function(e){return Object(d.jsx)("li",{"data-id":e.id,className:"".concat(C.a.li," text-capitalize ").concat(n.id===e.id?C.a.active:""),onClick:t,children:e.title},e.id)}))})},R=c(47),y=c.n(R);var F=function(e){var t=e.listOfIngredient,c=e.remove,n=t,i=function(e){c(e.target.dataset.index)};return Object(d.jsx)(d.Fragment,{children:n.length>0?n.map((function(t,c){var n;return Object(d.jsxs)("li",{"data-index":c,className:"".concat(null!==(n=e.className)&&void 0!==n?n:""),onClick:i,children:[t,e.icon&&Object(d.jsx)("i",{"data-index":c,className:e.icon})]},c)})):""})};var I=function(e){console.log("Recipe Detail render");var t=e.recipe;return Object(d.jsx)(d.Fragment,{children:function(e){return e?Object(d.jsxs)("ul",{className:"row ".concat(y.a.ul),children:[Object(d.jsx)("li",{children:e.title}),Object(d.jsxs)("li",{className:"col-md-4 col-sm-3",children:[Object(d.jsx)("i",{className:"far fa-clock me-2"}),(t=+e.cookingTime,t>=60?Math.floor(t/60)+"hr "+t%60+"mins":t+"mins")]}),Object(d.jsxs)("li",{className:"col-md-4 col-sm-3",children:[Object(d.jsx)("i",{className:"fas fa-user-friends me-2"}),e.servings," servings"]}),Object(d.jsx)("li",{children:"Ingredients:"}),Object(d.jsx)("ul",{className:y.a.ingredients,children:Object(d.jsx)(F,{listOfIngredient:e.ingredients})})]},e.id):"";var t}(t)})};var M=function(e){console.log("ReadContent render");var t=e.recipeList,c=e.onRecipeClick,n=e.selectedRecipeId,i=e.readRecipe,a=e.className,o=i(n),r=Object(s.a)(o,1)[0];return Object(d.jsxs)("main",{className:"row",children:[Object(d.jsx)("div",{className:"recipe col-sm-12 col-md-6 col-lg-5",children:Object(d.jsx)(w,{recipeList:t,onClick:function(e){c(e.target.dataset.id)},isActive:null!==r&&void 0!==r?r:""})}),Object(d.jsx)("section",{className:"recipe col-sm-12 col-md-6 col-lg-7",children:n?Object(d.jsx)(I,{recipe:r}):Object(d.jsx)("p",{className:a,children:"Select a recipe to check the details."})})]})},S=c(3),L=c.n(S),T=c(10),U=c(15),A=c(192),B=c(193),q=c(80),E=c.n(q);var K=function(e){return Object(d.jsx)("div",{className:"".concat(E.a.card," ").concat(e.className),children:e.children})},H=U.c().shape({title:U.d().required("Required").min(1),cookingTime:U.b().required("Required").positive("Invalid Cooking time").integer(),servings:U.b().required("Required").positive("Invalid Servings").integer(),ingredients:U.a().of(U.d()).required("Must have ingredients").min(2,"Minimum of 2 ingredients")});var J=function(e){var t=e.onClose,c=e.submitHandler,n=e.recipeList,i=e.onUpdate,a=e.selectedRecipeId,o=e.readRecipe,r=e.mode,l=a&&o(a),m=null!==l&&void 0!==l?l:"",j=Object(s.a)(m,1)[0],u=null!==j&&void 0!==j?j:"",p=u.title,f=u.cookingTime,g=u.servings,O=u.ingredients,h=Object(T.e)({initialValues:"create"===r?{title:"",cookingTime:"",servings:"",ingredient:"",ingredients:[]}:"update"===r?{title:p,cookingTime:f,servings:g,ingredients:O}:"",onSubmit:function(e){console.log(JSON.stringify(e,null,2))}});return Object(d.jsx)(T.d,{initialValues:h.initialValues,validationSchema:H,onSubmit:function(e){return"create"===r?c(e):function(e){var t=e.title,c=e.cookingTime,o=e.servings,s=e.ingredients,r=n.map((function(e){return e.id===a?{id:e.id,title:t,cookingTime:c,servings:o,ingredients:s}:e}));i(r)}(e)},children:function(e){var c=e.errors,n=e.touched;return Object(d.jsx)("div",{className:L.a.backdrop,children:Object(d.jsxs)(K,{className:L.a.modal,children:[Object(d.jsxs)(A.a,{className:"align-items-center ".concat(L.a["modal-top"]),children:[Object(d.jsx)(B.a,{xs:12,sm:3,className:"d-flex justify-content-end",children:Object(d.jsx)(b,{icon:"fas fa-times",className:L.a["modal-close"],onClick:t})}),Object(d.jsx)(B.a,{xs:12,sm:9,children:Object(d.jsx)("header",{className:L.a["modal-header"],children:Object(d.jsx)("h3",{className:"fw-bold",children:"create"===r?"Add a new recipe":"Update a recipe"})})})]}),Object(d.jsx)(T.c,{children:Object(d.jsxs)(A.a,{children:[Object(d.jsxs)(B.a,{sm:12,md:6,className:L.a.form,children:[Object(d.jsxs)(A.a,{children:["update"===r&&Object(d.jsx)("input",{type:"hidden",name:"id",value:j.id}),Object(d.jsxs)(B.a,{className:"mb-4",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label fw-bold",children:"Recipe Title"}),Object(d.jsx)(T.a,{type:"text",id:"title",name:"title",className:"form-control ".concat(L.a.form)}),c.title&&n.title?Object(d.jsx)("div",{className:L.a.error,children:c.title}):null]})]}),Object(d.jsxs)(A.a,{children:[Object(d.jsxs)(B.a,{xs:12,sm:6,className:"mb-4",children:[Object(d.jsx)("label",{htmlFor:"cookingTime",className:"form-label fw-bold",children:"Cook Time"}),Object(d.jsx)(T.a,{type:"number",id:"cookingTime",name:"cookingTime",placeholder:"min",className:"form-control ".concat(L.a.form),min:"1",step:"1"}),c.cookingTime&&n.cookingTime?Object(d.jsx)("div",{className:L.a.error,children:c.cookingTime}):null]}),Object(d.jsxs)(B.a,{xs:12,sm:6,className:"mb-4",children:[Object(d.jsx)("label",{htmlFor:"servings",className:"form-label fw-bold",children:"Servings"}),Object(d.jsx)(T.a,{type:"number",id:"servings",name:"servings",placeholder:"servings",className:"form-control ".concat(L.a.form),min:"1",step:"1"}),c.servings&&n.servings?Object(d.jsx)("div",{className:L.a.error,children:c.servings}):null]})]})]}),Object(d.jsx)(B.a,{sm:12,md:6,className:L.a.form,children:Object(d.jsx)(A.a,{className:"".concat(L.a["row-height"]),children:Object(d.jsxs)("div",{className:"mb-3 align-items-center",children:[Object(d.jsx)("label",{htmlFor:"ingredients",className:"form-label fw-bold",children:"Ingredients"}),Object(d.jsx)(T.b,{name:"ingredients",children:function(e){var t=e.push,i=e.remove,a=e.form,o=a.values,s=a.setFieldValue,r=o.ingredients;return Object(d.jsxs)("div",{children:[Object(d.jsx)(T.a,{type:"text",id:"ingredient",name:"ingredient",className:"form-control ".concat(L.a.form),placeholder:"Enter your ingredient",onKeyDown:function(e){"Enter"===e.key&&0!==e.target.value.trim().length&&(e.preventDefault(),t(e.target.value),s("ingredient",""))}}),c.ingredients&&n.ingredients?Object(d.jsx)("div",{className:L.a.error,children:c.ingredients}):null,Object(d.jsx)("ul",{className:"mt-4 ".concat(L.a.ul),children:Object(d.jsx)(F,{listOfIngredient:r,icon:"fas fa-times",remove:i,className:L.a.li})})]})}})]})})}),Object(d.jsx)(B.a,{children:Object(d.jsx)(b,{type:"submit",children:"save"})})]})})]})})}})};var V=function(e){console.log("UpdateContent render");var t=e.mode,c=e.modal,n=e.onCloseModal,i=e.recipeList,a=e.onUpdate,o=e.selectedRecipeId,s=e.readRecipe;return Object(d.jsx)(d.Fragment,{children:c&&Object(d.jsx)(J,{mode:t,onClose:n,onUpdate:a,recipeList:i,selectedRecipeId:o,readRecipe:s})})},W=c(194);var D=function(e){console.log("CreateContent render");var t=e.mode,c=e.modal,n=e.onCloseModal,i=e.onAddRecipe,a=e.setMode;return Object(d.jsx)(d.Fragment,{children:c&&Object(d.jsx)(J,{mode:t,onClose:n,submitHandler:function(e){var t=Object(W.a)();i(e,e.id=t),n(),a("read")}})})};console.log("First App render");var G=function(){console.log("App render");var e=Object(n.useState)([{id:"59d0208e-0490",title:"Garlic and Green Olives Pasta",cookingTime:15,servings:4,ingredients:["12oz. pappardelle or other wide noodle","Kosher salt","\xbccup extra-virgin olive oil","8 garlic cloves","1cup finely chopped parsley","1cup pitted Castelvetrano olives","crushed red pepper flakes","unsalted butter","1 cup basil leaves","2tsp. fresh lemon juice"]},{id:"59d0208e-0491",title:"Greek Salad",cookingTime:10,servings:3,ingredients:["6 firm ripe tomatoes","3 Lebanese cucumbers","1 red onion, sliced into rings","1 red capsicum, halved, deseeded, coarsely chopped","200g marinated Greek olives","220g marinated feta, coarsely chopped","1 tsp dried Greek oregano","1 tsp salt","125ml (1/2 cup) olive oil","60ml (1/4 cup) white vinegar"]}]),t=Object(s.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)("welcome"),r=Object(s.a)(a,2),l=r[0],m=r[1],j=Object(n.useState)(!1),u=Object(s.a)(j,2),b=u[0],p=u[1],f=Object(n.useState)(0),O=Object(s.a)(f,2),h=O[0],v=O[1];Object(n.useEffect)((function(){if(null!==localStorage.getItem("recipes")){var e=localStorage.getItem("recipes");i(JSON.parse(e)),c.length>0?m("read"):m("welcome")}}),[]),Object(n.useEffect)((function(){localStorage.setItem("recipes",JSON.stringify(c)),c.length>0?m("read"):m("welcome")}),[c]);var _=function(){c.length>0?m("read"):m("welcome"),p(!1)},k=function(e){return c.filter((function(t){var c;return t.id===e&&(c=t),c}))};return Object(d.jsxs)("div",{className:"app container",children:[Object(d.jsx)(g,{onClick:function(){m("create"),p(!0)}}),"welcome"===l?Object(d.jsx)(N,{}):"read"===l?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(M,{mode:l,recipeList:c,selectedRecipeId:h,onRecipeClick:function(e){v(e)},readRecipe:k,className:"readContent"})}):"create"===l?Object(d.jsx)(D,{mode:l,modal:b,onCloseModal:_,onAddRecipe:function(e){console.log("New recipe was added:",e),i((function(t){return[e].concat(Object(o.a)(t))})),v(e.id)},setMode:m}):"update"===l?Object(d.jsx)(V,{mode:l,modal:b,recipeList:c,selectedRecipeId:h,onCloseModal:_,onUpdate:function(e){i(e),m("read")},readRecipe:k}):"delete"===l?function(){if(window.confirm("Are you sure want to delete the recipe? If you delete the recipe, you will permanently lose your selected recipe.")){var e=Object(o.a)(c),t=e.find((function(e,t){var c;return e.id===h&&(c=t),c}));e.splice(t,1),i(e),c.length>0?m("read"):m("welcome"),v(0),alert("The recipe has been deleted successfully!")}}():"",Object(d.jsx)(x,{selectedRecipeId:h,onUpdate:function(){m("update"),p(!0)},setMode:m})]})};a.a.render(Object(d.jsx)(G,{}),document.getElementById("root"))},21:function(e,t,c){e.exports={footer:"Footer_footer__3K023","button-container":"Footer_button-container__1EUq4",button:"Footer_button__2Iloa"}},3:function(e,t,c){e.exports={form:"FormModal_form__3nZRu",backdrop:"FormModal_backdrop__1ocsl",modal:"FormModal_modal__3byJB","modal-top":"FormModal_modal-top__v-cgV","modal-header":"FormModal_modal-header__1guNf","modal-close":"FormModal_modal-close__3nPam",ul:"FormModal_ul__ng3SX","row-height":"FormModal_row-height__1tkCb",error:"FormModal_error__3cHIv",li:"FormModal_li__seVoW"}},34:function(e,t,c){e.exports={button:"Button_button__2l-Rf",icon:"Button_icon__3pdlG",fill:"Button_fill__3444V"}},35:function(e,t,c){e.exports={container:"WelcomeContent_container__2_ozm",h2:"WelcomeContent_h2__2YMA7"}},36:function(e,t,c){e.exports={ul:"RecipeList_ul__vjicB",li:"RecipeList_li__3QU8B",active:"RecipeList_active__rgA30",icon:"RecipeList_icon__29edH"}},46:function(e,t,c){e.exports={logo:"Logo_logo__1jH2J",icon:"Logo_icon__ZLdKm"}},47:function(e,t,c){e.exports={ul:"RecipeDetail_ul__1BjOt",ingredients:"RecipeDetail_ingredients__2zfhg"}},74:function(e,t,c){e.exports={"btn-box":"Header_btn-box__1UoX_","btn-mobile":"Header_btn-mobile__3ine2"}},80:function(e,t,c){e.exports={card:"Card_card__35WdF"}},86:function(e,t,c){},87:function(e,t,c){}},[[189,1,2]]]);
//# sourceMappingURL=main.59aa79f1.chunk.js.map