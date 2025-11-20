<template>
  <div>
    <div class="text-2xl font-bold text-primary-600 print:text-black">{{ props.title }}</div>
    <hr class="my-2 text-gray-200" />
    <div class="mt-2">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>
