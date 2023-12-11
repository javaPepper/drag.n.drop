import Footer from "./footer";
import Header from "./header";
import PostsList from "./posts-list";

export default function App() {
  return (
    <>
      <header className="header">
        <div className="nav-container">
          <Header />
        </div>
      </header>
      <main>
        <PostsList />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
