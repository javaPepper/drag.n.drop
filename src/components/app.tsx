import Footer from "./footer";
import Header from "./header";
import UsersList from "./usersList";


export default function App() {
  
  return (
    <>
      <header className="header">
        <div className="nav-container">
          <Header />
        </div>
      </header>
      <main>
        <UsersList/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
