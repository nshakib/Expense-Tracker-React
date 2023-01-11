export default (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION' :
            return{
                ...state,
                transactions:state.transactions.filter(transactions => transactions.id !== action.playload)
            }
        case 'ADD_TRANSACTION' :
            return{
                ...state,
                transactions: [action.playload, ...state.transactions]
            }
        default:
            return state;
    }
}