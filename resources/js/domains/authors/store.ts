import { getRequest, postRequest, putRequest, deleteRequest } from "../../services/http";
import { ref, computed } from 'vue';
import { storeModuleFactory } from "../../services/store";

export const authorStore = storeModuleFactory('authors');