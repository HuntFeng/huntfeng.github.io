<template>
  <div
    class="flex flex-col hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer bg-muted border border-primary/30"
  >
    <div class="border-b border-primary/30 p-3">
      <div class="flex flex-col">
        <div class="flex justify-between">
          <UBadge
            v-if="project.category"
            variant="outline"
            color="primary"
            class="mb-3"
          >
            {{ project.category }}
          </UBadge>
          <UIcon
            name="i-heroicons-arrow-up-right"
            class="text-gray-400 w-5 h-5 mt-1"
          />
        </div>
        <h3 class="text-lg sm:text-2lg font-bold text-white">
          {{ project.title }}
        </h3>
      </div>
    </div>

    <div class="flex-auto p-3">
      <p v-if="project.description" class="text-gray-300">
        {{ project.description }}
      </p>
    </div>

    <div class="p-3 border-b border-primary/30">
      <div class="flex flex-wrap gap-2">
        <UBadge
          v-for="keyword in project.keywords"
          :key="keyword"
          variant="subtle"
          color="primary"
          size="md"
        >
          {{ keyword }}
        </UBadge>
      </div>
    </div>

    <div class="flex flex-wrap gap-2 p-3">
      <UButton :to="project.path" variant="solid" size="sm" @click.stop>
        View More
      </UButton>
      <UButton
        v-if="project.github"
        :to="project.github"
        target="_blank"
        variant="outline"
        size="sm"
        icon="i-heroicons-code-bracket"
        @click.stop
      >
        GitHub
      </UButton>
      <UButton
        v-if="project.paper"
        :to="project.paper"
        target="_blank"
        variant="outline"
        size="sm"
        icon="i-heroicons-document-text"
        @click.stop
      >
        Paper
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  project: {
    path: string;
    title: string;
    category?: string;
    description?: string;
    keywords?: string[];
    github?: string;
    paper?: string;
  };
}>();
</script>
