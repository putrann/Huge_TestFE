import * as React from 'react';
import Icon from 'components/Icon';
import ROUTES from 'constants/routes';

export interface LinkProps {
  className?: string;
  msg: string;
  style?: any;
}

export function Link({ msg, className, style }: LinkProps) {
  return (
    <a className={className} href={ROUTES.GG} style={style} target="_blank">
      <div style={{ marginRight: '8px' }}>{msg} </div>
      <Icon type="right" />
    </a>
  );
}

export default Link;
