const { repair, succeed, fail, get } = require("./enhancer.js");
// test away!

const item = {
  name: "item",
  durability: 0,
  enhancement: 0,
};

describe("enhancer.js", () => {
  describe("repair()", () => {
    it("should accept an item object and restore durability to 100", () => {
      repair(item);
      expect(item.durability).toBe(100);
    });
  });
});
