import React,{Component} from 'react';

class Table extends React.Component {

  render() {

    const items = this.props.items;

    return (
    <div id="Table">
    <table class="table table-hover">
    <tbody>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Nickname</th>
      </tr>
      {items.map(items => {
                return (
                  <tr>
                    <td>{items.name}</td>
                    <td>{items.age}</td>
                    <td>{items.nickname}</td>             
                  </tr>
                );
              })}
      </tbody>
    </table>
    </div>
    );
  }
}
export default Table;
