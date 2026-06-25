import React, { useState, useEffect } from 'react';
import { Layout } from './components';
import { Home, About, Blog, BlogDetail, Contact } from './pages';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#');
      // Scroll smoothly to top on route change
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (hash) => {
    window.location.hash = hash;
  };

  // Render routing switcher
  const renderPage = () => {
    if (currentHash === '#about') {
      return <About />;
    }
    if (currentHash === '#blog') {
      return <Blog onNavigate={handleNavigate} />;
    }
    if (currentHash.startsWith('#blog-detail/')) {
      const postId = currentHash.split('/')[1];
      return <BlogDetail postId={postId} onNavigate={handleNavigate} />;
    }
    if (currentHash === '#contact') {
      return <Contact />;
    }
    return <Home />;
  };

  return (
    <Layout currentHash={currentHash} onNavigate={handleNavigate}>
      {renderPage()}
    </Layout>
  );
}

export default App;
