<template>
    <!-- go to Top -->
    <div class=" position-fixed toTop d-flex flex-column " style="z-index: 10;">
        <div class="fs-5 btn btn-outline-light border-0 mb-lg-0 mb-3" @click="toTop">
            <i class="bi bi-caret-up-fill"></i>
        </div>
        <!-- <a href="#" class="btn btn-outline-light border-0 border-none position-relative d-block d-lg-none "  data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="bi bi-film fs-3 "></i>
            <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {{ this.carts?.length}}
                <span class="visually-hidden">unread messages</span>
            </span>
        </a> -->
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useCartStore } from '@/stores/cartStore.js'
export default {
  methods: {
    ...mapActions(useCartStore, ['getCart']),
    toTop () {
      window.scrollTo({ behavior: 'smooth', top: 0 })
    }
  },
  computed: {
    ...mapState(useCartStore, ['carts'])
  },
  mounted () {
    this.getCart()
    const toTopBtn = document.querySelector('.toTop')
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 50) {
        toTopBtn.classList.add('toTop--show')
      } else {
        toTopBtn.classList.remove('toTop--show')
      }
    })
  }
}
</script>

<style>
.toTop{
  bottom: 2.5%;
  right: 2.5%;
  opacity: 0;
  visibility: hidden;
  transition: all .3s;
}
.toTop--show{
  opacity: 1;
  visibility: visible;
}
@media (max-width:992px) {
  /* .toTop{
    bottom: 5%;
    right: 5%;
  } */
}
</style>
