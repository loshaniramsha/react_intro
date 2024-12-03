export default function Subject(props:{name:string,des:string,children:React.ReactNode}) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.children}</p>
            <h3>{props.des}</h3>
        </div>
    );
}