import React from 'react'
import './Mensagem.css'

class Mensagem extends React.Component {

    render() {

        return(
            <div className={'.msg-baloon'}>
                <span>
                    <b>{this.props.nome}</b>
                </span>
                <span> {this.props.texto}
                </span>
            </div>
        )
    }

}
export default Mensagem