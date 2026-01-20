// const styleCard = {
//   backgroundColor: "#f0f0f0",
// }

const RestaurantCard = (props) => {
  console.log(props);

  const { resData } = props;
  return (
    <div className="res-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
        alt=""
      />

      <div className="card-content">
        <h4>{resData.info.name}</h4>
        <div className="rate-del">
          <span>{resData.info.avgRating} stars</span>
          <span style={{paddingLeft: "0.5rem"}}>{resData.info.sla.deliveryTime} mins</span>
        </div>

        <p>{resData.info.cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
