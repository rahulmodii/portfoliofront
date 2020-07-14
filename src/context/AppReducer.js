export default(state,action)=>{
    switch (action.type) {
        case  'FETCH_DATA':
            return {
                ...state,
                data : action.payload,
                loading:false
            }
        default:
            return state
            
    }
}