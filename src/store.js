export const initialStore=()=>{
  return{
    people: [],
    planets: [],
    vehicles: [],
    favoritos:[],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case "setData":
      return {
        ...store,
        [action.payload.key]: action.payload.data
      };
    case "selectFavorite":
      const existe = store.favoritos.find(fav => fav.id === action.payload.id);
      return {...store, favoritos: existe? store.favoritos.filter(fav => fav.id !== action.payload.id): [...store.favoritos, action.payload]
      };
    // case "removeFavorite":
    //   return {
    //     ...store,
    //     favoritos: store.favoritos.filter(fav => fav.id !== action.payload.id)
    //   };
     
    default:
      throw Error('Unknown action.');
  }    
}
