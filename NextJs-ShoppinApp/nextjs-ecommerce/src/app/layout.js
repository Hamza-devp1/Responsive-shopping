import './globals.css'; 
import Layout from '../layout/layout'; 

export const metadata = {
  title: 'My E-Commerce App',
  description: 'An amazing e-commerce app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Layout component wrapping all pages */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
