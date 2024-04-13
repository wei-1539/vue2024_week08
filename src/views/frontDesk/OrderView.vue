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
                <li class="text-center opacity-50">
                    <p class="mb-0 text-sm fs-xs fs-lg-sm">Step.2</p>
                    <p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">填寫資料</p>
                </li>
                <i class="bi bi-chevron-right mx-lg-4 mx-2 mx-md-5"></i>
                <li class="text-center ">
                    <p class="mb-0 text-sm fs-xs fs-lg-sm">Step.3</p>
                    <p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">付款資訊</p>
                </li>
                <i class="bi bi-chevron-right mx-lg-4 mx-2 mx-md-5"></i>
                <li class="text-center opacity-50">
                    <p class="mb-0 text-sm fs-xs fs-lg-sm">Step.4</p>
                    <p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">訂單完成</p>
                </li>
            </ul>

            <div class="row gx-5">
              <div class="col-md-6  mb-mb-0 mb-4">
                <div class="mb-lg-3 d-flex justify-content-between align-items-center border-bottom pb-2">
                  <h4 class="text-light ps-lg-3 ps-2 border-3  border-start border-danger">訂單明細</h4>
                  <h5 class="text-light  ps-lg-3 ps-2 ">總金額 NT$ {{order.total}}</h5>
                </div>
                <ul class="py-lg-3 py-4 mx-0 list-unstyled">
                  <li v-for="item in products" :key="item.id" class="row  mb-4 border-bottom pb-4">
                      <img class="product__img" :src="item.product.imageUrl" :alt="item.product.title">
                    <div class="col d-flex flex-column justify-content-between w-100 ps-3 pe-4">
                      <div class="d-flex">
                        <p class="mb-0 fs-4">{{item.product.title}}</p>
                      </div>
                      <div class="d-flex flex-column justify-content-between">
                        <p class=" mb-0">
                          NT$ {{item.product.price}}
                          <span class="ms-1">x</span>
                          <span class="fs-6 ms-2"> {{item.qty}} </span>
                          <span class="fs-6 ms-2"> / {{item.product.unit}}</span>
                        </p>
                        <p class="lh-lg me-md-0 mb-0 "> 總計：NT$ {{item.final_total}}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 mb-mb-0 mb-6">
                    <div class="py-3 px-lg-5 px-3 shadow-lg-lg  bg-light bg-opacity-90 rounded-3 text-black">
                        <p class="fs-4 text-center"> 訂單資訊 </p>
                        <ul class="mb-5 p-0">
                            <li class="mb-3 d-flex ps-0 p-2 border-bottom border-dark border-opacity-20">
                                <p class="mb-0 fw-regular d-md-none"> 訂單金額： NT$ {{order.total}}</p>
                                <p class="mb-0 fw-regular d-none d-md-block col-4">訂單金額：</p>
                                <p class="mb-0 col d-none d-md-block col"> NT$ {{order.total}}</p>
                            </li>
                            <li class="mb-3 d-flex ps-0 p-2 border-bottom border-dark border-opacity-20">
                                <p class="mb-0 fw-regular d-md-none">訂單編號： {{order.id}}</p>
                                <p class="mb-0 fw-regular d-none d-md-block col-4">訂單編號：</p>
                                <p class="mb-0 col d-none d-md-block col"> {{order.id}}</p>
                            </li>
                            <li class="mb-3 d-flex ps-0 p-2 border-bottom border-dark border-opacity-20">
                                <p class="mb-0 fw-regular d-md-none"> 下單時間：{{this.date(order.create_at)}}</p>
                                <p class="mb-0 fw-regular d-none d-md-block col-4">下單時間：</p>
                                <p class="mb-0 col d-none d-md-block col">{{this.date(order.create_at)}}</p>
                            </li>
                            <li class="mb-3 d-flex ps-0 p-2 border-bottom border-dark border-opacity-20">
                                <p class="mb-0 fw-regular d-md-none"> 付款狀態：
                                  <span class="text-success fw-bold" v-if="order.is_paid">已付款</span>
                                  <span class="text-danger fw-bold" v-else>未付款</span>
                                </p>
                                <p class="mb-0 fw-regular d-none d-md-block col-4">付款狀態：</p>
                                <p class="mb-0 col d-none d-md-block col fw-bold">
                                  <span class="text-success" v-if="order.is_paid">已付款</span>
                                  <span class="text-danger" v-else>未付款</span>
                                </p>
                            </li>
                            <li class="mb-3 d-flex ps-0 p-2 border-bottom border-dark border-opacity-20">
                                <p class="mb-0 fw-regular d-md-none"> 寄送地址： {{user.address}}</p>
                                <p class="mb-0 fw-regular d-none d-md-block col-4">寄送地址：</p>
                                <p class="mb-0 col d-none d-md-block col">{{user.address}}</p>
                            </li>
                            <li class="mb-3 d-flex ps-0 p-2 border-bottom border-dark border-opacity-20">
                                <p class="mb-0 fw-regular d-md-none"> 顧客姓名： {{user.name}}</p>
                                <p class="mb-0 fw-regular d-none d-md-block col-4">顧客姓名：</p>
                                <p class="mb-0 col d-none d-md-block col">{{user.name}}</p>
                            </li>
                            <li class="mb-3 d-flex ps-0 p-2 border-bottom border-dark border-opacity-20">
                                <p class="mb-0 fw-regular d-md-none">聯絡電話： {{user.tel}}</p>
                                <p class="mb-0 fw-regular d-none d-md-block col-4">聯絡電話：</p>
                                <p class="mb-0 col d-none d-md-block col">{{user.tel}}</p>
                            </li>
                            <li class="mb-3 d-flex ps-0 p-2 border-bottom border-dark border-opacity-20">
                                <p class="mb-0 fw-regular d-md-none"> 電子信箱： {{user.email}}</p>
                                <p class="mb-0 fw-regular d-none d-md-block col-4">電子信箱：</p>
                                <p class="mb-0 col d-none d-md-block col">{{user.email}}</p>
                            </li>
                            <li class="mb-3 d-flex ps-0 p-2  border-opacity-20">
                                <p class="mb-0 fw-regular d-md-none"> 客戶備註：{{order.message}} </p>
                                <p class="mb-0 fw-regular d-none d-md-block col-4">客戶備註：</p>
                                <p class="mb-0 col d-none d-md-block col">{{order.message}}</p>
                            </li>
                        </ul>
                        <div class="btn btn-outline-danger w-100" @click="payOrder">確認付款</div>
                    </div>
              </div>
            </div>
        </div>
    </section>
  </div>
  <LoadingComponent v-model:active="isLoading" id="cartPage"/>
