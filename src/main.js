import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

inView(".fotoinview", () => {
  animate("#Pierre", { opacity: [0, 1] }, { duration: 10 });
});
