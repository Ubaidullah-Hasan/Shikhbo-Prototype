import Navbar from "./components/shared/Navbar";

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white"> 
        <Navbar />
        
        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto p-8">
          <h1 className="text-4xl font-bold mt-10">শিখবো প্রোটোটাইপ এ স্বাগতম!</h1>
        </div>
      </div>
    </>
  );
}

export default App;
