export default function Navbar({ dark, setDark }) {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-medium text-gray-800 dark:text-gray-100">
          Event Booking
        </span>

        <button
          onClick={() => setDark(!dark)}
          className="text-sm text-gray-500 dark:text-gray-300 hover:underline"
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
}