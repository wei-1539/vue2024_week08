<template>
  <!-- 導覽列 -->
    <nav id="headerNav" class="navbar navbar-expand-lg navbar-dark bg-dark text-light p-3 position-sticky top-0 w-100 "
        style="z-index: 10; box-shadow: 0px 0px 15px rgb(255, 255, 255,0.4);">
        <div class="container-fluid px-0 px-lg-3">
            <RouterLink class="navbar-brand" to="/" >
                <img src="https://i.ibb.co/yhvPMy0/P8dLxqq.webp" alt="">
            </RouterLink>
            <div class="d-flex">
              <button class="navbar-toggler border-0" type="button" @click="bsToggle">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <a href="#" class="btn btn-outline-light border-0 border-none position-relative d-block d-lg-none "  @click="openCartModal">
                  <i class="bi bi-film fs-3 "></i>
                  <span
                      class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {{ this.carts?.length}}
                      <span class="visually-hidden">unread messages</span>
                  </span>
              </a>
            </div>
            <div class="collapse navbar-collapse"  ref="navbar">
              <!-- SP -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-block d-md-none">
                    <li class="nav-item ">
                        <RouterLink class="nav-link" aria-current="page" to="/about" @click="bsToggle">關於我們</RouterLink>
                    </li>
                    <li class="nav-item ">
                        <RouterLink class="nav-link" to="/products" @click="bsToggle">電影種類</RouterLink>
                    </li>
                    <li class="nav-item ">
                        <RouterLink class="nav-link" to="/faq" @click="bsToggle">常見問題</RouterLink>
                    </li>
                    <!-- <li class="nav-item ">
                        <RouterLink class="nav-link" v-if="token === ''"  to="/login" @click="bsToggle">登入後台</RouterLink>
                        <RouterLink class="nav-link" v-else to="/admin/product" @click="bsToggle">進入後台</RouterLink>
                    </li> -->
                </ul>
                <!-- PC -->
                <div class="d-none d-md-flex w-100">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item my-3 position-relative d-block d-lg-none">
                          <input type="text" name="" id="" class="form-control py-1 px-3  m-lg-1 fs-7 rounded-pill"
                              placeholder="請輸入標題或分類">
                          <a href="#" class="nav-link position-absolute end-0 top-50 translate-middle-y searchIcon" >
                              <i class="bi bi-search text-dark fs-5"></i>
                          </a>
                      </li>
                      <li class="nav-item ">
                          <RouterLink class="nav-link" aria-current="page" to="/about">關於我們</RouterLink>
                      </li>
                      <li class="nav-item ">
                          <RouterLink class="nav-link" to="/products">電影種類</RouterLink>
                      </li>
                      <li class="nav-item ">
                          <RouterLink class="nav-link" to="/faq">常見問題</RouterLink>
                      </li>
                      <!-- <li class="nav-item ">
                          <RouterLink class="nav-link" v-if="token === ''"  to="/login">登入後台</RouterLink>
                          <RouterLink class="nav-link" v-else to="/admin/product">進入後台</RouterLink>
                      </li> -->
                  </ul>
                  <ul class="navbar-nav d-none d-lg-flex">
                      <li class="nav-item ">
                          <div class="btn btn-outline-light border-0 border-none position-relative p-0  px-2" @click="openCartModal" >
                              <i class="bi bi-film fs-3 "></i>
                              <span
                                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                  {{ this.carts?.length}}
                                  <span class="visually-hidden">unread messages</span>
                              </span>
                          </div>
                      </li>
                  </ul>
                </div>

            </div>
        </div>
    </nav>
    <!-- 導覽列 -->
    <CartModal ref="cartModal"/>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import { useCartStore } from '@/stores/cartStore.js'
import collapseMixin from '../../mixins/collapseMixin.js'
import CartModal from '../../components/frontDesk/CartModal.vue'

export default {
  mixins: [collapseMixin],
  components: {
    CartModal
  },
  data () {
    return {
      token: ''
    }
  },
  methods: {
    ...mapActions(useCartStore, ['getCart']),
    check () {
      // 取出token
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexSchool\s*=\s*([^;]*).*$)|^.*$/, '$1')
    },
    openCartModal () {
      this.$refs.cartModal.openModal()
    }
  },
  computed: {
    ...mapState(useCartStore, ['carts'])
  },
  created () {
    this.check()
    this.getCart()
  }
}
</script>

<style>
  .navbar-brand{
    width: 3%;
  }
  @media (max-width:768px) {
    .navbar-brand{
      width: 15%;
    }
    .searchIcon{
      right: 3.5% !important;
    }
  }
</style>
