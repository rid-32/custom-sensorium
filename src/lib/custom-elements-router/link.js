import jsx, { Component } from 'custom-elements-jsx'

class CustomLink extends Component {
    onClick = event => event.preventDefault()

    render() {
        const { to, children, className } = this.props

        return (
            <a
                href={to}
                onClick={this.onClick}
                style={{ cursor: 'pointer' }}
                className={className}
            >
                {children}
            </a>
        )
    }
}

if (!window.customElements.get('custom-link'))
    window.customElements.define('custom-link', CustomLink)
