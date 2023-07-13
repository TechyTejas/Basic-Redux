//this is how we install third party package we use require
const redux = require('redux');



// reducerfunction is stad js function but it will becalled by redux lib and it will always receries 2 peices of inputs 
//old state and action which is dispatched and that reducdr funtion return new state object
const counterReducer=(state={counter:0},action)=>{

    if(action.type==="increment"){
    return {
        counter: state.counter+1
    }
 }
 if(action.type==="decrement"){
    return {
        counter: state.counter-1
    }
 }
 return state;
}

//to  create store we use .createStore
const store = redux.createStore(counterReducer); 
//when the store is initialised this redux will run counterReducer for first time so counterReduer function is run when store is created 
// console.log(store.getState())

const counterSubscriber = () => {
  const latestState =   store.getState()
    //is a method which is avialb on storre created with crateStorr and it will give us the latesest state snapshot after it was updated
    // so this function will trigurred whenerver the state changes the latest state
    console.log(latestState)
}

store.subscribe(counterSubscriber);
// the sub mthod want a func which redux will wxecute for us whenever data in store is changed

store.dispatch({type : "increment"})
store.dispatch({type : "decrement"})
//dispatch is function which dispatches an action 
//now action is an js object with type property

