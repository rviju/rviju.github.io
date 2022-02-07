function RupeeField({ value, onChange }: { value: string; onChange: (string) => void }) {
  return (
    <div className="w-full flex items-center flex-row mt-5">
      <span className="">₹</span>
      <input
        className=" w-full bg-transparent border-0 border-b-2  text-3xl 
                   border-green-500 focus:border-green-600 focus:ring-0"
        type="number"
        autoComplete="off"
        autoCorrect="off"
        aria-autocomplete="both"
        aria-haspopup="false"
        title="Name"
        placeholder="Type here..."
        value={value}
        onChange={(ev) => onChange(ev.target.value)}
        style={{ WebkitTapHighlightColor: 'transparent', outline: 'none' }}
      ></input>
    </div>
  );
}

export { RupeeField };
