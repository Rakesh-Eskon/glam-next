// src/app/layout.js
import './globals.css';

export const metadata = {
    title: 'Glam Blush | Best Makeup Academy in Mumbai',
    description: 'Glam Blush offers the best makeup artist courses in Mumbai. Become a certified expert with our industry-centric professional courses.',
    keywords: 'makeup academy mumbai, makeup courses mumbai, bridal makeup course, hairstyling course',
};

import '../styles/animate.css';
import '../styles/themify-icons.css';
import '../styles/bootstrap.css';
import '../styles/flexslider.css';
import '../styles/style.css';
import '../styles/correction.css';
import '../styles/swiper-bundle.min.css';
import '../styles/font-awesome.css';
import '../styles/styles.css';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
