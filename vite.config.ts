import vue from '@vitejs/plugin-vue';
import { resolve } from "path";
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';
export default defineConfig({
	plugins: [
		vue(),
		WindiCSS(),
		AutoImport({
			imports: [
				'vue',
				'vue-router'
			],
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		})],
	build: {
		outDir: 'lib',
		lib: {
			entry: resolve(__dirname, 'packages/index.ts'), //指定组件编译入口文件
			name: 'Vue3LeafletMapComponent',
			fileName: 'vue3-leaflet-map-component',
		},//库编译模式配置
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ['vue'],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: 'Vue',
				},
			},
		},// rollup打包配置
	},
})
