import { avatar } from "@ngneat/falso";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          name="Sam"
          timeAgo="Today at 4:45 PM"
          blogPost="This is my first post!"
          avatar={avatar()}
        />
      </ApprovalCard>
      <CommentDetail
        name="Alex"
        timeAgo="Today at 5:45 PM"
        blogPost="How is everyone doing?!"
        avatar={avatar()}
      />
      <CommentDetail
        name="Bob"
        timeAgo="Today at 2:45 AM"
        blogPost="Welcome to the internet!"
        avatar={avatar()}
      />
    </div>
  );
};

export default App;
