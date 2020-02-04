import React from 'react';

const handleRemoveFeature = e => {
  e.preventDefault();
}

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleRemoveFeature} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
