<script setup lang="ts">
    import { bookStore } from '../store';
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute();
    const router = useRouter();
    const book = bookStore.getters.getById(route.params.id);
</script>

<template>
    <div>
        <table>
            <tr>
                <th>Title:{{ book.title }}</th>
                <th>Author:</th>
            </tr>
            <tr>
                <td>{{ book.summary }}</td>
            </tr>
        </table>
    </div>
    <div>
        <table>
            <tr>
                <th>User</th>
                <th>Review</th>
            </tr>
            <tr v-for="review in reviews" :key="index">
                <td>User Placeholder</td>
                <td>{{ review.content }}</td>
            </tr>
        </table>
    </div>
</template>