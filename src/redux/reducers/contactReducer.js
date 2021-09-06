const initialState = [
 {
  id:0,
  name:"Egresa Meto",
  number:1234567890,
  emial: "em@g.com"

 },
 {
 id:1,
  name: "test Name",
  number:7890345216,
  email: "test@test.com"

 },
];


const contactReducer = (state = initialState, action)=>{
 switch(action.type){
   case "ADD_CONTACT":
     state=[...state,action.playload];
     return state;
     case "UPDATE_CONTACT":
       const updateState = state.map(contact =>contact.id === action.playload.
        id? action.playload: contact);
        state =updateState;
        return state;
        case "DELETE_CONTACT":
          const filterContacts = state.filter(contact => contact.id !== action.playload
            && contact);
            state =filterContacts;
            return state;
     default:
   return state;

 }
};

export default contactReducer;