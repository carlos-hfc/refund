import accommodationImg from "@/assets/accommodation.svg"
import foodImg from "@/assets/food.svg"
import othersImg from "@/assets/others.svg"
import servicesImg from "@/assets/services.svg"
import transportImg from "@/assets/transport.svg"

export const CATEGORIES = {
  food: {
    name: "Alimentação",
    icon: foodImg,
  },
  others: {
    name: "Outros",
    icon: othersImg,
  },
  services: {
    name: "Serviços",
    icon: servicesImg,
  },
  transport: {
    name: "Transporte",
    icon: transportImg,
  },
  accommodation: {
    name: "Acomodação",
    icon: accommodationImg,
  },
}

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>
