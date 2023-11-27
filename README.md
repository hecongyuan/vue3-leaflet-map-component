# vue3-leaflet-map-component

该项目为vue3+leaflet组件，欢迎一起加入继续完善.

## 运行案例(run example)
```
yarn dev
```
## 安装(install)

npm install vue3-leaflet-map-component

## 使用(use)
<body class="markdown-body" style="padding-left: 20px;padding-right: 20px;">
    <p>vue3-leaflet-map-component</p>
    <h1>ls-map</h1>
    <h2>功能描述</h2>
    <p>地图显示组件</p>
    <h2>属性</h2>
    <table>
        <tr>
            <td>
                <p>参数</p>
            </td>
            <td>
                <p>说明</p>
            </td>
            <td>
                <p>类型</p>
            </td>
            <td>
                <p>可选值</p>
            </td>
            <td>
                <p>默认值</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>tk</p>
            </td>
            <td>
                <p>地图key</p>
            </td>
            <td>
                <p>string</p>
            </td>
            <td></td>
            <td>
                <p>无</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>layers</p>
            </td>
            <td>
                <p>地图图层</p>
            </td>
            <td>
                <p>string[] </p>
            </td>
            <td></td>
            <td>
                <p>['https://t0.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&amp;REQUEST=GetTile&amp;VERSION=1.0.0&amp;LAYER=vec&amp;STYLE=default&amp;TILEMATRIXSET=w&amp;FORMAT=tiles&amp;TILEMATRIX={z}&amp;TILEROW={y}&amp;TILECOL={x}&amp;tk={tk}',
                    'https://t0.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&amp;REQUEST=GetTile&amp;VERSION=1.0.0&amp;LAYER=cia&amp;STYLE=default&amp;TILEMATRIXSET=w&amp;FORMAT=tiles&amp;TILEMATRIX={z}&amp;TILEROW={y}&amp;TILECOL={x}&amp;tk={tk}'
                </p>
                <p> ]</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>showMiniMap</p>
            </td>
            <td>
                <p>显示缩放地图</p>
            </td>
            <td>
                <p>boolean </p>
            </td>
            <td>
                <p>true/false</p>
            </td>
            <td>
                <p>true</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>miniMapOptions</p>
            </td>
            <td>
                <p>迷你地图选项</p>
            </td>
            <td>
                <p>Record&lt;string, any&gt;</p>
            </td>
            <td></td>
            <td>
                <p> {toggleDisplay: true,</p>
                <p> zoomAnimation: true,</p>
                <p> hideText: 'hideText',</p>
                <p> showText: 'showText'</p>
                <p> }</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>showScale</p>
            </td>
            <td>
                <p>比例尺</p>
            </td>
            <td>
                <p>boolean </p>
            </td>
            <td></td>
            <td>
                <p>true</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>options</p>
            </td>
            <td>
                <p>地图选项</p>
            </td>
            <td>
                <p>Record&lt;string, any&gt;</p>
            </td>
            <td></td>
            <td>
                <p>{</p>
                <p> center: [28.39864879699246, 105.51818847656251], //初始地图中心</p>
                <p> zoom: 9, //初始缩放等级</p>
                <p> maxZoom: 18, //最大缩放等级</p>
                <p> minZoom: 9, //最小缩放等级</p>
                <p> zoomControl: false,</p>
                <p> copyRight:</p>
                <p> '&amp;copy; &lt;a href="http://www.bddigi.com/index.html#banner"&gt;成都磊数&lt;/a&gt;'</p>
                <p> }</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>copyRight</p>
            </td>
            <td>
                <p>版权信息</p>
            </td>
            <td>
                <p>string </p>
            </td>
            <td></td>
            <td>
                <p>285121973@qq.com</p>
            </td>
        </tr>
    </table>
    <p> </p>
    <h2>事件</h2>
    <table>
        <tr>
            <td>
                <p>事件名</p>
            </td>
            <td>
                <p>说明</p>
            </td>
            <td>
                <p>回调参数</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>click</p>
            </td>
            <td>
                <p>单击地图触发</p>
            </td>
            <td>
                <p>{latlng:鼠标事件发生的地理坐标,</p>
                <p>layerPoint:鼠标事件发生点相对于地图图层的像素坐标。</p>
                <p>containerPoint:鼠标事件发生的点相对于地图容器的像素坐标。</p>
                <p>originalEvent}</p>
            </td>
        </tr>
    </table>
    <h2>方法</h2>
    <h1>ls-map-geo</h1>
    <h2>功能描述</h2>
    <p>根据地区码加载对应的geoJson文件，可自定义geoJson数据输入</p>
    <h2>属性</h2>
    <table>
        <tr>
            <td>
                <p>参数</p>
            </td>
            <td>
                <p>说明</p>
            </td>
            <td>
                <p>类型</p>
            </td>
            <td>
                <p>可选值</p>
            </td>
            <td>
                <p>默认值</p>
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
    <h2>方法</h2>
    <h2>事件</h2>
    <h1>ls-map-marker</h1>
    <h2>功能描述</h2>
    <p>标记组件，可以自定义图标和样式</p>
    <h2>属性</h2>
    <p>target?: Record&lt;string, any&gt;//</p>
    <p>?: //position: [number, number]//</p>
    <table>
        <tr>
            <td>
                <p>参数</p>
            </td>
            <td>
                <p>说明</p>
            </td>
            <td>
                <p>类型</p>
            </td>
            <td>
                <p>可选值</p>
            </td>
            <td>
                <p>默认值</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>target</p>
            </td>
            <td>
                <p>数据</p>
            </td>
            <td>
                <p>Record&lt;string, any&gt;</p>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>
                <p>iconType</p>
            </td>
            <td>
                <p>图标类型</p>
            </td>
            <td>
                <p>string</p>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>
                <p>position</p>
            </td>
            <td>
                <p>位置</p>
            </td>
            <td>
                <p>[number, number]</p>
            </td>
            <td></td>
            <td></td>
        </tr>
    </table>
    <h2>方法</h2>
    <h2>事件</h2>
    <h1>ls-map-divmarker</h1>
    <h2>功能描述</h2>
    <p>自定义标记组件样式</p>
    <h2>属性</h2>
    <table>
        <tr>
            <td>
                <p>参数</p>
            </td>
            <td>
                <p>说明</p>
            </td>
            <td>
                <p>类型</p>
            </td>
            <td>
                <p>可选值</p>
            </td>
            <td>
                <p>默认值</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>target</p>
            </td>
            <td>
                <p>数据</p>
            </td>
            <td>
                <p>Record&lt;string, any&gt;</p>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>
                <p>number</p>
            </td>
            <td>
                <p>显示的消息</p>
            </td>
            <td>
                <p>number</p>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>
                <p>position</p>
            </td>
            <td>
                <p>位置</p>
            </td>
            <td>
                <p>[number, number]</p>
            </td>
            <td></td>
            <td></td>
        </tr>
    </table>
    <h2>方法</h2>
    <h2>事件</h2>
    <h1>ls-map-popup</h1>
    <h2>功能描述</h2>
    <p>弹窗组件</p>
    <h2>属性</h2>
    <table>
        <tr>
            <td>
                <p>参数</p>
            </td>
            <td>
                <p>说明</p>
            </td>
            <td>
                <p>类型</p>
            </td>
            <td>
                <p>可选值</p>
            </td>
            <td>
                <p>默认值</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>position</p>
            </td>
            <td>
                <p>位置</p>
            </td>
            <td>
                <p>[number, number]</p>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>
                <p>target</p>
            </td>
            <td>
                <p>数据</p>
            </td>
            <td>
                <p>Record&lt;string, any&gt;</p>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>
                <p>options</p>
            </td>
            <td>
                <p>选项</p>
            </td>
            <td>
                <p>Record&lt;string, any&gt;</p>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>
                <p>isShow</p>
            </td>
            <td>
                <p>是否打卡弹出</p>
            </td>
            <td>
                <p>boolean</p>
            </td>
            <td></td>
            <td></td>
        </tr>
    </table>
    <h2>作用域插槽（Scoped Slot）</h2>
    <table>
        <tr>
            <td>
                <p>插槽名</p>
            </td>
            <td>
                <p>参数</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>default</p>
            </td>
            <td>
                <p>{data}</p>
            </td>
        </tr>
    </table>
    <h2>方法</h2>
    <h2>事件</h2>
    <h1>ls-map-trackline</h1>
    <h2>功能描述</h2>
    <p>轨迹显示组件</p>
    <h2>属性</h2>
    <table>
        <tr>
            <td>
                <p>参数</p>
            </td>
            <td>
                <p>说明</p>
            </td>
            <td>
                <p>类型</p>
            </td>
            <td>
                <p>可选值</p>
            </td>
            <td>
                <p>默认值</p>
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
    <h2>方法</h2>
    <h2>事件</h2>
</body>


```
import { LsMap, LsMapDivMarker, LsMapGeo, LsMapMarker, LsMapPopup } from 'vue3-leaflet-map-component';
```

## 联系作者(CONCACT AUTHOR)
welcome communication with me!

phone:+86 13541779726

wechat:hecongyuan2023

email:2851212973@qq.com

gmail:h285121973@gmail.com



