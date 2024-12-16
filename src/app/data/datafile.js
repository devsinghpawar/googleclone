import data from "../data/products.json";

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

const Datafunc = () => {
  let arr = [...data].filter((el) => el.image.includes("http"));
  shuffle(arr);

  return arr.splice(1, 100);
};
export { Datafunc };
