<template>
  <div class="wrapper">
    <img
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt="user_logo"
      class="wrapper__img"
    />
    <div class="wrapper__input">
      <input
        type="text"
        class="wrapper__input__content"
        v-model="username"
        placeholder="请输入手机号"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="text"
        class="wrapper__input__content"
        v-model="password"
        placeholder="请确认密码密码"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="text"
        class="wrapper__input__content"
        v-model="ensurement"
        placeholder="请输入密码"
      />
    </div>
    <div class="wrapper__register-button" @click="handleRegister">注册</div>
    <div class="wrapper__register-link" @click="handleToLogin">
      已有账号立即登录
    </div>
    <Toast :massage="toastMessage" v-if="show" />
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast.vue'

const useUserRegisterEffect = showToast => {
  const router = useRouter()
  const data = reactive({ username: '', password: '', ensurement: '' })
  const { username, password, ensurement } = toRefs(data)

  const handleRegister = async () => {
    try {
      const result = await post('/api/user/register', {
        username,
        password
      })
      if (result.errno === 0) {
        router.push({ name: 'Login' })
      } else {
        showToast('注册失败！请重试')
      }
    } catch (error) {
      showToast('请求失败！请重试')
    }
  }
  return {
    username,
    password,
    ensurement,
    handleRegister
  }
}
const useSwitchLogin = () => {
  const router = useRouter()
  const handleToLogin = () => {
    router.push({ name: 'Login' })
  }
  return { handleToLogin }
}
export default {
  name: 'Login',
  components: {
    Toast
  },
  setup() {
    const { show, toastMessage, showToast } = useToastEffect()
    const { handleToLogin } = useSwitchLogin()
    const {
      username,
      password,
      ensurement,
      handleRegister
    } = useUserRegisterEffect(showToast)

    return {
      handleRegister,
      handleToLogin,
      username,
      password,
      ensurement,
      show,
      toastMessage,
      showToast
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../..//style/viriables.scss';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    width: 0.66rem;
    height: 0.66rem;
    display: block;
    margin: 0 auto 0.4rem auto;
  }
  &__input {
    box-sizing: border-box;
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;
    border-radius: 0.06rem;
    padding: 0 0.16rem;
    font-size: 0.16rem;
    &__content {
      width: 100%;
      height: 0.48rem;
      border: none;
      outline: none;
      background: none;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__register-button {
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    color: #fff;
    font-size: 0.16rem;
    text-align: center;
    line-height: 0.48rem;
  }
  &__register-link {
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
    text-align: center;
  }
}
</style>
