import { memo } from "react"


const Items = memo(({src,alt,label,eClick}) => {

    return (
        <button className='itemsPro' onClick={eClick}>
            <img src={src} alt={alt} width={50} height={50} />
            {label}
        </button>
    )

})

export default Items