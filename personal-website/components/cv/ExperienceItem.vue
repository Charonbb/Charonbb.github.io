<template>
  <div>
    <div class="flex items-center justify-between">
      <div>
        <span class="text-lg font-semibold">
          {{ props.experience.title }}
        </span>
        -
        <span class="text-sm text-gray-500">
          {{ props.experience.company }}
        </span>
      </div>
      <div
        class="text-sm"
        :class="isPresent ? 'text-primary-500' : 'text-gray-800'"
      >
        {{ workingPeriod }}
      </div>
    </div>

    <div>
      <ul class="list-disc pl-4" v-if="props.experience.responsibilities">
        <li
          v-for="responsibility in props.experience.responsibilities"
          class="text-sm py-0.5"
        >
          {{ responsibility }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formatDate } from "@/utils/helpers";
const props = defineProps<{
  experience: CvExperience;
}>();
const workingPeriod = computed(() => {
  return `${formatDate(props.experience.start)} - ${formatDate(
    props.experience.end
  )}`;
});
const isPresent = computed(() => {
  return workingPeriod.value.includes("Present");
});
</script>
