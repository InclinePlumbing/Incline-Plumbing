import "./globals.css";

export const metadata = {
  title: "Incline Plumbing & Drain | Colorado Springs Plumber",
  description: "Colorado-native, locally owned residential plumbing and drain service in Colorado Springs and surrounding areas.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
