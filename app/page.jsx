import Button from '../components/Button/Button';

export default function Home() {
  return (
    <main className="p-[16px]">
      <div className="flex items-center gap-4 flex-wrap">
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
    </main>
  );
}