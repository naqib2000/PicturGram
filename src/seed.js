/* eslint-disable no-plusplus */
// NOTE: replace "ZuZPT8Vo8PX8hz34nDRKeTeMtbu2" with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  const users = [
    {
      userId: "ZuZPT8Vo8PX8hz34nDRKeTeMtbu2",
      username: "muhammad",
      fullName: "muhammad hussain",
      emailAddress: "muhammmadnaqib2000@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "samiya",
      fullName: "samiya almalaki",
      emailAddress: "samiyaalmalaki@random.com",
      following: [],
      followers: ["ZuZPT8Vo8PX8hz34nDRKeTeMtbu2"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "ragad",
      fullName: "ragad alameri",
      emailAddress: "ragadalameri@random.com",
      following: [],
      followers: ["ZuZPT8Vo8PX8hz34nDRKeTeMtbu2"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "fatima",
      fullName: "fatima alqudsi",
      emailAddress: "fatimaalqudsi@random.com",
      following: [],
      followers: ["ZuZPT8Vo8PX8hz34nDRKeTeMtbu2"],
      dateCreated: Date.now(),
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "2",
        imageSrc: `/images/users/samiya/${i}.jpg`,
        caption: "Nature",
        likes: [],
        comments: [
          {
            displayName: "ragad",
            comment: "Love this place, looks so beautiful!",
          },
          {
            displayName: "fatima",
            comment: "Would you mind if I used this picture?",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}
