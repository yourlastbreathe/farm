<template>
    <div class="header-logo">
        <img class="header-logo__img" src="../../../assets/img/logo.svg" alt="Логотип">
        <div class="header-logo__title">Фермерские продукты</div>
    </div>
</template>

<script>
    export default {
        name: 'BaseHeaderLogo'
    }
</script>

<style lang="scss" scoped>
    .header-logo {
        display: flex;
        align-items: center;
        gap: 24px;

        &__title {
            font-weight: 700;
            font-size: 28px;
            line-height: 32px;
        }
    }
</style>