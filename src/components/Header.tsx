import { FiMenu } from 'solid-icons/fi'
import type { HeaderLink } from './types';

interface HeaderProps {
  links: HeaderLink[];
}

export default function Header({ links }: HeaderProps) {
  return (
    <nav class='bg-bg-400 h-[55px] text-lg font-semibold justify-around items-center flex py-6 px-4'>
      <div class='flex justify-between items-center md:justify-start gap-2 flex-1'>
        <a href='/'>
          <img width='55' height='28' src='/logo.svg' alt='Logo' />
        </a>
        <div class='flex md:justify-center items-center gap-2'>
          {/*<a target='_blank' href='https://www.tiktok.com/@emoporemilio'>
          
            <Icon
              name='ic:baseline-tiktok'
              class='subpixel-antialiased text-primary-500'
              size={24}
            />
          </a>
          <a target='_blank' href='https://www.github.com/emoporemilio'>
            <Icon
              name='mdi:github'
              class='subpixel-antialiased text-primary-200'
              size={24}
            />{' '}
          </a>
          <a target='_blank' href='https://www.youtube.com/emoporemilio'>
            <Icon
              name='mdi:youtube'
              class='subpixel-antialiased text-accent-500'
              size={24}
            />
          </a>*/}
        </div>
        <div class='md:hidden'>
          <FiMenu class='subpixel-antialiased text-primary-100 cursor-pointer' size={40} />
        </div>
      </div>
      <div class='hidden md:flex gap-8'>
        {links.map((link) => (
          <a class={link.class} href={link.href}>
            {link.text}
          </a>
        ))}
      </div>
    </nav>
  );
}
