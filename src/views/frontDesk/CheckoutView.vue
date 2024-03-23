<template>
  <div class="bg-dark text-light py-lg-8 py-5">
     <section>
        <div class="container">
             <ul class="d-flex justify-content-center align-items-center list-unstyled w-75 mx-auto mb-5">
                <li class="text-center opacity-50">
                    <p class="mb-0 text-sm fs-xs fs-lg-sm">Step.1</p>
                    <p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">購買項目</p>
                </li>
                <i class="bi bi-chevron-right mx-lg-4 mx-2 mx-md-5"></i>
                <li class="text-center ">
                    <p class="mb-0 text-sm fs-xs fs-lg-sm">Step.2</p>
                    <p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">填寫資料</p>
                </li>
                <i class="bi bi-chevron-right mx-lg-4 mx-2 mx-md-5"></i>
                <li class="text-center opacity-50">
                    <p class="mb-0 text-sm fs-xs fs-lg-sm">Step.3</p>
                    <p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">付款資訊</p>
                </li>
                <i class="bi bi-chevron-right mx-lg-4 mx-2 mx-md-5"></i>
                <li class="text-center opacity-50">
                    <p class="mb-0 text-sm fs-xs fs-lg-sm">Step.4</p>
                    <p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">訂單完成</p>
                </li>
            </ul>

            <RouterLink to="/cart" class=" btn btn-outline-light rounded-pill text-decoration-none mb-4 d-inline-block"><i
                    class="bi bi-caret-left-fill"></i>返回購物車</RouterLink>
            <div class="row">
                <div class="col-md-8 mb-8 mb-lg-0">
                    <div class="d-flex flex-lg-row flex-column justify-content-between mb-4 pb-2 border-bottom">
                        <p class="fs-4 mb-lg-0 mb-2 ">目前有 {{carts.length}} 部</p>
                        <div class=" d-flex align-items-center justify-content-between">
                          <p class="mb-0 me-3 bg-danger rounded-1 px-2">已折抵 - NT$ {{total - final_total}}</p>
                          <p class="fs-4 mb-0 ">總金額：<span class="ms-3  ">NT$ {{final_total}}</span>
                          </p>
                        </div>
                    </div>
                    <ul class="list-unstyled ">
                        <li class="d-flex mb-lg-4 mb-5" v-for="item in carts" :key="item.id">
                            <img :src="item.product.imageUrl"
                                alt="" style="width: 100px; object-fit: cover;">
                            <div class="ms-4 d-flex flex-column justify-content-between w-100">
                                <p class="mb-0 fs-5">{{item.product.title}}</p>
                                <div class="d-flex justify-content-between flex-column flex-lg-row">
                                    <p class="mb-lg-0 mb-3 fs-6">NT$ {{item.product.price}}
                                      <span>x {{item.qty}} </span>
                                      <span class="fs-6 ms-2"> / {{item.product.unit}}</span>
                                    </p>
                                    <p class="mb-0 fs-6">總計：NT$ <span class="ms-2">{{item.final_total}}</span></p>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
                <div class="col-md-4">
                    <div class=" rounded-2 shadow-lg-lg">
                        <p class="fs-4 pb-2 border-bottom border-light border-opacity-10 "> 寄送資訊 </p>
                        <VForm ref="form" @submit="onSubmit">
                            <div class="mb-3">
                                <label for="email" class="form-label">
                                    <span class="text-danger">*</span> Email
                                </label>
                                <VField id="email" type="email"
                                    class="form-control border-dark border-opacity-40 rounded-0" placeholder="請輸入 Email"
                                    name="email"
                                    rules="required|email"
                                    v-model="form.user.email"/>
                                <ErrorMessage name="email" class="bg-danger rounded-1 px-1 mt-2 d-inline-block"/>
                            </div>
                            <div class="mb-3">
                                <label for="name" class="form-label">
                                    <span class="text-danger">*</span>
                                    收件人姓名
                                </label>
                                <VField id="name" type="text"
                                    class="form-control border-dark border-opacity-40 rounded-0" placeholder="請輸入姓名"
                                    name="姓名"
                                    rules="required"
                                    v-model="form.user.name"/>
                                <ErrorMessage name="姓名" class="bg-danger rounded-1 px-1 mt-2 d-inline-block"/>
                            </div>
                            <div class="mb-3">
                                <label for="tel" class="form-label">
                                    <span class="text-danger">*</span>
                                    收件人電話
                                </label>
                                <VField id="tel" type="tel" class="form-control border-dark border-opacity-40 rounded-0"
                                    placeholder="請輸入電話"
                                    name="電話"
                                    rules="required|min:8|max:10"
                                    v-model="form.user.tel"/>
                                <ErrorMessage name="電話" class="bg-danger rounded-1 px-1 mt-2 d-inline-block"/>
                            </div>
                            <div class="mb-3">
                                <label for="address" class="form-label">
                                    <span class="text-danger">*</span>
                                    收件人地址
                                </label>
                                <VField id="address" type="text"
                                    class="form-control border-dark border-opacity-40 rounded-0" placeholder="請輸入地址"
                                    name="地址"
                                    rules="required"
                                    v-model="form.user.address"/>
                                <ErrorMessage name="地址" class="bg-danger rounded-1 px-1 mt-2 d-inline-block"/>
                            </div>
                            <div class="mb-3">
                                <p><span class="text-danger me-1">*</span>選擇付款方式</p>
                                <div class="row">
                                  <div class="payCheck p-0 col form-check text-center btn btn-outline-light border-0">
                                    <VField  class="form-check-input d-none" rules="required" type="radio" name="付款方式" value="信用卡" id="flexRadioDefault1" v-model="form.user.pay"/>
                                    <label class="form-check-label w-100 p-2" for="flexRadioDefault1" style="cursor:pointer">
                                      <i class="bi bi-credit-card fs-2"></i>
                                      <p class="mb-0">信用卡</p>
                                    </label>
                                  </div>
                                  <div class="payCheck p-0 col form-check text-center btn btn-outline-light  border-0">
                                    <VField  class="form-check-input d-none" rules="required" type="radio" name="付款方式" value="超商繳費" id="flexRadioDefault2" v-model="form.user.pay"/>
                                    <label class="form-check-labe w-100 p-2" for="flexRadioDefault2" style="cursor:pointer">
                                      <i class="bi bi-box-seam fs-2"></i>
                                      <p class="mb-0">超商繳費</p>
                                    </label>
                                  </div>
                                </div>
                                <ErrorMessage name="付款方式" class="bg-danger rounded-1 px-1 mt-2 d-inline-block"/>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">留言</label>
                                <textarea id="message" class="form-control border-dark border-opacity-40 rounded-0"
                                    cols="30" rows="10" v-model="form.message"></textarea>
                            </div>
                            <div class="text-end">
                              <button type="submit" class="btn btn-danger text-light w-100" >
                                    提交訂單
                                </button>
                            </div>
                        </VForm>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
  <LoadingComponent v-model:active="isLoading" id="checkoutPage"/>
