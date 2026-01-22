export const initialStore=()=>{
  return{
    people: [],
    planets: [],
    vehicles: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case "setData":
      return {
        ...store,
        [action.payload.key]: action.payload.data
      };
    default:
      throw Error('Unknown action.');
  }    
}
