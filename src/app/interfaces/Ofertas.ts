export interface offers{
    success: boolean,
    data: Data[],
    message: string
}

export interface Data{
    id: number,
    headline: string,
    description: string,
    cicle_id: number,
    date_max: Date,
    num_candidates: number,
}

