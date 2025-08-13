<script setup lang="ts">
    import { reviewStore } from '../store';
    import { ref } from 'vue';

    const props = defineProps({ book_id: Number });

    reviewStore.actions.getAll();

    const reviewFilter = (review,id:Number) => {
        return review.id == id;
    }

    const reviews = reviewStore.getters.all;

    const bookReviews = reviews.value.filter(reviewFilter)
</script>
<template>

</template>