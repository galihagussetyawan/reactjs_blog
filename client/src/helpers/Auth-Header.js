import { authenticationService } from '../services/Authentication-Service';

export function authHeader() {

    //return authorized header with jwt token
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.accessToken) {
        return { "x-access-token": currentUser.accessToken };
    } else {
        return {};
    }
};