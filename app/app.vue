<template>
  <div class="min-h-screen bg-default">
    <NuxtRouteAnnouncer />

    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <UContainer class="py-20 sm:py-32">
        <div class="text-center space-y-8">
          <div class="space-y-4">
            <h1 class="text-4xl sm:text-6xl font-bold text-white">
              {{ profile.name }}
            </h1>
            <p class="text-xl sm:text-2xl text-gray-300">
              {{ profile.title }}
            </p>
            <p class="text-lg text-gray-400 max-w-2xl mx-auto">
              {{ profile.bio }}
            </p>
          </div>

          <!-- Resume/CV Downloads -->
          <div class="flex flex-wrap justify-center gap-3">
            <UButton
              to="/resume.pdf"
              target="_blank"
              icon="i-heroicons-document-arrow-down"
              size="lg"
              variant="solid"
              color="primary"
            >
              Download Resume
            </UButton>
            <UButton
              to="/cv.pdf"
              target="_blank"
              icon="i-heroicons-document-text"
              size="lg"
              variant="solid"
              color="primary"
            >
              Download CV
            </UButton>
          </div>

          <!-- Social Links -->
          <div class="flex flex-wrap justify-center gap-3">
            <UButton
              v-for="link in profile.links"
              :key="link.label"
              :to="link.url"
              target="_blank"
              :icon="link.icon"
              size="md"
              variant="outline"
              color="primary"
            >
              {{ link.label }}
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Projects Section -->
    <section class="py-16 sm:py-24 bg-default">
      <UContainer>
        <div class="text-center mb-8">
          <h2 class="text-3xl sm:text-4xl font-bold text-white">
            Research Projects
          </h2>
        </div>

        <div class="space-y-16 max-w-5xl mx-auto">
          <article
            v-for="project in projects"
            :key="project._path"
            class="bg-muted rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <!-- Project Header -->
            <div class="p-3 sm:px-5 border-b border-gray-700">
              <h3 class="text-2xl sm:text-3xl font-bold text-white mb-2">
                {{ project.title }}
              </h3>

              <div class="flex flex-wrap gap-3">
                <UButton
                  v-if="project.github"
                  :to="project.github"
                  target="_blank"
                  icon="i-heroicons-code-bracket"
                  variant="solid"
                  color="primary"
                >
                  View Code
                </UButton>
                <UButton
                  v-if="project.paper"
                  :to="project.paper"
                  target="_blank"
                  icon="i-heroicons-document-text"
                  variant="outline"
                >
                  Read Paper
                </UButton>
              </div>
            </div>

            <!-- Project Content -->
            <ContentRenderer :value="project" class="prose p-4 sm:px-8" />

            <div
              v-if="project.keywords"
              class="border-t border-gray-700 flex flex-wrap gap-2 p-3 sm:p-5"
            >
              <UBadge
                v-for="keyword in project.keywords"
                :key="keyword"
                variant="subtle"
                color="primary"
              >
                {{ keyword }}
              </UBadge>
            </div>
          </article>
        </div>
      </UContainer>
    </section>

    <footer class="py-8 border-t border-gray-200">
      <div class="text-center text-gray-400">
        © {{ new Date().getFullYear() }} {{ profile.name }}. Built with Nuxt &
        NuxtUI.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: "dark", // Force dark mode
  },
});

const profile = {
  name: "Hunt Feng",
  bio: "I’m Hunt Feng, a GPU software engineer and computational physicist passionate about high-performance computing and plasma simulations. With over three years of experience in C++/CUDA/Python development, I’ve optimized large-scale MHD and PIC codes on GPU clusters and explored machine learning applications such as Physics-Informed Neural Networks. My work bridges scientific computing and modern software engineering—from accelerating plasma simulations at General Fusion to leading a 3-person team building open-source tools with 4K+ downloads. I aim to advance HPC software for physics-driven research and simulation.",
  links: [
    {
      label: "GitHub",
      url: "https://github.com/huntfeng",
      icon: "i-heroicons-code-bracket",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/huntfeng",
      icon: "i-heroicons-briefcase",
    },
    {
      label: "Email",
      url: "mailto:hunt.feng@usask.ca",
      icon: "i-heroicons-envelope",
    },
  ],
};

// Fetch projects from content
const { data: projects } = await useAsyncData("projects", () =>
  queryCollection("projects").order("date", "DESC").all(),
);
</script>
