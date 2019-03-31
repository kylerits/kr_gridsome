import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUser, faFileInvoice, faCodeBranch, faMugHot, faToolbox } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faTwitter, faUser, faMugHot, faCodeBranch, faToolbox)

export default function (Vue) {
  Vue.component('font-awesome', FontAwesomeIcon)
}