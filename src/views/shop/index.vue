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
  </div>
  <div class="shop_content">
    <ShopInfo :shop="item" :noBottom="true" />
  </div>
  <div class="content"><Content /></div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
// eslint-disable-next-line no-unused-vars
import { ref, reactive, toRefs } from 'vue'
// eslint-disable-next-line no-unused-vars
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'
import Content from './Content.vue'
// 路由后退
const useRouterBackEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}

// 获取商品详情
const useShopInfoEffect = () => {
  const router = useRoute()
  const data = reactive({ item: {} })

  const getItemData = async () => {
    const result = await get(`/api/shop/${router.params.id}`)
    if (result?.errno === 0) {
      data.item = result.data
    }
  }

  const { item } = toRefs(data)
  return { item, getItemData }
}

export default {
  name: 'Shop',
  components: {
    ShopInfo,
    Content
  },
  setup() {
    const { handleBackClick } = useRouterBackEffect()
    const { item, getItemData } = useShopInfoEffect()
    getItemData()
    return {
      handleBackClick,
      item
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  padding: 0 0.18rem;
  .search {
    box-sizing: border-box;
    margin: 0.14rem 0rem 0.04rem 0rem;

    height: 0.32rem;
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
      background: $search-color;
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
}
.shop_content {
  padding: 0 0.18rem;
}
</style>
