const appState = {
  'loading':true,
};

function updateState(stateName,stateValue){
  appState[stateName] = stateValue;
}

updateState('loading',false)
updateState('page','login')
console.log(appState)

updateState('authentication','successful')
updateState('page','home')
console.log(appState)