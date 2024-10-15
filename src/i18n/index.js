import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        contact: 'Contact',
        experiences:'Experience'
    },
    khm: {
        home: 'ទំព័រដើម',
        about: 'អំពីខ្ញុំ',
        skills: 'ជំនាញ',
        contact: 'ទំនាក់ទំនង',
        experiences: 'បទពិសោធន៍'

    }
}

const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n