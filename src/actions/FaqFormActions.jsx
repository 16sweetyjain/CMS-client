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


export const addFaqData = () => {
    return (dispatch, getState) => {
        const faq = getState().faq;

        return fetch(`${SERVER_URL}${CREATE_FAQ_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                 // Add other headers as needed
                },
                body: JSON.stringify(faq)
            })
        .then((response) => {
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
                 // Add other headers as needed
                }
            })
        .then((response) => {
            dispatch(setFaqData(response.schema));
        })
        .catch(error => console.log(error));
    };
}