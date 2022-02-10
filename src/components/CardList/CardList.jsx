import React from 'react'

const CardList = props => {
  const list: JSX.Element[] = []
  const buildList = () => {
    for (let i = 0; i <= props.cardObj.listAnswer.length - 1; i++) {
      list.push(
        <li className='list-group-item' key={i}>
          {props.cardObj.listAnswer[i]}
        </li>
      )
    }
  }

  buildList()

  return (
    <div>
      <div className='card' style={{ width: '40rem', textAlign: 'left' }}>
        <ul className='list-group list-group-flush'>{list}</ul>
      </div>
    </div>
  )
}

export default CardList
