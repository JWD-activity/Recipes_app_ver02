(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{190:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),s=c(21),a=c.n(s),r=(c(87),c(3)),o=(c(88),c(47)),l=c.n(o),d=c(0);function u(){return Object(d.jsxs)("div",{className:l.a.logo,children:[Object(d.jsx)("i",{className:"".concat(l.a.icon," fas fa-utensils")}),"COOKBOOK"]})}var j=n.a.memo(u),m=c(36),b=c.n(m);var p=function(e){var t;return Object(d.jsxs)("button",{type:e.type||"",onClick:e.onClick,className:"".concat(b.a.button," ").concat(b.a.fill," ").concat(null!==(t=e.className)&&void 0!==t?t:""),children:[e.icon&&Object(d.jsx)("i",{className:"".concat(e.icon," ").concat(b.a.icon)}),e.children]})},h=c(75),g=c.n(h),O=Object(i.createContext)(),f=function(e){var t=Object(i.useState)(!1),c=Object(r.a)(t,2),n=c[0],s=c[1];return Object(d.jsx)(O.Provider,{value:{showModal:n,setShowModal:s,closeModal:function(){s(!1)},createModalOpen:function(){s(!0)},updateModalOpen:function(){s(!0)}},children:e.children})};var x=function(e){var t=e.setMode,c=Object(i.useContext)(O).createModalOpen,n=Object(i.useState)(!0),s=Object(r.a)(n,2),a=s[0],o=s[1],l=function(){window.innerWidth<=576?o(!1):o(!0)};return Object(i.useEffect)((function(){l()}),[]),window.addEventListener("resize",l),Object(d.jsxs)("header",{className:"row py-4 px-3 align-items-center",children:[Object(d.jsx)("div",{className:"col-sm-4",children:Object(d.jsx)(j,{})}),Object(d.jsx)("div",{className:"col-sm-8 ".concat(g.a["btn-box"]),children:Object(d.jsx)(p,{icon:"fas fa-plus-square",onClick:function(){t("create"),c()},children:a&&"Add recipe"})})]})},v=c(37),_=c.n(v);var N=function(){return Object(d.jsx)("div",{className:_.a.container,children:Object(d.jsx)("div",{className:_.a["h2-box"],children:Object(d.jsx)("h2",{className:_.a.h2,children:"Welcome to COOKBOOK"})})})},k=c(48),y=c.n(k),M=c(5);function R(e,t){switch(t.type){case"ADD_RECIPE":return[{id:t.recipe.id,title:t.recipe.title,cookingTime:t.recipe.cookingTime,servings:t.recipe.servings,ingredients:t.recipe.ingredients}].concat(Object(M.a)(e));case"REMOVE_RECIPE":var c;return e.find((function(e,i){e.id===t.id&&(c=i)})),e.splice(c,1),e;case"UPDATE_RECIPE":return e.map((function(e){return e.id===t.id?{id:e.id,title:t.updatedRecipe.title,cookingTime:t.updatedRecipe.cookingTime,servings:t.updatedRecipe.servings,ingredients:t.updatedRecipe.ingredients}:e}));default:return e}}var C=[{id:"59d0208e-0490",title:"Garlic and Green Olives Pasta",cookingTime:15,servings:4,ingredients:["12oz. pappardelle or other wide noodle","Kosher salt","\xbccup extra-virgin olive oil","8 garlic cloves","1cup finely chopped parsley","1cup pitted Castelvetrano olives","crushed red pepper flakes","unsalted butter","1 cup basil leaves","2tsp. fresh lemon juice"]},{id:"59d0208e-0491",title:"Greek Salad",cookingTime:10,servings:3,ingredients:["6 firm ripe tomatoes","3 Lebanese cucumbers","1 red onion, sliced into rings","1 red capsicum, halved, deseeded, coarsely chopped","200g marinated Greek olives","220g marinated feta, coarsely chopped","1 tsp dried Greek oregano","1 tsp salt","125ml (1/2 cup) olive oil","60ml (1/4 cup) white vinegar"]},{id:"59d0208e-0492",title:"Potato Salad",cookingTime:10,servings:6,ingredients:["3 lb. gold potatoes, chopped","salt","1 1/2 cup. mayonnaise","1 small red onion, finely chopped","1 tbsp. Dijon mustard","1 tbsp. lemon juice","1/4 cup. chopped pickles","1/4 cup. finely chopped chives","Freshly ground black pepper"]},{id:"59d0208e-0493",title:"Garlic Pizza",cookingTime:20,servings:4,ingredients:["3/4 cup butter","1 tbs garlic crushed","1 pinch chives","2 cups tasty cheese grated","2 tbs parmesan cheese grated","olive oil","dough"]},{id:"59d0208e-0494",title:"Pumpkin soup",cookingTime:40,servings:6,ingredients:["2 tbsp olive oil","1 onion, finely chopped","1 leek, white part only, finely sliced","1 garlic clove, crushed","1/2 tsp ground coriander","1 tsp ground cumin","1kg peeled pumpkin, diced","1 large potato, peeled, diced","1L Massel chicken style liquid stock or vegetable liquid stock","1/2 cup (125ml) thin cream"]},{id:"59d0208e-0495",title:"Green soup",cookingTime:40,servings:6,ingredients:["2 tbsp olive oil","1 onion, finely chopped","1 leek, white part only, finely sliced","1 garlic clove, crushed","1/2 tsp ground coriander","1 tsp ground cumin","1kg peeled pumpkin, diced","1 large potato, peeled, diced","1L Massel chicken style liquid stock or vegetable liquid stock","1/2 cup (125ml) thin cream"]}],w=Object(i.createContext)(),I=function(e){var t=e.setMode,c=e.children,n=Object(i.useReducer)(R,[],(function(){var e=localStorage.getItem("recipes");return e?JSON.parse(e):C})),s=Object(r.a)(n,2),a=s[0],o=s[1],l=Object(i.useState)(),u=Object(r.a)(l,2),j=u[0],m=u[1];Object(i.useEffect)((function(){b(a.length),localStorage.setItem("recipes",JSON.stringify(a))}),[a.length,a]);var b=function(e){t(e>0?"read":"welcome")};return Object(d.jsx)(w.Provider,{value:{recipeList:a,activeRecipe:j,readRecipe:function(e){a.filter((function(t){return t.id===e&&m(t),t}))},setActiveRecipe:m,dispatchRecipeList:o,settingMode:b},children:c})},S=Object(i.createContext)();var E=function(e){var t=Object(i.useState)(0),c=Object(r.a)(t,2),n=c[0],s=c[1];return Object(d.jsx)(S.Provider,{value:{selectedRecipeId:n,setSelectedId:function(e){s(e)}},children:e.children})},T=c(49),F=c.n(T);var P=function(e){var t=e.recipeId,c=e.name,n=e.clickHandler,s=Object(i.useContext)(w).activeRecipe;return Object(d.jsx)("li",{"data-id":t,onClick:n,className:"".concat(F.a.li," text-capitalize ").concat(s&&s.id===t?F.a.active:""),children:c})};var L=function(e){var t=e.page,c=Object(i.useContext)(w),n=c.recipeList,s=c.readRecipe,a=Object(i.useContext)(S).setSelectedId,r=7*(t-1),o=n.slice(r,r+7),l=function(e){a(e.target.dataset.id),s(e.target.dataset.id)};return Object(d.jsxs)("ul",{className:y.a.ul,children:[Object(d.jsxs)("p",{className:y.a.p,children:[Object(d.jsx)("i",{className:"fas fa-arrow-circle-down me-2"}),"Select a recipe to check the details."]}),o.map((function(e){return Object(d.jsx)(P,{recipeId:e.id,name:e.title,clickHandler:l},e.id)}))]})},D=c(23),A=c.n(D);var q=function(e){var t=e.setMode,c=Object(i.useContext)(w),n=c.activeRecipe,s=c.dispatchRecipeList,a=c.setActiveRecipe,r=Object(i.useContext)(S),o=r.selectedRecipeId,l=r.setSelectedId,u=Object(i.useContext)(O).updateModalOpen;return Object(d.jsx)(d.Fragment,{children:n?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("ul",{className:"row ".concat(A.a.ul),children:[Object(d.jsx)("li",{children:Object(d.jsx)("h2",{children:n.title})}),Object(d.jsxs)("li",{className:"col-md-5 col-sm-3",children:[Object(d.jsx)("i",{className:"far fa-clock me-2"}),function(e){if(e>=60){var t=Math.floor(e/60),c=e%60;return c>0?t+"hr "+c+"mins":t+"hr "}return e+"mins"}(+n.cookingTime)]}),Object(d.jsxs)("li",{className:"col-md-4 col-sm-3",children:[Object(d.jsx)("i",{className:"fas fa-user-friends me-2"}),n.servings," servings"]}),Object(d.jsx)("li",{children:"Ingredients:"}),Object(d.jsx)("ul",{className:A.a.ingredients,children:n.ingredients.map((function(e,t){return Object(d.jsx)("li",{"data-index":t,children:e},t)}))})]},n.id),0!==o&&Object(d.jsxs)("div",{className:"d-flex justify-content-end mb-5",children:[Object(d.jsx)(p,{className:A.a.button,onClick:function(){u(),t("update")},children:"Update"}),Object(d.jsx)(p,{className:A.a.button,onClick:function(){window.confirm("Are you sure want to delete the recipe? If you delete the recipe, you will permanently lose your selected recipe.")&&(s({type:"REMOVE_RECIPE",id:o}),l(0),a(),alert("The recipe has been deleted successfully!"))},children:"Delete"})]})]}):""})},B=c(7),G=c.n(B);var H=function(e){var t,c,i=e.total,n=e.clickHandler,s=e.currentPage,a=Object(M.a)(Array(i).keys()).map((function(e){return e+1}));return 1===s&&1===a.length?"":Object(d.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[(t=s,c=a,1===t&&c.length>1?Object(d.jsx)("button",{className:G.a.button,disabled:!0,children:Object(d.jsx)("i",{className:"fas fa-chevron-left ".concat(G.a.i)})}):t<c.length||1!==t&&t===c.length?Object(d.jsx)("button",{"data-goto":s-1,className:G.a.button,onClick:function(){return n(s-1)},children:Object(d.jsx)("i",{className:"fas fa-chevron-left ".concat(G.a.i)})},s-1):void 0),Object(d.jsx)("span",{className:G.a.span,children:"".concat(s)})," / ",i,function(e,t){return 1===e&&t.length>1||e<t.length?Object(d.jsx)("button",{"data-goto":s+1,className:G.a.button,onClick:function(){return n(s+1)},children:Object(d.jsx)("i",{className:"fas fa-chevron-right ".concat(G.a.i)})},s+1):1!==e&&e===t.length?Object(d.jsx)("button",{className:G.a.button,disabled:!0,children:Object(d.jsx)("i",{className:"fas fa-chevron-right ".concat(G.a.i)})}):void 0}(s,a)]})},V=function(e){var t=e.setMode,c=Object(i.useContext)(w),n=c.recipeList,s=c.setActiveRecipe,a=Object(i.useContext)(S).setSelectedId,o=Object(i.useState)(1),l=Object(r.a)(o,2),u=l[0],j=l[1],m=Object(i.useState)(0),b=Object(r.a)(m,2),p=b[0],h=b[1];Object(i.useEffect)((function(){h(Math.ceil(n.length/7))}),[n.length]);return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("main",{className:"row",children:[Object(d.jsxs)("div",{className:"recipe col-sm-12 col-md-6 col-lg-5",children:[Object(d.jsx)(L,{page:u}),Object(d.jsx)(H,{total:p,currentPage:u,clickHandler:function(e){j(e),a(0),s()}})]}),Object(d.jsx)("section",{className:"recipe col-sm-12 col-md-6 col-lg-7",children:Object(d.jsx)(q,{setMode:t})})]})})},K=c(6),z=c(4),J=c.n(z),W=c(11),U=c(16),Z=c(193),X=c(194),Q=c(81),Y=c.n(Q);var $=function(e){return Object(d.jsx)("div",{className:"".concat(Y.a.card," ").concat(e.className),children:e.children})};var ee=function(e){var t=e.icon,c=e.remove,i=e.className,n=e.ingredients,s=function(e){c(e.target.dataset.index)};return Object(d.jsx)(d.Fragment,{children:n.length>0?n.map((function(e,c){return Object(d.jsxs)("li",{"data-index":c,className:"".concat(null!==i&&void 0!==i?i:""),onClick:s,children:[e,t&&Object(d.jsx)("i",{"data-index":c,className:t})]},c)})):""})},te=c(195),ce=U.c().shape({title:U.d().trim().strict(!0).required("Required").min(1),cookingTime:U.b().required("Required").positive("Invalid Cooking time").integer(),servings:U.b().required("Required").positive("Invalid Servings").integer(),ingredients:U.a().of(U.d()).required("Must have ingredients").min(2,"Minimum of 2 ingredients")});var ie=function(e){var t=e.mode,c=e.setMode,n=Object(i.useContext)(w),s=n.activeRecipe,r=n.setActiveRecipe,o=n.dispatchRecipeList,l=n.settingMode,u=n.recipeList,j=Object(i.useContext)(S),m=j.setSelectedId,b=j.selectedRecipeId,h=Object(i.useContext)(O),g=h.setShowModal,f=h.closeModal,x=function(){l(u.length),f()},v=null!==s&&void 0!==s?s:"",_=v.id,N=v.title,k=v.cookingTime,y=v.servings,M=v.ingredients,R=Object(W.e)({initialValues:"create"===t?{title:"",cookingTime:"",servings:"",ingredient:"",ingredients:[]}:"update"===t?{title:N,cookingTime:k,servings:y,ingredients:M}:"",onSubmit:function(e){console.log(JSON.stringify(e,null,2))}});return Object(d.jsxs)(d.Fragment,{children:[a.a.createPortal(Object(d.jsx)("div",{className:J.a.backdrop}),document.getElementById("backdrop-root")),a.a.createPortal(Object(d.jsx)(W.d,{initialValues:R.initialValues,validationSchema:ce,onKeyDown:function(e){return e.preventDefault()},onSubmit:function(e){return"create"===t?function(e){var t=Object(te.a)(),i=Object(K.a)(Object(K.a)({},e),{},{id:t});o({type:"ADD_RECIPE",recipe:i}),m(t),r(i),c("read"),f()}(e):function(e,t){o({type:"UPDATE_RECIPE",updatedRecipe:e,id:t}),r(e,e.id=t),c("read"),g(!1)}(e,b)},children:function(e){var c=e.errors,i=e.touched;return Object(d.jsxs)($,{className:J.a.modal,children:[Object(d.jsxs)(Z.a,{className:"align-items-center ".concat(J.a["modal-top"]),children:[Object(d.jsx)(X.a,{xs:12,sm:3,className:"d-flex justify-content-end",children:Object(d.jsx)(p,{icon:"fas fa-times",className:J.a["modal-close"],onClick:x})}),Object(d.jsx)(X.a,{xs:12,sm:9,children:Object(d.jsx)("header",{className:J.a["modal-header"],children:Object(d.jsx)("h3",{className:"fw-bold",children:"create"===t?"Add a new recipe":"Update a recipe"})})})]}),Object(d.jsx)(W.c,{children:Object(d.jsxs)(Z.a,{children:[Object(d.jsxs)(X.a,{sm:12,md:6,className:J.a.form,children:[Object(d.jsxs)(Z.a,{children:["update"===t&&Object(d.jsx)("input",{type:"hidden",name:"id",value:_}),Object(d.jsxs)(X.a,{className:"mb-4",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label fw-bold",children:"Recipe Title"}),Object(d.jsx)(W.a,{type:"text",id:"title",name:"title",className:"form-control ".concat(J.a.form)}),c.title&&i.title?Object(d.jsx)("div",{className:J.a.error,children:c.title}):null]})]}),Object(d.jsxs)(Z.a,{children:[Object(d.jsxs)(X.a,{xs:12,sm:6,className:"mb-4",children:[Object(d.jsx)("label",{htmlFor:"cookingTime",className:"form-label fw-bold",children:"Cook Time"}),Object(d.jsx)(W.a,{type:"number",id:"cookingTime",name:"cookingTime",placeholder:"min",className:"form-control ".concat(J.a.form),min:"1",step:"1"}),c.cookingTime&&i.cookingTime?Object(d.jsx)("div",{className:J.a.error,children:c.cookingTime}):null]}),Object(d.jsxs)(X.a,{xs:12,sm:6,className:"mb-4",children:[Object(d.jsx)("label",{htmlFor:"servings",className:"form-label fw-bold",children:"Servings"}),Object(d.jsx)(W.a,{type:"number",id:"servings",name:"servings",placeholder:"servings",className:"form-control ".concat(J.a.form),min:"1",step:"1"}),c.servings&&i.servings?Object(d.jsx)("div",{className:J.a.error,children:c.servings}):null]})]})]}),Object(d.jsx)(X.a,{sm:12,md:6,className:J.a.form,children:Object(d.jsx)(Z.a,{children:Object(d.jsxs)("div",{className:"mb-3 align-items-center",children:[Object(d.jsx)("label",{htmlFor:"ingredients",className:"form-label fw-bold",children:"Ingredients"}),Object(d.jsx)(W.b,{name:"ingredients",children:function(e){var t=e.unshift,n=e.remove,s=e.form,a=s.values,r=s.setFieldValue,o=a.ingredients;return Object(d.jsxs)("div",{children:[Object(d.jsx)(W.a,{type:"text",id:"ingredient",name:"ingredient",className:"form-control ".concat(J.a.form),placeholder:"Enter your ingredient",onKeyDown:function(e){"Enter"===e.key&&0!==e.target.value.trim().length&&(e.preventDefault(),t(e.target.value),r("ingredient",""))}}),c.ingredients&&i.ingredients?Object(d.jsx)("div",{className:J.a.error,children:c.ingredients}):null,Object(d.jsx)("ul",{className:"mt-4 ".concat(J.a.ul),children:Object(d.jsx)(ee,{icon:"fas fa-times",remove:n,ingredients:o,className:J.a.li})})]})}})]})})}),Object(d.jsx)(X.a,{className:"my-2",children:Object(d.jsx)(p,{type:"submit",children:"save"})})]})})]})}}),document.getElementById("modal-root"))]})};var ne=function(e){var t=e.mode,c=e.setMode,n=Object(i.useContext)(O).showModal;return Object(d.jsx)(d.Fragment,{children:n&&Object(d.jsx)(ie,{mode:t,setMode:c})})},se=function(e){var t=e.mode,c=e.setMode,n=Object(i.useContext)(O).showModal;return Object(d.jsx)(d.Fragment,{children:n&&Object(d.jsx)(ie,{mode:t,setMode:c})})};console.log("First App render");var ae=function(){var e=Object(i.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(d.jsx)("div",{className:"app container",children:Object(d.jsx)(I,{setMode:n,children:Object(d.jsxs)(f,{children:[Object(d.jsx)(x,{setMode:n}),Object(d.jsx)(E,{children:"welcome"===c?Object(d.jsx)(N,{}):"read"===c?Object(d.jsx)(V,{mode:c,setMode:n}):"create"===c?Object(d.jsx)(se,{mode:c,setMode:n}):"update"===c?Object(d.jsx)(ne,{mode:c,setMode:n}):""})]})})})};a.a.render(Object(d.jsx)(ae,{}),document.getElementById("root"))},23:function(e,t,c){e.exports={ul:"RecipeDetail_ul__1BjOt",ingredients:"RecipeDetail_ingredients__2zfhg",button:"RecipeDetail_button__3SNQD"}},36:function(e,t,c){e.exports={button:"Button_button__2l-Rf",icon:"Button_icon__3pdlG",fill:"Button_fill__3444V"}},37:function(e,t,c){e.exports={container:"WelcomeContent_container__2_ozm",h2:"WelcomeContent_h2__2YMA7"}},4:function(e,t,c){e.exports={form:"FormModal_form__3nZRu",backdrop:"FormModal_backdrop__1ocsl",modal:"FormModal_modal__3byJB","modal-top":"FormModal_modal-top__v-cgV","modal-header":"FormModal_modal-header__1guNf","modal-close":"FormModal_modal-close__3nPam",ul:"FormModal_ul__ng3SX",error:"FormModal_error__3cHIv",li:"FormModal_li__seVoW"}},47:function(e,t,c){e.exports={logo:"Logo_logo__1jH2J",icon:"Logo_icon__ZLdKm"}},48:function(e,t,c){e.exports={ul:"RecipeList_ul__vjicB",icon:"RecipeList_icon__29edH",p:"RecipeList_p__37Ayp"}},49:function(e,t,c){e.exports={li:"RecipeName_li__24I0t",active:"RecipeName_active__2sANL"}},7:function(e,t,c){e.exports={button:"Pagination_button__2flko",span:"Pagination_span__1hDiZ",i:"Pagination_i__vaIGs"}},75:function(e,t,c){e.exports={"btn-box":"Header_btn-box__1UoX_","btn-mobile":"Header_btn-mobile__3ine2"}},81:function(e,t,c){e.exports={card:"Card_card__35WdF"}},87:function(e,t,c){},88:function(e,t,c){}},[[190,1,2]]]);
//# sourceMappingURL=main.3358dd6e.chunk.js.map