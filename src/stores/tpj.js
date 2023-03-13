import { defineStore } from 'pinia';
import axios from 'axios';

export const useTpjStore = defineStore({
    id: 'tpj',
    state: () => ({
        url: 'https://server-tpj-api.up.railway.app/',
    }),
    actions: {

    }
})

