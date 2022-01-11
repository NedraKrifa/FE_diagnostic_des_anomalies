import React, { Component } from "react";
import { Table, Input, Button, Space, Row, Col } from 'antd';
import { TitleH1 } from '../../../../App.styled';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import EditingRole from "./EditingRole";
import { getAllUsers } from "../../../../Redux/actions/Users/usersActions";
class AdministrationBody extends Component {
    state = {
    searchText: '',
    searchedColumn: '',
    };

    componentDidUpdate() {
        this.props.getAllUsers()
      }

    getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
        <Input
            ref={node => {
            this.searchInput = node;
            }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
            <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
            >
            Search
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
            </Button>
            <Button
            type="link"
            size="small"
            onClick={() => {
                confirm({ closeDropdown: false });
                this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
                });
            }}
            >
            Filter
            </Button>
        </Space>
        </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
        record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
        if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
        }
    },
    render: text =>
        this.state.searchedColumn === dataIndex ? (
        <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[this.state.searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
        />
        ) : (
        text
        ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
        searchText: selectedKeys[0],
        searchedColumn: dataIndex,
    });
    };

    handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
    };

    render() {
    const columns = [
      {
        title: "Username",
        dataIndex: "username",
        key: "username",
        width: "30%",
        ...this.getColumnSearchProps("username"),
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
        width: "40%",
        ...this.getColumnSearchProps("email"),
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
        ...this.getColumnSearchProps("role"),
        render: (role,user) =>
          <EditingRole role={role} user={user} />
      },
    ];
    //console.log(this.props.users);
    return (
        <>
        <Row justify="space-between" style={{ marginBottom: "25px" }}>
          <Col>
            <TitleH1>Users List</TitleH1>
          </Col>
        </Row>
        <Table columns={columns} dataSource={this.props.users} />
      </>
    )
    }
}

const mapStateToProps = (state) => ({
    users: state.users.users,
  });

export default connect(mapStateToProps,{getAllUsers})(AdministrationBody);