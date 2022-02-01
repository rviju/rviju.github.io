import FullPageForm, { Frame } from '@/components/full-page-forms/FullPageForm';
import { useState } from 'react';

export default function ItCalculator() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="">
      {!showForm && (
        <button type="button" onClick={() => setShowForm(true)}>
          Start
        </button>
      )}
      {showForm && (
        <FullPageForm title="Nice" onClose={() => setShowForm(false)}>
          <Frame>
            <label className="font-extrabold">
              What's your name?
              <div className="w-full flex items-center flex-row mt-5">
                <span className="">₹</span>
                <input
                  className=" w-full bg-transparent border-0 border-b-2  text-3xl 
                   border-cyan-500 focus:border-cyan-600 focus:ring-0"
                  type="number"
                  autoComplete="off"
                  autoCorrect="off"
                  aria-autocomplete="both"
                  aria-haspopup="false"
                  title="Name"
                  placeholder="Type here..."
                  style={{ WebkitTapHighlightColor: 'transparent', outline: 'none' }}
                ></input>
              </div>
            </label>
          </Frame>
          <Frame>
            <label className="font-extrabold">
              What's your age?
              <div className="w-full flex items-center flex-row mt-5">
                <span className="">₹</span>
                <input
                  className=" w-full bg-transparent border-0 border-b-2  text-3xl 
                   border-cyan-500 focus:border-cyan-600 focus:ring-0"
                  type="number"
                  autoComplete="off"
                  autoCorrect="off"
                  aria-autocomplete="both"
                  aria-haspopup="false"
                  title="Name"
                  placeholder="Type here..."
                  style={{ WebkitTapHighlightColor: 'transparent', outline: 'none' }}
                ></input>
              </div>
            </label>
          </Frame>
          <Frame>
            <label className="font-extrabold">
              What's your location?
              <div className="w-full flex items-center flex-row mt-5">
                <span className="">₹</span>
                <input
                  className=" w-full bg-transparent border-0 border-b-2  text-3xl 
                   border-cyan-500 focus:border-cyan-600 focus:ring-0"
                  type="number"
                  autoComplete="off"
                  autoCorrect="off"
                  aria-autocomplete="both"
                  aria-haspopup="false"
                  title="Name"
                  placeholder="Type here..."
                  style={{ WebkitTapHighlightColor: 'transparent', outline: 'none' }}
                ></input>
              </div>
            </label>
          </Frame>
        </FullPageForm>
      )}
    </div>
  );
}
