import React from "react";
import PropTypes from "prop-types";

const RatesCard = ({ rate }) => {
  return (
    <div className="course-card bg-white rounded-lg shadow-md overflow-hidden">
      <img src={rate.image} alt={rate.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{rate.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{rate.position}</p>
        <p className="text-sm text-gray-700 mb-4">{rate.body}</p>
      </div>
    </div>
  );
};

RatesCard.propTypes = {
  rate: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default RatesCard;