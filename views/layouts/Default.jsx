const React = require('react')

class Default extends React.Component {
    render(){
        const {log, title} = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href='/logs'>Go to Home Page For Logs</a><br />
                        <a href="/logs/new">Create a New Log</a><br />
                        { this.props.log? <a href={`/logs/${log._id}/edit`}> {log.title} Edit Page </a> : ''}<br />
                        { this.props.log? <a href={`/logs/${log._id}`}>{log.title} Show Page </a> : ''}
                    </nav>
                    <h1>
                        {title}
                    </h1>

                    {this.props.children}
                </body>
            </html>
        )
    }
}
module.exports = Default
