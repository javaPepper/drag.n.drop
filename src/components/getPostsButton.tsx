import { setClicked, setUserId } from "../redux/actions";
import { useAppDispatch } from "../hooks";

type GetPostsButtonProps = {
    id: number;
}

export default function GetPostsButton({id}: GetPostsButtonProps) {
  const dispatch = useAppDispatch();

  return (
    <>
      <button
        className="postBtn"
        onClick={() => {
          dispatch(setClicked(true));
          dispatch(setUserId(id));
        }}
      >
        Get Posts
      </button>
    </>
  );
}