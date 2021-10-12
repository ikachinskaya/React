//reducer - чистая функцая, которая емеет изменять состояние

//генерирует новое состояние
//state - какое состояние было
//action - что произошло
function reducer(state, action) {
  const { value, name } = action;
  const newState = {
    //достаем старый state
    ...state,
    //кладем новое значение value
    [name]: value,
  };
  return newState;
}
export default reducer;
