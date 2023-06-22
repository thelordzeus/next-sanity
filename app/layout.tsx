import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { getPages } from "@/sanity/utils/fetchData";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "awesome site",
  description: "Generated for learning purposes",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get all of the pages

  const pages = await getPages();
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            Zeus
          </Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link href={`/${page.slug}`} key={page._id}>
                {page.title}
              </Link>
            ))}
          </div>
        </header>

        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
