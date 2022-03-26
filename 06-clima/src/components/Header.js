import React from 'react'

const Header = (props) => {

    const { titulo } = props;

  return (
    <nav>
        <div className='nav-wrapper light-blue darken-2'>
            <a href='#!' className='brand-logo'>{titulo}</a>
        </div>
    </nav>
  )
}

export default Header