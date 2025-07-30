import axios from 'axios';
import { ref, computed } from 'vue';

// state
const authors = ref([]);

// getters
export const getAllAuthors = computed(() => authors.value);
export const getAuthorById = (id:number) => computed(() => authors.value.find(author => author.id == id));

// actions
export const fetchAuthors = async () => {
    const {data} = await axios.get('/api/authors');
    if(!data) return
    authors.value = data;
};

export const createAuthor = async (newAuthor) => {
    const {data} = await axios.post('/api/authors', newAuthor);
    if(!data) return
    authors.value = data;
};

export const updateAuthor = async (id:number, updatedAuthor) => {
    const { data } = await axios.put(`/api/authors/${id}`, updatedAuthor);
    if (!data) return;
    authors.value = data;
};

export const deleteAuthor = async (id) => {
    await axios.delete(`/api/authors/${id}`);
    authors.value = authors.value.filter(author => author.id !== id);
};