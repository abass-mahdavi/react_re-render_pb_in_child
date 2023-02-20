import React from 'react';
import { useState, useEffect } from 'react';

export const SimpleDisplayWithUseEffect = ({ datas }) => {
  const [planets, setPlanets] = useState([...datas]);

  useEffect(() => {
    setPlanets([...datas]);
  }, [datas]);

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
