import { REDDIT_ID, ASJH_ID } from "../../constants/projects";
const SPECIAL_IDS = [REDDIT_ID, ASJH_ID];

const ImageIcon: React.FC<{ id: string; imageName: string }> = (props) => {
  if (!SPECIAL_IDS.includes(props.id)) {
    return (
      <img
        className="h-12 shadow-md rounded-md object-contain"
        src={`/icons/apps/${props.imageName}.png`}
      />
    );
  } else {
    return <img className="h-12 object-contain" src={`/icons/apps/${props.imageName}.png`} />;
  }
};
export default ImageIcon;
