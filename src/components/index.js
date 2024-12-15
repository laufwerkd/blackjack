import AppMenu from './AppMenu.vue'
import AppThemeSwitcher from './AppThemeSwitcher.vue'

import BaseButton from './BaseButton.vue'
import BaseCard from './BaseCard.vue'

export const registerComponents = (app) => {
  app.component('AppMenu', AppMenu)
  app.component('AppThemeSwitcher', AppThemeSwitcher)

  app.component('BaseButton', BaseButton)
  app.component('BaseCard', BaseCard)
}
