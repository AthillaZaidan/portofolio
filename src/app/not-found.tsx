import Link from "next/link";

export default function NotFound() {
  return (
    <main className="column flex min-h-svh flex-col justify-center">
      <div className="max-w-[35rem]">
        <h1 className="text-display font-semibold tracking-[-0.035em]">Not here</h1>
        <p className="mt-6 text-lead">This page does not exist. The rest of the site does.</p>
        <Link
          href="/"
          className="mt-10 inline-block rounded-[4px] bg-accent px-5 py-3 text-body font-medium text-accent-ink transition-transform duration-200 hover:-translate-y-0.5"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
