import type { CartItem } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { site } from "@/data/site";

export interface OrderDetails {
  name: string;
  phone: string;
  city: string;
  address: string;
}

export type OrderErrors = Partial<Record<keyof OrderDetails, string>>;

export function validateOrder(d: OrderDetails): OrderErrors {
  const errors: OrderErrors = {};
  if (d.name.trim().length < 2) errors.name = "Please enter your full name";
  const digits = d.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) errors.phone = "Please enter a valid phone number";
  if (d.city.trim().length < 2) errors.city = "Please enter your city";
  if (d.address.trim().length < 10) errors.address = "Please enter your full address";
  return errors;
}

/** The text customers send us on WhatsApp. Payment is always Cash on Delivery. */
export function buildOrderMessage(items: readonly CartItem[], subtotal: number, d: OrderDetails): string {
  const lines = items.map(
    (i, n) =>
      `${n + 1}. ${i.name} (${i.variantName}, Size ${i.size}) x ${i.qty} = ${formatPrice((i.price ?? 0) * i.qty)}`,
  );
  return [
    "Hi SUMVERA! I'd like to place an order.",
    "",
    "*Order*",
    ...lines,
    "",
    `*Total: ${formatPrice(subtotal)}*`,
    "Payment: Cash on Delivery",
    "(Delivery charges to be confirmed)",
    "",
    "*My details*",
    `Name: ${d.name.trim()}`,
    `Phone: ${d.phone.trim()}`,
    `City: ${d.city.trim()}`,
    `Address: ${d.address.trim()}`,
  ].join("\n");
}

export const orderUrl = (message: string): string =>
  `${site.whatsapp.href}?text=${encodeURIComponent(message)}`;
