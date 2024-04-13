<template>
   <!-- cart Modal S -->
    <!-- Modal -->
    <div class="modal right fade" ref="modal"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" >
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content bg-dark text-light">
                <div class="modal-header">
                    <h4 class="modal-title border-3 border-bottom border-danger" id="exampleModalLabel">購物清單</h4>
                    <div class="d-flex">
                      <div class="btn btn-outline-light  me-lg-2 me-1" @click="openRemoveAllModal" :class="{'disabled': carts.length === 0}">清除全部</div>
                      <div class="btn btn-outline-light " data-bs-dismiss="modal" aria-label="Close">
                        關閉
                      </div>
                    </div>
                </div>
                <div class="modal-body pt-0">
                    <div v-if="carts.length === 0" class="position-absolute w-100 top-50 start-50 translate-middle d-flex flex-column justify-content-center align-items-center">
                        <p class="fs-4 py-2" >目前沒有訂單唷！！</p>
                        <RouterLink to="/products" @click="hideModal()" class="btn btn-outline-light f-5 w-50">前往電影選單</RouterLink>
                    </div>
                    <ul class="list-unstyled m-0" v-else>
                        <li class="row py-2 border-bottom" v-for="item in carts" :key="item.id">
                            <img style="width: 80px;" class="col-2"  :src="item.product.imageUrl" alt="">
                            <div class="col d-flex flex-column justify-content-between w-100">
                                <div class="d-flex justify-content-between">
                                    <p class="m-0">{{item.product.title}}</p>
                                    <i class="bi bi-x-circle fs-5" style="cursor:pointer" @click="openRemoveModal(item.id)"></i>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex">
                                        <p class="m-0">NT$ {{item.total}}</p>
                                        <span class="ms-2"> / {{item.product.unit}}</span>
                                    </div>
                                    <!-- 數量 -->
                                    <div class="d-flex align-items-center">
                                        <!-- + -->
                                        <button type="button" class="btn btn-outline-light border-0" :disabled="item.qty === 1" @click="item.qty--;changeCartQty(item.id,item.qty)">
                                            <i class="bi bi-dash "></i>
                                        </button>
                                        <!-- num -->
                                        <input style="width: 32px; " class=" text-center border-0 bg-dark text-light" type="text" readonly value="1" min="1" v-model="item.qty">
                                        <!-- - -->
                                        <button type="button" class="btn btn-outline-light border-0" @click="item.qty++;changeCartQty(item.id,item.qty)">
                                            <i class="bi bi-plus "></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="modal-footer ">
                    <div class="d-flex w-100 justify-content-between align-items-center">
                        <div class="d-flex flex-column ">
                            <p class="m-0">總金額</p>
                            <p class="m-0">NT$ {{total}}</p>
                        </div>
                        <RouterLink to="/cart" class="btn btn-outline-light" @click="hideModal()" :class="{'disabled': carts.length === 0}">前往購物車</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- cart Modal E -->
    <LoadingComponent v-model:active="isLoading" id="cartModal"/>
    <DelAllModal  @remove-data="closeRemoveAllModal" ref="delAllModal"/>
    <DelModal :out-item="tempCart" @remove-data="closeRemoveModal(this.productID)" ref="delModal"/>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useCartStore } from '@/stores/cartStore.js'
import LoadingComponent from '../../components/LoadingComponent.vue'
// 載入Modal的方法
import modalMixin from '../../mixins/modalMixin.js'
import DelAllModal from './DelAllModal.vue'
import DelModal from './DelModal.vue'
export default {
  components: {
    LoadingComponent,
    DelAllModal,
    DelModal
  },
  mixins: [modalMixin],
  data () {
    return {
      tempCart: {},
      productID: ''
    }
  },
  methods: {
    // 提取方法
    ...mapActions(useCartStore, ['getCart', 'removeCartAll', 'removeCartItem', 'changeCartQty']),
    openRemoveAllModal () {
      this.$refs.delAllModal.openModal()
    },
    closeRemoveAllModal () {
      this.removeCartAll()
      this.$refs.delAllModal.hideModal()
    },
    openRemoveModal (id) {
      this.productID = id
      const findArray = this.carts.find(item => item.id === id)
      this.tempCart = findArray.product
      console.log(this.tempCart)
      this.$refs.delModal.openModal()
    },
    closeRemoveModal (id) {
      this.removeCartItem(id)
      this.$refs.delModal.hideModal()
    }

  },
  computed: {
    // 提取資料
    ...mapState(useCartStore, ['carts', 'total', 'isLoading'])
  }
}
</script>

<style>
#cartModal.vl-overlay .vl-background{
    /* background-color: #474747; */
    background-color: #141414;
    opacity: 0.8;
  }
/* cart modal */
.modal.left .modal-content,
.modal.right .modal-content {
    height: 100%;
    overflow-y: auto
}

.modal.left .modal-body,
.modal.right .modal-body {
    padding: 15px 15px 80px
}

.modal.right.fade .modal-dialog {
    /* max-width: 700px; */
    height: 100vh;
    margin: 0 0 0 auto;
    transform: translateX(100%);
    -webkit-transition: opacity .3s linear, right .3s ease-out;
    -moz-transition: opacity .3s linear, right .3s ease-out;
    -o-transition: opacity .3s linear, right .3s ease-out;
    transition: opacity .3s linear,  transform.3s ease-out
}

.modal.right.fade.show .modal-dialog {
    transform: translateX(0%);
}

.modal-content {
    border: none
}
</style>
