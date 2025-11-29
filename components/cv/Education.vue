<template>
  <div>
    <div class="flex items-center gap-2 justify-between">
      <div class="text-xl">
        {{ props.education.degree }} at {{ props.education.university }}
      </div>
      <div class="text-gray-500 text-sm">
        {{ period }}
      </div>
    </div>
    <div class="text-sm">
      {{ props.education.major }}
      <span v-if="props.education.major" class="text-gray-500 text-xs"
        >(Major)</span
      >,
      {{ props.education.minor }}
      <span v-if="props.education.minor" class="text-gray-500 text-xs"
        >(Minor)</span
      >
    </div>
    <div class="text-sm text-gray-500">
      {{ props.education.location }}
    </div>

    <div class="mt-4" v-if="props.education.gpa">
      GPA: <span class="italic">{{ props.education.gpa }}</span>
    </div>

    <div class="mt-4" v-if="props.education.courses?.length">
      <div class="text-sm text-gray-500">Relevant Coursework</div>
      <ul class="list-disc list-inside text-sm mt-2">
        <li v-for="course in props.education.courses" :key="course">
          {{ course }}
        </li>
      </ul>
    </div>

    <!-- <div class="mt-4" v-if="props.education.academicLeaves?.length">
      <div class="text-gray-500 text-sm mb-2">Academic Leave</div>
      <ul
        v-for="leave in props.education.academicLeaves"
        class="text-sm list-disc list-inside"
      >
        <li class="pb-2">
          {{ formatDate(leave.start) }} - {{ formatDate(leave.end) }}
          <ul v-if="leave.reasons?.length" class="list-inside ml-4 list-disc">
            <li
              v-for="reason in leave.reasons"
              :key="reason.title"
              class="text-gray-500 text-xs"
            >
              {{ reason.title }} @
              <template v-if="reason.experienceId">
                <a :href="'#' + reason.experienceId" class="underline hover:text-blue-600">{{ reason.company }}</a>
              </template>
              <template v-else>
                {{ reason.company }}
              </template>
              <SharedEmploymentTypeTag class="ml-2" :type="reason.employmentType" />
            </li>
          </ul>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { formatDate } from "@/utils/helpers";

const props = defineProps<{
  education: CvEducation;
}>();
const period = computed(() => {
  return `${formatDate(props.education.start)} - ${formatDate(
    props.education.end
  )}`;
});
</script>
