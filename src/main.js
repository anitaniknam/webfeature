import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

inView(".fotoinview", () => {
  animate("#Pierre", { opacity: [0, 1] }, { duration: 5 });
});

inView(".fotoinview", () => {
  animate(
    "#staggeranimation img",
    { opacity: [0, 1] },
    {
      delay: stagger(1, { start: 2 }),
    }
  );
});

inView(".inviewnotinview", ({ target }) => {
  animate(target, { rotate: 90 }, { delay: 0.7, duration: 2 });
  return () => {
    animate(target, { rotate: 0 });
  };
});

const zoomeffekt = [
  [".zoomeffekt", { transform: "scale(1.5) rotate(90deg)" }, { duration: 0.5 }],
  [".zoomeffekt", { transform: "scale(1) rotate(90deg)" }, { duration: 1 }],
];

inView(".zoomeffekt", ({ target }) => {
  timeline(zoomeffekt);
});

const zoom = [
  [".zoom", { transform: "scale(0.7)" }, { duration: 0.1 }],
  [".zoom", { transform: "scale(1.3)" }, { duration: 5 }],
];

inView(".zoom", ({ target }) => {
  timeline(zoom);
});

const zoom1 = [
  [".zoom1", { transform: "scale(0.7)" }, { duration: 0.1 }],
  [".zoom1", { transform: "scale(1.1)" }, { duration: 5 }],
];

inView(".zoom1", ({ target }) => {
  timeline(zoom1);
});
