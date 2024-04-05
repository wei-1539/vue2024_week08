<template>
<div class="bg-dark pb-lg-8  pt-lg-5 py-4">
    <!-- FV -->
    <section class="mb-lg-6 mb-3" >
        <div class="container bg-dark position-relative">
          <h2 class="text-light mb-lg-4 mb-3 ps-lg-3 ps-2 border-3  border-start border-danger">精彩預告 - <span>{{firstMovie.title}}</span></h2>
          <div class="FV position-relative">
            <iframe id="player" width="100%" height="100%" class="position-absolute start-0 top-0"
                :src="`${firstMovie.youtubeLink}?rel=0&showinfo=0&color=white`"
                title="YouTube video player" frameborder="0" allow=" autoplay; " allowfullscreen></iframe>
          </div>
          <div class="position bg-dark-light linkControl mt-4 mt-lg-0 ">
            <div class="container">
              <div class="d-flex justify-content-end flex-lg-row flex-column align-items-lg-center position-relative bg-dark-light" style="z-index: 2;">
                  <!-- <div class="bg-dark p-lg-3 rounded-3 mb-lg-0 mb-4"> -->
                      <!-- <h2 class=" text-light mb-0 border-3 border-start border-danger  ps-lg-3 ps-2">{{firstMovie.title}}</h2> -->
                      <!-- <div class="d-flex">
                          <button type="button" id="play-pause-btn" class=" fs-5 btn btn-outline-light rounded-3 me-3">
                              <i class="bi bi-play-fill"></i>播放
                          </button>
                          <a href="#" class="fs-5 text-decoration-none btn btn-outline-light"><i class="bi bi-exclamation-circle d-inline-block me-2"></i>更多資訊</a>
                      </div> -->
                  <!-- </div> -->
                  <RouterLink :to="`/product/${firstMovie.id}`" class="fs-5 text-decoration-none btn btn-outline-light"><i class="bi bi-exclamation-circle d-inline-block me-2"></i>更多資訊</RouterLink>
                  <!-- <button type="button" id="play-mute-btn"
                      class="fs-5 btn btn-outline-light rounded-circle" style="bottom: 25%;">
                      <i class="bi bi-volume-mute"></i>
                  </button> -->
              </div>
            </div>
          </div>
        </div>
    </section>

  <!-- 推薦電影 -->
    <section class="mb-8 py-4">
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
                <RouterLink :to="`/product/${item.id}`">
                  <img :src="item.imageUrl" :alt="item.title" >
                </RouterLink>
              </swiper-slide>
            </swiper>
        </div>
    </section>
  <!-- 小介紹 -->
    <section class="mb-lg-8 mb-6 position-relative">
      <div class="aboutMe"></div>
      <div class="container text-light position-relative p-lg-5 p-4" style="z-index: 5;">
          <div class="row">
              <div class="col-lg-6">
                  <h4 class="lh-base">CINEMA
                      是您新的最愛影音平台！無論您是喜歡精彩電影、迷人劇集還是令人驚歎的紀錄片，我們都能滿足您的所有需求。提供最新、最熱門的影視內容，給您帶來極致的觀影體驗。
                  </h4>
                  <div class="text-lg-start text-end">
                      <RouterLink to="/about" class="btn btn-outline-light mt-3 ">關於我們</RouterLink>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <!-- 簡介 -->
    <section class="mb-lg-8 mb-6  py-4">
        <div class="container">
            <div class="row text-light">
                <div class="col-lg-3  mb-lg-0 mb-5">
                    <h3 class="text-center mb-3">無限娛樂</h3>
                    <p class="m-0 text-center opacity-75">盡覽強檔電影、獨家原創、熱播韓劇、動漫等更多內容</p>
                </div>
                <div class="col-lg-3  mb-lg-0 mb-5">
                    <h3 class="text-center mb-3">盡情下載</h3>
                    <p class="m-0 text-center opacity-75">下載至多達 10 部裝置，即便離線也能盡情觀賞</p>
                </div>
                <div class="col-lg-3  mb-lg-0 mb-5">
                    <h3 class="text-center mb-3">強大的家長控制</h3>
                    <p class="m-0 text-center opacity-75">透過多種家長控制功能，確保安心的家庭觀看環境</p>
                </div>
                <div class="col-lg-3 ">
                    <h3 class="text-center mb-3">不同使用者</h3>
                    <p class="m-0 text-center opacity-75">透過個人化推薦享受更多精彩內容</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 月租費 -->
    <section class="">
        <div class="container">
            <h2 class="text-light text-center mb-lg-4 mb-3 ">會員專案<span class="fs-6"><br>（敬請期待）</span></h2>
            <p class="text-light text-center  mb-lg-6 mb-4 opacity-75 ">開啟您的無限娛樂之旅！不要錯過我們的獨家內容和精彩活動</p>
            <ul class="list-unstyled row m-0">
                <li class="col-md-4 mb-lg-0 mb-4">
                    <div class="card h-100 py-4 bg-light rounded-3">
                        <div class="card-body d-flex flex-column justify-content-between">
                            <div class="top">
                                <p class="h5 text-center mb-4 mb-md-2">
                                    <span class="bg-gray p-2">免費方案</span>
                                </p>
                                <h5 class="card-title fw-bold text-center mb-4">
                                    <span class="align-middle">TWD</span>
                                    <span class="display-2 fw-bold price-detail align-middle px-2">0</span>
                                    <span class="align-middle">／月</span>
                                </h5>
                                <p class="h5 card-text text-center mb-4 d-none d-md-block">你將會得到</p>
                                <ul class="text-center list-unstyled fs-5 mb-5 d-none d-md-block">
                                    <li class="d-flex align-items-center justify-content-center">

                                        <i class="bi bi-check fs-2 text-danger"></i>
                                        <span class="align-middle ms-2">高清影片</span>
                                    </li>
                                    <li class="d-flex align-items-center justify-content-center">
                                        <i class="bi bi-check fs-2 text-danger"></i>
                                        <span class="align-middle ms-2">廣告播放</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="text-center">
                                <RouterLink to="/products" class="text-center btn btn-danger btn-lg rounded-3">前往選單</RouterLink>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="col-md-4 mb-lg-0 mb-4">
                    <div class=" card h-100 py-4 bg-light rounded-3">
                        <div class="card-body d-flex flex-column justify-content-between">
                            <div class="top">
                                <p class="h5 text-center mb-4 mb-md-2">
                                    <span class="bg-gray p-2">基本方案</span>
                                </p>
                                <h5 class="card-title fw-bold text-center mb-4">
                                    <span class="align-middle">TWD</span>
                                    <span class="display-2 fw-bold price-detail align-middle px-2">150</span>
                                    <span class="align-middle">／月</span>
                                </h5>
                                <p class="h5 card-text text-center mb-4 d-none d-md-block">你將會得到</p>
                                <ul class="text-center list-unstyled fs-5 mb-5 d-none d-md-block">
                                    <li class="d-flex align-items-center justify-content-center">

                                        <i class="bi bi-check fs-2 text-danger"></i>
                                        <span class="align-middle ms-2">超清影片</span>
                                    </li>
                                    <li class="d-flex align-items-center justify-content-center">
                                        <i class="bi bi-check fs-2 text-danger"></i>
                                        <span class="align-middle ms-2">無廣告播放</span>
                                    </li>
                                    <li class="d-flex align-items-center justify-content-center">
                                        <i class="bi bi-check fs-2 text-danger"></i>
                                        <span class="align-middle ms-2">可同時在多個設備上觀看</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="text-center">
                                <div class="text-center btn btn-danger btn-lg rounded-3 disabled">敬請期待</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="col-md-4 mb-lg-0 mb-4">
                    <div class="card py-4 bg-light rounded-3">
                        <div class="card-body d-flex flex-column justify-content-between">
                            <div class="top">

                                <p class="h5 text-center mb-4 mb-md-2">
                                    <span class="bg-gray p-2">家庭方案</span>
                                </p>
                                <h5 class="card-title fw-bold text-center mb-4">
                                    <span class="align-middle">TWD</span>
                                    <span class="display-2 fw-bold price-detail align-middle px-2">300</span>
                                    <span class="align-middle">／月</span>
                                </h5>
                                <p class="h5 card-text text-center mb-4 d-none d-md-block">你將會得到</p>
                                <ul class="text-center list-unstyled fs-5 mb-5 d-none d-md-block">
                                    <li class="d-flex align-items-center justify-content-center">

                                        <i class="bi bi-check fs-2 text-danger"></i>
                                        <span class="align-middle ms-2">高清影片</span>
                                    </li>
                                    <li class="d-flex align-items-center justify-content-center">
                                        <i class="bi bi-check fs-2 text-danger"></i>
                                        <span class="align-middle ms-2">無廣告播放</span>
                                    </li>
                                    <li class="d-flex align-items-center justify-content-center">
                                        <i class="bi bi-check fs-2 text-danger"></i>
                                        <span class="align-middle ms-2">可同時在多個設備上觀看</span>
                                    </li>
                                    <li class="d-flex align-items-center justify-content-center">
                                        <i class="bi bi-check fs-2 text-danger"></i>
                                        <span class="align-middle ms-2">多個用戶同時使用</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="text-center">
                                <div class="text-center btn btn-danger btn-lg rounded-3 disabled">敬請期待</div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  </div>
  <LoadingComponent v-model:active="isLoading"/>
