import { Link } from '@remix-run/react';
import { AnchorText, AnchorWrapper } from './style';
import { IAnchor } from './types';

const Anchor = ({ href, variant = 'primary', icon, children }: IAnchor) => {
  return (
    <AnchorWrapper variant={variant} as="div">
      <Link to={href}>
        {icon}
        {children ? <AnchorText>{children}</AnchorText> : null}
      </Link>
    </AnchorWrapper>
  );
};

export default Anchor;
