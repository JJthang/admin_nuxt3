<template>
  <i
    :class="{
      'mh-icon': true,
      [`icon-${name}`]: true,
    }"
  ></i>
</template>
  
<script lang="ts" setup>
import { type IcomoonTypes } from "~/types/icomoon.types";

defineProps<{ name: IcomoonTypes }>();
</script>