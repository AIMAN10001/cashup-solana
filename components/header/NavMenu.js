import {
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { classNames } from "../../utils/classNames";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { truncate } from "../../utils/string";
require("@solana/wallet-adapter-react-ui/styles.css");

const NavMenu = ({ connected, publicKey }) => {
  const menus = [
    {
      icon: ClockIcon,
      item: "Activity",
      current: true,
    },
    {
      icon: CurrencyDollarIcon,
      item: "Cash Card",
      current: false,
    },
    {
      icon: Cog6ToothIcon,
      item: "Settings",
      current: false,
    },
  ];

  return (
    <nav className="flex flex-1 items-center justify-center">
      <ul className="flex flex-col space-y-10">
        {menus.map(({ icon, item, current, action }, i) => (
          <NavMenuItem
            key={i}
            Icon={icon}
            item={item}
            current={current}
            action={action}
          />
        ))}
        <li className=" flex space-x-3 rounded-lg p-2 transition duration-300 hover:bg-[#07090e] hover:text-[#50586C]">
          <WalletMultiButton
            className="phantom-button"
            startIcon={
              <UserCircleIcon
                style={{ height: 24, width: 24, color: "#DCE2F0" }}
              />
            }
          >
            <span className="text-sm font-semibold text-[#DCE2F0]">
              {connected ? truncate(publicKey.toString()) : "Connect Wallet"}
            </span>
          </WalletMultiButton>
        </li>
      </ul>
    </nav>
  );
};

const NavMenuItem = ({ Icon, item, current, action }) => {
  return (
    <li
      onClick={action}
      className={classNames(
        "flex cursor-pointer space-x-3 rounded-lg p-2 transition duration-300 hover:bg-[#DCE2F0] hover:text-[#090d1a]",
        current ? "text-white" : "text-[#DCE2F0]",
        "font-semibold"
      )}
    >
      <Icon className="h-6 w-6 " />
      <span>{item}</span>
    </li>
  );
};

export default NavMenu;
