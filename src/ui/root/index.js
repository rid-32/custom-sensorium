import jsx from 'custom-elements-jsx'
import 'custom-elements-router'

import history from 'utils/history'
import routes from 'routes'

const root = <custom-router history={history} routes={routes} />
// const root = (
//     <custom-router history={history}>
//         <custom-switch>
//             <custom-route path="/" component="page-layout" />
//         </custom-switch>
//     </custom-router>
// )

export default root
