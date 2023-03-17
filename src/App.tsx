import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item : string)=>{
  //   console.log(item)
  // }


 const[alertVisible, setAlertVisibility]= useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>MY alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
