export interface MovieModel {
	id: number | string;
	image: string;
	name: string;
	movieUrl: string;
	releaseYear: string;
	genres: string[];
	rating: number;
	duration: string;
	description: string;
}