</template>

<style>
.payCheck--active{
  background-color: #fff;
  color:#141414;
}
  #checkoutPage.vl-overlay .vl-background{
    /* background-color: #474747; */
    background-color: #141414;
    opacity: 0.4;
  }
  .white-space-nowrap {
    white-space: nowrap;
  }
  @media (max-width:768px) {
    .text-sm{
      font-size: 0.8rem;
    }
  }
</style>

<script>
import { mapActions, mapState } from 'pinia'
import { useCartStore } from '@/stores/cartStore.js'
import { useToastMessageStore } from '../../stores/toastMessage.js'
import LoadingComponent from '../../components/LoadingComponent.vue'
import axios from 'axios'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  components: {
    LoadingComponent
  },
  data () {
    return {
      // 表單內容
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
          pay: ''
        },
        message: ''
      }
    }
  },
  methods: {
    // 提取方法
    ...mapActions(useCartStore, ['getCart']),
    ...mapActions(useToastMessageStore, ['pushMessage']),
    onSubmit () {
      const api = `${VITE_URL}api/${VITE_PATH}/order`
      axios.post(api, { data: this.form })
        .then((res) => {
          // 清空表單內容
          this.$refs.form.resetForm()
          // 重新顯示購物車內容
          this.getCart()
          this.pushMessage({
            style: 'success',
            title: '已建立訂單',
            content: res.data.message
          })
          this.$router.push(`/order/${res.data.orderId}`)
        })
        .catch((err) => {
          this.pushMessage({
            style: 'danger',
            title: '無法建立訂單',
            content: err.response.data.message
          })
        })
    }
  },
  computed: {
    // 提取資料
    ...mapState(useCartStore, ['carts', 'total', 'isLoading', 'final_total', 'couponSuccess'])
  },
  mounted () {
    window.scrollTo({ behavior: 'smooth', top: 0 })
    const payCheck = document.querySelectorAll('.payCheck')
    payCheck.forEach((item, ind) => {
      payCheck.forEach((checkItem, checkInd) => {
        item.addEventListener('click', () => {
          checkItem.classList.remove('payCheck--active')
          if (ind === checkInd) {
            checkItem.classList.add('payCheck--active')
          }
        })
      })
    })
  }
}
</script>
