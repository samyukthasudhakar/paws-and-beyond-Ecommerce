import React from 'react';
import useDocumentTitle from '../../utils/hooks/useDocumentTitle'

function PageNotFound(){

    useDocumentTitle('Paws & Beyond | 404')

    return(
        <div>
            404 page not found :(
        </div>
    );
}

export { PageNotFound }