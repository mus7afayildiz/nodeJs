

export default function FavoriteList({list}){
    return(
        <section>
        {
          list.map((prs) => 
                  <p key={prs.phone} style={{fontSize: "10px"}}>
                    <img src={prs.picture.thumbnail} alt="thumbnail of the person" style={{width: "20px"}}/>
                    {prs.name.first} {prs.name.last}, {prs.email}, {prs.location.state}   
                  </p>
          )
        }
      </section>
    )
}