import{b as l,m as i,_ as d,o as e,c as t,F as m,e as p,d as a,C as u,t as r,D as _}from"./index-jhRmkDIX.js";import{u as c}from"./axios-uRdxQDC1.js";const b={computed:{...l(c,["messages"])},methods:{...i(c,["clearToast"])}},h={class:"toast-container osition-fixed pe-3 end-0",style:{"z-index":"1500",top:"6%"}},g={class:"toast-header"},f={class:"me-auto"},k=["onClick"],v={key:0,class:"toast-body"};function y(o,$,C,T,x,B){return e(),t("div",h,[(e(!0),t(m,null,p(o.messages,(s,n)=>(e(),t("div",{key:`toast${n}`,class:"toast show",role:"alert","aria-live":"assertive","aria-atomic":"true"},[a("div",g,[a("span",{class:u([`bg-${s.style}`,"rounded me-2 p-2 d-inline-block"])},null,2),a("strong",f,r(s.title),1),a("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close",onClick:S=>o.clearToast(n)},null,8,k)]),s.content?(e(),t("div",v,r(s.content),1)):_("",!0)]))),128))])}const F=d(b,[["render",y]]);export{F as T};
