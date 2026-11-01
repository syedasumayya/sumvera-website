export interface Review {
  id: string;
  name: string;
  city?: string;
  /** Leave out if the customer didn't give stars. No stars or average are shown for it. */
  rating?: 1 | 2 | 3 | 4 | 5;
  /** Which product the review is about (optional). */
  product?: string;
  /** Shown as written, e.g. "October 2026" (optional). */
  date?: string;
  text: string;
}

/* Only add REAL customer reviews here (with their permission). */
export const reviews: readonly Review[] = [
  {
    id: "r-ayesha",
    name: "Ayesha",
    text: "The tracksuit is very good, and the quality is great too.",
  },
  {
    id: "r-ali",
    name: "Ali",
    text: "The colours of the tracksuit are really good.",
  },
  {
    id: "r-amjad",
    name: "Amjad",
    text: "The tracksuit was perfect. My wife liked it a lot.",
  },
];
