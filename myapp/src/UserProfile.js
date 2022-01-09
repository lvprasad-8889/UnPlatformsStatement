
import Modal from "./Modal";
import "./UserProfile.css";
const UserProfile = () => {
  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="card mt-4" width="100px" id="cardEffect">
              <div className="container">
                <div className="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-6 mt-3">
                    <img
                      src="/Image.jpg"
                      width="80px"
                      height="80px"
                      className="shapeImage mx-auto d-block"
                      alt="user profile loading.."
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    />

                    <Modal></Modal>
                    <div className=" text-center changeFontSizeTo">
                      <div className=" mt-2">Preethi Shinde</div>
                      <div>+91 XXXXXXXX46</div>
                    </div>
                  </div>
                  <div className="col-sm-3"></div>
                </div>
                <div className="row mt-3 mb-3">
                  <div className="col-sm-4">
                    <div className="text-center mt-2">
                      <div className="changeFontSizeTo">Posts</div>
                      <p>100</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="text-center mt-2">
                      <div className="changeFontSizeTo">Following</div>
                      <p>1233</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="text-center mt-2">
                      <div className="changeFontSizeTo">Followers</div>
                      <p>1233</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
