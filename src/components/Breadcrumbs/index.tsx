import React from 'react';
import './styles.scss';
import { Link, useLocation, useResolvedPath } from 'react-router-dom';
import { Navigations } from '../../constants/Navigations';


interface IBreadcrumbs {
  pathname?: string;
  title?: string;
  url?: string;
}

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  let currentLink = '';
  const crumbs = pathname.split('/')
    .filter(Boolean)
    .map((crumb, index, array) => {
      const isActiveRoute = index === array.length - 1;
      currentLink += '/' + crumb;
      crumb = Navigations[crumb as keyof typeof Navigations];
      if (index < array.length - 1) {
        crumb += ' / '
      }
      console.log('crumb', crumb);

      return <Link key={currentLink} className={isActiveRoute ? 'active-crumb crumb' : 'crumb'} to={currentLink}>{crumb}</Link>
    })


  return (
    <div className='breadcrumbs'>
      {crumbs}
    </div>
  );
};

export default Breadcrumbs;
