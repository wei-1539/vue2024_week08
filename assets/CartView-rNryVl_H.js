import{_ as M,m as k,f as D,r as p,o as i,c as d,a as t,g as r,w as _,n as m,F as f,h as A,d as n,t as l,i as g,v,D as R,e as j}from"./index-cDLFXX9z.js";import{u as y}from"./cartStore-r2umwzxU.js";import{L as N}from"./LoadingComponent-qIX2fg1U.js";import{D as $,a as L}from"./DelModal-Lq-bhoXf.js";import"./axios-aOlrxKEM.js";import"./modalMixin-Ko2PK9t6.js";import"./selector-engine-BwXYVkrl.js";const S={components:{LoadingComponent:N,DelAllModal:$,DelModal:L},data(){return{couponCode:"",tempCart:{},productID:""}},methods:{...k(y,["getCart","removeCartAll","removeCartItem","changeCartQty","useCoupon"]),openRemoveAllModal(){this.$refs.delAllModal.openModal()},closeRemoveAllModal(){this.removeCartAll(),this.$refs.delAllModal.hideModal()},openRemoveModal(e){this.productID=e;const o=this.carts.find(u=>u.id===e);this.tempCart=o.product,console.log(this.tempCart),this.$refs.delModal.openModal()},closeRemoveModal(e){this.removeCartItem(e),this.$refs.delModal.hideModal()}},computed:{...D(y,["carts","total","isLoading","final_total","couponSuccess"])},mounted(){window.scrollTo({behavior:"smooth",top:0}),this.getCart()}},T={class:"bg-dark text-light py-lg-8 py-5"},V={class:"container"},q=j('<ul class="d-flex justify-content-center align-items-center list-unstyled w-75 mx-auto mb-5"><li class="text-center"><p class="mb-0 text-sm fs-xs fs-lg-sm">Step.1</p><p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">購買項目</p></li><i class="bi bi-chevron-right mx-lg-4 mx-2 mx-md-5"></i><li class="text-center opacity-50"><p class="mb-0 text-sm fs-xs fs-lg-sm">Step.2</p><p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">填寫資料</p></li><i class="bi bi-chevron-right mx-lg-4 mx-2 mx-md-5"></i><li class="text-center opacity-50"><p class="mb-0 text-sm fs-xs fs-lg-sm">Step.3</p><p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">付款資訊</p></li><i class="bi bi-chevron-right mx-lg-4 mx-2 mx-md-5"></i><li class="text-center opacity-50"><p class="mb-0 text-sm fs-xs fs-lg-sm">Step.4</p><p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">訂單完成</p></li></ul>',1),I=t("i",{class:"bi bi-caret-left-fill"},null,-1),U={class:"row gx-5"},B={class:"col-md-8 mb-8 mb-lg-0"},Q={class:"d-flex justify-content-between mb-4"},F=t("h4",null,"購物車品項",-1),z={key:0,class:"fs-2 text-center h-100 py-5 mb-0"},E={key:1,class:"list-unstyled"},P=["src","alt"],G={class:"ms-4 d-flex flex-column justify-content-between w-100"},H={class:"d-flex justify-content-between mb-2 mb-lg-0"},J={class:"mb-0 fs-4"},K=["onClick"],O={class:"d-flex flex-column flex-md-row align-items-lg-center"},W={class:"mb-0 fs-6 mb-2 mb-lg-0 me-md-5 me-0"},X={class:""},Y={class:"input-group pe-md-5 pe-0 w-md-50"},Z={class:"input-group-prepend"},tt=["disabled","onClick"],st=t("i",{class:"bi bi-dash"},null,-1),et=[st],ot=["onUpdate:modelValue"],lt={class:"input-group-append"},nt=["onClick"],at=t("i",{class:"bi bi-plus"},null,-1),it=[at],dt={class:"ms-auto mb-0 fs-6 d-lg-inline-block d-none"},ct={class:"ms-2"},rt={class:"d-lg-none d-flex align-items-center justify-content-between"},pt={class:"mb-0 fs-6"},mt={class:"ms-2"},bt=["onClick"],ut={class:"col-md-4"},ht={class:"border p-4 mb-4"},_t=t("h4",{class:"fw-bold mb-4 pb-3 border-bottom"},"訂單資訊",-1),ft={class:"pb-4 border-bottom border-light border-opacity-10 mb-4"},gt=t("p",{class:"mb-0"},"目前數量",-1),vt={class:"mb-0"},yt={class:"font-arimo"},xt={class:"mb-2 d-flex justify-content-between"},Ct=t("p",{class:"mb-0"},"小計",-1),wt={class:"font-arimo mb-0"},Mt={class:"mt-4"},kt=t("p",{class:"mb-1 opacity-75"},"*消費滿500元 ，折85折【movie500】",-1),Dt={class:"mb-2 d-flex justify-content-between"},At={key:0,class:"d-flex justify-content-between"},Rt=t("p",{class:"mb-0 bg-danger rounded-1 px-2"},"已折扣",-1),jt={class:"font-arimo mb-0"},Nt={class:"d-flex justify-content-between mt-4"},$t=t("p",{class:"mb-0 h5"},"總計",-1),Lt={class:"mb-0 h5 fw-bold"};function St(e,o,u,Tt,b,a){const h=p("RouterLink"),x=p("LoadingComponent"),C=p("DelAllModal"),w=p("DelModal");return i(),d(f,null,[t("div",T,[t("section",null,[t("div",V,[q,r(h,{to:"/products",class:"btn btn-outline-light rounded-pill text-decoration-none mb-4 d-inline-block"},{default:_(()=>[I,n("繼續購物")]),_:1}),t("div",U,[t("div",B,[t("div",Q,[F,t("button",{type:"button",class:m(["btn btn-outline-light px-4 rounded-pill",e.carts.length>0?"d-inline-block":"d-none"]),onClick:o[0]||(o[0]=(...s)=>a.openRemoveAllModal&&a.openRemoveAllModal(...s))},"清空購物車",2)]),e.carts.length===0?(i(),d("p",z,"目前沒有訂單唷！！")):(i(),d("ul",E,[(i(!0),d(f,null,A(e.carts,s=>(i(),d("li",{class:"d-flex mb-4 pb-4 border-bottom",key:s.id},[t("img",{src:s.product.imageUrl,alt:s.product.title,style:{width:"100px","object-fit":"cover"}},null,8,P),t("div",G,[t("div",H,[t("p",J,l(s.product.title),1),t("i",{class:"bi bi-trash fs-5 btn btn-outline-light border-0 d-lg-block d-none",onClick:c=>a.openRemoveModal(s.id)},null,8,K)]),t("div",O,[t("p",W,[n("NT$ "+l(s.product.price)+" ",1),t("span",X," / "+l(s.product.unit),1)]),t("div",Y,[t("div",Z,[t("button",{class:"btn btn-outline-light border-0 py-2",type:"button",disabled:s.qty===1,onClick:c=>{s.qty--,e.changeCartQty(s.id,s.qty)}},et,8,tt)]),g(t("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none",readonly:"",value:"1",min:"1","onUpdate:modelValue":c=>s.qty=c},null,8,ot),[[v,s.qty]]),t("div",lt,[t("button",{class:"btn btn-outline-light border-0 py-2",type:"button",onClick:c=>{s.qty++,e.changeCartQty(s.id,s.qty)}},it,8,nt)])]),t("p",dt,[n("總計：NT$ "),t("span",ct,l(s.total),1)])]),t("div",rt,[t("p",pt,[n("總計：NT$ "),t("span",mt,l(s.total),1)]),t("i",{class:"bi bi-trash fs-5 btn btn-outline-light border-0",onClick:c=>a.openRemoveModal(s.id)},null,8,bt)])])]))),128))]))]),t("div",ut,[t("div",ht,[_t,t("div",ft,[t("div",{class:m(["mb-2 d-flex justify-content-between",{"d-none":e.carts.length===0}])},[gt,t("p",vt,[n(" 共 "),t("span",yt,l(e.carts.length),1),n(" 部")])],2),t("div",xt,[Ct,t("p",wt,"NT$ "+l(e.total),1)]),t("div",Mt,[kt,t("div",Dt,[g(t("input",{type:"text",class:"form-control rounded-0 border-secondary w-70",placeholder:"請輸入優惠碼",style:{width:"70%"},"onUpdate:modelValue":o[1]||(o[1]=s=>b.couponCode=s)},null,512),[[v,b.couponCode]]),t("button",{type:"button",class:m(["btn btn-danger w-30 rounded-0 text-light border-0",{disabled:e.total<500}]),onClick:o[2]||(o[2]=s=>e.useCoupon(this.couponCode,e.total))}," 使用優惠券 ",2)]),this.couponSuccess?(i(),d("div",At,[Rt,t("p",jt,"NT$ "+l(e.total-e.final_total),1)])):R("",!0)])]),t("div",Nt,[$t,t("p",Lt,"NT$ "+l(e.final_total),1)]),r(h,{to:"/checkout",class:m(["btn btn-danger w-100 mt-4",{disabled:e.carts.length===0}])},{default:_(()=>[n("下一步")]),_:1},8,["class"])])])])])])]),r(x,{active:e.isLoading,"onUpdate:active":o[3]||(o[3]=s=>e.isLoading=s),id:"cartPage"},null,8,["active"]),r(C,{onRemoveData:a.closeRemoveAllModal,ref:"delAllModal"},null,8,["onRemoveData"]),r(w,{"out-item":b.tempCart,onRemoveData:o[4]||(o[4]=s=>a.closeRemoveModal(this.productID)),ref:"delModal"},null,8,["out-item"])],64)}const zt=M(S,[["render",St]]);export{zt as default};
