import horizonImg from "../assets/horizon_square.png";
import adrianoImg from "../assets/adriano_square.png";
import conservationImg from "../assets/conservation_square.png";
import elysianImg from "../assets/elysian_square.png";

export const projects = [
  {
    id: "horizon",
    title: "Horizon",
    subtitle: "Horizon Interiors",
    tags: ["Branding", "Stratégie", "Web Design"],
    image: horizonImg,
    color: "#73786D",
    span: "md:col-span-2",
    overview: "Une identité visuelle et une expérience numérique raffinées pour un studio d'architecture d'intérieur haut de gamme. L'objectif était de traduire l'élégance et la précision de leurs projets physiques dans le monde numérique.",
    services: ["Brand Strategy", "Visual Identity", "UX/UI Design", "Development"],
    client: "Horizon Interiors",
    date: "2024",
    results: [
      { label: "Augmentation du trafic", value: "+150%" },
      { label: "Nouveaux leads qualifiés", value: "32" },
      { label: "Temps sur site", value: "4m 20s" }
    ],
    content: [
      {
        type: "text",
        title: "Le Défi",
        text: "Horizon Interiors disposait d'un portfolio impressionnant mais d'une présence en ligne qui ne reflétait pas la qualité de leur travail. Il fallait créer un pont entre l'espace physique et digital."
      },
      {
        type: "full-image",
        image: horizonImg,
        caption: "Aperçu de l'interface minimaliste"
      },
      {
        type: "grid",
        images: [horizonImg, adrianoImg]
      },
      {
        type: "text",
        title: "L'Approche",
        text: "Nous avons mis l'accent sur la typographie et le vide (white space) pour laisser les photos des projets respirer. Chaque transition a été pensée pour évoquer le calme et la sérénité."
      }
    ]
  },
  {
    id: "adriano",
    title: "Adriano",
    subtitle: "Maison Adriano",
    tags: ["Web Design", "UX Research", "E-commerce"],
    image: adrianoImg,
    color: "#9E8B83",
    span: "md:col-span-1",
    overview: "Refonte de l'expérience e-commerce pour une marque de maroquinerie artisanale. Un mélange de tradition et de modernité pour optimiser le parcours d'achat tout en racontant une histoire.",
    services: ["E-commerce Strategy", "UX Research", "Web Design"],
    client: "Maison Adriano",
    date: "2023",
    results: [
      { label: "Taux de conversion", value: "+2.4%" },
      { label: "Ventes mobiles", value: "+80%" }
    ],
    content: [
      {
        type: "text",
        title: "L'Histoire",
        text: "Adriano est une marque familiale. Chaque produit est unique. Le site devait transmettre ce sentiment d'exclusivité."
      }
    ]
  },
  {
    id: "conservation-montgomery",
    title: "Conservation Montgomery",
    subtitle: "Préservation du Patrimoine",
    tags: ["Image de Marque", "SEO", "Web"],
    image: conservationImg,
    color: "#8FA39D",
    span: "md:col-span-1",
    overview: "Création d'une plateforme d'information et de sensibilisation pour une organisation de préservation de l'environnement.",
    services: ["Branding", "Content Strategy", "Web Development"],
    client: "Conservation Montgomery",
    date: "2024",
    results: [
      { label: "Visibilité SEO", value: "+300%" }
    ],
    content: []
  },
  {
    id: "elysian",
    title: "Elysian Studio",
    subtitle: "Elysian Creative Studio",
    tags: ["UX/UI Design", "Visuals"],
    image: elysianImg,
    color: "#A4928A",
    span: "md:col-span-2",
    overview: "Identité visuelle complète pour un studio de création multidisciplinaire.",
    services: ["Art Direction", "Graphic Design", "Web Design"],
    client: "Elysian Studio",
    date: "2023",
    results: [],
    content: []
  }
];
