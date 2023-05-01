import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { routes } from './routes';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div>
          <Header />
          <div className="relative flex">
            <Sidebar />
            <main className="my-4 ml-60 flex h-full w-full px-4">
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  {routes.map(({ path, component: Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                  ))}
                </Routes>
              </Suspense>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
