import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import usePhotos from "../hooks/use-photos";

export default function Timeline() {
  // we need to get the logged users photos
  const { photos } = usePhotos();
  console.log("photos", photos);
  // on loading the photos we need to use the react skeleton
  // if we have photos we need to render them (Create a post component)
  // if the user has no photos tell them to create some photos

  return (
    <div className="container col-span-2">
      <p>I am the timeline</p>
    </div>
  );
}
