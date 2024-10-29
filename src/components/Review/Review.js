// Review.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for API calls
import './Review.css'; // Import the CSS file for styling

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({
        name: '',
        title: '',
        review: '',
        rating: 1
    });
    const [submissionError, setSubmissionError] = useState('');

    // Fetch reviews from the server when the component loads
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/reviews');
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewReview(prev => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newReview.name && newReview.review) {
            try {
                const response = await axios.post('http://localhost:5000/api/reviews', newReview);
                setReviews(prevReviews => [...prevReviews, response.data]); // Add the new review to the reviews list
                setNewReview({ name: '', title: '', review: '', rating: 1 }); // Reset form
                setSubmissionError(''); // Clear any previous errors
            } catch (error) {
                console.error('Error submitting review:', error);
                setSubmissionError('Something went wrong. Please try again later.'); // Set error message
            }
        } else {
            setSubmissionError('Please fill out all required fields.');
        }
    };

    return (
        <div className="review-container">
            <h2 className="review-title">What Our client Say</h2>
            <div className="review-list">
                {reviews.map((review) => (
                    <div key={review._id} className="review-card">
                        <div className="review-header">
                            <h3 className="review-name">{review.name}</h3>
                            <span className="review-title">{review.title}</span>
                        </div>
                        <p className="review-text">"{review.review}"</p>
                        <div className="review-rating">
                            {"⭐".repeat(review.rating)}
                        </div>
                    </div>
                ))}
            </div>

            {submissionError && (
                <div className="error-message">
                    <p>{submissionError}</p>
                </div>
            )}

            <div className="review-form">
                <h2 className="form-title">Leave a Review</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={newReview.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={newReview.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="review">Review</label>
                        <textarea
                            id="review"
                            name="review"
                            value={newReview.review}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">Rating</label>
                        <select
                            id="rating"
                            name="rating"
                            value={newReview.rating}
                            onChange={handleChange}
                        >
                            {[1, 2, 3, 4, 5].map(r => (
                                <option key={r} value={r}>{r} Star{r > 1 ? 's' : ''}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit Review</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Review;
