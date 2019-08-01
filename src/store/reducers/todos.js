const INITIAL_STATE = [
  { 
    id: Math.random(), 
    text: 'Criar lista de tarefas', 
    completed: false 
  },
  { 
    id: Math.random(), 
    text: 'Criar aplicação web/app react + redux', 
    completed: false 
  }
]

function todos(state = INITIAL_STATE, action){
  switch(action.type){
    case 'ADD_TODO':
      return [...state, {
        id: Math.random(),
        text: action.payload.text,
        completed: false
      }];
    case 'REMOVE_TODO':
      return state.filter(todo => (
        todo.id !== action.payload.id
      ));
    case 'IS_COMPLETED':
      const index = state.findIndex(todo => (
        todo.id === action.payload.id
      ));
      const stateCopy = [...state];
      stateCopy.splice(
        index, 1, 
        {...stateCopy[index], completed: !stateCopy[index].completed});
      return stateCopy;
    case 'SELECT_REMOVE':
      return state.filter(todo => (
        todo.completed !== true
      ));
    case 'REMOVE_ALL':
      return state = [];
    default:
      return state;
  }
}

export default todos;