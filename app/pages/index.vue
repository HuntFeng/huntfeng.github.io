<template>
  <div class="min-h-screen bg-default">
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
              href="/resume.pdf"
              target="_blank"
              icon="i-heroicons-document-arrow-down"
              size="lg"
              variant="solid"
              color="primary"
              external
            >
              Download Resume
            </UButton>
            <UButton
              href="/cv.pdf"
              target="_blank"
              icon="i-heroicons-document-text"
              size="lg"
              variant="solid"
              color="primary"
              external
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
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
            Projects
          </h2>

          <!-- Filter Bar -->
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-3xl mx-auto mb-8"
          >
            <UInput
              v-model="searchQuery"
              placeholder="Search projects..."
              icon="i-heroicons-magnifying-glass"
              size="lg"
              class="w-full sm:flex-1"
            />
            <USelect
              v-model="selectedCategory"
              :items="categoryOptions"
              placeholder="All Categories"
              size="lg"
              class="w-full sm:w-48"
            />
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.path"
            :project="project"
            @click="() => $router.push(project.path)"
          />
        </div>

        <!-- No Results Message -->
        <div
          v-if="filteredProjects.length === 0"
          class="text-center py-12 text-gray-400"
        >
          No projects found matching your criteria.
        </div>
      </UContainer>
    </section>

    <footer class="py-8 border-t border-gray-200">
      <div class="text-center text-gray-400">
        © {{ currentYear }} {{ profile.name }}. Built with Nuxt & NuxtUI.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: "dark",
  },
});

const profile = {
  name: "Hunt Feng",
  title: "GPU Software Engineer & Computational Physicist",
  bio: "I'm Hunt Feng, a GPU software engineer and computational physicist passionate about high-performance computing and plasma simulations. With over three years of experience in C++/CUDA/Python development, I've optimized large-scale MHD and PIC codes on GPU clusters and explored machine learning applications such as Physics-Informed Neural Networks. My work bridges scientific computing and modern software engineering—from accelerating plasma simulations at General Fusion to leading a 3-person team building open-source tools with 4K+ downloads. I aim to advance HPC software for physics-driven research and simulation.",
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

const currentYear = new Date().getFullYear();

// Fetch projects from content
const { data: projects } = await useAsyncData("projects", () =>
  queryCollection("projects").order("date", "DESC").all(),
);

// Filter state
const searchQuery = ref("");
const selectedCategory = ref("All");

// Get unique categories
const categoryOptions = computed(() => [
  "All",
  ...Array.from(new Set(projects.value?.map((p) => p.category) || [])),
]);

// Filtered projects
const filteredProjects = computed(() => {
  if (!projects.value) return [];

  return projects.value.filter((project) => {
    const matchesSearch =
      searchQuery.value === "" ||
      project.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      project.description
        ?.toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      project.keywords?.some((k) =>
        k.toLowerCase().includes(searchQuery.value.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory.value === "All" ||
      project.category === selectedCategory.value;

    return matchesSearch && matchesCategory;
  });
});
</script>
