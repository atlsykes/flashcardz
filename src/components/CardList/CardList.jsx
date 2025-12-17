import "./CardList.css";

const CardList = (props) => {
  const list: JSX.Element[] = [];
  const buildList = () => {
    for (let i = 0; i <= props.cardObj.listAnswer.length - 1; i++) {
      list.push(
        <li className="list-group-item" key={i}>
          {props.cardObj.listAnswer[i]}
        </li>
      );
      console.log(list);
    }
  };

  buildList();

  return (
    <div>
      <div className="cardList">
        <ul className="list-group list-group-flush">{list}</ul>
      </div>
    </div>
  );
};

export default CardList;
