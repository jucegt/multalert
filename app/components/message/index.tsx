import Success from '~/components/success';
import Warning from '~/components/warning';

import { IMessage } from './types';

const Message = ({ message, total }: IMessage) => {
  return (
    <>
      {message ? (
        total ? (
          <Warning>{message}</Warning>
        ) : (
          <Success>{message}</Success>
        )
      ) : null}
    </>
  );
};

export default Message;
