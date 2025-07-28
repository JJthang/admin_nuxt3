<template>
  <CommonHeaderLanguage />
</template>

<script setup>
const { locale, t: $t } = useI18n();

useSeoMeta({
  title: $t("general.confirm_page_title"),
  ogTitle: $t("general.home_page_title"),
  description: $t("general.home_page_description"),
  ogDescription: $t("general.home_page_description"),
  twitterDescription: $t("general.home_page_description"),
  twitterCard: "app",
  ogImage:
    "https://d2ahiw9kb7is19.cloudfront.net/-/media/Mystays/Home/Around/002_Kamenoi_Atami_Annex.jpg?d=20220711T002654",
  twitterImage:
    "https://d2ahiw9kb7is19.cloudfront.net/-/media/Mystays/Home/Around/002_Kamenoi_Atami_Annex.jpg?d=20220711T002654",
});
</script>

<style lang="scss" scoped>
</style>