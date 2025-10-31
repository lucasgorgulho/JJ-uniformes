// SubMenu.tsx atualizado
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

interface SubMenuProps {
  items: { label: string; path: string }[];
  onItemClick: () => void;
}

const SubMenu = ({ items, onItemClick }: SubMenuProps) => {
  return (
    <ul className="pl-4 bg-gray-800 w-full">
      {items.map((subItem, index) => (
        <li key={index} className="border-b border-gray-700">
          <Link href={subItem.path} className="block py-2 px-4 flex items-center justify-between hover:bg-gray-700" onClick={onItemClick}>
            {subItem.label}
            <FiChevronRight className="text-gray-400" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
