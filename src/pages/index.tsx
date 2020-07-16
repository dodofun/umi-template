import React from 'react';
import styles from './index.less';

export default (props: any) => {
  console.log('page props', props)
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
