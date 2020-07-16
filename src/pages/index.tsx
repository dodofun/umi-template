import React from 'react';
import './index.less';

export default (props: any) => {
  console.log('page props', props)
  return (
    <div className="index">
      <h1 className="title">Page index</h1>
    </div>
  );
}
