import jsx, { Component } from 'custom-elements-jsx'

import { hasOnlyNumbers } from 'utils/validate'

import './styles'

class StatisticPage extends Component {
    value = ''

    setInput = element => (this.input = element)

    onChange = value => {
        if (hasOnlyNumbers(value)) {
            this.input.value = value

            this.value = value
        }
    }

    onKeyDown = event => {
        if (event.key === 'Enter') console.log(this.value)
    }

    render() {
        return (
            <page-field
                ref={this.setInput}
                value={this.value}
                placeholder="only numbers"
                onChange={this.onChange}
                onKeyDown={this.onKeyDown}
            />
        )
    }
}

if (!window.customElements.get('statistic-page'))
    window.customElements.define('statistic-page', StatisticPage)
