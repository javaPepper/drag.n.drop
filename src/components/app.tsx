import Footer from './footer';
import Header from './header';
import UsersList from './users-list';

export default function App() {
  return (
    <>
      <header className="header">
        <div className="nav-container">
          <Header />
        </div>
      </header>
      <main>
        <div className="main-container">
          <UsersList />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
