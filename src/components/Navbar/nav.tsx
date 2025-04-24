// Navbar.tsx (React JSX)
export default function Navbar() {
    return (
      <nav className="bg-[#1f1f22] h-16 flex items-center justify-between px-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="w-6 h-6 flex items-center justify-center">
            <div className="relative w-6 h-6">
              {/* You can customize this part with your actual logo */}
              <div className="absolute inset-0 rounded-full border-4 border-[#f04e30] animate-spin-slow" />
              <div className="absolute inset-1 bg-[#1f1f22] rounded-full" />
            </div>
          </div>
        </div>
  
        {/* Connect Button */}
        <button className="flex items-center gap-2 bg-[#f04e30] hover:bg-[#e03e20] text-white px-4 py-2 rounded-md text-sm font-medium">
          <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
            <div className="w-2 h-2 bg-[#5e2dfd] rounded-full" />
          </div>
          Connect
        </button>
      </nav>
    );
  }
  