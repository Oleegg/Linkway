// add svg circle---------------------
const xmlns = "http://www.w3.org/2000/svg";
const createCircle = () => {
  const circle = document.createElementNS(xmlns, "circle");
  circle.setAttributeNS(null, "cx", "50%");
  circle.setAttributeNS(null, "cy", "50%");
  circle.setAttributeNS(null, "r", "3");
  circle.setAttributeNS(null, "fill", "none");
  circle.setAttributeNS(null, "stroke-width", "1px");
  circle.setAttributeNS(null, "stroke", "#01369D");
  return circle;
};
const createSVG = () => {
  const svg = document.createElementNS(xmlns, "svg");
  svg.setAttributeNS(null, "viewBox", "0 0 7 7");
  svg.setAttributeNS(null, "width", 7);
  svg.setAttributeNS(null, "height", 7);
  svg.setAttributeNS(null, "class", "arrows__circle-svg");

  return svg;
};
const arrowCircle = document.querySelector(".arrows__circle");
const div = document.createElement("div");

for (let i = 0; i < 6; i++) {
  const svg = createSVG();
  const circle = createCircle();
  svg.append(circle);
  if (i === 3) {
    console.log(3);
    circle.setAttributeNS(null, "fill", "#01369D");
  }
  div.append(svg);
}
arrowCircle.append(div);

//------------------------
