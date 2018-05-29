import React from 'react'


const Search = (props) =>{
    const options = props.data.map(r=> (

        <li key={r.id}>
            {r.name}
        </li>
    ))

    return <ul> {options} </ul>
}

export default Search