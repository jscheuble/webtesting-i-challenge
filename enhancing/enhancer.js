module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item }, item.enhancement < 20 && item.enhancement++;
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item }, (item.durability = 100);
}

function get(item) {
  return { ...item };
}