</template>

<script>
import { mapActions } from 'pinia'
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
      filterMovie: [],
      firstMovie: [],
      // loadingd控制
      isLoading: false
    }
  },
  methods: {
    ...mapActions(useToastMessageStore, ['pushMessage']),
    // 取得資料
    getProduct () {
      const api = `${VITE_URL}api/${VITE_PATH}/products/all`
      let newFilterArray = null
      this.isLoading = true
      axios.get(api)
        .then((res) => {
          // this.products = res.data.products
          newFilterArray = res.data.products.filter(item => item.is_love === 1)
          this.filterMovie = this.getRandomItems(newFilterArray, 5)
          this.firstMovie = this.filterMovie[0]
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
    getRandomItems (arr, count) {
      const result = []
      const arrayCopy = arr.slice() // 复制原始数组以免修改原数组
      for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * arrayCopy.length) // 随机生成一个索引
        const randomItem = arrayCopy.splice(randomIndex, 1)[0] // 从数组中取出该索引对应的元素，并从原数组中移除
        result.push(randomItem) // 将取出的元素放入结果数组中
      }
      return result
    }
  },
  mounted () {
    this.getProduct()
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }
}
</script>

<style>
.aboutMe {
  position: absolute;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1706594366597-7c529d986768?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-attachment: fixed;
  filter: brightness(0.8) blur(1.5px);
  width: 100%;
  height: 100%;
}
.FV{
  /* height: 56.25vw; */
  height: 36vw;
}
.linkControl{
  width: 90%;
  left: 5%;
  bottom: 10%;
  z-index: 1;
}
.position{
  position: absolute;
}
.swiper-slide img{
  height: 600px;
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
  .aboutMe{
      background-position: 33% center;
      filter: brightness(0.4) blur(1.5px);
  }
  .position{
  position: relative;
  }
  .linkControl{
    width: 100%;
    left: 0%;
    bottom: 0%;
    z-index: 1;
  }
  .FV{
    height: 100%;
    padding-bottom: 56.25%;
  }
  .swiper-slide img{
    height: 550px;
    object-fit: cover;
  }
}
</style>
