import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";

const EVENTS = [
  { id: 1, title: "React Conference" },
  { id: 2, title: "UI/UX Workshop" },
  { id: 3, title: "JavaScript Bootcamp" },
];

export default function App() {
  // ✅ Load from localStorage safely (NO useEffect needed)
  const [bookings, setBookings] = useState(() => {
    try {
      const saved = localStorage.getItem("bookings");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedEvent, setSelectedEvent] = useState(EVENTS[0]);
  const [name, setName] = useState("");
  const [success, setSuccess] = useState("");

  // ✅ Save bookings when they change
  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  // ✅ Add or Update booking
  const handleSubmit = () => {
    if (!name.trim()) return;

    const newBooking = {
      id: Date.now(),
      name,
      event: selectedEvent.title,
    };

    setBookings((prev) => [...prev, newBooking]);
    setName("");
    setSuccess("Booking successful!");

    setTimeout(() => setSuccess(""), 2000);
  };

  // ✅ Delete booking
  const handleDelete = (id) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <Navbar />

      <div className="max-w-2xl mx-auto mt-6">
        <BookingForm
          name={name}
          setName={setName}
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
          events={EVENTS}
          onSubmit={handleSubmit}
        />

        {success && (
          <p className="text-green-500 mt-2 text-sm">{success}</p>
        )}

        <BookingList bookings={bookings} onDelete={handleDelete} />
      </div>
    </div>
  );
}