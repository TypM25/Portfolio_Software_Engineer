import type { Metadata } from "next";
import "./globals.css";
import "@ant-design/v5-patch-for-react-19";
import "antd/dist/reset.css";
import { ConfigProvider, theme } from "antd";


export const metadata: Metadata = {
  title: "Portfolio | Full Stack Developer",
  description: "Portfolio of a full stack developer with a focus on React, Next.js, and Node.js",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
    shortcut: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/golane" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased`}>
        <ConfigProvider
          theme={{
            algorithm: theme.defaultAlgorithm,
            token: {
              colorPrimary: "#4C8DFF",
              borderRadius: 12,
              fontFamily:
                "Golane, Montserrat, Poppins, Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
