<template>
  <div class="space-y-4">
    <div class="flex gap-2 flex-wrap justify-between">
      <div>
        <span class="text-gray-500">Email: </span>
        <a class="hover:text-primary-500" href="mailto:n.baizakof@gmail.com">
          n.baizakof@gmail.com
        </a>
      </div>
      <div>
        <span class="text-gray-500">Phone: </span>
        <a class="hover:text-primary-500" href="tel:+996558826282">
          +996 558 826-282
        </a>
      </div>
      <div>
        <span class="text-gray-500">Telegram: </span>
        <a class="hover:text-primary-500" href="https://t.me/nbaizaq">
          <i class="pi pi-at !text-xxs" />nbaizaq
        </a>
      </div>
    </div>
    <div class="flex gap-2 items-center justify-between flex-wrap">
      <a
        class="flex gap-1 items-center shrink-0 hover:text-primary-500"
        target="_blank"
        href="https://maps.app.goo.gl/uEMk8f14F3XeGpgy5"
      >
        <i class="pi pi-map-marker !text-sm text-gray-500" /> Bishkek,
        Kyrgyzstan
      </a>
      <div class="flex gap-2 items-center flex-wrap">
        <a
          class="flex gap-1 items-center shrink-0 hover:text-primary-500"
          href="http://github.com/nbaizaq"
          target="_blank"
        >
          <i class="pi pi-github !text-sm text-gray-500" /> github.com/nbaizaq
        </a>
        <a
          class="flex gap-1 items-center shrink-0 hover:text-primary-500"
          href="http://www.linkedin.com/in/nbaizaq"
          target="_blank"
        >
          <i class="pi pi-linkedin !text-sm text-gray-500" />
          linkedin.com/in/nbaizaq
        </a>
        <a
          class="flex gap-1 items-center shrink-0 hover:text-primary-500"
          :href="useRuntimeConfig().public.baseUrl"
          target="_blank"
        >
          <i class="pi pi-globe !text-sm" />
          {{ useRuntimeConfig().public.baseUrl.replace("https://", "") }}
        </a>
      </div>
    </div>
  </div>
</template>
