import jsx, { Component } from 'custom-elements-jsx'

class Documents extends Component {
    render() {
        return <h3>Documents!</h3>
    }
}

if (!window.customElements.get('custom-documents'))
    window.customElements.define('custom-documents', Documents)
