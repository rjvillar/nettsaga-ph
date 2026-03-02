export default function BrowserMockup() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-border bg-white shadow-tactile">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border bg-paper px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-dark/10" />
          <div className="h-3 w-3 rounded-full bg-dark/10" />
          <div className="h-3 w-3 rounded-full bg-dark/10" />
        </div>
        <div className="mx-auto flex-1">
          <div className="mx-auto w-fit rounded-md bg-white px-4 py-1 text-xs text-muted border border-border">
            yourbusiness.com
          </div>
        </div>
      </div>
      {/* Placeholder content */}
      <div className="relative h-52 sm:h-64 bg-paper">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
          <div className="h-4 w-32 rounded-full bg-dark/10" />
          <div className="h-3 w-48 rounded-full bg-dark/5" />
          <div className="mt-2 h-8 w-24 rounded-full bg-dark/15" />
        </div>
      </div>
    </div>
  );
}
