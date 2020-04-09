import createContext from "./createContext";
import trackerApi from '../api/track'
const authReducer = (state , action) => {
    switch(action.type){
        default:
            return state;
    }
};
const signup = dispatch => {
    return async ({email , password }) => {
        try{
            const response = await trackerApi.post('/signup', {email , password})
            console.log(response.data)

        }catch(err){
            console.log(err)
        }
    }
}
const signin = dispatch => {
    return ({email , password}) => {

    }
}



export const {Provider , Context} = createContext(
    authReducer,
    {signin , signup},
    {isSignedIn: false}
);