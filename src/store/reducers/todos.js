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
    default:
      return state;
  }
}

export default todos;