export interface ProjectType {
    id: number;
    name: string;
    description: string;
    screenshot: string;
    technologies: string[];
    deployUrl: string;
    repoUrl: string;
}

export interface ProjectCardPropType {
    name: string;
    description: string;
    screenshot: string;
    technologies: string[];
    deployUrl: string;
    repoUrl: string;
}

export interface TechnologyBtnPropType {
    technology: string
}

// export interface TechnologiesType{
//     HTML: JSX.Element;
//     CSS: JSX.Element;
//     Tailwind: JSX.Element;
//     JavaScript: JSX.Element;
//     TypeScript: JSX.Element;
//     React: JSX.Element;
//     "Next.js": JSX.Element;
// }