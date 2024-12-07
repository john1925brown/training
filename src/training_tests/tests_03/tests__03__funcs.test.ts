import { StudentType } from '../tests_02/tests__02__objects';
import {
  addSkill,
  doesStudentLiveIn,
  makeStudentActive,
} from './tests__03__funcs';

let student: StudentType;

beforeEach(() => {
  student = {
    name: 'Dima',
    age: 26,
    isActive: false,
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
});

test('new tech skill should be added to student', () => {
  expect(student.technologies.length).toBe(4);

  addSkill(student, 'TS');

  expect(student.technologies.length).toBe(5);
  expect(student.technologies[4].title).toBe('TS');
  expect(student.technologies[4].id).toBeDefined();
});

test('student should be made active', () => {
  expect(student.isActive).toBe(false);

  makeStudentActive(student);

  expect(student.isActive).toBe(true);
});

test('does student live in Minsk?', () => {
  let result1 = doesStudentLiveIn(student, 'Wroclaw');
  let result2 = doesStudentLiveIn(student, 'Minsk');

  expect(result1).toBe(false);
  expect(result2).toBe(true);
});
