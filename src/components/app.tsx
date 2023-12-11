import Footer from "./footer";
import NavBar from "./nav-bar";
import PostsList from "./posts-list";

export default function App() {
  const userId = 1;
  return (
    <>
      <header className="header">
        <div className="nav-container">
          <NavBar />
        </div>
      </header>
      <main>
        <PostsList
        id={userId}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
