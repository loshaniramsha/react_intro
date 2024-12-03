export default function ButtonComponent(props) {
    return (
        <button onClick={props.onClick}>{props.name}</button>
    );
}


/*
export default  function ButtonComponent() {
    return(
        <button>Click Me</button>
    )
}
export function SmallButton(){
    return(
        <button>Small</button>
    )
}*/
