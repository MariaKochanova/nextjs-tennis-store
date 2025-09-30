import { FC } from 'react';
import { Layout } from '@/components/layout/layout';
import './global.css';

const RootLayout: FC<Readonly<{ children: React.ReactNode }>> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}

export default RootLayout;