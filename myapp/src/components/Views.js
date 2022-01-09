import { useSelector } from "react-redux";

const Views = () => {
  const allcommentsData = useSelector((state) => state.commentsData);
  const fetchedData = useSelector((state) => state.data[0]);
  return (
    <div className="">
      <p className="text-muted">
        {fetchedData.views} views | {fetchedData.likes} likes |{" "}
        {allcommentsData.length} comments | {fetchedData.shares} shares
      </p>
    </div>
  );
};
export default Views;
