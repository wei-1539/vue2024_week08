import{_ as L,m,r as _,o as a,c as d,a as t,g as c,w as l,t as n,d as h,F as b,h as g,i as V,v as S,l as M,b as q}from"./index-emLtRGxt.js";import{u as A}from"./cartStore-pN3ZmjFa.js";import{a as y,u as D}from"./axios-RRQbb5W4.js";import{S as P,a as E,A as N,P as R,N as U}from"./autoplay-qpTfYpia.js";import{L as B}from"./LoadingComponent-IeJUYtMv.js";var I={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"wei_rio",BASE_URL:"/vue2024_week08/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:f,VITE_PATH:v}=I,j={components:{Swiper:P,SwiperSlide:E,LoadingComponent:B},data(){return{modules:[N,R,U],product:{},newContentTitle:"",newContent:[],filterMovie:[],isLoading:!1,qty:1}},methods:{...m(A,["addToCart","changeCartQty"]),...m(D,["pushMessage"]),getProduct(){this.getCategoryData();const{id:r}=this.$route.params,o=`${f}api/${v}/product/${r}`;this.isLoading=!0,y.get(o).then(i=>{this.product=i.data.product,this.content()}).catch(i=>{this.pushMessage({style:"danger",title:"產品資訊取得失敗",content:i.response.data.message})}).finally(()=>{setTimeout(()=>{this.isLoading=!1},500)})},content(){const r=this.product.content.split(`
`),o=[];for(let i=0;i<r.length;i++)o.push(r[i]);this.newContentTitle=o[0],o.shift(),this.newContent=o},getCategoryData(){const{id:r}=this.$route.params,o=`${f}api/${v}/products/all`;let i=null;this.isLoading=!0,y.get(o).then(p=>{this.product=p.data.products.find(e=>e.id===r),this.content(),i=p.data.products.filter(e=>e.category===this.product.category&&e.title!==this.product.title),this.filterMovie=i}).catch(p=>{this.pushMessage({style:"danger",title:"產品資訊取得失敗",content:p.response.data.message})}).finally(()=>{setTimeout(()=>{this.isLoading=!1},500)})},reload(){window.scrollTo({behavior:"smooth",top:0})}},mounted(){this.getCategoryData(),window.scrollTo({behavior:"smooth",top:0})},created(){this.$watch(()=>this.$route.params,()=>{this.getCategoryData()})}},F={class:"bg-dark text-light py-lg-7 py-4"},O={class:"container overflow-hidden pb-7"},Q={class:"row"},H={class:"col-md-6 d-flex flex-column justify-content-center mb-lg-0 mb-4"},Y={"aria-label":"breadcrumb "},z={class:"breadcrumb d-lg-none bg-dark px-0 mb-3"},G={class:"breadcrumb-item opacity-50"},J=t("li",{class:"opacity-25 px-2"},"/",-1),K={class:"breadcrumb-item opacity-50"},W=t("li",{class:"opacity-25 px-2"},"/",-1),X={class:"breadcrumb-item","aria-current":"page"},Z=["src","alt"],$={class:"col-md-6"},tt={"aria-label":"breadcrumb "},et={class:"breadcrumb bg-dark px-0 mb-2 d-none d-lg-flex"},ot={class:"breadcrumb-item opacity-50"},st=t("li",{class:"opacity-25 px-2"},"/",-1),it={class:"breadcrumb-item opacity-50"},nt=t("li",{class:"opacity-25 px-2"},"/",-1),rt={class:"breadcrumb-item","aria-current":"page"},at={class:"mb-1"},ct={class:"d-flex justify-content-end border-3 border-bottom pb-2 mb-4"},lt={key:0,class:"h5 mb-0 fw-bold text-danger me-3"},dt={key:1},pt={class:"h5 mb-0 me-4 opacity-75"},ut={class:"d-inline-block h5 mb-0 fw-bold text-danger me-3"},ht={class:"mb-0"},_t={class:"d-inline-block ms-2"},bt={class:"mb-4 border-3 border-bottom"},mt=t("h4",{class:"mb-2"},"電影描述",-1),gt={class:"movieContent opacity-75"},yt={class:"mb-2"},ft={class:"mb-4"},vt={class:"row align-items-center"},wt={class:"col-6"},xt={class:"input-group my-3 rounded bg-dark"},Ct={class:"input-group-prepend"},kt=["disabled"],Tt=t("i",{class:"bi bi-dash fs-5"},null,-1),Lt=[Tt],Vt={class:"input-group-append"},St=t("i",{class:"bi bi-plus fs-5"},null,-1),Mt=[St],qt={class:"col-6"},At={class:"w-100 position-relative my-5 border-3 border-top pt-5",style:{"padding-bottom":"56.25%"}},Dt=t("h3",{class:"mb-4 border-3 border-start border-danger ps-lg-3 ps-2"},"觀賞預告片",-1),Pt=["src"],Et={class:"pt-8"},Nt={class:"container bg-dark"},Rt=t("h2",{class:"text-light mb-lg-4 mb-3 ps-lg-3 ps-2 border-3 border-start border-danger"},"推薦電影",-1),Ut=["src","alt"];function Bt(r,o,i,p,e,w){const u=_("RouterLink"),x=_("swiper-slide"),C=_("swiper"),k=_("LoadingComponent");return a(),d(b,null,[t("div",F,[t("section",null,[t("div",O,[t("div",Q,[t("div",H,[t("nav",Y,[t("ol",z,[t("li",G,[c(u,{to:"/",class:"text-light text-decoration-none"},{default:l(()=>[h(" 首頁 ")]),_:1})]),J,t("li",K,[c(u,{to:"/products",class:"text-light text-decoration-none"},{default:l(()=>[h(" 電影種類 ")]),_:1})]),W,t("li",X,n(e.product.title),1)])]),t("img",{class:"w-100 mx-auto",style:{"object-fit":"cover","max-width":"425px"},src:e.product.imageUrl,alt:e.product.title},null,8,Z)]),t("div",$,[t("nav",tt,[t("ol",et,[t("li",ot,[c(u,{to:"/",class:"text-light text-decoration-none"},{default:l(()=>[h(" 首頁 ")]),_:1})]),st,t("li",it,[c(u,{to:"/products",class:"text-light text-decoration-none"},{default:l(()=>[h(" 電影種類 ")]),_:1})]),nt,t("li",rt,n(e.product.title),1)])]),t("h2",at,n(e.product.title),1),t("p",null,n(e.product.category)+"片",1),t("div",ct,[e.product.origin_price===e.product.price?(a(),d("p",lt,"NT$ "+n(e.product.price),1)):(a(),d("div",dt,[t("del",pt,"NT$ "+n(e.product.origin_price),1),t("p",ut,"NT$ "+n(e.product.price),1)])),t("p",ht,[h("/"),t("span",_t,n(e.product.unit),1)])]),t("div",bt,[mt,t("p",gt,n(e.product.description),1),t("h4",yt,n(e.newContentTitle),1),t("div",ft,[(a(!0),d(b,null,g(e.newContent,(s,T)=>(a(),d("p",{class:"movieContent opacity-75 mb-0",key:T},n(s),1))),128))])]),t("div",vt,[t("div",wt,[t("div",xt,[t("div",Ct,[t("button",{class:"btn btn-outline-light rounded-0 p-2 bg-dark text-light",type:"button",id:"button-addon1",disabled:this.qty===1,onClick:o[0]||(o[0]=s=>{this.qty--,r.changeCartQty(e.product.id,this.qty)})},Lt,8,kt)]),V(t("input",{type:"text",class:"form-control border text-center shadow-none bg-dark text-light fs-5",value:"1",min:"1",readonly:"","onUpdate:modelValue":o[1]||(o[1]=s=>this.qty=s)},null,512),[[S,this.qty]]),t("div",Vt,[t("button",{class:"btn btn-outline-light rounded-0 p-2 bg-dark text-light",type:"button",id:"button-addon2",onClick:o[2]||(o[2]=s=>{this.qty++,r.changeCartQty(e.product.id,this.qty)})},Mt)])])]),t("div",qt,[t("a",{class:"text-nowrap btn btn-danger w-100 py-2",onClick:o[3]||(o[3]=M(s=>r.addToCart(e.product.id,this.qty),["prevent"]))},"加入購物車")])])])]),t("div",At,[Dt,t("iframe",{id:"player",class:"position-absolute",width:"100%",height:"100%",src:`${e.product.youtubeLink}?rel=0&showinfo=0&color=white`,title:"YouTube video player",frameborder:"0",allow:" autoplay; ",allowfullscreen:""},null,8,Pt)]),t("section",Et,[t("div",Nt,[Rt,c(C,{modules:e.modules,pagination:!0,navigation:!0,loop:!0,speed:1500,autoplay:{delay:2500,disableOnInteraction:!1},"space-between":30,slidesPerView:1,breakpoints:{960:{slidesPerView:3}},class:"mySwiper"},{default:l(()=>[(a(!0),d(b,null,g(e.filterMovie,s=>(a(),q(x,{key:s.id},{default:l(()=>[c(u,{to:`/product/${s.id}`,onClick:w.reload},{default:l(()=>[t("img",{src:s.imageUrl,alt:s.title},null,8,Ut)]),_:2},1032,["to","onClick"])]),_:2},1024))),128))]),_:1},8,["modules"])])])])])]),c(k,{active:e.isLoading,"onUpdate:active":o[4]||(o[4]=s=>e.isLoading=s)},null,8,["active"])],64)}const Ht=L(j,[["render",Bt]]);export{Ht as default};
