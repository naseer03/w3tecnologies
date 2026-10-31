// Owl Carousel ships no types; this covers the options the site uses.
type OwlCarouselOptions = {
  items?: number;
  loop?: boolean;
  margin?: number;
  nav?: boolean;
  autoplay?: boolean;
  merge?: boolean;
  video?: boolean;
  center?: boolean;
  responsive?: Record<number, { items: number }>;
};

interface JQuery {
  owlCarousel(options?: OwlCarouselOptions): JQuery;
}

declare module "owl.carousel";
declare module "bootstrap/dist/js/bootstrap.bundle.min.js";
