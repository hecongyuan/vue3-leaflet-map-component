
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { name: 'LsMapPage', path: '/', component: () => import('../view/LsMapPage.vue') },
    { name: 'LsMapGeoPage', path: '/LsMapGeoPage', component: () => import('../view/LsMapGeoPage.vue') },
    { name: 'LsMapMarkerPage', path: '/LsMapMarkerPage', component: () => import('../view/LsMapMarkerPage.vue') },
    { name: 'LsMapDivmarkerPage', path: '/LsMapDivmarkerPage', component: () => import('../view/LsMapDivmarkerPage.vue') },
    { name: 'LsMapPopupPage', path: '/LsMapPopupPage', component: () => import('../view/LsMapPopupPage.vue') },
    { name: 'LsMapTracklinePage', path: '/LsMapTracklinePage', component: () => import('../view/LsMapTracklinePage.vue') },
]


const router = createRouter({
    history: createWebHistory(),
    routes, 
})
export default router