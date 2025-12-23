<template>
  <div 
    class="group relative bg-black p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)] border border-zinc-900 hover:border-zinc-500 rounded-sm"
  >
    <div class="absolute left-0 top-0 h-full w-[2px] bg-white scale-y-0 transition-transform duration-500 origin-top group-hover:scale-y-100"></div>

    <div class="flex flex-col gap-3">
      <h2 class="text-xl font-bold tracking-tight text-white leading-tight uppercase transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
        {{ project.name }}
      </h2>

      <p class="text-zinc-500 text-sm leading-snug transition-colors duration-500 group-hover:text-white">
        {{ project.description }}
      </p>
      
      <div class="mt-1">
        <span class="block text-zinc-700 font-bold uppercase text-[10px] tracking-widest mb-1 transition-colors duration-500 group-hover:text-zinc-400">
          {{ project.author ? 'Authors' : 'Technologies' }}
        </span>
        <div class="flex flex-wrap gap-x-2 text-zinc-500 text-sm transition-colors duration-500 group-hover:text-white">
          <span 
            v-for="(item, index) in (project.author || project.technologies)" 
            :key="item"
          >
            {{ item }}<span v-if="index !== (project.author || project.technologies).length - 1" class="ml-2 opacity-20">|</span>
          </span>
        </div>
      </div>

      <div class="mt-2 pt-3 border-t border-zinc-900 group-hover:border-zinc-700 transition-colors duration-500">
        <a
          v-if="project.bookUrl"
          :href="project.bookUrl"
          target="_blank"
          class="inline-flex items-center gap-2 text-zinc-500 transition-all duration-500 group-hover:text-white font-bold uppercase text-[11px] tracking-widest group/link"
        >
          <span>Read Book</span>
          <span class="transition-transform duration-300 group-hover/link:translate-x-2">→</span>
        </a>

        <a
          v-else-if="project.github"
          :href="project.github"
          target="_blank"
          class="inline-flex items-center gap-2 text-zinc-500 transition-all duration-500 group-hover:text-white font-bold uppercase text-[11px] tracking-widest group/link"
        >
          <i class="pi pi-github text-xs" />
          <span class="transition-transform duration-300 group-hover/link:translate-x-1">Source Code</span>
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