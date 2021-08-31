<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link to="/shop" v-for="item of nearbyList" :key="item._id">
      <ShopInfo :shop="item" />
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'
export default {
  name: 'Nearby',
  components: {
    ShopInfo
  },
  setup() {
    const nearbyList = ref([])
    const getNearbyList = async () => {
      const result = await get('/api/shop/hot-list')
      if (result.errno === 0) {
        nearbyList.value = result.data
      }
    }
    getNearbyList()

    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  a {
    text-decoration: none;
  }
}
</style>
