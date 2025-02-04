import { faTelegram, faVk, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const modalDataVariations = {
    SERVICE: { type: 'service' },
    LESSONS_FORM: { type: 'lessons_form' },
    ORDER: {type: "order"}
} as const;


export const placeholders = {
    NAME: "Ваше имя",
    NUMBER: "Ваш номер телефона",
    YC: "Вашы контакты"
}

export const contactsIcons = [
    {
        name: "Telegram",
        icon: faTelegram,
        path: "https://t.me/vincentochangretta"
    },
    {
        name: "WhatsApp",
        icon: faWhatsapp,
        path: "https://t.me/vincentochangretta"
    },
    {
        name: "VK",
        icon: faVk,
        path: "https://t.me/vincentochangretta"
    },
]