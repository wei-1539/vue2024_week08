<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container-fluid">
      <div class="navbar-brand">CINEMA</div>
      <button
        class="navbar-toggler"
        type="button"
        @click="bsToggle"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav"  ref="navbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/admin/product" class="nav-link" @click="bsToggle" >產品</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/order" class="nav-link" @click="bsToggle" >訂單</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/coupons" class="nav-link" @click="bsToggle" >優惠卷</RouterLink>
          </li>
          <li class="nav-item">
            <a @click="logout" class="nav-link " style="cursor:pointer" >登出</a>
          </li>
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" @click="bsToggle" >回首頁</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <LoadingComponent v-model:active="isLoading"/>
</template>

<script>
import collapseMixin from '../../mixins/collapseMixin.js'
import { mapActions } from 'pinia'
import { useToastMessageStore } from '../../stores/toastMessage.js'
import LoadingComponent from '../../components/LoadingComponent.vue'
import axios from 'axios'
const { VITE_URL } = import.meta.env

export default {
  mixins: [collapseMixin],
  components: {
    LoadingComponent
  },

  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    ...mapActions(useToastMessageStore, ['pushMessage']),
    logout () {
      this.isLoading = true
      const url = `${VITE_URL}/logout`
      axios.post(url)
        .then((res) => {
          this.isLoading = false
          this.pushMessage({
            style: 'success',
            title: '登出成功',
            content: res.data.message
          })
          document.cookie = 'hexSchool=; expires=; path=/'
          this.$router.push('/login')
        })
        .catch((err) => {
          this.pushMessage({
            style: 'danger',
            title: '登出失敗',
            content: err.response.data.message
          })
        })
    }
  }
}
</script>
