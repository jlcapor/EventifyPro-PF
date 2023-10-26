
const initialState ={
    user: '',
}
const eventReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'SOME_ACTION':
            return{
                
            }
        default:
          return state; 
    }
}


export default eventReducer