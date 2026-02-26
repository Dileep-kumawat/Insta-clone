import { createContext, useState } from "react";

export const ProfileContext = createContext();

export default function ProfileProvider({ children }) {
    const [nooffollowers, setNooffollowers] = useState(0);
    const [nooffollowings, setNooffollowings] = useState(0);

    return <ProfileContext.Provider value={{ nooffollowers, nooffollowings, setNooffollowers, setNooffollowings }}>
        {children}
    </ProfileContext.Provider>
}