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
                                首頁
                              </RouterLink>
                            </li>
                            <li class="opacity-25 px-2">/</li>
                            <li class="breadcrumb-item opacity-50 ">
                              <RouterLink to="/products" class="text-light text-decoration-none" >
                                電影選單
                              </RouterLink>
                            </li>
                            <li class="opacity-25 px-2">/</li>
                            <li class="breadcrumb-item " aria-current="page">明細</li>
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
                                首頁
                              </RouterLink>
                            </li>
                            <li class="opacity-25 px-2">/</li>
                            <li class="breadcrumb-item opacity-50 ">
                              <RouterLink to="/products" class="text-light text-decoration-none" >
                                電影選單
                              </RouterLink>
                            </li>
                            <li class="opacity-25 px-2">/</li>
                            <li class="breadcrumb-item " aria-current="page">明細</li>
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
            <!-- 推薦電影 -->
            <section class=" pt-8">
                <div class="container bg-dark">
                    <h2 class="text-light mb-lg-4 mb-3 ps-lg-3 ps-2 border-3  border-start border-danger">推薦電影</h2>
                    <!-- Swiper -->
                    <swiper
                    :modules="modules"
                    :pagination="true"
                    :navigation="true"
                    :loop="true"
                    :speed="1500"
                    :autoplay="{
                      delay: 2500,
                      disableOnInteraction: false,
                    }"
                    :space-between="30"
                    :slidesPerView="1"
                    :breakpoints="{
                      '960': {
                    slidesPerView: 3
                    },}"
                    class="mySwiper">
                      <swiper-slide v-for="item in filterMovie" :key="item.id">
                        <RouterLink :to="`/product/${item.id}`" @click="reload">
                          <img :src="item.imageUrl" :alt="item.title" >
                        </RouterLink>
                      </swiper-slide>
                    </swiper>
                </div>
            </section>
        </div>
    </section>
  </div>
  <LoadingComponent v-model:active="isLoading"/>
</template>

<script>
import { mapActions } from 'pinia'
import { useCartStore } from '../../stores/cartStore.js'
import { useToastMessageStore } from '../../stores/toastMessage.js'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import LoadingComponent from '../../components/LoadingComponent.vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import axios from 'axios'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  components: {
    Swiper,
    SwiperSlide,
    LoadingComponent
  },
  data () {
    return {
      modules: [Autoplay, Pagination, Navigation],
      product: {},
      newContentTitle: '',
      newContent: [],
      filterMovie: [],
      // loadingd控制
      isLoading: false,
      qty: 1
    }
  },
  methods: {
    ...mapActions(useCartStore, ['addToCart', 'changeCartQty']),
    ...mapActions(useToastMessageStore, ['pushMessage']),
    getProduct () {
      this.getCategoryData()
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
    },
    // 篩選相關電影
    getCategoryData () {
      const { id } = this.$route.params
      const api = `${VITE_URL}api/${VITE_PATH}/products/all`
      let newFilterArray = null
      this.isLoading = true
      axios.get(api)
        .then((res) => {
          this.product = res.data.products.find(item => item.id === id)
          this.content()
          newFilterArray = res.data.products.filter(item => item.category === this.product.category && item.title !== this.product.title)
          // this.filterMovie = this.getRandomItems(newFilterArray, 5)
          this.filterMovie = newFilterArray
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
    // 隨機取出5筆資料
    // getRandomItems (arr, count) {
    //   const result = []
    //   const arrayCopy = arr.slice() // 复制原始数组以免修改原数组
    //   for (let i = 0; i < count; i++) {
    //     const randomIndex = Math.floor(Math.random() * arrayCopy.length) // 随机生成一个索引
    //     const randomItem = arrayCopy.splice(randomIndex, 1)[0] // 从数组中取出该索引对应的元素，并从原数组中移除
    //     result.push(randomItem) // 将取出的元素放入结果数组中
    //   }
    //   return result
    // },
    reload () {
      window.scrollTo({ behavior: 'smooth', top: 0 })
    }
  },
  mounted () {
    // this.getProduct()
    this.getCategoryData()
    window.scrollTo({ behavior: 'smooth', top: 0 })
  },
  created () {
    this.$watch(
      () => this.$route.params,
      () => {
        this.getProduct()
      }
    )
  }
}
</script>

<style>
.swiper-slide img{
  height: 500px;
  object-fit: cover;
}
.swiper-button-prev,.swiper-button-next{
  color:#fff;
}
.swiper-pagination-bullet{
  /* background-color: #fff; */
  border: 2px solid #fff;
  opacity: 0.4;
}
.swiper-pagination-bullet-active{
  background-color: #fff;
  opacity: 1;
}
@media (max-width:992px) {
  .swiper-slide img{
    height: 550px;
    object-fit: cover;
  }
}
</style>
