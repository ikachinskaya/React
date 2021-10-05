/*
1. Прогрузка данных: что грузить или как грузить
2. Отправить данные куда-то, где они отрисуются
3. За отрисовку этих данных он не отвечает
*/

import { Component } from "react";
import PropTypes from "prop-types";

class DataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null,
    };
  }

  load() {
    this.setState({
      isLoading: true,
    });
    const { loadData } = this.props;
    loadData()
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((error) => {
        this.setState({
          error,
          isLoading: false,
        });
      });
  }

  componentDidMount() {
    this.load();
  }

  render() {
    const { children } = this.props;
    return children(this.state);
  }
}

DataProvider.propTypes = {
  loadData: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};
export default DataProvider;
