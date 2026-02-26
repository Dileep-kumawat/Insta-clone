import { useContext } from "react";
import { getNoOfFollowers, getNoOfFollowings } from "../services/profile.api";
import { ProfileContext } from "../profile.context";

export function useProfile() {
    const { nooffollowers, nooffollowings, setNooffollowers, setNooffollowings } = useContext(ProfileContext);

    async function handleGetNoOfFollowers() {
        const nooffollowers = await getNoOfFollowers();
        setNooffollowers(nooffollowers.followersRecord);
    }

    async function handleGetNoOfFollowings() {
        const nooffollowings = await getNoOfFollowings();
        setNooffollowings(nooffollowings.followingsRecord);
    }

    return { nooffollowers, handleGetNoOfFollowers, handleGetNoOfFollowings, nooffollowings };
}