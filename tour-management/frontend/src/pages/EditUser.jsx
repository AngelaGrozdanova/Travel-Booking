import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup } from "reactstrap";
import { BASE_URL } from "../utils/config";
import "./edit-user.css";

import { AuthContext } from "../context/AuthContext";

const EditUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { user, dispatch } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/users/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          credentials: "include",
        });

        const data = await res.json();

        if (res.ok) {
          setUserData(data.data);
        } else {
          setError(data.message || "Error fetching user data");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch user data");
      }
    };

    fetchUserData();
  }, [id]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(userData),
        credentials: "include",
      });

      const result = await res.json();
      if (res.ok) {
        alert("Profile updated successfully!");
        navigate("/home");
      } else {
        alert(result.message || "Error updating profile");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    }
  };

  const deleteUser = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (confirmDelete) {
      try {
        const res = await fetch(`${BASE_URL}/users/${user._id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          credentials: "include",
        });

        const result = await res.json();
        if (res.ok) {
          alert("Account successfully deleted");
          dispatch({ type: "LOGOUT" });
          localStorage.removeItem("accessToken");
          navigate("/home");
        } else {
          alert(result.message || "Error deleting account");
        }
      } catch (err) {
        alert("Error deleting account");
      }
    }
  };

  return (
    <div className="edit-user-container">
      <h2>Edit User Profile</h2>
      {error && <p className="alert alert-danger">{error}</p>}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <input
            type="text"
            id="userName"
            placeholder="Username"
            value={userData.userName}
            onChange={handleChange}
            required
            className="form-control"
          />
        </FormGroup>
        <FormGroup>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
            required
            className="form-control"
          />
        </FormGroup>
        <FormGroup>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
            className="form-control"
          />
        </FormGroup>
        <Button type="submit" className="btn btn-success">
          Update Profile
        </Button>
      </Form>
      <Button color="danger" onClick={deleteUser}>
        Delete Account
      </Button>
    </div>
  );
};

export default EditUser;
