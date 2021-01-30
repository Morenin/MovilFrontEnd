
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
    cicle_name: string,
    num_candidates: number,
}

