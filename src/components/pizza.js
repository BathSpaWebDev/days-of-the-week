

function Pizza (props){

    const {name, ingredients} = props;

    return(
        <div>
            <p>Name of the pizza:{name}</p>
            <p>Ingredients are: </p>
            <ul>
                
                {
                    ingredients.map(
                        function(ingredient, index){
                            return <li key={`ing-${index}`}>{ingredient}</li>
                        }
                    )
                }

            </ul>
            
        </div>
    )
}
export default Pizza 