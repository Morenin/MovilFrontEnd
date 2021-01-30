export interface RespuestaN{
    success: boolean,
    data: Noticia[],
    message: string,

}


export interface Noticia{
    id: number,
    title: string,
    description: string,
    image: string,
    cicle_id: number,
    cicle_name: string,
    created_at: Date
}