// This code imports a component called IMCForm and renders it inside a div with the class "App".
// The IMCForm component is used to calculate the Body Mass Index (BMI) of a person.

// Importing the IMCForm component
import IMCForm from './components/IMCForm';

// Defining the App component
function App() {
  // Returning the JSX code that renders the IMCForm component
  return (
    <div className="App">
      <h1>Body Mass Index Calculator</h1> {/* Adding a title to the page */}
      <IMCForm style={{ marginTop: '2rem' }} /> {/* Adding some margin to the top of the IMCForm component */}
    </div>
  );
}

// Exporting the App component
export default App;
