const superHero: string[] = [];

superHero.push("Thor");

console.log(superHero);

const heroPower: Array<number> = [];

heroPower.push(7);
console.log(heroPower);

type User = {
  name: string;
  isActive: boolean;
};

const users: Array<User> = [];

users.push({ name: "Joseph", isActive: true });
console.log(users);

export {};
