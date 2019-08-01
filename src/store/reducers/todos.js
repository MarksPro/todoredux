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
    default:
      return state;
  }
}

export default todos;