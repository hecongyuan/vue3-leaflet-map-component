<script setup name="ls-map-geo" lang="ts">
import { ref, inject, onMounted, onActivated } from 'vue'
import L from 'leaflet'
import axios from 'axios'

let lsMapContainer: unknown = null
const index = ref(1)
onActivated(() => {
  lsMapContainer = inject('lsMapContainer')
  while (lsMapContainer && index.value) {
    initGeo()
    index.value = 0
    break
  }
})
onMounted(() => {
  lsMapContainer = inject('lsMapContainer')
  while (lsMapContainer && index.value) {
    initGeo()
    index.value = 0
    break
  }
})

// 随机生成颜色
const getRandomColor = () => {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const initGeo = () => {
  axios.get('/geoJson/510500.json').then(({ data }) => {
    L.geoJSON(data, {
      style: feature => {
        const content = `<div>${feature.properties.name}</div>`
        const textIcon = L.divIcon({
          html:
            "<div style='color:#032E59;font-size:14px;font-weight:800'>" +
            content +
            '</div>',
          className: '',
          iconSize: 50
        })
        L.marker(
          [feature.properties.centroid[1], feature.properties.centroid[0]],
          {
            icon: textIcon
          }
        ).addTo(lsMapContainer)
        return {
          radius: 8,
          fillColor: getRandomColor(),
          color: 'blue',
          width: '10px',
          weight: 1,
          opacity: 0.2,
          fillOpacity: 0.2
        }
      }
    }).addTo(lsMapContainer)
  })
}
</script>
