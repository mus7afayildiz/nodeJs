
export default function dropDownComponent() {
    
    
  
    return (
        <div>
            <label for="drop_Down">Choose a City:</label>

            <select name="drop_Down" id="drop_Down" onChange='GetCity'>
                <option value="Istanbul/Turkiye">Istanbul/Turkiye</option>
                <option value="Bern/Switzerland">Bern/Switzerland</option>
                <option value="Washington,DC/USA">Washington,DC/USA</option>
                <option value="Tokyo/Japan">Tokyo/Japan</option>
            </select>
            
        </div>
    )
}


