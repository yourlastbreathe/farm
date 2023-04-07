<template>
    <div class="product-card">
        <!-- <img :src="img" :alt="title"> -->
        <div class="product-card__content">
            <div class="product-card__content-title">
                {{ title }}
            </div>
            <div class="product-card__content-desciption">
                {{ description }}
            </div>
            <div class="product-card__content-price">
                {{ price }} руб. / {{ weight }} гр.
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductCard',
        props: {
            title: {
                type: String,
                required: true
            },
            img: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            weight: {
                type: Number,
                required: true
            },
        }
    }
</script>

<style></style>