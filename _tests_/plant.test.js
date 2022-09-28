import {  storeState} from '../src/js/plant.js';

//updateDisplay,, feed, hydrate, giveLight, makeNewPlant,
// describe('makeNewPlant', ()=>{
//   test("Should create a new plant", () => {
//     const newPlane = makeNewPlant(1);
//     expect(newPlane).toEqual(1);
//   });
// });

describe('storeState', () => {
  
  test('should return an anonymous function when no arguments are passed into it, that function will have access to the variable currentState from its parent function', () => {
    let test = storeState();
    expect(test).toEqual(expect.any(Function));
  });

});