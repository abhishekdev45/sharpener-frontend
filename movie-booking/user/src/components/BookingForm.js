import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { createBooking } from "../features/bookingSlice";
import { send } from "emailjs-com";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";

const BookingForm = ({ movie, onClose }) => {
  const dispatch = useDispatch();
  const [showtime, setShowtime] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [formErrors, setFormErrors] = useState({});

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.phone) errors.phone = "Phone number is required";
    if (!showtime) errors.showtime = "Please select a showtime";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const bookingData = {
      movieId: movie.id,
      movieName: movie.name,
      showtime,
      ...formData,
    };

    try {
      await dispatch(createBooking(bookingData)).unwrap();
      const serviceId = process.env.REACT_APP_SERVICE_ID;
      const templateId = process.env.REACT_APP_TEMPLATE_ID;
      const userId = process.env.REACT_APP_USER_ID;

      console.log(
        "env",
        serviceId,
        userId,
        templateId
      );
      await send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        {
          to_name: formData.name,
          movie_name: movie.name,
          showtime,
          to_email: formData.email,
        },
        process.env.REACT_APP_USER_ID
      );

      toast.success("Booking successful! Check your email for confirmation.");
      onClose();
    } catch (error) {
      toast.error("Booking failed. Please try again.");
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Book Tickets for {movie.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Select Showtime</h3>
            <div className="flex space-x-2">
              {movie.showtimes.map((time) => (
                <button
                  key={time}
                  type="button"
                  className={`px-4 py-2 rounded-lg border ${
                    showtime === time
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setShowtime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
            {formErrors.showtime && (
              <p className="text-red-500 text-sm mt-2">{formErrors.showtime}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              className="w-full p-2 border rounded-lg"
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-2">{formErrors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              className="w-full p-2 border rounded-lg"
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-2">{formErrors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
              className="w-full p-2 border rounded-lg"
            />
            {formErrors.phone && (
              <p className="text-red-500 text-sm mt-2">{formErrors.phone}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default BookingForm;
