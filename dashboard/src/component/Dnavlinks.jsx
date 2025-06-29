import {Link} from 'react-router'

const Navlink = ({
    name,
    path,
    icon
    
}) => {
  return (
    <li className='flex gap-2 py-2'>
        {icon}
        <Link to={path} >{name}</Link>
    </li>
  )
}

export default Navlink