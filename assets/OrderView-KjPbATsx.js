import{_ as g,m as f,r as x,o as r,c as n,a as s,t as o,F as p,h as w,d as _,g as y,e as k}from"./index-cDLFXX9z.js";import{a as b,u as v}from"./axios-aOlrxKEM.js";import{L as T}from"./LoadingComponent-qIX2fg1U.js";var L={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"wei_rio",BASE_URL:"/vue2024_week08/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:h,VITE_PATH:u}=L,S={components:{LoadingComponent:T},data(){return{isLoading:!1,order:{},user:{},products:{}}},methods:{...f(v,["pushMessage"]),getOrder(){const{id:l}=this.$route.params,t=`${h}api/${u}/order/${l}`;this.isLoading=!0,b.get(t).then(d=>{this.order=d.data.order,this.user=d.data.order.user,this.products=d.data.order.products}).catch(d=>{this.pushMessage({style:"danger",title:"訂單取得失敗",content:d.response.data.message})}).finally(()=>{setTimeout(()=>{this.isLoading=!1},500)})},date(l){if(l){const t=new Date(l*1e3),d=t.getFullYear(),m=t.getMonth()+1,e=t.getDate(),a=t.getHours(),i=t.getMinutes(),c=t.getSeconds();return`${d}/${m}/${e} ${a}:${i}:${c}`}else return""},payOrder(){const{id:l}=this.$route.params,t=`${h}api/${u}/pay/${l}`;this.isLoading=!0,b.post(t).then(d=>{this.$router.push(`/thankyou/${l}`),this.pushMessage({style:"success",title:"付款成功",content:d.data.message})}).catch(d=>{this.pushMessage({style:"danger",title:"付款失敗",content:d.response.data.message})}).finally(()=>{setTimeout(()=>{this.isLoading=!1},500)})}},mounted(){this.getOrder(),window.scrollTo({behavior:"smooth",top:0})}},V={class:"bg-dark text-light py-lg-8 py-5"},N={class:"container"},D=k('<ul class="d-flex justify-content-center align-items-center list-unstyled w-75 mx-auto mb-5"><li class="text-center opacity-50"><p class="mb-0 text-sm fs-xs fs-lg-sm">Step.1</p><p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">購買項目</p></li><i class="bi bi-chevron-right mx-lg-4 mx-2 mx-md-5"></i><li class="text-center opacity-50"><p class="mb-0 text-sm fs-xs fs-lg-sm">Step.2</p><p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">填寫資料</p></li><i class="bi bi-chevron-right mx-lg-4 mx-2 mx-md-5"></i><li class="text-center"><p class="mb-0 text-sm fs-xs fs-lg-sm">Step.3</p><p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">付款資訊</p></li><i class="bi bi-chevron-right mx-lg-4 mx-2 mx-md-5"></i><li class="text-center opacity-50"><p class="mb-0 text-sm fs-xs fs-lg-sm">Step.4</p><p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">訂單完成</p></li></ul>',1),E={class:"row gx-5"},M={class:"col-md-6 mb-mb-0 mb-4"},O={class:"mb-lg-3 d-flex justify-content-between align-items-center border-bottom pb-2"},C=s("h4",{class:"text-light ps-lg-3 ps-2 border-3 border-start border-danger"},"訂單明細",-1),R={class:"text-light ps-lg-3 ps-2"},U={class:"py-lg-3 py-4 mx-0 list-unstyled"},j=["src","alt"],A={class:"col d-flex flex-column justify-content-between w-100 ps-3 pe-4"},B={class:"d-flex"},I={class:"mb-0 fs-4"},P={class:"d-flex flex-column justify-content-between"},F={class:"mb-0"},H=s("span",{class:"ms-1"},"x",-1),q={class:"fs-6 ms-2"},Y={class:"fs-6 ms-2"},$={class:"lh-lg me-md-0 mb-0"},z={class:"col-md-6 mb-mb-0 mb-6"},G={class:"py-3 px-lg-5 px-3 shadow-lg-lg bg-light bg-opacity-90 rounded-3 text-black"},J=s("p",{class:"fs-4 text-center"}," 訂單資訊 ",-1),K={class:"mb-5 p-0"},Q={class:"mb-3 d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},W={class:"mb-0 fw-regular d-md-none"},X=s("p",{class:"mb-0 fw-regular d-none d-md-block col-4"},"訂單金額：",-1),Z={class:"mb-0 col d-none d-md-block col"},ss={class:"mb-3 d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},es={class:"mb-0 fw-regular d-md-none"},os=s("p",{class:"mb-0 fw-regular d-none d-md-block col-4"},"訂單編號：",-1),ts={class:"mb-0 col d-none d-md-block col"},cs={class:"mb-3 d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},ds={class:"mb-0 fw-regular d-md-none"},ls=s("p",{class:"mb-0 fw-regular d-none d-md-block col-4"},"下單時間：",-1),rs={class:"mb-0 col d-none d-md-block col"},ns={class:"mb-3 d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},as={class:"mb-0 fw-regular d-md-none"},is={key:0,class:"text-success fw-bold"},ms={key:1,class:"text-danger fw-bold"},ps=s("p",{class:"mb-0 fw-regular d-none d-md-block col-4"},"付款狀態：",-1),_s={class:"mb-0 col d-none d-md-block col fw-bold"},bs={key:0,class:"text-success"},hs={key:1,class:"text-danger"},us={class:"mb-3 d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},gs={class:"mb-0 fw-regular d-md-none"},fs=s("p",{class:"mb-0 fw-regular d-none d-md-block col-4"},"寄送地址：",-1),xs={class:"mb-0 col d-none d-md-block col"},ws={class:"mb-3 d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},ys={class:"mb-0 fw-regular d-md-none"},ks=s("p",{class:"mb-0 fw-regular d-none d-md-block col-4"},"顧客姓名：",-1),vs={class:"mb-0 col d-none d-md-block col"},Ts={class:"mb-3 d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},Ls={class:"mb-0 fw-regular d-md-none"},Ss=s("p",{class:"mb-0 fw-regular d-none d-md-block col-4"},"聯絡電話：",-1),Vs={class:"mb-0 col d-none d-md-block col"},Ns={class:"mb-3 d-flex ps-0 p-2 border-bottom border-dark border-opacity-20"},Ds={class:"mb-0 fw-regular d-md-none"},Es=s("p",{class:"mb-0 fw-regular d-none d-md-block col-4"},"電子信箱：",-1),Ms={class:"mb-0 col d-none d-md-block col"},Os={class:"mb-3 d-flex ps-0 p-2 border-opacity-20"},Cs={class:"mb-0 fw-regular d-md-none"},Rs=s("p",{class:"mb-0 fw-regular d-none d-md-block col-4"},"客戶備註：",-1),Us={class:"mb-0 col d-none d-md-block col"};function js(l,t,d,m,e,a){const i=x("LoadingComponent");return r(),n(p,null,[s("div",V,[s("section",null,[s("div",N,[D,s("div",E,[s("div",M,[s("div",O,[C,s("h5",R,"總金額 NT$ "+o(e.order.total),1)]),s("ul",U,[(r(!0),n(p,null,w(e.products,c=>(r(),n("li",{key:c.id,class:"row mb-4 border-bottom pb-4"},[s("img",{class:"product__img",src:c.product.imageUrl,alt:c.product.title},null,8,j),s("div",A,[s("div",B,[s("p",I,o(c.product.title),1)]),s("div",P,[s("p",F,[_(" NT$ "+o(c.product.price)+" ",1),H,s("span",q,o(c.qty),1),s("span",Y," / "+o(c.product.unit),1)]),s("p",$," 總計：NT$ "+o(c.final_total),1)])])]))),128))])]),s("div",z,[s("div",G,[J,s("ul",K,[s("li",Q,[s("p",W," 訂單金額： NT$ "+o(e.order.total),1),X,s("p",Z," NT$ "+o(e.order.total),1)]),s("li",ss,[s("p",es,"訂單編號： "+o(e.order.id),1),os,s("p",ts,o(e.order.id),1)]),s("li",cs,[s("p",ds," 下單時間："+o(this.date(e.order.create_at)),1),ls,s("p",rs,o(this.date(e.order.create_at)),1)]),s("li",ns,[s("p",as,[_(" 付款狀態： "),e.order.is_paid?(r(),n("span",is,"已付款")):(r(),n("span",ms,"未付款"))]),ps,s("p",_s,[e.order.is_paid?(r(),n("span",bs,"已付款")):(r(),n("span",hs,"未付款"))])]),s("li",us,[s("p",gs," 寄送地址： "+o(e.user.address),1),fs,s("p",xs,o(e.user.address),1)]),s("li",ws,[s("p",ys," 顧客姓名： "+o(e.user.name),1),ks,s("p",vs,o(e.user.name),1)]),s("li",Ts,[s("p",Ls,"聯絡電話： "+o(e.user.tel),1),Ss,s("p",Vs,o(e.user.tel),1)]),s("li",Ns,[s("p",Ds," 電子信箱： "+o(e.user.email),1),Es,s("p",Ms,o(e.user.email),1)]),s("li",Os,[s("p",Cs," 客戶備註："+o(e.order.message),1),Rs,s("p",Us,o(e.order.message),1)])]),s("div",{class:"btn btn-outline-danger w-100",onClick:t[0]||(t[0]=(...c)=>a.payOrder&&a.payOrder(...c))},"確認付款")])])])])])]),y(i,{active:e.isLoading,"onUpdate:active":t[1]||(t[1]=c=>e.isLoading=c),id:"cartPage"},null,8,["active"])],64)}const Fs=g(S,[["render",js]]);export{Fs as default};
