<script setup name="ls-map-marker" lang="ts">
import { ref, inject, onMounted, onActivated, watch } from 'vue'
import L from 'leaflet'

let lsMapContainer: unknown = null
interface Props {
  target?: Record<string, any>
  iconType?: string
  ismessage?: boolean
  position: [number, number]
  options?: Record<string, any>
}

const iconImg = {
  camera: '/image/map/camera.png',
  cameraGray: '/image/map/cameraGray.png',
  cameraRed: '/image/map/cameraRed.png',
  cameraSnow: '/image/map/cameraSnow.png',
  currentCamera: '/image/map/currentCamera.gif'
}
const props = withDefaults(defineProps<Props>(), {
  iconType: 'camera',
  ismessage: false,
  position: [0, 0],
  options: {},
  target: {}
})
const emits = defineEmits(['mouseout', 'mouseover', 'click'])

const index = ref(1)
onActivated(() => {
  lsMapContainer = inject('lsMapContainer')
  //console.log('marker inject onActivated', lsMapContainer)
  //console.log('我的定位数据', props.position)
  while (lsMapContainer && index.value) {
    //console.log('marker inject onMounted',index.value, lsMapContainer)
    if (props.position[0] && props.position[1]) {
      initMarker()
    }
    index.value = 0
    break
  }
})

onMounted(() => {
  lsMapContainer = inject('lsMapContainer')
  //console.log('marker inject onMounted', lsMapContainer)
  //console.log('我的定位数据', props.position)
  while (lsMapContainer && index.value) {
    //console.log('marker inject onMounted',index.value, lsMapContainer)
    if (props.position[0] && props.position[1]) {
      initMarker()
    }
    index.value = 0
  }
})

let marker
const initMarker = () => {
  let icon = L.icon({
    iconUrl: iconImg[`${props.iconType}`],
    iconSize: props.iconType == 'currentCamera' ? [46, 46] : [29, 46]
  })

  marker = L.marker(props.position, {
    icon
  }).addTo(lsMapContainer)

  marker.on('mouseout', e => {
    emits('mouseout', props.target)
  })
  marker.on('mouseover', e => {
    emits('mouseover', props.target)
  })
  marker.on('click', e => {
    emits('click', props.target)
  })
}

watch(
  props,
  () => {
    console.log('909')
    if (marker) {
      marker.setLatLng(props.position)
    }
  },
  { deep: true }
)
</script>
