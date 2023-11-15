import { GET_FAQ_URL, SERVER_URL, CREATE_FAQ_URL } from "../config";

const addFaq = (payload) =>  {
    return {
        type: 'ADD_FAQ',
        payload
    }
}

export const setFaqData = (payload) =>  {
    return {
        type: 'SET_FAQ_DATA',
        payload
    }
}


export const addFaqData = (faq) => {
    return (dispatch, getState) => {

        return fetch(`${SERVER_URL}${CREATE_FAQ_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-gw-auth-id': getState().user.userId
                 // Add other headers as needed
                },
                body: JSON.stringify(faq)
            })
            .then(response => response.json())
            .then(data => {
            dispatch(addFaq(faq));
        })
        .catch(error => console.log(error));
    };
}

export const getFaqData = (faqId) => {
    return (dispatch, getState) => {

        return fetch(`${SERVER_URL}${GET_FAQ_URL}/${faqId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-gw-auth-id': getState().user.userId
                 // Add other headers as needed
                }
            })
            .then(response => response.json())
            .then(data => {
            dispatch(setFaqData(data));
        })
        .catch(error => console.log(error));
    };
}