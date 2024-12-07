import {
  CityType,
  GovernmentBuildingsType,
} from '../tests_02/tests__02__objects';

export const demolishHouseOnTheStreet = (
  city: CityType,
  currentStreet: string
) => {
  city.houses = city.houses.filter(
    (house) => house.address.street.title !== currentStreet
  );
};

export const getBuildingsWithStaffCountGreaterThen = (
  governmentBuildings: Array<GovernmentBuildingsType>,
  currentStaff: number
) => {
  return governmentBuildings.filter((building) => {
    return building.staffCount > currentStaff;
  });
};
