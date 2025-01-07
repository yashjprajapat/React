import { createContext } from "react";

const UserContext = createContext(
        {
            currentUser: 'Default',
        }
) ;

export default UserContext;