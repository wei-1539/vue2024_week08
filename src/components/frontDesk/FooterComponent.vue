<template>
  <footer class="bg-dark" style="box-shadow: 0px 0px 15px rgb(255, 255, 255,0.4);">
    <div class="container text-light text-opacity-75">
        <div class="row p-3 ">
            <div class="col d-none d-lg-block">
                <div class="row align-items-center">
                    <div class="col-2">
                        <img src="https://i.ibb.co/yhvPMy0/P8dLxqq.webp" alt="">
                    </div>
                    <div class="col-8 ">
                        <p class="m-0 text-letter" style="text-align: justify;">
                            無論您是喜歡精彩電影、迷人劇集還是令人驚歎的紀錄片，CINEMA都能滿足您的所有需求。我們提供最新、最熱門的影視內容，給您帶來極致的觀影體驗。
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-lg-5 col-12">
                <ul class="list-unstyled">
                    <li class="fs-4 mb-2">Find ME .</li>
                    <li class="mb-lg-2 mb-3 text-letter"><i class="bi bi-clock-history me-2 fs-5"></i>Monday – Friday <br
                            class="d-block d-lg-none"> 9 am-12 pm / 1 pm-6 pm</li>
                    <li class="mb-lg-2 mb-3 text-letter">
                      <a href="mailto: service@123456.com" class="text-reset text-decoration-none">
                        <i class="bi bi-envelope me-2 fs-5"></i>service@123456.com
                      </a>
                    </li>
                    <li class="mb-lg-2 mb-3 text-letter">
                      <a href="tel:0912345678" class="text-reset text-decoration-none">
                        <i class="bi bi-telephone-fill me-2 fs-5"></i>0912345678
                      </a>
                    </li>
                    <li class="mb-lg-2 mb-3 text-letter">可透過客服信箱 / 訂單留言 / 臉書私訊<br class="d-block d-lg-none"> 與 客服聯絡</li>
                </ul>
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-center border-top p-3">
            <ul class="list-unstyled d-flex align-items-center  m-0">
                <li class="me-3"><i class="bi bi-instagram fs-5"></i></li>
                <li class="me-3"><i class="bi bi-twitter fs-5"></i></li>
                <li class="me-3"><i class="bi bi-facebook fs-5"></i></li>
                <li >
                  <RouterLink v-if="token === ''"  to="/login" class="btn-outline-light btn border-0">登入後台</RouterLink>
                  <RouterLink v-else to="/admin/product" class="btn-outline-light btn border-0">進入後台</RouterLink>
                </li>
            </ul>
            <p class="m-0 text-center text-letter">個人作業使用，無商業行為</p>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
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
