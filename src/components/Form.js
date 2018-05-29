import React from 'react'


const Form = (props) => (
    <div>
        <form /*onSubmit={props.searchCoin.bind(this)}*/ >
        <input type="text" placeholder="search" name="query" 
        onChange={props.handleChange.bind(this)} 
        />
        <h1 className="error"> {props.error} </h1>
        </form>
    </div>
)

export default Form;