export interface ICurrentShowData {
    show: {
        name: string,
        genres: [
            string
        ],
        rating: {
            average: number | string
        },
        image: {
            medium: string
        },
        summary: string
    }
}

export interface ICurrentShowDataList extends Array<ICurrentShowData>{}


