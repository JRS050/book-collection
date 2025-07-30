import { getRequest, postRequest, putRequest, deleteRequest } from "../../services/http";
import { ref, computed } from 'vue';

// state
const books = ref([]);

// getters
export const getAllBooks = computed(() => books.value);
export const getBookById = (id:number) => computed(() => books.value.find(book => book.id == id));

// actions
export const fetchBooks = async () => {
    const {data} = await getRequest('/books');
    if(!data) return
    books.value = data;
};

export const createBook = async (newBook) => {
    const {data} = await postRequest('/books/create', newBook);
    if(!data) return
    books.value = data;
};

export const updateBook = async (id:number, updatedBook) => {
    const { data } = await putRequest(`/books/${id}`, updatedBook);
    if (!data) return;
    books.value = data;
};

export const deleteBook = async (id) => {
    await deleteRequest(`/books/${id}`);
    books.value = books.value.filter(book => book.id !== id);
};