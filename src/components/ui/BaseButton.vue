<template>
  <div :class="`button button--${theme}`">
    {{ buttonText }}
  </div>
</template>

<script>
  export default {
    name: 'BaseButton',
    props: {
      buttonText: {
        type: String,
        required: true
      },
      theme: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button {
    padding: 17px 98px;
    background-color: #FC9B27;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 18px;
    line-height: 27px;
    font-weight: 700;

    &--link {
      background-color: transparent;
      color: black;
    }
  }
</style>