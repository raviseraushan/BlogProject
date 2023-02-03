import axios from 'axios';

const api = axios.create({
    baseURL: process.env.BASEURL,
    headers: {
        Authorization: `Bearer ${process.env.APIKEY}`
    }
})

export const fetchposts = async (query:string) => api.get(`/api/posts?${query}`);