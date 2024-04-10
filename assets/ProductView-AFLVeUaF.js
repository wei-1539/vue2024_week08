import{_ as L,m,r as h,o as a,c as d,a as t,g as c,w as l,t as r,d as _,F as b,h as g,i as V,v as S,k as M,b as P}from"./index-Gtiy1WfR.js";import{u as q}from"./cartStore-juAQW-lP.js";import{a as y,u as A}from"./axios-lqUOde5C.js";import{S as D,a as E,A as N,P as R,N as U}from"./autoplay-ZmIk-w7M.js";import{L as B}from"./LoadingComponent-jju5x8oo.js";var I={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"wei_rio",BASE_URL:"/vue2024_week08/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:f,VITE_PATH:v}=I,F={components:{Swiper:D,SwiperSlide:E,LoadingComponent:B},data(){return{modules:[N,R,U],product:{},newContentTitle:"",newContent:[],filterMovie:[],isLoading:!1,qty:1}},methods:{...m(q,["addToCart","changeCartQty"]),...m(A,["pushMessage"]),getProduct(){this.getCategoryData();const{id:n}=this.$route.params,s=`${f}api/${v}/product/${n}`;this.isLoading=!0,y.get(s).then(i=>{this.product=i.data.product,this.content()}).catch(i=>{this.pushMessage({style:"danger",title:"產品資訊取得失敗",content:i.response.data.message})}).finally(()=>{setTimeout(()=>{this.isLoading=!1},500)})},content(){const n=this.product.content.split(`
`),s=[];for(let i=0;i<n.length;i++)s.push(n[i]);this.newContentTitle=s[0],s.shift(),this.newContent=s},getCategoryData(){const{id:n}=this.$route.params,s=`${f}api/${v}/products/all`;let i=null;this.isLoading=!0,y.get(s).then(p=>{this.product=p.data.products.find(e=>e.id===n),this.content(),i=p.data.products.filter(e=>e.category===this.product.category&&e.title!==this.product.title),this.filterMovie=i}).catch(p=>{this.pushMessage({style:"danger",title:"產品資訊取得失敗",content:p.response.data.message})}).finally(()=>{setTimeout(()=>{this.isLoading=!1},500)})},reload(){window.scrollTo({behavior:"smooth",top:0})}},mounted(){this.getCategoryData(),window.scrollTo({behavior:"smooth",top:0})},created(){this.$watch(()=>this.$route.params,()=>{this.getProduct()})}},O={class:"bg-dark text-light py-lg-7 py-4"},Q={class:"container pb-7"},j={class:"row"},H={class:"col-md-7 d-flex flex-column justify-content-center mb-lg-0 mb-4"},Y={"aria-label":"breadcrumb "},z={class:"breadcrumb d-lg-none bg-dark px-0 mb-3"},G={class:"breadcrumb-item opacity-50"},J=t("li",{class:"opacity-25 px-2"},"/",-1),K={class:"breadcrumb-item opacity-50"},W=t("li",{class:"opacity-25 px-2"},"/",-1),X=t("li",{class:"breadcrumb-item","aria-current":"page"},"明細",-1),Z=["src","alt"],$={class:"col-md-5"},tt={"aria-label":"breadcrumb "},et={class:"breadcrumb bg-dark px-0 mb-2 d-none d-lg-flex"},st={class:"breadcrumb-item opacity-50"},ot=t("li",{class:"opacity-25 px-2"},"/",-1),it={class:"breadcrumb-item opacity-50"},nt=t("li",{class:"opacity-25 px-2"},"/",-1),rt=t("li",{class:"breadcrumb-item","aria-current":"page"},"明細",-1),at={class:"mb-1"},ct={class:"d-flex justify-content-end border-3 border-bottom pb-2 mb-4"},lt={key:0,class:"h5 mb-0 fw-bold text-danger me-3"},dt={key:1},pt={class:"h5 mb-0 me-4 opacity-75"},ut={class:"d-inline-block h5 mb-0 fw-bold text-danger me-3"},_t={class:"mb-0"},ht={class:"d-inline-block ms-2"},bt={class:"mb-4 border-3 border-bottom"},mt=t("h4",{class:"mb-2"},"電影描述",-1),gt={class:"movieContent opacity-75"},yt={class:"mb-2"},ft={class:"mb-4"},vt={class:"row align-items-center"},wt={class:"col-6"},xt={class:"input-group my-3 rounded bg-dark"},kt={class:"input-group-prepend"},Ct=["disabled"],Tt=t("i",{class:"bi bi-dash fs-5"},null,-1),Lt=[Tt],Vt={class:"input-group-append"},St=t("i",{class:"bi bi-plus fs-5"},null,-1),Mt=[St],Pt={class:"col-6"},qt={class:"w-100 position-relative my-5 border-3 border-top pt-5",style:{"padding-bottom":"56.25%"}},At=t("h3",{class:"mb-4 border-3 border-start border-danger ps-lg-3 ps-2"},"觀賞預告片",-1),Dt=["src"],Et={class:"pt-8"},Nt={class:"container bg-dark"},Rt=t("h2",{class:"text-light mb-lg-4 mb-3 ps-lg-3 ps-2 border-3 border-start border-danger"},"推薦電影",-1),Ut=["src","alt"];function Bt(n,s,i,p,e,w){const u=h("RouterLink"),x=h("swiper-slide"),k=h("swiper"),C=h("LoadingComponent");return a(),d(b,null,[t("div",O,[t("section",null,[t("div",Q,[t("div",j,[t("div",H,[t("nav",Y,[t("ol",z,[t("li",G,[c(u,{to:"/",class:"text-light text-decoration-none"},{default:l(()=>[_(" 首頁 ")]),_:1})]),J,t("li",K,[c(u,{to:"/products",class:"text-light text-decoration-none"},{default:l(()=>[_(" 電影選單 ")]),_:1})]),W,X])]),t("img",{class:"w-75 mx-auto",style:{},src:e.product.imageUrl,alt:e.product.title},null,8,Z)]),t("div",$,[t("nav",tt,[t("ol",et,[t("li",st,[c(u,{to:"/",class:"text-light text-decoration-none"},{default:l(()=>[_(" 首頁 ")]),_:1})]),ot,t("li",it,[c(u,{to:"/products",class:"text-light text-decoration-none"},{default:l(()=>[_(" 電影選單 ")]),_:1})]),nt,rt])]),t("h2",at,r(e.product.title),1),t("p",null,r(e.product.category)+"片",1),t("div",ct,[e.product.origin_price===e.product.price?(a(),d("p",lt,"NT$ "+r(e.product.price),1)):(a(),d("div",dt,[t("del",pt,"NT$ "+r(e.product.origin_price),1),t("p",ut,"NT$ "+r(e.product.price),1)])),t("p",_t,[_("/"),t("span",ht,r(e.product.unit),1)])]),t("div",bt,[mt,t("p",gt,r(e.product.description),1),t("h4",yt,r(e.newContentTitle),1),t("div",ft,[(a(!0),d(b,null,g(e.newContent,(o,T)=>(a(),d("p",{class:"movieContent opacity-75 mb-0",key:T},r(o),1))),128))])]),t("div",vt,[t("div",wt,[t("div",xt,[t("div",kt,[t("button",{class:"btn btn-outline-light rounded-0 p-2 bg-dark text-light",type:"button",id:"button-addon1",disabled:this.qty===1,onClick:s[0]||(s[0]=o=>{this.qty--,n.changeCartQty(e.product.id,this.qty)})},Lt,8,Ct)]),V(t("input",{type:"text",class:"form-control border text-center shadow-none bg-dark text-light fs-5",value:"1",min:"1",readonly:"","onUpdate:modelValue":s[1]||(s[1]=o=>this.qty=o)},null,512),[[S,this.qty]]),t("div",Vt,[t("button",{class:"btn btn-outline-light rounded-0 p-2 bg-dark text-light",type:"button",id:"button-addon2",onClick:s[2]||(s[2]=o=>{this.qty++,n.changeCartQty(e.product.id,this.qty)})},Mt)])])]),t("div",Pt,[t("a",{class:"text-nowrap btn btn-danger w-100 py-2",onClick:s[3]||(s[3]=M(o=>n.addToCart(e.product.id,this.qty),["prevent"]))},"加入購物車")])])])]),t("div",qt,[At,t("iframe",{id:"player",class:"position-absolute",width:"100%",height:"100%",src:`${e.product.youtubeLink}?rel=0&showinfo=0&color=white`,title:"YouTube video player",frameborder:"0",allow:" autoplay; ",allowfullscreen:""},null,8,Dt)]),t("section",Et,[t("div",Nt,[Rt,c(k,{modules:e.modules,pagination:!0,navigation:!0,loop:!0,speed:1500,autoplay:{delay:2500,disableOnInteraction:!1},"space-between":30,slidesPerView:1,breakpoints:{960:{slidesPerView:3}},class:"mySwiper"},{default:l(()=>[(a(!0),d(b,null,g(e.filterMovie,o=>(a(),P(x,{key:o.id},{default:l(()=>[c(u,{to:`/product/${o.id}`,onClick:w.reload},{default:l(()=>[t("img",{src:o.imageUrl,alt:o.title},null,8,Ut)]),_:2},1032,["to","onClick"])]),_:2},1024))),128))]),_:1},8,["modules"])])])])])]),c(C,{active:e.isLoading,"onUpdate:active":s[4]||(s[4]=o=>e.isLoading=o)},null,8,["active"])],64)}const Ht=L(F,[["render",Bt]]);export{Ht as default};
