import React from 'react'
import {nanoid} from 'nanoid';

const Fetch = () => {
    const [fundador, setFundador] = React.useState('');
    const [contribuyente, setContribuyente] = React.useState('')
    const [arrayContribuyente, setArrayContribuyente] = React.useState([])
    const [addFundadores, setAddFundadores] = React.useState([]);
    const [monto, setMonto] = React.useState(0);
    
    const [error, setError] = React.useState(null);

    const agregarfundador = e => {
        e.preventDefault()
        
        if(!fundador.trim()){
            console.log('Elemento vacio!')
            setError('Escribir tarea por favor...')
            return
        }
    
        console.log(fundador)

        setAddFundadores([
            ...addFundadores, 
            { id: nanoid(10), nombreFundador: fundador, monto: monto},
        ])

        setArrayContribuyente([
            ...arrayContribuyente,
            { id: nanoid(10), nombre: contribuyente }
        ])

        setFundador('');
        setError(null);
    }








    return (
        <div classNameName="container-ml m-5 text-center">

            <form className="row " onSubmit={agregarfundador}>
                
                <div className="col-auto">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputPassword2" 
                        placeholder="Nombre"
                        onChange={ e => setFundador(e.target.value)}
                        value={fundador}
                    />
                </div>
                <div className="col-auto">
                    <input 
                        type="number" 
                        className="form-control" 
                        id="inputPassword2" 
                        placeholder="Cantidad"
                        onChange={e => setMonto(e.target.value)}
                        value={monto}
                    />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Add</button>
                </div>
                <div className="col-auto">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputPassword2" 
                        placeholder="Nombre 2"
                        onChange={ e => setContribuyente(e.target.value)}
                        value={contribuyente}
                    />
                </div>

            </form>




            <div className="row">
                <div className="col">
                    FUNDADOR
                    <ul className="list-group ">
                        {
                            addFundadores.map(item => (
                                <li className="list-group-item" key={item.id}>
                                    <span className="lead">Fundador:{item.nombreFundador} Monto:{item.monto}</span>
                                </li>
                            ))
                            
                        }
                    </ul>
                    <div className='container'>
                            
                                <h6>Totales:{ addFundadores.map((ticket) => Number(ticket.monto)) .reduce((a, b) => a + b, 0)}</h6>
                        

                    </div>
                </div>
                <div className="col">
                    Contribuyente
                    {
                            arrayContribuyente.map(item => (
                                <li className="list-group-item" key={item.id}>
                                    <span className="lead">Fundador:{item.nombre}</span>
                                </li>
                            ))
                            
                        }
                </div>
            </div>
            
        </div>
    )
}

export default Fetch