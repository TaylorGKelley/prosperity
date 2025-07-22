import Link from 'next/link';
import React from 'react';

const links = [
  {
    id: 0,
    title: 'Home',
    url: '/',
  },
  {
    id: 1,
    title: 'Budget',
    url: '/budget',
  },
  {
    id: 2,
    title: 'wallet',
    url: '/wallet',
  },
  {
    id: 3,
    title: 'account',
    url: '/account',
  },
] as const;

function NavBar() {
  return (
    <nav>
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
