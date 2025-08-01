import { storeModuleFactory } from "../../services/store";
import { ref, computed, onMounted } from 'vue';

// // state
// const books = ref([]);

// // getters
// export const getAllBooks = computed(() => books.value);
// export const getBookById = (id:number) => computed(() => books.value.find(book => book.id == id));

// // actions
// export const fetchBooks = async () => {
//     const {data} = await getRequest('/books');
//     if(!data) return
//     books.value = data;
// };

// export const createBook = async (newBook) => {
//     const {data} = await postRequest('/books/create', newBook);
//     if(!data) return
//     books.value = data;
// };

// export const updateBook = async (id:number, updatedBook) => {
//     const { data } = await putRequest(`/books/${id}`, updatedBook);
//     if (!data) return;
//     books.value = data;
// };

// export const deleteBook = async (id) => {
//     await deleteRequest(`/books/${id}`);
//     books.value = books.value.filter(book => book.id !== id);
// };

const bookStore = storeModuleFactory('books');

// Haalt de lijst met boeken op bij het laden van de component
bookStore.actions.getAll();

export const addBook = async () => {
    await bookStore.actions.create({ title: 'Nieuw Boek', author: 'Auteur X' });
    // code...
};

export const updateBook = async (id) => {
    await bookStore.actions.update(id, { title: 'Aangepast Boek' });
    // code...
};

export const deleteBook = async (id) => {
    await bookStore.actions.delete(id);
    // works
};

export const books = bookStore.getters.all;

// Waarbij 1 het ID is van het boek dat je wilt ophalen uit de state
export const book = async(id) => bookStore.getters.getById(id);