import { avatar } from "@ngneat/falso";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Matt
          </a>
          <div className="metadata">
            <span className="date">Today at 5:42PM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
    </div>
  );
};

export default App;
