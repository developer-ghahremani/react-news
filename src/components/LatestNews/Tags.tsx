import { TagItem } from "components/items";
import { TagModel } from "models/Tag.model";
import { newsTags } from "constant";
import { useLatestNewsContext } from "./context";

const Tags = () => {
  const { dispatch, state } = useLatestNewsContext();

  const handleTagClick = (payload: TagModel) => {
    dispatch({ type: "setTag", payload });
  };

  return (
    <div className="flex flex-wrap mt-8">
      {newsTags.map((tag, index) => (
        <TagItem
          isSelected={tag.value === state.tag.value}
          onClick={handleTagClick}
          tag={tag}
          index={index}
        />
      ))}
    </div>
  );
};

export default Tags;
