type TechnologyType = {
  id: number;
  title: string;
};

type LocalCityType = {
  cityName: string;
  country: string;
};

type StudentAddressType = {
  street: string;
  city: LocalCityType;
};

export type StudentType = {
  name: string;
  age: number;
  isActive: boolean;
  address: StudentAddressType;
  technologies: Array<TechnologyType>;
};

const student: StudentType = {
  name: 'Dima',
  age: 26,
  isActive: true,
  address: {
    street: 'Surganova 2',
    city: {
      cityName: 'Minsk',
      country: 'Belarus',
    },
  },
  technologies: [
    { id: 1, title: 'HTML' },
    { id: 2, title: 'CSS' },
    { id: 3, title: 'JS' },
    { id: 4, title: 'REACT' },
  ],
};

type StreetAddressType = {
  title: string;
};

type AddressType = {
  number?: number;
  street: StreetAddressType;
};

export type HousesType = {
  buildedAt: number;
  repaired: boolean;
  address: AddressType;
};

export type GovernmentBuildingsType = {
  type: string
  budget: number
  staffCount: number
  address: AddressType
}

export type CityType = {
  title: string;
  houses: Array<HousesType>;
  governmentBuildings: Array<GovernmentBuildingsType>;
  citizensNumber: number;
};
