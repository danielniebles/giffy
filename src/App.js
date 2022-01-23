import React, { Suspense } from "react"
import './App.css';
import { Link, Route } from "wouter";
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

const HomePage = React.lazy(() => import('./pages/Home'))

function App() {
  return (
    <StaticContext.Provider value={{ name: 'Simona' }}>

      <div className="App">
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img alt='Giffy logo' src='/logo.png' />
            </figure>
          </Link>
          <GifsContextProvider>
            <Route component={SearchResults} path="/search/:keyword/:rating?" />
            <Suspense fallback={null}>
              <Route component={HomePage} path="/"></Route>
            </Suspense>
            <Route component={Detail} path="/gif/:id"></Route>
            <Route component={() => <h1>Error :c</h1>} path="/error" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
