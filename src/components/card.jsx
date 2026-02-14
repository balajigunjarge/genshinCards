const Card = (props) => {
  return (
    <div className="card">
      <img src={props.backgroundImage} alt="" className="background-img" />
      <section className="backdrop">
        <div>
          <div className="top-div">
            <img src={props.image} alt="" className="icon-img" />
            <h1>
              {props.id}
              {props.name}
              <br />
              <section className="region">{props.region}</section>
            </h1>
          </div>
          <div>
            <p>{props.about}</p>
          </div>
          <div>
             <a href={props.link} target="_blank">
          <button>Learn More</button>
        </a>
          </div>
        </div>

        

       
      </section>
    </div>
  );
};

export default Card;
