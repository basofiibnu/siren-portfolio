const MainTemplate = ({ children }: { children: React.ReactNode }) => (
  <div className="container mx-auto p-4">
    <header className="mb-4">
      <h1>My App</h1>
    </header>
    <main>{children}</main>
    <footer className="mt-4">
      <p>Footer content</p>
    </footer>
  </div>
);

export default MainTemplate;
