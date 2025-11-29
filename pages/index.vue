<template>
  <div class="container space-y-4">
    <div
      class="text-3xl my-8 text-center text-balance sm:text-left sm:text-nowrap"
    >
      Hi! I'm <span class="text-primary-500">Nurbek Baizakov</span>, a frontend
      engineer.
    </div>
    <div>
      <img src="~/assets/img/home-me.jpeg" />
    </div>
    <p class="text-xl leading-relaxed">
      I have been working as a software developer for the past
      <span class="text-primary-500">{{
        currentYear - startYearOfWorking
      }}</span>
      years. Started from ML, going through backend and now doing frontend. You
      can find my CV on the
      <NuxtLink to="/cv" class="text-primary-500 hover:text-primary-700"
        >CV page</NuxtLink
      >.
    </p>
    <p class="text-xl leading-relaxed">
      My main focus is on building user-centric products and experiences. I
      enjoy working on projects that have a positive impact on people's lives
      through non-trivial solutions.
    </p>
    <p class="text-xl leading-relaxed">
      Interested in working together? <br />
      Feel free to reach out to
      <a
        :href="`mailto:${useRuntimeConfig().public.email}`"
        class="text-primary-500 hover:text-primary-700"
        >me</a
      >.
    </p>
  </div>
</template>

<script lang="ts" setup>
const startYearOfWorking = 2019;
const currentYear = new Date().getFullYear();
</script>
