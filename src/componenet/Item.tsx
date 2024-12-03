/*export default function Item(props:{tittle:string,des:string}){
    return(
        <div>
            <h1>{props.tittle}</h1>
            <p>{props.des}</p>
        </div>
    )
}*/


export default function Item ({tittle,des}:{tittle:string,des:string}){
    return (
        <>
        <h1>{tittle}</h1>
            <p>{des}</p>
        </>
    )
}
