'use client';
import Button from '../components/Button/Button';
import Dialog from '../components/Dialog/Dialog';
import Input from '../components/Input/Input';
import { useDisclosure } from '../hooks/useDisclosure';

export default function Home() {
  const { isOpen, open, close } = useDisclosure();

  return (
    <main className="p-[16px]">
      <Button onClick={open}>Open Dialog</Button>
      <Dialog isOpen={isOpen} onClose={close}>
        <p>hello world</p>
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
    </main>
  );
}
