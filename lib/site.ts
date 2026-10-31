// Business details used by the footer, page metadata and structured data.
// Keep them identical to the Google Business Profile and directory listings.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://w3tec.com").replace(/\/$/, "");
export const SITE_NAME = "W3 Technologies";

export const contact = {
  phone: "+91 741-693-9333",
  phoneHref: "tel:+917416939333",
  phoneSchema: "+91-7416939333",
  email: "info@w3tec.com",
};

export const address = {
  street: "Prime Plaza, 207, Madras Busstand, near South Indian Shopping Mall, Ramesh Reddy Nagar",
  locality: "Nellore",
  region: "Andhra Pradesh",
  postalCode: "524003",
  country: "India",
  countryCode: "IN",
};

export const fullAddress = `${address.street}, ${address.locality}, ${address.region} ${address.postalCode}, ${address.country}`;

export const socialLinks = [
  { href: "https://www.instagram.com/w3tecnologies", icon: "insta-icon" },
  { href: "https://www.facebook.com/w3tecnologies", icon: "fb-icon" },
  { href: "https://www.youtube.com/@w3tecnologies", icon: "youtube-icon" },
  { href: "https://www.linkedin.com/company/w3tecnologies", icon: "linkedin-icon" },
];
