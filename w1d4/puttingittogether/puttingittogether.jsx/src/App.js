import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Buster"} lastName={"Baxter"} age={10} hairColor={"white"}></PersonCard>
      <PersonCard firstName={"Arthur"} lastName={"Read"} age={10} hairColor={"brown"}></PersonCard>
      <PersonCard firstName={"D.W."} lastName={"Read"} age={6} hairColor={"brown"}></PersonCard>
      <PersonCard firstName={"Binky"} lastName={"Barnes"} age={10} hairColor={"brown"}></PersonCard>
    </div>
  );
}

export default App;
