const FontFaceObserver = require("fontfaceobserver");

const Fonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Manjari:wght@100;400;700&family=Prompt:wght@300;400;500;700&family=Roboto:wght@100;400;500;700&display=swap";
  link.rel = "stylesheet";

  link.href = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const roboto = new FontFaceObserver("Roboto");

  roboto.load().then(() => {
    document.documentElement.classList.add("roboto");
  });

  const prompt = new FontFaceObserver("Prompt");

  prompt.load().then(() => {
    document.documentElement.classList.add("prompt");
  });

  // const hammersmithone = new FontFaceObserver("HammersmithOne");

  // hammersmithone.load().then(() => {
  //   document.documentElement.classList.add("hammersmithone");
  // });

  const manjari = new FontFaceObserver("Manjari");

  manjari.load().then(() => {
    document.documentElement.classList.add("manjari");
  });
};

export default Fonts;
