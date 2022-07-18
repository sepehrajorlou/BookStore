import Vue from 'vue'
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  'en': {
    username: 'Username'
  },
  'se': {
    username: 'Användarnamn'

  }
};

export let i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'se', // set fallback locale
  messages, // set locale messages
});