<template>
  <div class="wrapper">
    <StaticPart />
    <Nearby />
  </div>
  <Docker />
</template>

<script>
import Docker from './Docker'
import StaticPart from './StaticPart'
import Nearby from './Nearby'
export default {
  name: 'HOME',
  components: {
    Docker,
    StaticPart,
    Nearby
  }
}
</script>

<style lang="scss" scoped>
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
