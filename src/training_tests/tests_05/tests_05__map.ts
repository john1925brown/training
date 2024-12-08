import { GovernmentBuildingsType, HousesType } from '../tests_02/tests__02__objects';

export const getStreetsTitlesOfGoverementBuildings = (
  governmentBuildings: Array<GovernmentBuildingsType>
) => {
  return governmentBuildings.map((building) => building.address.street.title);
};

export const getStreetsTitlesOfHouses  =  (houses: Array<HousesType>) => {
  return houses.map(house => house.address.street.title)
}
