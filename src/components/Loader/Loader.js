import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import styles from './Loader.module.css';

export default function Spinner() {
  return (
    <div className={styles.Container}>
      <Loader
        className={styles.Loader}
        type="Circles"
        color="rgb(91, 202, 124)"
        height={100}
        width={100}
      />
    </div>
  );
}
