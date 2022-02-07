function ErrorField({ children }: { children: string }) {
  return <div className="text-lg font-extralight text-red-600">⛔{children}</div>;
}

export { ErrorField };
