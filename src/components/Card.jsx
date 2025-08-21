import React from "react";

const Card = ({data}) => {
 
   const {firstName,lastName,gender,age,photoUrl,about}=data
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={photoUrl}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="card-actions">
        <h2 className="card-title">{firstName}</h2>
        <h2 className="card-title">{age}</h2>
        </div>
        <h2>{gender}</h2>
        <p>
          {about}
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-secondary">Ignore</button>
          <button className="btn btn-primary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
