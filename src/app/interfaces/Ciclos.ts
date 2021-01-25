import { Url } from "url";

export interface Ciclos{
    id: number,
    name: String,
    img: String
}

export interface Ofertas{
    id: number,
    headline: string,
    description: string,
    date_max: Date,
    num_candidates: number,
}

export interface Noticias{
    id: number,
    title: string,
    description: string,
    image: string,
    cicle_id: number,
    cicle_name: string,
    created_at: Date,
}