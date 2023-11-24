// import { App, defineAsyncComponent } from 'vue'
// export default {
//   install(app: App) {
//     const requireModules = import.meta.glob(['./*.vue'])
//     for (const path in requireModules) {
//         const result: Array<any> = path.match(/.*\/(.+).vue$/)!
//         console.log('result',result)
//       const modulesConent: any = requireModules[path]
//       app.component(result[1], defineAsyncComponent(modulesConent))
//     }
//   }
// }

import Layout from './Layout.vue'
import NavBar from './NavBar.vue'


export {
    Layout,
    NavBar
}
