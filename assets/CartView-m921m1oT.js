import{_ as v,m as x,b as w,r as m,o as i,c as a,d as t,f as d,g as u,C as r,F as h,e as C,h as l,t as o,w as _,v as f,D as k,a as j}from"./index-TDT5K3VP.js";import{u as g}from"./cartStore-h7LP-BWN.js";import{L as $}from"./LoadingComponent-iFoJYRD5.js";import"./axios-6jYfdW-Y.js";const L={components:{LoadingComponent:$},data(){return{couponCode:""}},methods:{...x(g,["getCart","removeCartAll","removeCartItem","changeCartQty","useCoupon"]),reloadPage(){this.isLoading||location.reload()}},computed:{...w(g,["carts","total","isLoading","final_total","couponSuccess"])},mounted(){window.scrollTo({behavior:"smooth",top:0}),this.reloadPage(),this.getCart()}},N={class:"bg-dark text-light py-lg-8 py-5"},S={class:"container"},T=j('<ul class="d-flex justify-content-center align-items-center list-unstyled w-75 mx-auto mb-5"><li class="text-center"><p class="mb-0 text-sm fs-xs fs-lg-sm">Step.1</p><p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">購買項目</p></li><i class="bi bi-chevron-right mx-lg-4 mx-2 mx-md-5"></i><li class="text-center opacity-50"><p class="mb-0 text-sm fs-xs fs-lg-sm">Step.2</p><p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">填寫資料</p></li><i class="bi bi-chevron-right mx-lg-4 mx-2 mx-md-5"></i><li class="text-center opacity-50"><p class="mb-0 text-sm fs-xs fs-lg-sm">Step.3</p><p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">付款資訊</p></li><i class="bi bi-chevron-right mx-lg-4 mx-2 mx-md-5"></i><li class="text-center opacity-50"><p class="mb-0 text-sm fs-xs fs-lg-sm">Step.4</p><p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">訂單完成</p></li></ul>',1),V=t("i",{class:"bi bi-caret-left-fill"},null,-1),q={class:"row"},U={class:"col-md-8 mb-8 mb-lg-0"},A={class:"d-flex justify-content-between mb-4"},B=t("h4",null,"購物車品項",-1),D={key:0,class:"fs-2 text-center h-100 py-5 mb-0"},I={key:1,class:"list-unstyled"},P=["src"],Q={class:"ms-4 d-flex flex-column justify-content-between w-100"},F={class:"d-flex justify-content-between"},R={class:"mb-0 fs-4"},z=["onClick"],E={class:"d-flex justify-content-md-start justify-content-between align-items-center"},M={class:"mb-0 fs-6 mb-0 me-md-5 me-0"},G={class:""},H={class:"input-group pe-md-5 pe-0 w-md-25 w-50"},J={class:"input-group-prepend"},K=["disabled","onClick"],O=t("i",{class:"bi bi-dash"},null,-1),W=[O],X=["onUpdate:modelValue"],Y={class:"input-group-append"},Z=["onClick"],tt=t("i",{class:"bi bi-plus"},null,-1),st=[tt],et={class:"ms-auto mb-0 fs-6 d-lg-inline-block d-none"},ot={class:"ms-2"},nt={class:"d-lg-none d-flex align-items-center justify-content-between"},lt={class:"mb-0 fs-6"},it={class:"ms-2"},at=["onClick"],ct={class:"col-md-4"},dt={class:"border p-4 mb-4"},rt=t("h4",{class:"fw-bold mb-4 pb-3 border-bottom"},"訂單資訊",-1),pt={class:"pb-4 border-bottom border-light border-opacity-10 mb-4"},bt={class:"mb-2 d-flex justify-content-between"},mt=t("p",{class:"mb-0"},"目前數量",-1),ut={class:"mb-0"},ht={class:"font-arimo"},_t={class:"mb-2 d-flex justify-content-between"},ft=t("p",{class:"mb-0"},"小計",-1),gt={class:"font-arimo mb-0"},yt={class:"mt-4"},vt=t("p",{class:"mb-1 opacity-75"},"*消費滿500元 ，折85折【movie500】",-1),xt={class:"mb-2 d-flex justify-content-between"},wt={key:0,class:"d-flex justify-content-between"},Ct=t("p",{class:"mb-0 bg-danger rounded-1 px-2"},"已折扣",-1),kt={class:"font-arimo mb-0"},jt={class:"d-flex justify-content-between mt-4"},$t=t("p",{class:"mb-0 h5"},"總計",-1),Lt={class:"mb-0 h5 fw-bold"};function Nt(e,n,St,Tt,p,Vt){const b=m("RouterLink"),y=m("LoadingComponent");return i(),a(h,null,[t("div",N,[t("section",null,[t("div",S,[T,d(b,{to:"/products",class:"btn btn-outline-light rounded-pill text-decoration-none mb-4 d-inline-block"},{default:u(()=>[V,l("繼續購物")]),_:1}),t("div",q,[t("div",U,[t("div",A,[B,t("button",{type:"button",class:r(["btn btn-outline-light px-4 rounded-pill",e.carts.length>0?"d-inline-block":"d-none"]),onClick:n[0]||(n[0]=(...s)=>e.removeCartAll&&e.removeCartAll(...s))},"清空購物車",2)]),e.carts.length===0?(i(),a("p",D,"目前沒有訂單唷！！")):(i(),a("ul",I,[(i(!0),a(h,null,C(e.carts,s=>(i(),a("li",{class:"d-flex mb-4 pb-4 border-bottom",key:s.id},[t("img",{src:s.product.imageUrl,alt:"",style:{width:"100px","object-fit":"cover"}},null,8,P),t("div",Q,[t("div",F,[t("p",R,o(s.product.title),1),t("i",{class:"bi bi-trash fs-5 btn btn-outline-light border-0 d-lg-block d-none",onClick:c=>e.removeCartItem(s.id)},null,8,z)]),t("div",E,[t("p",M,[l("NT$ "+o(s.product.price)+" ",1),t("span",G," / "+o(s.product.unit),1)]),t("div",H,[t("div",J,[t("button",{class:"btn btn-outline-light border-0 py-2",type:"button",disabled:s.qty===1,onClick:c=>{s.qty--,e.changeCartQty(s.id,s.qty)}},W,8,K)]),_(t("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none",readonly:"",value:"1",min:"1","onUpdate:modelValue":c=>s.qty=c},null,8,X),[[f,s.qty]]),t("div",Y,[t("button",{class:"btn btn-outline-light border-0 py-2",type:"button",onClick:c=>{s.qty++,e.changeCartQty(s.id,s.qty)}},st,8,Z)])]),t("p",et,[l("總計：NT$ "),t("span",ot,o(s.total),1)])]),t("div",nt,[t("p",lt,[l("總計：NT$ "),t("span",it,o(s.total),1)]),t("i",{class:"bi bi-trash fs-5 btn btn-outline-light border-0",onClick:c=>e.removeCartItem(s.id)},null,8,at)])])]))),128))]))]),t("div",ct,[t("div",dt,[rt,t("div",pt,[t("div",bt,[mt,t("p",ut,[l(" 共 "),t("span",ht,o(e.carts.length),1),l(" 部")])]),t("div",_t,[ft,t("p",gt,"NT$ "+o(e.total),1)]),t("div",yt,[vt,t("div",xt,[_(t("input",{type:"text",class:"form-control rounded-0 border-secondary w-70",placeholder:"請輸入優惠碼",style:{width:"70%"},"onUpdate:modelValue":n[1]||(n[1]=s=>p.couponCode=s)},null,512),[[f,p.couponCode]]),t("button",{type:"button",class:r(["btn btn-danger w-30 rounded-0 text-light border-0",{disabled:e.total<500}]),onClick:n[2]||(n[2]=s=>e.useCoupon(this.couponCode,e.total)),style:{width:"30%"}}," 使用優惠券 ",2)]),this.couponSuccess?(i(),a("div",wt,[Ct,t("p",kt,"NT$ "+o(e.total-e.final_total),1)])):k("",!0)])]),t("div",jt,[$t,t("p",Lt,"NT$ "+o(e.final_total),1)]),d(b,{to:"/checkout",class:r(["btn btn-danger w-100 mt-4",{disabled:e.carts.length===0}])},{default:u(()=>[l("下一步")]),_:1},8,["class"])])])])])])]),d(y,{active:e.isLoading,"onUpdate:active":n[3]||(n[3]=s=>e.isLoading=s),id:"cartPage"},null,8,["active"])],64)}const Dt=v(L,[["render",Nt]]);export{Dt as default};
