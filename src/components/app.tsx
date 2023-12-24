import Footer from './footer';
import Header from './header';
import UsersList from './users-list';

export default function App() {
  return (
    <div className='container'>
      <header>
        <div className="nav-container">
          <Header />
        </div>
      </header>
      <main className="main-container">
        <UsersList />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
