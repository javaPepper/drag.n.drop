import CircleLoader from 'react-spinners/CircleLoader';
import { CSSProperties } from 'react';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
  position:'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)'
};

export default function Spinner() {
  return(
    <CircleLoader
      cssOverride={override}
      color='#36d7b7'
    />
  );
}
