import "./Tours.css";
const TourInfo = (props) => {
  return (
    <>
        {props.tourData.map((obj,i) => {
        return (
          <div key={i} className={`container ${props.className}`}>
            <img className="img" src={obj.image} alt="" />
            <h3>{obj.name}</h3>
          </div>
        );
      })}
    </>
      
  );
};

export default TourInfo;