const through = (p, p1) => {
  p(p1);
};

const pr1 = (p) => {
  console.log("okay done pr1:",p);
};

const pr2 = (p) => {
  console.log("okay done pr2:",p);
};

const pr3 = (p) => {
  console.log("okay done pr2:",p);
};

through(pr1, "sahid");
through(pr2, "raju");
