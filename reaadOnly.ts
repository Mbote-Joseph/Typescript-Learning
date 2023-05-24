type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
};

// Defining an object
let myUser: User = {
  _id: "1233",
  name: "Joseph",
  email: "joseph@gmail.com",
  isActive: false,
};

// Trying to modify an object
// myUser._id = "12303"; - ID in this case can not be modified.
myUser.name = "Mbote";
myUser.email = "mbote@gmail.com";

export {};
