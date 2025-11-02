import localFont from "next/font/local";

export const plusJakarta = localFont({
    src: [
        {
            path: "./PlusJakartaSans-Light.woff2",
            weight: "200",
            style: "normal",
        },
        {
            path: "./PlusJakartaSans-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./PlusJakartaSans-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-plusJakarta",
    display: "swap",
});
