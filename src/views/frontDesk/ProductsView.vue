<template>
  <div class="bg-dark text-light pb-4">

    <section>
        <nav id="productNav" class=" position-sticky  navbar navbar-expand-lg navbar-dark justify-content-evenly align-items-center border border-start-0 border-end-0 border-top border-bottom position-sticky  bg-dark" style="z-index: 1;">
            <ul class="list-unstyled row mb-lg-0 mb-2 productNavControl">
                <li class=" col-lg col-4 text-center" >
                  <RouterLink class="text-light text-decoration-none text-nowrap p-1 w-100 d-block opacity-50" :to="`/products?category=`">全部</RouterLink>
                </li>
                <li class=" col-lg col-4 text-center" v-for="(item,ind) in categories" :key="ind">
                  <RouterLink class="text-light text-decoration-none text-nowrap p-1 w-100 d-block opacity-50" :to="`/products?category=${item}`" >{{item}}</RouterLink>
                </li>
            </ul>
            <!-- <Pagination :pages="pagination" @emit-pages="getProduct"/> -->
        </nav>
        <div class="container mt-md-5 mt-3 ">
            <ul class="row list-unstyled mb-0">
                <li class="col-lg-3" v-for="item in products" :key="item.id" data-aos="fade-right" >
                    <div class="card rounded-2 overflow-hidden border-0 mb-4 position-relative position-relative">
                        <div class="position-relative">
                            <RouterLink :to="`/product/${item.id}`" href="" class="imgHover">
                                <img :src="item.imageUrl" class="card-img-top rounded-0" alt="...">
                            </RouterLink>
                        </div>
                        <!-- 收藏最愛 -->
                        <!-- <a href="#" class="text-dark">
                            <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
                        </a> -->
                        <div class="card-body p-0 text-center">
                            <h5 class="mb-0 mt-3 text-muted ">{{item.title}}</h5>
                            <div class="d-flex  justify-content-center align-items-center my-2">
                              <p class="mb-0 text-danger fw-bold fs-5" v-if="item.origin_price === item.price">NT$ {{item.price}}</p>
                              <div v-else>
                                <del class="text-muted  me-3">NT$ {{item.origin_price}}</del>
                                <p class="mb-0 text-danger fw-bold fs-5 d-inline-block">NT$ {{item.price}}</p>
                              </div>
                            </div>
                            <button class="btn btn-outline-danger mb-3" @click="this.addToCart(item.id)">加入購物車</button>
                        </div>
                    </div>
                </li>
            </ul>
        <Pagination :pages="pagination" @emit-pages="getProduct"/>
        </div>
    </section>
  </div>
  <LoadingComponent v-model:active="isLoading"/>
</template>

<style>
  .imgHover img {
      height: 450px;
      object-fit: cover;
      object-position: top;
  }

  .imgHover::before {
      position: absolute;
      content: "more detail";
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #594637;
      opacity: 0;
      transition: all .4s;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      font-family: "Noto Serif TC", serif;
      letter-spacing: 4px;
      font-size: 1.25rem;
  }

  .imgHover:hover:before {
      background: rgb(27, 24, 23);
      opacity: .6;
  }
  #productNav li{
    transition: all .3s ;
    /* opacity: 0.5; */
  }
  #productNav li:hover{
    opacity: 1;
  }
  .linkActive{
    opacity: 1 !important;
  }
  @media (max-width:768px) {
    .productNavControl{
      width: 100%;
    }
    .imgHover img {
        height: 500px;
    }
    .nav-item {
        width: 33.3333%;
        display: block;
        text-align: center;
    }
  }
</style>

<script>
import { mapActions } from 'pinia'
import { useCartStore } from '@/stores/cartStore.js'
import { useToastMessageStore } from '../../stores/toastMessage.js'

import LoadingComponent from '../../components/LoadingComponent.vue'
import Pagination from '../../components/frontDesk/FrontPagePagination.vue'
import axios from 'axios'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  components: {
    LoadingComponent,
    Pagination
  },
  data () {
    return {
      products: [],
      categories: ['動作', '喜劇', '勵志', '愛情', '動畫', '驚悚'],
      // loadingd控制
      isLoading: false,
      // 分頁
      pagination: {},
      currentPage: 1
    }
  },
  watch: {
    '$route.query': {
      handler () {
        this.getProduct()
      },
      deep: true
    }
  },
  methods: {
    // 提取方法
    ...mapActions(useCartStore, ['addToCart']),
    ...mapActions(useToastMessageStore, ['pushMessage']),
    // 取得資料
    getProduct (page = 1) {
      this.currentPage = page
      const { category = '' } = this.$route.query
      const api = `${VITE_URL}api/${VITE_PATH}/products?page=${page}&category=${category}`
      this.isLoading = true
      axios.get(api)
        .then((res) => {
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.linkActive(category)
          window.scrollTo({ behavior: 'smooth', top: 0 })
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
    // 滾動片單分類固定
    headerNav () {
      const headerNav = document.querySelector('#headerNav')
      const productNav = document.querySelector('#productNav')
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 0) {
          productNav.style.top = `${headerNav.clientHeight}px`
        } else {
          productNav.style.top = '0px'
        }
      })
    },
    // 顯示當前頁面
    linkActive (category) {
      const linkAll = document.querySelectorAll('#productNav .text-light')
      linkAll.forEach(item => {
        item.classList.remove('linkActive')
        if (item.innerText === category) {
          item.classList.add('linkActive')
        } else if (category === '') {
          linkAll[0].classList.add('linkActive')
        }
      })
    }
  },
  mounted () {
    this.getProduct()
    this.headerNav()
  }
}
</script>
