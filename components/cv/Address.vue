<template>
  <div class="space-y-2 text-xs">
    <div class="flex gap-x-4 gap-y-1 items-center flex-wrap">
      
      <div>
        <span class="text-gray-500">Email: </span>
        <a
          class="hover:text-primary-500"
          :href="`mailto:${useRuntimeConfig().public.email}`"
        >
          {{ useRuntimeConfig().public.email }}
        </a>
      </div>
      
      <div>
        <span class="text-gray-500">Phone: </span>
        <a class="hover:text-primary-500" href="tel:+996558826282">
          +996 709 777 696
        </a>
      </div>
      
      <div>
        <span class="text-gray-500">Telegram: </span>
        <a class="hover:text-primary-500" href="https://t.me/bayelvv">
          <i class="pi pi-at !text-xxs" />bayelvv
        </a>
      </div>
      
      <a
        class="flex gap-1 items-center shrink-0 hover:text-primary-500"
        href="http://www.linkedin.com/in/btotkosunov"
        target="_blank"
      >
        <i class="pi pi-linkedin text-gray-500" />
        linkedin.com/in/btoktosunov
      </a>

      <a
        class="flex gap-1 items-center shrink-0 hover:text-primary-500"
        href="https://github.com/Charonbb"
        target="_blank"
      >
        <i class="pi pi-github text-gray-500" /> github.com/Charonbb
      </a>
      
      <a
        class="flex gap-1 items-center shrink-0 hover:text-primary-500"
        :href="useRuntimeConfig().public.baseUrl"
        target="_blank"
      >
        <i class="pi pi-globe text-gray-500" />
        {{ useRuntimeConfig().public.baseUrl.replace("https://", "") }}
      </a>
      
      <a
        class="flex gap-1 items-center shrink-0 hover:text-primary-500"
        target="_blank"
        href="https://maps.app.goo.gl/uEMk8f14F3XeGpgy5"
      >
        <i class="pi pi-map-marker text-gray-500" /> Bishkek, Kyrgyzstan
      </a>
      
    </div>
  </div>
</template>