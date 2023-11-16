import {CREATE_USER_URL, GET_USER_URL, SERVER_URL } from "../config"

const createUser = (payload) =>  {
    return {
        type: 'CREATE_USER',
        payload
    }
}

const isUserAuthenticated = (payload) => {
    return {
        type: 'SET_USER_AUTHENTICATION',
        payload
    };
}

export const setUserData = (payload) =>  {
    return {
        type: 'SET_USER_DATA',
        payload
    }
}


export const createNewUser = (user) => {
    return (dispatch, getState) => {

        return fetch(`${SERVER_URL}${CREATE_USER_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                 // Add other headers as needed
                },
                body: JSON.stringify(user)
            })
            .then(response => response.json())
            .then(data => {
            dispatch(createUser(data.user));
            dispatch(isUserAuthenticated(true));
        })
        .catch(error => {
            dispatch(isUserAuthenticated(false));
            console.log(error);
        });
    };
}

export const getUserData = (email) => {
    return (dispatch, getState) => {

        return fetch(`${SERVER_URL}${GET_USER_URL}/${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                 // Add other headers as needed
                }
            })
            .then(response => response.json())
            .then(data => {
              // Access the properties of the "user" object
            dispatch(setUserData(data));
            dispatch(isUserAuthenticated(true));
        })
        .catch(error => {
            dispatch(isUserAuthenticated(false));
            console.log(error);
        });
    };
}

