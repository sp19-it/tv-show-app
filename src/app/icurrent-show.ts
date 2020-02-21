export interface ICurrentShow {
    name: string,
    genres: string[],
    rating: number | string,
    image: string,
    summary: string
}

export interface ICurrentShowList extends Array<ICurrentShow>{}
