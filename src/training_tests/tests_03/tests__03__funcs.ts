import {
  CityType,
  GovernmentBuildingsType,
  HousesType,
  StudentType,
} from '../tests_02/tests__02__objects';

export const addSkill = (st: StudentType, skill: string) => {
  st.technologies.push({
    id: new Date().getTime(),
    title: skill,
  });
};

export const makeStudentActive = (st: StudentType) => {
  st.isActive = true;
};

export const doesStudentLiveIn = (st: StudentType, city: string) => {
  return st.address.city.cityName === city;
};

export const addMoneyToBudget = (
  currentBuilding: GovernmentBuildingsType,
  budget: number
) => {
  currentBuilding.budget += budget;
};

export const repairHouse = (currenthouse: HousesType) => {
  currenthouse.repaired = true;
};

export const toHireStaff = (
  currentBuilding: GovernmentBuildingsType,
  addStaffCount: number
) => {
  currentBuilding.staffCount += addStaffCount;
};

export const toFireStaff = (
  currentBuilding: GovernmentBuildingsType,
  addStaffCount: number
) => {
  currentBuilding.staffCount -= addStaffCount;
};
