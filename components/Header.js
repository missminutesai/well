import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-xl font-bold">Eternal Loop</div>
      <nav className="space-x-4">
        <Link href="/login" className="text-gray-700 hover:text-primary">Login</Link>
        <Link href="/signup" className="text-gray-700 hover:text-primary">Sign up</Link>
      </nav>
    </header>
  );
}