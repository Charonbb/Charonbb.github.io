<template>
  <div class="py-6 border-b border-gray-200 last:border-0">
    <div class="flex justify-between items-baseline gap-4 mb-2">
      <h3 class="text-xl font-bold text-gray-900 leading-tight">
        {{ project.name }}
      </h3>
      
      <span v-if="project.finishedDate" class="text-sm text-gray-500 whitespace-nowrap">
        {{ project.finishedDate }}
      </span>
    </div>

    <div v-if="project.author" class="text-sm font-medium text-gray-600 mb-2">
      {{ project.author.join(", ") }}
    </div>

    <p class="text-gray-700 leading-relaxed text-sm mb-3">
      {{ project.description }}
    </p>

    <div v-if="project.tags && project.tags.length" class="flex flex-wrap gap-2">
      <span 
        v-for="tag in project.tags" 
        :key="tag"
        class="text-[11px] font-bold uppercase tracking-wider text-gray-400"
      >
        #{{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "~/utils/types";

const props = defineProps<{
  project: Project;
}>();
</script>