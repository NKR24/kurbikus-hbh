import { createSignal } from 'solid-js';
import { Collapse } from 'solid-collapse';

const App = () => {
  const [isExpanded, setIsExpanded] = createSignal(false);

  return (
    <div>
      <button onClick={() => setIsExpanded(!isExpanded())}>Expand me</button>
      <Collapse value={isExpanded()} class="my-transition">
        <p class="my-content-class">
          I am a bunch of collapsed text that wants to be expanded
        </p>
      </Collapse>
    </div>
  );
};
