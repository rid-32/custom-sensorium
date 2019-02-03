import jsx, { Component } from 'custom-elements-jsx'

class DocumentsPage extends Component {
    render() {
        return <h3>Documents!</h3>
    }
}

if (!window.customElements.get('documents-page'))
    window.customElements.define('documents-page', DocumentsPage)
