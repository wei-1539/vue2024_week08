import{_ as P,o as a,c as n,a as e,n as p,k as _,F as h,h as f,t as c,m as x,r as v,g as u,w as b,d as w}from"./index-cDLFXX9z.js";import{u as L}from"./cartStore-r2umwzxU.js";import{a as C,u as N}from"./axios-aOlrxKEM.js";import{L as T}from"./LoadingComponent-qIX2fg1U.js";const $={props:["pages"],methods:{emitPages(i){this.$emit("emit-pages",i)}}},E={"aria-label":"Page navigation example"},A={class:"pagination justify-content-end m-0"},S=e("i",{class:"bi bi-caret-left-fill"},null,-1),V=[S],R={key:0,class:"page-link bg-dark text-light border-0"},q=["onClick"],M=e("i",{class:"bi bi-caret-right-fill"},null,-1),U=[M];function B(i,s,t,l,d,g){return a(),n("nav",E,[e("ul",A,[e("li",{class:p(["page-item",{disabled:t.pages.current_page===1}])},[e("a",{class:p(["page-link bg-dark text-light border-0",[t.pages.current_page===1?"opacity-15":"opacity-25"]]),href:"#","aria-label":"Previous",onClick:s[0]||(s[0]=_(r=>g.emitPages(t.pages.current_page-1),["prevent"]))},V,2)],2),(a(!0),n(h,null,f(t.pages.total_pages,(r,m)=>(a(),n("li",{class:p(["page-item",{active:r===t.pages.current_page}]),key:m},[r===t.pages.current_page?(a(),n("span",R,c(r),1)):(a(),n("a",{key:1,class:"page-link bg-dark text-light opacity-50 border-0",href:"#",onClick:_(k=>g.emitPages(r),["prevent"])},c(r),9,q))],2))),128)),e("li",{class:p(["page-item",{disabled:t.pages.current_page===t.pages.total_pages}])},[e("a",{class:p(["page-link bg-dark text-light border-0",[t.pages.current_page===t.pages.total_pages?"opacity-15":"opacity-25"]]),href:"#","aria-label":"Next",onClick:s[1]||(s[1]=_(r=>g.emitPages(t.pages.current_page+1),["prevent"]))},U,2)],2)])])}const D=P($,[["render",B]]);var H={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"wei_rio",BASE_URL:"/vue2024_week08/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:I,VITE_PATH:j}=H,z={components:{LoadingComponent:T,Pagination:D},data(){return{products:[],categories:["動作","喜劇","勵志","愛情","動畫","驚悚"],isLoading:!1,pagination:{},currentPage:1}},watch:{"$route.query":{handler(){this.getProduct()},deep:!0}},methods:{...x(L,["addToCart"]),...x(N,["pushMessage"]),getProduct(i=1){this.currentPage=i;const{category:s=""}=this.$route.query,t=`${I}api/${j}/products?page=${i}&category=${s}`;this.isLoading=!0,C.get(t).then(l=>{this.products=l.data.products,this.pagination=l.data.pagination,this.linkActive(s),window.scrollTo({behavior:"smooth",top:0})}).catch(l=>{this.pushMessage({style:"danger",title:"產品資訊取得失敗",content:l.response.data.message})}).finally(()=>{setTimeout(()=>{this.isLoading=!1},500)})},headerNav(){const i=document.querySelector("#headerNav"),s=document.querySelector("#productNav");window.addEventListener("scroll",()=>{window.scrollY>=0?s.style.top=`${i.clientHeight}px`:s.style.top="0px"})},linkActive(i){const s=document.querySelectorAll("#productNav .text-light");s.forEach(t=>{t.classList.remove("linkActive"),t.innerText===i?t.classList.add("linkActive"):i===""&&s[0].classList.add("linkActive")})}},mounted(){this.getProduct(),this.headerNav()}},F={class:"bg-dark text-light pb-4"},O={id:"productNav",class:"position-sticky navbar navbar-expand-lg navbar-dark justify-content-evenly align-items-center border border-start-0 border-end-0 border-top border-bottom position-sticky bg-dark",style:{"z-index":"1"}},Y={class:"list-unstyled row mb-lg-0 mb-2 productNavControl"},G={class:"col-lg col-4 text-center"},J={class:"container mt-md-5 mt-3"},K={class:"row list-unstyled mb-0"},Q={class:"card rounded-2 overflow-hidden border-0 mb-4 position-relative position-relative"},W={class:"position-relative imgHover"},X=["src","alt"],Z={class:"card-body p-0 text-center my-3 d-flex flex-column align-items-center"},ee={class:"mb-0 text-muted"},te={class:"d-flex justify-content-center align-items-center my-2"},se={key:0,class:"mb-0 text-danger fw-bold fs-5"},oe={key:1},ae={class:"text-muted me-3"},ne={class:"mb-0 text-danger fw-bold fs-5 d-inline-block"},ie=["onClick"];function re(i,s,t,l,d,g){const r=v("RouterLink"),m=v("Pagination"),k=v("LoadingComponent");return a(),n(h,null,[e("div",F,[e("section",null,[e("nav",O,[e("ul",Y,[e("li",G,[u(r,{class:"text-light text-decoration-none text-nowrap p-1 w-100 d-block opacity-50",to:"/products?category="},{default:b(()=>[w("全部")]),_:1})]),(a(!0),n(h,null,f(d.categories,(o,y)=>(a(),n("li",{class:"col-lg col-4 text-center",key:y},[u(r,{class:"text-light text-decoration-none text-nowrap p-1 w-100 d-block opacity-50",to:`/products?category=${o}`},{default:b(()=>[w(c(o),1)]),_:2},1032,["to"])]))),128))])]),e("div",J,[e("ul",K,[(a(!0),n(h,null,f(d.products,o=>(a(),n("li",{class:"col-lg-3",key:o.id,"data-aos":"fade-right"},[e("div",Q,[u(r,{to:`/product/${o.id}`,href:"",class:"text-decoration-none imgControl"},{default:b(()=>[e("div",W,[e("img",{src:o.imageUrl,class:"card-img-top rounded-0",alt:o.title},null,8,X)]),e("div",Z,[e("h5",ee,c(o.title),1),e("div",te,[o.origin_price===o.price?(a(),n("p",se,"NT$ "+c(o.price),1)):(a(),n("div",oe,[e("del",ae,"NT$ "+c(o.origin_price),1),e("p",ne,"NT$ "+c(o.price),1)]))]),e("button",{class:"btn btn-outline-danger w-50 position-relative z-10",onClick:_(y=>this.addToCart(o.id),["prevent"])},"加入購物車",8,ie)])]),_:2},1032,["to"])])]))),128))]),u(m,{pages:d.pagination,onEmitPages:g.getProduct},null,8,["pages","onEmitPages"])])])]),u(k,{active:d.isLoading,"onUpdate:active":s[0]||(s[0]=o=>d.isLoading=o)},null,8,["active"])],64)}const pe=P(z,[["render",re]]);export{pe as default};
