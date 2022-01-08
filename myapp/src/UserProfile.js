const UserProfile = () => {
  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <div className="card" width="50%" id="cardEffect">
              <img
                src="/Image.jpg"
                width="80px"
                height="80px"
                className="shapeImageofUser d-block mx-auto"
                alt=""

              />
              
              <div className="">
                <p className="changeText">Satya Bayagani</p>
                <p>+91 9390043946</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
