import Footer from "./footer";
import Header from "./header";
import UsersList from "./usersList";


export default function App() {
  
  const userId = 3;
  return (
    <>
      <header className="header">
        <div className="nav-container">
          <Header />
        </div>
      </header>
      <main>
        <UsersList/>
        <div className="main-container">
          <PostsList
          id={userId}/>
          <div className="button">
            <button className="back-button">Back</button>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
