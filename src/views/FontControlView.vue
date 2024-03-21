<template>
  <HeaderNav/>
  <RouterView class="bg-dark"></RouterView>
  <FooterNav/>
  <GoToTop/>
  <ToastMessages/>
</template>

<script>
import ToastMessages from '../components/ToastMessage.vue'
import FooterNav from '../components/frontDesk/FooterComponent.vue'
import HeaderNav from '../components/frontDesk/HeaderNav.vue'
import GoToTop from '../components/frontDesk/GoToTop.vue'

export default {
  components: {
    FooterNav,
    HeaderNav,
    GoToTop,
    ToastMessages
  },
  data () {
    return {
      token: ''
    }
  },
  methods: {
    check () {
      // 取出token
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexSchool\s*=\s*([^;]*).*$)|^.*$/, '$1')
    }
  },
  created () {
    this.check()
  }
}
</script>
