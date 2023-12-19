import { useAppDispatch } from '../hooks';
import { setClickedBackBtn } from '../redux/actions';

export default function BackButton() {
  const dispatch = useAppDispatch();
  return (
    <div className="button">
      <button
        className="back-button"
        onClick={() => {
          dispatch(setClickedBackBtn(true));
        }}
      >
          Back
      </button>
    </div>
  );
}
