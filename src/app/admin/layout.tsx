export const metadata = {
    title: {
        default: "Admin — O'Litchi",
        template: "%s | Admin O'Litchi",
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
