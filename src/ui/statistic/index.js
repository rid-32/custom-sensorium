import jsx, { Component } from 'custom-elements-jsx'

class StatisticPage extends Component {
    render() {
        return <h3>Statistic!</h3>
    }
}

if (!window.customElements.get('statistic-page'))
    window.customElements.define('statistic-page', StatisticPage)
