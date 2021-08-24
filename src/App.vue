<template>
  <div class="wrapper">
    <StaticPart />
    <Nearby />
  </div>
  <Docker />
</template>
<script>
import Docker from './views/home/Docker'
import StaticPart from './views/home/StaticPart.vue'
import Nearby from './views/home/Nearby.vue'
export default {
  name: 'APP',
  components: {
    Docker,
    StaticPart,
    Nearby
  }
}
</script>

<style lang="scss">
.wrapper {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
  overflow-y: auto;
}
</style>
