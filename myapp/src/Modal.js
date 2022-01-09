const Modal = () => {
  return (
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
  );
};

export default Modal;
