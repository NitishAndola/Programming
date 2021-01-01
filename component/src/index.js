import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Nitish"
          commentText="Nice blog!"
          timeAgo="Today at 11:00AM"
          avatarImg={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Madhuri"
          commentText="Masttt yaar"
          timeAgo="Yesterday at 10:00AM"
          avatarImg={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Priya"
          commentText="Wah kya likha hai"
          timeAgo="Today at 02:00PM"
          avatarImg={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Shikha"
          commentText="Whatever"
          timeAgo="Yesterday at 05:00PM"
          avatarImg={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Meenu"
          commentText="Sahi hai.. Badhiya likha hai"
          timeAgo="Today at 12:13AM"
          avatarImg={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
