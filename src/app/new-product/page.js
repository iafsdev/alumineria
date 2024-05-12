'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  const toLogin = (e) => {
    router.push("/login")
  }

  return (
    <main>
      <button onClick={toLogin}>Log in</button>
    </main>
  );
}