import React from 'react'


const Form = (props) => (
    <div>
        <form onSubmit={props.searchCoin.bind(this)} >
        <input type="text" placeholder="search" name="query"/>
        <button>Search</button>
        </form>
    </div>
)

export default Form;