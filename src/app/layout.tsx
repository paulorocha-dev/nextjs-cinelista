import type { Metadata } from "next";
import "@/app/styles/globals.css";
import Header from "@/app/components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Cinelista",
  description:
    "No Cinelista, você encontra os títulos mais populares, em alta e melhor avalidados em um só lugar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
