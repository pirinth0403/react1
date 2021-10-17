import React from 'react'

function MemoComp({name}) 
//console.log('the Memo comp ')
{  
    console.log('Rendring Memo Component ')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo ( MemoComp ) 
