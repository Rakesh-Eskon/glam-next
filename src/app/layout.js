// src/app/layout.js
import './globals.css'; // Global styles


import '../styles/animate.css';
import '../styles/themify-icons.css';
import '../styles/bootstrap.css';
import '../styles/flexslider.css';
import '../styles/style.css';
import '../styles/correction.css';
import '../styles/swiper-bundle.min.css';
import '../styles/font-awesome.css';
// import '../styles/styles.css';
import '../styles/styles.css';


import Header from './components/common/Header'; // Correct path to Header
import Footer from './components/common/Footer'; // Correct path to Footer

// import useHeader from './hooks/useHeader'; // Adjust the path as needed



// import '/assets/css/styles.css'; 

export default function RootLayout({ children }) {
    // const { navbarClass, toggleSubmenu } = useHeader();
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
