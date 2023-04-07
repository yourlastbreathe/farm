<template>
    <div>
        <app-products-list />
    </div>
</template>

<script>
import ProductsList from '@/components/products/ProductsList.vue';

export default {
    name: 'ProductsPage',
    components: {
        'app-products-list': ProductsList
    }
}
</script>