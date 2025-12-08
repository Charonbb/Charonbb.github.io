<template>
  <div class="container mx-auto">
    <ClientOnly>
      <div class="flex justify-end gap-2 print:hidden" v-if="supportsPrint">
        <a href="/cv-data.json" class="bg-primary-500 text-white px-2 py-1">
          JSON
        </a>
        <button
          class="bg-primary-500 text-white px-2 py-1 cursor-pointer hover:bg-primary-600"
          @click="onPrint"
        >
          Print
        </button>
      </div>
    </ClientOnly>
    <div class="flex items-baseline justify-between">
      <div class="font-medium text-4xl">Bayel Toktosunov</div>
      <div class="font-medium text-2xl">Junior QA</div>
    </div>
    <hr class="my-2 print:my-1 text-gray-400" />
    <div class="flex flex-col gap-6 print:gap-2">
      <CvAddress />
      <CvBlock title="Summary" class="leading-6 text-sm text-gray-800">
        {{ professionalSummary }}
      </CvBlock>
      <CvBlock title="Skills">
        <div class="text-sm space-y-1">
          <div v-for="(value, key) in skills" :key="key">
            <span class="mr-2 font-bold">{{ value.name }}:</span>
            <span>{{ value.technologies.join(", ") }}</span>
          </div>
        </div>
      </CvBlock>
      <CvBlock title="Experience">
        <div class="flex flex-col gap-2 print:gap-1">
          <CvExperienceItem
            v-for="experience in experiences"
            :key="experience.title"
            :experience="experience"
          />
        </div>
      </CvBlock>
      <CvBlock title="Education">
        <CvEducation :education="education" />
      </CvBlock>
      <!-- ДОБАВЛЕНИЕ: Блок Languages -->
      <CvBlock title="Languages">
      <div class="text-sm">
      {{ languages.join(" , ") }}
      </div>
        </CvBlock>
      <CvBlock title="Awards" class="print:hidden" v-if="awards.length > 0">
        <div class="flex flex-col gap-4">
          <div v-for="award in awards.slice(0, 3)" :key="award.award">
            <div>{{ award.award }}</div>
            <div class="flex items-center gap-2">
              <div class="text-gray-500 text-sm inline-block">
                {{ award.dates.map(formatDate).join(" - ") }}
              </div>
              <span class="text-gray-500 text-xs">•</span>
              <div class="text-gray-500 text-sm inline-block">
                {{ award.location }}
              </div>
            </div>
          </div>
          <div
            v-for="award in awards.slice(3)"
            :key="award.award"
            class="print:block"
            :class="showMoreAwards ? 'block' : 'hidden'"
          >
            <div class="text-xs text-gray-500">
              {{ award.dates.map(formatDate).join(" - ") }}
            </div>
            <div>{{ award.award }}</div>
            <div class="text-sm text-gray-700">
              {{ award.location }}
            </div>
          </div>
          <div class="flex justify-center print:hidden" v-if="!showMoreAwards">
            <button
              @click="onShowMoreAwards"
              class="flex items-center gap-1 bg-primary-500 text-white px-2 py-1 cursor-pointer hover:bg-primary-600"
            >
              More <i class="pi pi-chevron-down"></i>
            </button>
          </div>
        </div>
      </CvBlock>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  professionalSummary,
  experiences,
  education,
  awards,
  skills,
  languages,
} from "~/assets/data/cv-data";

useHead({
  title: "CV",
});

const supportsPrint = computed(() => {
  if (useNuxtApp().ssrContext) return false;
  return window.print !== undefined;
});

function onPrint() {
  window.print();
}

// #region Awards
const showMoreAwards = ref(false);

function onShowMoreAwards() {
  showMoreAwards.value = !showMoreAwards.value;
}
// #endregion
</script>
