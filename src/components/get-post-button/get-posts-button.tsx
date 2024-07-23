import { setClicked, setClickedBackBtn, setUserId, setVisible } from '../../redux/actions';
import { useAppDispatch } from '../../hooks';

type GetPostsButtonProps = {
  id: number;
};

export default function GetPostsButton({ id }: GetPostsButtonProps) {
  const dispatch = useAppDispatch();

  return (
    <button
      className="postBtn"
      onClick={() => {
        dispatch(setClicked(true));
        dispatch(setUserId(id));
        dispatch(setClickedBackBtn(false));
        dispatch(setVisible(true));
      }}
    >
        Get Posts
    </button>
  );
}
