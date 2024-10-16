import React, { SVGProps } from 'react';
import Image from 'next/image';

const navigation = [
  {
    name: 'X',
    href: 'https://x.com/abhishekrch',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
  },
  {
    name: 'Telegram',
    href: 'https://t.me/abhishekrch',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
      </svg>
    ),
  },
];

export default function Footer({
  isHomePage = false,
}: {
  isHomePage?: boolean;
}) {
  return (
    <footer className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-4 py-2 md:flex md:items-center md:justify-between md:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-x-8 md:order-2">
          {navigation.map((item) => (
            <div key={item.name}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary lg:text-lg"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon
                  className={`${
                    item.name === 'Telegram'
                      ? '-mr-1 mb-0.5 h-7 w-7'
                      : 'h-6 w-6'
                  } text-foreground hover:text-primary`}
                  aria-hidden="true"
                />
              </a>
            </div>
          ))}
        </div>
        {!isHomePage && (
          <div className="md:min-w-1/3 flex items-center justify-center gap-x-3 md:order-1">
            <div className="flex items-center gap-x-1">
              <Image
                src="/logo.png"
                alt="CoinLink"
                width={512}
                height={512}
                className="h-20 w-20 transition duration-300 ease-in-out hover:scale-90"
              />
            </div>
            <p className="text-center text-xl leading-5 text-foreground">
              &copy; 2024
            </p>
          </div>
        )}
      </div>
    </footer>
  );
}