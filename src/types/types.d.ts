export interface MovieApp {
    total: number;
    entries: Entry[];
}

export interface Entry {
    title: string;
    description: string;
    programType: ProgramType;
    images: {
        'Poster Art': Image;
    };
    releaseYear: number;
}


export enum ProgramType {
    Movie = "movie",
    Series = "series",
}
