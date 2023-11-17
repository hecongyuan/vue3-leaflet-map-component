<template>
  <div ref="slotRef">
    <div
      class="absolute text-white text-right w-full cursor-pointer p-2 z-999"
      @click="handleClose"
    >
      X
    </div>
    <slot :data="props.target" />
  </div>
</template>
<script setup name="ls-map-popup" lang="ts">
import { ref, inject, onMounted, onActivated, watch } from 'vue'
import L from 'leaflet'
import emitter from '../../utils/mitt'
let lsMapContainer: unknown = null
const slotRef = ref(null) //插槽内的真实dom
const emits = defineEmits(['close', 'click'])
interface Props {
  position: [number, number] //纬度，经度
  target?: Record<string, any>
  options?: Record<string, any>
  isShow?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  options: {
    minWidth: '30vw',
    closeButton: false,
    closeOnClick: false,
    className: '!m-0',
  }, //默认没有关闭按钮，默认点击地图不关闭
  isShow: true,
  position: [],
  target: {}
})

const index = ref(1)
onActivated(() => {
  lsMapContainer = inject('lsMapContainer')
  while (lsMapContainer && index.value && props.isShow) {
    console.log('popup inject onMounted', lsMapContainer)
    if (props.position[0] && props.position[1]) {
      initPopup()
    }
    index.value = 0
    break
  }
})
onMounted(() => {
  lsMapContainer = inject('lsMapContainer')
  //console.log('slotRef', lsMapContainer, slotRef.value)
  while (lsMapContainer && index.value && props.isShow) {
    //console.log('marker inject onMounted', lsMapContainer)
    if (props.position[0] && props.position[1]) {
      initPopup()
    }
    index.value = 0
    break
  }
})

let popup = ref(null)
const initPopup = () => {
  popup.value = L.popup(props.options)
    .setLatLng([props.position[0], props.position[1]]) //弹窗显示的坐标位置
    .setContent(slotRef.value) //挂载弹窗节点元素
    .openOn(lsMapContainer) //打开弹窗
  lsMapContainer.setView([props.position[0], props.position[1]]) //地图视野中心重新定位
}

const handleClose = () => {
  //console.log('关闭事件')
  popup.value.close()
  emits['click']
  emits['close']
  emitter.emit('close')
}

watch(props, newValue => {
  //console.log('issssssssssss', newValue)
  initPopup()
})

defineExpose({
  popup
})
</script>
