const num = (state = 0, action) => {
    switch (action.type) {
      case 'ADD_NUM':
        return state+1;
      case 'DEL_NUM':
        return state-1;
      default:
        return state
    }
  }
  
  export default num