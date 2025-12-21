'use client';
import Button from '../components/Button/Button';
import Dialog from '../components/Dialog/Dialog';
import Input from '../components/Input/Input';
import Textarea from '../components/Textarea/Textarea';
import { useDisclosure } from '../hooks/useDisclosure';

import { FRONT_ROUTER } from '../constants/routers/front.router';

/**
 * Home page component
 * @returns {import('react').JSX.Element} The home page component
 */
export default function Home() {
  const { isOpen: isFullscreenOpen, open: openFullscreen, close: closeFullscreen } = useDisclosure();
  const { isOpen: isRegularOpen, open: openRegular, close: closeRegular } = useDisclosure();

  return (
    <main className="p-[16px]">
      <div className="flex gap-4">
        <Button onClick={openFullscreen}>Open Fullscreen Dialog</Button>
        <Button onClick={openRegular}>Open Regular Dialog</Button>
        <Button href={FRONT_ROUTER.users.create()} colorPalette="primary">Create User</Button>
      </div>

      <Dialog isOpen={isFullscreenOpen} onClose={closeFullscreen} fullscreen={true}>
        <p>This is a fullscreen dialog</p>
      </Dialog>

      <Dialog isOpen={isRegularOpen} onClose={closeRegular} fullscreen={false}>
        <p>This is a regular dialog</p>
      </Dialog>
      <div className="flex items-center gap-4 flex-wrap mt-4">
        <Button size="xs" variant="flat">Click me</Button>
        <Button size="sm" variant="flat">Click me</Button>
        <Button size="md" variant="flat">Click me</Button>
        <Button size="lg" variant="flat">Click me</Button>
        <Button size="xl" variant="flat">Click me</Button>
      </div>
      <div className="flex items-center gap-4 mt-4 flex-wrap">
        <Button size="xs" variant="outline">Click me</Button>
        <Button size="sm" variant="outline">Click me</Button>
        <Button size="md" variant="outline">Click me</Button>
        <Button size="lg" variant="outline">Click me</Button>
        <Button size="xl" variant="outline">Click me</Button>
      </div>
      <div className="flex items-center gap-4 mt-4 flex-wrap">
        <Input size="xs" placeholder="Extra Small" />
        <Input size="sm" placeholder="Small" />
        <Input size="md" placeholder="Medium" />
        <Input size="lg" placeholder="Large" />
        <Input size="xl" placeholder="Extra Large" />
      </div>
      <div className="flex items-center gap-4 mt-4 flex-wrap">
        <Textarea size="xs" placeholder="Extra Small" />
        <Textarea size="sm" placeholder="Small" />
        <Textarea size="md" placeholder="Medium" />
        <Textarea size="lg" placeholder="Large" />
        <Textarea size="xl" placeholder="Extra Large" />
      </div>
    </main>
  );
}
