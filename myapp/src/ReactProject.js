import "./ReactProject.css";
import { useState } from "react";
import Comment from "./Comment";
import Like from "./Like";
import Share from "./Share";
import { useSelector } from "react-redux";
import PostComments from "./postcomments";

const ReactProject = () => {
  const allcommentsData = useSelector((state) => state.commentsData);
  const fetchedData = useSelector((state) => state.data[0]);
  const [state, setstate] = useState(false);
  const commentStatus = useSelector((state) => state.displayComment);
  const follow = () => {
    setstate(!state);
  };
  const [displayText, setdisplayText] = useState(false);
  const [display, setdisplay] = useState(false);

  const changeDisplay = () => {
    setdisplayText(!displayText);
  };
  return (
    <div className="text-center cardMargin">
      <div className="container">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <div className="card mb-5" id="cardEffect" width="100px">
              <div className="container">
                <div className="row mt-4">
                  <div className="col-md-3 mt-2">
                    <img
                      src="/Image.jpg"
                      width="80px"
                      height="80px"
                      className="shapeImage"
                      alt="user profile loading.."
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    />
                  </div>
                  <div className="modal fade" id="exampleModal">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-body">
                          <img
                            src="/Image.jpg"
                            width="100%"
                            height="100%"
                            className="rounded"
                            alt="user profile loading.."
                          />
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-outline-info"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="">
                      <span>
                        <h5>
                          Horng H Chen
                          {!state && (
                            <button
                              className="btn btn-outline-info ms-2  "
                              onClick={follow}
                            >
                              Follow
                            </button>
                          )}
                          {state && (
                            <button
                              className="btn btn-outline-info ms-2"
                              onClick={follow}
                            >
                              Following
                            </button>
                          )}
                        </h5>
                      </span>
                    </div>
                    <p className="text-muted">
                      Alum | Finance,MBA | 2016 | Business Manager at Capgemini
                      1d | San Francisco
                    </p>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <p className="text-start ml-2 text-black-50">
                      The concept of Research : A cross-cultural study
                    </p>
                    <p className="text-start ml-2">
                      Oxford Nanopore has pulled in £100m from investors in the
                      Aisa-Pacific region ,as it completes a funding round that
                      values
                      {!displayText && (
                        <span>
                          ...{" "}
                          <span
                            className="changeCursor text-primary"
                            onClick={changeDisplay}
                          >
                            read more
                          </span>
                        </span>
                      )}
                      {displayText && (
                        <span>
                          {" "}
                          the fast-growing UK biotechnology company at £1.5bn.{" "}
                          <span
                            className="changeCursor  text-primary"
                            onClick={changeDisplay}
                          >
                            read less
                          </span>
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-start">
                    <p className="text-muted">
                      {fetchedData.views} views |{fetchedData.likes} likes |
                      {allcommentsData.length} comments | {fetchedData.shares}{" "}
                      shares
                    </p>
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
          <div className="col-sm-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ReactProject;
