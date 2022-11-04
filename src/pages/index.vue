<script setup>
import ThemeControl from '@/components/ThemeControl.vue';
import profileImageURL from '@/assets/img/profile.jpg';

</script>

<template>
  <ThemeControl />
  <main class="text-gray-700 dark:text-gray-100">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-3">
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
            <p class="mt-2 text-center text-gray-700 dark:text-gray-100">
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
          <div class="p-3 mx-3 mb-1 mt-4 bg-gray-200 dark:bg-slate-600 rounded-lg shadow-lg">
            <h1 class="mt-2 pb-1 text-2xl text-center text-gray-700 dark:text-gray-100 border-b border-gray-400">
              About Me
            </h1>
            <p class="mt-2 text-center text-gray-700 dark:text-gray-100">
              I started programming at the age of 12 as a hobby, and today I already have a long and successful career in the IT area,
              always aiming to bring new ideas and best practices to the market.
            </p>
          </div>
        </article>
        <div class="col-span-2 p-3 m-3 bg-gray-200 dark:bg-slate-800 rounded-lg shadow-lg lg:p-10 lg:pt-3">
          <article>
            <h1 class="mt-2 pb-1 text-center text-2xl text-gray-700 dark:text-gray-100 border-b border-gray-400">
              About My Career
            </h1>
            <aside class="border-b-2 border-gray-500">
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
                I work in the development and technical leadership of the main product Meu Negócio, focused in simplify the management of small business,
                and also with its other critical projects aimed at the financial market with high availability and demand.
                <br>
                Some of the clients are Natura, Avon, Febracis, Wiser, Ambev, Diamantes and thousands of small Brazilian entrepreneurs.
                <br>
                The projects are mainly built with Kubernetes, Gitlab is used as CD/CI and the infrastructure is entirely on AWS,
                using services as SQS, EC2, S3 and much more.
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
            </aside>
            <aside class="border-b-2 border-gray-500">
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
                I worked on the development and technical leadership of the main product Fatal Model.
                <br>
                I was responsible for the development of its plan subscription system, payment wallet,
                credit recovery, high demand and availability user stories mechanism and
                collection and management of critical user data in accordance with brazilian legislation (LGPD).
                <br>
                The projects were mainly built with docker, the infrastructure was mainly on AWS, using services as SQS, EC2, S3 and Lambda
                and some on Digital Ocean as part of the legacy infrastructure.
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
            </aside>
            <aside class="border-b-2 border-gray-500">
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
                I worked on the development and technical leadership of the main product Multimarcas.online, and some side projects.
                <br>
                I was responsible for the development of the core functionalities of the Multimarcas.online platform,
                and its custom websites that were offered to customers that opt in for premium plans,
                also developed microservices to get data about vehicles prices in the current market according to FIPE and
                its mobile application for vehicles stock management on the lot.
                <br>
                Also worked on some side projects for the company as the management system for cargo dispatch and loan control for Reiter Log branches.
                <br>
                The projects were mainly built with docker, the infrastructure was mainly on Digital Ocean.
                <br>
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
            </aside>
            <aside class="border-b-2 border-gray-500">
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
                I worked on the development in the pilot projet Compasso Labs,
                that had the goal of exploring new technologies for the growing market of the era, mostly with Google Cloud.
                <br>
                I was responsible for the development of chatbots with dialogflow and winston,
                with the goal of checking its viability fo the common demands of the time.
                <br>
                The projects were mainly built with docker and cloud tools provided,
                the infrastructure was mainly on Google Cloud And IBM Cloud.
              </p>
              <p class="py-2">
                Technologies Used: <span class="pl-1 text-sm text-gray-600 dark:text-gray-50">NodeJs, React Native, React and MySql.</span>
              </p>
            </aside>
            <aside>
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
                I work as developer and manager, this being my front company to work on most of my contracts in the market.
                <br>
                I had developed landing pages for publicity campaigns,
                management systems and ecommerce platforms for multiple companies and entities.
                <br>
                Most of the projects are hosted on AWS and Heroku, using various resources from both  according to its demands.
              </p>
              <p class="py-2">
                Technologies Used: <span class="pl-1 text-sm text-gray-600 dark:text-gray-50">Laravel, NodeJs, Vue, React, React Native, Redis and MySql.</span>
              </p>
            </aside>
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
