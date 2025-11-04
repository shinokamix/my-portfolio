export type projectItem = {
    id: string;
    title: string;
    link: string;
    imageSrc: string;
    color: string;
};

export const projectsList: projectItem[] = [
    {
        id: "1",
        title: "Crypto Tracker",
        link: "https://github.com/shinokamix/crypto-tracker",
        imageSrc: "/cryptoTrackerDemo.gif",
        color: "",
    },
    {
        id: "2",
        title: "Portfolio Website",
        link: "",
        imageSrc: "/portfolioDemo.gif",
        color: "",
    },
];
