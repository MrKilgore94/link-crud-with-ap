import { Link, Outlet } from 'react-router-dom';
import "./App.css"


function App() {
  return (
    <div id="App">
      <h1>Links App</h1>
      <nav
        style={{
          borderTop:'3px solid',
          borderBottom:'3px solid'
        }}
        >
          <Link to='/'>Links</Link> - {' '}
          <Link to='/about'>About</Link> - {' '}
          <Link to='/links/new'>New link</Link>
        </nav>
        <Outlet />
    </div>
  );
}

export default App;