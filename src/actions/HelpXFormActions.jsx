import { CREATE_HELPX_URL, GET_HELPX_URL, SERVER_URL } from "../config"

const addHelpX = (payload) =>  {
    return {
        type: 'ADD_HELPX',
        payload
    }
}

export const setHelpXData = (payload) =>  {
    return {
        type: 'SET_HELPX_DATA',
        payload
    }
}

const parseRequestBody = (helpXData) => {
    const reqBody =  {
    title: helpXData.title,
    subtitle: helpXData.subtitle,
    paragraph: helpXData.paragraph,
    image : {
        imageURL: helpXData.imageURL,
        imageAtlText: helpXData.imageAtlText
    }

    };

    return reqBody;
}


export const addHelpXData = () => {
    return (dispatch, getState) => {
        const helpX = getState().helpX;

        const helpxRequestBody = parseRequestBody(helpX);

        return fetch(`${SERVER_URL}${CREATE_HELPX_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-gw-auth-id': getState().user?.userId
                 // Add other headers as needed
                },
                body: JSON.stringify(helpxRequestBody)
            })
        .then((response) => {
            dispatch(addHelpX(helpX));
        })
        .catch(error => console.log(error));
    };
}

export const getHelpXData = (helpXId) => {
    return (dispatch, getState) => {

        return fetch(`${SERVER_URL}${GET_HELPX_URL}/${helpXId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-gw-auth-id': getState().user.userId
                 // Add other headers as needed
                }
            })
        .then((response) => {
            dispatch(setHelpXData(response.schema));
        })
        .catch(error => console.log(error));
    };
}