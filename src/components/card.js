const Card = (props) => {

    const {handleClickCard, character, champName} = props;
    
    return ( 
        <div className="card" onClick={e => {handleClickCard(e)}}>
            <figure>
                <img src={character} alt={champName} />
                <div>{champName}</div>
            </figure>
        </div>
     );
}
 
export default Card;