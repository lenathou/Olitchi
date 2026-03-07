import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NextImage from "next/image";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* Global Background Image */}
            <div className="fixed inset-0 -z-50 w-full h-full">
                <NextImage
                    src="/images/hero-bg-test.webp"
                    alt=""
                    fill
                    className="object-cover"
                    quality={90}
                    priority
                />
            </div>

            <header>
                <Header />
            </header>
            <main role="main">
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}
