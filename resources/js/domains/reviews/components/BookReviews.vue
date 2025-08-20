<script setup lang="ts">
    import { reviewStore } from '../store';
    import Form from './Form.vue';
    import { computed } from 'vue';

    const props = defineProps({ book_id: Number });

    reviewStore.actions.getAll();


    const addReview = async (data) => {
        await reviewStore.actions.create(data);
    };

    const deleteReview = async (id) => {
        await reviewStore.actions.delete(id);
    };

    const handleSubmit = async (data) => {
        addReview(data); 
    };

    const review = {
        "book_id": props.book_id,
        "content": ''
    }


    const reviews = reviewStore.getters.all;

    const bookReviews = computed(()=>reviews.value.filter(reviewFilter));

    const reviewFilter = (review) => {
        return review.book_id == props.book_id;
    }

    
</script>
<template>
    <Form :review='review' @submit="handleSubmit"/>
    <table>
            <tr>
                <th>User</th>
                <th>Review</th>
            </tr>
            <tr v-for="review in bookReviews">
                <td>User Placeholder</td>
                <td>{{ review.content }}</td>
                <td>
                    <button @click="deleteReview(review.id)">Verwijder</button>
                    <RouterLink :to="{ name: 'reviews.edit', params: { id: review.id } }">Bewerk</RouterLink>
                </td>
            </tr>
        </table>
</template>