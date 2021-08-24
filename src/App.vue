<template>
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position__icon">&#xe61f;</span>
      <span>福建师范大学旗山校区榕院3</span>
      <span class="iconfont position__notice">&#xe811;</span>
    </div>
  </div>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe637;</div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe60a;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe619;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe610;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>

<style lang="scss">
@import './style/viriables.scss';
@import './style/mixins.scss';

.wrapper {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
  .position {
    padding: 0.16rem 0.24rem 0.16rem 0;
    font-size: 0.16rem;
    line-height: 0.22rem;
    position: relative;
    color: $content-fontcolor;
    @include ellipse;
    &__icon {
      font-size: 0.2rem;
      margin-right: 0.085rem;
      position: relative;
      top: 0.01rem;
    }
    &__notice {
      font-size: 0.2rem;
      position: absolute;
      top: 0.17rem;
      right: 0;
    }
  }
}
.docker {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  display: flex;
  border-top: 0.01rem solid #f1f1f1;
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
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
