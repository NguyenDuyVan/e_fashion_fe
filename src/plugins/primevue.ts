import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    ripple: true,
    inputStyle: 'filled',
    zIndex: {
      modal: 1100,
      overlay: 1000,
      menu: 1000,
      tooltip: 1100,
    },
  })
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('Calendar', Calendar)

  // other components that you need
})
