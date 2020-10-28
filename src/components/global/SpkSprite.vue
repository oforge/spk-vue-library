<template>
  <!--
    This is a sample svg sprite. It consists of multiple svg icons that are used as symbols.
    First you have to load that sprite file anywhere in your app. Later in the code you load the icon via:
    <svg class="icon icon--chevron-up">
        <use xlink:href="#icon-3d410685" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
    </svg>
-->
  <svg display="none" xmlns="http://www.w3.org/2000/svg">
    <symbol id="chevron" viewBox="0 0 23.8 36.7">
      <path fill="none" d="M-1-1h802v602H-1z" />
      <path d="M18.4 35.8l4.6-4.6-13-13L22.8 5.6 18.2.9 1 18.3l17.5 17.5z" />
    </symbol>

    <symbol id="cross" viewBox="0 0 32 32">
      <path d="M10 14.3l17 17.2 4.7-4.6L4.7.5.3 4.9z" />
      <path d="M14.5 22L31.7 5 27.1.3.7 27.3l4.4 4.4z" />
    </symbol>
    <slot></slot>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'IconSprite'
});
</script>
