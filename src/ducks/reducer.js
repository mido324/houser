const initialState = { //simulation -2    43G
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}
const UPDATE_PROP = "UPDATE_PROP"
const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";
const UPDATE_CITY = "UPDATE_CITY"

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_LOAN_TYPE:
            return Object.assign({}, state, {loanType: action.payload});

case UPDATE_PROPERTY_TYPE : //simulation-2 43E
//43 F
            return Object.assign({}, state, {propertyType: action.payload});
        default:
            return state;
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload})
        case UPDATE_PROP:
            return Object.assign({}, state, {prop: action.payload})
    }
}
export function updateLoanType(loanType) {
    return {type: UPDATE_LOAN_TYPE, payload: loanType}
}
export function updatePropertyType(property) {
    return {type: UPDATE_PROPERTY_TYPE, payload: property}
}

export function updateCity(city) {
    return {type: UPDATE_CITY, payload: city};
}
export function updateProp(prop) {
    return {type: UPDATE_PROP, payload: prop}
}
export default reducer;
// simulation -2 43D