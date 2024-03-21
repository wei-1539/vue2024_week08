// 建立 store 需使用到 Pinia 中 defineStore() 方法
import { defineStore } from 'pinia'
import { useToastMessageStore } from './toastMessage.js'
import axios from 'axios'
const { VITE_URL, VITE_PATH } = import.meta.env
// 第一個參數為字串，是這個 store 的 id
export const useCartStore = defineStore('cartStore', {
  // 存放資料
  state: () => {
    return {
      // 購物車資料
      carts: [],
      final_total: 0,
      total: 0,
      // loadingd控制
      isLoading: false,
      couponSuccess: false,
      toastStore: useToastMessageStore()
    }
  },
  // 寫方法
  actions: {
    // 取得購物車資料
    getCart () {
      const api = `${VITE_URL}api/${VITE_PATH}/cart`
      this.isLoading = true
      axios.get(api)
        .then((res) => {
          this.carts = res.data.data.carts
          this.final_total = res.data.data.final_total
          this.total = res.data.data.total
        })
        .catch((err) => {
          this.toastStore.pushMessage({
            style: 'danger',
            title: '無法取得購物車資料',
            content: err.response.data.message
          })
        })
        .finally(() => {
          setTimeout(() => {
            this.isLoading = false
          }, 500)
        })
    },
    // 加入購物車
    addToCart (id, qty = 1) {
      const order = {
        product_id: id,
        qty
      }
      const api = `${VITE_URL}api/${VITE_PATH}/cart`
      this.isLoading = true
      axios.post(api, { data: order })
        .then((res) => {
          this.getCart()
          this.toastStore.pushMessage({
            style: 'success',
            title: '已加入購物車',
            content: res.data.message
          })
        })
        .catch((err) => {
          this.toastStore.pushMessage({
            style: 'danger',
            title: '無法加入購物車',
            content: err.response.data.message
          })
        })
        .finally(() => {
          setTimeout(() => {
            this.isLoading = false
          }, 500)
        })
    },
    // 修改購物車內容
    changeCartQty (itemId, qty = 1) {
      const order = {
        product_id: itemId,
        qty
      }
      // item.id 是購物車的id選項，判斷使哪隻在修改 跟『product_id』是不一樣的
      const api = `${VITE_URL}api/${VITE_PATH}/cart/${itemId}`
      axios.put(api, { data: order })
        .then((res) => {
          this.getCart()
        })
        .catch((err) => {
          this.toastStore.pushMessage({
            style: 'danger',
            title: '無法調整數量',
            content: err.response.data.message
          })
        })
    },
    // 刪除單一
    removeCartItem (id) {
      const api = `${VITE_URL}api/${VITE_PATH}/cart/${id}`
      axios.delete(api)
        .then(res => {
          this.getCart()
          this.toastStore.pushMessage({
            style: 'success',
            title: '已刪除',
            content: res.data.message
          })
        })
        .catch(err => {
          this.toastStore.pushMessage({
            style: 'danger',
            title: '無法刪除該產品',
            content: err.response.data.message
          })
        })
    },
    // 刪除全部
    removeCartAll () {
      const api = `${VITE_URL}api/${VITE_PATH}/carts`
      axios.delete(api)
        .then(res => {
          this.getCart()
          this.toastStore.pushMessage({
            style: 'success',
            title: '已刪除全部電影',
            content: res.data.message
          })
        })
        .catch(err => {
          this.toastStore.pushMessage({
            style: 'danger',
            title: '無法全部電影',
            content: err.response.data.message
          })
        })
    },
    useCoupon (couponCode, total) {
      if (total < 500) {
        this.toastStore.pushMessage({
          style: 'danger',
          title: '無法使用優惠卷',
          content: '未達500元'
        })
      } else {
        const coupon = {
          code: couponCode
        }
        // /v2/api/{api_path}/coupon
        const api = `${VITE_URL}api/${VITE_PATH}/coupon`
        axios.post(api, { data: coupon })
          .then(res => {
            this.getCart()
            this.couponSuccess = res.data.success
            this.toastStore.pushMessage({
              style: 'success',
              title: '已使用優惠卷',
              content: res.data.message
            })
          })
          .catch(err => {
            this.toastStore.pushMessage({
              style: 'danger',
              title: '無法使用優惠卷',
              content: err.response.data.message
            })
          })
      }
    }
  }
})
