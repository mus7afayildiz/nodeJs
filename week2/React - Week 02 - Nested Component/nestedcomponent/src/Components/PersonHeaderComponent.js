import foreigners from 'C:/Users/mus7a/OneDrive/Desktop/hicoders/nodeJs/week2/React - Week 02 - Nested Component/nestedcomponent/src/Data/foreigners.json'


function PersonHeaderComponent(pIndex) {
    const TotalPerson = foreigners.length;

    function indexAzalt() {
        pIndex = pIndex - 1
        console.log("azaldi")  
        PersonHeaderComponent(pIndex)    
    }
    
    function indexArttir() {
        pIndex = pIndex + 1
        console.log("artti")
        console.log(pIndex)
        PersonHeaderComponent(pIndex)
    }

    console.log(pIndex) 
    
    return (

        <header className="p-3 bg-danger text-white">
            <div className="container bg-danger">
                PERSON ({pIndex}/{TotalPerson}) <button onClick={indexAzalt}>-</button><button onClick={indexArttir}>+</button>
            </div>
        </header>
    )

}

export default PersonHeaderComponent