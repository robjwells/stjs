const people = [
  { personal: "Jean", family: "Jennings" },
  { personal: "Marlyn", family: "Wescoff" },
  { personal: "Ruth", family: "Lichterman" },
  { personal: "Betty", family: "Snyder" },
  { personal: "Frances", family: "Bilas" },
  { personal: "Kay", family: "McNulty" },
];

const result = people.filter(
  ({ personal, family }) => personal.charAt(0) >= family.charAt(0)
);

console.log(result);
