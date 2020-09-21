import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, far, fas)

export default ({ Vue }) => {
  Vue.component('FontAwesomeIcon', FontAwesomeIcon)
  Vue.component('FontAwesomeLayers', FontAwesomeLayers)
  Vue.component('FontAwesomeLayersText', FontAwesomeLayersText)
}