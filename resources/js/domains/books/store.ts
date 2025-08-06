import { storeModuleFactory } from "../../services/store";
import { ref, computed, onMounted } from 'vue';

export const bookStore = storeModuleFactory('books');