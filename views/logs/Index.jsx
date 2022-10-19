const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
    render(){
        const {logs} = this.props
        return(
            <Default title="Logs Index Page">
                <ul>
                    {
                        logs.map((log) => {
                            const {title, entry, shipIsBroken,_id} = log
                            return (
                                <li key={_id}>
                                    <a href={`/logs/${_id}`}>
                                        {title}</a> {entry}
                                    <br />
                                    {
                                        shipIsBroken?
                                        'Ship is broken':
                                        'Ship is not broken'
                                    }
                                    <br />
                                    <form method="POST" action={`/logs/${_id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${entry} ${title}`} />
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )

    }
}
module.exports = Index
