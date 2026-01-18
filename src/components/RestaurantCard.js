
// const styleCard = {
//   backgroundColor: "#f0f0f0",
// }

const RestaurantCard = (props) => {
  console.log(props);

  const { resData } = props;
  return (
    <div className="res-card" >
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.card.card.info.cloudinaryImageId} alt="" />
      <h3>{resData.card.card.info.name}</h3>
      <h4>{}</h4>
      
    </div>
  );
};

export default RestaurantCard;