import React, { Component } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import '../../css/ZiFu.css';

class DashboardRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleStartPractice = (e) => {
    e.preventDefault();
    const { history } = this.props
    history.push('/learn')
  }

  render() {
    return (
        <section>
          <Dashboard />
        </section>
    );
  }
}
 
export default DashboardRoute
