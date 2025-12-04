<template>
  <div class="border-2 border-primary-200 bg-primary-50">
    <div class="relative p-4">
      <div class="text-2xl font-semibold">{{ project.name }}</div>
      <img
        src="~/assets/img/topography.svg"
        class="w-full h-full absolute top-0 left-0 object-cover opacity-10"
      />
    </div>
    <div class="p-4">
      <div>{{ project.description }}</div>
      <div class="text-gray-500 text-sm mt-4">
        Technologies:
        <span class="text-gray-700 text-sm">{{
          project.technologies?.join(", ")
        }}</span>
      </div>
      <div class="text-gray-500 text-xs mt-4 flex gap-4">
        <a
          :href="project.github"
          target="_blank"
          class="flex gap-1 items-center hover:text-primary-500"
          v-if="project.github"
        >
          <i class="pi pi-github" />
          {{ project.github?.replace("https://github.com/", "") }}</a
        >
        <a
          :href="project.npm"
          target="_blank"
          class="flex gap-1 items-center fill-gray-500 hover:text-primary-500 hover:fill-primary-700"
          v-if="project.npm"
        >
          <SharedIconsNpm class="w-8" />
          {{ project.npm?.replace("https://www.npmjs.com/package/", "") }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "~/utils/types";

const props = defineProps<{
  project: Project;
}>();
</script>
