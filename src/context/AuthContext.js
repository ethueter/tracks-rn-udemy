import createDataContext from './createDataContext';

const authReducer = (state, action) => {
    switch (action.type) {
        default: 
          return state;
    }
};

const signup = (dispatch) => {
    return ({email, password}) => {
        //make api request to sign up with email and password

        // if we sign up, modify state and say we are authenticated

        // if sign up fails, display error message
    };
};

const signin = (dispatch) => {
    return ({email, password}) => {
        // try to sign in
        // handle success by updating state
        // handle error message
    };
};

const signout = (dispatch) => {
    return () => {
        // try to sign out
    };
};



export const { Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup},
    {isSignedIn: false}
);