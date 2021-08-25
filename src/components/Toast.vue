<template>
  <div class="toast">{{ massage }}</div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  props: ['massage']
}
// 控制toast显示内容，以及显示关闭
export const useToastEffect = () => {
  const toastData = reactive({
    show: false,
    toastMessage: ''
  })
  const showToast = toastMessage => {
    toastData.show = true
    toastData.toastMessage = toastMessage
    setTimeout(() => {
      toastData.show = false
      toastData.toastMessage = ''
    }, 2000)
  }
  const { show, toastMessage } = toRefs(toastData)
  return { show, toastMessage, showToast }
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.35);
  border-radius: 0.05rem;
  color: #fff;
  padding: 0.1rem;
}
</style>
