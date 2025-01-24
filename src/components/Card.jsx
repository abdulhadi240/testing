import React from "react";

export default function Card() {
  return (
    <div className="w-64 h-[270px] mt-2 -mx-2.5 md:-mx-0 rounded-lg bg-white shadow-md overflow-hidden">
      {/* Top Section (Red Background) */}
      <div className="relative h-44 bg-[#c25353]">
        {/* Verified Badge in Top-Right */}
        <div className="absolute top-0 right-0">
          <div className="relative flex items-center justify-center">
            {/* Blue Circle with White Drop Shadow */}
            <div className="">
              {/* Checkmark Icon */}
              <svg
                width="74"
                height="74"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_498_352)">
                  <path
                    d="M35.8635 18.9216C36.982 17.6016 39.0178 17.6016 40.1363 18.9216L41.4839 20.5124C42.1698 21.3218 43.2541 21.6741 44.2848 21.4224L46.31 20.9276C47.9907 20.5171 49.6378 21.7138 49.7668 23.4391L49.922 25.5181C50.0011 26.5761 50.6713 27.4985 51.653 27.9006L53.5823 28.6908C55.1834 29.3465 55.8125 31.2828 54.9027 32.7544L53.8063 34.5276C53.2484 35.4301 53.2484 36.5702 53.8063 37.4727L54.9027 39.2459C55.8125 40.7174 55.1834 42.6538 53.5823 43.3094L51.653 44.0997C50.6713 44.5018 50.0011 45.4242 49.922 46.4821L49.7668 48.5612C49.6378 50.2864 47.9907 51.4832 46.31 51.0727L44.2848 50.5779C43.2541 50.3261 42.1698 50.6784 41.4839 51.4879L40.1363 53.0786C39.0178 54.3987 36.982 54.3987 35.8635 53.0786L34.5159 51.4879C33.83 50.6784 32.7457 50.3261 31.715 50.5779L29.6897 51.0727C28.0091 51.4832 26.362 50.2864 26.2331 48.5612L26.0778 46.4821C25.9987 45.4242 25.3285 44.5018 24.3468 44.0997L22.4175 43.3094C20.8165 42.6538 20.1873 40.7174 21.0971 39.2459L22.1935 37.4727C22.7514 36.5702 22.7514 35.4301 22.1935 34.5276L21.0971 32.7544C20.1873 31.2828 20.8165 29.3465 22.4175 28.6908L24.3468 27.9006C25.3285 27.4985 25.9987 26.5761 26.0778 25.5181L26.2331 23.4391C26.362 21.7138 28.0091 20.5171 29.6897 20.9276L31.715 21.4224C32.7457 21.6741 33.83 21.3218 34.5159 20.5124L35.8635 18.9216Z"
                    fill="#2081E2"
                  />
                </g>
                <path
                  d="M35.9 39.6754L32.225 36.0004L31 37.2254L35.9 42.1254L46.4 31.6254L45.175 30.4004L35.9 39.6754Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.666667"
                />
                <defs>
                  <filter
                    id="filter0_d_498_352"
                    x="0.777735"
                    y="-1.96836"
                    width="74.4445"
                    height="75.9367"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="9.95" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_498_352"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_498_352"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom (Content) Section */}
      <div className="p-4 mx-2">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-base font-semibold">VIRTUAL</h3>
          <div className="text-green-500 font-bold flex items-center">
            ▲ 0.59%
          </div>
        </div>

        <div className="flex gap-4 justify-between">
          <div>
            <p className="text-xs text-gray-500">Price</p>
            <p className="text-sm font-semibold">$2.74</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Market Cap</p>
            <p className="text-sm font-semibold">$1.7B</p>
          </div>
        </div>
      </div>
    </div>
  );
}
