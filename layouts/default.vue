<template>
  <div>
    <div class="bg-primary-500 px-4 py-6 text-white print:hidden sticky top-0 z-10">
      <div class="flex justify-center gap-4 font-bold flex-wrap text-2xl">
        <NuxtLink
          to="/"
          class="link"
          :class="route.path === '/' ? 'text-primary-500 bg-white' : ''"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/cv"
          class="link"
          :class="route.path === '/cv' ? 'text-primary-500 bg-white' : ''"
        >
          CV
        </NuxtLink>
       
      </div>
      <div class="flex justify-center gap-2 flex-wrap mt-2 text-primary-50">
        <NuxtLink
          to="http://www.linkedin.com/in/btotkosunov"
          target="_blank"
          class="flex gap-1 items-center link"
        >
          <i class="pi pi-linkedin" />LinkedInfff
        </NuxtLink>
        <NuxtLink
          to="https://github.com/Charonbb"
          target="_blank"
          class="flex gap-1 items-center link"
        >
          <i class="pi pi-github" />Github
        </NuxtLink>
       
      </div>
    </div>
    <div class="px-4 pt-4 pb-8 print:p-0">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>
