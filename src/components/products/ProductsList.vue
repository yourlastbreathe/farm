<template>
    <div>
        <app-product-card
            v-for="item in productList"
            :key="item.id"
            :title="item.title"
            :description="item.description"
            :img="item.img"
            :price="item.price"
            :weight="item.weight"
        />
    </div>
</template>

<script>
import { PRODUCTS_LIST } from '@/mocks/ProductList';
import ProductCard from './ProductCard.vue';

export default {
    name: 'ProductsList',
    components: {
        'app-product-card': ProductCard
    },
    computed: {
        productList() {
            return PRODUCTS_LIST
        }
    }
}
</script>