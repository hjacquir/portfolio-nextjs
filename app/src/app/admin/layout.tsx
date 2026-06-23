import {Navigation} from '@/components/Navigation'
import "../globals.css";

export default function AdminLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="experiences-layout">
            <header className="experiences-header">
                <p className="header-eyebrow">Portfolio · CV</p>
                <nav className="navigation">
                    <Navigation href="/admin" key="admin" startsWith="/admin/">
                        Accueil
                    </Navigation>
                    <Navigation href="/admin/experiences" key="admin-experience" startsWith="/admin/">
                        Expériences
                    </Navigation>
                </nav>
            </header>
            {children}
        </div>
    );
}
