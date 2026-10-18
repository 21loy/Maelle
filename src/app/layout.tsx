import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Maelle — Private Experiences", description: "Un espace privé, élégant et confidentiel.", robots: {index:false,follow:false} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="fr"><body>{children}</body></html>; }
