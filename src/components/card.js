const Card = (props) => {

    const {handleClickCard, character} = props;
    
    return ( 
        <div className="card" onClick={e => {handleClickCard(e)}}>
            <figure>
                <img src={character} alt="aatrox" />
                <div>Aatrox</div>
            </figure>
        </div>
     );
}
 
export default Card;