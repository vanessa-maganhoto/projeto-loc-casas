export type Imovel = {
    id: number;
    title: string;
    score: number;
    count: number;
    image: string;
}

export type ImovelPage = {
    content: Imovel[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}