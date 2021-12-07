const people = [
  { personal: 'Christine', family: 'Darden' },
  { personal: 'Mary', family: 'Jackson' },
  { personal: 'Katherine', family: 'Johnson' },
  { personal: 'Dorothy', family: 'Vaughan' }
]

for (const {personal, family} of people) {
  console.log(`${family}, ${personal}`)
}
