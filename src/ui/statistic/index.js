import jsx, { Component } from 'custom-elements-jsx'

class Statistic extends Component {
    render() {
        return <h3>Statistic!</h3>
    }
}

if (!window.customElements.get('custom-statistic'))
    window.customElements.define('custom-statistic', Statistic)
