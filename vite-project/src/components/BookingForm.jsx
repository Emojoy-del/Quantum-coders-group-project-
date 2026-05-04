import Button from "./Button";

export default function BookingForm({
  events,
  selectedEvent,
  setSelectedEvent,
  name,
  setName,
  handleSubmit,
  editingId,
}) {
  return (
    <section className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-5">
      <h2 className="text-lg font-medium mb-6 text-gray-800 dark:text-gray-100">
        {editingId !== null ? "Edit Booking" : "New Booking"}
      </h2>

      <div className="mb-5">
        <label htmlFor="event" className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
          Event
        </label>
        <select
          id="event"
          value={selectedEvent?.id || ""}
          onChange={(e) => {
            const selected = events.find(
              (ev) => ev.id === Number(e.target.value)
            );
            if (selected) setSelectedEvent(selected);
          }}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-700 dark:text-white"
        >
          {events.map((ev) => (
            <option key={ev.id} value={ev.id}>
              {ev.title}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="name" className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="e.g. Irene"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:bg-gray-700 dark:text-white"
        />
      </div>

      <Button
        text={editingId !== null ? "Update Booking" : "Confirm Booking"}
        onClick={handleSubmit}
      />
    </section>
  );
}