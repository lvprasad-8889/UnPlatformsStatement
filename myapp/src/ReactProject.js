import "./ReactProject.css";
import Comment from "./Comment";
import Like from "./Like";
import Share from "./Share";
import { useSelector } from "react-redux";
import PostComments from "./postcomments";
import ImageToReactProject from "./ImageToReactproject";
import Modal from "./Modal";
import Follow from "./Follow";
import Data from "./Data";
import Views from "./Views";
const ReactProject = () => {
  const commentStatus = useSelector((state) => state.displayComment);

  return (
    <div className="text-center cardMargin">
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="card mb-5" id="cardEffect" width="100px">
              <div className="container">
                <div className="row mt-4">
                  <div className="col-md-3 mt-2">
                    <ImageToReactProject></ImageToReactProject>
                  </div>
                  <Modal></Modal>
                  <div className="col-md-9">
                    <Follow></Follow>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <Data></Data>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-start">
                    <Views></Views>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-start">
                    <Like></Like>
                    <Comment></Comment>
                    <Share></Share>
                    <div className="mt-3"></div>
                  </div>
                </div>
                {commentStatus && <PostComments></PostComments>}
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ReactProject;
