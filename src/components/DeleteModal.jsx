import React from "react";

function DeleteModal() {
  return (
    <>
      <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
        <div class="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
          <div class="w-full">
            <div class="m-8 my-20 max-w-[400px] mx-auto">
              <div class="mb-8">
                <h1 class="mb-4 text-3xl font-extrabold">
                  Turn on notifications
                </h1>
                <p class="text-gray-600">
                  Get the most out of Twitter by staying up to date with what's
                  happening.
                </p>
              </div>
              <div class="space-y-4">
                <button class="p-3 bg-black rounded-full text-white w-full font-semibold">
                  Allow notifications
                </button>
                <button class="p-3 bg-white border rounded-full w-full font-semibold">
                  Skip for now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
