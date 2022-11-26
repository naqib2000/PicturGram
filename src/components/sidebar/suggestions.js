import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getSuggestedProfiles } from "../../services/firebase";
import SuggestedProfile from "./suggested-profile";

export default function Suggestions({ userId, following }) {
  const [profiles, setProfiles] = useState(null);

  //get suggested profiles
  useEffect(() => {
    async function SuggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response);
    }

    if (userId) {
      SuggestedProfiles();
    } 
  }, [userId]);

  //use firebase service (Call using userId)
  //getSuggestedProfiles
  //call the async function from firebase within useEffect
  //store it in the state
  //render (wait on the profiles as in "skeleton")

  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center align-items justify-between mb-2">
        <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>
      <div className="mt-5 grid gap-5">
        {profiles.map((profile) => (
          <SuggestedProfile
            key={profile.docId}
            userDocId={profile.docId}
            username={profile.username}
            profileId={profile.userId}
            userId={userId}
          />
        ))}
      </div>
    </div>
  ) : null;
}

Suggestions.propTypes = {
  userId: PropTypes.string,
  following: PropTypes.array,
};
