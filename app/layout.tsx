// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../components/CartContext";
import CartDisplay from "../components/CartDisplay";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple E-Commerce Demo",
  description: "A simple e-commerce demo application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 text-white p-2 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">StyleStore</h1>
              </div>

              <nav className="hidden md:flex items-center space-x-6">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Products
                </Link>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </nav>

              <CartDisplay />
            </div>
          </header>

          <main>{children}</main>

          <footer className="bg-gray-900 text-white py-8 mt-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">StyleStore</h3>
                  <p className="text-gray-400">
                    Your destination for premium fashion and lifestyle products.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-300">
                    SHOP
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>
                      <Link
                        href="/"
                        className="hover:text-white transition-colors"
                      >
                        All Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="hover:text-white transition-colors"
                      >
                        New Arrivals
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="hover:text-white transition-colors"
                      >
                        Sale
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-300">
                    SUPPORT
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>
                      <Link
                        href="/"
                        className="hover:text-white transition-colors"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="hover:text-white transition-colors"
                      >
                        Shipping Info
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="hover:text-white transition-colors"
                      >
                        Returns
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-gray-300">
                    CONNECT
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>
                      <Link
                        href="/"
                        className="hover:text-white transition-colors"
                      >
                        Newsletter
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="hover:text-white transition-colors"
                      >
                        Social Media
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
                <p>
                  &copy; {new Date().getFullYear()} StyleStore. All rights
                  reserved.
                </p>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
