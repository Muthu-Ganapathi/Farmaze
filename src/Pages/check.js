import logo from '../logo.svg';
import '../App.css';
// import { withRouter } from 'react-router-dom';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';

// function withRouter(Component) {
//   function ComponentWithRouterProps(props) {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const params = useParams();

//     return <Component {...props} router={{ location, navigate, params }} />;
//   }

//   return ComponentWithRouterProps;
// }
function Check() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloadsdfsdfdsfds.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Check;
