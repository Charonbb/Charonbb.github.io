<template>
  <div class="container">
    <div class="text-lg">Hi! I'm Nurbek Baizakov, a software developer.</div>
    <div class="mt-4">
      <img src="~/assets/img/home-me.jpeg" class="rounded-lg" />
    </div>
    <div class="mt-4">
      I have been working as a software developer for the past
      {{ currentYear - startYearOfWorking }} years. Started from ML, going
      through backend and now doing frontend. You can find my CV on the
      <NuxtLink to="/cv" class="text-primary-300 hover:text-primary-500"
        >CV page</NuxtLink
      >.
    </div>
    <div class="mt-4">
      My main focus is on building user-centric products and experiences. I
      enjoy working on projects that have a positive impact on people's lives
      through non-trivial solutions.
    </div>
    <div class="mt-4">
      Interested in working together? Feel free to reach out to me.
    </div>
  </div>
</template>

<script lang="ts" setup>
const startYearOfWorking = 2019;
const currentYear = new Date().getFullYear();
</script>
