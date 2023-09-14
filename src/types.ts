export interface CardProjectType {
    name: string;
    description: string;
    thumbnail: string;
    technologies: string[];
    deployUrl: string;
    repoUrl: string;
    slug: string;
}

export interface CardProjectWithIdType extends CardProjectType {
    id: number;
}

export interface DetailsProjectType {
    name: string;
    carouselScreenshots: string[];
    technologies: string[];
    deployUrl: string;
    repoUrl: string;
    longDescription: string;
}

export interface TechnologyBtnPropType {
    technology: string
}
