import jsx, { Component } from 'custom-elements-jsx'

import { hasOnlyNumbers } from 'utils/validate'

class StatisticPage extends Component {
    setRef = element => (this.field = element)

    onChange = value => {
        if (hasOnlyNumbers(value)) {
            this.field.value = value
        }
    }

    onKeyDown = event => {
        if (event.key === 'Enter') console.log(this.field.value)
    }

    render() {
        return (
            <page-field
                ref={this.setRef}
                placeholder="hello"
                onChange={this.onChange}
                onKeyDown={this.onKeyDown}
            />
        )
    }
}

if (!window.customElements.get('statistic-page'))
    window.customElements.define('statistic-page', StatisticPage)
