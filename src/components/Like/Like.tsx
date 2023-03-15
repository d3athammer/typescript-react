import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { useState } from 'react';


interface Props{
  onClick: () => void;
}
const Like = ({onClick}:Props) => {
  const [status, setStatus] = useState(false)
  const toggle = () => {
    setStatus(!status)
    onClick();
  }

  if (status) return(<AiFillHeart onClick={toggle} color="ff6b81" size="20"/>)
  return <AiOutlineHeart onClick={toggle} size="20"/>;
}

export default Like;
