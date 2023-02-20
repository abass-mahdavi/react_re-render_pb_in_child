import React from 'react';
import { useState } from 'react';
import { SimpleDisplay } from './components/SimpleDisplay';
import { SimpleDisplayWithUseEffect } from './components/SimpleDisplayWithUseEffect';

const PLANETS = [
  {
    name: 'Jupiter',
    type: 'Gas Giant',
  },
  {
    name: 'Mars',
    type: 'Terrestrial',
  },
  {
    name: 'Saturn',
    type: 'Gas Giant',
  },
  {
    name: 'Venus',
    type: 'Terrestrial',
  },
];

export default function App() {
  const [filteredPlanets, setFilteredPlanets] = useState([...PLANETS]);
  const [filterTerrestrials, setFilterTerrestrials] = useState(true);
  const handleClick = () => {
    if (filterTerrestrials) {
      setFilteredPlanets(
        [...PLANETS].filter((planet) => planet.type === 'Terrestrial')
      );
      setFilterTerrestrials(false);
    } else {
      setFilteredPlanets([...PLANETS]);
      setFilterTerrestrials(true);
    }
  };
  return (
    <div>
      <h1>In App.js</h1>
      <button onClick={handleClick}>
        {filterTerrestrials && 'Show terrestrials only'}
        {!filterTerrestrials && 'Show all'}
      </button>
      {filteredPlanets.map((planet) => {
        return (
          <h3>
            name: {planet.name} __ type: {planet.type}
          </h3>
        );
      })}
      <h4>***********************</h4>
      <h1 style={{ color: 'red' }}>
        In SimpleDisplay.js !!! re-render issue !!!
      </h1>
      <SimpleDisplay datas={filteredPlanets} />
      <h4>***********************</h4>
      <h1>In SimpleDisplayWithUseEffect.js</h1>
      <SimpleDisplayWithUseEffect datas={filteredPlanets} />
    </div>
  );
}
