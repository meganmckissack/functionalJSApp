import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';



////---------------------------------------------------------

// This function stores our state.
// old store state function
// const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction = state => state) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   };
// };

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

const storeState = () => {
  let oldState = {};
  return(stateChangeFunction) => {
    const newState = stateChangeFunction(oldState);
    oldState = {...newState};
    return newState;
  };
};

//const stateControl = storeState();
// const stateChanger = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.



const feed = changeState("soil")(1);
const hydrate = changeState("water")(1);
const giveLight = changeState("light")(1);



// const blueFood = changeState("soil")(5);




  
  const updateDisplay = (state, plantNumber) => {
    $(`#${plantNumber}-soil-value`).text(state.soil);
    $(`#${plantNumber}-light-value`).text(state.light);
    $(`#${plantNumber}-water-value`).text(state.water);
  };

  const makeNewPlant = (plantNum) => {
    const stateChanger = storeState();
    $('.container').append(
      `<div class="grow-buttons">
          <button class="btn-success" id="${plantNum}-feed">Add soil</button>
          <button class="btn-success" id="${plantNum}-water">Add water</button>
          <button class="btn-success" id="${plantNum}-light">Add sunlight</button>
        </div>
        <h1>Plant ${plantNum}'s Values</h1>
        <h3>Soil:<div id="${plantNum}-soil-value">0</div></h3>
        <h3>Water:<div id="${plantNum}-water-value">0</div></h3>
        <h3>Light:<div id="${plantNum}-light-value">0</div></h3>`
    )
    $(`#${plantNum}-feed`).click(function() {
      const newState = stateChanger(feed);
      updateDisplay(newState, plantNum);
    });
  
    $(`#${plantNum}-water`).click(function() {
      const newState = stateChanger(hydrate);
      updateDisplay(newState, plantNum);
    });
  
    $(`#${plantNum}-light`).click(function() {
      const newState = stateChanger(giveLight);
      updateDisplay(newState, plantNum);
    });
  
  };
  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

  // $('#feed').click(function() {
  //   const newState = stateControl(blueFood);
  //   $('#soil-value').text(`Soil: ${newState.soil}`);
  // });

  $(document).ready(function() {
  let plantNum = 0;
  $('#make-new').click(function() {
    plantNum++;
    makeNewPlant(plantNum);
  });
}

  // This function doesn't actually do anything useful in this application — it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

  // $('#show-state').click(function() {
  //   // We just need to call stateControl() without arguments to see our current state.
  //   const currentState = stateControl();
  //   $('#soil-value').text(`Soil: ${currentState.soil}`);
  // });

  // $('#show-state').click(function() {
  //   // We just need to call stateControl() without arguments to see our current state.
  //   const currentState = stateControl();
  //   $('#water-value').text(`Water: ${currentState.water}`);
  // });

  // $('#show-state').click(function() {
  //   // We just need to call stateControl() without arguments to see our current state.
  //   const currentState = stateControl();
  //   $('#light-value').text(`Light: ${currentState.light}`);
  // });


  );
