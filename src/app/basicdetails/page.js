import Navbar from "../components/Navbar";

// App component to render the Navbar
const App = () => {
  return (
    // Tailwind CSS CDN for quick setup in a single HTML file
    // In a Next.js project, Tailwind is typically configured via postcss.config.js and tailwind.config.js
    // and imported in global CSS. For this self-contained example, we include the CDN.
    <>
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Configure Tailwind to use custom colors and fonts (simulated) */}
     
   
      <Navbar />
      <div className="p-8 text-center text-gray-700">
        <h1 className="text-2xl font-bold">Welcome to the Page!</h1>
        <p className="mt-2">The Navbar above is now correctly rendered.</p>
      </div>
    </>
  );
};

export default App; // Export the main App component