import React from 'react';
import './styles.scss';
import { Link, useLocation, useResolvedPath } from 'react-router-dom';


interface IBreadcrumbs {
  path?: string;
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
      if (index < array.length - 1) {
        crumb += ' / '
      }
      return <Link key={currentLink} className={isActiveRoute ? 'active-crumb crumb' : 'crumb'} to={currentLink}>{crumb}</Link>
    })
  const url = useResolvedPath("").pathname;
  console.log('url', url);

  return (
    <div className='breadcrumbs'>
      {crumbs}
    </div>
  );
};

export default Breadcrumbs;

// loocs like

{/* <span>
      <Link to={match.url || ''} className={match.isExact ? 'breadcrumb active' : 'breadcrumb'}>
          {match.url.substr(match.url.lastIndexOf('/')+1, match.url.length)}
      </Link>
      <Route path={`${match.url}/:path`} component={Breadcrumbs} />
  </span> */}