</template>

<script>
import { mapActions } from 'pinia'
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
      // loadingd控制
      isLoading: false,
      order: {},
      user: {},
      products: {}
    }
  },
  methods: {
    ...mapActions(useToastMessageStore, ['pushMessage']),
    getOrder () {
      const { id } = this.$route.params
      const api = `${VITE_URL}api/${VITE_PATH}/order/${id}`
      this.isLoading = true
      axios.get(api)
        .then((res) => {
          this.order = res.data.order
          this.user = res.data.order.user
          this.products = res.data.order.products
        })
        .catch((err) => {
          this.pushMessage({
            style: 'danger',
            title: '訂單取得失敗',
            content: err.response.data.message
          })
        })
        .finally(() => {
          setTimeout(() => {
            this.isLoading = false
          }, 500)
        })
    },
    date (time) {
      if (!time) {
        return ''
      } else {
        const date = new Date(time * 1000)

        const year = date.getFullYear()
        const month = date.getMonth() + 1 // 月份從 0 開始，所以需要加 1
        const day = date.getDate()
        const hour = date.getHours()
        const minute = date.getMinutes()
        const second = date.getSeconds()
        const formattedDate = `${year}/${month}/${day} ${hour}:${minute}:${second}`
        return formattedDate
      }
    },
    payOrder () {
      const { id } = this.$route.params
      const api = `${VITE_URL}api/${VITE_PATH}/pay/${id}`
      this.isLoading = true
      axios.post(api)
        .then((res) => {
          this.$router.push(`/thankyou/${id}`)
          this.pushMessage({
            style: 'success',
            title: '付款成功',
            content: res.data.message
          })
        })
        .catch((err) => {
          this.pushMessage({
            style: 'danger',
            title: '付款失敗',
            content: err.response.data.message
          })
        })
        .finally(() => {
          setTimeout(() => {
            this.isLoading = false
          }, 500)
        })
    }
  },

  mounted () {
    this.getOrder()
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }
}
</script>

<style>
 #cartPage.vl-overlay .vl-background{
    /* background-color: #474747; */
    background-color: #141414;
    opacity: 0.4;
  }
  .white-space-nowrap {
    white-space: nowrap;
  }
  .product__img{
    width: 125px;
    object-fit: cover;
  }
  @media (max-width:768px) {
    .text-sm{
      font-size: 0.8rem;
    }
  }
</style>
