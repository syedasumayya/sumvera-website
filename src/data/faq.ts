export interface FaqItem {
  q: string;
  a: string;
}

/* Edit these answers to match your real policies. Where a policy isn't decided yet,
   the answer sends people to WhatsApp instead of promising something. */
export const faqs: readonly FaqItem[] = [
  {
    q: "Which sizes do you have?",
    a: "Our tracksuits come in S, M, L and XL. Not sure which to pick? Message us on WhatsApp with your height and your usual size and we'll help you choose.",
  },
  {
    q: "How do I place an order?",
    a: "Message us on WhatsApp with the tracksuit, colour and size you want, and we'll help you place the order.",
  },
  {
    q: "How long does delivery take, and what does it cost?",
    a: "Send us your city on WhatsApp and we'll confirm the delivery time and charges for you.",
  },
  {
    q: "What if the size doesn't fit?",
    a: "Message us on WhatsApp as soon as your order arrives and we'll go through the options for your order.",
  },
  {
    q: "Will the colour match the photos?",
    a: "Colours can look slightly different from screen to screen. If you want to double-check a shade before ordering, message us and we'll help.",
  },
  {
    q: "What is the premium line?",
    a: "A small collection of two premium tracksuits. You'll find them under Premium on the home page.",
  },
];
