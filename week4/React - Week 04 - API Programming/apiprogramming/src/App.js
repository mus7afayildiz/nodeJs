import './App.css';


function App() {
  
  const data = async () => {
    try{
    const alinanApi = await fetch("https://api.chucknorris.io/jokes/random");
    const yazilacakapi = await alinanApi.json();
    console.log(yazilacakapi) 
   
    }catch (error){
    console.log("hata")
  } 
  }
  data()
  return (
    
    <div className="App">
    
    </div>
  );
}

export default App;
