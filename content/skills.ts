export type skill = {
    id: string;
    name: string;
    link: string;
    main: boolean;
};

export const skills: skill[] = [
    {
        id: "1",
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
        main: true,
    },
    {
        id: "2",
        name: "React",
        link: "https://react.dev/",
        main: true,
    },
    {
        id: "3",
        name: "Next.js",
        link: "https://nextjs.org/",
        main: true,
    },
    {
        id: "4",
        name: "Zustand",
        link: "https://zustand-demo.pmnd.rs/",
        main: true,
    },
    {
        id: "5",
        name: "Redux",
        link: "https://redux.js.org/",
        main: true,
    },
    {
        id: "6",
        name: "SWR",
        link: "https://swr.vercel.app/",
        main: true,
    },
    {
        id: "7",
        name: "Git",
        link: "https://git-scm.com/",
        main: false,
    },
    {
        id: "8",
        name: "Figma",
        link: "https://www.figma.com/",
        main: false,
    },
];
