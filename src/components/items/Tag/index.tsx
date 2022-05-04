import { TagModel } from "models/Tag.model";
import { useAppSelector } from "store";

type Props = {
  tag: TagModel;
  index: number;
  onClick: (tag: TagModel) => void;
  isSelected: boolean;
};

const Tag = (props: Props) => {
  const { darkMode } = useAppSelector((s) => s.settings);
  const handleClick = () => {
    props.onClick(props.tag);
  };

  return (
    <div
      onClick={handleClick}
      key={props.tag.value}
      className={`tag-container ${
        props.isSelected
          ? "!border-primary text-primary shadow-xl"
          : darkMode
          ? "!border-gray-light"
          : ""
      } ${props.index === 0 ? "mx-0" : "ml-2"}`}>
      <p className="text-lg">{props.tag.label}</p>
    </div>
  );
};

export default Tag;
