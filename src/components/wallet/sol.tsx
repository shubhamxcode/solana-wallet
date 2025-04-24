export default function TokenActions() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 space-y-6">
      {/* Create Mint Section */}
      <div className="bg-gray-800 rounded-md p-4 shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Create Mint 🦄</h2>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-4 rounded">
            Submit
          </button>
        </div>
        <div className="mt-4 border border-gray-700 rounded-md p-4 bg-gray-900 text-sm space-y-2">
          <p>Token Mint Address...</p>
          <p>Transaction Signature...</p>
        </div>
      </div>

      {/* Create Account Section */}
      <div className="bg-gray-800 rounded-md p-4 shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Create Account ✨</h2>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-4 rounded">
            Submit
          </button>
        </div>
        <div className="mt-4 border border-gray-700 rounded-md p-4 bg-gray-900 text-sm space-y-2">
          <p>Token Account Address...</p>
          <p>Transaction Signature...</p>
        </div>
      </div>
    </div>
  );
}
