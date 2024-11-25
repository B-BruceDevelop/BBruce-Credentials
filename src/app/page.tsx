// src/app/page.tsx

import { cookies } from "next/headers";
import Header from "@/components/globals/header";

export default async function Home() {
  const cookieStore = await cookies();
  const error = cookieStore.get("error")?.value;

  return (
    <main className="flex w-full h-full flex-col items-center justify-center p-4">
      <Header nextPage="/welcome" visible={false} />
      <form
        action="/api/login"
        method="POST"
        className="flex flex-col items-center space-y-4"
      >
        <h1 className="text-2xl font-bold">Introduce el código</h1>
        <input
          name="code"
          type="password"
          placeholder="Código"
          className="border border-gray-300 p-2 rounded-md text-black"
        />
        {error && <p className="text-red-500">{decodeURIComponent(error)}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Acceder
        </button>
      </form>
    </main>
  );
}