<template>
  <div class="404 h-screen flex flex-col">
    ERROR
    <!-- <CommonHeaderLanguage />
    <CommonHeader />
    <MhContainer class="flex-1">
      <div
        v-if="error.statusCode === 404 || '404'"
        class="not-found flex flex-col items-center justify-center w-full h-full"
      >
        <h2 class="text-2xl">Oops !!!</h2>
        <h2 class="text-2xl">
          We can’t seem to find the page you’re looking for.
        </h2>
        <p>Either something went wrong or the page doesn’t exist anymore.</p>
      </div>

      <div v-else class="mt-7 mx-auto text-center card">
        <MhButton class="my-7" variant="blue" @click="handleError">
          Go Home...
        </MhButton>

        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Ooops.</p>
        <p class="mt-7 text-error-dark">{{ error.message }}</p>
        <MhButton class="my-7 py-2 px-4" variant="blue" @click="handleError">
          Go Home...
        </MhButton>
      </div>
    </MhContainer>
    <CommonFooter /> -->
  </div>
</template>

<script setup lang="ts">
// defineProps<{
//   error: {
//     statusCode: number;
//     message: string;
//   };
// }>();

// const handleError = () => clearError({ redirect: "/" });
</script>
