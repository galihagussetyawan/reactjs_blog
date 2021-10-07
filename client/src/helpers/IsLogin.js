import { authenticationService } from '../services/Authentication-Service';

export const isLogin = () => {

    if (authenticationService.currentUserValue) {
        return true;
    }

    return false;
};