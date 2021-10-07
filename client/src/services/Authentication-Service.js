import Axios from 'axios';
import { BehaviorSubject } from 'rxjs';

// import { handleResponse } from '../helpers/Handle-Response';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem("currentUser")));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() { return currentUserSubject.value }
};

async function login(username, password) {

    return Axios.post("http://localhost:5000/api/signin", {
        username: username,
        password: password
    })
        // .then(handleResponse)
        .then(response => {

            if (!response.ok) {
                if ([401, 403].indexOf(response.status) !== -1) {

                    localStorage.removeItem("currentUser");
                    window.location.reload(true);
                }
            }

            //store user detail and jwt token in localstorage to keep user logged in between  page refreshes
            localStorage.setItem('currentUser', JSON.stringify(response.data));
            currentUserSubject.next(response.data);

            return response;
        })
        .catch(err => err.response);
};

function logout() {

    //remove user from localstorage to log user out
    localStorage.removeItem("currentUser");
    currentUserSubject.next(null);
    window.location.reload(true);
};