<template>
  <div class="bg-dark text-light py-lg-8 py-5">
    <section>
        <div class="container">
          <ul class="d-flex justify-content-center align-items-center list-unstyled w-75 mx-auto mb-5">
                <li class="text-center">
                    <p class="mb-0 text-sm fs-xs fs-lg-sm">Step.1</p>
                    <p class="mb-0 text-sm fs-xs fs-lg-sm white-space-nowrap">購買項目</p>
                </li>
                <i class="bi bi-chevron-right mx-lg-4 mx-2 mx-md-5"></i>
                <li class="text-center opacity-50">
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

            <RouterLink to="/products" class=" btn btn-outline-light rounded-pill text-decoration-none mb-4 d-inline-block"><i
                    class="bi bi-caret-left-fill"></i>繼續購物</RouterLink>
            <div class="row">
                <div class="col-md-8 mb-8 mb-lg-0">
                    <div class="d-flex justify-content-between mb-4">
                        <h4>購物車品項</h4>
                        <button type="button" class="btn btn-outline-light px-4 rounded-pill" :class="carts.length > 0 ? 'd-inline-block' : 'd-none'" @click="removeCartAll">清空購物車</button>
                    </div>
                    <p class="fs-2 text-center h-100 py-5  mb-0" v-if="carts.length === 0">目前沒有訂單唷！！</p>
                    <ul class="list-unstyled " v-else>
                        <li class="d-flex mb-4  pb-4 border-bottom" v-for="item in carts" :key="item.id">
                            <img :src="item.product.imageUrl" alt="" style="width: 100px; object-fit: cover;">
                            <div class="ms-4 d-flex flex-column justify-content-between w-100">
                                <div class="d-flex justify-content-between">
                                    <p class="mb-0 fs-4">{{item.product.title}}</p>
                                    <i class="bi bi-trash fs-5 btn btn-outline-light border-0 d-lg-block d-none"  @click="removeCartItem(item.id)"></i>
                                </div>

                                <div class="d-flex justify-content-md-start justify-content-between align-items-center ">
                                    <p class="mb-0 fs-6  mb-0 me-md-5 me-0">NT$ {{item.product.price}}
                                        <span class=""> / {{item.product.unit}}</span>
                                    </p>
                                    <div class="input-group pe-md-5 pe-0 w-md-25 w-50">
                                        <!-- - -->
                                        <div class="input-group-prepend">
                                            <button class="btn btn-outline-light border-0 py-2" type="button" :disabled="item.qty === 1" @click="item.qty--;changeCartQty(item.id,item.qty)">
                                                <i class="bi bi-dash "></i>
                                            </button>
                                        </div>
                                        <!-- num -->
                                        <input type="text" class="form-control border-0 text-center my-auto shadow-none" readonly value="1" min="1" v-model="item.qty">
                                        <!-- + -->
                                        <div class="input-group-append">
                                            <button class="btn btn-outline-light border-0 py-2" type="button" @click="item.qty++;changeCartQty(item.id,item.qty)">
                                                <i class="bi bi-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <p class="ms-auto mb-0 fs-6 d-lg-inline-block d-none">總計：NT$ <span class="ms-2">{{item.total}}</span></p>
                                </div>
                                <div class="d-lg-none d-flex align-items-center justify-content-between">
                                  <p class="mb-0 fs-6">總計：NT$ <span class="ms-2">{{item.total}}</span></p>
                                  <i class="bi bi-trash fs-5 btn btn-outline-light border-0"  @click="removeCartItem(item.id)"></i>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <div class="border p-4 mb-4">
                        <h4 class="fw-bold mb-4 pb-3 border-bottom">訂單資訊</h4>

                        <!-- <table class="table text-muted border-bottom">
                            <tbody>
                                <tr>
                                    <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">小計</th>
                                    <td class="text-end border-0 px-0 pt-4">NT$24,000</td>
                                </tr>
                                <tr>
                                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">折扣</th>
                                    <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
                                </tr>
                            </tbody>
                        </table> -->

                        <div class="pb-4 border-bottom border-light border-opacity-10 mb-4">
                            <div class="mb-2 d-flex justify-content-between">
                                <p class="mb-0">目前數量</p>
                                <p class="mb-0"> 共 <span class="font-arimo">{{carts.length}}</span> 部</p>
                            </div>
                            <div class="mb-2 d-flex justify-content-between">
                                <p class="mb-0">小計</p>
                                <p class="font-arimo mb-0">NT$ {{total}}</p>
                            </div>
                            <div class="mt-4">
                              <p class="mb-1 opacity-75">*消費滿500元 ，折85折【movie500】</p>
                              <div class="mb-2   d-flex justify-content-between">
                                  <input type="text" class="form-control rounded-0 border-secondary w-70"
                                      placeholder="請輸入優惠碼" style="width: 70%;" v-model="couponCode">
                                  <button type="button" class="btn btn-danger w-30 rounded-0 text-light  border-0" :class="{disabled : total < 500}" @click="useCoupon(this.couponCode, total)">
                                      使用優惠券
                                  </button>
                              </div>
                              <div class="d-flex justify-content-between" v-if="this.couponSuccess">
                                  <p class="mb-0 bg-danger rounded-1 px-2 ">已折扣</p>
                                  <p class="font-arimo mb-0">NT$ {{total - final_total}}</p>
                              </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between mt-4">
                            <p class="mb-0 h5 ">總計</p>
                            <p class="mb-0 h5 fw-bold">NT$ {{final_total}}</p>
                        </div>
                        <RouterLink to="/checkout" class="btn btn-danger w-100 mt-4" :class="{disabled: carts.length === 0}">下一步</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
<LoadingComponent v-model:active="isLoading" id="cartPage"/>
</template>

<style>
  #cartPage.vl-overlay .vl-background{
    /* background-color: #474747; */
    background-color: #141414;
    opacity: 0.4;
  }
  .white-space-nowrap {
    white-space: nowrap;
  }
  .w-30{
    width: 30%;
  }
  @media (max-width:768px) {
    .w-md-25{
        width: 25%;
    }
    .w-30{
      width: 40%;
    }
    .text-sm{
        font-size: 0.8rem;
    }
  }
</style>

<script>
import { mapActions, mapState } from 'pinia'
import { useCartStore } from '@/stores/cartStore.js'
import LoadingComponent from '../../components/LoadingComponent.vue'
export default {
  components: {
    LoadingComponent
  },
  data () {
    return {
      couponCode: ''
    }
  },
  methods: {
    // 提取方法
    ...mapActions(useCartStore, ['getCart', 'removeCartAll', 'removeCartItem', 'changeCartQty', 'useCoupon']),
    reloadPage () {
      if (!this.isLoading) {
        location.reload()
      }
    }
  },
  computed: {
    // 提取資料
    ...mapState(useCartStore, ['carts', 'total', 'isLoading', 'final_total', 'couponSuccess'])
  },
  mounted () {
    this.reloadPage()
    window.scrollTo({ behavior: 'smooth', top: 0 })
    this.getCart()
  }
}
</script>
