import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';


const data = [
    {
        key: '1',
        fname: 'John',
        lname: 'Brown',
        major: 'Computer  Science (BS)',
        job: 'Apple',
        city: 'San Mateo',
    },
    {
        key: '2',
        fname: 'Joe',
        lname: 'Black',
        major: 'Business Administration (BS)',
        job: 'Google',
        city: 'San Francisco',
    },
    {
        key: '3',
        fname: 'Jim',
        lname: 'Green',
        major: 'History (BA)',
        job: 'Computer History Museum',
        city: 'Belmont',
    },
    {
        key: '4',
        fname: 'Jim',
        lname: 'Red',
        major: 'Communication (BA)',
        job: 'Comcast',
        city: 'Belmont',
    },
];

class Alumni extends React.Component {
    state = {
        searchText: '',
        searchedColumn: '',
    };

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
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    icon={<Icon type="search" />}

                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
                </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
                </Button>
            </div>
        ),
        filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text.toString()}
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
                title: 'First Name',
                dataIndex: 'fname',
                key: 'fname',
                width: '20%',
                ...this.getColumnSearchProps('fname'),
            },
            {
                title: 'Last Name',
                dataIndex: 'lname',
                key: 'lname',
                width: '20%',
                ...this.getColumnSearchProps('lname'),
            },
            {
                title: 'Major',
                dataIndex: 'major',
                key: 'major',
                width: '20%',
                ...this.getColumnSearchProps('major'),
            },
            {
                title: 'Current Company',
                dataIndex: 'job',
                key: 'job',
                width: '20%',
                ...this.getColumnSearchProps('job'),
            },
            {
                title: 'City',
                dataIndex: 'city',
                key: 'city',
                ...this.getColumnSearchProps('city'),
            },
        ];
        return <Table columns={columns} dataSource={data} />;
    }
}

export default Alumni;
