<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="handleBackClick">&#xe606;</div>
      <div class="search__content">
        <div class="iconfont search__content__icon">
          &#xe61b;
        </div>
        <input
          type="text"
          class="search__content__input"
          placeholder="请输入商品名称"
        />
      </div>
    </div>
    <div class="shop">
      <ShopInfo v-for="item of shopList" :key="item._id" :shop="item" />
    </div>
  </div>
</template>

<script>
import ShopInfo from '../../components/ShopInfo'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { get } from '../../utils/request'
export default {
  name: 'Shop',
  components: {
    ShopInfo
  },
  setup() {
    const router = useRouter()
    const shopList = ref([])
    const getNearbyList = async () => {
      const result = await get('/api/shop/hot-list')
      if (result.errno === 0) {
        shopList.value = result.data
      }
    }
    const handleBackClick = () => {
      router.back()
    }
    getNearbyList()
    return {
      handleBackClick,
      shopList
    }
  }
}
</script>

<style lang="scss">
.wrapper {
  padding: 0 0.18rem;
  .search {
    box-sizing: border-box;
    margin: 0.2rem 0.16rem 0 0;

    display: flex;
    &__back {
      line-height: 0.32rem;
      height: 0.32rem;
      font-size: 0.2rem;
      width: 0.3rem;
      color: gray;
    }
    &__content {
      flex: 1;
      border-radius: 0.16rem;
      background: #f5f5f5;
      display: flex;
      height: 0.32rem;
      &__icon {
        font-size: 0.2rem;
        width: 0.44rem;
        line-height: 0.32rem;
        text-align: center;
        color: #b7b7b7;
      }
      &__input {
        border: none;
        outline: none;
        background: none;
        line-height: 0.32rem;
        width: 100%;
        padding-right: 0.24rem;
        display: block;
        color: #333;
        font-size: 0.14rem;
        &::placeholder {
          color: #333;
        }
      }
    }
  }
  .shop {
  }
}
</style>
