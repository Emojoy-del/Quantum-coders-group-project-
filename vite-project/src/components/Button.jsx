export default function Button({ text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full bg-indigo-600 text-white py-2 rounded-md text-sm font-medium hover:bg-indigo-700 active:scale-[0.98] transition-all duration-150"
    >
      {text}
    </button>
  );
}