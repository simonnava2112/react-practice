import React from 'react'
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'


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
            { id: nanoid(10), nombreFundador: fundador, monto: monto, },
        ])

        setFundador('');
        setError(null);
    }

    const agregarContribuyente = e => {
        e.preventDefault()
        setArrayContribuyente([
            ...arrayContribuyente,
            { id: nanoid(10), nombre: contribuyente }
        ])
        setContribuyente('');
    }
    return (
        <div classNameName="container-ml m-5 text-center">
            <h2>Agregar Fundador/es</h2>
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

            </form>
            <h2>Agregar Contribuyente/es</h2>
            <form onSubmit= {agregarContribuyente} className="row">
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
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Add</button>
                </div>
            </form>

            <div className="row">
                <div className="col">
                    <h4>Fundadores</h4>
                    <ul className="list-group ">
                        {
                            addFundadores.map(item => (
                                <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                                    <h6>{item.nombreFundador}</h6>
                                    
                                    <span className="lead d-flex justify-content-center g-4"> 
                                    <span className="badge bg-success rounded-pill align-items-center">
                                    {
                                        addFundadores.map((ticket) => Number(ticket.monto)).reduce((a, b) => a + b, 0)/(arrayContribuyente.length + addFundadores.length)
                                    }
                                    </span>
                                    $ {item.monto}</span>
                                </li>
                            ))
                            
                        }
                    </ul>
                    <div className='container'>
                            
                                <h6>Totales:{ addFundadores.map((ticket) => Number(ticket.monto)) .reduce((a, b) => a + b, 0)}</h6>
                        

                    </div>
                </div>
                <div className="col">
                    <h4>Contribuyentes</h4>
                    <ul className='list-group'>
                    {
                            arrayContribuyente.map(item => (
                                <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                                    {item.nombre}
                                    <span className="badge bg-success rounded-pill">  
                                        {
                                        addFundadores.map((ticket) => Number(ticket.monto)).reduce((a, b) => a + b, 0)/(arrayContribuyente.length + addFundadores.length)
                                    }
                                    </span>
                                    
                                </li>
                            ))
                            
                        }

                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Fetch;
