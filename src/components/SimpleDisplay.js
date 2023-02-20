import React from 'react';
import { useState } from 'react';

export const SimpleDisplay = ({ datas }) => {
  const [planets, setPlanets] = useState([...datas]);

  return (
    <>
      {[...planets].map((planet) => {
        return (
          <h3>
            name: {planet.name} __ type: {planet.type}
          </h3>
        );
      })}
    </>
  );
};
