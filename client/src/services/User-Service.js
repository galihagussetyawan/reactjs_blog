import Axios from 'axios';
import { authHeader } from '../helpers/Auth-Header';
import { authenticationService } from '../services/Authentication-Service';

function isAdmin() {
    return Axios.get("http://localhost:5000/api/admin", {
        headers: authHeader()
    })
        .then(response => {
            if (!response.ok) {
                if ([400, 401, 403].indexOf(response.status) !== -1) {

                    authenticationService.logout();
                    window.location.reload(true);
                }
            }

            return response;
        })
        .catch(error => error && error.message)

};

async function updateUser(id, username, firstname, lastname, email) {
    return await Axios.put("http://localhost:5000/api/users/" + id, {
        username,
        firstname,
        lastname,
        email
    })
        .then(response => response)
        .catch(error => error);
};

export const userService = {
    isAdmin,
    updateUser
}