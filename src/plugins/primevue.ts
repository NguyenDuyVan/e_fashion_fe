import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import { defineNuxtPlugin } from 'nuxt/app'
import Badge from 'primevue/badge'
import BadgeDirective from 'primevue/badgedirective'
import InputText from 'primevue/inputtext'

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
  // Directive
  nuxtApp.vueApp.directive('badge', BadgeDirective)

  // Component
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('Calendar', Calendar)
  nuxtApp.vueApp.component('Badge', Badge)
  nuxtApp.vueApp.component('InputText', InputText)
})
