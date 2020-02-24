export interface ICurrentShow {
    name: string,
    genres: string[],
    rating: number | string,
    image: string,
    website: string,
    summary: string
}

export interface ICurrentShowList extends Array<ICurrentShow>{}
