export const ADD_FEATURE = 'ADD_FEATURE'

export const addFeature = (feature) => {
    console.log('addFeature action called')
    return { type: ADD_FEATURE, payload: feature }
}


export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const removeFeature = (feature) => {
    console.log('removeFeature action called')
    return { type: REMOVE_FEATURE, payload: feature }
}