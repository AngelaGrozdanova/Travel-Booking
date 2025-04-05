import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditTour = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tourData, setTourData] = useState({
    title: "",
    city: "",
    price: "",
    photo: "",
  });

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/v1/tours/${id}`, {
          credentials: "include",
        });
        const data = await res.json();
        if (res.ok) {
          setTourData(data.data);
        } else {
          alert("Tour not found");
        }
      } catch (err) {
        console.error(err);
        alert("Failed to fetch tour details");
      }
    };

    fetchTour();
  }, [id]);

  const handleChange = (e) => {
    setTourData({ ...tourData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:4000/api/v1/tours/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(tourData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Tour updated successfully!");
        navigate("/tours");
      } else {
        throw new Error(data.message || "Something went wrong while updating");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("Something went wrong while updating");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit Tour</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={tourData.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={tourData.city}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={tourData.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label>Photo URL:</label>
          <input
            type="text"
            name="photo"
            value={tourData.photo}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Update Tour
        </button>
      </form>
    </div>
  );
};

export default EditTour;
