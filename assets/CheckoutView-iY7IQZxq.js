import{_ as V,m as k,b as w,r as c,o as p,c as u,d as e,f as l,g as b,t as n,h as r,F as _,e as S,a as L,w as C,v as E}from"./index-LlUqnSE7.js";import{u as h}from"./cartStore-7c6p7mGp.js";import{L as T}from"./LoadingComponent-ujB0LiAI.js";import{a as U}from"./axios-DlGGDRsH.js";var R={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"wei_rio",BASE_URL:"/vue2024_week08/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:D,VITE_PATH:q}=R,N={components:{LoadingComponent:T},data(){return{form:{user:{name:"",email:"",tel:"",address:"",pay:""},message:""}}},methods:{...k(h,["getCart"]),onSubmit(){const a=`${D}api/${q}/order`;U.post(a,{data:this.form}).then(s=>{alert(s.data.message),this.$refs.form.resetForm(),this.getCart(),this.$router.push(`/order/${s.data.orderId}`)}).catch(s=>{alert(s.data)})}},computed:{...w(h,["carts","total","isLoading","final_total","couponSuccess"])},mounted(){window.scrollTo({behavior:"smooth",top:0});const a=document.querySelectorAll(".payCheck");a.forEach((s,f)=>{a.forEach((m,t)=>{s.addEventListener("click",()=>{m.classList.remove("payCheck--active"),f===t&&m.classList.add("payCheck--active")})})})}},F={class:"bg-dark text-light py-lg-8 py-5"},j={class:"container"},A=L('<ul class="d-flex justify-content-center align-items-center list-unstyled w-75 mx-auto mb-5"><li class="text-center opacity-50"><p class="mb-0 text-sm fs-xs fs-lg-sm">Step.1</p><p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">購買項目</p></li><i class="bi bi-chevron-right mx-lg-4 mx-2 mx-md-5"></i><li class="text-center"><p class="mb-0 text-sm fs-xs fs-lg-sm">Step.2</p><p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">填寫資料</p></li><i class="bi bi-chevron-right mx-lg-4 mx-2 mx-md-5"></i><li class="text-center opacity-50"><p class="mb-0 text-sm fs-xs fs-lg-sm">Step.3</p><p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">付款資訊</p></li><i class="bi bi-chevron-right mx-lg-4 mx-2 mx-md-5"></i><li class="text-center opacity-50"><p class="mb-0 text-sm fs-xs fs-lg-sm">Step.4</p><p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">訂單完成</p></li></ul>',1),B=e("i",{class:"bi bi-caret-left-fill"},null,-1),I={class:"row"},M={class:"col-md-8 mb-8 mb-lg-0"},P={class:"d-flex flex-lg-row flex-column justify-content-between mb-4 pb-2 border-bottom"},H={class:"fs-4 mb-lg-0 mb-2"},O={class:"d-flex align-items-center justify-content-between"},z={class:"mb-0 me-3 bg-danger rounded-1 px-2"},G={class:"fs-4 mb-0"},J={class:"ms-3"},K={class:"list-unstyled"},Q=["src"],W={class:"ms-4 d-flex flex-column justify-content-between w-100"},X={class:"mb-0 fs-4"},Y={class:"d-flex justify-content-between"},Z={class:"mb-0 fs-5"},$={class:"fs-6 ms-2"},ee={class:"mb-0 fs-5"},se={class:"ms-2"},oe={class:"col-md-4"},te={class:"rounded-2 shadow-lg-lg"},le=e("p",{class:"fs-4 pb-2 border-bottom border-light border-opacity-10"}," 寄送資訊 ",-1),ae={class:"mb-3"},re=e("label",{for:"email",class:"form-label"},[e("span",{class:"text-danger"},"*"),r(" Email ")],-1),ne={class:"mb-3"},ie=e("label",{for:"name",class:"form-label"},[e("span",{class:"text-danger"},"*"),r(" 收件人姓名 ")],-1),de={class:"mb-3"},ce=e("label",{for:"tel",class:"form-label"},[e("span",{class:"text-danger"},"*"),r(" 收件人電話 ")],-1),me={class:"mb-3"},pe=e("label",{for:"address",class:"form-label"},[e("span",{class:"text-danger"},"*"),r(" 收件人地址 ")],-1),ue={class:"mb-3"},fe=e("p",null,[e("span",{class:"text-danger me-1"},"*"),r("選擇付款方式")],-1),be={class:"row"},_e={class:"payCheck p-0 col form-check text-center btn btn-outline-light border-0"},he=e("label",{class:"form-check-label w-100 p-2",for:"flexRadioDefault1",style:{cursor:"pointer"}},[e("i",{class:"bi bi-credit-card fs-2"}),e("p",{class:"mb-0"},"信用卡")],-1),ge={class:"payCheck p-0 col form-check text-center btn btn-outline-light border-0"},xe=e("label",{class:"form-check-labe w-100 p-2",for:"flexRadioDefault2",style:{cursor:"pointer"}},[e("i",{class:"bi bi-box-seam fs-2"}),e("p",{class:"mb-0"},"超商繳費")],-1),ve={class:"mb-3"},ye=e("label",{for:"message",class:"form-label"},"留言",-1),Ve=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-danger text-light w-100"}," 提交訂單 ")],-1);function ke(a,s,f,m,t,g){const x=c("RouterLink"),i=c("VField"),d=c("ErrorMessage"),v=c("VForm"),y=c("LoadingComponent");return p(),u(_,null,[e("div",F,[e("section",null,[e("div",j,[A,l(x,{to:"/cart",class:"btn btn-outline-light rounded-pill text-decoration-none mb-4 d-inline-block"},{default:b(()=>[B,r("返回購物車")]),_:1}),e("div",I,[e("div",M,[e("div",P,[e("p",H,"目前有 "+n(a.carts.length)+" 部",1),e("div",O,[e("p",z,"已折抵 - NT$ "+n(a.total-a.final_total),1),e("p",G,[r("總金額："),e("span",J,"NT$ "+n(a.final_total),1)])])]),e("ul",K,[(p(!0),u(_,null,S(a.carts,o=>(p(),u("li",{class:"d-flex mb-4",key:o.id},[e("img",{src:o.product.imageUrl,alt:"",style:{width:"100px","object-fit":"cover"}},null,8,Q),e("div",W,[e("p",X,n(o.product.title),1),e("div",Y,[e("p",Z,[r("NT$ "+n(o.product.price)+" ",1),e("span",null,"x "+n(o.qty),1),e("span",$," / "+n(o.product.unit),1)]),e("p",ee,[r("NT$ "),e("span",se,n(o.final_total),1)])])])]))),128))])]),e("div",oe,[e("div",te,[le,l(v,{ref:"form",onSubmit:g.onSubmit},{default:b(()=>[e("div",ae,[re,l(i,{id:"email",type:"email",class:"form-control border-dark border-opacity-40 rounded-0",placeholder:"請輸入 Email",name:"email",rules:"required|email",modelValue:t.form.user.email,"onUpdate:modelValue":s[0]||(s[0]=o=>t.form.user.email=o)},null,8,["modelValue"]),l(d,{name:"email",class:"bg-danger rounded-1 px-1 mt-2 d-inline-block"})]),e("div",ne,[ie,l(i,{id:"name",type:"text",class:"form-control border-dark border-opacity-40 rounded-0",placeholder:"請輸入姓名",name:"姓名",rules:"required",modelValue:t.form.user.name,"onUpdate:modelValue":s[1]||(s[1]=o=>t.form.user.name=o)},null,8,["modelValue"]),l(d,{name:"姓名",class:"bg-danger rounded-1 px-1 mt-2 d-inline-block"})]),e("div",de,[ce,l(i,{id:"tel",type:"tel",class:"form-control border-dark border-opacity-40 rounded-0",placeholder:"請輸入電話",name:"電話",rules:"required|min:8|max:10",modelValue:t.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=o=>t.form.user.tel=o)},null,8,["modelValue"]),l(d,{name:"電話",class:"bg-danger rounded-1 px-1 mt-2 d-inline-block"})]),e("div",me,[pe,l(i,{id:"address",type:"text",class:"form-control border-dark border-opacity-40 rounded-0",placeholder:"請輸入地址",name:"地址",rules:"required",modelValue:t.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=o=>t.form.user.address=o)},null,8,["modelValue"]),l(d,{name:"地址",class:"bg-danger rounded-1 px-1 mt-2 d-inline-block"})]),e("div",ue,[fe,e("div",be,[e("div",_e,[l(i,{class:"form-check-input d-none",rules:"required",type:"radio",name:"付款方式",value:"信用卡",id:"flexRadioDefault1",modelValue:t.form.user.pay,"onUpdate:modelValue":s[4]||(s[4]=o=>t.form.user.pay=o)},null,8,["modelValue"]),he]),e("div",ge,[l(i,{class:"form-check-input d-none",rules:"required",type:"radio",name:"付款方式",value:"超商繳費",id:"flexRadioDefault2",modelValue:t.form.user.pay,"onUpdate:modelValue":s[5]||(s[5]=o=>t.form.user.pay=o)},null,8,["modelValue"]),xe])]),l(d,{name:"付款方式",class:"bg-danger rounded-1 px-1 mt-2 d-inline-block"})]),e("div",ve,[ye,C(e("textarea",{id:"message",class:"form-control border-dark border-opacity-40 rounded-0",cols:"30",rows:"10","onUpdate:modelValue":s[6]||(s[6]=o=>t.form.message=o)},null,512),[[E,t.form.message]])]),Ve]),_:1},8,["onSubmit"])])])])])])]),l(y,{active:a.isLoading,"onUpdate:active":s[7]||(s[7]=o=>a.isLoading=o),id:"checkoutPage"},null,8,["active"])],64)}const Ee=V(N,[["render",ke]]);export{Ee as default};