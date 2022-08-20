import React from 'react'
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

const Meet = () => {
    const [fundador, setFundador] = React.useState('')
    const [contribuyente, setContribuyente] = React.useState(0)

    const [arrayContribuyente, setArrayContribuyente] = React.useState([])
    const [arrayFundador, setArrayFundador] = React.useState([])
    
    const [monto, setMonto] = React.useState(0)


    const [modoEdicion, setModoEdicion] = React.useState(false)
    const [id, setId] = React.useState('')

// Evento submit para agregar un fundador
    const agregarFundador = e => {
        e.preventDefault()
        if(!fundador.trim()){
            console.log('Campo vacio')
            return
        }
        setArrayFundador([
            ...arrayFundador,
            { id: nanoid(10), nombre: fundador, monto: monto}
        ])
        setFundador('')
    }

    const agregarContribuyente = e => {
        e.preventDefault()
        if(!contribuyente.trim()){
            console.log('Campo vacio')
            return
        }
        setArrayContribuyente([
            ...arrayContribuyente,
            { id: nanoid(10), nombre: contribuyente, monto: monto}
        ])
        setContribuyente('')
    }

    const eliminar2 = id => {
        const arrayFiltrado = arrayContribuyente.filter(item => item.id !== id)
        setArrayContribuyente(arrayFiltrado)
    }

//Evento del boton Eliminar
    const eliminar = id => {
        const arrayFiltrado = arrayFundador.filter(item => item.id !== id)
        setArrayFundador(arrayFiltrado)
    }
    
//evento del boton Editar
    const editar = item => {
        setModoEdicion(true)
        setFundador(item.nombre)
        setId(item.id)
    }

//evento submit para editar
    const editarFundador = e => {
        e.preventDefault()
        if(!fundador.trim()){
            console.log('Campo vacio')
            return
        }
    
        const arrayEditado = arrayFundador.map(item => item.id === id ? {id, nombre: fundador, monto: monto} : item)
            setArrayFundador(arrayEditado)
            setModoEdicion(false)
            setFundador('')
            setMonto(0)
            setId('')
        }



    return (
        <div className="container px-lg-5">
    <h1 className="text-center">VACAPP</h1>
    <hr/>
    <div className="row mx-lg-n5 border">
        <div className="col py-3 px-lg-5">
            <h4 className="text-center">
                {
                    modoEdicion ? 'Editar Fundador' : 'Agregar Fundador'
                }
            </h4>
            <form onSubmit= {modoEdicion ? editarFundador : agregarFundador}>
                <input 
                    type="text" 
                    className="form-control mb-2"
                    placeholder="Nombre"
                    onChange={e => setFundador(e.target.value)}
                    value={fundador}
                />
                <input 
                    type="number" 
                    className="form-control mb-2"
                    placeholder="Monto"
                    onChange={e => setMonto(e.target.value)}
                    value={monto}
                />
                {
                    modoEdicion ? (
                        <button className="btn btn-warning btn-block" type="submit">Editar</button>
                    ) : (
                        <button className="btn btn-dark btn-block" type="submit">Agregar</button>
                    )
                }
            </form>
        </div>
        <div className="col py-3 px-lg-5">
            <h4 className="text-center">
                Agregar contribuyente
            </h4>
            <form onSubmit={agregarContribuyente}>
                <input 
                    type="text" 
                    className="form-control mb-2"
                    placeholder="Nombre"
                    onChange={e => setContribuyente(e.target.value)}
                    value={contribuyente}
                />
                <div className="col-3"></div>
                <button className="btn btn-dark btn-block" type="submit">Agregar</button>
            </form>
        </div>
    </div>


    <div className="row mt-5">

        <div className="col-6">
        <h4 className="text-center ">Fundadores</h4>
        <ul className="list-group">
            
            {
                arrayFundador.length === 0 ? (
                        <li className="list-group-item ">No hay Fundaores</li>
                ):(
                arrayFundador.map(item => (
                    <li className="list-group-item d-flex justify-content-between" key={item.id}>
                        <span className="lead">{item.nombre}</span>
                        <div className="">
                            <button 
                                className="btn btn-sm btn-danger float-right mx-2 rounded-pill align-items-center"
                                onClick={() => eliminar(item.id)}                                
                                >
                                X
                            </button>
                            <button
                                className="btn btn-sm btn-warning float-right"
                                onClick={() => editar(item)}
                                >
                                Editar
                            </button>
                        </div>
                        <span className="lead">
                            {
                                arrayFundador.map((ticket) => Number(ticket.monto)).reduce((a, b) => a + b, 0)/(arrayContribuyente.length + arrayFundador.length)
                            } 
                            |
                            {item.monto}
                        </span>
                    </li>  
                )                      
                ))
            }
        </ul>
        </div>

        <div className="col-6">
        <h4 className="text-center ">Contribuyentes</h4>
        <ul className="list-group">
            {
                arrayContribuyente.length === 0 ? (
                    <li className="list-group-item ">No hay Contribuyentes</li>
                ):(
                    arrayContribuyente.map(item =>(
                        <li className="list-group-item d-flex justify-content-between" key={item.id}>
                        <span className="lead">{item.nombre}</span>
                        <button 
                            className="btn btn-sm btn-danger float-right mx-2 rounded-circle"
                            onClick={() => eliminar2(item.id)} 
                        >X</button>
                        <button 
                            className="btn btn-sm btn-warning float-right"
                        >Editar
                        </button>
                            <span className="lead">
                                {
                                    arrayFundador.map((ticket) => Number(ticket.monto)).reduce((a, b) => a + b, 0)/(arrayContribuyente.length + arrayFundador.length)
                                }
                            </span>
                        </li>
                    ))
                )
            }
        </ul>
        </div>

        <div className="row mx-lg-n5 border d-flex justify-content-center mt-5">
            <h4>Totales</h4>
            <h5 className='text-success'>{ arrayFundador.map((ticket) => Number(ticket.monto)).reduce((a, b) => a + b, 0)}$</h5>
        </div>
        


    </div>
    </div>
    )
}

export default Meet