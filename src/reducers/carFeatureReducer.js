import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const carFeatureReducer = (state = initialState, action) => {
    console.log('carFeatureReducer', action, state)
    switch (action.type) {
        case ADD_FEATURE:
                console.log('AddFeature reducer: action.payload', action.payload)
            return {
                ...state,
                additionalPrice: (state.additionalPrice + action.payload.price),
                car: {...state.car, features: [...state.car.features, action.payload]},
                additionalFeatures: state.additionalFeatures.filter( feature => {
                   return feature.id !== action.payload.id
                })
            }
        case REMOVE_FEATURE:
                console.log('RemoveFeature reducer: action.payload', action.payload)
                console.log("RemoveFeature state.additionalPrice & action.payload.price", state.additionalPrice, action.payload.price)
            return {
                ...state,
                additionalPrice: (state.additionalPrice - action.payload.price),
                car: {...state.car, features: state.car.features.filter( feature => {
                    return feature.id !== action.payload.id
                })},
                additionalFeatures: [...state.additionalFeatures, action.payload]
            }
        default:
            return state;
    }
};