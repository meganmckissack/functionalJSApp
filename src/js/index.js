import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';

// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// };

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   }
// };

// const giveLight = (plant) => {
//   return {
//     ...plant,
//     light: (plant.light || 0) + 1
//   }
// };

// const changePlantState = (plant, property) => {
//   return {
//     ...plant,
//     [property]: (plant[property] || 0) + 1
//   }
// }

// let plant = { soil: 0, light: 0, water: 0 }

////---------------------------------------------------------

// This function stores our state.

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

const feed = changeState("soil")(1);
const hydrate = changeState("water")(1);
const giveLight = changeState("light")(1);



// let plant = { soil: 0, light: 0, water: 0 }
// changePlantState(plant, "soil")

// const feed = changeState("soil")(1);
// // const blueFood = changeState("soil")(5);

// const hydrate = changeState("water")(1);
// const superWater = changeState("water")(5);


const blueFood = changeState("soil")(5);
// const greenFood = changeState("soil")(10)
// const yuckyFood = changeState("soil")(-5)

// blueFood(plant)

// const feed = changeState("soil");
// const hydrate = changeState("water");
// const giveLight = changeState("light");


$(document).ready(function() {
  
  // const hydrate = (plant) => {
  //   return {
  //     ...plant,
  //     water: (plant.water || 0) + 1
  //   }
  // };

  //   const feed = (plant) => {
  //     return {
  //       ...plant,
  //       soil: (plant.soil || 0) + 1
  //     }
  //   };

  // const changePlantState = (plant, property) => {
  //   return {
  //     ...plant,
  //     [property]: (plant[property] || 0) + 1
  //   }
  // };

  // const changeState = (state, prop) => {
  //   return {
  //     ...state,
  //     [prop]: (state[prop] || 0) + 1
  //   }
  // };

  // const changeState = (state, prop, value) => ({
  //   ...state,
  //   [prop] : (state[prop] || 0) + value
  // });

  // const changeState = (prop) => {
  //   return (value) => {
  //     return (state) => ({
  //       ...state,
  //       [prop] : (state[prop] || 0 + value)
  //     });
  //   };
  // };

  // const feed = changeState("soil");
  // const hydrate = changeState("water");
  // const giveLight = changeState("light");

  
  // const storeState = (initialState) => {
  //   let currentState = initialState
  //   return (stateChangeFunction = state => state) => {
  //     const newState = stateChangeFunction(currentState);

  //     currentState = {...newState}
  //     return newState;
  //   }
  // }

  // const stateControl = storeState();

  // // const fedPlant = stateControl(blueFood)
  // // { soil: 5 }

  // // const plantFedAgain = stateControl(greenFood);
  // // { soil: 15 }

  // const blueFood = changeState("soil")(5);
  // const fedPlant = stateControl(blueFood());

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

  $('#feed').click(function() {
    const newState = stateControl(blueFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#feed').click(function() {
    const newState = stateControl(feed);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  $('#hydrate').click(function() {
    const newState = stateControl(hydrate);
    $('#water-value').text(`Water: ${newState.water}`);
  });

  $('#giveLight').click(function() {
    const newState = stateControl(giveLight);
    $('#light-value').text(`Light: ${newState.light}`);
  });

  // This function doesn't actually do anything useful in this application — it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

  $('#show-state').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = stateControl();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
  });

  $('#show-state').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = stateControl();
    $('#water-value').text(`Water: ${currentState.water}`);
  });

  $('#show-state').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = stateControl();
    $('#light-value').text(`Light: ${currentState.light}`);
  });


});
