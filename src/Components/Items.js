import React from 'react';
import { graphql } from 'react-apollo';
import { getItems } from '../Queries';

const Items =({ data: { listings }}) => {
    return (
        <div>{
        listings ?
        listings.map(listing => (
            <div key={listing.id}>
                <h1>{listing.title}</h1>
                <p>{listing.description}</p>
            </div>
        ))
        :
        "loading"
        }
        </div>
    )
}

export default graphql(getItems)(Items);