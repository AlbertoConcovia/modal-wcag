import "./styles.css";
import Modal from "./Modal";

/* 
Interview Task::

Create a WCAG 2.1 AA Compliant Modal

Put any content you want in the modal,
ensure it is dismissable or closable,
include comments to help us understand
your choices, the modal must prevent 
interaction with th eunderlying page
until dismissed or actioned

Write some tests to confirm that the
modal works and is compliant

Create some styles, remember any styles,
should also be WCAG 2.1 AA Compliant

NB: Getting the task done is more important than
it being complete, don't worry about impelementing 
the solution in a single file

Feel free to add libraries on the left,
the test runner is in a tab on the right

*/

export default function App() {
  const someData = "Accessible Modal";

  return (
    <div className="App">
      <h1>NewDay</h1>
      <h2>Let’s see a modal</h2>
      <Modal someData={someData} />
    </div>
  );
}
