<template>
  <div>
    <div class="text-2xl font-bold text-primary-600 print:text-black">{{ props.title }}</div>
    <hr class="my-0.5 text-gray-200" />
    <div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>
