<template>
  <VueLoading  :z-index="1060">
    <!-- <div class="loadingio-spinner-double-ring-0ut21surusy">
      <div class="ldio-2uwwzn0tw8t">
        <div></div>
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div> -->
      <!-- <img class="position-absolute cameraInside" src="https://i.ibb.co/Gs6GjBp/image.png" alt="">
      <img class="position-absolute cameraCircle1 rotate" src="https://i.ibb.co/G5gZm81/2.png" alt="">
      <img class="position-absolute cameraCircle2 rotate" src="https://i.ibb.co/G5gZm81/2.png" alt="">
      <img class="position-absolute cameraBody" src="https://i.ibb.co/jRQFSSN/2.png" alt="">
      <img class="position-absolute cameraLight" src="https://i.ibb.co/3h9nFX9/1.png" alt=""> -->

      <img class="position-absolute camera2Inside" src="https://i.ibb.co/h9ysGJn/image.png" alt="">
      <img class="position-absolute camera2Circle1 rotate" src="https://i.ibb.co/0qkNd0m/left.png" alt="">
      <img class="position-absolute camera2Circle2 rotate" src="https://i.ibb.co/6D4VM21/right.png" alt="">
      <img class="position-absolute camera2Body" src="https://i.ibb.co/ZKBqzTV/3.png" alt="">
      <img class="position-absolute camera2Light" src="https://i.ibb.co/3h9nFX9/1.png" alt="">
      <img class="position-absolute camera2Text" src="https://i.ibb.co/rs4cGJh/text.png" alt="">
  </VueLoading>
</template>

<script>
export default {
  props: ['loadingStatus'],
  data () {
    return {
      isLoading: false
    }
  },
  watch: {
    loadingStatus () {
      this.isLoading = this.loadingStatus
      console.log(this.loadingStatus)
    }
  }
}
</script>

<style>
  .vl-overlay .vl-background{
    /* background-color: #474747; */
    background-color: #141414;
    opacity: 1;
  }
  .vl-icon{
    max-width: 400px;
    max-height: 400px;
    width: 100%;
    height: 100%;
  }
  .cameraInside{
    width: 23%;
    left: 47%;
    top: 27%;
    transform: translate(-50%, -50%)
  }
  .cameraCircle1{
     width: 16%;
    left: 32%;
    top: 19%;
  }
  .cameraCircle2{
    width: 16%;
    left: 49%;
    top: 19%;
  }
  .cameraBody{
    width: 30%;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
  }
  .cameraLight{
    width: 43%;
    left: 84%;
    top: 44%;
    transform: translate(-50%, -50%);
    animation: light 2s infinite ease-in-out;
  }
  /* 2 */
  .camera2Inside{
    width: 40%;
    left: 28%;
    top: 29.5%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  .camera2Circle1{
    width: 15%;
    left: 9.6%;
    top: 24.6%;
    z-index: 1;
    z-index: 1;
  }
  .camera2Circle2{
    width: 18.5%;
    left: 28%;
    top: 19.5%;
    z-index: 1;
  }
  .camera2Body{
    width: 35%;
    left: 30%;
    top: 65%;
    transform: translate(-50%, -50%);
  }
  .camera2Light{
    width: 50%;
    left: 71%;
    top: 48%;
    transform: translate(-50%, -50%);
    animation: light 2s infinite ease-in-out;
  }
  .camera2Text{
    width: 30%;
    left: 71%;
    top: 45%;
    opacity: 0.8;
    transform: translate(-50%, -50%);
    animation: text 2s infinite ease-in-out;
  }
  @media (max-width:768px) {
    .camera2Inside{
      top: 30.5%;
    }
    .camera2Circle1{
      top: 25.6%;
    }
    .camera2Circle2{
      top: 21%;
    }
    .vl-icon{
    max-width: 250px;
    max-height: 250px;
    }
  }
  .rotate{
    animation: rotate 2s infinite linear;
    transform-origin: center center;
  }
  @keyframes rotate {
    0%{
      rotate: 0deg;
    }
    100%{
      rotate: -360deg;
    }
  }
  @keyframes light {
    0%{
      opacity: 1;
    }
    30%{
      opacity: 0.4;
    }
    75%{
      opacity: 1;
    }
    100%{
      opacity: 1;
    }
  }
  @keyframes text {
    0%{
      opacity: 0.8;
      filter: blur(0.25px) drop-shadow(2.5px 0px 0px rgb(0,0,0));
    }
    30%{
      opacity: 0;
      filter: blur(2px) drop-shadow(0px 0px 0px rgb(0,0,0));
    }
    75%{
      opacity: 0.8;
      filter: blur(0.25px) drop-shadow(2.5px 0px 0px rgb(0,0,0));
    }
    100%{
      opacity: 0.8;
      filter: blur(0.25px) drop-shadow(2.5px 0px 0px rgb(0,0,0));
    }
  }
</style>
