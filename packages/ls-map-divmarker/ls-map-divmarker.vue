<script setup name="ls-map-divmarker" lang="ts">
import { ref, inject, onMounted, onActivated } from 'vue'
import L from 'leaflet'

let lsMapContainer: unknown = null
interface Props {
  target?: Record<string, any>
  number?: number
  position: [number, number]
}

const props = withDefaults(defineProps<Props>(), {
  number: 0,
  target: {}
})
const emits = defineEmits(['mouseout', 'mouseover', 'click'])

const index = ref(1)
onActivated(() => {
  lsMapContainer = inject('lsMapContainer')
  //console.log('inject', lsMapContainer)

  while (lsMapContainer && index.value) {
    //console.log('marker inject onMounted', lsMapContainer)
    if (props.position[0] && props.position[1] && props.number) {
      initMarker()
    }
    index.value = 0
    break
  }
})
onMounted(() => {
  lsMapContainer = inject('lsMapContainer')
  //console.log('我是divmarker', lsMapContainer)
  while (lsMapContainer && index.value && props.number) {
    //console.log('marker inject onMounted', lsMapContainer)
    if (props.position[0] && props.position[1]) {
      initMarker()
    }
    index.value = 0
    break
  }
})

const initMarker = () => {
  let icon = L.divIcon({
    className: 'redMessage-Icon',
    html: `<div class='redMessage-Icon-Item'>${props.number}</div>`,
    iconAnchor: [-5, 45]
  })

  let marker = L.marker(props.position, {
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
</script>

<style lang="less" scoped>
:deep(.redMessage-Icon) {
  width: 30px !important;
  height: 30px !important;
}

:deep(.redMessage-Icon-Item) {
  background: url('/image/map/redMessage.png') no-repeat scroll center center;
  background-size: 30px 30px;
  width: 30px !important;
  height: 30px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: 0 0;
  color: #fff;
  -webkit-animation: p-living 0.5s linear infinite alternate;
}
</style>
