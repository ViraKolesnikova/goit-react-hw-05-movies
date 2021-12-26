import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

import styles from './LoaderMask.module.css';

export default function LoaderMask() {
  return (
    <div className={styles.Container}>
      <Loader
        className={styles.Loader}
        type="Circles"
        color="cadetblue"
        height={100}
        width={100}
      />
    </div>
  );
}
