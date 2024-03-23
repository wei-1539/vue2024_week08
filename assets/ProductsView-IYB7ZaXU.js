import{_ as P,o as a,c as i,d as t,C as p,B as m,F as _,e as f,t as c,m as x,r as v,f as u,g as b,h as w}from"./index-LlUqnSE7.js";import{u as L}from"./cartStore-7c6p7mGp.js";import{a as C,u as N}from"./axios-DlGGDRsH.js";import{L as T}from"./LoadingComponent-ujB0LiAI.js";const $={props:["pages"],methods:{emitPages(n){this.$emit("emit-pages",n)}}},E={"aria-label":"Page navigation example"},A={class:"pagination justify-content-end m-0"},S=t("i",{class:"bi bi-caret-left-fill"},null,-1),V=[S],R={key:0,class:"page-link bg-dark text-light border-0"},q=["onClick"],B=t("i",{class:"bi bi-caret-right-fill"},null,-1),M=[B];function U(n,s,e,l,d,g){return a(),i("nav",E,[t("ul",A,[t("li",{class:p(["page-item",{disabled:e.pages.current_page===1}])},[t("a",{class:p(["page-link bg-dark text-light opacity-50 border-0",{"opacity-25":e.pages.current_page===1}]),href:"#","aria-label":"Previous",onClick:s[0]||(s[0]=m(r=>g.emitPages(e.pages.current_page-1),["prevent"]))},V,2)],2),(a(!0),i(_,null,f(e.pages.total_pages,(r,h)=>(a(),i("li",{class:p(["page-item",{active:r===e.pages.current_page}]),key:h},[r===e.pages.current_page?(a(),i("span",R,c(r),1)):(a(),i("a",{key:1,class:"page-link bg-dark text-light opacity-50 border-0",href:"#",onClick:m(k=>g.emitPages(r),["prevent"])},c(r),9,q))],2))),128)),t("li",{class:p(["page-item",{disabled:e.pages.current_page===e.pages.total_pages}])},[t("a",{class:p(["page-link bg-dark text-light opacity-50 border-0",{"opacity-25":e.pages.current_page===e.pages.total_pages}]),href:"#","aria-label":"Next",onClick:s[1]||(s[1]=m(r=>g.emitPages(e.pages.current_page+1),["prevent"]))},M,2)],2)])])}const D=P($,[["render",U]]);var H={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"wei_rio",BASE_URL:"/vue2024_week08/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:I,VITE_PATH:j}=H,z={components:{LoadingComponent:T,Pagination:D},data(){return{products:[],categories:["動作","喜劇","勵志","愛情","動畫","驚悚"],isLoading:!1,pagination:{},currentPage:1}},watch:{"$route.query":{handler(){this.getProduct()},deep:!0}},methods:{...x(L,["addToCart"]),...x(N,["pushMessage"]),getProduct(n=1){this.currentPage=n;const{category:s=""}=this.$route.query,e=`${I}api/${j}/products?page=${n}&category=${s}`;this.isLoading=!0,C.get(e).then(l=>{this.products=l.data.products,this.pagination=l.data.pagination,this.linkActive(s),window.scrollTo({behavior:"smooth",top:0})}).catch(l=>{this.pushMessage({style:"danger",title:"產品資訊取得失敗",content:l.response.data.message})}).finally(()=>{setTimeout(()=>{this.isLoading=!1},500)})},headerNav(){const n=document.querySelector("#headerNav"),s=document.querySelector("#productNav");window.addEventListener("scroll",()=>{window.scrollY>=0?s.style.top=`${n.clientHeight}px`:s.style.top="0px"})},linkActive(n){const s=document.querySelectorAll("#productNav .text-light");s.forEach(e=>{e.classList.remove("linkActive"),e.innerText===n?e.classList.add("linkActive"):n===""&&s[0].classList.add("linkActive")})}},mounted(){this.getProduct(),this.headerNav()}},F={class:"bg-dark text-light pb-4"},O={id:"productNav",class:"position-sticky navbar navbar-expand-lg navbar-dark justify-content-evenly align-items-center border border-start-0 border-end-0 border-top border-bottom position-sticky bg-dark",style:{"z-index":"1"}},Y={class:"list-unstyled row mb-lg-0 mb-2 productNavControl"},G={class:"col-lg col-4 text-center"},J={class:"container mt-md-5 mt-3"},K={class:"row list-unstyled mb-0"},Q={class:"card rounded-2 overflow-hidden border-0 mb-4 position-relative position-relative"},W={class:"position-relative"},X=["src"],Z={class:"card-body p-0 text-center"},tt={class:"mb-0 mt-3 text-muted"},et={class:"d-flex justify-content-center align-items-center my-2"},st={key:0,class:"mb-0 text-danger fw-bold fs-5"},ot={key:1},at={class:"text-muted me-3"},it={class:"mb-0 text-danger fw-bold fs-5 d-inline-block"},nt=["onClick"];function rt(n,s,e,l,d,g){const r=v("RouterLink"),h=v("Pagination"),k=v("LoadingComponent");return a(),i(_,null,[t("div",F,[t("section",null,[t("nav",O,[t("ul",Y,[t("li",G,[u(r,{class:"text-light text-decoration-none text-nowrap p-1 w-100 d-block opacity-50",to:"/products?category="},{default:b(()=>[w("全部")]),_:1})]),(a(!0),i(_,null,f(d.categories,(o,y)=>(a(),i("li",{class:"col-lg col-4 text-center",key:y},[u(r,{class:"text-light text-decoration-none text-nowrap p-1 w-100 d-block opacity-50",to:`/products?category=${o}`},{default:b(()=>[w(c(o),1)]),_:2},1032,["to"])]))),128))])]),t("div",J,[t("ul",K,[(a(!0),i(_,null,f(d.products,o=>(a(),i("li",{class:"col-lg-3",key:o.id,"data-aos":"fade-right"},[t("div",Q,[t("div",W,[u(r,{to:`/product/${o.id}`,href:"",class:"imgHover"},{default:b(()=>[t("img",{src:o.imageUrl,class:"card-img-top rounded-0",alt:"..."},null,8,X)]),_:2},1032,["to"])]),t("div",Z,[t("h5",tt,c(o.title),1),t("div",et,[o.origin_price===o.price?(a(),i("p",st,"NT$ "+c(o.price),1)):(a(),i("div",ot,[t("del",at,"NT$ "+c(o.origin_price),1),t("p",it,"NT$ "+c(o.price),1)]))]),t("button",{class:"btn btn-outline-danger mb-3",onClick:y=>this.addToCart(o.id)},"加入購物車",8,nt)])])]))),128))]),u(h,{pages:d.pagination,onEmitPages:g.getProduct},null,8,["pages","onEmitPages"])])])]),u(k,{active:d.isLoading,"onUpdate:active":s[0]||(s[0]=o=>d.isLoading=o)},null,8,["active"])],64)}const pt=P(z,[["render",rt]]);export{pt as default};