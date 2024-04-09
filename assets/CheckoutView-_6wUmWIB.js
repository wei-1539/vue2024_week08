import{_ as V,m as b,f as w,r as c,o as p,c as u,a as e,g as l,w as _,t as r,d as n,F as h,h as S,e as L,i as C,v as E}from"./index-M0JT7z_k.js";import{u as g}from"./cartStore-EAgqEWCs.js";import{a as T,u as U}from"./axios-rFp88-ks.js";import{L as R}from"./LoadingComponent-uKAOJsvZ.js";var D={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"wei_rio",BASE_URL:"/vue2024_week08/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:q,VITE_PATH:M}=D,N={components:{LoadingComponent:R},data(){return{form:{user:{name:"",email:"",tel:"",address:"",pay:""},message:""}}},methods:{...b(g,["getCart"]),...b(U,["pushMessage"]),onSubmit(){const a=`${q}api/${M}/order`;T.post(a,{data:this.form}).then(t=>{this.$refs.form.resetForm(),this.getCart(),this.pushMessage({style:"success",title:"已建立訂單",content:t.data.message}),this.$router.push(`/order/${t.data.orderId}`)}).catch(t=>{this.pushMessage({style:"danger",title:"無法建立訂單",content:t.response.data.message})})}},computed:{...w(g,["carts","total","isLoading","final_total","couponSuccess"])},mounted(){window.scrollTo({behavior:"smooth",top:0});const a=document.querySelectorAll(".payCheck");a.forEach((t,f)=>{a.forEach((m,o)=>{t.addEventListener("click",()=>{m.classList.remove("payCheck--active"),f===o&&m.classList.add("payCheck--active")})})})}},F={class:"bg-dark text-light py-lg-8 py-5"},j={class:"container"},A=L('<ul class="d-flex justify-content-center align-items-center list-unstyled w-75 mx-auto mb-5"><li class="text-center opacity-50"><p class="mb-0 text-sm fs-xs fs-lg-sm">Step.1</p><p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">購買項目</p></li><i class="bi bi-chevron-right mx-lg-4 mx-2 mx-md-5"></i><li class="text-center"><p class="mb-0 text-sm fs-xs fs-lg-sm">Step.2</p><p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">填寫資料</p></li><i class="bi bi-chevron-right mx-lg-4 mx-2 mx-md-5"></i><li class="text-center opacity-50"><p class="mb-0 text-sm fs-xs fs-lg-sm">Step.3</p><p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">付款資訊</p></li><i class="bi bi-chevron-right mx-lg-4 mx-2 mx-md-5"></i><li class="text-center opacity-50"><p class="mb-0 text-sm fs-xs fs-lg-sm">Step.4</p><p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">訂單完成</p></li></ul>',1),B=e("i",{class:"bi bi-caret-left-fill"},null,-1),I={class:"row"},P={class:"col-md-8 mb-8 mb-lg-0"},H={class:"d-lg-flex justify-content-between mb-4 pb-2 border-bottom"},O={class:"fs-4 mb-lg-0 mb-3"},z={class:"d-lg-flex flex-lg-row flex-column align-items-lg-center justify-content-between"},G={class:"mb-lg-0 mb-3 me-3 bg-danger rounded-1 px-2 d-inline-block"},J={class:"fs-4 mb-0"},K={class:"ms-3"},Q={class:"list-unstyled"},W=["src","alt"],X={class:"ms-4 d-flex flex-column justify-content-between w-100"},Y={class:"mb-0 fs-5"},Z={class:"d-flex justify-content-between flex-column flex-lg-row"},$={class:"mb-lg-0 mb-3 fs-6"},ee={class:"fs-6 ms-2"},se={class:"mb-0 fs-6"},te={class:"ms-2"},oe={class:"col-md-4"},le={class:"rounded-2 shadow-lg-lg"},ae=e("p",{class:"fs-4 pb-2 border-bottom border-light border-opacity-10"}," 寄送資訊 ",-1),ne={class:"mb-3"},re=e("label",{for:"email",class:"form-label"},[e("span",{class:"text-danger"},"*"),n(" Email ")],-1),ie={class:"mb-3"},de=e("label",{for:"name",class:"form-label"},[e("span",{class:"text-danger"},"*"),n(" 收件人姓名 ")],-1),ce={class:"mb-3"},me=e("label",{for:"tel",class:"form-label"},[e("span",{class:"text-danger"},"*"),n(" 收件人電話 ")],-1),pe={class:"mb-3"},ue=e("label",{for:"address",class:"form-label"},[e("span",{class:"text-danger"},"*"),n(" 收件人地址 ")],-1),fe={class:"mb-3"},be=e("p",null,[e("span",{class:"text-danger me-1"},"*"),n("選擇付款方式")],-1),_e={class:"row"},he={class:"payCheck p-0 col form-check text-center btn btn-outline-light border-0"},ge=e("label",{class:"form-check-label w-100 p-2",for:"flexRadioDefault1",style:{cursor:"pointer"}},[e("i",{class:"bi bi-credit-card fs-2"}),e("p",{class:"mb-0"},"信用卡")],-1),xe={class:"payCheck p-0 col form-check text-center btn btn-outline-light border-0"},ye=e("label",{class:"form-check-labe w-100 p-2",for:"flexRadioDefault2",style:{cursor:"pointer"}},[e("i",{class:"bi bi-box-seam fs-2"}),e("p",{class:"mb-0"},"超商繳費")],-1),ve={class:"mb-3"},ke=e("label",{for:"message",class:"form-label"},"留言",-1),Ve=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-danger text-light w-100"}," 提交訂單 ")],-1);function we(a,t,f,m,o,x){const y=c("RouterLink"),i=c("VField"),d=c("ErrorMessage"),v=c("VForm"),k=c("LoadingComponent");return p(),u(h,null,[e("div",F,[e("section",null,[e("div",j,[A,l(y,{to:"/cart",class:"btn btn-outline-light rounded-pill text-decoration-none mb-4 d-inline-block"},{default:_(()=>[B,n("返回購物車")]),_:1}),e("div",I,[e("div",P,[e("div",H,[e("p",O,"目前有 "+r(a.carts.length)+" 部",1),e("div",z,[e("p",G,"已折抵 - NT$ "+r(a.total-a.final_total),1),e("p",J,[n("總金額："),e("span",K,"NT$ "+r(a.final_total),1)])])]),e("ul",Q,[(p(!0),u(h,null,S(a.carts,s=>(p(),u("li",{class:"d-flex mb-lg-4 mb-5",key:s.id},[e("img",{src:s.product.imageUrl,alt:s.product.title,style:{width:"100px","object-fit":"cover"}},null,8,W),e("div",X,[e("p",Y,r(s.product.title),1),e("div",Z,[e("p",$,[n("NT$ "+r(s.product.price)+" ",1),e("span",null,"x "+r(s.qty),1),e("span",ee," / "+r(s.product.unit),1)]),e("p",se,[n("總計：NT$ "),e("span",te,r(s.final_total),1)])])])]))),128))])]),e("div",oe,[e("div",le,[ae,l(v,{ref:"form",onSubmit:x.onSubmit},{default:_(()=>[e("div",ne,[re,l(i,{id:"email",type:"email",class:"form-control border-dark border-opacity-40 rounded-0",placeholder:"請輸入 Email",name:"email",rules:"required|email",modelValue:o.form.user.email,"onUpdate:modelValue":t[0]||(t[0]=s=>o.form.user.email=s)},null,8,["modelValue"]),l(d,{name:"email",class:"bg-danger rounded-1 px-1 mt-2 d-inline-block"})]),e("div",ie,[de,l(i,{id:"name",type:"text",class:"form-control border-dark border-opacity-40 rounded-0",placeholder:"請輸入姓名",name:"姓名",rules:"required",modelValue:o.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=s=>o.form.user.name=s)},null,8,["modelValue"]),l(d,{name:"姓名",class:"bg-danger rounded-1 px-1 mt-2 d-inline-block"})]),e("div",ce,[me,l(i,{id:"tel",type:"tel",class:"form-control border-dark border-opacity-40 rounded-0",placeholder:"請輸入電話",name:"電話",rules:"required|min:8|max:10",modelValue:o.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=s=>o.form.user.tel=s)},null,8,["modelValue"]),l(d,{name:"電話",class:"bg-danger rounded-1 px-1 mt-2 d-inline-block"})]),e("div",pe,[ue,l(i,{id:"address",type:"text",class:"form-control border-dark border-opacity-40 rounded-0",placeholder:"請輸入地址",name:"地址",rules:"required",modelValue:o.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=s=>o.form.user.address=s)},null,8,["modelValue"]),l(d,{name:"地址",class:"bg-danger rounded-1 px-1 mt-2 d-inline-block"})]),e("div",fe,[be,e("div",_e,[e("div",he,[l(i,{class:"form-check-input d-none",rules:"required",type:"radio",name:"付款方式",value:"信用卡",id:"flexRadioDefault1",modelValue:o.form.user.pay,"onUpdate:modelValue":t[4]||(t[4]=s=>o.form.user.pay=s)},null,8,["modelValue"]),ge]),e("div",xe,[l(i,{class:"form-check-input d-none",rules:"required",type:"radio",name:"付款方式",value:"超商繳費",id:"flexRadioDefault2",modelValue:o.form.user.pay,"onUpdate:modelValue":t[5]||(t[5]=s=>o.form.user.pay=s)},null,8,["modelValue"]),ye])]),l(d,{name:"付款方式",class:"bg-danger rounded-1 px-1 mt-2 d-inline-block"})]),e("div",ve,[ke,C(e("textarea",{id:"message",class:"form-control border-dark border-opacity-40 rounded-0",cols:"30",rows:"10","onUpdate:modelValue":t[6]||(t[6]=s=>o.form.message=s)},null,512),[[E,o.form.message]])]),Ve]),_:1},8,["onSubmit"])])])])])])]),l(k,{active:a.isLoading,"onUpdate:active":t[7]||(t[7]=s=>a.isLoading=s),id:"checkoutPage"},null,8,["active"])],64)}const Te=V(N,[["render",we]]);export{Te as default};
