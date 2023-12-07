import Footer from "./footer";
import NavBar from "./nav-bar";
import PostsList from "./posts-list";

export default function App() {
  return (
    <>
      <header className="header">
        <div className="nav-container">
          <NavBar />
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
