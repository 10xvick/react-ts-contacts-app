const initialState = [
  { name: 'x', phone: '1290', email: 'abc@abc' },
  { name: 'xc', phone: '1290', email: 'abc@abc' },
  { name: 'xe', phone: '1290', email: 'abc@abc' },
];

export const contacts = (state = { contacts: initialState, selected:null }, action) => {
  switch (action.type) {
    case 'add': {
      return { ...state, contacts: [...state.contacts, action.payload] };
    }
    case 'edit': {
      state.contacts[action.payload.old] = action.payload.new;
      state.contacts = [...state.contacts];
      return { ...state,selected:null};
    }
    case 'select': {
      console.log('be')
      return {...state,selected:action.payload.old};
    }
    case 'cancel-select':{
      return {...state,selected:null}
    }
    default:
      return state;
  }
};
