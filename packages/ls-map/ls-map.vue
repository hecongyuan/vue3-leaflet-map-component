<template>
  <div id="lsMapContainer" class="w-full h-full !z-8">
    <!-- 定义子组件 -->
    <slot />
  </div>
</template>
<script setup name="ls-map" lang="ts">
import { onMounted, provide } from 'vue'
import L from 'leaflet'
import MiniMap from 'leaflet-minimap'
import 'leaflet/dist/leaflet.css'
import { cloneDeep } from 'lodash'

interface Props {
  tk?: string //地图key
  layers?: string[] // 地图图层
  showMiniMap?: boolean // 缩放地图
  miniMapOptions: Record<string, any> //迷你地图选项
  showScale?: boolean // 比例尺
  options?: Record<string, any> //地图选项,leaflet的options
  copyRight?: string //版权信息
}

const props = withDefaults(defineProps<Props>(), {
  tk: '',
  layers: [
    'http://t0.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk={tk}',
    'http://t0.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk={tk}'
  ], //标准地图+注记
  showMiniMap: true,
  showScale: true,
  miniMapOptions: {
    toggleDisplay: true,
    zoomAnimation: true,
    hideText: 'hideText',
    showText: 'showText'
  },
  options: {
    center: [28.39864879699246, 105.51818847656251], //初始地图中心
    zoom: 9, //初始缩放等级
    maxZoom: 18, //最大缩放等级
    minZoom: 9, //最小缩放等级
    zoomControl: false,
    maxBounds: [
      [50, 104.76819724072494],
      [50, 106.74547092110966],
      [27.58863216796008, 104.61990171469608],
      [27.576460076262716, 106.72075500010487]
    ],
    copyRight:
      '&copy; <a href="http://www.bddigi.com/index.html#banner">成都磊数</a>'
  }
})
const emits = defineEmits(['ready', 'click'])

onMounted(() => {
  initMap()
})

let lsMapContainer
const initMap = () => {
  console.log('props', props.options)
  //渲染大地图
  const layers = props.layers.map(url => L.tileLayer(url, { tk: props.tk }))
  const layerGroup = L.layerGroup(layers)

  //容器
  lsMapContainer = L.map(
    'lsMapContainer',
    Object.assign(
      { ...props.options, layers: [layerGroup] },
      {
        center: [28.39864879699246, 105.51818847656251], //初始地图中心
        zoom: 9, //初始缩放等级
        maxZoom: 18, //最大缩放等级
        minZoom: 9, //最小缩放等级
        zoomControl: false,
        maxBounds: [
          [50, 104.76819724072494],
          [50, 106.74547092110966],
          [27.58863216796008, 104.61990171469608],
          [27.576460076262716, 106.72075500010487]
        ],
        copyRight:
          '&copy; <a href="http://www.bddigi.com/index.html#banner">成都磊数</a>'
      }
    )
  )

  lsMapContainer.on('click', e => {
    emits('click', e)
  })

  if (props.showScale) {
    //比例尺
    L.control.scale().addTo(lsMapContainer)
  }
  if (props.showMiniMap) {
    //缩放预览
    const miniLayers = props.layers.map(url =>
      L.tileLayer(url, { tk: props.tk })
    )
    //缩放地图
    const miniLayerGroup = L.layerGroup(miniLayers)
    new MiniMap(miniLayerGroup, props.miniMapOptions).addTo(lsMapContainer)
    //缩放按钮
    L.control.zoom({ position: 'bottomright' }).addTo(lsMapContainer)
  }

  //右下角版权信息
  L.tileLayer('', {
    maxZoom: 19,
    attribution: props.copyRight
  }).addTo(lsMapContainer)
  provide('lsMapContainer', lsMapContainer)
  emits('ready', lsMapContainer)
}

defineExpose({
  lsMapContainer
})
</script>

<style scoped lang="scss">
:deep(.leaflet-control-minimap) {
  border: 1px solid rgb(97, 97, 97);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
}
/* scoped 使用得定义的样式只在本页面内生效  */
</style>
