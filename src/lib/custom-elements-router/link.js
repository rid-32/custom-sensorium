import jsx, { Component } from 'custom-elements-jsx'

class CustomLink extends Component {
    onClick = event => event.preventDefault()

    render() {
        const { to } = this.props

        return <a href={to} onClick={this.onClick} />
    }
}

if (!window.customElements.get('custom-link'))
    window.customElements.define('custom-link', CustomLink)
