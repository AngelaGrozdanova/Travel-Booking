import React, { useState } from "react";
import { Button, FormGroup, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/config";
import "./create-tour.css";

const CreateTour = () => {
  const [tourData, setTourData] = useState({
    title: "",
    city: "",
    address: "",
    distance: "",
    price: "",
    maxGroupSize: "",
    desc: "",
    photo: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTourData({ ...tourData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!tourData.title || !tourData.city || !tourData.address) {
      setError("Please fill in all the required fields.");
      return false;
    }
    if (isNaN(tourData.distance) || tourData.distance <= 0) {
      setError("Please enter a valid distance.");
      return false;
    }
    if (isNaN(tourData.price) || tourData.price <= 0) {
      setError("Please enter a valid price.");
      return false;
    }
    if (isNaN(tourData.maxGroupSize) || tourData.maxGroupSize <= 0) {
      setError("Please enter a valid maximum group size.");
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/tours`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tourData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Tour created successfully!");
        navigate("/tours");
      } else {
        setError(data.message || "Error creating tour");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to create tour. Please try again.");
    }
  };

  return (
    <div className="create-tour-container">
      <h3>Create a New Tour</h3>
      {error && <p className="alert alert-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            value={tourData.title}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="city"
            placeholder="City"
            value={tourData.city}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="address"
            placeholder="Address"
            value={tourData.address}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="distance"
            placeholder="Distance"
            value={tourData.distance}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="price"
            placeholder="Price"
            value={tourData.price}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="maxGroupSize"
            placeholder="Max Group Size"
            value={tourData.maxGroupSize}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="desc"
            placeholder="Description"
            value={tourData.desc}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="photo"
            placeholder="Photo URL"
            value={tourData.photo}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit">Create Tour</Button>
      </form>
    </div>
  );
};

export default CreateTour;
