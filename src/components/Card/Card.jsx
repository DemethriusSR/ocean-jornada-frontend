function Card (props){
    //console.log(props)
    const item = props.item
    return(
    <>
        <div className= "card">
            <h2> {item.name} </h2>

            <div className="tags">
                <div className="tag">Status: Vivo</div>
                <div className="tag">Espécie: humano</div>
                <div className="tag">Origem: Terra C-137</div>
            </div>
            <img id="rick" src={item.image} alt="" />
        </div>      
     </>
    )
}

export default Card