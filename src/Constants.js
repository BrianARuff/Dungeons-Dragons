import { randomID } from './Utils';
export const initialState = [
  {
    id: randomID(),
    name: "Player 1",
    initiative: 20,
    hitPoints: 50
  },
  {
    id: randomID(),
    name: "Player 2",
    initiative: 19,
    hitPoints: 25
  },
  {
    id: randomID(),
    name: "Player 3",
    initiative: 18,
    hitPoints: 12.5
  },
  {
    id: randomID(),
    name: "Player 4",
    initiative: 17,
    hitPoints: 7.25
  }
];
