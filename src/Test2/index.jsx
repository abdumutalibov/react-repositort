import React from 'react';
import ReactDOM from 'react-dom';
  
  class UserRow extends React.Component {
    render() {
      const user = this.props.user;
      const name = user.name;
  
      return (
        <tr>
          <td>{name}</td>
          <td>{user.system}</td>
        </tr>
      );
    }
  }
  
  class UserTable extends React.Component {
    render() {
      const filterText = this.props.filterText;  
      const rows = [];  
      this.props.users.forEach((user) => {
        console.log(this.props.users);
        if (user.name.indexOf(filterText) === -1) {
        //   console.log('filter text = -1')
          return;
        }
        rows.push(
          <UserRow
            user={user}
            key={user.name}
          />
        );
      });
  
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>system</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }
  
  class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
    
    handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }
    
    render() {
      return (
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
          />
        </form>
      );
    }
  }
  
  class FilterableUserTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: ''      
    };
      
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
  
    handleFilterTextChange(filterText) {
        console.log(filterText);
      this.setState({
        filterText: filterText
      });
    }
    
    render() {
      return (
        <div>
          <SearchBar
            filterText={this.state.filterText}
            onFilterTextChange={this.handleFilterTextChange}
          />
          <UserTable
            users={this.props.users}
            filterText={this.state.filterText}
          />
        </div>
      );
    }
  }
  
  
  const USERS = [
    {name: 'lJames', system: 'test@testy.com'},
    {name: 'lJames', system: 'test@tester.com'},
    {name: 'lBird', system: 'lbird@moretesting.com'},
    {name: 'mJordan', system: 'lbird@somemore.com'},
    {name: 'tester', system: 'mjordan@nba.com'},
  ];
  
  ReactDOM.render(
    <FilterableUserTable users={USERS} />,
    document.getElementById('container')
  );
  
  