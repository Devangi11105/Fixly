import React, { useState } from "react";
import "./review.css";

const ReviewCard = () =>{
    const initialReviews = [
        { name: "Piyush Jha", text: "Vitalii assembled the IKEA Norli drawer chest for me..." },
        { name: "Devangi Patel", text: "David did an awesome job assembling crib and dresser for nursery..." },
        { name: "Anant Shah", text: "I hired Joe to patch 2 holes on my wall and 1 hole on my ceiling..."},
        { name: "Aarav Sharma", text: "Aleksandr was fantastic! He came with all the equipment to do the job..."},
        { name: "Jeel Patel", text: "Jose fixed my AC drain line which was clogging my master bathroom sink..."},
        { name: "Nilesh khunt", text: "Michael did a great job helping us install frameless glass hinged shower doors..."},
        { name: "Dhruv Pansuriya", text: "Jose fixed my AC drain line which was clogging my master bathroom sink..."},
      ];

      
        const[reviews, setReviews] = useState(initialReviews);

        const addReview = (newReview) =>{
            const updateReviews = [...reviews, newReview];

            if(updateReviews.length > 7){
                updateReviews.shift();
            }

            setReviews(updateReviews);
       };

       return (
            <div>
                <div className="reviewbox">
                    {reviews.map((review, index) =>(
                        <div key={index} className="review-card">
                            <h2 className="name">{review.name}</h2>
                            <p>{review.text}</p>
                        </div>
                    ))}
                </div>
          </div>
        
    );
      
    
};

export default ReviewCard;
