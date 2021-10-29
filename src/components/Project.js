export default function Project({portCards}){

    const styles = {
        cardStyles: {
          width : '40rem',
          height: '35rem',
        }
      }

    return (
        <>
        <div className = 'd-flex flex-wrap'> 
        {portCards.map((cardData, index) => {
          return (
          <>
        <div key = {index} style = {styles.cardStyles}  className=" card bg-light d-inline-flex flex-column justify-content-center align-self-center align-items-center border rounded m-3 ">
        <h1 className="display-4 text-center">{cardData.title}</h1>
        <img src={cardData.image}  className="img-fluid d-flex img-thumbnail" alt="My-5-Star-Local"></img>
          <div className="card-body d-inline-flex flex-column justify-content-center">
           <a target= "_blank" rel='noreferrer' className=" text-center btn btn-primary m-2" href={cardData.repoLink}> Link to GitHub Repository </a>
           <a target= "_blank" rel='noreferrer' className=" text-center btn btn-primary m-2" href={cardData.appLink}> Link to Deployed Application</a>
           </div>
        </div>
        </>
          )
        })}
        </div>
        </>
    )
 }