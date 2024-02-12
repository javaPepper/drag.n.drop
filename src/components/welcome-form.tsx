import { useAppDispatch } from '../hooks';
import { setWelcomed } from '../redux/actions';

export default function WelcomeForm() {

  const dispatch = useAppDispatch();

  return(
    <div className="wf-container">
      <form
        className="welcome-form"
        onSubmit={(evt) => {
          evt.preventDefault();
          dispatch(setWelcomed(true));
        }}
      >
        <header className="header">
            Hey, there! Good to see you. I&apos;m Sergio and I&apos;m a frontend developer.
            Besides you can push any button, don&apos;t forget you can drag&apos;n&apos;drop some elements.
            Just like that.
            Enjoy!
        </header>
        <img
          className="wf-video"
          src="https://javapepper.github.io/drag.n.drop/welcome.gif"
        >
        </img>
        <button
          className="btn-welcome-form"
        >Got it!
        </button>
      </form>
    </div>
  );
}
