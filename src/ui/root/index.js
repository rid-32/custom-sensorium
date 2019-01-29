import jsx from 'custom-elements-jsx'
import history from 'utils/history'

import { renderRoutes } from 'lib/custom-elements-router'
import routes from 'routes'

const root = (
    <custom-router history={history}>{renderRoutes(routes)}</custom-router>
)

export default root
