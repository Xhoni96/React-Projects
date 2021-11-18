import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";

import i18n from "../i18n";
import Select from "./Custom/Select";

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
    <Select label={selectedLang} onChange={setSelected}>
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
                  className={`${active ? "text-amber-600" : "text-amber-600"}
                                  absolute inset-y-0 left-0 flex items-center pl-3`}
                >
                  <CheckIcon className="w-5 h-5" aria-hidden="true" />
                </span>
              ) : null}
            </>
          )}
        </Listbox.Option>
      ))}
    </Select>
  );
};

export default Dropdown;
