import { CityType } from '../tests_02/tests__02__objects';
import { getStreetsTitlesOfGoverementBuildings, getStreetsTitlesOfHouses } from './tests_05__map';

let city: CityType;

beforeEach(() => {
  city = {
    title: 'New York',
    houses: [
      {
        buildedAt: 2012,
        repaired: false,
        address: { number: 100, street: { title: 'White street' } },
      },
      {
        buildedAt: 2008,
        repaired: false,
        address: { number: 100, street: { title: 'Happy street' } },
      },
      {
        buildedAt: 2020,
        repaired: false,
        address: { number: 200, street: { title: 'Hogwarts street' } },
      },
    ],

    governmentBuildings: [
      {
        type: 'HOSPITAL',
        budget: 200000,
        staffCount: 200,
        address: { street: { title: 'Central Str' } },
      },
      {
        type: 'FIRE-STATION',
        budget: 500000,
        staffCount: 1000,
        address: { street: { title: 'Souths park str' } },
      },
    ],

    citizensNumber: 1000000,
  };
});

test('list of street titles government buildings', () => {
  let streetsName = getStreetsTitlesOfGoverementBuildings(
    city.governmentBuildings
  );

  expect(streetsName.length).toBe(2);
  expect(streetsName[0]).toBe('Central Str');
  expect(streetsName[1]).toBe('Souths park str');
});

test('list of street titles houses', () => {
  let streetsHousesName = getStreetsTitlesOfHouses(
    city.houses
  );

  expect(streetsHousesName.length).toBe(3);
  expect(streetsHousesName[0]).toBe('White street');
  expect(streetsHousesName[1]).toBe('Happy street');
  expect(streetsHousesName[2]).toBe('Hogwarts street'); 

});
