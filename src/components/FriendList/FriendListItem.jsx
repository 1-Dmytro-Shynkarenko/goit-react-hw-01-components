import { default as PropTypes } from 'prop-types';

import {
  AvatarImg,
  FriendListItemStyled,
  FriendName,
  IsOnlineIndicator,
} from './FriendList.styled';

const FriendListItem = ({
  name,
  avatar,
  isOnline,
}) => {
  return (
    <FriendListItemStyled>
      <IsOnlineIndicator isOnline={isOnline} />
      <AvatarImg src={avatar} alt={name} />
      <FriendName>{name}</FriendName>
    </FriendListItemStyled>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;