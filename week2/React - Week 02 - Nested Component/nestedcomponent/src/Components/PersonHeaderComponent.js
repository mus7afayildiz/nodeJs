import foreigners from 'C:/Users/mus7a/OneDrive/Desktop/hicoders/nodeJs/week2/React - Week 02 - Nested Component/nestedcomponent/src/Data/foreigners.json'


function PersonHeaderComponent(pIndex) {
    const TotalPerson = foreigners.length;

    function indexAzalt(pIndex) {
        pIndex = pIndex - 1
        console.log("azaldi")
    }
    
    function indexArttir(pIndex) {
        pIndex = pIndex - 1
        console.log("artti")
    }
    
    console.log(pIndex)

    return (

        <header className="p-3 bg-danger text-white">
            <div className="container bg-danger">
                PERSON ({pIndex}/{TotalPerson}) <button onClick={indexAzalt(pIndex)}>-</button><button onClick={indexArttir(pIndex)}>+</button>
            </div>
        </header>
    )

}

export default PersonHeaderComponent