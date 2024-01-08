import NavBar from './nav-bar';
import UsersList from './users-list';

export default function App() {
  return (
    <div className='container'>
      <main className="main-container">
        <UsersList />
        <NavBar />
      </main>
    </div>
  );
}
