<template>
  <!-- 底部docker -->
  <div class="docker">
    <div
      :class="{ docker__item: true, 'docker__item--active': index === 0 }"
      v-for="(item, index) of dockerList"
      :key="item.iconFont"
    >
      <div class="iconfont" v-html="item.iconFont" />
      <div class="docker__title">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup() {
    const dockerList = [
      {
        iconFont: '&#xe637;',
        name: '首页'
      },
      {
        iconFont: '&#xe60a;',
        name: '购物车'
      },
      {
        iconFont: '&#xe619;',
        name: '订单'
      },
      {
        iconFont: '&#xe610;',
        name: '我的'
      }
    ]
    return {
      dockerList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../..//style/viriables.scss';
//底部docker样式
.docker {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  display: flex;
  border-top: 0.01rem solid $content-bgcolor;
  padding: 0 0.18rem;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      font-size: 0.18rem;
      margin: 0.07rem 0 0.02rem 0;
    }
    &--active {
      color: #1fa4fc;
    }
  }
  &__title {
    // 我如何让一个字体大小为10px？浏览器最小是12px 所以要用缩放
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
