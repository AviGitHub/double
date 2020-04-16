function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context("./res", false, /\.(png|jpe?g|svg)$/))
.map((e, index) => ({
    pic: e,
    picId: index
}));

export default images;
