import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

inView(".fotoinview", () => {
  animate("#Pierre", { opacity: [0, 1] }, { duration: 10 });
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
  animate(target, { rotate: 90 }, { delay: 1, duration: 2 });
  return () => {
    animate(target, { rotate: 0 });
  };
});

const zoomeffekt = [
  [".zoomeffekt", { transform: "scale(1.5) rotate(90deg)" }, { duration: 0.5 }],
  [".zoomeffekt", { transform: "scale(1) rotate(90deg)" }, { duration: 1 }],
];
// timeline(zoomeffekt);

inView(".zoomeffekt", ({ target }) => {
  timeline(zoomeffekt);
});
