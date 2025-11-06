<template>
  <div class="min-h-screen bg-default">
    <!-- Back Button -->
    <section class="py-8 bg-default border-b border-gray-700">
      <UContainer>
        <UButton to="/" variant="ghost" icon="i-heroicons-arrow-left" size="sm">
          Back to Projects
        </UButton>
      </UContainer>
    </section>

    <!-- Project Detail -->
    <section class="py-16 bg-default">
      <UContainer>
        <article class="max-w-4xl mx-auto">
          <!-- Header -->
          <div class="mb-8">
            <UBadge
              v-if="project.category"
              variant="subtle"
              color="primary"
              class="mb-4"
            >
              {{ project.category }}
            </UBadge>
            <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4">
              {{ project.title }}
            </h1>
            <p v-if="project.description" class="text-xl text-gray-300 mb-6">
              {{ project.description }}
            </p>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-3 mb-6">
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

            <!-- Keywords -->
            <div v-if="project.keywords" class="flex flex-wrap gap-2">
              <UBadge
                v-for="keyword in project.keywords"
                :key="keyword"
                variant="subtle"
                color="primary"
              >
                {{ keyword }}
              </UBadge>
            </div>
          </div>

          <!-- Content -->
          <ContentRenderer
            v-if="project"
            :value="project"
            class="prose prose-invert max-w-none"
          />
        </article>
      </UContainer>
    </section>

    <footer class="py-8 border-t border-gray-200">
      <div class="text-center text-gray-400">
        © {{ currentYear }} Hunt Feng. Built with Nuxt & NuxtUI.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();

const route = useRoute();
const slug = route.params.slug as string;

const { data: project } = await useAsyncData(`project-${slug}`, () =>
  queryCollection("projects").path(`/projects/${slug}`).first(),
);

if (!project.value) {
  throw createError({
    statusCode: 404,
    message: "Project not found",
  });
}

useHead({
  title: project.value.title,
  htmlAttrs: {
    class: "dark",
  },
  meta: [
    {
      name: "description",
      content: project.value.description || project.value.title,
    },
  ],
});
</script>
