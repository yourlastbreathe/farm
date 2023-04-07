<template>
    <div class="header">
        <app-base-header-logo />
        <app-base-button
         button-text="Главная"
         theme="link"
         @click="goToTest($event)"
         />
    </div>
</template>

<script>
import BaseButton from '../BaseButton.vue';
import BaseHeaderLogo from './BaseHeaderLogo.vue';

    export default {
        name: 'BaseHeader',
        components: {
            'app-base-header-logo': BaseHeaderLogo,
            'app-base-button': BaseButton
        },
        methods: {
            goToTest(event) {
                console.log(event);
                this.$router.push({
                    name: 'TestPage',
                    query: {
                        page: 'test'
                    },
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        padding: 10px 90px;
        justify-content: space-between;
        align-items: center;
    }
</style>