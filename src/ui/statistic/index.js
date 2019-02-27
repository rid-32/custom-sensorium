import jsx, { Component } from 'custom-elements-jsx'

import { hasOnlyNumbers } from 'utils/validate'

class StatisticPage extends Component {
    value = ''

    setRef = element => (this.field = element)

    onChange = value => {
        if (hasOnlyNumbers(value)) {
            this.value = value

            this.field.value = value
        }
    }

    onKeyDown = event => {
        if (event.key === 'Enter') console.log(this.value)
    }

    render() {
        return (
            <page-field
                ref={this.setRef}
                value={this.value}
                onChange={this.onChange}
                onKeyDown={this.onKeyDown}
            />
        )
    }
}

if (!window.customElements.get('statistic-page'))
    window.customElements.define('statistic-page', StatisticPage)
