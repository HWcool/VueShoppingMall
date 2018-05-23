<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import '@/css/iconfont.css'

export default {};
</script>

<style>
@import url('./css/reset.css');
@import './common/css/vant.css';
body{
  background: #eeeeee;
  overflow-x: hidden
}

.slide-fade{
  position: absolute;
  left:0;
  right: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .3s;
}

.slide-fade-leave-active {
  transition: all .3s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, 
.slide-fade-leave-to{
  transform: translate3d(100%, 0, 0)
}
</style>
