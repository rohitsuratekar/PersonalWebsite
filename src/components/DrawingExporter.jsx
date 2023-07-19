import sketch1 from "@/assets/drawing/suratekar_sketch1.jpg";
import sketch2 from "@/assets/drawing/suratekar_sketch2.jpg";
import sketch3 from "@/assets/drawing/suratekar_sketch3.jpg";
import sketch4 from "@/assets/drawing/suratekar_sketch4.jpg";
import sketch5 from "@/assets/drawing/suratekar_sketch5.jpg";
import sketch6 from "@/assets/drawing/suratekar_sketch6.jpg";
import sketch7 from "@/assets/drawing/suratekar_sketch7.jpg";
import sketch8 from "@/assets/drawing/suratekar_sketch8.jpg";
import sketch9 from "@/assets/drawing/suratekar_sketch9.jpg";

const allSketches = [
  sketch1,
  sketch2,
  sketch3,
  sketch4,
  sketch5,
  sketch6,
  sketch7,
  sketch8,
  sketch9,
]
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

export default allSketches;
