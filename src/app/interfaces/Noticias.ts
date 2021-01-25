export interface articles{
    success: boolean,
    data: Data[],
    message: string
}

export interface Data{
    id: number,
    title: string,
    description: string,
    image: string,
    cicle_id: number,
    cicle_name: string,
    created_at: Date
}