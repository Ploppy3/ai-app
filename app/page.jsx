'use client';
import Button from '../components/Button/Button';
import Dialog from '../components/Dialog/Dialog';
import Input from '../components/Input/Input';
import Textarea from '../components/Textarea/Textarea';
import { Popover, PopoverTrigger, PopoverContent, PopoverCloseButton } from '../components/Popover/Popover';
import { useDisclosure } from '../hooks/useDisclosure';

import { FRONT_ROUTER } from '../constants/routers/front.router';

/**
 * Home page component
 * @returns {import('react').JSX.Element} The home page component
 */
export default function Home() {
  const { isOpen: isFullscreenOpen, open: openFullscreen, close: closeFullscreen } = useDisclosure();
  const { isOpen: isRegularOpen, open: openRegular, close: closeRegular } = useDisclosure();
  const { isOpen: isNestedOpen, open: openNested, close: closeNested } = useDisclosure();
  const { isOpen: isPopoverOpen, open: openPopover, close: closePopover } = useDisclosure();

  return (
    <main className="p-[16px] flex flex-col gap-10">
      <div className="flex gap-4">
        <Button onClick={openFullscreen}>Open Fullscreen Dialog</Button>
        <Button onClick={openRegular}>Open Regular Dialog</Button>
        <Button href={FRONT_ROUTER.users.create()} colorPalette="primary">Create User</Button>
      </div>

      <Dialog isOpen={isFullscreenOpen} onClose={closeFullscreen} fullscreen={true}>
        <p>This is a fullscreen dialog</p>
      </Dialog>

      <Dialog isOpen={isRegularOpen} onClose={closeRegular} fullscreen={false}>
        <div className="flex flex-col gap-4">
          <p>This is a regular dialog</p>
          <Button onClick={openNested}>Open Nested Dialog</Button>
        </div>
      </Dialog>

      <Dialog isOpen={isNestedOpen} onClose={closeNested}>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold">Nested Dialog</h3>
          <p>This dialog is opened from another dialog.</p>
          <Button onClick={closeNested}>Close Nested</Button>
        </div>
      </Dialog>

      <section>
        <h2 className="text-xl font-bold mb-4">Popover Examples</h2>
        <div className="flex gap-4 flex-wrap">
          {/* Controlled with useDisclosure */}
          <div className="p-4 border rounded bg-white">
            <h2 className="text-lg font-semibold mb-2">Controlled (useDisclosure)</h2>
            <Popover isOpen={isPopoverOpen} onClose={closePopover} placement="bottom">
              <PopoverTrigger>
                <Button onClick={() => (isPopoverOpen ? closePopover() : openPopover())}>
                  {isPopoverOpen ? 'Close' : 'Open'} Controlled
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-4">
                <PopoverCloseButton />
                <div className="font-medium text-lg mb-2">Controlled Popover</div>
                <p className="text-gray-600">
                  This popover is controlled by useDisclosure.
                </p>
                <div className="mt-4 flex justify-end">
                  <Button size="sm" variant="ghost" onClick={closePopover}>Dismiss</Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Uncontrolled */}
          <div className="p-4 border rounded bg-white">
            <h2 className="text-lg font-semibold mb-2">Uncontrolled</h2>
            <Popover placement="right">
              <PopoverTrigger>
                <Button colorPalette="gray">
                  Open Uncontrolled
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-4">
                <div className="font-semibold border-b pb-2 mb-2">Self-managed State</div>
                <p className="text-sm">
                  This popover manages its own open/closed state internally.
                </p>
              </PopoverContent>
            </Popover>
          </div>

          {/* Match Width */}
          <div className="p-4 border rounded bg-white">
            <h2 className="text-lg font-semibold mb-2">Match Width</h2>
            <Popover placement="bottom-start" matchWidth>
              <PopoverTrigger>
                <Button className="w-full justify-between">
                  Full Width Trigger
                  <span className="ml-2">▼</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-4">
                <div className="text-center">same width as trigger</div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </section>

      <div className="flex items-center gap-4 flex-wrap">
        <Button size="xs" variant="flat">Click me</Button>
        <Button size="sm" variant="flat">Click me</Button>
        <Button size="md" variant="flat">Click me</Button>
        <Button size="lg" variant="flat">Click me</Button>
        <Button size="xl" variant="flat">Click me</Button>
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <Button size="xs" variant="outline">Click me</Button>
        <Button size="sm" variant="outline">Click me</Button>
        <Button size="md" variant="outline">Click me</Button>
        <Button size="lg" variant="outline">Click me</Button>
        <Button size="xl" variant="outline">Click me</Button>
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <Input size="xs" placeholder="Extra Small" />
        <Input size="sm" placeholder="Small" />
        <Input size="md" placeholder="Medium" />
        <Input size="lg" placeholder="Large" />
        <Input size="xl" placeholder="Extra Large" />
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <Textarea size="xs" placeholder="Extra Small" />
        <Textarea size="sm" placeholder="Small" />
        <Textarea size="md" placeholder="Medium" />
        <Textarea size="lg" placeholder="Large" />
        <Textarea size="xl" placeholder="Extra Large" />
      </div>
    </main>
  );
}
