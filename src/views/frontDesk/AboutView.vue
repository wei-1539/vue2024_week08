<template>
  <section>
        <div class="bg">
            <h2 class="text-bg-letter fs-1 text-light mb-5 pb-2 text-center border-3 border-bottom border-danger d-inline-block position-relative top-50 start-50 translate-middle">關於我們</h2>
        </div>
        <div class="container pt-lg-5pt-0 d-flex flex-column align-items-center">
          <div class="aboutControl">
            <div class="row align-items-center justify-content-lg-around">
                <div class="col-lg-6 col-12 mb-5 mb-lg-0">
                    <img src="https://images.unsplash.com/photo-1600353771864-06224b16e1a3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="關於我們">
                </div>
                <div class="col-lg-5 col-12">
                    <h4 class="lh-base mb-5 text-light" style="text-align: justify;">CINEMA
                        致力於為全球用戶提供最佳的娛樂體驗。我們擁有豐富的內容庫，包括獨家原創影視作品、最新院線大片和經典電影。我們的團隊致力於打造出色的用戶界面和優質的服務，讓您無論身在何處，都能輕鬆享受您喜愛的節目和電影。
                    </h4>
                    <RouterLink to='/products' class="btn btn-outline-danger ">SHOP NOW</RouterLink>
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

<style scoped>
  .aboutControl{
    padding: 0 0 10% 0;
  }
  .bg {
  background-image: url('https://images.unsplash.com/photo-1579256308261-8e455c47a0d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG1vdmllfGVufDB8MHwwfHx8MA%3D%3D');
  background-position: top center;
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
