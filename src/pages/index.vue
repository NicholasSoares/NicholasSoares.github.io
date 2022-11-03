<script setup>
import ThemeControl from '@/components/ThemeControl.vue';
import profileImageURL from '@/assets/img/profile.jpg';

</script>

<template>
  <ThemeControl />
  <main class="text-gray-700 dark:text-gray-100 transition-colors">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 gap-0 transition-colors md:grid-cols-3 md:gap-3">
        <article>
          <div class="p-3 m-3 bg-gray-200 dark:bg-slate-600 rounded-lg shadow-lg">
            <div class="flex flex-wrap justify-center">
              <div class="w-6/12 sm:p-2 sm:w-6/12">
                <img
                  class="max-w-full h-auto align-middle rounded-full border-8 border-stone-300 border-solid shadow-lg"
                  :src="profileImageURL"
                  alt="Nicholas Teixeira Soares Profile Picture"
                >
              </div>
            </div>
            <h1 class="mt-4 text-2xl text-center text-gray-700 dark:text-gray-100">
              Nicholas Teixeira Soares
            </h1>
            <p class="text-center text-gray-700 dark:text-gray-100">
              Full Stack PHP Developer
            </p>
            <p class="mt-2 text-center text-gray-700 dark:text-gray-100">
              <FontAwesomeIcon icon="location-dot" /> Florianopolis - SC, Brazil
            </p>
            <aside class="mt-4">
              <p class="mt-2 text-4xl text-center">
                <a
                  class="mr-1 text-blue-500"
                  href="https://www.linkedin.com/in/nicholas-teixeira-soares-b34095164/"
                ><FontAwesomeIcon :icon="['fab', 'linkedin']" /></a>
                <a
                  class="ml-1 text-black dark:text-white"
                  href="https://github.com/NicholasSoares"
                ><FontAwesomeIcon :icon="['fab', 'github']" /></a>
              </p>
            </aside>
          </div>
        </article>
        <div class="col-span-2 p-3 m-3 bg-gray-200 dark:bg-slate-800 rounded-lg shadow-lg lg:p-10 lg:pt-3">
          <article class="border-b-2 border-gray-500">
            <h1 class="mt-8 text-xl text-left text-gray-800 dark:text-gray-200">
              Tech Lead <span class="pl-1 text-sm text-gray-600 dark:text-gray-50">2021 - Present</span>
            </h1>
            <p class="pl-2 text-lg">
              Dicas Mei/MeiShop
            </p>
            <p class="pl-2 text-sm text-gray-700 dark:text-gray-100">
              <FontAwesomeIcon icon="location-dot" /> Bauru - SP, Brazil
            </p>
            <p class="pt-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p class="pt-3">
              Technologies Used: <span class="pl-1 text-sm text-gray-600 dark:text-gray-50">Laravel, Synfony, React Native, Vue, React, Redis and MySql.</span>
            </p>
            <p class="py-3">
              Public Projects:
              <a href="https://app.meunegocio.meishop.com.br/">
                <span class="pl-1 text-sm text-gray-600 dark:text-gray-50 underline">Meu Negocio</span>
              </a>,
              <a href="https://meishop.com.br/">
                <span class="pl-1 text-sm text-gray-600 dark:text-gray-50 underline">Mei Shop</span>
              </a>,
              <a href="https://wiser.dicasmei.com.br/">
                <span class="pl-1 text-sm text-gray-600 dark:text-gray-50 underline">Wiser Dicas Mei</span>
              </a>,
              <a href="https://natura.dicasmei.com.br/">
                <span class="pl-1 text-sm text-gray-600 dark:text-gray-50 underline">Natura Dicas Mei</span>
              </a>
            </p>
          </article>
          <article class="border-b-2 border-gray-500">
            <h1 class="mt-8 text-xl text-left text-gray-800 dark:text-gray-200">
              Software Architect <span class="pl-1 text-sm text-gray-600 dark:text-gray-50">2020 - 2021</span>
            </h1>
            <p class="pl-2 text-lg">
              Atlas Technologies
            </p>
            <p class="pl-2 text-sm text-gray-700 dark:text-gray-100">
              <FontAwesomeIcon icon="location-dot" /> Pelotas - RS, Brazil
            </p>
            <p class="pt-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p class="pt-3">
              Technologies Used: <span class="pl-1 text-sm text-gray-600 dark:text-gray-50">Laravel, Vue, Redis and MySql.</span>
            </p>
            <p class="py-3">
              Public Projects:
              <a href="https://fatalmodel.com/">
                <span class="pl-1 text-sm text-gray-600 dark:text-gray-50 underline">Fatal Model</span>
              </a>
            </p>
          </article>
          <article class="border-b-2 border-gray-500">
            <h1 class="mt-8 text-xl text-left text-gray-700 dark:text-gray-100">
              Full Stack Developer <span class="pl-1 text-sm text-gray-600 dark:text-gray-50">2019 - 2020</span>
            </h1>
            <p class="pl-2 text-lg">
              WeCast
            </p>
            <p class="pl-2 text-sm text-gray-700 dark:text-gray-100">
              <FontAwesomeIcon icon="location-dot" /> Rio Grande - RS, Brazil
            </p>
            <p class="pt-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p class="pt-3">
              Technologies Used: <span class="pl-1 text-sm text-gray-600 dark:text-gray-50">Django, NodeJs, Flutter, Vue, React and MySql.</span>
            </p>
            <p class="py-3">
              Public Projects:
              <a href="https://multimarcas.online/">
                <span class="pl-1 text-sm text-gray-600 dark:text-gray-50 underline">Multimarcas.online</span>
              </a>
            </p>
          </article>
          <article class="border-b-2 border-gray-500">
            <h1 class="mt-8 text-xl text-left text-gray-700 dark:text-gray-100">
              Full Stack Developer <span class="pl-1 text-sm text-gray-600 dark:text-gray-50">2018 - 2018</span>
            </h1>
            <p class="pl-2 text-lg">
              Compasso LTDA
            </p>
            <p class="pl-2 text-sm text-gray-700 dark:text-gray-100">
              <FontAwesomeIcon icon="location-dot" /> Rio Grande - RS, Brazil
            </p>
            <p class="pt-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p class="py-2">
              Technologies Used: <span class="pl-1 text-sm text-gray-600 dark:text-gray-50">NodeJs, React Native, React and MySql.</span>
            </p>
          </article>
          <article>
            <h1 class="mt-8 text-xl text-left text-gray-700 dark:text-gray-100">
              Full Stack Developer <span class="pl-1 text-sm text-gray-600 dark:text-gray-50">2015 - Present</span>
            </h1>
            <p class="pl-2 text-lg">
              Soares Technologies
            </p>
            <p class="pl-2 text-sm text-gray-700 dark:text-gray-100">
              <FontAwesomeIcon icon="location-dot" /> Florianopolis - SC, Brazil
            </p>
            <p class="pt-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p class="py-2">
              Technologies Used: <span class="pl-1 text-sm text-gray-600 dark:text-gray-50">Laravel, NodeJs, Vue, React, React Native, Redis and MySql.</span>
            </p>
          </article>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
  body {
    @apply dark:bg-gray-900 dark:text-gray-50
      h-screen bg-gradient-to-r from-cyan-500 dark:from-gray-800 to-blue-500 dark:to-black;
  }
</style>
