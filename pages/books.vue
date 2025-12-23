<template>
  <div class="container">
    <div class="flex flex-col gap-4">
      <ProjectsItem
        v-for="book in books"
        :key="book.name"
        :project="book" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const books = [
  {
    name: "You Don't Know JS",
    description: "Глубокое погружение в механизмы JavaScript.",
    author: ["Kyle Simpson"],
    bookUrl: "https://www.ozon.ru/category/knigi-16500/", // Ваша ссылка на магазин
  }
];
</script>