<template>
  <span
    v-if="props.type"
    class="py-0.5 px-1 rounded-md border-1 text-xxs uppercase font-medium whitespace-nowrap"
    :class="severityClasses"
  >
    {{ props.type }}
  </span>
</template>

<script lang="ts" setup>
const props = defineProps<{
  type?: EmploymentType | ExperienceType;
  severity?: "primary" | "secondary" | 'accent';
}>();

const severityClasses = computed(() => {
  return {
    "border-primary-400 bg-primary-50  text-primary-700":
      props.severity === "primary",
    "border-gray-500 bg-gray-100  text-gray-700": props.severity === "secondary",
    "border-accent-400 bg-accent-50  text-accent-700":
      props.severity === "accent",
  };
});
</script>
