const initialState = {
    items: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add_to_cart':
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case 'remove_from_cart':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            }
        default:
            return state
    }
}

export default cartReducer