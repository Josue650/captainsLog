const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render(){
        return(
        <Default title='Creat New Log'>
            <form method="POST" action='/logs'>
                Title: <input type="text" name="title" placeholder='Title of log' /><br />
                Entry: <input type="textarea" name='entry' placeholder='Entry' /><br />
                Ship Is Broken: <input type="checkbox" name='shipIsBroken'></input><br />
                <input type="submit" value=" Submit Log"></input>
            </form>
        </Default>
        )
    }
}
module.exports = New
