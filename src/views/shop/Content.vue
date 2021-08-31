<template>
  <div class="content">
    <div class="category">
      <ul>
        <li
          v-for="item of categoryList"
          :key="item.id"
          :class="{
            category__item: true,
            'category__item--active': item.actived
          }"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="product">
      <div class="product__item">
        <img
          class="product__item__img"
          src="http://www.dell-lee.com/imgs/vue3/near.png"
        />
        <div class="product__item__detail">
          <h4 class="product__item__title">番茄250g/份</h4>
          <p class="product__item__sales">月售10件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>
            33.6
            <span class="product__item__origin">&yen;66.6</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'ShopContent',
  setup() {
    const categoryList = ref([
      {
        name: '全部商品',
        id: 0,
        actived: true
      },
      {
        name: '秒杀',
        id: 1,
        actived: false
      },
      {
        name: '新鲜水果',
        id: 2,
        actived: false
      },
      {
        name: '休闲食品',
        id: 3,
        actived: false
      },
      {
        name: '时令蔬菜',
        id: 4,
        actived: false
      },
      {
        name: '肉蛋家禽',
        id: 5,
        actived: false
      }
    ])
    return { categoryList }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
.content {
  position: absolute;
  top: 1.5rem;
  bottom: 0.5rem;
  left: 0;
  right: 0;
  display: flex;
  .category {
    overflow-y: scroll;
    width: 0.76rem;
    background: $search-color;
    height: 100%;
    li,
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    &__item {
      text-align: center;
      line-height: 0.4rem;
      font-size: 0.14rem;
      color: #333;
      &--active {
        background: #fff;
      }
    }
  }
  .product {
    overflow-y: scroll;
    flex: 1;
    &__item {
      display: flex;
      padding: 0.12rem 0;
      margin: 0 0.16rem;
      border-bottom: 0.01rem solid #f1f1f1;
      &__img {
        width: 0.68rem;
        height: 0.68rem;
        margin-right: 0.16rem;
      }
      &__title {
        margin: 0;
        line-height: 0.2rem;
        font-size: 0.14rem;
        color: #333;
      }
      &__sales {
        margin: 0.06rem 0;
        font-size: 0.12rem;
        color: #333;
      }
      &__price {
        margin: 0;
        line-height: 0.2rem;
        font-size: 0.14rem;
        color: #e93b3b;
      }
      &__yen {
        font-size: 0.12rem;
      }
      &__origin {
        margin-left: 0.06rem;
        line-height: 0.2rem;
        font-size: 0.12rem;
        color: #999;
        text-decoration: line-through;
      }
    }
  }
}
</style>
