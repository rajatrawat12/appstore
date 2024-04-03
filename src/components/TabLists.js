import "./TabLists.css";
const TabLists = (props) => {
  const { each, clickTabItem,isActive} = props;
  const { displayText, tabId } = each;

  const onCatogery = () => {
    clickTabItem(displayText);
  };
 const activeTabBtnClassName = isActive ? "active-tab-btn": ''
  return (
   
    <p
      className={`tab-item-container ${activeTabBtnClassName}`}
      onClick={(event) => {
        onCatogery();
      }}
    >
      {displayText}
    </p>
   
  );
};
export default TabLists;
