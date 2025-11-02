import localFont from "next/font/local";

export const zodiac = localFont({
    src: [
        { path: "./Zodiak-Light.woff2", weight: "200", style: "normal" },
        { path: "./Zodiak-Regular.woff2", weight: "400", style: "normal" },
        { path: "./Zodiak-Bold.woff2", weight: "700", style: "normal" },
    ],
    variable: "--font-zodiac",
    display: "swap",
});
