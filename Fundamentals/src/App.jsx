import mainAtomImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import configImg from "./assets/config.png";
import stateManagementImg from "./assets/state-mgmt.png";
import jsxImg from "./assets/jsx-ui.png";

const reactDescriptions = ["Fundamental", "Crutial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={mainAtomImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            />
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image={configImg}
            />
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image={stateManagementImg}
            />
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image={jsxImg}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
