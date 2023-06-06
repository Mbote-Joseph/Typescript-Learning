interface User {
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: ()=> string;
  startTrail(): string;
  getCoupon(couponname: string): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "learner";
}

const mbote: User = {
  email: "mbote@gmail.com",
  userId: 33,
  githubToken: "tyuhgb6788",
  startTrail: () => {
    return "Trail started";
  },
  getCoupon: (name: "mbote") => {
    //The name doesn't necessarily need to match the name that was passed
    return 10;
  },
};

const jose: Admin = {
  email: "mbote@gmail.com",
  userId: 33,
  githubToken: "tyuhgb6788",
  role: "admin",
  startTrail: () => {
    return "Trail started";
  },
  getCoupon: (name: "mbote") => {
    //The name doesn't necessarily need to match the name that was passed
    return 10;
  },
};

console.log(mbote);

console.log(mbote.email);
console.log(mbote.userId);

console.log(jose);
export {};
