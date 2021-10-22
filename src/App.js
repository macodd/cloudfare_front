import { Router } from "@reach/router";

import 'bootstrap/dist/css/bootstrap.min.css';

import Posts from './components/posts'


function App() {
  return (
    <Router>
      <Posts path="/" />
    </Router>
  );
}

export default App;
