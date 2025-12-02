import type { Metadata } from "next";
import "./globals.css";
import "@ant-design/v5-patch-for-react-19";
import "antd/dist/reset.css";
import { ConfigProvider, theme } from "antd";


export const metadata: Metadata = {
  title: "Portfolio | Software Engineer",
  description: "Portfolio of a software engineer focused on scalable systems, React, Next.js, and Node.js",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "16x16" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/icon.png" }],
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
        <link rel="icon" href="/icon.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" sizes="180x180" />
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
