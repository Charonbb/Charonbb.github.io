<template>
  <div class="max-w-xl mx-auto py-4 px-6">
    <div v-for="(items, category) in activityGroups" :key="category" class="mb-8">
      <h2 v-if="category !== ''" class="text-[13px] font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100 -mb-4 ">
        {{ category }}
      </h2>
      
      <div class="flex flex-col">
        <ProjectsItem 
          v-for="item in items" 
          :key="item.name" 
          :project="item" 
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const activityGroups = {
  "Книги": [
    {
      name: "Тестирование Дот Ком или Пособие по жестокости",
      author: ["Роман Савин"],
      description: "Практическое погружение в профессию тестировщика: как находить баги и работать в QA-команде.",
      finishedDate: "Sep 2025",
      tags: ["QA"]
    },
    {
      name: "Искусство тестирования программ",
      author: ["Гленфорд Майерс", "Том Баджетт", "Кори Сандлер"],
      description: "Глубокое понимание базовых принципов эффективного тестирования программного обеспечения.",
      finishedDate: " Dec 2025",
      tags: ["QA"]
    },
    {
      name: "Qa Engineer",
      author: ["Mikhail Semynin"],
      description: "Практическое введение в профессию QA-инженера: роли и задачи, основы тестирования, процессы разработки и необходимые навыки для старта в QA.",
      finishedDate: "jan 2025",
      tags: ["QA"]
    },
      {
  name: "Над пропастью во ржи",
  author: ["Дж. Д. Сэлинджер"],
  description: "История о подростковом кризисе, поиске искренности и неприятии фальши взрослого мира глазами Холдена Колфилда.",
  finishedDate: "In progress",
  tags: ["Классика", "Зарубежная литература", "Роман"]
     }

  ],
  "Подкасты": [
    {
      name: "Карл и Клара продули кораллы",
      author: ["НИИ О ЧОМ"],
      description: "Ироничный подкаст про IT, жизнь и абсурд профессии.",
      finishedDate: "Dec 2025",
      tags: ["SoftSkills", "Communication"]
    },
     {
      name: "Пустышка и очки",
      author: ["НИИ О ЧОМ"],
      description: "Подкаст с ироничным разбором популярных идей и «экспертных» утверждений.",
      finishedDate: "Dec 2025",
      tags: ["SoftSkills", "Communication"]
    },
      {
      name: "Отдел продашь?",
      author: ["НИИ О ЧОМ"],
      description: "Ироничное исследование того, как нам пытаются продать бесполезные идеи, тренды и лайфхаки под видом уникальных знаний.",
      finishedDate: "Dec 2025",
      tags: ["SoftSksills", "Communication"]
    },
      {
      name: "Слет. Что это было?",
      author: ["НИИ О ЧОМ"],
      description: "Подкаст о слёте: обсуждение события, впечатления участников и основные выводы.",
      finishedDate: " Dec 2025",
      tags: ["SoftSkills", "Communication"]
      },
         {
      name: "Новогодняя прожарка. Часть 1.",
      author: ["НИИ О ЧОМ"],
      description: "Честный и жесткий разбор о речи людей.",
      finishedDate: "Jan 2025",
      tags: ["SoftSkills", "Communication"]
         },
               {
      name: "Новогодняя прожарка. Часть 2.",
      author: ["НИИ О ЧОМ"],
      description: "Честный и жесткий разбор о речи людей",
      finishedDate: "Jan 2025",
      tags: ["SoftSkills", "Communication"]
               },
   {
      name: "Покупайте наших слонов!",
      author: ["НИИ О ЧОМ"],
      description: "Ироничный разбор маркетинговых уловок и стратегий продаж.",
      finishedDate: "Jan 2025",
      tags: ["SoftSkills", "Communication"]
    },
     {
      name: "Как читать, чтобы все  слушали?",
      author: ["НИИ О ЧОМ"],
      description: "Советы по эффективному чтению и удержанию внимания аудитории.",
      finishedDate: "Jan 2025",
      tags: ["SoftSkills", "Communication"]
    },
      {
      name: "Такой у нас характер.",
      author: ["НИИ О ЧОМ"],
      description: "Обсуждение влияния характера на профессиональную и личную жизнь.",
      finishedDate: "In progress",
      tags: ["SoftSkills", "Communication"]
    }
  ],
  "Обучающие видео": [
    {
      name: "Тестирование ПО: Профессиональный курс подготовки QA",
      author: ["Леша Маршал"],
      description: "Основы тестирования, создание тест-кейсов, работа с багами и инструменты QA.",
      finishedDate: "July 2025",
      tags: ["Learning", "QA"]
    },
    {
      name: "Клиент-серверные протоколы (REST, SOAP, GraphQL)",
      author: ["Ulbi TV"],
      description: "Теория взаимодействия: REST API, SOAP, GraphQL, WebSockets, gRPC.",
      finishedDate: "September 2025",
      tags: ["API", "Backend", "Theory"]
    }
  ]
};
</script>