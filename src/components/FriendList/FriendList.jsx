import { default as PropTypes } from 'prop-types';
import { FriendListStyled } from './FriendList.styled';
import FriendListItem from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyled>
      {friends.map(item => (
        <FriendListItem key={item.id} name={item.name} avatar={item.avatar} />
      ))}
    </FriendListStyled>
  );
};

 

FriendList.propTypes = { friends: PropTypes.arrayOf(PropTypes.object) };
