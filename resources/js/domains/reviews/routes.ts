import BookReviews from "./components/BookReviews.vue";
import Edit from "./pages/Edit.vue";

export const reviewRoutes = [
    {path: '/reviews', Component: BookReviews, name: 'reviews.show'},
    {path: '/reviews/:id/edit', component: Edit, name: 'reviews.edit'},
];