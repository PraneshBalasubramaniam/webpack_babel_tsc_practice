const val: string = "val";

const a = [
  "some string",
  "some string",
  "some string",
  "some string",
  "some string",
  "some string",
  "some string",
  "some string",
  "some string",
];

const ab = a.map((str) => ({ val: str }));

export { val, ab };
