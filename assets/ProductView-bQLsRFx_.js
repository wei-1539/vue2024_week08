import{m as w,_ as x,o as l,c as i,d as t,w as a,v as m,F as U,e as M,D as k,I as y,r as _,f as h,t as b}from"./index-LlUqnSE7.js";import{a as v,u as L}from"./axios-DlGGDRsH.js";import{L as T}from"./LoadingComponent-ujB0LiAI.js";import{D as E,P as $}from"./PagePagination-UygO6GXf.js";import{m as C}from"./modalMixin-VpIMK_6r.js";import"./selector-engine-klkejVMR.js";var I={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"wei_rio",BASE_URL:"/vue2024_week08/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:R,VITE_PATH:A}=I,N={props:["product","isNew"],mixins:[C],data(){return{tempProduct:{},status:{}}},watch:{product(){this.tempProduct=this.product}},methods:{...w(L,["pushMessage"]),createImages(){this.tempProduct.imagesUrl=[],this.tempProduct.imagesUrl.push("")},uploadFile(){const n=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",n);const d=`${R}/api/${A}/admin/upload`;v.post(d,e).then(u=>{this.tempProduct.imageUrl=u.data.imageUrl,this.$refs.fileInput.value="",this.pushMessage({style:"success",title:"圖片上傳成功",content:u.data.message})}).catch(u=>{this.pushMessage({style:"danger",title:"圖片上傳失敗",content:u.response.data.message})})}}},F={id:"productModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},S={class:"modal-dialog modal-xl"},B={class:"modal-content border-0"},H={class:"modal-header bg-dark text-white"},O={id:"productModalLabel",class:"modal-title"},j={key:0},Y={key:1},q=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),z={class:"modal-body"},G={class:"row"},J={class:"col-sm-4"},K={class:"mb-2"},Q={class:"mb-3"},W=t("label",{for:"imageUrl",class:"form-label"},"輸入【主要】圖片網址",-1),X={class:"mb-3"},Z=t("label",{for:"customFile",class:"form-label"},"或 上傳圖片",-1),tt=["src"],et=t("h5",{class:"mb-3"},"多圖新增",-1),st={key:0,class:"mb-3"},ot={class:"mb-3"},lt=["for"],it=["id","onUpdate:modelValue"],nt=["src"],dt={key:0},ct={key:1},at={key:1},rt={class:"col-sm-8"},ut={class:"mb-3"},mt=t("label",{for:"title",class:"form-label"},"標題",-1),pt={class:"row"},_t={class:"mb-3 col-md-6"},ht=t("label",{for:"category",class:"form-label"},"分類",-1),bt={class:"mb-3 col-md-6"},ft=t("label",{for:"price",class:"form-label"},"單位",-1),gt={class:"row"},vt={class:"mb-3 col-md-6"},Pt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),yt={class:"mb-3 col-md-6"},wt=t("label",{for:"price",class:"form-label"},"售價",-1),xt=t("hr",null,null,-1),Ut={class:"mb-3 col-md-6"},Mt=t("label",{for:"youtubeLink",class:"form-label"},"預告片連結",-1),kt={key:0,class:"mb-3 col-md-12"},Lt=["src"],Vt=t("hr",null,null,-1),Dt={class:"mb-3"},Tt=t("label",{for:"description",class:"form-label"},"產品描述",-1),Et={class:"mb-3"},$t=t("label",{for:"content",class:"form-label"},"說明內容",-1),Ct={class:"mb-3 d-flex"},It={class:"form-check form-switch"},Rt=t("label",{class:"form-check-label",for:"is_enabled"},"啟用",-1),At={class:"form-check form-switch ms-4"},Nt=t("label",{class:"form-check-label",for:"is_love"},"推薦",-1),Ft={class:"modal-footer"},St=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Bt(n,e,d,u,s,r){return l(),i("div",F,[t("div",S,[t("div",B,[t("div",H,[t("h5",O,[d.isNew?(l(),i("span",j,"新增產品")):(l(),i("span",Y,"編輯產品"))]),q]),t("div",z,[t("div",G,[t("div",J,[t("div",K,[t("div",Q,[W,a(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=o=>s.tempProduct.imageUrl=o)},null,512),[[m,s.tempProduct.imageUrl]])]),t("div",X,[Z,t("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=(...o)=>r.uploadFile&&r.uploadFile(...o))},null,544)]),t("img",{class:"img-fluid",src:s.tempProduct.imageUrl,alt:""},null,8,tt)]),et,Array.isArray(s.tempProduct.imagesUrl)?(l(),i("div",st,[(l(!0),i(U,null,M(s.tempProduct.imagesUrl,(o,p)=>(l(),i("div",{class:"mb-1",key:p},[t("div",ot,[t("label",{for:`imagesUrl${p}`,class:"form-label"},"圖片網址",8,lt),a(t("input",{id:`imagesUrl${p}`,type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":P=>s.tempProduct.imagesUrl[p]=P},null,8,it),[[m,s.tempProduct.imagesUrl[p]]])]),t("img",{class:"img-fluid",src:o,alt:""},null,8,nt)]))),128)),!s.tempProduct.imagesUrl.length||s.tempProduct.imagesUrl[s.tempProduct.imagesUrl.length-1]?(l(),i("div",dt,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=o=>s.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):(l(),i("div",ct,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[3]||(e[3]=o=>s.tempProduct.imagesUrl.pop())}," 刪除圖片 ")]))])):(l(),i("div",at,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[4]||(e[4]=(...o)=>r.createImages&&r.createImages(...o))}," 新增圖片 ")]))]),t("div",rt,[t("div",ut,[mt,a(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[5]||(e[5]=o=>s.tempProduct.title=o)},null,512),[[m,s.tempProduct.title]])]),t("div",pt,[t("div",_t,[ht,a(t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[6]||(e[6]=o=>s.tempProduct.category=o)},null,512),[[m,s.tempProduct.category]])]),t("div",bt,[ft,a(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[7]||(e[7]=o=>s.tempProduct.unit=o)},null,512),[[m,s.tempProduct.unit]])])]),t("div",gt,[t("div",vt,[Pt,a(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[8]||(e[8]=o=>s.tempProduct.origin_price=o)},null,512),[[m,s.tempProduct.origin_price]])]),t("div",yt,[wt,a(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[9]||(e[9]=o=>s.tempProduct.price=o)},null,512),[[m,s.tempProduct.price]])])]),xt,t("div",Ut,[Mt,a(t("input",{id:"youtubeLink",type:"text",class:"form-control",placeholder:"請輸入youtube連結","onUpdate:modelValue":e[10]||(e[10]=o=>s.tempProduct.youtubeLink=o)},null,512),[[m,s.tempProduct.youtubeLink]])]),typeof s.tempProduct.youtubeLink=="string"?(l(),i("div",kt,[t("iframe",{width:"100%",height:"400",src:`${s.tempProduct.youtubeLink}?rel=0`,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,Lt)])):k("",!0),Vt,t("div",Dt,[Tt,a(t("textarea",{id:"description",type:"text",class:"form-control",rows:"5",placeholder:"請輸入產品描述","onUpdate:modelValue":e[11]||(e[11]=o=>s.tempProduct.description=o)},null,512),[[m,s.tempProduct.description]])]),t("div",Et,[$t,a(t("textarea",{id:"content",type:"text",class:"form-control",rows:"5",placeholder:"請輸入說明內容","onUpdate:modelValue":e[12]||(e[12]=o=>s.tempProduct.content=o)},null,512),[[m,s.tempProduct.content]])]),t("div",Ct,[t("div",It,[a(t("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"is_enabled","true-value":1,"false-value":0,"onUpdate:modelValue":e[13]||(e[13]=o=>s.tempProduct.is_enabled=o)},null,512),[[y,s.tempProduct.is_enabled]]),Rt]),t("div",At,[a(t("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"is_love","true-value":1,"false-value":0,"onUpdate:modelValue":e[14]||(e[14]=o=>s.tempProduct.is_love=o)},null,512),[[y,s.tempProduct.is_love]]),Nt])])])])]),t("div",Ft,[St,t("button",{type:"button",class:"btn btn-primary",onClick:e[15]||(e[15]=o=>n.$emit("update-product",s.tempProduct))}," 確認 ")])])])],512)}const Ht=x(N,[["render",Bt]]);var Ot={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"wei_rio",BASE_URL:"/vue2024_week08/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:f,VITE_PATH:g}=Ot,jt={components:{ProductModal:Ht,DelModal:E,Pagination:$,LoadingComponent:T},data(){return{products:[],isNew:!1,tempProduct:{imagesUrl:[]},pagination:{},isLoading:!1,currentPage:1}},created(){this.getData()},methods:{...w(L,["pushMessage"]),getData(n=1){this.currentPage=n;const e=`${f}api/${g}/admin/products?page=${n}`;this.isLoading=!0,v.get(e).then(d=>{this.products=d.data.products,this.pagination=d.data.pagination,this.pushMessage({style:"success",title:"成功取得產品資訊",content:d.data.message})}).catch(d=>{this.pushMessage({style:"danger",title:"產品資訊取得失敗",content:d.response.data.message})}).finally(()=>{setTimeout(()=>{this.isLoading=!1},500)})},openModal(n,e){n==="add"?(this.tempProduct={imagesUrl:[]},this.isNew=!0,this.$refs.productModal.openModal()):n==="edit"?(this.tempProduct={...e},this.isNew=!1,this.$refs.productModal.openModal()):n==="del"&&(this.tempProduct={...e},this.$refs.delModal.openModal())},updateData(n){this.isLoading=!0,this.tempProduct=n;let e=`${f}api/${g}/admin/product`,d="post",u="新增產品";this.isNew||(e=`${f}api/${g}/admin/product/${this.tempProduct.id}`,d="put",u="更新產品"),v[d](e,{data:this.tempProduct}).then(s=>{this.pushMessage({style:"success",title:`成功${u}`,content:s.data.message}),this.$refs.productModal.hideModal(),this.getData(this.currentPage)}).catch(s=>{this.pushMessage({style:"danger",title:`${u}失敗`,content:s.response.data.message})}).finally(()=>{setTimeout(()=>{this.isLoading=!1},500)})},removeData(){const n=`${f}api/${g}/admin/product/${this.tempProduct.id}`;this.isLoading=!0,v.delete(n).then(e=>{this.pushMessage({style:"success",title:"成功刪除產品",content:e.data.message}),this.$refs.delModal.hideModal(),this.getData(this.currentPage)}).catch(e=>{this.pushMessage({style:"danger",title:"無法刪除產品",content:e.response.data.message})}).finally(()=>{setTimeout(()=>{this.isLoading=!1},500)})}}},Yt={class:"container"},qt={class:"d-flex justify-content-between align-items-center"},zt=t("h2",{class:"my-4 fw-bold"},"產品明細",-1),Gt={class:"table-responsive"},Jt={class:"table align-middle table-bordered"},Kt=t("thead",{class:"fs-5"},[t("tr",{class:"table-active"},[t("th",{width:"125",class:"text-center d-none d-sm-table-cell"},"產品縮圖"),t("th",{class:"text-center"},"產品名稱"),t("th",{width:"120",class:"text-center d-none d-sm-table-cell"},"分類"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100",class:"text-center"},"啟用"),t("th",{width:"100",class:"text-center d-none d-sm-table-cell"},"推薦"),t("th",{width:"140",class:"text-center"},"編輯")])],-1),Qt={class:"fs-5"},Wt={class:"d-none d-sm-table-cell"},Xt=["src"],Zt={class:"text-center d-none d-sm-table-cell"},te={class:"text-end"},ee={class:"text-end"},se={class:"text-center"},oe={key:0,class:"text-success"},le=t("i",{class:"bi bi-check-circle-fill h5"},null,-1),ie=[le],ne={key:1,class:"text-danger"},de=t("i",{class:"bi bi-x-circle-fill h5"},null,-1),ce=[de],ae={class:"text-center d-none d-sm-table-cell"},re={key:0,class:"text-danger"},ue=t("i",{class:"bi bi-heart-fill",h5:""},null,-1),me=[ue],pe={class:"text-center"},_e={class:"btn-group flex-sm-row flex-column"},he=["onClick"],be=["onClick"];function fe(n,e,d,u,s,r){const o=_("Pagination"),p=_("ProductModal"),P=_("DelModal"),V=_("LoadingComponent");return l(),i("div",Yt,[t("div",qt,[zt,t("div",null,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=c=>r.openModal("add"))}," 建立新的產品 ")])]),t("div",Gt,[t("table",Jt,[Kt,t("tbody",Qt,[(l(!0),i(U,null,M(s.products,c=>(l(),i("tr",{key:c.id},[t("td",Wt,[t("img",{class:"img-fluid",src:c.imageUrl,alt:"",width:"100"},null,8,Xt)]),t("td",null,b(c.title),1),t("td",Zt,b(c.category),1),t("td",te,b(c.origin_price),1),t("td",ee,b(c.price),1),t("td",se,[c.is_enabled?(l(),i("span",oe,ie)):(l(),i("span",ne,ce))]),t("td",ae,[c.is_love?(l(),i("span",re,me)):k("",!0)]),t("td",pe,[t("div",_e,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm mb-sm-0 mb-2",onClick:D=>r.openModal("edit",c)}," 編輯 ",8,he),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:D=>r.openModal("del",c)}," 刪除 ",8,be)])])]))),128))])])]),h(o,{pages:s.pagination,onEmitPages:r.getData},null,8,["pages","onEmitPages"]),h(p,{product:s.tempProduct,"is-new":s.isNew,onUpdateProduct:r.updateData,ref:"productModal"},null,8,["product","is-new","onUpdateProduct"]),h(P,{"out-item":s.tempProduct,onRemoveData:r.removeData,ref:"delModal"},null,8,["out-item","onRemoveData"]),h(V,{active:s.isLoading,"onUpdate:active":e[1]||(e[1]=c=>s.isLoading=c)},null,8,["active"])])}const Ue=x(jt,[["render",fe]]);export{Ue as default};