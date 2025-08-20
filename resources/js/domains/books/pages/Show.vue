<script setup lang="ts">
    import { bookStore } from '../store';
    import { useRoute } from 'vue-router';
    import BookReviews from '../../reviews/components/BookReviews.vue';
    // import { authorStore } from '../../authors/store';


    const route = useRoute();

    bookStore.actions.getAll();
    
    const book = bookStore.getters.getById(route.params.id);
    console.log(book.value);
    // const author = authorStore.getters.getById(book.value.author_id);
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
        <BookReviews :book_id="book.id"/>
    </div>
</template>