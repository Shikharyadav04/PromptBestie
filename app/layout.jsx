import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Prompt-Finder",
  description: "Discover new Fonts",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="eng">
      <body>
        <div className="main ">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default Rootlayout;
