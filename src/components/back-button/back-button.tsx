import { useAppDispatch } from '../../hooks';
import { setClicked, setClickedBackBtn } from '../../redux/actions';

export default function BackButton() {
  const dispatch = useAppDispatch();
  return (
    <div className="button">
      <button
        className="back-button"
        onClick={() => {
          dispatch(setClickedBackBtn(true));
          dispatch(setClicked(false));
        }}
      >
          Back
      </button>
    </div>
  );
}
