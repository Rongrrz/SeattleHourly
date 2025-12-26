import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { useEffect } from 'react';
import { FetchServer } from './stores/FetchServer';

export function App() {
  useEffect(() => {
    // Update our data with data from server.
    FetchServer();

    // Attempts to refresh every 30 seconds.
    const id = setInterval(() => {
      FetchServer();
    }, 30_000);

    return () => clearInterval(id);
  }, []);

  return (
    <BrowserRouter basename="/">
      <div className="flex min-h-screen flex-col bg-neutral-950 text-neutral-100">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
