import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import "./tour-card.css";

const TourCard = ({ tour }) => {
  const { _id, title, city, photo, price, featured, reviews, likes, dislikes } =
    tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin =
    user?.username === "Angela" || user?._id === "67f21e458967b6199304eaf1";

  const [liked, setLiked] = useState(false);
  const [unliked, setUnliked] = useState(false);
  const [likeCount, setLikeCount] = useState(tour.likes || 0);
  const [dislikeCount, setDislikeCount] = useState(tour.dislikes || 0);
  const [animateReaction, setAnimateReaction] = useState(false);
  const [reactionIcon, setReactionIcon] = useState(null);

  useEffect(() => {
    const likedState = localStorage.getItem(`liked_${_id}`);
    const unlikedState = localStorage.getItem(`unliked_${_id}`);

    if (likedState === "true") {
      setLiked(true);
    }

    if (unlikedState === "true") {
      setUnliked(true);
    }
  }, [_id]);

  const handleToggleReaction = async (reactionType) => {
    try {
      const action = reactionType === "like" ? "like" : "unlike";
      const res = await fetch(
        `http://localhost:4000/api/v1/tours/${_id}/${action}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );

      if (res.ok) {
        if (reactionType === "like") {
          if (liked) {
            setLiked(false);
            setLikeCount((prev) => prev - 1);
            localStorage.removeItem(`liked_${_id}`);
          } else {
            setLiked(true);
            setUnliked(false);
            setLikeCount((prev) => prev + 1);
            localStorage.setItem(`liked_${_id}`, "true");
            localStorage.removeItem(`unliked_${_id}`);
          }
          setReactionIcon(liked ? "👎" : "❤️");
        } else if (reactionType === "unlike") {
          if (unliked) {
            setUnliked(false);
            setDislikeCount((prev) => prev - 1);
            localStorage.removeItem(`unliked_${_id}`);
          } else {
            setUnliked(true);
            setLiked(false);
            setDislikeCount((prev) => prev + 1);
            localStorage.setItem(`unliked_${_id}`, "true");
            localStorage.removeItem(`liked_${_id}`);
          }
          setReactionIcon(unliked ? "❤️" : "👎");
        }

        setAnimateReaction(true);
        setTimeout(() => {
          setAnimateReaction(false);
          setReactionIcon(null);
        }, 800);
      }
    } catch (err) {
      console.error("Toggle reaction failed:", err);
    }
  };

  const handleDelete = async () => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this tour?"
      );
      if (!confirmDelete) return;

      const res = await fetch(`http://localhost:4000/api/v1/tours/${_id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        alert("Tour deleted successfully!");
        window.location.reload();
      } else {
        throw new Error(data.message || "Failed to delete");
      }
    } catch (error) {
      console.error("Delete failed", error);
      alert("Something went wrong!");
    }
  };

  const handleEdit = () => {
    navigate(`/edit-tour/${_id}`);
  };

  const handleCreate = () => {
    navigate("/create-tour");
  };

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={photo} alt="tour-img" />
          {featured && <span>Featured</span>}
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {city}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i className="ri-star-fill"></i>{" "}
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not rated"
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>

          <h5 className="tour__title">
            <Link to={`/tours/${_id}`}>{title}</Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${price} <span> /per person</span>
            </h5>
            <button className="btn booking__btn">
              <Link to={`/tours/${_id}`}>Book Now</Link>
            </button>
          </div>

          {user && !isAdmin && (
            <div className="tour__like-unlike-buttons mt-3 d-flex gap-2 justify-content-between position-relative">
              <div style={{ position: "relative" }}>
                {reactionIcon && (
                  <div className="reaction-icon">{reactionIcon}</div>
                )}
                <button
                  className={`btn ${
                    liked ? "btn-success" : "btn-outline-success"
                  } ${animateReaction ? "btn-animate" : ""}`}
                  onClick={() => handleToggleReaction("like")}
                  disabled={animateReaction}
                >
                  {liked ? `👍 Liked (${likeCount})` : `👍 Like (${likeCount})`}
                </button>
              </div>
              <div style={{ position: "relative" }}>
                {reactionIcon && (
                  <div className="reaction-icon">{reactionIcon}</div>
                )}
                <button
                  className={`btn ${
                    unliked ? "btn-danger" : "btn-outline-danger"
                  } ${animateReaction ? "btn-animate" : ""}`}
                  onClick={() => handleToggleReaction("unlike")}
                  disabled={animateReaction}
                >
                  {unliked
                    ? `👎 Unliked (${dislikeCount})`
                    : `👎 Unlike (${dislikeCount})`}
                </button>
              </div>
            </div>
          )}

          {user && !isAdmin && (
            <div className="tour__crud-buttons mt-3 d-flex gap-2 justify-content-end">
              <button className="btn btn-success" onClick={handleCreate}>
                + Create Tour
              </button>
            </div>
          )}

          {user && isAdmin && (
            <div className="tour__crud-buttons mt-3 d-flex gap-2 justify-content-end">
              <button className="btn btn-warning" onClick={handleEdit}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete
              </button>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
