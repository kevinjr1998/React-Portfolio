
function Project({item}){

    const {title, image, appLink, repoLink, id} = item;


    const styles = {
        cardStyles: {
          width : '40rem',
          height: '35rem',
          backgroundColor: "#FFFDD0"
        }
      }

    return (
        <>
        
        <div key = {id} style = {styles.cardStyles}  className=" card d-inline-flex flex-column justify-content-center align-self-center align-items-center border rounded m-3 ">
        <h1 className="display-4 text-center">{title}</h1>
        <img src={image}  className="img-fluid d-flex img-thumbnail" alt={title}/>
          <div className="card-body d-inline-flex flex-column justify-content-center">
           <a target= "_blank" rel='noreferrer' className=" text-center btn btn-primary m-2" href={repoLink}> Link to GitHub Repository </a>
           <a target= "_blank" rel='noreferrer' className=" text-center btn btn-primary m-2" href={appLink}> Link to Deployed Application</a>
           </div>
        </div>
        
        </>
    )
 }

 export default Project;