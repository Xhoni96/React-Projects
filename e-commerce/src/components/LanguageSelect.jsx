import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

import i18n from "../i18n";

const { languages } = i18n.options;
// const currLang = i18n.options.languages[i18n.language.split("-")[0]].nativeName;
const currLang = i18n.options.languages[i18n.language].nativeName;

// Possible ways to do it.👇

// import { useTranslation } from 'react-i18next';
// const { t, i18n } = useTranslation();
// i18n.changeLanguage(lng);

const Dropdown = () => {
  const [selectedLang, setSelected] = useState(currLang);

  return (
    <div className="w-52 h-full">
      <Listbox value={selectedLang} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative cursor-pointer w-full py-3 pl-3 pr-10 text-left bg-white rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selectedLang}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full z-10 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {Object.keys(languages).map((lng) => (
                <Listbox.Option
                  key={lng}
                  className={({ active }) =>
                    `${active ? "text-amber-900 bg-amber-100" : "text-gray-900"}
                            cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={languages[lng].nativeName}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {languages[lng].nativeName}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-amber-600" : "text-amber-600"
                          }
                                  absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Dropdown;
