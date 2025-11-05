# Project Information

- Next.js version: ^15.5.4
- Tailwind CSS version: ^4.1.13

# Coding Style

- When writing React code, always write types in JSDoc.

**JSDoc Examples**:
  ```javascript
  /**
   * User profile compon²ent
   * @param {Object} props - Component props
   * @param {string} props.name - User's display name
   * @param {string} props.email - User's email address
   * @param {function} props.onEdit - Callback when edit button is clicked
   * @returns {import('react').JSX.Element} The user profile component
   */
  function UserProfile({ name, email, onEdit }) {
    // Component implementation
  }
  ```

# Colors

The color palette is defined in `app/globals.css` using CSS variables. To use these colors with Tailwind CSS utility classes, they must be mapped in `tailwind.config.js`.