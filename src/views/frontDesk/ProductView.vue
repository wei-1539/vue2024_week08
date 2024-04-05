<template>
  <div class="bg-dark text-light py-lg-7 py-4">
    <section >
        <div class="container pb-7">
            <div class="row ">
                <div class="col-md-7 d-flex flex-column  justify-content-center mb-lg-0 mb-4">
                  <nav aria-label="breadcrumb ">
                        <ol class="breadcrumb d-lg-none bg-dark px-0 mb-3 ">
                            <li class="breadcrumb-item opacity-50 ">
                              <RouterLink to="/" class="text-light text-decoration-none">
                                Home
                              </RouterLink>
                            </li>
                            <li class="opacity-25 px-2">/</li>
                            <li class="breadcrumb-item opacity-50 ">
                              <RouterLink to="/products" class="text-light text-decoration-none" >
                                Product
                              </RouterLink>
                            </li>
                            <li class="opacity-25 px-2">/</li>
                            <li class="breadcrumb-item " aria-current="page">Detail</li>
                        </ol>
                    </nav>
                  <img class="w-75 mx-auto" style="object-fit=cover"
                        :src="product.imageUrl"
                        :alt="product.title">
                </div>
                <div class="col-md-5">
                    <nav aria-label="breadcrumb ">
                        <ol class="breadcrumb bg-dark px-0 mb-2 d-none d-lg-flex ">
                            <li class="breadcrumb-item opacity-50 ">
                              <RouterLink to="/" class="text-light text-decoration-none">
                                Home
                              </RouterLink>
                            </li>
                            <li class="opacity-25 px-2">/</li>
                            <li class="breadcrumb-item opacity-50 ">
                              <RouterLink to="/products" class="text-light text-decoration-none" >
                                Product
                              </RouterLink>
                            </li>
                            <li class="opacity-25 px-2">/</li>
                            <li class="breadcrumb-item " aria-current="page">Detail</li>
                        </ol>
                    </nav>
                    <!--  電影資訊 -->
                    <h2 class="mb-1">{{product.title}}</h2>
                    <p>{{product.category}}片</p>
                    <div class="d-flex justify-content-end border-3 border-bottom pb-2 mb-4">

                      <p class="h5 mb-0 fw-bold text-danger me-3" v-if="product.origin_price === product.price">NT$ {{product.price}}</p>
                      <div v-else>
                        <del class="h5 mb-0 me-4 opacity-75" >NT$ {{product.origin_price}}</del>
                        <p class="d-inline-block h5 mb-0 fw-bold text-danger me-3">NT$ {{product.price}}</p>
                      </div>
                      <p class="mb-0">/<span class="d-inline-block  ms-2">{{product.unit}}</span></p>
                    </div>

                    <div class="mb-4 border-3 border-bottom">
                        <h4 class="mb-2">電影描述</h4>
                        <p class="movieContent opacity-75">
                          {{product.description}}
                        </p>
                        <h4 class="mb-2">{{newContentTitle}}</h4>
                        <div class="mb-4">
                          <p class="movieContent opacity-75 mb-0" v-for="(item, ind) in newContent" :key="ind">
                            {{item}}
                          </p>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-6">
                            <div class="input-group my-3  rounded bg-dark">
                              <!-- + -->
                                <div class="input-group-prepend">
                                    <button class="btn btn-outline-light rounded-0 p-2 bg-dark text-light" type="button" id="button-addon1" :disabled="this.qty === 1" @click="this.qty--;changeCartQty(product.id,this.qty)">
                                        <i class="bi bi-dash fs-5"></i>
                                    </button>
                                </div>
                                <!-- num -->
                                <input type="text"
                                    class="form-control border text-center  shadow-none bg-dark text-light fs-5"
                                    value="1" min="1"  readonly v-model="this.qty">
                                <!-- -~ -->
                                <div class="input-group-append">
                                    <button class=" btn btn-outline-light rounded-0  p-2 bg-dark text-light" type="button" id="button-addon2" @click="this.qty++;changeCartQty(product.id,this.qty)">
                                        <i class="bi bi-plus fs-5"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <a class="text-nowrap btn btn-danger w-100 py-2" @click.prevent="addToCart(product.id,this.qty)">加入購物車</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-100 position-relative my-5 border-3 border-top pt-5" style="padding-bottom: 56.25%;">
                <h3 class="mb-4  border-3 border-start border-danger  ps-lg-3 ps-2">觀賞預告片</h3>
                <iframe id="player" class="position-absolute" width="100%" height="100%"
                :src="`${product.youtubeLink}?rel=0&showinfo=0&color=white`"
                title="YouTube video player" frameborder="0" allow=" autoplay; " allowfullscreen></iframe>
            </div>
        </div>
    </section>
  </div>
  <LoadingComponent v-model:active="isLoading"/>
</template>

<script>
import { mapActions } from 'pinia'
import { useCartStore } from '../../stores/cartStore.js'
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
      product: {},
      newContentTitle: '',
      newContent: [],
      // loadingd控制
      isLoading: false,
      qty: 1
    }
  },
  methods: {
    ...mapActions(useCartStore, ['addToCart', 'changeCartQty']),
    ...mapActions(useToastMessageStore, ['pushMessage']),
    getProduct () {
      const { id } = this.$route.params
      const api = `${VITE_URL}api/${VITE_PATH}/product/${id}`
      this.isLoading = true
      axios.get(api)
        .then((res) => {
          this.product = res.data.product
          this.content()
        })
        .catch((err) => {
          this.pushMessage({
            style: 'danger',
            title: '產品資訊取得失敗',
            content: err.response.data.message
          })
        })
        .finally(() => {
          setTimeout(() => {
            this.isLoading = false
          }, 500)
        })
    },
    // 改變content的顯示 『有段行的分別出來，改成陣列方便上方使用』
    content () {
      const splitArray = this.product.content.split('\n')
      const newArray = []
      for (let i = 0; i < splitArray.length; i++) {
        newArray.push(splitArray[i])
      }
      this.newContentTitle = newArray[0]
      newArray.shift()
      this.newContent = newArray
    }
  },
  mounted () {
    this.getProduct()
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }
}
</script>
