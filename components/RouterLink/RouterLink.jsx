import React from 'react';
import Link from 'next/link';

/**
 * RouterLink component for Next.js navigation
 * @param {Object} props - Component props
 * @param {string | import('url').UrlObject} props.href - The URL to navigate to
 * @param {import('react').ReactNode} props.children - The content of the link
 * @param {string} [props.className] - Additional classes for the link
 * @param {boolean} [props.replace=false] - Replace the current history state instead of adding a new url into the stack
 * @param {boolean} [props.scroll=true] - Scroll to the top of the page after a navigation
 * @param {boolean} [props.prefetch=true] - Prefetch the page in the background
 * @returns {import('react').JSX.Element} The router link component
 */
function RouterLink({
    children,
    href,
    className = '',
    replace = false,
    scroll = true,
    prefetch = true,
    ...props
}) {
    return (
        <Link
            href={href}
            replace={replace}
            scroll={scroll}
            prefetch={prefetch}
            className={className}
            {...props}
        >
            {children}
        </Link>
    );
}

export default RouterLink;
