import React, { useEffect, useRef, useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import classes from './Menu.module.css';
import { ReactComponent as Person } from '../../assets/svgs/person.svg'
import { ReactComponent as Power } from '../../assets/svgs/power.svg'
import { remove } from '../../functions/session'

const Menu = (props: any) => {
  const menu = useRef<HTMLDivElement>(null)
  const [className, setClassName] = useState<any>(classes.isClose)

  const onClick = () => {
    remove();
  }
  useEffect(() => {
    if (menu.current) {
      console.log('menu')
      console.log(props.open)
      props.open ? setClassName(classes.isOpen) : setClassName(classes.isClose)
    }
  })
  return (
    <div ref={menu} className={`${classes.menu} ${className}`}>
      <Person className={classes.icon} />
      <Power onClick={() => onClick()} className={classes.icon} />
    </div>
  )
};

export default Menu;