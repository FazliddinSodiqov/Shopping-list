import ShoppingListItem from "./ShoppingListItem.jsx";
function ShoppingList ({data}) {

    return(
        
      <div className="shopping-list">
        {data.map(item => (
            <ShoppingListItem key={item.id} item={item} />
        ))}
        
       </div>
    )
}
export default ShoppingList;