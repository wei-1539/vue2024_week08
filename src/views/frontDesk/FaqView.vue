<template>
  <section class="">
    <div class="bg">
      <h2 class="fs-1 text-bg-letter text-light text-center position-relative top-50 translate-middle-y">常見問題</h2>
    </div>
        <div class="container">
          <div class="faqControl">
            <div class="accordion accordion-flush " id="accordionExample">
                <!-- QA1 -->
                <div class="accordion-item mb-5 bg-darkLight text-light border-0">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed bg-darkLight text-light fs-5" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            CINEMA是什麼？
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse fs-6" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            CINEMA是串流服務，透過數千種可連結網路的行動裝置，提供各種獲獎的電影。<br><br>只要支付一筆經濟實惠的月費，就能隨時隨地，盡情觀賞，毫無廣告。時時都有新的內容供您探索，而且每星期都會加入新的電影！
                        </div>
                    </div>
                </div>
                <!-- QA2 -->
                <div class="accordion-item mb-5 bg-darkLight text-light border-0">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed bg-darkLight text-light fs-5" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            可以在 CINEMA 觀賞什麼內容？
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse fs-6" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            CINEMA 擁有豐富的影片內容庫，包括長片、紀錄片、動作片、動畫變、獲獎肯定的原創作品與更多內容。隨時隨地，盡情觀賞。
                        </div>
                    </div>
                </div>
                <!-- QA3 -->
                <div class="accordion-item mb-5 bg-darkLight text-light border-0">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed bg-darkLight text-light fs-5" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            如何取消訂閱？
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse fs-6" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            CINEMA 彈性十足。沒有難懂的合約，也不須綁約。點個兩下，就能線上輕鬆取消您的帳戶。無取消費用，可隨時開始或停用您的帳戶。
                        </div>
                    </div>
                </div>
                <!-- QA4 -->
                <div class="accordion-item mb-5 bg-darkLight text-light border-0">
                    <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed bg-darkLight text-light fs-5" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            我可以在哪裡觀看 CINEMA ?
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse fs-6" aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            您可透過行動裝置、網路瀏覽器、遊戲主機、機上盒和智慧型電視使用 CINEMA 應用程式。
                        </div>
                    </div>
                </div>
                <!-- QA5 -->
                <div class="accordion-item mb-5 bg-darkLight text-light border-0">
                    <h2 class="accordion-header" id="headingFive">
                        <button class="accordion-button collapsed bg-darkLight text-light fs-5" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            CINEMA 適合兒童觀看嗎?
                        </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse fs-6" aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            CINEMA 兒童體驗包含在您的會員資格裡，可讓家長控制觀賞內容，確保孩子能在自己的小天地盡情享受老少咸宜的節目與電影。
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </section>
</template>

<script>
export default {
  mounted () {
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }
}
</script>

<style>
  .faqControl{
    padding: 0 0 10% 0;
  }
  .bg {
  background-image: url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 35vh;
  position: relative;
  }
  .bg::before{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0%;
    top: 0%;
    background: linear-gradient(to bottom,  rgb(20, 20, 20 ,0.4) 0%,rgba(20,20,20,1) 100%);
    backdrop-filter: blur(1.5px);
  }
</style>
