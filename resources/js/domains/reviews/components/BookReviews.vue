<script setup lang="ts">
    import { reviewStore } from '../store';
    import Form from './Form.vue';

    const props = defineProps({ book_id: Number });

    reviewStore.actions.getAll();

    const reviewFilter = (review) => {
        return review.book_id == props.book_id;
    }

    const reviews = reviewStore.getters.all;

    const bookReviews = reviews.value.filter(reviewFilter);

    console.log(bookReviews);
</script>
<template>
    <Form />
    <table>
            <tr>
                <th>User</th>
                <th>Review</th>
            </tr>
            <tr v-for="review in bookReviews" :key="index">
                <td>User Placeholder</td>
                <td>{{ review.content }}</td>
            </tr>
        </table>
</template>