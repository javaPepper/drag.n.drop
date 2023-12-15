import Footer from "./footer";
import Header from "./header";
// import PostsList from "./posts-list";
import UsersList from "./usersList";


export default function App() {
  // const userId = 1;
  return (
    <>
      <header className="header">
        <div className="nav-container">
          <Header />
        </div>
      </header>
      <main>
        <UsersList/>
        {/* <PostsList
        id={userId}/> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
