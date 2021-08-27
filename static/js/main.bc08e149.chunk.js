(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{189:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(20),s=c.n(i),a=(c(86),c(4)),r=(c(87),c(47)),o=c.n(r),l=c(0);var d=function(){return Object(l.jsxs)("div",{className:o.a.logo,children:[Object(l.jsx)("i",{className:"".concat(o.a.icon," fas fa-utensils")}),"COOKBOOK"]})},j=c(36),m=c.n(j);var u=function(e){var t;return Object(l.jsxs)("button",{type:e.type||"",onClick:e.onClick,className:"".concat(m.a.button," ").concat(m.a.fill," ").concat(null!==(t=e.className)&&void 0!==t?t:""),children:[e.icon&&Object(l.jsx)("i",{className:"".concat(e.icon," ").concat(m.a.icon)}),e.children]})},b=c(74),p=c.n(b),O=Object(n.createContext)(),x=function(e){var t=Object(n.useState)(!1),c=Object(a.a)(t,2),i=c[0],s=c[1];return Object(l.jsx)(O.Provider,{value:{showModal:i,setShowModal:s,closeModal:function(){s(!1)},createModalOpen:function(){s(!0)},updateModalOpen:function(){s(!0)}},children:e.children})};var h=function(e){var t=e.setMode,c=Object(n.useContext)(O).createModalOpen,i=Object(n.useState)(!0),s=Object(a.a)(i,2),r=s[0],o=s[1],j=function(){window.innerWidth<=576?o(!1):o(!0)};return Object(n.useEffect)((function(){j()}),[]),window.addEventListener("resize",j),Object(l.jsxs)("header",{className:"row py-4 px-3 align-items-center",children:[Object(l.jsx)("div",{className:"col-sm-4",children:Object(l.jsx)(d,{})}),Object(l.jsx)("div",{className:"col-sm-8 ".concat(p.a["btn-box"]),children:Object(l.jsx)(u,{icon:"fas fa-plus-square",onClick:function(){t("create"),c()},children:r&&"Add recipe"})})]})},f=c(37),g=c.n(f);var v=function(){return console.log("WelcomeContent render"),Object(l.jsx)("div",{className:g.a.container,children:Object(l.jsx)("div",{className:g.a["h2-box"],children:Object(l.jsx)("h2",{className:g.a.h2,children:"Welcome to COOKBOOK"})})})},_=c(22),N=c.n(_),R=c(5),C=Object(n.createContext)();function M(e,t){switch(t.type){case"ADD_RECIPE":return[{id:t.recipe.id,title:t.recipe.title,cookingTime:t.recipe.cookingTime,servings:t.recipe.servings,ingredients:t.recipe.ingredients}].concat(Object(R.a)(e));case"REMOVE_RECIPE":var c;return e.find((function(e,n){e.id===t.id&&(c=n)})),e.splice(c,1),e;case"UPDATE_RECIPE":return e.map((function(e){return e.id===t.id?{id:e.id,title:t.updatedRecipe.title,cookingTime:t.updatedRecipe.cookingTime,servings:t.updatedRecipe.servings,ingredients:t.updatedRecipe.ingredients}:e}));default:return e}}var k=function(e){var t=e.setMode,c=e.children,i=Object(n.useReducer)(M,[],(function(){var e=localStorage.getItem("recipes");return e?JSON.parse(e):[{id:"59d0208e-0490",title:"Garlic and Green Olives Pasta",cookingTime:15,servings:4,ingredients:["12oz. pappardelle or other wide noodle","Kosher salt","\xbccup extra-virgin olive oil","8 garlic cloves","1cup finely chopped parsley","1cup pitted Castelvetrano olives","crushed red pepper flakes","unsalted butter","1 cup basil leaves","2tsp. fresh lemon juice"]},{id:"59d0208e-0491",title:"Greek Salad",cookingTime:10,servings:3,ingredients:["6 firm ripe tomatoes","3 Lebanese cucumbers","1 red onion, sliced into rings","1 red capsicum, halved, deseeded, coarsely chopped","200g marinated Greek olives","220g marinated feta, coarsely chopped","1 tsp dried Greek oregano","1 tsp salt","125ml (1/2 cup) olive oil","60ml (1/4 cup) white vinegar"]}]})),s=Object(a.a)(i,2),r=s[0],o=s[1],d=Object(n.useState)(),j=Object(a.a)(d,2),m=j[0],u=j[1];Object(n.useEffect)((function(){b(r.length),localStorage.setItem("recipes",JSON.stringify(r))}),[r.length,r]);var b=function(e){t(e>0?"read":"welcome")};return Object(l.jsx)(C.Provider,{value:{recipeList:r,activeRecipe:m,readRecipe:function(e){r.filter((function(t){return t.id===e&&u(t),t}))},setActiveRecipe:u,dispatchRecipeList:o},children:c})},y=Object(n.createContext)();var w=function(e){var t=Object(n.useState)(0),c=Object(a.a)(t,2),i=c[0],s=c[1];return Object(l.jsx)(y.Provider,{value:{selectedRecipeId:i,setSelectedId:function(e){s(e)}},children:e.children})};var E=function(){console.log("RecipeList render");var e=Object(n.useContext)(C),t=e.recipeList,c=e.readRecipe,i=e.activeRecipe,s=Object(n.useContext)(y).setSelectedId,a=function(e){s(e.target.dataset.id),c(e.target.dataset.id)};return Object(l.jsxs)("ul",{className:N.a.ul,children:[Object(l.jsxs)("p",{className:N.a.p,children:[Object(l.jsx)("i",{className:"fas fa-arrow-circle-down me-2"}),"Select a recipe to check the details."]}),t.map((function(e){return Object(l.jsx)("li",{"data-id":e.id,onClick:a,className:"".concat(N.a.li," text-capitalize ").concat(i&&i.id===e.id?N.a.active:""),children:e.title},e.id)}))]})},F=c(48),I=c.n(F);var S=function(){console.log("Recipe Detail render");var e=Object(n.useContext)(C).activeRecipe;return Object(l.jsx)(l.Fragment,{children:e?Object(l.jsxs)("ul",{className:"row ".concat(I.a.ul),children:[Object(l.jsx)("li",{children:Object(l.jsx)("h2",{children:e.title})}),Object(l.jsxs)("li",{className:"col-md-4 col-sm-3",children:[Object(l.jsx)("i",{className:"far fa-clock me-2"}),function(e){if(e>=60){var t=Math.floor(e/60),c=e%60;return c>0?t+" hr "+c+" mins":t+" hr "}return e+" mins"}(+e.cookingTime)]}),Object(l.jsxs)("li",{className:"col-md-4 col-sm-3",children:[Object(l.jsx)("i",{className:"fas fa-user-friends me-2"}),e.servings," servings"]}),Object(l.jsx)("li",{children:"Ingredients:"}),Object(l.jsx)("ul",{className:I.a.ingredients,children:e.ingredients.map((function(e,t){return Object(l.jsx)("li",{"data-index":t,children:e},t)}))})]},e.id):""})},T=c(23),L=c.n(T);function A(e){var t=e.setMode;console.log("footer render");var c=Object(n.useContext)(y),i=c.selectedRecipeId,s=c.setSelectedId,a=Object(n.useContext)(O).updateModalOpen,r=Object(n.useContext)(C),o=r.setActiveRecipe,d=r.dispatchRecipeList;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("footer",{className:"row ".concat(L.a.footer),children:[Object(l.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-5"}),Object(l.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-7 ".concat(L.a["button-container"]),children:0!==i&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{className:L.a.button,onClick:function(){a(),t("update")},children:"Update"}),Object(l.jsx)(u,{className:L.a.button,onClick:function(){window.confirm("Are you sure want to delete the recipe? If you delete the recipe, you will permanently lose your selected recipe.")&&(d({type:"REMOVE_RECIPE",id:s}),s(0),o(),alert("The recipe has been deleted successfully!"))},children:"Delete"})]})})]})})}var P=function(e){var t=e.setMode;return console.log("ReadContent render"),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("main",{className:"row",children:[Object(l.jsx)("div",{className:"recipe col-sm-12 col-md-6 col-lg-5",children:Object(l.jsx)(E,{})}),Object(l.jsx)("section",{className:"recipe col-sm-12 col-md-6 col-lg-7",children:Object(l.jsx)(S,{})})]}),Object(l.jsx)(A,{setMode:t})]})},D=c(6),B=c(3),q=c.n(B),K=c(10),V=c(15),U=c(192),J=c(193),W=c(80),G=c.n(W);var z=function(e){return Object(l.jsx)("div",{className:"".concat(G.a.card," ").concat(e.className),children:e.children})};var H=function(e){var t=e.icon,c=e.remove,n=e.className,i=e.ingredients,s=function(e){c(e.target.dataset.index)};return Object(l.jsx)(l.Fragment,{children:i.length>0?i.map((function(e,c){return Object(l.jsxs)("li",{"data-index":c,className:"".concat(null!==n&&void 0!==n?n:""),onClick:s,children:[e,t&&Object(l.jsx)("i",{"data-index":c,className:t})]},c)})):""})},X=c(194),Z=V.c().shape({title:V.d().trim().strict(!0).required("Required").min(1),cookingTime:V.b().required("Required").positive("Invalid Cooking time").integer(),servings:V.b().required("Required").positive("Invalid Servings").integer(),ingredients:V.a().of(V.d()).required("Must have ingredients").min(2,"Minimum of 2 ingredients")});var Q=function(e){var t=e.mode,c=e.setMode,i=Object(n.useContext)(C),a=i.activeRecipe,r=i.setActiveRecipe,o=i.dispatchRecipeList,d=Object(n.useContext)(y),j=d.setSelectedId,m=d.selectedRecipeId,b=Object(n.useContext)(O),p=b.setShowModal,x=b.closeModal,h=function(){c("read"),x()},f=null!==a&&void 0!==a?a:"",g=f.id,v=f.title,_=f.cookingTime,N=f.servings,R=f.ingredients,M=Object(K.e)({initialValues:"create"===t?{title:"",cookingTime:"",servings:"",ingredient:"",ingredients:[]}:"update"===t?{title:v,cookingTime:_,servings:N,ingredients:R}:"",onSubmit:function(e){console.log(JSON.stringify(e,null,2))}});return Object(l.jsxs)(l.Fragment,{children:[s.a.createPortal(Object(l.jsx)("div",{className:q.a.backdrop}),document.getElementById("backdrop-root")),s.a.createPortal(Object(l.jsx)(K.d,{initialValues:M.initialValues,validationSchema:Z,onKeyDown:function(e){return e.preventDefault()},onSubmit:function(e){return"create"===t?function(e){var t=Object(X.a)(),n=Object(D.a)(Object(D.a)({},e),{},{id:t});o({type:"ADD_RECIPE",recipe:n}),j(t),r(n),c("read"),x()}(e):function(e,t){o({type:"UPDATE_RECIPE",updatedRecipe:e,id:t}),r(e,e.id=t),c("read"),p(!1)}(e,m)},children:function(e){var c=e.errors,n=e.touched;return Object(l.jsxs)(z,{className:q.a.modal,children:[Object(l.jsxs)(U.a,{className:"align-items-center ".concat(q.a["modal-top"]),children:[Object(l.jsx)(J.a,{xs:12,sm:3,className:"d-flex justify-content-end",children:Object(l.jsx)(u,{icon:"fas fa-times",className:q.a["modal-close"],onClick:h})}),Object(l.jsx)(J.a,{xs:12,sm:9,children:Object(l.jsx)("header",{className:q.a["modal-header"],children:Object(l.jsx)("h3",{className:"fw-bold",children:"create"===t?"Add a new recipe":"Update a recipe"})})})]}),Object(l.jsx)(K.c,{children:Object(l.jsxs)(U.a,{children:[Object(l.jsxs)(J.a,{sm:12,md:6,className:q.a.form,children:[Object(l.jsxs)(U.a,{children:["update"===t&&Object(l.jsx)("input",{type:"hidden",name:"id",value:g}),Object(l.jsxs)(J.a,{className:"mb-4",children:[Object(l.jsx)("label",{htmlFor:"title",className:"form-label fw-bold",children:"Recipe Title"}),Object(l.jsx)(K.a,{type:"text",id:"title",name:"title",className:"form-control ".concat(q.a.form)}),c.title&&n.title?Object(l.jsx)("div",{className:q.a.error,children:c.title}):null]})]}),Object(l.jsxs)(U.a,{children:[Object(l.jsxs)(J.a,{xs:12,sm:6,className:"mb-4",children:[Object(l.jsx)("label",{htmlFor:"cookingTime",className:"form-label fw-bold",children:"Cook Time"}),Object(l.jsx)(K.a,{type:"number",id:"cookingTime",name:"cookingTime",placeholder:"min",className:"form-control ".concat(q.a.form),min:"1",step:"1"}),c.cookingTime&&n.cookingTime?Object(l.jsx)("div",{className:q.a.error,children:c.cookingTime}):null]}),Object(l.jsxs)(J.a,{xs:12,sm:6,className:"mb-4",children:[Object(l.jsx)("label",{htmlFor:"servings",className:"form-label fw-bold",children:"Servings"}),Object(l.jsx)(K.a,{type:"number",id:"servings",name:"servings",placeholder:"servings",className:"form-control ".concat(q.a.form),min:"1",step:"1"}),c.servings&&n.servings?Object(l.jsx)("div",{className:q.a.error,children:c.servings}):null]})]})]}),Object(l.jsx)(J.a,{sm:12,md:6,className:q.a.form,children:Object(l.jsx)(U.a,{children:Object(l.jsxs)("div",{className:"mb-3 align-items-center",children:[Object(l.jsx)("label",{htmlFor:"ingredients",className:"form-label fw-bold",children:"Ingredients"}),Object(l.jsx)(K.b,{name:"ingredients",children:function(e){var t=e.unshift,i=e.remove,s=e.form,a=s.values,r=s.setFieldValue,o=a.ingredients;return Object(l.jsxs)("div",{children:[Object(l.jsx)(K.a,{type:"text",id:"ingredient",name:"ingredient",className:"form-control ".concat(q.a.form),placeholder:"Enter your ingredient",onKeyDown:function(e){"Enter"===e.key&&0!==e.target.value.trim().length&&(e.preventDefault(),t(e.target.value),r("ingredient",""))}}),c.ingredients&&n.ingredients?Object(l.jsx)("div",{className:q.a.error,children:c.ingredients}):null,Object(l.jsx)("ul",{className:"mt-4 ".concat(q.a.ul),children:Object(l.jsx)(H,{icon:"fas fa-times",remove:i,ingredients:o,className:q.a.li})})]})}})]})})}),Object(l.jsx)(J.a,{className:"my-2",children:Object(l.jsx)(u,{type:"submit",children:"save"})})]})})]})}}),document.getElementById("modal-root"))]})};var Y=function(e){var t=e.mode,c=e.setMode;console.log("UpdateContent render");var i=Object(n.useContext)(O).showModal;return Object(l.jsx)(l.Fragment,{children:i&&Object(l.jsx)(Q,{mode:t,setMode:c})})},$=function(e){var t=e.mode,c=e.setMode;console.log("CreateContent render");var i=Object(n.useContext)(O).showModal;return Object(l.jsx)(l.Fragment,{children:i&&Object(l.jsx)(Q,{mode:t,setMode:c})})};console.log("First App render");var ee=function(){console.log("App render");var e=Object(n.useState)("read"),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(l.jsx)("div",{className:"app container",children:Object(l.jsx)(k,{setMode:i,children:Object(l.jsxs)(x,{children:[Object(l.jsx)(h,{setMode:i}),Object(l.jsx)(w,{children:"welcome"===c?Object(l.jsx)(v,{}):"read"===c?Object(l.jsx)(P,{mode:c,setMode:i}):"create"===c?Object(l.jsx)($,{mode:c,setMode:i}):"update"===c?Object(l.jsx)(Y,{mode:c,setMode:i}):""})]})})})};s.a.render(Object(l.jsx)(ee,{}),document.getElementById("root"))},22:function(e,t,c){e.exports={ul:"RecipeList_ul__vjicB",li:"RecipeList_li__3QU8B",active:"RecipeList_active__rgA30",icon:"RecipeList_icon__29edH",p:"RecipeList_p__37Ayp"}},23:function(e,t,c){e.exports={footer:"Footer_footer__3K023","button-container":"Footer_button-container__1EUq4",button:"Footer_button__2Iloa"}},3:function(e,t,c){e.exports={form:"FormModal_form__3nZRu",backdrop:"FormModal_backdrop__1ocsl",modal:"FormModal_modal__3byJB","modal-top":"FormModal_modal-top__v-cgV","modal-header":"FormModal_modal-header__1guNf","modal-close":"FormModal_modal-close__3nPam",ul:"FormModal_ul__ng3SX",error:"FormModal_error__3cHIv",li:"FormModal_li__seVoW"}},36:function(e,t,c){e.exports={button:"Button_button__2l-Rf",icon:"Button_icon__3pdlG",fill:"Button_fill__3444V"}},37:function(e,t,c){e.exports={container:"WelcomeContent_container__2_ozm",h2:"WelcomeContent_h2__2YMA7"}},47:function(e,t,c){e.exports={logo:"Logo_logo__1jH2J",icon:"Logo_icon__ZLdKm"}},48:function(e,t,c){e.exports={ul:"RecipeDetail_ul__1BjOt",ingredients:"RecipeDetail_ingredients__2zfhg"}},74:function(e,t,c){e.exports={"btn-box":"Header_btn-box__1UoX_","btn-mobile":"Header_btn-mobile__3ine2"}},80:function(e,t,c){e.exports={card:"Card_card__35WdF"}},86:function(e,t,c){},87:function(e,t,c){}},[[189,1,2]]]);
//# sourceMappingURL=main.bc08e149.chunk.js.map