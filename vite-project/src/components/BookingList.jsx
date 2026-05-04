export default function BookingList({ bookings, setBookings, onEdit }) {
  const handleDelete = (id) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <section>
      <h2 className="text-lg font-medium mb-6 text-gray-800 dark:text-gray-100">
        Bookings
      </h2>

      {bookings.length === 0 ? (
        <p className="text-sm text-gray-500 text-center mt-12">
          No bookings yet.
        </p>
      ) : (
        bookings.map((b) => (
          <div
            key={b.id}
            className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-5 mb-4"
          >
            <h3 className="font-medium text-gray-800 dark:text-gray-100">
              {b.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {b.event}
            </p>

            <div className="flex gap-4 text-sm">
              <button
                onClick={() => onEdit(b)}
                className="text-indigo-600 hover:underline"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(b.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </section>
  );
}