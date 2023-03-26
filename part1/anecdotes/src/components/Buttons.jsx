export const Button = ({handleOnclickFunction, name}) => {
    return (

        <button onClick={()=>handleOnclickFunction()}>{name}</button>
    );
}