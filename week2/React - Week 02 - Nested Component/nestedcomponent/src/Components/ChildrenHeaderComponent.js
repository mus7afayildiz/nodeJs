import foreigners from 'C:/Users/mus7a/OneDrive/Desktop/hicoders/nodeJs/week2/React - Week 02 - Nested Component/nestedcomponent/src/Data/foreigners.json'

function ChildrenHeaderComponent(pIndex) {
    const NumberOfChildrens = foreigners[pIndex].children.length;
    return ( 
        <header className="p-3 bg-danger text-white">
            <div className="container bg-danger">
              CHILDREN ({NumberOfChildrens}) 
            </div>
        </header>
    )

}

export default ChildrenHeaderComponent