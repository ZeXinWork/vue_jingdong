<template>
  <div class="shop">
    <img :src="shop.imgUrl" class="shop__img" />
    <div :class="{ shop__content: true, 'shop__content--bottom': !noBottom }">
      <div class="shop__content__title">{{ shop.name }}</div>
      <div class="shop__content__tags">
        <span class="shop__content__tag">月售{{ shop.sales }}+</span>
        <span class="shop__content__tag">起送￥{{ shop.expressPrice }}</span>
        <span class="shop__content__tag">配送费{{ shop.expressLimit }}</span>
      </div>
      <p class="shop__content__highlight">
        {{ shop.slogan }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: {
    shop: {
      type: Object,
      require: true
    },
    noBottom: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
.shop {
  display: flex;
  padding-top: 0.12rem;
  &__img {
    margin-right: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
  }

  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    &--bottom {
      border-bottom: 1px solid $content-bgcolor;
    }
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__highlight {
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: #e93b3b;
    }
  }
}
</style>
