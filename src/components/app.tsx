// import Footer from './footer';
import NavBar from './nav-bar';
import UsersList from './users-list';

export default function App() {
  return (
    <div className='container'>
      {/* <header>
        <div className="nav-container">
          <NavBar />
        </div>
      </header> */}
      <main className="main-container">
        <UsersList />
        <NavBar />
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}
