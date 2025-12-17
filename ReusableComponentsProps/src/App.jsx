import MessageCard from "./MessageCard";
function App(){
  return(
    <div>
      <h2>Message Cards</h2>

      <MessageCard
        title="Welcome"
        message="Welcome to the React reusable components task."
      />
       <MessageCard
        title="React Props"
        message="Props help us pass data from parent to child components."
      />

      <MessageCard
        title="Reusable Component"
        message="This MessageCard component is reused with different props."
      />

      <MessageCard
        title="Vite + React"
        message="This project is built using Vite and React."
      />
    </div>
  );
}
export default App;