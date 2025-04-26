import Button from "../reuseablebutton/button";

export default function Navbar() {
  return (
    <nav className="bg-[#1f1f22] h-16 flex items-center justify-between px-4">

      <div className="flex items-center">
        <div className="w-6 h-6 flex items-center justify-center">
          <div className="relative w-6 h-6">
           
            <div className="absolute inset-0 rounded-full border-4 border-[#f04e30] animate-spin-slow" />
            <div className="absolute inset-1 bg-[#1f1f22] rounded-full" />
          </div>
        </div>
      </div>
      <Button />
    </nav>
  );
}
