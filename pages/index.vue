<template>
  <div class="container space-y-4">
    <div
      class="text-3xl my-8 text-center text-balance sm:text-left sm:text-nowrap"
    >
      Hi! I'm <span class="text-primary-500">Bayel Toktosunov</span>, a QA engineer.
    </div>
    <div>
      <img src="~/assets/img/home-me.jpeg" />
    </div>
    <p class="text-xl leading-relaxed">
      I have been working as a Quality Assurance (QA) Specialist for the past
      <span class="text-primary-500">{{
        currentYear - startYearOfWorking
      }}</span>
      months. My journey into IT started with learning the basics of HTML and CSS, but I quickly pivoted to testing, where I actively use Python and Selenium in PyCharm .
      <NuxtLink to="/cv" class="text-primary-500 hover:text-primary-700"
        >CV page</NuxtLink
      >.
    </p>
    <p class="text-xl leading-relaxed">
      My main focus is on effective communication within the team to achieve a high-quality outcome. My immediate goals include mastering databases and advancing my skills in QA automation.
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
