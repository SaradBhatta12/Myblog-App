import "./globals.css";
import Navbar from "./comp/Navbar";

export const metadata = {
  title: "sarad-scribble",
  description: "made by sarad...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
