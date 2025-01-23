import { useAppDispatch } from '../../hooks';
import { setVisible, setWelcomed } from '../../redux/actions';

export default function WelcomeForm() {

  const dispatch = useAppDispatch();

  return(
    <div className="wf-container">
      <form
        className="welcome-form"
        onSubmit={(evt) => {
          evt.preventDefault();
          dispatch(setWelcomed(true));
          dispatch(setVisible(false));
        }}
      >
        <header className="header">
            Hey there! Good to see you. I&apos;m Sergio and I&apos;m a frontend developer.
            Before you click any button, don&apos;t forget to drag&apos;n&apos;drop some elements.
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
