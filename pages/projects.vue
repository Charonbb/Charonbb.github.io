<template>
  <div class="container">
    <div class="flex flex-col gap-4">
      <ProjectsItem
        v-for="project in projects"
        :key="project.name"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "~/utils/types";

useHead({
  title: "Projects",
});

const projects: Project[] = [
  {
    name: "Finite state machine",
    description: "Simple finite state machine implementation in JavaScript",
    github: "https://github.com/nbaizaq/fsm",
    npm: "https://www.npmjs.com/package/@uictoria1/fsm",
    technologies: ["TypeScript", "NPM", "Vite", "Vitest"],
  },
  {
    name: "package.json version provider",
    description: "Simple package.json version provider module for Nuxt",
    github: "https://github.com/nbaizaq/nuxt-version",
    npm: "https://www.npmjs.com/package/nuxt-version",
    technologies: [
      "TypeScript",
      "NPM",
      "Nuxt",
      "Nuxt kit",
      "Semantic versioning",
    ],
  },
  {
    name: "Binance coin price tracker browser extension",
    description: "Browser extension to track the price of a coin on Binance",
    github: "https://github.com/nbaizaq/binance-extension",
    technologies: [
      "Webpack",
      "Browser API",
      "HTML",
      "CSS",
      "JavaScript",
      "Chrome extension",
      "Speech synthesis",
      "Mutation observer",
    ],
  },
];
</script>
