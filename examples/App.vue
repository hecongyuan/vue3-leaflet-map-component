<template>
  <div class="h-100vh w-100vw bg-white">
    <Layout>
      <template #header>
        <div class="h-full text text-black bg-gray ">vue3-leaflet-map</div>
      </template>

      <template #aside>
        <div class="w-full h-full ">
          <el-row class="w-full h-full ">
            <el-col >
             <NavBar />
            </el-col>
          </el-row>
        </div>
      </template>
      <template #main>
        <div class="w-full h-full">
         <RouterView />
        </div>
      </template>
    </Layout>
  </div>
</template>



<script setup lang="ts" >
import { Layout,NavBar } from "./components/index";
</script>

