import{E as c}from"./index-LlUqnSE7.js";import{u as h,a as o}from"./axios-DlGGDRsH.js";var l={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"wei_rio",BASE_URL:"/vue2024_week08/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:i,VITE_PATH:n}=l,g=c("cartStore",{state:()=>({carts:[],final_total:0,total:0,isLoading:!1,couponSuccess:!1,toastStore:h()}),actions:{getCart(){const e=`${i}api/${n}/cart`;this.isLoading=!0,o.get(e).then(t=>{this.carts=t.data.data.carts,this.final_total=t.data.data.final_total,this.total=t.data.data.total}).catch(t=>{this.toastStore.pushMessage({style:"danger",title:"無法取得購物車資料",content:t.response.data.message})}).finally(()=>{setTimeout(()=>{this.isLoading=!1},500)})},addToCart(e,t=1){const a={product_id:e,qty:t},r=`${i}api/${n}/cart`;this.isLoading=!0,o.post(r,{data:a}).then(s=>{this.getCart(),this.toastStore.pushMessage({style:"success",title:"已加入購物車",content:s.data.message})}).catch(s=>{this.toastStore.pushMessage({style:"danger",title:"無法加入購物車",content:s.response.data.message})}).finally(()=>{setTimeout(()=>{this.isLoading=!1},500)})},changeCartQty(e,t=1){const a={product_id:e,qty:t},r=`${i}api/${n}/cart/${e}`;o.put(r,{data:a}).then(s=>{this.getCart()}).catch(s=>{this.toastStore.pushMessage({style:"danger",title:"無法調整數量",content:s.response.data.message})})},removeCartItem(e){const t=`${i}api/${n}/cart/${e}`;o.delete(t).then(a=>{this.getCart(),this.toastStore.pushMessage({style:"success",title:"已刪除",content:a.data.message})}).catch(a=>{this.toastStore.pushMessage({style:"danger",title:"無法刪除該產品",content:a.response.data.message})})},removeCartAll(){const e=`${i}api/${n}/carts`;o.delete(e).then(t=>{this.getCart(),this.toastStore.pushMessage({style:"success",title:"已刪除全部電影",content:t.data.message})}).catch(t=>{this.toastStore.pushMessage({style:"danger",title:"無法全部電影",content:t.response.data.message})})},useCoupon(e,t){if(t<500)this.toastStore.pushMessage({style:"danger",title:"無法使用優惠卷",content:"未達500元"});else{const a={code:e},r=`${i}api/${n}/coupon`;o.post(r,{data:a}).then(s=>{this.getCart(),this.couponSuccess=s.data.success,this.toastStore.pushMessage({style:"success",title:"已使用優惠卷",content:s.data.message})}).catch(s=>{this.toastStore.pushMessage({style:"danger",title:"無法使用優惠卷",content:s.response.data.message})})}}}});export{g as u};