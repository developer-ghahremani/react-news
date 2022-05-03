import { ISwitch } from "components/general";
import { MenuIcon, MoonIcon, SunIcon } from "components/icons";
import { useI18Next } from "i18n";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store";
import { toggleDarkMode } from "store/settings";
import menu from "./menu";

const Navbar = () => {
  const { t } = useI18Next();
  const { darkMode } = useAppSelector((s) => s.settings);
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex">
        <MenuIcon className="sm:hidden block" size={22} />
        <div className="sm:flex hidden">
          {menu.map((item, index) => (
            <Link to={item.link}>
              <p
                key={item.title}
                className={`${index === 0 ? "mx-0" : "ml-2"}`}>
                {t(`general.${item.title}`)}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <p>
          {t("general.mode", {
            mode: darkMode ? t("general.dark") : t("general.light"),
          })}
        </p>
        <ISwitch
          checked={darkMode}
          onChange={handleChange}
          size="medium"
          icon={
            <MoonIcon className="text-secondary bg-gray-light w-5 h-5 p-1 rounded-full" />
          }
          checkedIcon={
            <SunIcon className="text-secondary bg-gray-light w-5 h-5 p-1 rounded-full" />
          }
        />
      </div>
    </div>
  );
};

export default Navbar;
