<template>
  <div>
    <app-base-header />
    <router-view />
  </div>
</template>

<script>
import BaseHeader from './components/ui/header/BaseHeader.vue';

  export default {
    name: 'App',
    components : {
      'app-base-header': BaseHeader
    }
  }
</script>