import React, { useState } from 'react';
import { fetchSmurfs, newSmurf } from '../actions/index';
import { connect } from 'react-redux';

const AddSmurf = (props) => {
    const [smurfNew, setSmurfNew] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleChanges = e => {
        setSmurfNew({
            ...smurfNew, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.newSmurf(smurfNew)
    }

    return (
        <>
            <form onSubmit = {(e => {
                handleSubmit(e)
            })}>
                <section>
                    <label>Name: 
                        <input
                            onChange={(e => {
                                handleChanges(e)
                            })}
                            value={smurfNew.name}
                            type='text'
                            name='name'
                        />
                    </label>
                    <label>Age: 
                        <input
                            onChange={(e => {
                                handleChanges(e)
                            })}
                            value={smurfNew.age}
                            type='text'
                            name='age'
                        />
                    </label>
                    <label>Height: 
                        <input
                            onChange={(e => {
                                handleChanges(e)
                            })}
                            value={smurfNew.height}
                            type='text'
                            name='height'
                        />
                    </label>
                    <button onClick={() => props.newSmurf(smurfNew)}>Add new Smurf!</button>
                </section>
            </form>
            <button onClick={props.fetchSmurfs}>
                Show Smurfs!
            </button>
            {props.smurf && !props.isLoading && props.smurf.map(item => {
                return (
                    <div>
                        <h1>{item.name}</h1>
                        <h3>{item.age}</h3>
                        <h3>{item.height}</h3>
                    </div>
                )
            })}
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurf: state.smurf
    }
}

export default connect(mapStateToProps, { fetchSmurfs, newSmurf })(AddSmurf);