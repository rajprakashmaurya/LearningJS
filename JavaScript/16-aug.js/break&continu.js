function exerciseFor10Days(person) {
  for (let day = 1; day <= 10; day++) {
    if (day == 3 && person.age >= 65) {
      console.log("Dont run today, come tomorrow");
      continue;
    }

    console.log("Running on day " + day);

    if (day == 3 && person.age <= 5) {
      console.log(
        "You are a kid, enough exercises for you, go home, dont come tomorrow"
      );
      break;
    }
  }
}

let person = {
  name: "santosh",
  age: 65,
};

exerciseFor10Days(person);
