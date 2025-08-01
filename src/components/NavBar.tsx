'use client';

import Link from 'next/link';
import React from 'react';

const links = [
  {
    id: 0,
    title: 'Home',
    url: '/',
  },
  // {
  //   id: 1,
  //   title: 'Budget',
  //   url: '/budget',
  // },
  // {
  //   id: 2,
  //   title: 'wallet',
  //   url: '/wallet',
  // },
  // {
  //   id: 3,
  //   title: 'account',
  //   url: '/account',
  // },
] as const;

function NavBar() {
  // const { user } = useAuth();

  return (
    <nav className="p-6">
      {/* {user ? (
        <span>Welcome, {`${user.firstName} ${user.lastName}`}!</span>
      ) : (
        <Link href={'/auth/login'}>Log in</Link>
      )} */}
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
