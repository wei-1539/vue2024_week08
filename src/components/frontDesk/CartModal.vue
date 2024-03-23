<template>
   <!-- cart Modal S -->
    <!-- Modal -->
    <div class="modal right fade" ref="modal"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" >
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content bg-dark text-light">
                <div class="modal-header">
                    <h4 class="modal-title border-3 border-bottom border-danger" id="exampleModalLabel">購物清單預覽</h4>
                    <div class="d-flex">
                      <div class="btn btn-outline-light  me-lg-2 me-1" @click="removeCartAll">清除全部</div>
                      <div class="btn btn-outline-light " data-bs-dismiss="modal" aria-label="Close">
                        <!-- <i class="bi bi-x-circle"></i> -->
                        關閉
                      </div>
                    </div>
                    <!-- <button type="button" class="btn-close text-light" data-bs-dismiss="modal" aria-label="Close"></button> -->
                </div>
                <div class="modal-body pt-0">
                  <p class="fs-5 py-2" v-if="carts.length === 0">目前沒有訂單唷！！</p>
                    <ul class="list-unstyled m-0" v-else>
                        <li class="row py-2 border-bottom" v-for="item in carts" :key="item.id">
                            <img style="width: 80px;" class="col-2"  :src="item.product.imageUrl" alt="">
                            <div class="col d-flex flex-column justify-content-between w-100">
                                <div class="d-flex justify-content-between">
                                    <p class="m-0">{{item.product.title}}</p>
                                    <i class="bi bi-x-circle fs-5" style="cursor:pointer" @click="removeCartItem(item.id)"></i>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <p class="m-0">NT$ {{item.total}}</p>

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
                                        <span> / {{item.product.unit}}</span>
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
                        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                        <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                        <RouterLink to="/cart" class="btn btn-outline-light" @click="hideModal()">前往購物車</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- cart Modal E -->
    <LoadingComponent v-model:active="isLoading" id="cartModal"/>
</template>

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

<script>
import { mapActions, mapState } from 'pinia'
import { useCartStore } from '@/stores/cartStore.js'
import LoadingComponent from '../../components/LoadingComponent.vue'
// 載入Modal的方法
import modalMixin from '../../mixins/modalMixin.js'

export default {
  components: {
    LoadingComponent
  },
  mixins: [modalMixin],
  data () {
    return {
      tempCart: {}
    }
  },
  methods: {
    // 提取方法
    ...mapActions(useCartStore, ['getCart', 'removeCartAll', 'removeCartItem', 'changeCartQty'])
  },
  computed: {
    // 提取資料
    ...mapState(useCartStore, ['carts', 'total', 'isLoading'])
  }
}
</script>
