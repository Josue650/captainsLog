const React = require('react')
const Default = require('../layouts/Deafault.jsx')

class New extends React.Component {
    render(){
        <Default title='Creat New Log'>
            <form>
                Title: <input type="text" name="title" placeholder='Title of log' /><br />
                Entry: <input type="textarea" name='entry' placeholder='Entry' /><br />
                Ship is Broken: <input type="checkbox" name='shipIsBroken' /><br />
                <input type="submit" value=" Submit Log" />
            </form>
        </Default>
    }
}
module.exports = New
