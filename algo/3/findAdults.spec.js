// ⚠️ NE PAS TOUCHER

const findAdults = require("./findAdults");

const persons = [
  { name: "Mary Poppins", age: 32, sex: "female" },
  { name: "Tony Stark", age: 36, sex: "male" },
  { name: "John Doe", age: 12, sex: "male" },
  { name: "Jane Doe", age: 6, sex: "female" },
  { name: "Homer Simpson", age: 45, sex: "male" },
  { name: "Leonardo Di Caprio", age: 42, sex: "male" },
  { name: "Carla Bruni", age: 54, sex: "female" },
  { name: "Lisa Simpson", age: 13, sex: "female" },
  { name: "Millie Bobby Brown", age: 15, sex: "female" },
  { name: "Penelope Cruz", age: 47, sex: "female" },
];

test("both length should be 3", () => {
  expect(findAdults(persons)[0].length).toBe(3);
  expect(findAdults(persons)[1].length).toBe(3);
});

test("adult array should include Homer", () => {
  expect(findAdults(persons)[1].some((e) => e.name === "Homer Simpson")).toBe(
    true
  );
});
