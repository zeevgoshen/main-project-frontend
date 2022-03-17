import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "zeev goshen",
      image:"https://images.pexels.com/photos/344060/pexels-photo-344060.jpeg?cs=srgb&dl=pexels-alexandr-podvalny-344060.jpg&fm=jpg",
      places: 3
    },
    {
        id: "u2",
        name: "zeev goshen",
        image:"https://images.pexels.com/photos/344060/pexels-photo-344060.jpeg?cs=srgb&dl=pexels-alexandr-podvalny-344060.jpg&fm=jpg",
        places: 3
      },
      {
        id: "u3",
        name: "zeev goshen",
        image:"https://images.pexels.com/photos/344060/pexels-photo-344060.jpeg?cs=srgb&dl=pexels-alexandr-podvalny-344060.jpg&fm=jpg",
        places: 3
      },
      {
        id: "u4",
        name: "zeev goshen",
        image:"https://images.pexels.com/photos/344060/pexels-photo-344060.jpeg?cs=srgb&dl=pexels-alexandr-podvalny-344060.jpg&fm=jpg",
        places: 3
      },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
