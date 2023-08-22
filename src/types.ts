export interface ProjectType {
    id: number;
    name: string;
    description: string;
    screenshot: string;
    technologies: string[];
    deploy_url: string;
    repo_url: string;
}

// export interface TechnologiesType{
//     html: JSX.Element;
//     css: JSX.Element;
//     tailwind: JSX.Element;
//     js: JSX.Element;
//     ts: JSX.Element;
//     react: JSX.Element;
//     next: JSX.Element;
//     cloudinary: JSX.Element;
// }