import Information from "./Information.jsx";
import ShoppingAddForm from "./ShoppingAddForm.jsx";
import ShoppingList from "./ShoppingList.jsx";
import Filter from "./Filter.jsx";
function App(){
  const data = [
    {
      id: 1,
      size: "14",
      title: "buy bananas",
      active: false,
    },
     {
      id: 2,
      size: "10",
      title: "buy ananas",
      active: true,
    },
     {
      id: 3,
      size: "14",
      title: "buy milk",
      active: false,
    },
  ]
  return(
   <div className="App">
    <div className="wrapper">
      <div className="card">
      
      {/* Information */}
      <Information />

      {/* ShoppingAddForm */}
      <ShoppingAddForm />
      {/* ShoppingList */}
    <ShoppingList data = {data}/>
      {/* Filter */}
      <Filter />
      </div>
      <img src="/earth.svg" alt="" height={600}/>
    </div>
   </div>
  )
}

export default App