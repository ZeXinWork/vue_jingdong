<template>
  <!-- 顶部地址 -->
  <div class="position">
    <span class="iconfont position__icon">&#xe61f;</span>
    <span>福建师范大学旗山校区榕院3</span>
    <span class="iconfont position__notice">&#xe811;</span>
  </div>
  <!-- 顶部搜索 -->
  <div class="search">
    <span class="iconfont">&#xe61e;</span>
    <span>山姆会员商店优惠商品</span>
  </div>
  <!-- 顶部banner -->
  <div class="banner">
    <img
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
      alt="banner"
      class="banner__image"
    />
  </div>
  <!-- 顶部Icon -->
  <div class="icons">
    <div class="icons__item" v-for="item of staticPartList" :key="item.id">
      <img class="icons__item__img" :src="item.url" />
      <p class="icons__item__desc">{{ item.name }}</p>
    </div>
  </div>
  <!-- 局部gap -->
  <div class="gap"></div>
</template>
<script>
export default {
  name: 'StaticPart',
  setup() {
    const staticPartList = [
      {
        url: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        name: '超市便利',
        id: 0
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
        name: '菜市场',
        id: 1
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/水果店.png',
        name: '水果店',
        id: 2
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/鲜花.png',
        name: '鲜花绿植',
        id: 3
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/医药健康.png',
        name: '医疗健康',
        id: 4
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/家居.png',
        name: '家居时尚',
        id: 5
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/蛋糕.png',
        name: '烘培蛋糕',
        id: 6
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/签到.png',
        name: '签到',
        id: 7
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/大牌免运.png',
        name: '大牌免运',
        id: 8
      },
      {
        url: 'http://www.dell-lee.com/imgs/vue3/红包.png',
        name: '红包套餐',
        id: 9
      }
    ]
    return {
      staticPartList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';

//顶部地址样式
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

//顶部搜索框样式
.search {
  width: 100%;
  box-sizing: border-box;
  border-radius: 0.16rem;
  font-size: 0.14rem;
  color: #b7b7b7;
  background: #f5f5f5;
  line-height: 0.32rem;
  margin-bottom: 0.12rem;
  .iconfont {
    padding: 0 0.08rem 0 0.16rem;
  }
}
//banner区域样式
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%; //图片高宽比
  &__image {
    width: 100%;
  }
}

//icons区域样式
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      width: 0.4rem;
      height: 0.4rem;
      display: block;
      margin: 0 auto;
    }
    &__desc {
      text-align: center;
      margin: 0.06rem 0 0.16rem 0;
      color: $content-fontcolor;
    }
  }
}

//gap区域样式
.gap {
  height: 0.1rem;
  background: $content-bgcolor;
  margin: 0 -0.18rem;
}
</style>
